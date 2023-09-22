const chromeLauncher = require("chrome-launcher");
import { resolve } from "path";
import { writeFileSync } from "fs";
import { RunnerResult } from "lighthouse";

const url = process.env["baseURL"];

if (!url) {
  throw new Error("URL missing");
}

const isPreProduction = url !== "https://mymermaidtales.com";

const opts = {
  output: "html",
  chromeFlags: [
    "--headless",
    "--no-sandbox",
    "--disable-extensions",
    "--disable-translate",
    "--disable-default-apps",
    "--no-first-run",
  ],
};

const thresholdsByCategory = {
  performance: 0.9,
  accessibility: 1,
  "best-practices": 0.9,
  seo: isPreProduction ? 0.9 : 1,
  pwa: 0,
};

const range = (size: number) => [...Array(size).keys()];

const totalScores = (runnerResults: RunnerResult[]) =>
  runnerResults.reduce(
    (totals, result) => {
      return Object.entries(result.lhr.categories).reduce(
        (subTotal, [categoryName, category]) => ({
          ...subTotal,
          [categoryName]: (subTotal[categoryName] || 0) + category.score,
        }),
        totals
      );
    },
    {} as Record<string, number>
  );

const averageScores = (scores: Record<string, number>, count: number) =>
  Object.entries(scores).reduce(
    (
      averageScores: Record<string, number>,
      [category, total]: [string, number]
    ) => ({
      ...averageScores,
      [category]: total / count,
    }),
    {}
  );

const run = async (url: string, opts) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: opts.chromeFlags });
  opts.port = chrome.port;
  const { default: runner } = await import("lighthouse");
  const maxIterations = 6;
  const scores = [];
  for (let i = 0; i < maxIterations; i++) {
    scores.push(await runner(url, opts));
  }
  const averages = averageScores(totalScores(scores), maxIterations);
  console.log(
    `Thresholds\n`,
    JSON.stringify(thresholdsByCategory, null, 2),
    `\nAveraged of ${maxIterations} runs\n`,
    JSON.stringify(averages, null, 2)
  );
  chrome.kill();
  const reportFilePath = resolve(process.cwd(), "..", ".lighthouse.html");
  writeFileSync(reportFilePath, "lighthouse");
  Object.keys(averages).forEach((categoryName) => {
    if (averages[categoryName] < thresholdsByCategory[categoryName]) {
      throw new Error(
        `Failed to meet ${categoryName} threshold. Score ${averages[categoryName]} does not meet threshold ${thresholdsByCategory[categoryName]}`
      );
    }
  });
};

run(url, opts).catch((error) => {
  console.error(error);
  process.exit(1);
});

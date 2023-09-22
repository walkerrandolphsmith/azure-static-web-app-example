import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import configurationClientFactory from "../utilities/configurationClientFactory";
import getValue from "../utilities/configuration";

export async function healthCheck(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);
  const slotName = getValue("APPSETTING_WEBSITE_SLOT_NAME");

  let configurationHealthCheck = "";

  try {
    const configurationClient = configurationClientFactory();
    configurationHealthCheck = (
      await configurationClient.getConfigurationSetting({
        key: "configurationHealthCheck",
      })
    ).value;
  } catch (error) {
    return {
      status: 500,
      jsonBody: {
        reason: "unhealthy",
        slotName,
        url: request.url,
        configurationHealthCheck: false,
      },
    };
  }

  return {
    status: 200,
    jsonBody: {
      reason: "healthy",
      slotName,
      url: request.url,
      configurationHealthCheck,
    },
  };
}

app.http("healthCheck", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: healthCheck,
});

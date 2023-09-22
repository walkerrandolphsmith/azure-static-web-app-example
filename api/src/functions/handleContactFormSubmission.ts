import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { v4 as uuid } from "uuid";
import { ContactFormSubmissionMessage } from "messages";
import getValue from "../utilities/configuration";
import serviceBusClientFactory from "../utilities/serviceBusClientFactory";

type RequestBody = {
  email: string;
  isJavaScriptEnabled: boolean;
};

const getRequestBody = async (request: HttpRequest): Promise<RequestBody> => {
  const contentType = request.query.get("type");
  if (contentType === "application/json")
    return (await request.json()) as RequestBody;

  const formData = await request.formData();
  return {
    email: formData.get("email") as string,
    isJavaScriptEnabled: false,
  };
};

const processSubmission = async (body: Partial<RequestBody>) => {
  const { email } = body;
  const client = serviceBusClientFactory();
  const topicName = "sbt-contact-form-submission";
  const sender = client.createSender(topicName);
  const id = uuid();
  const messageBody: ContactFormSubmissionMessage = {
    environment: getValue("APPSETTING_WEBSITE_SLOT_NAME"),
    messageId: id,
    email,
  };
  const message = {
    messageId: id,
    contentType: "application/json",
    body: messageBody,
  };
  return await sender.sendMessages(message);
};

export async function handleContactFormSubmission(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);
  let body: Partial<RequestBody> = {};
  try {
    body = await getRequestBody(request);
  } catch (error) {
    return {
      status: 400,
      jsonBody: { reason: error.message },
    };
  }

  const origin = process.env["WEB_ORIGIN"];

  const { email, isJavaScriptEnabled } = body;
  try {
    await processSubmission(body);
    if (!isJavaScriptEnabled)
      return {
        status: 302,
        headers: {
          Location: `${origin}/contactus#contact-us-submission-message`,
        },
      };

    return {
      status: 200,
      jsonBody: {
        reason: "Form submitted successfully",
        email,
      },
    };
  } catch (error) {
    if (!isJavaScriptEnabled) {
      return {
        status: 302,
        headers: {
          Location: `${origin}/contactuserror#contact-us-submission-message`,
        },
      };
    }
    return {
      status: 500,
      jsonBody: { reason: "Failed to create record", message: error.message },
    };
  }
}

app.http("handleContactFormSubmission", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: handleContactFormSubmission,
});

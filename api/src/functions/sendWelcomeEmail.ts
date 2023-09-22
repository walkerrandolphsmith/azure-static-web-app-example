import { InvocationContext, app } from "@azure/functions";
import azureResources from "infra";
import { ContactFormSubmissionMessage } from "messages";
import emailClientFactory from "../utilities/emailClientFactory";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import WelcomeEmail from "../templates/WelcomeEmail";

export const handler = async (
  serviceBusMessage: ContactFormSubmissionMessage,
  _: InvocationContext
) => {
  const emailClient = await emailClientFactory();
  const message = {
    senderAddress: "DoNotReply@mymermaidtales.com",
    content: {
      subject: "My Mermaid Tales",
      html: renderToString(
        createElement(WelcomeEmail, { email: serviceBusMessage.email })
      ),
    },
    recipients: {
      to: [
        {
          address: serviceBusMessage.email,
          displayName: "",
        },
      ],
    },
  };

  const poller = await emailClient.beginSend(message);
  await poller.pollUntilDone();
};

app.serviceBusTopic("sendWelcomeEmail", {
  handler,
  topicName: azureResources.serviceBusTopicContactFormSubmission,
  connection: "SERVICE_BUS_CONNECTION_STRING",
  subscriptionName: "sbts-email-customer",
});

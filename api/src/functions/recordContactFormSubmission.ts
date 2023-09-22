import { InvocationContext, app } from "@azure/functions";
import azureResources from "infra";
import { ContactFormSubmissionMessage } from "messages";
import storageTableClientFactory from "../utilities/storageTableClientFactory";

type ContactRequest = {
  email: string;
};

export const handler = async (
  serviceBusMessage: ContactFormSubmissionMessage,
  _: InvocationContext
) => {
  const client = await storageTableClientFactory();
  return await client.createEntity<ContactRequest>({
    partitionKey: serviceBusMessage.environment,
    rowKey: serviceBusMessage.messageId,
    email: serviceBusMessage.email,
  });
};

app.serviceBusTopic("recordContactFormSubmission", {
  handler,
  topicName: azureResources.serviceBusTopicContactFormSubmission,
  connection: "SERVICE_BUS_CONNECTION_STRING",
  subscriptionName: "sbts-record-contact-form-submission",
});

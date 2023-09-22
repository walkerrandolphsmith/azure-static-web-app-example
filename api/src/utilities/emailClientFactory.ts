import { EmailClient } from "@azure/communication-email";
import { DefaultAzureCredential } from "@azure/identity";
import azureResources from "infra";

const emailClientFactory = async () => {
  const credential = new DefaultAzureCredential();
  return new EmailClient(
    `https://${azureResources.communicationServicesName}.communication.azure.com`,
    credential
  );
};

export default emailClientFactory;

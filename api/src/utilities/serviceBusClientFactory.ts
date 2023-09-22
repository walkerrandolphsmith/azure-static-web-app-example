import { ServiceBusClient } from "@azure/service-bus";
import { DefaultAzureCredential } from "@azure/identity";
import azureResources from "infra";

const serviceBusClientFactory = () => {
  const fullyQualifiedNamespace = `${azureResources.serviceBusNamespace}.servicebus.windows.net`;
  const credential = new DefaultAzureCredential();
  return new ServiceBusClient(fullyQualifiedNamespace, credential);
};

export default serviceBusClientFactory;

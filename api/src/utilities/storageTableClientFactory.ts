import { TableClient } from "@azure/data-tables";
import { DefaultAzureCredential } from "@azure/identity";
import azureResources from "infra";

const storageTableClientFactory = async () => {
  const credential = new DefaultAzureCredential();
  const tableName = "outBox";

  return new TableClient(
    `https://${azureResources.storageAccountName}.table.core.windows.net`,
    tableName,
    credential
  );
};

export default storageTableClientFactory;

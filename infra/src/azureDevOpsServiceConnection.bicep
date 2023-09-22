param storageAccountName string

resource azureDevOpsConnectionServicePrinipalResource 'Microsoft.AzureAD/servicePrincipals@2021-08-01' = {
  name: guid('azure-dev-ops-connector')
  location: 'global'
  properties: {
    displayName: 'azure-dev-ops-connector'
  }
}

var storageAccountOwnerRoleId = '8e3af657-a8ff-443c-a75c-2fe8c4bcb635'

module assignRolesToStorageAccount './roleAssignments/assignRoleToStorageAccount.bicep' = {
  name: 'function-storage-account-roles-assignment'
  scope: resourceGroup()
  params: {
    storageAccountName: storageAccountName
    roleId: storageAccountOwnerRoleId
    principalId: azureDevOpsConnectionServicePrinipalResource.identity.principalId
  }
}

param principalId string
param storageAccountName string
param serviceBusNamespace string
param communicationServicesName string
param keyVaultName string

module assignBlobStorageDataOwnerRoleToAzureFunctionApp './assignBlobStorageDataOwnerRoleToAzureFunctionApp.bicep' = {
  name: 'assignBlobStorageDataOwnerRoleToAzureFunctionApp'
  scope: resourceGroup()
  params: {
    storageAccountName: storageAccountName
    principalId: principalId
  }
}

module assignTableStorageDataContributorRoleToAzureFunctionApp './assignTableStorageDataContributorRoleToAzureFunctionApp.bicep' = {
  name: 'assignTableStorageDataContributorRoleToAzureFunctionApp'
  scope: resourceGroup()
  params: {
    storageAccountName: storageAccountName
    principalId: principalId
  }
}

module assignServiceBusDataOwnerRoleToAzureFunctionApp './assignServiceBusDataOwnerRoleToAzureFunctionApp.bicep' = {
  name: 'assignServiceBusDataOwnerRoleToAzureFunctionApp'
  scope: resourceGroup()
  params: {
    serviceBusNamespace: serviceBusNamespace
    principalId: principalId
  }
}

module assignCommunicationServicesOwnerRoleToAzureFunctionApp './assignCommunicationServicesOwnerRoleToAzureFunctionApp.bicep' = {
  name: 'assignCommunicationServicesOwnerRoleToAzureFunctionApp'
  scope: resourceGroup()
  params: {
    communicationServicesName: communicationServicesName
    principalId: principalId
  }
}

module assignKeyVaultSecretsUserRoleToAzureFunctionApp './assignKeyVaultSecretsUserRoleToAzureFunctionApp.bicep' = {
  name: 'assignKeyVaultSecretsUserRoleToAzureFunctionApp'
  scope: resourceGroup()
  params: {
    keyVaultName: keyVaultName
    principalId: principalId
  }
}

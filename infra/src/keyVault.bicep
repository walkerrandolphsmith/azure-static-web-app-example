param location string
param keyVaultName string
param azureDevOpsServiceConnectionId string
param tenantId string

resource keyVaultResource 'Microsoft.KeyVault/vaults@2023-02-01' = {
  name: keyVaultName
  location: location
  properties: {
    sku: {
      family: 'A'
      name: 'standard'
    }
    tenantId: tenantId
    accessPolicies: [
      {
        tenantId: tenantId
        objectId: azureDevOpsServiceConnectionId
        permissions: {
          keys: []
          secrets: [
            'Get'
            'List'
          ]
          certificates: []
        }
      }
    ]
    enabledForDeployment: false
    enabledForDiskEncryption: false
    enabledForTemplateDeployment: false
    enableSoftDelete: true
    softDeleteRetentionInDays: 90
    enableRbacAuthorization: true
    vaultUri: 'https://${keyVaultName}.vault.azure.net/'
    provisioningState: 'Succeeded'
    publicNetworkAccess: 'Enabled'
  }
}

resource configurationConnectionStringSecret 'Microsoft.KeyVault/vaults/secrets@2023-02-01' = {
  parent: keyVaultResource
  name: 'configurationConnectionString'
  properties: {
    attributes: {
      enabled: true
    }
  }
}

resource serviceBusConnectionStringSecret 'Microsoft.KeyVault/vaults/secrets@2023-02-01' = {
  parent: keyVaultResource
  name: 'serviceBusConnectionString'
  properties: {
    attributes: {
      enabled: true
    }
  }
}

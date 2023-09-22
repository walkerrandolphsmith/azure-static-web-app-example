param location string
param keyVaultCIName string
param azureDevOpsServiceConnectionId string
param tenantId string

resource keyVaultCIResource 'Microsoft.KeyVault/vaults@2023-02-01' = {
  name: keyVaultCIName
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
    vaultUri: 'https://${keyVaultCIName}.vault.azure.net/'
    provisioningState: 'Succeeded'
    publicNetworkAccess: 'Enabled'
  }
}

resource keyVaultCINameStaticWebAppDeploymentApiToken 'Microsoft.KeyVault/vaults/secrets@2023-02-01' = {
  parent: keyVaultCIResource
  name: 'staticWebAppDeploymentApiToken'
  properties: {
    attributes: {
      enabled: true
    }
  }
}

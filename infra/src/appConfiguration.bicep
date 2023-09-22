param location string
param appConfigurationName string

resource appConfigurationResource 'Microsoft.AppConfiguration/configurationStores@2023-03-01' = {
  name: appConfigurationName
  location: location
  sku: {
    name: 'free'
  }
  properties: {
    encryption: {}
    disableLocalAuth: false
    softDeleteRetentionInDays: 0
    enablePurgeProtection: false
  }
}

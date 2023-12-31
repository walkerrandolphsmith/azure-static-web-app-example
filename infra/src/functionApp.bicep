param location string
param functionAppName string
param appServicePlanName string
param storageAccountName string
param applicationInsightsName string
param logAnalyticsWorkspaceName string
param serviceBusNamespace string
param communicationServicesName string
param keyVaultName string

module storageAccountModule './storageAccount.bicep' = {
  name: 'storageAccountModule'
  params: {
    location: location
    storageAccountName: storageAccountName
  }
}

module appServicePlanModule './appServicePlan.bicep' = {
  name: 'appServicePlanModule'
  params: {
    location: location
    appServicePlanName: appServicePlanName
  }
}

module applicationInsightsModule './appInsights.bicep' = {
  name: 'applicationInsightsModule'
  params: {
    location: location
    applicationInsightsName: applicationInsightsName
    logAnalyticsWorkspaceName: logAnalyticsWorkspaceName
  }
}

resource functionAppResource 'Microsoft.Web/sites@2022-09-01' = {
  name: functionAppName
  location: location
  tags: {
    'hidden-link: /app-insights-resource-id': '/subscriptions/b78350e9-3050-48ce-be2d-d1fa07a1c512/resourceGroups/rg-my-mermaid-tales/providers/Microsoft.Insights/components/appi-my-mermaid-tales'
  }
  kind: 'functionapp'
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    enabled: true
    hostNameSslStates: [
      {
        name: '${functionAppName}.azurewebsites.net'
        sslState: 'Disabled'
        hostType: 'Standard'
      }
      {
        name: '${functionAppName}.scm.azurewebsites.net'
        sslState: 'Disabled'
        hostType: 'Repository'
      }
    ]
    serverFarmId: appServicePlanModule.outputs.id
    reserved: false
    isXenon: false
    hyperV: false
    vnetRouteAllEnabled: false
    vnetImagePullEnabled: false
    vnetContentShareEnabled: false
    siteConfig: {
      numberOfWorkers: 1
      acrUseManagedIdentityCreds: false
      alwaysOn: false
      http20Enabled: false
      functionAppScaleLimit: 200
      minimumElasticInstanceCount: 0
      appSettings: [
        {
          name: 'FUNCTIONS_EXTENSION_VERSION'
          value: '~4'
        }
        {
          name: 'FUNCTIONS_WORKER_RUNTIME'
          value: 'node'
        }
        {
          name: 'AzureWebJobsFeatureFlags'
          value: 'EnableWorkerIndexing'
        }
        {
          name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
          value: applicationInsightsModule.outputs.instrumentationKey
        }
        {
          name: 'AzureWebJobsStorage__accountName'
          value: storageAccountModule.outputs.name
        }
        {
          name: 'WEBSITE_RUN_FROM_PACKAGE'
          value: '1'
        }
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~18'
        }
        {
          name: 'APP_CONFIGURATION_CONNECTION_STRING'
          value: '@Microsoft.KeyVault(VaultName=kv-my-mermaid-tales;SecretName=configurationConnectionString)'
        }
        {
          name: 'SERVICE_BUS_CONNECTION_STRING'
          value: '@Microsoft.KeyVault(VaultName=kv-my-mermaid-tales;SecretName=serviceBusConnectionString)'
        }
        {
          name: 'WEB_ORIGIN'
          value: 'https://mymermaidtales.com'
        }
      ]
    }
    scmSiteAlsoStopped: false
    clientAffinityEnabled: false
    clientCertEnabled: false
    clientCertMode: 'Required'
    hostNamesDisabled: false
    customDomainVerificationId: '1691368F9519CF602B864EF2B60C243F6745480F197F63C2DFDD4CA9A2200DD2'
    containerSize: 1536
    dailyMemoryTimeQuota: 0
    httpsOnly: true
    redundancyMode: 'None'
    publicNetworkAccess: 'Enabled'
    storageAccountRequired: false
    keyVaultReferenceIdentity: 'SystemAssigned'
  }
}

module assignRolesToAzureFunctionApp './roleAssignments/assignRolesToAzureFunctionApp.bicep' = {
  name: 'assignRolesToAzureFunctionApp'
  scope: resourceGroup()
  params: {
    communicationServicesName: communicationServicesName
    storageAccountName: storageAccountModule.outputs.name
    serviceBusNamespace: serviceBusNamespace
    keyVaultName: keyVaultName
    principalId: functionAppResource.identity.principalId
  }
}

resource ftp 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01' = {
  parent: functionAppResource
  name: 'ftp'
  properties: {
    allow: true
  }
}

resource scm 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01' = {
  parent: functionAppResource
  name: 'scm'
  properties: {
    allow: true
  }
}

resource functionAppConfig 'Microsoft.Web/sites/config@2022-09-01' = {
  parent: functionAppResource
  name: 'web'
  properties: {
    numberOfWorkers: 1
    defaultDocuments: [
      'Default.htm'
      'Default.html'
      'Default.asp'
      'index.htm'
      'index.html'
      'iisstart.htm'
      'default.aspx'
      'index.php'
    ]
    netFrameworkVersion: 'v6.0'
    requestTracingEnabled: false
    remoteDebuggingEnabled: false
    httpLoggingEnabled: false
    acrUseManagedIdentityCreds: false
    logsDirectorySizeLimit: 35
    detailedErrorLoggingEnabled: false
    publishingUsername: '$func-my-mermaid-tales'
    scmType: 'None'
    use32BitWorkerProcess: true
    webSocketsEnabled: false
    alwaysOn: true
    managedPipelineMode: 'Integrated'
    virtualApplications: [
      {
        virtualPath: '/'
        physicalPath: 'site\\wwwroot'
        preloadEnabled: false
      }
    ]
    loadBalancing: 'LeastRequests'
    experiments: {
      rampUpRules: []
    }
    autoHealEnabled: false
    vnetRouteAllEnabled: false
    vnetPrivatePortsCount: 0
    publicNetworkAccess: 'Enabled'
    cors: {
      allowedOrigins: [
        'https://portal.azure.com'
      ]
      supportCredentials: false
    }
    localMySqlEnabled: false
    ipSecurityRestrictions: [
      {
        ipAddress: 'Any'
        action: 'Allow'
        priority: 2147483647
        name: 'Allow all'
        description: 'Allow all access'
      }
    ]
    scmIpSecurityRestrictions: [
      {
        ipAddress: 'Any'
        action: 'Allow'
        priority: 2147483647
        name: 'Allow all'
        description: 'Allow all access'
      }
    ]
    scmIpSecurityRestrictionsUseMain: false
    http20Enabled: false
    minTlsVersion: '1.2'
    scmMinTlsVersion: '1.2'
    ftpsState: 'FtpsOnly'
    preWarmedInstanceCount: 0
    functionAppScaleLimit: 200
    functionsRuntimeScaleMonitoringEnabled: false
    minimumElasticInstanceCount: 0
    azureStorageAccounts: {}
  }
}

resource hostNameBindings 'Microsoft.Web/sites/hostNameBindings@2022-09-01' = {
  parent: functionAppResource
  name: '${functionAppName}.azurewebsites.net'
  properties: {
    siteName: functionAppName
    hostNameType: 'Verified'
  }
}

output id string = functionAppResource.id

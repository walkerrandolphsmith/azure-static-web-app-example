param namespaces_sbns_my_mermaid_tales_name string
param location string

resource serviceBusNamespaceResource 'Microsoft.ServiceBus/namespaces@2022-10-01-preview' = {
  name: namespaces_sbns_my_mermaid_tales_name
  location: location
  sku: {
    name: 'Standard'
    tier: 'Standard'
  }
  properties: {
    premiumMessagingPartitions: 0
    minimumTlsVersion: '1.2'
    publicNetworkAccess: 'Enabled'
    disableLocalAuth: false
    zoneRedundant: false
  }
}

resource serviceBusNamespaceRootManageSharedAccessKey 'Microsoft.ServiceBus/namespaces/authorizationrules@2022-10-01-preview' = {
  parent: serviceBusNamespaceResource
  name: 'RootManageSharedAccessKey'
  properties: {
    rights: [
      'Listen'
      'Manage'
      'Send'
    ]
  }
}

resource namespaces_sbns_my_mermaid_tales_name_default 'Microsoft.ServiceBus/namespaces/networkrulesets@2022-10-01-preview' = {
  parent: serviceBusNamespaceResource
  name: 'default'
  properties: {
    publicNetworkAccess: 'Enabled'
    defaultAction: 'Allow'
    virtualNetworkRules: []
    ipRules: []
    trustedServiceAccessEnabled: false
  }
}

resource serviceBusTopicContactFormSubmission 'Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview' = {
  parent: serviceBusNamespaceResource
  name: 'sbt-contact-form-submission'
  properties: {
    maxMessageSizeInKilobytes: 256
    defaultMessageTimeToLive: 'P14D'
    maxSizeInMegabytes: 1024
    requiresDuplicateDetection: false
    duplicateDetectionHistoryTimeWindow: 'PT10M'
    enableBatchedOperations: true
    status: 'Active'
    supportOrdering: true
    autoDeleteOnIdle: 'P10675199DT2H48M5.4775807S'
    enablePartitioning: false
    enableExpress: false
  }
}

resource serviceBusSubscriptionEmailCustomer 'Microsoft.ServiceBus/namespaces/topics/subscriptions@2022-10-01-preview' = {
  parent: serviceBusTopicContactFormSubmission
  name: 'sbts-email-customer'
  properties: {
    isClientAffine: false
    lockDuration: 'PT1M'
    requiresSession: false
    defaultMessageTimeToLive: 'P14D'
    deadLetteringOnMessageExpiration: false
    deadLetteringOnFilterEvaluationExceptions: false
    maxDeliveryCount: 10
    status: 'Active'
    enableBatchedOperations: true
    autoDeleteOnIdle: 'P14D'
  }
}

resource serviceBusScriptionEmailCustomerFilter 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2022-10-01-preview' = {
  parent: serviceBusSubscriptionEmailCustomer
  name: '$Default'
  properties: {
    action: {}
    filterType: 'SqlFilter'
    sqlFilter: {
      sqlExpression: '1=1'
      compatibilityLevel: 20
    }
  }
}

resource serviceBusSubscriptionRecordContactFormSubmission 'Microsoft.ServiceBus/namespaces/topics/subscriptions@2022-10-01-preview' = {
  parent: serviceBusTopicContactFormSubmission
  name: 'sbts-record-contact-form-submission'
  properties: {
    isClientAffine: false
    lockDuration: 'PT1M'
    requiresSession: false
    defaultMessageTimeToLive: 'P14D'
    deadLetteringOnMessageExpiration: false
    deadLetteringOnFilterEvaluationExceptions: false
    maxDeliveryCount: 10
    status: 'Active'
    enableBatchedOperations: true
    autoDeleteOnIdle: 'P14D'
  }
}

resource serviceBusScriptionRecordContactFormSubmissionFilter 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2022-10-01-preview' = {
  parent: serviceBusSubscriptionRecordContactFormSubmission
  name: '$Default'
  properties: {
    action: {}
    filterType: 'SqlFilter'
    sqlFilter: {
      sqlExpression: '1=1'
      compatibilityLevel: 20
    }
  }
}

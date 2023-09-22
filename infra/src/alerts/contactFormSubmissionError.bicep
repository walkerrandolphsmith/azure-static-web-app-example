param actionGroupName string
param serviceBusNamespace string
param location string

resource actionGroupResource 'microsoft.insights/actionGroups@2023-01-01' existing = {
  name: actionGroupName
}

resource serviceBusNamespaceResource 'Microsoft.ServiceBus/namespaces@2022-10-01-preview' existing = {
  name: serviceBusNamespace
}

resource ContactFormSubmissionErrorAlertResource 'microsoft.insights/metricAlerts@2018-03-01' = {
  name: 'Contact Form Submission Error'
  location: 'global'
  properties: {
    severity: 0
    enabled: true
    scopes: [
      serviceBusNamespaceResource.id
    ]
    evaluationFrequency: 'PT1M'
    windowSize: 'PT5M'
    criteria: {
      allOf: [
        {
          threshold: 1
          name: 'Metric1'
          metricNamespace: 'Microsoft.ServiceBus/namespaces'
          metricName: 'DeadletteredMessages'
          operator: 'GreaterThanOrEqual'
          timeAggregation: 'Minimum'
          skipMetricValidation: false
          criterionType: 'StaticThresholdCriterion'
        }
      ]
      'odata.type': 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria'
    }
    autoMitigate: true
    targetResourceType: 'Microsoft.ServiceBus/namespaces'
    targetResourceRegion: location
    actions: [
      {
        actionGroupId: actionGroupResource.id
        webHookProperties: {}
      }
    ]
  }
}

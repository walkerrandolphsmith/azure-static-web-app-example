param emailCommunicationServicesName string
param communicationServicesName string

resource emailCommunicationServicesResource 'Microsoft.Communication/emailServices@2021-10-01-preview' = {
  name: emailCommunicationServicesName
  location: 'global'
  properties: {
    dataLocation: 'United States'
  }
}

resource emailDomain 'Microsoft.Communication/emailServices/domains@2021-10-01-preview' = {
  name: 'mymermaidtales.com'
  location: 'global'
  parent: emailCommunicationServicesResource
  properties: {
    domainManagement: 'CustomerManaged'
    userEngagementTracking: 'false'
    validSenderUsernames: {
      'support@mymermaidtales.com': 'My Mermaid Tales'
      'DoNotReply@mymermaidtales.com': 'DoNotReply'
    }
  }
}

resource communicationServicesResource 'Microsoft.Communication/CommunicationServices@2023-03-31' = {
  name: communicationServicesName
  location: 'global'
  properties: {
    dataLocation: 'United States'
    linkedDomains: [
      '${emailCommunicationServicesResource.id}/domains/mymermaidtales.com'
    ]
  }
}

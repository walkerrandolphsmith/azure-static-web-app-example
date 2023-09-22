param actionGroupName string
param engineeringSupportPhoneNumber string

resource actionGroupResource 'microsoft.insights/actionGroups@2023-01-01' = {
  name: actionGroupName
  location: 'Global'
  properties: {
    groupShortName: 'Alerts'
    enabled: true
    smsReceivers: [
      {
        name: 'text_-SMSAction-'
        countryCode: '1'
        phoneNumber: engineeringSupportPhoneNumber
      }
    ]
  }
}

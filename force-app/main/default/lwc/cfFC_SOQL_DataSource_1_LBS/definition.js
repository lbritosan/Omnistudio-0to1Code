let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"bottom","size":"x-small"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"4"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%7BId%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"size":{"isResponsive":false,"default":"4"},"sizeClass":"slds-size_4-of-12 "},"elementLabel":"Text-0"},{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"2"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%7BName%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"size":{"isResponsive":false,"default":"2"},"sizeClass":"slds-size_2-of-12 "},"elementLabel":"Text-1"},{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"4"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%7BWebsite%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_4-of-12 ","size":{"isResponsive":false,"default":"4"}},"elementLabel":"Text-2"},{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"2"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%7BContacts.records%5B0%5D.Name%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_2-of-12 ","size":{"isResponsive":false,"default":"2"}},"elementLabel":"Text-3"}]}},"childCards":[],"actions":[],"omniscripts":[],"documents":[]}],"dataSource":{"type":"Query","value":{"dsDelay":"","query":"SELECT Id, Name, Website, (SELECT Id, Name FROM Contacts) FROM Account WHERE Id = '{accId}'","jsonMap":"{\"accId\":\"{accId}\"}","resultVar":""},"orderBy":{"name":"","isReverse":""},"contextVariables":[]},"title":"FC_SOQL_DataSource","enableLwc":true,"isFlex":true,"theme":"slds","selectableMode":"Multi","lwc":{"DeveloperName":"cfFC_SOQL_DataSource_1_LBS","Id":"0RbHp000001Kim7KAC","MasterLabel":"cfFC_SOQL_DataSource_1_LBS","NamespacePrefix":"c","ManageableState":"unmanaged"},"Id":"0koHp0000000VnKIAU","OmniUiCardKey":"FC_SOQL_DataSource/LBS/1.0","OmniUiCardType":"Parent"};
  export default definition
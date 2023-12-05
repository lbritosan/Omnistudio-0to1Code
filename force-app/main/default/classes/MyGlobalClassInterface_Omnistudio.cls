global with sharing class MyGlobalClassInterface_Omnistudio implements omnistudio.VlocityOpenInterface2 {
    public Boolean invokeMethod(String methodName, Map<String, Object>input, Map<String, Object>output, Map<String, Object>options){
        if(methodName.equals('AccountNames')){
            List<Map<String, String>> UIoptions = new List<Map<String, String>>();
                
                for(Account acc : [SELECT Id, Name FROM Account]){
                    Map<String, String> tempMap = new Map<String, String>();
                    tempMap.put('name', acc.Id);
                    tempMap.put('value', acc.Name);
                    
                    UIoptions.add(tempMap);
                }
        }
        else if(methodName.equals('ContactNames')){
            List<Map<String, String>> UIoptions = new List<Map<String, String>>();
                
            for(Contact con : [SELECT Id, Name FROM Contact]){
                Map<String, String> tempMap = new Map<String, String>();
                tempMap.put('name', con.Id);
                tempMap.put('value', con.Name);
                
                UIoptions.add(tempMap);
            }
        }
        return true;
    }
}
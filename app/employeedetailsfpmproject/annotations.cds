using CatalogService as service from '../../srv/cat-service';
annotate service.employeedetails with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : EmployeeId,
            Label : 'EmployeeId',
            ![@UI.Importance] : #Medium,
        },
        {
            $Type : 'UI.DataField',
            Value : EmployeeName,
            Label : 'EmployeeName',
            ![@UI.Importance] : #Medium,
        },
        {
            $Type : 'UI.DataField',
            Value : EmployeeAge,
            Label : 'EmployeeAge',
            ![@UI.Importance] : #Medium,
        }
       
      
    ],
     
    
   
    
);


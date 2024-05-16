using CatalogService as service from '../../srv/cat-service';
annotate service.employeedetails with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'EmployeeId',
                Value : EmployeeId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EmployeeName',
                Value : EmployeeName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EmployeeAge',
                Value : EmployeeAge,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ]
);


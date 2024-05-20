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

annotate service.employeedetails with @(
    UI.DataPoint #EmployeeAge : {
        Value : EmployeeAge,
        MinimumValue : 0,
        MaximumValue : 20,
    },
    UI.Chart #EmployeeAge : {
        ChartType : #Bullet,
        Title : 'EmployeeAge',
        Measures : [
            EmployeeAge,
        ],
        MeasureAttributes : [
            {
                DataPoint : '@UI.DataPoint#EmployeeAge',
                Role : #Axis1,
                Measure : EmployeeAge,
            },
        ],
    },
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'EmployeeAge',
            Target : '@UI.Chart#EmployeeAge',

        },
    ]
);

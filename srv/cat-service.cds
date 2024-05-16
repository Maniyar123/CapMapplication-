using {capmproject as db } from '../db/data-model';

service CatalogService@(path:'/CatalogService')
    {


    entity treetable as projection on db.TreeTable;
    entity timesheet as projection on db.TimeSheet;
    entity Authentication as projection on db.Authentication;
    @odata.draft.enabled
    entity employeedetails as projection on db.EmployeeDetails;
    }
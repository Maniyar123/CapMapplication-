namespace capmproject;

entity TreeTable {
  key NodeID :Int32;
  HierarchyLevel: String(25);
  Description:String(35);
  ParentNodeID: String(25);
  DrillState: String(25)
}
entity TimeSheet{
 key EmployeeId:Int32;
  EmployeeName:String(25);
  Date:Date;
  EmailId:String(25);
  Projects:String(25);
  WorkingHours:Time;
  Status:String(20)

}
entity Authentication{
  key EmailId:String(25);
  Password:String(25)
}
entity EmployeeDetails{
key EmployeeId:Int32;
EmployeeName:String(25);
EmployeeAge:Int32;
}
  



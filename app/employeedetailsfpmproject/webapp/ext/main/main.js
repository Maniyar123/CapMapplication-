sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox",
    "com/fpmproject/employeedetailsfpmproject/ext/main/Main.controller" 
], function(MessageToast, Fragment,MessageBox,MainController) {
    'use strict';
    var frag; 
     var that;

    return {
        createButton: function(oEvent) {
            // MainController.prototype.onInit.apply(this);
            // Get the instance of the Main controller
            var oMainController = new MainController();
            // Call the function directly from the controller
            oMainController.onCreateButtonPress();
        }
    
    }
    });

    


















    
 
        // ---------------create button on table----------------------//
        // createButton: function(oEvent) {
            //     // var that = this;
        //     frag= Fragment.load({
        //         id: "createFragmentId",
        //         name: "com.fpmproject.employeedetailsfpmproject.fragments.createfragment",
        //         controller: this // pass the current controller to the fragment if needed
        //     }).then(function(oFragment) {
        //         // that.oCreateFragment = oFragment;
        //         // Open the dialog
        //         oFragment.open();
        
        //         // Attach event handler to the press event of the close button
        //         var oCloseButton = sap.ui.core.Fragment.byId("createFragmentId", "closeCreateButtonId"); // Assuming "createButtonId" is the ID of your close button
        //         oCloseButton.attachEvent("press", function() {
        //             // Close the fragment dialog
        //             oFragment.close();
        //             oFragment.destroy();
        //             // oFragment=null;
        //         });
        //         var oPressBtn = sap.ui.core.Fragment.byId("createFragmentId", "createButtonId"); 
        //        oPressBtn.attachEvent("press", function(evt) {
        //        var oEvent = evt;
            
        //     // Call the function defined in main.js
        //     //sap.ui.controller("your.namespace.Main").onButtonPress();
        // });
        //     }.bind(this));
        // },

    //  -----------------create button inside fragment --------------------//

    // onPressCreateButton: function() {
    //     // Gather data from the form fields
    //     var employeeId = this.byId("createEmployeeIdInputId").getValue();
    //     var employeeName = this.byId("createEmployeeNameInputId").getValue();
    //     var employeeAge = this.byId("createEmployeeAgeInputId").getValue();

    //     // Update the model bound to your table
    //     var oTable = this.getView().byId("Table");
    //     var oTableModel = oTable.getModel();

    //     // Assuming your model is a JSON model, you can directly manipulate its data
    //     var newData = {
    //         EmployeeId: employeeId,
    //         EmployeeName: employeeName,
    //         EmployeeAge: employeeAge
    //     };
    //     var aData = oTableModel.getData();
    //     aData.push(newData);
    //     oTableModel.setData(aData);

    //     // Update your OData service
    //     // This part may depend on your specific OData model implementation
    //     var oDataModel = this.getView().getModel("");
    //     oDataModel.create("/employeedetails", newData, {
    //         success: function() {
    //             // Handle success
    //             console.log("Data created successfully in OData service.");
    //         },
    //         error: function() {
    //             // Handle error
    //             console.error("Error creating data in OData service.");
    //         }
    //     });
    // },



    // createButton: function(oEvent) {
      
    //     // Load the fragment asynchronously
    //     Fragment.load({
    //         id: "createFragmentId",
    //         name: "com.fpmproject.employeedetailsfpmproject.fragments.createfragment",
    //         controller: that // Pass the current controller to the fragment if needed
    //     }).then(function(oFragment) {
    //         // Open the dialog

    //         oFragment.open();
    
    //         // Attach event handler to the press event of the "Create" button inside the fragment
    //         var oPressBtn = sap.ui.core.Fragment.byId("createFragmentId", "createButtonId");
    //         oPressBtn.attachEvent("press", function() {
    //             // Call the method to handle the creation of the new entry
    //             that.onPressCreateButton();
    //         }.bind(that));
    
    //         // Attach event handler to the press event of the "Cancel" button inside the fragment
    //         var oCancelButton = sap.ui.core.Fragment.byId("createFragmentId", "cancelButtonId");
    //         oCancelButton.attachEvent("press", function() {
    //             // Close the fragment dialog
    //             oFragment.close();
    //         });
    
    //     }.bind(that));
    //     this.getRootControl().getController().onPressCreateButton();
    // },
    // onPressCreateButton: function() {
    //     // Gather data from the input fields in the fragment
    //     var employeeId = sap.ui.core.Fragment.byId("createFragmentId", "employeeIdInputId").getValue();
    //     var employeeName = sap.ui.core.Fragment.byId("createFragmentId", "employeeNameInputId").getValue();
    //     var employeeAge = sap.ui.core.Fragment.byId("createFragmentId", "employeeAgeInputId").getValue();
    
    //     // Update the model bound to your table
    //     var oTable = this.getView().byId("Table");
    //     var oTableModel = oTable.getModel();
    
    //     // Create a new entry in the model
    //     var newData = {
    //         EmployeeId: employeeId,
    //         EmployeeName: employeeName,
    //         EmployeeAge: employeeAge
    //     };
    //     var aData = oTableModel.getData();
    //     aData.push(newData);
    //     oTableModel.setData(aData);
    
    //     // Update your OData service
    //     var oDataModel = this.getView().getModel("");
    //     oDataModel.create("/employeedetails", newData, {
    //         success: function() {
    //             // Handle success
    //             console.log("Data created successfully in OData service.");
    //         },
    //         error: function() {
    //             // Handle error
    //             console.error("Error creating data in OData service.");
    //         }
    //     });
    
    //     // Close the fragment dialog
    //     var oFragment = sap.ui.core.Fragment.byId("createFragmentId", "cancelButtonId");
    //     oFragment.close();
    // },
    
    
           
// -------------------delete functionality--------------------

    // deleteButton: function (oEvent) {
    //     // var createData=sap.ui.getCore().getModel("inputModel").getData();
    //     var odataModel = this.getOwnerComponent().getModel();
    //     // var ID=oEvent.getParameters()['listItem'].getBindingContext().getObject().ID;
    //     var sObj = oEvent.getSource().getParent().getBindingContext().getObject();

    //     var sPath = "/employeedetails(" + sObj.EmployeeId + ")";
    //     odataModel.remove(sPath, {
    //         success: function (oData) {
    //             // Handle successful delete
    //             MessageBox.success("data is deleted succssesfully:", oData);
    //             this.getData();
    //         },
    //         error: function (error) {
    //             // Handle error
    //             MessageBox.error("Error In Data Deletion:", error);
    //         }
    //     });
    // },

   



















    

        //-----------delete button---------------
        // deleteButton:function(oEvent){
        //     // MessageBox.confirm("Do You Want To Delete The Selected Record!");
           
        //         var oTable = this.getView().byId("Table");
        //         var oSelectedItem = oTable.getSelectedItem();
            
        //         if (!oSelectedItem) {
        //             MessageBox.error("Please select an item to delete.");
        //             return;
        //         }
            
        //         MessageBox.confirm("Do you want to delete the selected record?", {
        //             onClose: function(oAction) {
        //                 if (oAction === MessageBox.Action.OK) {
        //                     // Delete record from table
        //                     oTable.removeItem(oSelectedItem);
            
        //                     // Get the data of the selected item (you may need to adjust this based on your model structure)
        //                     var oContext = oSelectedItem.getBindingContext();
        //                     var sPath = oContext.getPath();
        //                     var oData = oContext.getObject();
            
        //                     // Send a request to your backend to delete the record from the HANA database
        //                     // Example: 
        //                     // var sId = oData.Id; // Assuming Id is the property of the record
        //                     // YourService.deleteRecord(sId);
        //                 }
        //             }
        //         });
            
            
        // },


//         // ---------------update open fragment button-----------------
//         updateButton: function(oEvent) {
//             // MessageToast.show("Custom handler invoked.");

//             // Load the fragment asynchronously
//             Fragment.load({
//                 id: "updateFragmentId",
//                 name: "com.fpmproject.employeedetailsfpmproject.fragments.updatefragment",// Replace with the actual path to your fragment
//                 controller: this // Pass the current controller context
//             }).then(function(oDialogUpdateButton){
//                 // Open the dialog
//                 oDialogUpdateButton.open();
//                 oDialogUpdateButton.destroy();
//                 // oDialogUpdateButton.destroyed();
                
//             });
//         },
//     // ------------update close fragment button--------------
//         onPressUpdateButton:function(){
//             var oFragment = this.byId("updateFragmentId");
//             if (oFragment) {
//                 oFragment.close();
//                 oFragment.destroy(); // Destroy the fragment to avoid memory leaks,

	
//             }
//         },
        
	



 













      
        




       
        
        

        
        

	


	


sap.ui.define(
    [
        'sap/fe/core/PageController',
        "sap/m/MessageBox",
        "sap/ui/core/Fragment",
        "sap/ui/core/mvc/Controller"


    ],
    function (PageController, MessageBox, Fragment,Controller) {
        'use strict';
        var frag, that;


        return PageController.extend('com.fpmproject.employeedetailsfpmproject.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf com.fpmproject.employeedetailsfpmproject.ext.main.Main
             */
            // onInit: function () {
            //     PageController.prototype.onInit.apply(this);
            //     that = this;
            // },

            onCreateButtonPress: function () {


                // Load the fragment asynchronously
                if (!this._oCreateDialog) {
                    Fragment.load({
                        id: "createFragmentId",
                        name: "com.fpmproject.employeedetailsfpmproject.fragments.createfragment",
                        controller: this // Pass the current controller to the fragment if needed
                    }).then(function (oFragment) {
                        that._oCreateDialog = oFragment;
                        // that.getView().addDependent(that._oCreateDialog);
                        that._oCreateDialog.open();
                    });
                } else {
                    this._oCreateDialog.open();
                }
            },

            onPressCreateButton: function () {
               
                var employeeId = sap.ui.core.Fragment.byId("createFragmentId", "createEmployeeIdInputId").getValue();
                var employeeName = sap.ui.core.Fragment.byId("createFragmentId", "createEmployeeNameInputId").getValue();
                var employeeAge = sap.ui.core.Fragment.byId("createFragmentId", "createEmployeeAgeInputId").getValue();

                // Prepare new entry data
                var newData = {
                    EmployeeId: employeeId,
                    EmployeeName: employeeName,
                    EmployeeAge: employeeAge
                };

                // Update your OData service
                
                var oDataModel =this.getView().getModel("v2model");
               
                oDataModel.create("/employeedetails", newData, {
                    success: function () {
                        MessageBox.success("Data created successfully in OData service.");
                    },
                    error: function () {
                        MessageBox.error("Error creating data in OData service.");
                    }
                });

                // Close the fragment dialog
                // that._oCreateDialog.close();
                // that._oCreateDialog.destroy();
                // that._oCreateDialog = null;
                that.onClosePressCreateButton();
            },

            onClosePressCreateButton: function () {
                if (that._oCreateDialog) {
                    that._oCreateDialog.close();
                    that._oCreateDialog.destroy();
                    that._oCreateDialog = null;
                }
            },




















            // onCreateButtonPress: function() {
            //     var that = this;
            //     // var oModel = new sap.ui.model.json.JSONModel();
            //     // sap.ui.getCore().setModel(oModel, "inputModel");

            //     // Load the fragment asynchronously
            //     Fragment.load({
            //         id: "createFragmentId",
            //         name: "com.fpmproject.employeedetailsfpmproject.fragments.createfragment",
            //         controller: that
            //     }).then(function(oFragment) {
            //         // Open the dialog
            //         // that.getView().addDependent(oFragment);
            //         oFragment.open();
            //     });
            // },

            // onPressCreateButton: function() {
            //     // Gather data from the input fields in the fragment
            //     var employeeId = sap.ui.core.Fragment.byId("createFragmentId", "createEmployeeIdInputId").getValue();
            //     var employeeName = sap.ui.core.Fragment.byId("createFragmentId", "createEmployeeNameInputId").getValue();
            //     var employeeAge = sap.ui.core.Fragment.byId("createFragmentId", "createEmployeeAgeInputId").getValue();

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
            //     var oDataModel = this.getView().getModel();
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
            //     var oFragment = sap.ui.core.Fragment.byId("createFragmentId", "createFragmentId");
            //     if (oFragment) {
            //         oFragment.close();
            //         oFragment.destroy(); // Destroy the fragment to avoid memory leaks
            //     }
            // },

            // onClosePressCreateButton: function() {
            //     var oFragment = sap.ui.core.Fragment.byId("createFragmentId", "createFragmentId");
            //     if (oFragment) {
            //         oFragment.close();
            //         oFragment.destroy(); // Destroy the fragment to avoid memory leaks
            //     }
            // }









            // onCreateButtonPress: function() {
            //     that = this;

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
            //         });

            //         // Attach event handler to the press event of the "Cancel" button inside the fragment
            //         var oCancelButton = sap.ui.core.Fragment.byId("createFragmentId", "cancelButtonId");
            //         oCancelButton.attachEvent("press", function() {
            //             // Close the fragment dialog
            //             oFragment.close();
            //         });

            //     });
            // },



            // onPressCreateButton: function() {
            //     that=this;
            //     // var oModel = new sap.ui.model.json.JSONModel();
            //     // sap.ui.getCore().setModel(oModel, "inputModel");

            //     // Gather data from the input fields in the fragment
            //     var employeeId = sap.ui.core.Fragment.byId("createFragmentId", "createEmployeeIdInputId").getValue();
            //     var employeeName = sap.ui.core.Fragment.byId("createFragmentId", "createEmployeeNameInputId").getValue();
            //     var employeeAge = sap.ui.core.Fragment.byId("createFragmentId", "createEmployeeAgeInputId").getValue();

            //     // Update the model bound to your table
            //     // var oTable = this.byId("Table");
            //     var oTableModel = sap.ui.getCore().getModel("v2model");

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
            //     var oDataModel = this.getView().getModel();
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
            //     var oDialog = this.byId("createFragmentId");
            //     oDialog.close();
            // }



            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf com.fpmproject.employeedetailsfpmproject.ext.main.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf com.fpmproject.employeedetailsfpmproject.ext.main.Main
             */
             onAfterRendering: function() {
                that = this;
             },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf com.fpmproject.employeedetailsfpmproject.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
        });
    }
);

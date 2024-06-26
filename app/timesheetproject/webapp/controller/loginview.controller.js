sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.timesheet.timesheetproject.controller.loginview", {
            onInit: function () {

            },
            registrationButtonEvent:function(){
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Registartion");
            }
        });
    });

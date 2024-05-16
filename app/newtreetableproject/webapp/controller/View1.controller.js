sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.newtreetableproject.controller.View1", {
            onInit: function () {
             // Create the fragment instance
           this._oFragment = sap.ui.xmlfragment("com.newtreetableproject.fra.create", this);
               
             // Set the fragment as dependent to properly manage its lifecycle
             this.getView().addDependent(this._oFragment);
            },

            onCreateFragment:function(){
                 // Open the fragment
                 this._oFragment.open();
            }
            
        });
    });

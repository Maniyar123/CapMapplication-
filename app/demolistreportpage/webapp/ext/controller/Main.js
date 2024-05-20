sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPressBackBtn: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
            window.history.back();
        },
        demoPress: function() {
            MessageToast.show("Custom handler invoked.");
        }
    };
});

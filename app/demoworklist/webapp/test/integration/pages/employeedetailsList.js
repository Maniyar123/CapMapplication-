sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.demoworklist',
            componentId: 'employeedetailsList',
            contextPath: '/employeedetails'
        },
        CustomPageDefinitions
    );
});
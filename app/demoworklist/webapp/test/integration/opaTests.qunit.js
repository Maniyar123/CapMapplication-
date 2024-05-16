sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/demoworklist/test/integration/FirstJourney',
		'com/demoworklist/test/integration/pages/employeedetailsList',
		'com/demoworklist/test/integration/pages/employeedetailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, employeedetailsList, employeedetailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/demoworklist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheemployeedetailsList: employeedetailsList,
					onTheemployeedetailsObjectPage: employeedetailsObjectPage
                }
            },
            opaJourney.run
        );
    }
);
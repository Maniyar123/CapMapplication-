sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/demolistreportpage/test/integration/FirstJourney',
		'com/demolistreportpage/test/integration/pages/employeedetailsList',
		'com/demolistreportpage/test/integration/pages/employeedetailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, employeedetailsList, employeedetailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/demolistreportpage') + '/index.html'
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
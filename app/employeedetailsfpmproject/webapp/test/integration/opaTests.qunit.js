sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/fpmproject/employeedetailsfpmproject/test/integration/FirstJourney',
		'com/fpmproject/employeedetailsfpmproject/test/integration/pages/employeedetailsMain'
    ],
    function(JourneyRunner, opaJourney, employeedetailsMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/fpmproject/employeedetailsfpmproject') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheemployeedetailsMain: employeedetailsMain
                }
            },
            opaJourney.run
        );
    }
);
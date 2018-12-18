$(document).ready(function() {

    //Ids
    var spaceButton = $("#spaceButton");
    var footballButton = $("#footballButton");
    var mountainsButton = $("#mountainsButton");
    var beachButton = $("#beachButton");
    var tvScreen = $("#screen");
    var powerLineOn = $("#powerLineOn");
    var powerLineOff = $("#powerLineOff");
    var documentationButton = $("#button-doc");
    var closeDocButton = $("#close-doc");

    //Classes
    var powerButton = $(".power");
    var documentationModal = $("#docPage");

    //Global variables
    var powerOn = false;

    //The function that flicks the 'power button' on the tv
    //as well as setting the backgorund to white
    powerButton.click( function() {
        if (!powerOn) {
            powerOn = true;
            turnSwitchOn();
        } else {
            powerOn = false;
            turnOffTV();
            turnSwitchOff();
        }
    })

    // The css that changes the switch on
    function turnSwitchOn() {
        tvScreen.css("fill","white");
        powerLineOn.css("visibility", "visible");
        powerLineOff.css("visibility", "hidden");
    }

    // The css that changes the switch off
    function turnSwitchOff() {
        tvScreen.css("fill","black");
        powerLineOff.css("visibility", "visible");
        powerLineOn.css("visibility", "hidden");
    }

    //The space channel button
    spaceButton.click( function() {
        if (powerOn) {
            turnOffTV();
            $(".space").css("visibility", "visible");
        }
    });

    //The football channel button
    footballButton.click( function() {
        if (powerOn) {
            turnOffTV();
            $(".football").css("visibility", "visible");
        }
    });

    //The mountains channel button
    mountainsButton.click( function() {
        if (powerOn) {
            turnOffTV();
            $(".mountains").css("visibility", "visible");
        }
    });

    //The beach channel button
    beachButton.click( function() {
        if (powerOn) {
            turnOffTV();
            $(".beach").css("visibility", "visible");
        }
    });

    //Closes documentation
    closeDocButton.click( function() {
        documentationModal.css("display", "none");
    });

    //The button that displays the documentation
    documentationButton.click( function() {
        documentationModal.css("display", "block");
    });

    //function that hides all the screens
    function turnOffTV() {
        $(".space").css("visibility", "hidden");
        $(".mountains").css("visibility", "hidden");
        $(".football").css("visibility", "hidden");
        $(".beach").css("visibility", "hidden");
    }

    //Function that returns true or false if the tv is on or off 
    function tvIsOn() {
        if ($(".space").is(":visible")) {
            return true;
        } else if ($(".mountans").is(":visible")) {
            return true;
        } else if ($(".football").is(":visible")) {
            return true;
        } else if ($(".beach").is(":visible")) {
            return true;
        } else {
            return false;
        }
    };
});

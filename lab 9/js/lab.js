/* 
 lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Kai Pagan
   Date: May 12, 2024
   */
  
  
   $(document).ready(function() {
    // Add button to challenge section
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");

    // Add a click listener to the challenge button
    $("#button-challenge").click(function() {
        // Add or remove the "special" class from the section
        $("#challenge").toggleClass("special");
    });
});

$(document).ready(function() {
    // Add button to problem section
    $("#problem").append("<button id='button-problem'>Make Special</button>");

    // Add a click listener to the problem button
    $("#button-problem").click(function() {
        // Add or remove the "special" class from the section
        $("#prblem").toggleClass("special");
    });
});

$(document).ready(function() {
    // Add button to result section
    $("#result").append("<button id='button-result'>Make Special</button>");

    // Add a click listener to the result button
    $("#button-result").click(function() {
        // Add or remove the "special" class from the section
        $("#result").toggleClass("special");
    });
});

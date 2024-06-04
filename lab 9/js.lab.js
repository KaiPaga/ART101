/* 
 lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Kai Pagan
   Date: May 12, 2024
   */
  
 
   // add button to challenge section
 $("#challenge").append("<button id='button-challenge'>listener</button>")

 // add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

  // add button to problem section
  $("#problem").append("<button id='button-problem'>listener</button>")

  // add a click listener to the problem button
 $("button-problem").click(function(){
     // now add (or subtract) the "special" class to the section
     $("#problem").toggleClass("special");
 });
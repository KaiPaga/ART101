/*
* Author: Kai Pagan <kkpagan@ucsc.edu>
* Created: May 23
* License: Public Domain
*/ 

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
    len = str . length;
    mod = len % 4;
    if (mod = 0) {
     return "Gryffindor"
   }
    else if (mod = 1) {
     return "Ravenclaw"
   }
   else if (mod = 2) {
     return "Slytherin"
   }
    else if (mod = 3) {
     return "Hufflepuff"
   }
 }
 
 
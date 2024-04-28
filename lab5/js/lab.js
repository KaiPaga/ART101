/*
* Aruthor: Kai Pagan <kkpagan@ucsc.edu>
* Created: 27 April
* License: Public Domain
*/


// Define Variables
myTransport = ["lyft and uber services", "public buses","the bart and other trian systems", "walking"];


//create an object for my main ride 
myMainRide = {
    make = "Santa Cruz Metro Buses";
    model = "Route 18";
    color = "White with Black Windows";
    year = "2023";
    // we can define a function within our obejct (called a method)
    // that uses the value of the year above (using this.year)
    age : function() {
        return 2025 - this.year;
    }
  }

// output 
document.writeln("Kinds of transport I use: ", myTransport, "<br>") ; 
document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '/t'), "</pre>");
 ;

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

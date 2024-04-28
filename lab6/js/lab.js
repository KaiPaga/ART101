/*
* Aruthor: Kai Pagan <kkpagan@ucsc.edu>
* Created: 27 April
* License: Public Domain
*/


// Define Variables
myTransport = ["lyft and uber services", "public buses","the bart and other trian systems", "walking"];


//create an object for my main ride 
myMainRide = {
    make: "Santa Cruz Metro Buses",
    model: "Route 18",
    color: "White with Black Windows",
    year: 2023,
    // we can define a function within our obejct (called a method)
    // that uses the value of the year above (using this.year)
    age : function() {
        return 2025 - this.year;
    }
  }

// output 
document.writeln("Kinds of transportion I use: ", myTransport, "<br>") ; 
document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
 

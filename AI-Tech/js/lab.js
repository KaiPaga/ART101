/*
* Author: Kai Pagan <kkpagan@ucsc.edu>
* Created: May 27
* License: Public Domain
*/ 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it 
window.onclick = function(event) {
    if (!event.target.matches( '.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns. lengths; i++) {
            var openDropdown = dropdowns[i];
            if (openDopdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function changeText(value) {
    var div = document.getElementById("div");
    var text = "";

    if (value == 1) text += "this is one";
    if (value == 2) text += "this is two";
    if (value == 3) text += "this is tree";

    div.innerHTML = text;
}

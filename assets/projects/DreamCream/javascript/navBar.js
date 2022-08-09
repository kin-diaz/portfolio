// This adds a new class for the responsive navigation bar.
function addClass() {
    var x = document.getElementById("nav"); // This gets the 'nav' id from the document and stores it at x.
    
    if (x.className == "nav-bar") { // Checks if the id has a class 'nav-bar'.
        x.className += " res"; // If so, it adds a new class named 'res'.
    }
    else {
        x.className = "nav-bar"; // It keeps it the same.
    }
}
// This implements the slideshow used for the images gallery in small screens.
var slideIndex = 1; // Stores the 'slideIndex' where the slide is currently at.
showSlides(slideIndex); // Shows the right slide.

// Calculates what index it is at.
function currentSlide(n) {
    showSlides(slideIndex = n); // Assigns the new 'slideIndex' through 'showlides()' function.
}

function showSlides(n) {
    var i; // Variable i for for-loop variable.
    var slides = document.getElementsByClassName("mySlides"); // Gets the 'mySlides' class and stores it in 'slides' variable.
    var dots = document.getElementsByClassName("dot"); // Gets the 'dot' class and stores it in 'dots' variable.

    if (n > slides.length) { // If 'n' is greater than the 'slides.length'.
        slideIndex = 1; // 'slideIndex' is set to 1 so nothing crashes.
    }    
    if (n < 1) { // If 'n' is less than 1.
        slideIndex = slides.length; // Then 'slideIndex' is equal to the 'slides.length'.
    }
    for (i = 0; i < slides.length; i++) { // For loop that goes through all the slides.
        slides[i].style.display = "none"; // Sets the display as none.
    }
    for (i = 0; i < dots.length; i++) { // For loop that goes through all the dots.
        dots[i].className = dots[i].className.replace(" active", ""); // Replaces the '.active' class to 'none'.
    }
    slides[slideIndex-1].style.display = "block";   // Displays the current slide.
    dots[slideIndex-1].className += " active"; // Adds the active class to the dot.
}
var slideIndexleads = 0;
carouselleads();

function carouselleads() {
  var i;
  var x = document.getElementsByClassName("mySlides-leads");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexleads++;
  if (slideIndexleads > x.length) {slideIndexleads = 1} 
  x[slideIndexleads-1].style.display = "block"; 
}

// Next/previous controls
function plusSlidesleads(n) {
  showSlideleads(slideIndexleads += n);
}

// Thumbnail image controls
function currentSlideleads(n) {
  showSlideleads(slideIndexleads = n);
}

function showSlideleads(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-leads");
  if (n > slides.length) {slideIndexleads = 1}
  if (n < 1) {slideIndexleads = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexleads-1].style.display = "block";
}


var btnContainerleads = document.getElementById("leads-active-btn");

// Get all buttons with class="btn" inside the container
var btnsleads = btnContainerleads.getElementsByClassName("leads-buttons");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btnsleads.length; i++) {
btnsleads[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-leads");

  // If there's no active class
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active-leads", "");
  }

  // Add the active class to the current/clicked button
  this.className += " active-leads";
});
}
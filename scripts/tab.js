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

var slideIndexcoins = 0;
carouselcoins();

function carouselcoins() {
    var i;
    var x = document.getElementsByClassName("mySlides-coin");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
  }
  
  // Next/previous controls
  function plusSlidescoins(n) {
    showSlidecoins(slideIndexcoins += n);
  }
  
  // Thumbnail image controls
  function currentSlidecoins(n) {
    showSlidecoins(slideIndexcoins = n);
  }
  
  function showSlidecoins(n) {
    autoScroll = false;
    var i;
    var slides = document.getElementsByClassName("mySlides-coin");
    if (n > slides.length) {slideIndexcoins = 1}
    if (n < 1) {slideIndexcoins = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexcoins-1].style.display = "block";
  }

  function copy(el) {
    var address = el.innerHTML;
    if (address.length == 0) return;
    var tmp = document.createElement("textarea");
    tmp.setAttribute("type", "hidden");
    tmp.value = address;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    alert("Copied: " + tmp.value);
  }

  var btnContainercoin = document.getElementById("coin-active-btn");


var btnscoin = btnContainercoin.getElementsByClassName("coin-buttons");


for (var i = 0; i < btnscoin.length; i++) {
  btnscoin[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-coin");


    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active-coin", "");
    }


    this.className += " active-coin";
  });
}
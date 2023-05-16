var modal = document.getElementById("myModal");
const themeDelay = 2000;

// Get the button that opens the modal
var btn = document.getElementById("theme-modal-button");

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(toNone, themeDelay);
}

function toNone() {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
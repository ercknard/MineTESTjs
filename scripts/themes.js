function setStylesheet(id) {
    var link = document.getElementById(id);
    if (link) {
      var allLinks = document.getElementsByTagName("link");
      for (var i = 0; i < allLinks.length; i++) {
        var currentLink = allLinks[i];
        if (currentLink.getAttribute("rel").indexOf("style") != -1) {
          currentLink.disabled = true;
        }
      }
      link.disabled = false;
    }
  }
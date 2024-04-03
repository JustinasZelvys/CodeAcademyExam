function toggleDropdown() {
    var x = document.getElementById("header-main-nav");
    var dropdown = document.getElementsByClassName("dropdown")[0];
    dropdown.classList.toggle("show");
    if (x.className === "header-main-nav") {
      x.className += " responsive";
    } else {
      x.className = "header-main-nav";
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
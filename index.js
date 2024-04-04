function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const heading = document.querySelector(".change");

button1.addEventListener("click", () => {
  heading.textContent =
    "Tabs with soft transitioning effect. Explained propriety of out perpetual his you.";
});

button2.addEventListener("click", () => {
  heading.textContent =
    "New Tabs. Explained propriety of out perpetual his you.";
});

button3.addEventListener("click", () => {
  heading.textContent =
    "Last Tab...Explained propriety of out perpetual his you.";
});

//side menu

function menuappear() {
  document.getElementById("appear").style.display = "unset";
}

function menudisappear() {
  document.getElementById("appear").style.display = "none";
}

let menuButton = document.querySelector(".burgerMenu");
menuButton.addEventListener("click", menuappear);

let menuBackground = document.querySelector(".xbutton");
menuBackground.addEventListener("click", menudisappear);

//js for accordion (W3school)

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//slide down
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

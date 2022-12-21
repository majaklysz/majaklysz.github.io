// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//SlideShow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//slideshow on phone

let slideIndexX = 1;
showSlidesX(slideIndex);

function plusSlidesX(n) {
  showSlidesX((slideIndexX += n));
}

function currentSlideX(n) {
  showSlidesX((slideIndexX = n));
}

function showSlidesX(n) {
  let i;
  let slidesX = document.getElementsByClassName("mySlidesX");
  if (n > slidesX.length) {
    slideIndexX = 1;
  }
  if (n < 1) {
    slideIndexX = slidesX.length;
  }
  for (i = 0; i < slidesX.length; i++) {
    slidesX[i].style.display = "none";
  }
  slidesX[slideIndexX - 1].style.display = "block";
}

//button for adding review

function addingReview() {
  alert("THANK YOU! Your review was added successfuly! 🤗🎉");
}
let revButton = document.querySelector(".addReviewButton");
revButton.addEventListener("click", addingReview);

//sidemenu
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

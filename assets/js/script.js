"use strict";

// navbar variables
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle("active");
};

navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

function btn_email() {
  if (document.querySelector("#email").value === "") {
    window.alert("Please fill email before submitting");
  } else {
    console.log(document.querySelector("#email").value);
    window.alert(
      document.querySelector("#email").value +
        " has been subscribed to our newsletter. Thank you."
    );
  }
}

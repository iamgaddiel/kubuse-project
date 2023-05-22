const openMenubtn = document.getElementById("open-menu-btn");
const closeMenubtn = document.getElementById("close-menu-btn");
const backDrop = document.getElementById("full-backdrop");
const Menu = document.getElementById("mobile-menu");

openMenubtn.addEventListener("click", () => {
  Menu.classList.add("active");
  backDrop.classList.add("show");
  document.querySelector("body").style.overflowY = "hidden";
});

closeMenubtn.addEventListener("click", () => {
  Menu.classList.remove("active");
  backDrop.classList.remove("show");
  document.querySelector("body").style.overflowY = "auto";
});

backDrop.addEventListener("click", () => {
  Menu.classList.remove("active");
  backDrop.classList.remove("show");
  document.querySelector("body").style.overflowY = "auto";
});

function showForgotPassword() {
  const forgotForm = document.getElementById("forgot_password");
  const loginForm = document.getElementById("login_form");

  forgotForm.classList.remove("hidden");
  forgotForm.classList.add("block");
  loginForm.classList.add("hidden");
}

function goBackToLogin() {
  const forgotForm = document.getElementById("forgot_password");
  const loginForm = document.getElementById("login_form");

  forgotForm.classList.remove("block");
  forgotForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
}

function openModal() {
  const modal = document.querySelector(".modal-container");
  document.querySelector("body").style.overflowY = "hidden";
  modal.classList.add("show");
}

function closeModal() {
  const modal = document.querySelector(".modal-container");
  document.querySelector("body").style.overflowY = "auto";
  modal.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    perPage: 3,
    drag: "free",
    snap: true,
    lazyLoad: "nearby",
    breakpoints: {
      640: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});
AOS.init();

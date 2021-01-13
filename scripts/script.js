const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade .5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();

const year = document.querySelector("#year");

const currentYear = new Date().getFullYear();

year.textContent = currentYear;

console.log(currentYear);

const check = document.getElementById("check");

check.addEventListener("change", () => {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector("nav").classList.toggle("dark");
  document.querySelector("#footer").classList.toggle("dark");
  document.querySelector(".nav-links").classList.toggle("dark");
  document.querySelector(".social-icons").classList.toggle("dark");
});

const navbar = document.getElementById("navbar");

let scroll = false;

window.onscroll = () => {
  if (window.pageYOffset < 100) {
    navbar.classList.remove("top");
    // navbar.classList.remove('shadow');

    if (!scroll) {
      navbar.style.transform = "translateY(-20px)";
    }

    setTimeout(function () {
      navbar.style.transform = "translate(0)";
      scroll = true;
    }, 500);
  } else {
    navbar.classList.add("top");
    // navbar.classList.add('shadow');
    if (scroll) {
      navbar.style.transform = "translateY(-70px)";
    }

    setTimeout(function () {
      navbar.style.transform = "translate(0)";
      scroll = false;
    }, 700);
  }
};

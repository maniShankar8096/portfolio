"use strict";
const homeBtn = document.querySelector(".home-myButton");
const homeSec = document.getElementById("home");
const portfolioSec = document.getElementById("portfolio");
const navEle = document.querySelector(".navbar");
const navLinks = document.getElementsByClassName("nav-link");
//smoothscrolling navbar
Array.from(navLinks).forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
//HomeBTN functionality
homeBtn.addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});

//making links active on scroll
window.addEventListener("scroll", (e) => {
  let curPos = window.scrollY;
  Array.from(navLinks).forEach((link) => {
    let section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= curPos &&
      section.offsetTop + section.offsetHeight > curPos
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  if (homeSec.offsetHeight < curPos) {
    navEle.classList.add("fixed-top");
  } else {
    navEle.classList.remove("fixed-top");
  }
});

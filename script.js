"use strict";

let big = document.querySelector(".big");
let img = document.querySelectorAll(".img");

big.addEventListener("click", function (a) {
  for (let el of img) {
    el.classList.remove("active");
  }
  if (a.target.classList.contains("img")) {
    let full = a.target.classList.add("active");
  }
});

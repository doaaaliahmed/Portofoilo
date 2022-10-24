"use strict";
//  search icon eventListener
const icon = document.querySelector("#search-icon");
const search = document.querySelector(".search");
icon.addEventListener("click", function (e) {
  e.preventDefault();
  search.classList.toggle("hidden");
});

// drop down button
const list = document.querySelector(".drop-down-list");
function func() {
  list.classList.toggle("hidden");
}

// scroll to section

"use strict";

var slide = document.querySelectorAll(".slider__item");
var btn = document.querySelectorAll(".slider__direction");
var toggle = document.querySelectorAll(".slider__toggle");
var index = 0;

function target() {
  prevClass(slide, index, "slider__item");
  prevClass(toggle, index, "slider__toggle");

  if (this.dataset.target === "next") {
    index++;
    if (index >= slide.length) {
      index = 0;
    }
  } else if (this.dataset.target === "prev") {
    index--;
    if (index < 0) {
      index = slide.length - 1;
    }
  } else {
    index = parseInt(this.dataset.target);
    console.log(index);
  }

  nextClass(slide, index, "slider__item slider__item-active");
  nextClass(toggle, index, "slider__toggle slider__toggle-active");
}

function prevClass(obj, index, strClass) {
  obj[index].className = strClass;
}

function nextClass(obj, index, strClass) {
  obj[index].className = strClass;
}


Array.prototype.map.call(toggle, function(e) {
  e.addEventListener("click", target);
});

Array.prototype.map.call(btn, function(e) {
  e.addEventListener("click", target);
});


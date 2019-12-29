"use strict";

var navMain = document.querySelector('.main-header__wrapper');
var navToggle = document.querySelector('.main-header__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-header__wrapper--closed')) {
    navMain.classList.remove('main-header__wrapper--closed');
    navMain.classList.add('main-header__wrapper--opened');
  } else {
    navMain.classList.add('main-header__wrapper--closed');
    navMain.classList.remove('main-header__wrapper--opened');
  }
});

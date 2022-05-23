import * as allFunction from "./modules/function.js";
import { burgerMenu } from "./modules/burgerMenu.js";


allFunction.isWebp();
burgerMenu();

// init Swiper:
const featureSwiper = new Swiper('.feature__slider', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '.feature__slider-button',
  },

});

const feedbackSwiper = new Swiper('.feedback__slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.feedback-button-next',
    prevEl: '.feedback-button-prev',
  },
});

// main section
let scene1 = document.getElementById('scene-1');
let parallax1 = new Parallax(scene1);

// explore section
let scene2 = document.getElementById('scene-2');
let parallax2 = new Parallax(scene2);
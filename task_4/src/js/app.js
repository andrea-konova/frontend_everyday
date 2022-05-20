import * as allFunction from "./modules/function.js";
import { burgerMenu } from "./modules/burgerMenu.js";


allFunction.isWebp();
burgerMenu();

// init Swiper:
const swiper = new Swiper('.feature__slider', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '.feature__slider-button',
  },

});
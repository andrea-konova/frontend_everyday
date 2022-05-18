import * as allFunction from "./modules/function.js";
import { burgerMenu } from "./modules/burgerMenu.js";

allFunction.isWebp();
burgerMenu();

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
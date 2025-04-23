import 'lenis/dist/lenis.css';
import './style/style.css';
import gsap, { ScrollTrigger } from 'gsap/all';
import { initSmoothScroll } from './utils/smoothScroll';
import { removeWpAdminBar } from './utils/removeAdminBar';
import { adjustboxWrapperHeight } from './utils/box';
import { headerAnimation } from './animations/headerAnimation';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


document.addEventListener('DOMContentLoaded', function () {
  initSmoothScroll();
  removeWpAdminBar();
  adjustboxWrapperHeight();
  headerAnimation();
});

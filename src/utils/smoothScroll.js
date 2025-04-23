// src/utils/smoothScroll.js
import Lenis from "lenis";
import gsap, { ScrollTrigger } from "gsap/all";

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 2,
    
  });




  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

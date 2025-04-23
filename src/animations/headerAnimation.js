import gsap, { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';

export const headerAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const header = document.querySelector('.header');
  const box = document.querySelector('.box');
  const heroVideoWrapper = document.querySelector('#hero-video-wrapper');

  // Split the heading into words
  const heroHeading = new SplitType('.hero-heading', {
    types: 'words',
  });

  // Create a scroll-linked timeline just for the text
  const textTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.header',
      start: () => `top top+=${box.offsetTop}px`,
      end: 'bottom bottom',
      scrub: 5,
      markers: true,
    }
  });

  // Animate text only between scroll progress 0.6 to 1
  textTimeline
    .add(() => {}, 0.6) // empty placeholder to align timing
    .from(heroHeading.words, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'power4.out',
    }, 0.4); // start the animation at scroll progress 0.6

  // Hero video width animation
  const initialWidth = heroVideoWrapper.offsetWidth;
  const halfWidth = initialWidth / 2;

  const quickWidth = gsap.quickTo(heroVideoWrapper, 'width', {
    duration: 2,
    ease: 'power4.out',
    units: 'px',
  });

  const setHeroWidthProgress = (progress) => {
    const clampedProgress = gsap.utils.clamp(0, 1, progress);
    const currentWidth = gsap.utils.mapRange(0, 1, initialWidth, halfWidth, clampedProgress);
    quickWidth(currentWidth);
  };

  ScrollTrigger.create({
    trigger: '.header',
    start: () => `top top+=${box.offsetTop}px`,
    end: 'bottom bottom',
    scrub: 1,
    onUpdate: ({ progress }) => {
      const mappedProgress = gsap.utils.mapRange(0, 0.5, 0, 1, gsap.utils.clamp(0, 0.5, progress));
      setHeroWidthProgress(mappedProgress);
    },
  });
};

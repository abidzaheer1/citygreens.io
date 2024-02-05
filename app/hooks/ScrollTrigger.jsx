import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useSectionAnimation = (ref) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current) {
      gsap.registerPlugin(ScrollTrigger);

      let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

      const section = ref.current;
      section.bg = section.querySelector(".bg");

      section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${Math.floor(Math.random() * 100)})`;

      gsap.fromTo(section.bg, {
        backgroundPosition: () => `50% ${-window.innerHeight * getRatio(section)}px`
      }, {
        backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        }
      });
    }
  }, [ref]);
};

export default useSectionAnimation;

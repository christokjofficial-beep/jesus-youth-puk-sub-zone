import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useScrollAnimation(isReady: boolean = true) {
  useEffect(() => {
    if (!isReady) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Staggered reveal animations for .rv elements within scenes
    const scenes = gsap.utils.toArray<HTMLElement>('.scene');
    scenes.forEach((scene, sectionIndex) => {
      const items = gsap.utils.toArray<HTMLElement>(scene.querySelectorAll('.rv'));

      items.forEach((el, index) => {
        gsap.set(el, {
          autoAlpha: 0,
          y: sectionIndex % 2 ? 38 : 58,
          scale: 0.985,
          filter: 'blur(7px)'
        });

        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.15,
          delay: index * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: scene,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Subtle parallax on .wrap content
      const content = scene.querySelector<HTMLElement>('.wrap');
      if (content) {
        gsap.fromTo(
          content,
          { y: sectionIndex % 2 === 0 ? 36 : -24, scale: 0.985 },
          {
            y: sectionIndex % 2 === 0 ? -36 : 24,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: scene,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
              invalidateOnRefresh: true
            }
          }
        );
      }
    });

    // Bubbles stagger pop-in
    const bubbles = gsap.utils.toArray<HTMLElement>('.bubble');
    if (bubbles.length > 0) {
      bubbles.forEach((bubble, index) => {
        gsap.fromTo(
          bubble,
          { opacity: 0, scale: 0.72 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay: (index % 4) * 0.08,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: '#bubbles',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isReady]);
}

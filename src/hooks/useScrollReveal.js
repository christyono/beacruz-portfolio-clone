import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../utils/gsapConfig";

/**
 * Hook for curtain reveal effect - sections stack with higher z-index on top,
 * and clip away to reveal lower sections beneath
 *
 * @param {Object} options - Configuration options
 * @param {number} options.parallaxSpeed - Parallax effect intensity (0-1)
 * @param {boolean} options.isLast - If true, no clip animation (last section is just revealed)
 * @param {number} options.scrub - Scrub smoothness (seconds)
 */
const useScrollReveal = ({
  parallaxSpeed = 0.3,
  isLast = false,
  scrub = 1,
} = {}) => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;

    if (!section || !background) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Get the section's index in the DOM for scroll calculation
    const allSections = document.querySelectorAll('.curtain-section');
    const sectionIndex = Array.from(allSections).indexOf(section);

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      if (!isLast) {
        // Create the curtain reveal effect
        // Clip animation based on virtual scroll position for this section
        ScrollTrigger.create({
          start: () => sectionIndex * window.innerHeight,
          end: () => (sectionIndex + 1) * window.innerHeight,
          scrub: scrub,
          onUpdate: (self) => {
            // Clip from top based on scroll progress
            const progress = self.progress;
            gsap.set(section, {
              clipPath: `inset(${progress * 100}% 0% 0% 0%)`,
            });
          },
        });
      }

      // Add parallax effect to background if enabled
      if (parallaxSpeed > 0) {
        gsap.to(background, {
          yPercent: -10 * parallaxSpeed,
          ease: "none",
          scrollTrigger: {
            start: () => sectionIndex * window.innerHeight,
            end: () => (sectionIndex + 2) * window.innerHeight,
            scrub: true,
          },
        });
      }
    }, section);

    // Cleanup on unmount
    return () => ctx.revert();
  }, [parallaxSpeed, isLast, scrub]);

  return { sectionRef, backgroundRef };
};

export default useScrollReveal;

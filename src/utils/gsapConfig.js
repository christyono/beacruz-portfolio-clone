import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Clip-path presets for reveal effects
export const clipPaths = {
  // Bottom reveal (curtain from bottom)
  bottomHidden: "inset(100% 0% 0% 0%)",
  bottomVisible: "inset(0% 0% 0% 0%)",

  // Center reveal (pinch from center)
  centerHidden: "inset(50% 0% 50% 0%)",
  centerVisible: "inset(0% 0% 0% 0%)",

  // Top reveal (curtain from top)
  topHidden: "inset(0% 0% 100% 0%)",
  topVisible: "inset(0% 0% 0% 0%)",
};

export { gsap, ScrollTrigger };

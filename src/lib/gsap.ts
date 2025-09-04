import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once in module scope
if (typeof window !== "undefined" && (gsap as any).registeredScrollTrigger !== true) {
  gsap.registerPlugin(ScrollTrigger);
  // Mark to avoid duplicate registration across HMR
  (gsap as any).registeredScrollTrigger = true;
}

export { gsap, ScrollTrigger };



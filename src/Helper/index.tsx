import { Variants } from "framer-motion";

export const bounceUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scaleX: 1,
    scaleY: 0.5,
  },
  show: {
    opacity: 1,
    y: 0,
    scaleX: [1, 0.8, 1.05, 0.95, 1],
    scaleY: [0.5, 1.2, 0.9, 1.05, 1],
    transition: {
      y: {
        type: "spring",
        stiffness: 250,
        damping: 15,
        mass: 0.7,
      },
      scaleX: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        times: [0, 0.4, 0.65, 0.85, 1],
      },
      scaleY: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        times: [0, 0.4, 0.65, 0.85, 1],
      },
      opacity: { duration: 0.3 },
    },
  },
};

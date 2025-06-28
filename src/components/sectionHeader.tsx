import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const lineVariants = {
  hidden: { x: "600px", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5, ease: [0.8, 0, 0.2, 1] },
  },
};
const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.5, // each line stagger
      duration: 0.5,
    },
  }),
};

const SectionHeader = ({ heading, description }) => {
  const fadeUpControls = useAnimation();
  const linePlaceControls = useAnimation();
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });

  React.useEffect(() => {
    if (isInView) {
      async function sequence() {
        // 1. Animate line arrival
        await linePlaceControls.start("visible"); // use "visible" to match your variant name
        // 2. Animate text fadeUp
        await fadeUpControls.start("show");
      }
      sequence();
    }
  }, [isInView, linePlaceControls, fadeUpControls]);
  return (
    <section>
      <motion.p
        className="mb-8 text-6xl font-bold md:flex-row md:text-6xl text-font"
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={fadeUpControls}
      >
        {heading}
        <span className="text-secondary">.</span>
      </motion.p>

      <motion.div
        ref={lineRef}
        className="h-1 mr-4 w-20 bg-primary-hover mb-8"
        variants={lineVariants}
        initial="hidden"
        animate={linePlaceControls} // use controls here instead of isInView ternary
      />

      <motion.p
        className="mb-20 text-xl font-light md:flex-row md:text-1xl text-font w-1/2"
        variants={fadeUp}
        custom={1}
        initial="hidden"
        animate={fadeUpControls}
      >
        {description}
      </motion.p>
    </section>
  );
};

export default SectionHeader;

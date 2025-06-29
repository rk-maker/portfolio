import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      delay: i * 0.5, // stagger animation for each item
      duration: 0.5,
    },
  }),
};

type SectionHeaderProps = {
  heading: string;
  description: string;
  onAnimationComplete?: () => void;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  description,
  onAnimationComplete,
}) => {
  // Create animation controls
  const fadeUpControls = useAnimation();
  const linePlaceControls = useAnimation();

  // Use react-intersection-observer to track visibility with threshold 0.5
  const [lineRef, inView] = useInView({
    threshold: 0.7, // triggers when 50% visible
    triggerOnce: true, // animate only once
  });

  React.useEffect(() => {
    if (inView) {
      async function sequence() {
        await linePlaceControls.start("visible");
        await fadeUpControls.start("show");
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }
      sequence();
    }
  }, [inView, linePlaceControls, fadeUpControls, onAnimationComplete]);

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
        animate={linePlaceControls}
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

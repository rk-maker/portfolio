"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SectionHeaderProps = {
  heading: string;
  description: string | React.ReactNode;
  align?: "left" | "center" | "right";
  headingSize?: "lg" | "xl";
  descriptionSize?: "small" | "medium" | "large";
  width?: "small" | "medium" | "large";
  animated?: boolean; // NEW: controls animation + line
  onAnimationComplete?: () => void;
};

const headingSizeMap = {
  lg: "text-xl md:text-5xl",
  xl: "text-2xl md:text-8xl",
};

const descriptionSizeMap = {
  small: "text-sm md:text-lg",
  medium: "text-m md:text-xl",
  large: "text-s md:text-2xl",
};

const widthMap = {
  small: "w-2/5",
  medium: "w-3/5",
  large: "w-4/5",
};

const lineVariants: Variants = {
  hidden: { x: "600px", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5, ease: [0.8, 0, 0.2, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.5,
      duration: 0.5,
    },
  }),
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  description,
  align = "left",
  headingSize = "lg",
  width = "small",
  animated = true,
  descriptionSize = "small",
  onAnimationComplete,
}) => {
  const fadeUpControls = useAnimation();
  const linePlaceControls = useAnimation();

  const [lineRef, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  useEffect(() => {
    if (animated && inView) {
      async function sequence() {
        await linePlaceControls.start("visible");
        await fadeUpControls.start("show");
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }
      sequence();
    }
  }, [
    animated,
    inView,
    linePlaceControls,
    fadeUpControls,
    onAnimationComplete,
  ]);
  const headingClass = `${headingSizeMap[headingSize]} font-bold`;
  const descriptionClass = `${descriptionSizeMap[descriptionSize]} font-light  text-font `;
  return (
    <div className={`${widthMap[width]} text-${align} `}>
      {/* Heading */}
      {animated ? (
        <motion.p
          className={headingClass}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={fadeUpControls}
        >
          {heading}
          <span className="text-secondary">.</span>
        </motion.p>
      ) : (
        <p className={headingClass}>
          {heading}
          <span className="text-secondary">.</span>
        </p>
      )}

      {/* Line */}
      {animated ? (
        <motion.div
          ref={lineRef}
          className="h-1 w-20 bg-primary-hover my-5"
          variants={lineVariants}
          initial="hidden"
          animate={linePlaceControls}
        />
      ) : (
        <div className="my-3" />
      )}

      {/* Description */}
      {animated ? (
        <motion.p
          className={descriptionClass}
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={fadeUpControls}
        >
          {description}
        </motion.p>
      ) : (
        <p className={descriptionClass}>{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;

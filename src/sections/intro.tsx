"use client";
import { SvgComponent } from "../assets/avatarSVG";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
import { bounceUp } from "@/Helper";
import { ScrollIndicator } from "@/components/scrollIndeicator";

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

const strippedGrow = {
  hidden: { width: 0, opacity: 0 },
  show: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.5,
      opacity: { duration: 0.3 },
    },
  },
};

// const grow: Variants = {
//   hidden: { scaleY: 0 },
//   show: {
//     scaleY: 1,
//     transition: {
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
// };

// const wordAppear: Variants = {
//   hidden: { opacity: 0, filter: "blur(5px)" },
//   show: {
//     opacity: 1,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// const waveLetter: Variants = {
//   hidden: { y: 0, opacity: 1 },
//   show: (i: number) => ({
//     y: [0, -10, 0],
//     transition: {
//       duration: 0.6,
//       delay: i * 0.1,
//       repeat: Infinity, // repeat forever
//       repeatDelay: 6, // wait 6 seconds before repeating
//       repeatType: "loop",
//     },
//   }),
// };

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startScrollAnimate, setStartScrollAnimate] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [0, 0]); // Slow
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [200, -300]); // Fast
  const imageY = useTransform(scrollYProgress, [0, 1], [300, -210]); // Medium
  const fadeUpControls = useAnimation();
  const strippedGrowControls = useAnimation();
  const bounceUpControls = useAnimation();
  const growControls = useAnimation();
  const wordAppearControls = useAnimation();
  const waveLetterControls = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
    async function sequence() {
      // 1. FadeUp animation for text (two lines)
      await fadeUpControls.start("show");
      // 2. Stripped grow + bounceUp (SVG)
      await Promise.all([
        strippedGrowControls.start("show"),
        bounceUpControls.start("show"),
      ]);
      setStartScrollAnimate(true);
      // 3. grow + wordAppear (vertical line + scroll word)
      // await Promise.all([
      //   growControls.start("show"),
      //   wordAppearControls.start("show"),
      // ]);
      // // 4. waveLetter animation (letters)
      // await waveLetterControls.start("show");
    }
    sequence();
  }, [
    fadeUpControls,
    strippedGrowControls,
    bounceUpControls,
    growControls,
    wordAppearControls,
    waveLetterControls,
  ]);

  return (
    <section id="intro" className="bg-primary" ref={containerRef}>
      <div className="flex flex-col md:flex-row pt-20">
        {/* first mid */}
        <motion.div
          className="md:w-1/2 w-full relative z-1 order-2 md:order-1"
          style={{ y: leftColumnY }}
        >
          <div className="z-5 flex flex-col md:items-end md:justify-end justify-center md:text-start text-center self-center">
            {/* text area */}
            <div className="justify-center py-13">
              <motion.div
                variants={fadeUp}
                custom={0}
                initial="hidden"
                animate={fadeUpControls}
                className="text-6xl md:text-8xl"
              >
                <p className="font-light">
                  Hi, my
                  <br />
                  name is{" "}
                  <span className="font-bold">
                    Raffay<span className="text-secondary">.</span>
                  </span>
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                custom={1}
                initial="hidden"
                animate={fadeUpControls}
                className="text-2xl mt-7"
              >
                <p className="font-light">
                  {`I'm a `}
                  <span className="font-bold">Full Stack developer</span>
                  from
                </p>
                <p className="font-light">Pakistan.</p>
              </motion.div>
            </div>
            {/* text area */}

            <ScrollIndicator animate={startScrollAnimate} />
          </div>
        </motion.div>
        {/* first mid */}

        {/* second mid */}
        <motion.div
          className="relative md:w-1/2 order-1 md:order-2  w-3/4 md:self-start self-center "
          style={{ y: rightColumnY }}
        >
          <div className="flex md:justify-end justify-center ">
            {/* Striped background */}
            <motion.div
              variants={strippedGrow}
              initial="hidden"
              animate={strippedGrowControls}
              className="absolute md:h-60 h-30 md:self-center md:right-40"
              style={{
                y: imageY,
                backgroundImage: `repeating-linear-gradient(
          45deg,
          #aadcec 0,
          #aadcec 2px,
          transparent 0px,
          transparent 8px
        )`,
              }}
            ></motion.div>
            {/* SVG */}
            <motion.div
              variants={bounceUp}
              initial="hidden"
              animate={bounceUpControls}
              className="relative z-1 md:right-60"
            >
              <SvgComponent className="w-60 h-60 md:w-135 md:h-135" />
            </motion.div>
          </div>
        </motion.div>
        {/* second mid */}
      </div>
    </section>
  );
}

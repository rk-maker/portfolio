"use client";
import { SvgComponent } from "../assets/avatarSVG";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

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

const grow = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const wordAppear = {
  hidden: { opacity: 0, filter: "blur(5px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const waveLetter = {
  hidden: { y: 0, opacity: 1 },
  show: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      delay: i * 0.1,
    },
  }),
};

const bounceUp = {
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

export default function IntroSection() {
  const fadeUpControls = useAnimation();
  const strippedGrowControls = useAnimation();
  const bounceUpControls = useAnimation();
  const growControls = useAnimation();
  const wordAppearControls = useAnimation();
  const waveLetterControls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // 1. FadeUp animation for text (two lines)
      await fadeUpControls.start("show");
      // 2. Stripped grow + bounceUp (SVG)
      await Promise.all([
        strippedGrowControls.start("show"),
        bounceUpControls.start("show"),
      ]);
      // 3. grow + wordAppear (vertical line + scroll word)
      await Promise.all([
        growControls.start("show"),
        wordAppearControls.start("show"),
      ]);
      // 4. waveLetter animation (letters)
      await waveLetterControls.start("show");
    }
    sequence();
  }, []);

  return (
    <section id="intro" className="">
      <div className="flex">
        {/* first mid */}
        <div className="flex flex-col items-end justify-end w-1/2 ">
          {/* text area */}
          <div className="justify-center py-13 z-2">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={fadeUpControls}
              className="text-8xl"
            >
              <p className="font-light">
                Hi, my
                <br />
                name is <span className="font-bold">Raffay.</span>
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
                I'm a <span className="font-bold">Full Stack developer</span>{" "}
                from
              </p>
              <p className="font-light">Pakistan.</p>
            </motion.div>
          </div>
          {/* text area */}

          <div className="inline-flex flex-col items-center self-center">
            <motion.div
              variants={wordAppear}
              initial="hidden"
              animate={wordAppearControls}
              className="mb-2"
            >
              <motion.span
                className="text-xs tracking-widest"
                style={{ display: "inline-block" }}
              >
                {"SCROLL".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={waveLetter}
                    initial="hidden"
                    animate={waveLetterControls}
                    className="mx-0.5"
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.div>

            <motion.div
              variants={grow}
              initial="hidden"
              animate={growControls}
              className="relative w-1 h-80"
              style={{ originY: 1 }}
            >
              <motion.div
                className="absolute bottom-0 w-full origin-bottom bg-font"
                style={{ height: "100%", width: "0.5px" }}
              />
            </motion.div>
          </div>
        </div>
        {/* first mid */}

        {/* second mid */}
        <div className="relative flex justify-center w-1/2">
          <div className="relative w-full h-[32.5rem]">
            {/* Striped background */}
            <motion.div
              variants={strippedGrow}
              initial="hidden"
              animate={strippedGrowControls}
              className="absolute z-0 w-full -translate-y-1/2 right-30 h-60 top-1/2"
              style={{
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
              className="relative z-10 flex justify-center"
            >
              <SvgComponent className="w-130 h-130" />
            </motion.div>
          </div>
        </div>
        {/* second mid */}
      </div>
    </section>
  );
}

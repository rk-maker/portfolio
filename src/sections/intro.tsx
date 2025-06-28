"use client";
import { SvgComponent } from "../assets/avatarSVG";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
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
      delay: 0.6, // Delay after text animations
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

const grow = {
  hidden: {
    scaleY: 0,
  },
  show: {
    scaleY: 1,
    transition: {
      delay: 1.5,
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
      delay: 1.4, // Delay after cartoon appears
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
      delay: 2.2 + i * 0.1, // Delay after line grows
      duration: 0.6,
    },
  }),
};

export default function IntroSection() {
  return (
    <section id="intro">
      <div className="mx-auto w-fit">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Text sections */}
          <div className="flex items-center justify-center">
            <div className="">
              <motion.div variants={fadeUp} className="text-6xl">
                <p className="font-light">Hi, my</p>
                <div className="flex">
                  <p className="font-light">name is {`   `}</p>
                  <p className="ml-2 font-bold"> Raffay.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="text-xl">
                <p className="font-light">
                  I'm a <span className="font-bold">Full Stack developer</span>{" "}
                  from
                </p>
                <p className="font-light">Pakistan.</p>
              </motion.div>
            </div>
            <motion.div variants={bounceUp}>
              <SvgComponent className="w-100 h-100" />
            </motion.div>
          </div>

          {/* Scroll section */}
          <div className="inline-flex flex-col items-center mt-8">
            {/* "SCROLL" word */}
            <motion.div variants={wordAppear} className="mb-4">
              <motion.span
                initial="hidden"
                animate="show"
                className="text-xs tracking-widest"
                style={{ display: "inline-block" }}
              >
                {"SCROLL".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={waveLetter}
                    className="mx-0.5"
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.div>

            {/* Line */}
            <motion.div
              variants={grow}
              className="relative w-1 h-52"
              style={{ originY: 1 }}
            >
              <motion.div
                className="absolute bottom-0 w-full origin-bottom bg-font"
                style={{ height: "100%", width: "0.5px" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

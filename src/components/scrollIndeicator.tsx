import { useEffect } from "react";
import { motion, Variants, useAnimation } from "framer-motion";

interface ScrollIndicatorProps {
  animate: boolean; // controls animation trigger
}

const wordAppear: Variants = {
  hidden: { opacity: 0, filter: "blur(5px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const waveLetter: Variants = {
  hidden: { y: 0, opacity: 1 },
  show: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      repeat: Infinity,
      repeatDelay: 6,
      repeatType: "loop",
    },
  }),
};

const grow: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  animate,
}) => {
  const wordAppearControls = useAnimation();
  const waveLetterControls = useAnimation();
  const growControls = useAnimation();

  useEffect(() => {
    if (animate) {
      async function sequence() {
        await Promise.all([
          growControls.start("show"),
          wordAppearControls.start("show"),
        ]);
        await waveLetterControls.start("show");
      }
      sequence();
    } else {
      wordAppearControls.start("hidden");
      waveLetterControls.start("hidden");
      growControls.start("hidden");
    }
  }, [animate, wordAppearControls, waveLetterControls, growControls]);

  return (
    <div className="inline-flex flex-col items-center self-center pt-10">
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
        className="relative w-1 h-40"
        style={{ originY: 1 }}
      >
        <motion.div
          className="absolute bottom-0 w-full origin-bottom bg-font"
          style={{ height: "100%", width: "0.5px" }}
        />
      </motion.div>
    </div>
  );
};

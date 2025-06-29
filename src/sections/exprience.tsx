"use client";

import SectionHeader from "@/components/sectionHeader";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const experiences = [
  {
    company: "Tech Corp",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description:
      "Led development of scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects using modern web technologies.",
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 - 2020",
    description:
      "Developed responsive websites and web applications with focus on user experience.",
  },
];
const epxerienceTabs = {
  hidden: {
    y: "100%", // Start off-screen to the right
    opacity: 0,
  },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.08, // Starts right after line completes
      duration: 0.4,
      ease: [0.6, 0, 0.3, 1], // Smooth slide-in
    },
  }),
};
const epxerienceTabsDesc = {
  hidden: {
    y: "100%", // Start off-screen to the right
    opacity: 0,
  },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.08, // Starts right after line completes
      duration: 0.4,
      ease: [0.6, 0, 0.3, 1], // Smooth slide-in
    },
  }),
};
export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [prevAnimation, setPrevAnimation] = useState(false);
  const expiereunceTabsControl = useAnimation();
  const expiereunceTabsDescControl = useAnimation();

  useEffect(() => {
    async function sequence() {
      if (prevAnimation) {
        await expiereunceTabsControl.start("visible");
        expiereunceTabsDescControl.start("visible");
      }
    }
    sequence();
  }, [prevAnimation, expiereunceTabsControl]);
  return (
    <section id="experience" className=" w-full bg-primary ">
      <div className="container px-10 mx-auto ">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            heading="My Journey So Far"
            description="Building reliable, scalable apps and solving real-world problems with code. I grow by tackling new challenges and learning every step of the way."
            onAnimationComplete={() => {
              setPrevAnimation(true);
            }}
          />

          <div className="flex flex-col gap-12 md:flex-row ">
            {/* Vertical tabs */}
            <div className="md:w-1/3">
              <div className="space-y-3">
                {experiences.map((exp, index) => (
                  <motion.button
                    variants={epxerienceTabs}
                    initial="hidden"
                    animate={expiereunceTabsControl}
                    key={index}
                    custom={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 transition-all duration-300 border-l-4  ${
                      activeTab === index
                        ? "border-thirdy bg-secondary text-font"
                        : "border-transparent text-font/60 hover:border-thirdy/30 hover:text-font hover-striped-bg"
                    }`}
                  >
                    <div className="text-lg font-semibold">{exp.company}</div>
                    <div className="mt-1 text-sm text-thirdy">{exp.period}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3">
              <div className="p-8">
                <motion.h3
                  variants={epxerienceTabsDesc}
                  initial="hidden"
                  animate={expiereunceTabsDescControl}
                  custom={experiences.length + 1}
                  className="mb-4 text-2xl font-bold md:text-3xl text-font"
                >
                  {experiences[activeTab].role}
                </motion.h3>
                <motion.p
                  className="mb-6 font-medium text-thirdy"
                  variants={epxerienceTabsDesc}
                  initial="hidden"
                  animate={expiereunceTabsDescControl}
                  custom={experiences.length + 2}
                >
                  {experiences[activeTab].period}
                </motion.p>
                <motion.p
                  className="text-lg leading-relaxed text-font/80"
                  variants={epxerienceTabsDesc}
                  initial="hidden"
                  animate={expiereunceTabsDescControl}
                  custom={experiences.length + 3}
                >
                  {experiences[activeTab].description}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

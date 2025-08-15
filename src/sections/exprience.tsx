"use client";

import SectionHeader from "@/components/sectionHeader";
import { useState, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

const experiences = [
  {
    company: "Senior Software Engineer",
    role: "Full Stack Developer",
    period: "Jan 2023 - Oct 2024",
    description:
      "Led high-performance, SEO-friendly web and full-stack apps using advanced NLP models, optimized Node.js backends, and robust CI/CD. Achieved 1M+ downloads and a 4.5★ rating for the NBP app.",
  },
  {
    company: "Software Engineer",
    role: "Full Stack Developer",
    period: "Jan 2021 - Jan 2023",
    description:
      "Architected scalable, secure Node.js backends handling millions of requests, boosting performance by 40%. Delivered robust, production-ready systems with optimized React UIs (framer-motion, shadcn, MUI), strong state management, and comprehensive testing. Automated deployments, reducing release time by 50%.",
  },
  {
    company: "Internship",
    role: "Frontend Developer",
    period: "Oct 2020 - Dec 2020",
    description:
      "Built an e-commerce app with efficient state management, optimized web performance, and ensured smooth, reliable releases.",
  },
];
const epxerienceTabs: Variants = {
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
const epxerienceTabsDesc: Variants = {
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
  }, [prevAnimation, expiereunceTabsControl, expiereunceTabsDescControl]);
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

"use client";

import { useState, useEffect, ReactElement } from "react";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import SectionHeader from "@/components/sectionHeader";

import SvgComponent from "@/assets/techVector";
import TextBlock from "@/components/TextBlock";

const iconClass = "h-10 w-10 text-center align-center item-center";

export default function TechSkillsSection() {
  const techIconsControls = useAnimation();

  const [prevAnimation, setPrevAnimation] = useState(false);
  useEffect(() => {
    async function sequence() {
      if (prevAnimation) {
        await techIconsControls.start("visible");
      }
    }
    sequence();
  }, [prevAnimation, techIconsControls]);

  return (
    <section id="tech" className="h-screen w-full justify-center items-center">
      <div className="flex  w-full  h-full items-center">
        {/* Left half: Circle + SVG */}
        <div className="w-1/2 flex items-center justify-center ">
          <div className="relative w-60 h-60 md:w-[300px] md:h-[300px]">
            {/* Circle in background */}
            <div className="hover-striped-bg rounded-full w-full h-full absolute inset-0 z-0"></div>

            <SvgComponent className="absolute w-full h-full z-10 md:-left-10 md:bottom-4" />
          </div>
        </div>
        <div className="w-1/2  ">
          <TextBlock
            width="large"
            headingSize="lg"
            heading="Tools of the Trade"
            paragraph={
              <p>
                I work with a versatile set of technologies to build scalable,
                efficient, and intelligent solutions. On the frontend, I use
                React, Next.js, React Native, Tailwind CSS, and Material UI to
                create responsive, modern, and user-friendly interfaces that
                enhance the user experience.
                <br />
                <br />
                On the backend, I leverage Node.js, Express.js, TypeScript, and
                SQL to design robust APIs and manage data efficiently. I also
                work with AI and machine learning frameworks, including
                TensorFlow, PyTorch, and OpenAI APIs, to build smart,
                data-driven applications that solve real-world problems.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}

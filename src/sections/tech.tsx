"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

import SvgComponent from "@/assets/techVector";
import { useInView } from "react-intersection-observer";
import { bounceUp } from "@/Helper";
import SectionHeader from "@/components/sectionHeader";

export default function TechSkillsSection() {
  const [lineRef, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  // Smooth motion springs
  const springX = useSpring(0, { stiffness: 15, damping: 20 });
  const springY = useSpring(0, { stiffness: 15, damping: 20 });

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    if (!sectionEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Opposite movement effect
      const offsetX = (centerX - e.clientX) * 0.05; // adjust multiplier for intensity
      const offsetY = (centerY - e.clientY) * 0.05;

      springX.set(offsetX);
      springY.set(offsetY);
    };

    const handleMouseLeave = () => {
      // Reset smoothly to center
      springX.set(0);
      springY.set(0);
    };

    sectionEl.addEventListener("mousemove", handleMouseMove);
    sectionEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      sectionEl.removeEventListener("mousemove", handleMouseMove);
      sectionEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [springX, springY]);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="h-screen w-full justify-center items-center "
    >
      <div className="flex w-full h-full items-center" ref={lineRef}>
        {/* Left half: Circle + SVG */}
        <motion.div
          className="w-1/2 flex items-center justify-center"
          variants={bounceUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="relative w-70 h-70 md:w-[350px] md:h-[350px]">
            {/* Circle in background */}
            <motion.div
              id="rounded"
              className="hover-striped-bg rounded-full w-full h-full absolute inset-0 z-0"
              style={{
                x: springX,
                y: springY,
              }}
            />
            <SvgComponent className="absolute w-full h-full z-10 md:-left-10 md:bottom-4" />
          </div>
        </motion.div>
        <SectionHeader
          animated={false}
          heading="Tools of the Trade"
          description={
            <span>
              I work with a versatile set of technologies to build scalable,
              efficient, and intelligent solutions. On the frontend, I use
              React, Next.js, React Native, Tailwind CSS, and Material UI to
              create responsive, modern, and user-friendly interfaces that
              enhance the user experience.
              <br />
              <br />
              On the backend, I leverage Node.js, Express.js, TypeScript, and
              SQL to design robust APIs and manage data efficiently. I also work
              with AI and machine learning frameworks, including TensorFlow,
              PyTorch, and OpenAI APIs, to build smart, data-driven applications
              that solve real-world problems.
            </span>
          }
        />
      </div>
    </section>
  );
}

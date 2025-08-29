"use client";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/sectionHeader";
import { motion, useAnimation, Variants } from "framer-motion";
import StripedButton from "@/components/button";
import { useRouter } from "next/navigation";
export default function ProjectsSection() {
  const router = useRouter();
  const [prevAnimation, setPrevAnimation] = useState(false);
  const projectElementsAnimationControls = useAnimation();
  const projectElementsAnimation: Variants = {
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
  useEffect(() => {
    async function sequence() {
      if (prevAnimation) {
        await projectElementsAnimationControls.start("visible");
      }
    }
    sequence();
  }, [prevAnimation, projectElementsAnimationControls]);
  const handleClick = () => {
    router.push("/projects");
  };
  return (
    <section
      id="projects"
      className="h-screen w-full bg-primary items-center justify-center flex flex-col"
    >
      <div className="container px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            heading="What I've Built"
            description="From frontend interfaces to backend logic, I craft projects that are both functional and user-friendly—designed to make an impact."
            onAnimationComplete={() => {
              setPrevAnimation(true);
            }}
            animated={false}
          />
          <motion.div
            className="py-4"
            // variants={projectElementsAnimation}
            // // initial="hidden"
            // animate={projectElementsAnimationControls}
            // custom={0}
          >
            <StripedButton onClick={handleClick}>
              Checkout all Projects
            </StripedButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

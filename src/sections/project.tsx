"use client";
import { useEffect, useState, useRef } from "react";
import SectionHeader from "@/components/sectionHeader";
import { motion, useAnimation, useSpring } from "framer-motion";
import StripedButton from "@/components/button";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { bounceUp } from "@/Helper";
import ComputerSVG from "@/assets/computerSvg";

export default function ProjectsSection() {
  const router = useRouter();
  const [prevAnimation, setPrevAnimation] = useState(false);
  const projectElementsAnimationControls = useAnimation();
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
      ref={sectionRef}
      id="projects"
      className="h-screen w-full justify-center items-center "
    >
      <div className="flex w-full h-full items-center" ref={lineRef}>
        <div className="w-1/2  flex flex-col items-end justify-end">
          <SectionHeader
            heading="What I've Built"
            description={
              <span>
                From frontend interfaces to backend logic, I focus on crafting
                projects that are both functional and user-friendly, ensuring
                every detail contributes to a seamless experience. On the
                frontend, I design intuitive, responsive, and visually engaging
                applications that prioritize usability and accessibility. <br />
                <br />
                On the backend, I develop reliable architectures and efficient
                workflows that bring these interfaces to life, combining
                performance with scalability. By bridging design with technical
                precision, I create solutions that not only work smoothly but
                also leave a lasting impact on the people who use them.
              </span>
            }
            onAnimationComplete={() => {
              setPrevAnimation(true);
            }}
            width="large"
            animated={false}
          />
          <motion.div
            className="py-4 flex self-center -translate-x-[115px]"
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
        <div className="w-1/2 flex items-center justify-center ">
          <motion.div
            className=""
            variants={bounceUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="relative w-70 h-70 md:w-[400px] md:h-[400px]">
              {/* Circle in background */}
              <motion.div
                id="rounded"
                className="hover-striped-bg rounded-full w-full h-full absolute inset-0 z-0"
                style={{
                  x: springX,
                  y: springY,
                }}
              />
              <ComputerSVG className="absolute -bottom-9 -right-20 top- h-auto z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import StripedButton from "@/components/button";
import SectionHeader from "@/components/sectionHeader";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const socialIcons = [
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "GitHub", icon: FaGithub, url: "#" },
  { name: "LinkedIn", icon: FaLinkedin, url: "#" },
  { name: "Mail", icon: IoMdMail, url: "#" },
];
const socialVariants = {
  hidden: {
    x: "100%", // Start off-screen to the right
    opacity: 0,
  },
  visible: (i: number) => ({
    x: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.08, // Starts right after line completes
      duration: 0.4,
      ease: [0.6, 0, 0.3, 1], // Smooth slide-in
    },
  }),
};
export default function AboutSection() {
  const [prevAnimation, setPrevAnimation] = useState(false);
  const socialIconsControls = useAnimation();
  useEffect(() => {
    async function sequence() {
      if (prevAnimation) {
        console.log("129837123123");
        socialIconsControls.start("visible");
      }
    }
    sequence();
  }, [prevAnimation, socialIconsControls]);

  const handleResumeDownload = () => {
    // Create a dummy PDF download
    const link = document.createElement("a");
    link.href = "/placeholder.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <section
      id="about"
      className="h-screen w-full  justify-center items-center flex flex-col"
    >
      <div className="container  px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            onAnimationComplete={() => {
              setPrevAnimation(true);
            }}
            heading="Meet the Maker"
            description="Full-stack developer passionate about clean code, smart solutions, and continuous learning. Always curious, always improving."
          />
          <div className="flex">
            {socialIcons.map((icon, i) => {
              const Icon = icon.icon;
              return (
                <motion.a
                  key={icon.name}
                  href={icon.url}
                  className="px-3 m-2 text-m"
                  custom={i}
                  variants={socialVariants}
                  initial="hidden"
                  animate={socialIconsControls}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <StripedButton onClick={() => console.log("Clicked!")}>
              Hire Me
            </StripedButton>

            <div className="flex flex-col gap-6 text-center sm:flex-row sm:text-left">
              <div>
                <span className="text-sm text-font/60">Email</span>
                <div>
                  <a
                    href="mailto:hello@example.com"
                    className="transition-colors text-thirdy hover:text-font"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              <div>
                <span className="text-sm text-font/60">Phone</span>
                <div>
                  <a
                    href="tel:+1234567890"
                    className="transition-colors text-thirdy hover:text-font"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

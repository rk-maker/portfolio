"use client";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/sectionHeader";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const date = new Date();
const socialIcons = [
  { name: "Twitter", icon: FaTwitter, url: "https://x.com/Rk_raffay" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/rk-maker" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/muhammad-raffay-khan-58b3ba177/",
  },
  { name: "Mail", icon: IoMdMail, url: "#" },
];

const socialVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: (i: number) => ({
    x: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.6, 0, 0.3, 1],
    },
  }),
};

export default function AboutSection() {
  const [lineRef, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const socialIconsControls = useAnimation();
  const aboutElementsAnimationControls = useAnimation();
  const aboutElementsAnimation: Variants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: [0.6, 0, 0.3, 1],
      },
    }),
  };

  useEffect(() => {
    async function sequence() {
      if (inView) {
        await socialIconsControls.start("visible");
        aboutElementsAnimationControls.start("visible");
      }
    }
    sequence();
  }, [socialIconsControls, aboutElementsAnimationControls, inView]);

  // const handleResumeDownload = () => {
  //   const link = document.createElement("a");
  //   link.href =
  //     "https://drive.google.com/uc?export=download&id=1MoixaiihdrGbjAh9biVJhsbKtfZ6IJre";
  //   link.download = "resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <section
      id="about"
      className="h-screen w-full justify-center items-center flex flex-col bg-primary"
    >
      <div className="container px-8 mx-auto">
        <div className="max-w-6xl mx-auto" ref={lineRef}>
          <SectionHeader
            animated={false}
            heading="Meet the Maker"
            description="Full-stack developer passionate about clean code, smart solutions, and continuous learning. Always curious, always improving."
          />
          <div className=" w-full h-6" />
          <div className="flex ">
            {socialIcons.map((icon, i) => {
              const Icon = icon.icon;
              const isEmail = icon.name === "Mail";

              return (
                <motion.a
                  key={icon.name}
                  href={isEmail ? `mailto:${icon.url}` : icon.url}
                  target={isEmail ? undefined : "_blank"} // add this line
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="mr-15 text-lg text-font hover:text-thirdy transition-colors duration-300"
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
          <div className="items-center justify-center gap-8 sm:flex-row">
            {/* <motion.div
              custom={0}
              variants={aboutElementsAnimation}
              initial="hidden"
              animate={aboutElementsAnimationControls}
            >
              <StripedButton onClick={() => console.log("Clicked!")}>
                Hire Me
              </StripedButton>
            </motion.div> */}
            <div className="flex flex-col gap-20 text-center sm:flex-row sm:text-left my-15 ">
              <motion.div
                custom={2}
                variants={aboutElementsAnimation}
                initial="hidden"
                animate={aboutElementsAnimationControls}
              >
                <span className="text-sm text-font">Email</span>
                <div>
                  <a
                    href="mailto:hello@example.com"
                    className="transition-colors text-thirdy hover:text-font"
                  >
                    m.raffaykhan@outlook.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                custom={3}
                variants={aboutElementsAnimation}
                initial="hidden"
                animate={aboutElementsAnimationControls}
              >
                <span className="text-sm text-font">Phone</span>
                <div>
                  <a
                    href="tel:+4915560817357"
                    className="transition-colors text-thirdy hover:text-font"
                  >
                    (+49)-15560817357
                  </a>
                </div>
              </motion.div>
            </div>
            {/* <motion.div
              custom={4}
              variants={aboutElementsAnimation}
              initial="hidden"
              animate={aboutElementsAnimationControls}
            >
              <StripedButton onClick={handleResumeDownload}>
                Download Resume
              </StripedButton>
            </motion.div> */}
          </div>
          {/* Bottom line and name */}
          <div className="mt-12 w-full border-t border-gray-300"></div>
          <motion.p
            custom={5}
            variants={aboutElementsAnimation}
            initial="hidden"
            animate={aboutElementsAnimationControls}
            className="mt-4 text-center text-sm text-gray-500"
          >
            {`© ${date.getFullYear()} Raffay Khan`}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

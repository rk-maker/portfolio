"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialIcons = [
    { name: "Twitter", icon: FaTwitter, url: "#" },
    { name: "GitHub", icon: FaGithub, url: "#" },
    { name: "LinkedIn", icon: FaLinkedin, url: "#" },
    { name: "Mail", icon: IoMdMail, url: "#" },
  ];

  const menuItems = [
    { name: "Home", url: "/", description: "will take you back" },
    {
      name: "Projects",
      url: "/work",
      description: "My past and ongoing projects",
    },
    {
      name: "Technologies",
      url: "/about",
      description: "The techonologies i have worked on",
    },
    {
      name: "About",
      url: "/about",
      description: "A little bit about me and my back ground",
    },
  ];

  // Updated animation variants
  const containerVariants = {
    hidden: {
      height: 0,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1], // Smooth cubic bezier curve
      },
    },
    visible: {
      height: "100vh",
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
        when: "beforeChildren", // Important for sequencing
      },
    },
  };
  const lineVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        delay: 0.1, // Reduced delay for faster start
        duration: 0.3, // Faster duration
        ease: [0.8, 0, 0.2, 1], // More aggressive easing
      },
    },
  };

  const socialVariants = {
    hidden: {
      x: "100%", // Start off-screen to the right
      opacity: 0,
    },
    visible: (i: number) => ({
      x: "0%",
      opacity: 1,
      transition: {
        delay: 0.8 + i * 0.08, // Starts right after line completes
        duration: 0.4,
        ease: [0.6, 0, 0.3, 1], // Smooth slide-in
      },
    }),
  };
  const menuItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3 + i * 0.4, // Each item appears 0.4s after the previous one
        duration: 1.9, // Smooth animation duration
        ease: [0.22, 1, 0.36, 1], // Gentle ease-out with slight overshoot
      },
    }),
  };
  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between md:p-10">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🎨</span>
          <span className="text-font">|</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="font-medium transition-colors hover:text-blue-500"
          >
            Menu
          </button>
        </div>

        <span className="flex items-center space-x-1 transition-colors hover:text-blue-500">
          <span className="text-xl">💬</span>
          <span>Hire me</span>
        </span>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute inset-0 z-40 bg-secondary"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            style={{ willChange: "height" }} // Performance hint
          >
            <div className="justify-between max-w-4xl mx-12 pt-26 ">
              {/* Line animation - now using scaleX for smoother effect */}
              <div className="flex items-center mb-16 ">
                <motion.div
                  className="h-0.5 mr-4 w-15 bg-primary-hover"
                  variants={lineVariants}
                />
                <div className="flex space-x-16 ">
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
                        animate="visible"
                      >
                        <Icon />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
              {/* Menu items */}
              <div className="">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <a
                      href={item.url}
                      className="flex items-baseline mb-10 group"
                    >
                      <span className="block text-5xl font-bold transition-colors w-60 group-hover:text-white ">
                        {item.name}
                      </span>
                      <span className="pl-40 font-light transition-colors text-m group-hover:text-white">
                        {item.description}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

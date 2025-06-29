"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import AnimatedButton from "./secondaryTextButon";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldAnimateExit, setShouldAnimateExit] = useState(true);

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
  const toggleMenu = () => {
    if (isMenuOpen) {
      setShouldAnimateExit(false);
      setIsMenuOpen(false);
    } else {
      setShouldAnimateExit(true);
      setIsMenuOpen(true);
    }
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
        </div>

        <span className="flex items-center space-x-1 ">
          <span className="">💬</span>
          <AnimatedButton onClick={() => alert("Clicked!")}>
            ASK ME
          </AnimatedButton>
        </span>
      </nav>
    </>
  );
};

export default Navbar;

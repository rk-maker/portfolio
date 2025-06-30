"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import AnimatedButton from "./secondaryTextButon";
import StackedIcon from "./shadowIcon";

import { IoChatbubbleOutline, IoChatbubbleSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <nav className="absolute top-0 z-50 flex items-center justify-between md:p-10 w-full">
        <div className="flex items-center space-x-2">
          <img src={"./logo.png"} className="w-12 h-12" />
        </div>

        <span className="flex items-center space-x-1 ">
          <StackedIcon
            OutlineIcon={IoChatbubbleOutline}
            FilledIcon={IoChatbubbleSharp}
            offset={4}
            size={32}
          />

          <AnimatedButton onClick={() => alert("Clicked!")}>
            ASK ME
          </AnimatedButton>
        </span>
      </nav>
    </>
  );
};

export default Navbar;

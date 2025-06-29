"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import AnimatedButton from "./secondaryTextButon";
import { IoChatbubbleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between md:p-10">
        <div className="flex items-center space-x-2">
          <IoChatbubbleOutline />
        </div>

        <span className="flex items-center space-x-1 ">
          <a className="icon-custom">
            <IoChatbubbleOutline />
          </a>
          <AnimatedButton onClick={() => alert("Clicked!")}>
            ASK ME
          </AnimatedButton>
        </span>
      </nav>
    </>
  );
};

export default Navbar;

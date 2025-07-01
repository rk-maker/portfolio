"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./secondaryTextButon";
import StackedIcon from "./shadowIcon";
import { IoChatbubbleOutline, IoChatbubbleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav
      className="fixed z-10 flex items-center justify-between left-0 right-0 mx-auto px-10 py-8"
      style={{ width: "calc(100% - 40px)" }}
    >
      <div className="flex">
        <motion.div
          whileHover={{
            scale: 1.1,

            transition: { duration: 0.2 },
          }}
        >
          <img src={"./logo.png"} className="w-15 h-15" />
        </motion.div>
      </div>

      <span className="flex">
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
  );
};

export default Navbar;

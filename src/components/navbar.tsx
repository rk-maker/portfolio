"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./secondaryTextButon";
import StackedIcon from "./shadowIcon";
import { IoChatbubbleOutline, IoChatbubbleSharp } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <nav
      className="fixed z-10 flex items-center justify-between left-0 right-0 mx-auto px-10 py-8"
      style={{ width: "calc(100% - 40px)" }}
    >
      <div className="flex">
        <motion.div
          onClick={handleClick}
          whileHover={{
            scale: 1.1,

            transition: { duration: 0.2 },
          }}
        >
          <Image
            src={"/logo.png"}
            alt="my-image"
            className="w-15 h-15"
            width={60}
            height={60}
          />
        </motion.div>
      </div>

      <span className="flex">
        <StackedIcon
          OutlineIcon={IoChatbubbleOutline}
          FilledIcon={IoChatbubbleSharp}
          offset={4}
          size={32}
        />
        <AnimatedButton
          onClick={() => {
            window.location.href = "mailto:m.raffaykhan@outlook.com";
          }}
        >
          ASK ME
        </AnimatedButton>
      </span>
    </nav>
  );
};

export default Navbar;

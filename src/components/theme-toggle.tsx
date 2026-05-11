"use client";

import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary hover:bg-primary-hover transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;

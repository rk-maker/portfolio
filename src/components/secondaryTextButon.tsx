import React, { ReactNode, MouseEventHandler } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string; // optional for extra styling if needed
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
}: AnimatedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-sm tracking-[7px] transition-all hover:tracking-[12px] ease-in-out duration-200 cursor-pointer px-4 py-2  rounded ${className}`}
    >
      {children}
    </button>
  );
}

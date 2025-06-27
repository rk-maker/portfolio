"use client";

import { useEffect, useState } from "react";

export default function CartoonCharacter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateEyePosition = (eyeX: number, eyeY: number) => {
    const rect = document.querySelector(".character")?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };

    const eyeCenterX = rect.left + eyeX;
    const eyeCenterY = rect.top + eyeY;

    const angle = Math.atan2(
      mousePosition.y - eyeCenterY,
      mousePosition.x - eyeCenterX
    );
    const distance = Math.min(
      8,
      Math.sqrt(
        Math.pow(mousePosition.x - eyeCenterX, 2) +
          Math.pow(mousePosition.y - eyeCenterY, 2)
      ) / 10
    );

    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  const leftEye = calculateEyePosition(80, 60);
  const rightEye = calculateEyePosition(120, 60);

  return (
    <div className="character">
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Head */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="#FFE4B5"
          stroke="#4831D4"
          strokeWidth="3"
        />

        {/* Eyes */}
        <circle
          cx="80"
          cy="80"
          r="15"
          fill="white"
          stroke="#4831D4"
          strokeWidth="2"
        />
        <circle
          cx="120"
          cy="80"
          r="15"
          fill="white"
          stroke="#4831D4"
          strokeWidth="2"
        />

        {/* Eye pupils that follow mouse */}
        <circle cx={80 + leftEye.x} cy={80 + leftEye.y} r="6" fill="#4831D4" />
        <circle
          cx={120 + rightEye.x}
          cy={80 + rightEye.y}
          r="6"
          fill="#4831D4"
        />

        {/* Nose */}
        <ellipse cx="100" cy="100" rx="3" ry="6" fill="#4831D4" />

        {/* Mouth */}
        <path
          d="M 85 120 Q 100 135 115 120"
          stroke="#4831D4"
          strokeWidth="3"
          fill="none"
        />

        {/* Hair */}
        <path d="M 40 60 Q 100 20 160 60" fill="#4831D4" />
      </svg>
    </div>
  );
}

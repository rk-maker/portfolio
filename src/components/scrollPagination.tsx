"use client";

import { useState, useEffect } from "react";

interface ScrollPaginationProps {
  sections: string[];
}

export default function ScrollPagination({ sections }: ScrollPaginationProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionElements = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        const visibleEntry = entries.reduce((maxEntry, entry) => {
          return entry.intersectionRatio > maxEntry.intersectionRatio
            ? entry
            : maxEntry;
        });

        if (visibleEntry && visibleEntry.isIntersecting) {
          const index = Array.from(sectionElements).indexOf(
            visibleEntry.target
          );
          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Fine-grained thresholds from 0 to 1
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const sectionElements = document.querySelectorAll("section");
    sectionElements[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
      {sections.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(i)}
          className={`w-3 h-3 rounded-full transition-all duration-300
            ${
              activeIndex === i
                ? "bg-secondary scale-125 shadow-md"
                : "bg-thirdy/40"
            }
          `}
        />
      ))}
    </div>
  );
}

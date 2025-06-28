"use client";

import SectionHeader from "@/components/sectionHeader";
import { useState } from "react";

const experiences = [
  {
    company: "Tech Corp",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description:
      "Led development of scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects using modern web technologies.",
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 - 2020",
    description:
      "Developed responsive websites and web applications with focus on user experience.",
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="min-h-screen py-10 bg-primary">
      <div className="container px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            heading="My Journey So Far"
            description="Building reliable, scalable apps and solving real-world problems with code. I grow by tackling new challenges and learning every step of the way."
          />

          <div className="flex flex-col gap-12 md:flex-row">
            {/* Vertical tabs */}
            <div className="md:w-1/3">
              <div className="space-y-2">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 transition-all duration-300 border-l-2 ${
                      activeTab === index
                        ? "border-thirdy bg-secondary text-font"
                        : "border-transparent text-font/60 hover:border-thirdy/30 hover:text-font hover-striped-bg"
                    }`}
                  >
                    <div className="text-lg font-semibold">{exp.company}</div>
                    <div className="mt-1 text-sm text-thirdy">{exp.period}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3">
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold md:text-3xl text-font">
                  {experiences[activeTab].role}
                </h3>
                <p className="mb-6 font-medium text-thirdy">
                  {experiences[activeTab].period}
                </p>
                <p className="text-lg leading-relaxed text-font/80">
                  {experiences[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

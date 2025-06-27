"use client";

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
    <section
      id="experience"
      className="min-h-screen py-20"
      style={{ backgroundColor: "#CCF381" }}
    >
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold text-primary mb-16 text-center">
          Experience
        </h2>

        <div className="flex max-w-4xl mx-auto">
          {/* Vertical tabs */}
          <div className="flex flex-col space-y-4 mr-8">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-4 border-l-4 transition-all duration-300 ${
                  activeTab === index
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-gray-300 text-gray-600 hover:border-primary/50"
                }`}
              >
                <div className="font-semibold">{exp.company}</div>
                <div className="text-sm opacity-75">{exp.period}</div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <h3 className="text-2xl font-bold text-primary mb-2">
              {experiences[activeTab].role}
            </h3>
            <p className="text-primary/80 mb-4">
              {experiences[activeTab].period}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {experiences[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

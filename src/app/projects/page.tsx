"use client";
import SvgComponent from "@/assets/techVector";
import { ProjectCard } from "@/components/project-card";
import { motion, useAnimation, Variants } from "framer-motion";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  media: {
    type: "video" | "photos"; // Updated to support photos type
    src: string | string[]; // Support array of images for photos
    alt?: string;
  };
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  detailedDescription?: string; // Added detailed description
  features?: string[]; // Added features list
}

interface ProjectsSectionProps {
  projects: Project[];
  title?: string;
  className?: string;
}
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    media: {
      type: "video" as const,
      src: "/ecommerce-platform-demo-video.png",
      alt: "E-Commerce Platform Demo",
    },
    links: {
      live: "https://example.com",
      github: "https://github.com/username/project",
      demo: "https://demo.example.com",
    },
    detailedDescription:
      "This comprehensive e-commerce platform was built to handle high-traffic scenarios with advanced caching strategies and optimized database queries. The platform includes a sophisticated inventory management system, automated email notifications, and comprehensive analytics dashboard for business insights.",
    features: [
      "Real-time inventory tracking and low-stock alerts",
      "Multi-payment gateway integration (Stripe, PayPal, Apple Pay)",
      "Advanced search and filtering with Elasticsearch",
      "Automated order processing and fulfillment workflows",
      "Comprehensive admin dashboard with sales analytics",
      "Mobile-responsive design with PWA capabilities",
    ],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools for modern banking needs.",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "JWT",
      "Biometric Auth",
    ],
    media: {
      type: "photos" as const,
      src: [
        "/mobile-banking-app-login-screen.png",
        "/mobile-banking-app-dashboard.png",
        "/mobile-banking-app-transaction-history.png",
        "/mobile-banking-app-transfer-money.png",
      ],
      alt: "Mobile Banking App Screenshots",
    },
    links: {
      github: "https://github.com/username/banking-app",
      demo: "https://banking-demo.example.com",
    },
    detailedDescription:
      "A cutting-edge mobile banking solution that prioritizes security and user experience. Built with React Native for cross-platform compatibility, featuring end-to-end encryption, biometric authentication, and real-time fraud detection systems.",
    features: [
      "Biometric login (fingerprint and face recognition)",
      "Real-time transaction notifications and alerts",
      "Secure peer-to-peer money transfers",
      "Bill payment automation and scheduling",
      "Spending analytics and budget tracking",
      "Multi-language support and accessibility features",
    ],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics. Features clean design and real-time data updates.",
    technologies: ["React", "Chart.js", "Weather API", "CSS Grid", "PWA"],
    media: {
      type: "video" as const,
      src: "/weather-dashboard-demo.png",
      alt: "Weather Dashboard Demo",
    },
    links: {
      live: "https://weather.example.com",
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-demo.example.com",
    },
    detailedDescription:
      "An advanced weather dashboard that aggregates data from multiple weather APIs to provide the most accurate forecasts. Features interactive maps, historical weather data analysis, and personalized weather alerts based on user preferences and location.",
    features: [
      "7-day detailed weather forecasts with hourly breakdowns",
      "Interactive weather maps with radar and satellite imagery",
      "Severe weather alerts and notifications",
      "Historical weather data and trend analysis",
      "Multiple location tracking and comparison",
      "Offline functionality with cached weather data",
    ],
  },
];
const projectsSections: Variants = {
  hidden: {
    y: "100%", // Start off-screen to the right
    opacity: 0,
  },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.08, // Starts right after line completes
      duration: 0.4,
      ease: [0.6, 0, 0.3, 1], // Smooth slide-in
    },
  }),
};
export default function ProjectsSection({
  title = "Featured Projects",
  className = "",
}: ProjectsSectionProps) {
  const projectSectionControl = useAnimation();
  useEffect(() => {
    projectSectionControl.start("visible");
  }, [projectSectionControl]);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}

        <motion.div className="md:pt-33 md:px-7">
          <span className="text-8xl md:text-8xl font-light">
            {title}
            <span className="text-secondary">.</span>
          </span>
        </motion.div>

        {/* Projects List - each project is now a full section */}
        <div className="divide-y-2 divide-[#aee1f5]/30">
          {projects.map((project, index) => (
            <motion.div
              variants={projectsSections}
              initial="hidden"
              animate={projectSectionControl}
              key={index}
              custom={index}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                media={project.media}
                links={project.links}
                detailedDescription={project.detailedDescription}
                features={project.features}
                className=""
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

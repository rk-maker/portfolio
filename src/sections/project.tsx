"use client";
import SectionHeader from "@/components/sectionHeader";

// const projects = [
//   {
//     title: "E-commerce Platform",
//     description:
//       "Full-stack e-commerce solution with React, Node.js, and MongoDB",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     title: "Task Management App",
//     description: "Collaborative task management tool with real-time updates",
//     tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     title: "Weather Dashboard",
//     description: "Interactive weather dashboard with data visualization",
//     tech: ["React", "D3.js", "Weather API", "CSS3"],
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     title: "Weather Dashboard",
//     description: "Interactive weather dashboard with data visualization",
//     tech: ["React", "D3.js", "Weather API", "CSS3"],
//     image: "/placeholder.svg?height=200&width=300",
//   },
// ];
export default function ProjectsSection() {
  return (
    <section id="projects" className="h-screen w-full bg-primary">
      <div className="container px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            heading="What I've Built"
            description="From frontend interfaces to backend logic, I craft projects that are both functional and user-friendly—designed to make an impact."
          />

          <div className="relative inline-block group">
            <div
              className={`
            absolute inset-0 translate-x-1 translate-y-1 rounded-lg transition-all duration-300
            bg-[length:12px_12px]
            bg-[repeating-linear-gradient(45deg,#aadcec_0,#aadcec_2px,transparent_2px,transparent_8px)]
            group-hover:bg-[var(--color-secondary)]
            group-hover:bg-none
          `}
            ></div>

            {/* Button */}
            <button
              className="
            relative z-10 border-3 border-[var(--color-thirdy)] rounded-lg 
            bg-transparent px-6 py-2 transition-all duration-300
          "
            >
              <p
                className="
              font-bold text-[var(--color-thirdy)] transition-all duration-300
              group-hover:[text-shadow:2px_2px_white]
            "
              >
                Check out all projects
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

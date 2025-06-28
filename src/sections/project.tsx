"use client";
import SectionHeader from "@/components/sectionHeader";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization",
    tech: ["React", "D3.js", "Weather API", "CSS3"],
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-24 bg-primary">
      <div className="container px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            heading="What I've Built"
            description="From frontend interfaces to backend logic, I craft projects that are both functional and user-friendly—designed to make an impact."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="transition-all duration-300 transform cursor-pointer group hover:-translate-y-2"
              >
                <div className="overflow-hidden transition-all duration-300 border bg-white/50 backdrop-blur-sm rounded-2xl border-thirdy/10 hover:border-thirdy/30">
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-secondary/20 to-thirdy/10">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-font">
                      {project.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-font/70">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full text-thirdy bg-secondary border-thirdy border-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

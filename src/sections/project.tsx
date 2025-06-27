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
    <section id="projects" className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold text-secondary mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

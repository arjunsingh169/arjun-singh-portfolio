
export default function Projects() {
  const projects = [
    {
      title: "Weather App",
      description: "A real-time weather application built with React and OpenWeather API",
      tech: ["React", "API Integration", "CSS"]
    },
    {
      title: "Todo List",
      description: "A feature-rich todo list application with local storage",
      tech: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="section-title text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A full-stack hospital management platform handling patients, staff, billing, and appointments with integrated authentication and admin features.",
      tags: ["React", "Tailwind", "Flask", "PostgreSQL"],
      color: "from-blue-500 to-blue-700",
      live: "https://hospital-mgmt-frontend.onrender.com/",
    },
    {
      title: "Incident Report System",
      description:
        "A web app for reporting, tracking, and managing incidents in real time, with Flask backend and PostgreSQL database.",
      tags: ["React", "Flask", "Tailwind", "PostgreSQL"],
      color: "from-purple-500 to-purple-700",
      live: "https://incident-report-29zv.onrender.com",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 lg:pt-20 pb-10 animate-fadeIn text-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center sm:text-left">
        Projects
      </h2>
      <p className="text-gray-400 mb-10 leading-relaxed text-center sm:text-left text-sm sm:text-base">
        Here are some of my featured projects that demonstrate my experience in
        building modern and scalable web applications.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
          >
            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
            <div className="p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
              >
                <ExternalLink size={18} /> <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

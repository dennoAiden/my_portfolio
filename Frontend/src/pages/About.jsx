import { Code2, Server } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 lg:pt-20 pb-10 animate-fadeIn text-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center sm:text-left">
        About Me
      </h2>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
          I'm a passionate Full Stack Developer with expertise in building
          modern, scalable web applications. I love turning ideas into reality
          through clean code and intuitive user experiences.
        </p>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          With a strong foundation in both frontend and backend technologies, I
          create end-to-end solutions that not only look great but perform
          exceptionally well.
        </p>
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center sm:text-left">
        What I Do
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Frontend */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all">
          <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
            <Code2 className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
            Frontend Development
          </h4>
          <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
            I craft responsive and interactive user interfaces using modern
            frameworks and libraries. My focus is on creating seamless
            experiences that users love.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind CSS", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-950 text-blue-300 text-xs sm:text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all">
          <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4">
            <Server className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
            Backend Development
          </h4>
          <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
            I build robust server-side applications with scalable architectures,
            secure APIs, and efficient database systems.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Flask", "PostgreSQL", "MongoDB", "REST APIs", "Django"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-green-950 text-green-300 text-xs sm:text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

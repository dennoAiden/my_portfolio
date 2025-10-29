import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 lg:pt-20 pb-10 animate-fadeIn text-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center sm:text-left">
        Resume
      </h2>

      {/* Professional Summary */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-10">
        <h3 className="text-2xl font-bold text-white mb-4">
          Professional Summary
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          Results-driven Software Engineer with a foundation in Electrical and
          Electronics Engineering and experience delivering full-stack
          applications and electrical system solutions. Developed and deployed
          multiple web applications including hospital management and incident
          reporting platforms to streamline workflows. Skilled in building
          scalable applications with React, Node.js, Flask, Django, and
          PostgreSQL. Adept at collaborating across teams to deliver
          high-quality solutions within tight deadlines.
        </p>
      </div>

      {/* Experience */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-bold text-white">Experience</h3>
        </div>

        <div className="space-y-8">
          <div className="relative pl-8 border-l-2 border-blue-600">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
            <div className="mb-1">
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Freelance Software Developer
              </h4>
              <p className="text-blue-400 font-medium text-sm">
                Nairobi, Kenya
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Jan 2024 – Present
              </p>
            </div>
            <ul className="list-disc ml-6 text-gray-300 leading-relaxed space-y-2 text-sm sm:text-base">
              <li>
                Developed and deployed custom web applications for clients,
                improving workflows and engagement.
              </li>
              <li>
                Built scalable full-stack platforms using React, Flask, Django,
                and PostgreSQL for reliability and performance.
              </li>
              <li>
                Automated workflows, reducing data processing time by 30%.
              </li>
              <li>
                Collaborated with clients remotely to deliver tailored
                solutions.
              </li>
              <li>
                Integrated APIs, optimized databases, and improved UI
                responsiveness.
              </li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-700">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-700 rounded-full"></div>
            <div className="mb-1">
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Electrical Engineering Intern
              </h4>
              <p className="text-blue-400 font-medium text-sm">
                Kubtech Engineering Services
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Aug 2023 – Dec 2023
              </p>
            </div>
            <ul className="list-disc ml-6 text-gray-300 leading-relaxed space-y-2 text-sm sm:text-base">
              <li>
                Conducted preventive maintenance on electrical equipment to
                minimize downtime.
              </li>
              <li>
                Assisted in electrical installations and system designs meeting
                project timelines.
              </li>
              <li>
                Collaborated on circuit design improvements for energy
                efficiency.
              </li>
              <li>Prepared detailed maintenance and performance reports.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white">
              Bachelor of Engineering in Electrical and Electronics Engineering
            </h4>
            <p className="text-blue-400 font-medium">
              Technical University of Kenya
            </p>
            <p className="text-sm text-gray-400">Graduated: 2024</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">
              Software Engineering - Certificate
            </h4>
            <p className="text-blue-400 font-medium">Moringa School</p>
            <p className="text-sm text-gray-400">Graduated: 2024</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-bold text-white">Certifications</h3>
        </div>
        <ul className="list-disc ml-6 text-gray-300 space-y-2 text-sm sm:text-base">
          <li>Problem Solving Techniques – LinkedIn (2024)</li>
          <li>Project Management Foundations – LinkedIn (2024)</li>
          <li>Design Thinking – LinkedIn (2024)</li>
        </ul>
      </div>

      {/* Skills */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Frontend */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "HTML",
                "TypeScript",
                "CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-950 text-blue-300 text-xs sm:text-sm rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Flask",
                "Express",
                "PostgreSQL",
                "MongoDB",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-950 text-green-300 text-xs sm:text-sm rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="sm:col-span-2">
            <h4 className="font-semibold text-gray-200 mb-3">Other Skills</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "C++",
                "Git",
                "Docker",
                "VS Code",
                "Firebase",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

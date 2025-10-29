import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className="
        bg-gray-950 text-gray-200 border-b lg:border-b-0 lg:border-r border-gray-800 
        shadow-xl p-6 flex flex-col items-center 
        w-full lg:w-80
        sticky top-0 lg:static z-20
      "
    >
      {/* Profile Card */}
      <div className="relative bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6 w-full flex flex-col items-center">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-3 right-3 text-gray-400 hover:text-blue-400 transition-all"
          aria-label="Toggle Info"
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        {/* Profile Image */}
        <div className="w-28 h-28 rounded-2xl overflow-hidden mb-3 shadow-lg border-4 border-gray-700">
          <img
            src="/images/my.png"
            alt="Dennis Kipkurui"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Role */}
        <h1 className="text-xl font-bold text-white text-center">
          Dennis Kipkurui
        </h1>
        <p className="text-blue-400 text-sm font-medium text-center">
          Full Stack Developer
        </p>
      </div>

      {/* Expandable Section */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } w-full`}
      >
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mt-2 shadow-lg text-center">
          {/* Contact Info */}
          <div className="space-y-3 text-gray-400">
            <p className="flex justify-center items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              kipkiruidennis25@gmail.com
            </p>
            <p className="flex justify-center items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              +254 741 952 205
            </p>
            <p className="flex justify-center items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              Nairobi, Kenya
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://twitter.com/Dennisk68432169"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/dennoAiden"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dennis-kipkurui-40b3122a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-gray-600 text-center mt-6">
            © {new Date().getFullYear()} Dennis Kipkurui
          </p>
        </div>
      </div>
    </aside>
  );
}

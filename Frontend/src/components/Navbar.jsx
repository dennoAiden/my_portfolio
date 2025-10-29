import { NavLink } from "react-router-dom";
import { User, FileText, FolderOpen, MessageSquare } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { path: "/", label: "About", icon: User },
    { path: "/resume", label: "Resume", icon: FileText },
    { path: "/projects", label: "Projects", icon: FolderOpen },
    { path: "/contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <nav
      className="
        fixed w-full z-30
        bg-gray-950/95 backdrop-blur border-gray-800
        border-t lg:border-t-0 lg:border-b
        bottom-0 lg:bottom-auto lg:top-0
        h-16
      "
    >
      <div className="flex justify-around lg:justify-center lg:gap-8 px-4 py-3 h-full items-center">
        <ul className="flex gap-6">
          {navItems.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

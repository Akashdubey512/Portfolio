import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Button from "@/components/ui/Button";
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isHome = location.pathname === "/";
  useScrollSpy(["hero", "projects-preview"]); 

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
<nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition
             ${isActive
             ? "text-indigo-300"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition
             ${isActive
             ? "text-indigo-300"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm font-medium transition
             ${isActive
             ? "text-indigo-300"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `text-sm font-medium transition
             ${isActive
             ? "text-indigo-300"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}
              }`
            }
          >
            Skills
          </NavLink>
        </div>

        <Button
         variant="outline"
         size="sm"
         onClick={toggleTheme}
         >
         {theme === "light" ? "Dark" : "Light"}
        </Button>

      </nav>
    </header>
  );
};

export default Header;

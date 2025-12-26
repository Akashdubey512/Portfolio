import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isHome = location.pathname === "/";
  useScrollSpy(["hero", "projects-preview"]); // always called

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
<nav className="flex items-center justify-between px-4 py-4">
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm ${
                isActive && isHome
                  ? "font-semibold underline"
                  : "text-gray-400 dark:text-gray-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm ${
                isActive
                  ? "font-semibold underline"
                  : "text-gray-400 dark:text-gray-500"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm ${
                isActive
                  ? "font-semibold underline"
                  : "text-gray-400 dark:text-gray-500"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `text-sm ${
                isActive
                  ? "font-semibold underline"
                  : "text-gray-400 dark:text-gray-500"
              }`
            }
          >
            Skills
          </NavLink>
        </div>

        <button
          onClick={toggleTheme}
           aria-label="Toggle dark mode"
          className="rounded px-3 py-1 text-sm border border-gray-300 dark:border-gray-700"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>
    </header>
  );
};

export default Header;

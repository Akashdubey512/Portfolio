import { useTheme } from "@/hooks/useTheme";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sections = [
  { id: "hero", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "skills", label: "Skills", path: "/skills" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(sections.map((s) => s.id));

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <nav className="flex items-center justify-between px-6 py-4">
        
        {/* Navigation */}
        <div className="flex gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={section.path === "/" ? `/#${section.id}` : section.path}
              className={`text-sm transition-colors ${
                activeSection === section.id
                  ? "font-semibold underline"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded px-3 py-1 text-sm border
                     border-gray-300 dark:border-gray-700"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>
    </header>
  );
};

export default Header;

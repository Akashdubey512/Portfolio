import React from "react";
import { useTheme } from "@/hooks/useTheme.js";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="flex items-center justify-between px-6 py-4">
        <span className="font-semibold">Header</span>

        <button
          onClick={toggleTheme}
          className="rounded px-3 py-1 text-sm border
                     border-gray-300 dark:border-gray-700"
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </nav>
    </header>
    );
};

export default Header;
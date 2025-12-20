import { useEffect,useState } from "react";

const THEME_KEY = "theme";

export const useTheme =() => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem(THEME_KEY) || "light";
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(THEME_KEY, theme);
        
    },
    [theme]);

    const toggleTheme = () => {
        setTheme((prev)=>(prev === "light" ? "dark" : "light"));
    }

    return { theme, toggleTheme };
}
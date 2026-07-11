import { useEffect, useState, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";

// helper function
const getSystemTheme = () => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      return stored || getSystemTheme();
    } catch (e) {
      return getSystemTheme();
    }
  });

  const toggleTheme = useCallback((value) => {
    setTheme((prev) => {
      if (typeof value === "string") return value;
      return prev === "dark" ? "light" : "dark";
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = typeof document !== "undefined" ? document.documentElement : null;
    if (!root) return;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

// helper function to detect user's preferred theme setting
const getSystemTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark"; // system dark mode
  }
  return "light"; // system light mod
};

// component to wrap App and provide theme
export const ThemeProvider = ({ Children }) => {
  // check localStorage, otherwise fall back to system theme pref
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || getSystemTheme;
  });

  // toggle theme function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // useEffect runs whenever 'theme' changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    root.classList.remove("light", "dark"); // remove old them class
    root.classList.add(theme); // add new theme class
  }, [theme]);

  // ** Check if remove Provider still works (React 19)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {Children}
    </ThemeContext.Provider>
  )

}
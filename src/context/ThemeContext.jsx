import { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;

      const isDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      return isDark ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // apply theme
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark", "light");

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.add("light");
    } else if (theme === "system") {
      const isDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      root.classList.add(isDark ? "dark" : "light");
    }
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <themeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
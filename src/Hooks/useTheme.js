
import { useEffect, useState } from "react";

export default function useTheme() {
  const getInitial = () => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return stored ? stored === "dark" : systemPrefersDark;
  };

  const [isDark, setIsDark] = useState(getInitial);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
}

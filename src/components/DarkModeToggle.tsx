// DarkModeToggle.tsx
"use client";
import { useState, useEffect, JSX } from "react";

type Theme = "light" | "dark" | "creeper";

function CreeperIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className="fill-green-900 dark:fill-green-600">
      <rect x="6" y="6" width="6" height="6" />
      <rect x="20" y="6" width="6" height="6" />
      <rect x="12" y="12" width="8" height="8" />
      <rect x="8" y="20" width="6" height="6" />
      <rect x="18" y="20" width="6" height="6" />
    </svg>
  );
}

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "creeper");
    root.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark" || saved === "creeper") {
      applyTheme(saved);
    } else {
      applyTheme("light");
    }
  }, []);

  const nextThemeMap: Record<Theme, { label: string; icon: JSX.Element }> = {
    light: { label: "Dark", icon: <>🌙</> },
    dark: { label: "Creeper", icon: <CreeperIcon /> },
    creeper: { label: "Light", icon: <>☀️</> },
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : theme === "dark" ? "creeper" : "light";
    applyTheme(nextTheme);
  };

  const currentThemeMap: Record<Theme, { label: string; icon: JSX.Element }> = {
    light: { label: "Light", icon: <>☀️</> },
    dark: { label: "Dark", icon: <>🌙</> },
    creeper: { label: "Creeper", icon: <CreeperIcon /> },
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 creeper:border-green-900 flex items-center gap-2"
    >
      {currentThemeMap[theme].icon} <span>{currentThemeMap[theme].label}</span>
    </button>
  );
}

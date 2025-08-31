// ThemeProvider.tsx
"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "creeper";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

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
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ opacity: 0 }}>{children}</div>;

  return <>{children}</>;
}

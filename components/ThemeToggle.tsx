"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-primary-light/10 dark:bg-purple-500/20 hover:bg-primary-light/20 dark:hover:bg-purple-500/30 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-primary-dark dark:text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-primary-dark dark:text-purple-500" />
      )}
    </button>
  );
}

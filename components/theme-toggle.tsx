"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/providers/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 text-sm border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
}

"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to true as you had it, or check system preference
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 1. Initial Load: Sync state with localStorage or System Pref
  useEffect(() => {
    const savedTheme = localStorage.getItem("nexus-mind-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const shouldBeDark = savedTheme !== null ? savedTheme === "dark" : systemPrefersDark;
    
    setIsDarkMode(shouldBeDark);
  }, []);

  // 2. The Actual Theme Changer: Syncs React State to the HTML DOM
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("nexus-mind-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("nexus-mind-theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
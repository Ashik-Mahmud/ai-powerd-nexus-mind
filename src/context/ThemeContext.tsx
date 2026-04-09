"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("nexus-mind-theme");
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === "dark");
    }
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    // Save to localStorage
    localStorage.setItem("nexus-mind-theme", newValue ? "dark" : "light");
  };

  // Always provide the context, even during initial render
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

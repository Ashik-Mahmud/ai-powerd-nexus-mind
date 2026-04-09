"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageSquare,
  Settings,
  Home,
  HelpCircle,
  Menu,
  X,
  Upload,
  Moon,
  Sun,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useTheme } from "@/src/context/ThemeContext";

export default function Sidebar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Chat",
      href: "/dashboard",
      icon: MessageSquare,
      description: "Ask general questions",
    },
    {
      label: "Upload",
      href: "/dashboard/upload",
      icon: Upload,
      description: "Upload documents",
    },
    {
      label: "History",
      href: "/dashboard/history",
      icon: Home,
      description: "View conversation history",
    },
    {
      label: "Help",
      href: "/dashboard/help",
      icon: HelpCircle,
      description: "Get help and documentation",
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      description: "Customize your experience",
    },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-10 left-2 z-40 lg:hidden p-2 rounded-lg transition-all duration-200 transform -translate-y-1/2 ${
          isDarkMode
            ? "bg-slate-800 hover:bg-slate-700 text-white shadow-lg"
            : "bg-slate-200 hover:bg-slate-300 text-slate-900 shadow-lg"
        } ${isOpen ? "left-64" : "left-2"}`}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <ChevronLeft className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronRight className="w-5 h-5 text-slate-500" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen z-30 transition-all duration-300 ${
          isOpen ? "w-64" : "w-0"
        } lg:w-64 overflow-hidden ${
          isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        } border-r`}
      >
        <div className="h-full flex flex-col">
          {/* Logo Section */}
          <div
            className={`p-6 border-b ${
              isDarkMode ? "border-slate-800" : "border-slate-200"
            }`}
          >
            <h1
              className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}
            >
              Nexus Mind
            </h1>
            <p
              className={`text-sm mt-2 ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              AI-Powered Assistant
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`group relative p-4 rounded-lg transition-all duration-200 cursor-pointer ${
                      active
                        ? isDarkMode
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : isDarkMode
                          ? "hover:bg-slate-800 text-slate-300 hover:text-white"
                          : "hover:bg-slate-100 text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{item.label}</p>
                        <p
                          className={`text-xs opacity-75 ${
                            active
                              ? "text-white/70"
                              : isDarkMode
                                ? "text-slate-500"
                                : "text-slate-500"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Active indicator */}
                    {active && (
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full" />
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div
            className={`p-4 border-t space-y-4 ${
              isDarkMode ? "border-slate-800" : "border-slate-200"
            }`}
          >
            {/* Theme Controller */}
            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Theme
              </span>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
                    : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Version */}
            <p
              className={`text-xs text-center ${
                isDarkMode ? "text-slate-500" : "text-slate-600"
              }`}
            >
              © 2026 Nexus Mind v1.0
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

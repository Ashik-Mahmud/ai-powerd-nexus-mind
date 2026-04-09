"use client";

import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { useTheme } from "@/src/context/ThemeContext";

interface LayoutShellProps {
    children: ReactNode;
    className?: string;
}

export default function LayoutShell({
    children,
    className = "",
}: LayoutShellProps) {
    const { isDarkMode } = useTheme();

    return (
        <div
            className={`relative min-h-screen w-full overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-slate-950" : "bg-white"
                }`}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Background */}
                <div
                    className={`absolute inset-0 transition-colors duration-300 ${isDarkMode
                            ? "bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"
                            : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
                        }`}
                />

                {/* Bento Grid Pattern */}
                <div
                    className={`absolute inset-0 bg-[linear-gradient(90deg,var(--grid-color)_1px,transparent_1px),linear-gradient(var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px] transition-colors duration-300`}
                    style={{
                        "--grid-color": isDarkMode
                            ? "rgba(148,163,184,0.05)"
                            : "rgba(148,163,184,0.1)",
                    } as React.CSSProperties}
                />

                {/* Radial Gradient Accents */}
                <div
                    className={`absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-300 ${isDarkMode
                            ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                            : "bg-gradient-to-r from-blue-400/15 to-purple-400/15"
                        }`}
                />
                <div
                    className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-300 ${isDarkMode
                            ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                            : "bg-gradient-to-r from-purple-400/15 to-pink-400/15"
                        }`}
                />
            </div>

            {/* Content Container */}
            <div className={`relative z-10 min-h-screen w-full lg:ml-64 transition-margin duration-300`}>
                {/* Header with Theme Toggle */}
                <div className={`sticky top-0 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 backdrop-blur-sm ${isDarkMode ? "bg-slate-950/50 border-slate-800" : "bg-white/50 border-slate-200"} border-b`}>
                    <div></div>
                    <div></div>
                </div>

                {/* Main Content */}
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                    {children}
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar />
        </div>
    );
}

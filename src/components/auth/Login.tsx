"use client";
import { useTheme } from '@/src/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {}

const LoginComponent = (props: Props) => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? "bg-slate-950" : "bg-slate-50"}`}>
            <div className="max-w-md w-full space-y-8 p-8">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Nexus Mind
                        </h1>
                        <p className={`mt-2 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>AI-Powered Assistant</p>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg border transition-colors ${isDarkMode ? "border-slate-700 bg-slate-800 text-yellow-300 hover:bg-slate-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"}`}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>

                <div className={`rounded-lg p-8 shadow-lg border ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                    <h2 className={`text-2xl font-semibold mb-6 text-center ${isDarkMode ? "text-white" : "text-slate-900"}`}>Sign In</h2>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className={`mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? "bg-slate-800 border-slate-700 text-white placeholder-slate-400" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-500"}`}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className={`mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? "bg-slate-800 border-slate-700 text-white placeholder-slate-400" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-500"}`}
                                placeholder="Enter your password"
                            />
                        </div>

                        <Link
                            href="/dashboard"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Sign In
                        </Link>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-slate-400">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-blue-400 hover:text-blue-300">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent
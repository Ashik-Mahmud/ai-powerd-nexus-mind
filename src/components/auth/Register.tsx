"use client";
import { useTheme } from '@/src/context/ThemeContext';
import { Moon, Sun, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const RegisterComponent = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { signUp } = useSignUp();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!signUp) return;

        setLoading(true);
        setError("");

        try {
            const result = await signUp.create({
                emailAddress: email,
                password,
            });
        

            if (result.error) {
                setError(result.error.longMessage || result?.error?.message || 'Sign up failed.');
            } else if (signUp.status === 'complete') {
                const finalizeResult = await signUp.finalize();
                if (finalizeResult.error) {
                    setError(finalizeResult.error.longMessage || 'Unable to complete sign up.');
                } else {
                    router.push('/dashboard');
                }
            } else {
                // Email verification required
                const sendCodeResult = await signUp.verifications.sendEmailCode();
                if (sendCodeResult.error) {
                    setError(sendCodeResult.error.longMessage || 'Failed to send verification code.');
                } else {
                    setPendingVerification(true);
                }
            }
        } catch (err: unknown) {
            const clerkError = err as { errors?: Array<{ longMessage?: string }> };
            setError(clerkError.errors?.[0]?.longMessage || 'Sign up failed.');
        } finally {
            setLoading(false);
        }
    };

    const onPressVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!signUp) return;

        setLoading(true);
        setError("");

        try {
            const verificationResult = await signUp.verifications.verifyEmailCode({ code });

            if (verificationResult.error) {
                setError(verificationResult.error.longMessage || 'Invalid verification code.');
            } else if (signUp.status === 'complete') {
                const finalizeResult = await signUp.finalize();
                if (finalizeResult.error) {
                    setError(finalizeResult.error.longMessage || 'Unable to complete sign up.');
                } else {
                    router.push('/dashboard');
                }
            }
        } catch (err: unknown) {
            const clerkError = err as { errors?: Array<{ longMessage?: string }> };
            setError(clerkError.errors?.[0]?.longMessage || 'Invalid verification code.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
            <div className="max-w-md w-full space-y-8 p-8">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Nexus Mind
                        </h1>
                        <p className={`mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Join the future</p>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg border transition-colors ${isDarkMode ? 'border-slate-700 bg-slate-800 text-yellow-300 hover:bg-slate-700' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'}`}
                    >
                        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>

                <div className={`rounded-lg p-8 shadow-lg border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <h2 className={`text-2xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {pendingVerification ? 'Verify Email' : 'Create Account'}
                    </h2>

                    {error && (
                        <div className="mb-4 p-3 text-sm text-red-500 bg-red-50 border border-red-500/20 rounded-md">
                            {error}
                        </div>
                    )}

                    {!pendingVerification ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className={`mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className={`mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                                    placeholder="Create a password"
                                />
                            </div>

                            {/* Clerk Smart CAPTCHA Widget */}
                            <div id="clerk-captcha" className="flex justify-center" />

                            <button
                                type="submit"
                                disabled={!signUp || loading}
                                className="w-full flex justify-center items-center py-2 px-4 rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Continue'}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={onPressVerify} className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Verification Code</label>
                                <input
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                    placeholder="Enter the code from your email"
                                    className={`mt-1 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center items-center py-2 px-4 rounded-md text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:opacity-50"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Verify & Sign Up'}
                            </button>
                        </form>
                    )}

                    <div className="mt-6 text-center">
                        <p className="text-sm text-slate-400">
                            Already have an account?{' '}
                            <Link href="/login" className="text-blue-400 hover:text-blue-300">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;
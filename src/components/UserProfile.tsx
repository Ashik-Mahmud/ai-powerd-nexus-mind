"use client";
import { useUser, useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { useTheme } from "@/src/context/ThemeContext";
import Image from "next/image";


export default function UserProfile() {
    const { user } = useUser();
    const { signOut } = useClerk();
    const { isDarkMode } = useTheme();

    if (!user) return null;

    const handleSignOut = async () => {
        await signOut(
            {
                redirectUrl: "/login",
            },
           
        );
    };

    return (
        <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 flex-1">
                    {user.imageUrl && (
                        <Image
                            src={user.imageUrl}
                            alt={user.firstName || "User"}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                        />
                    )}
                    <div className="min-w-0">
                        <p className={`text-sm font-semibold truncate ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            {user.firstName && user.lastName
                                ? `${user.firstName} ${user.lastName}`
                                : user.firstName || user.primaryEmailAddress?.emailAddress || 'User'}
                        </p>
                        <p className={`text-xs truncate ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            {user.primaryEmailAddress?.emailAddress}
                        </p>
                    </div>
                </div>
            </div>

            <button
                onClick={handleSignOut}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isDarkMode ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
            >
                <LogOut className="w-4 h-4" />
                Sign Out
            </button>
        </div>
    );
}

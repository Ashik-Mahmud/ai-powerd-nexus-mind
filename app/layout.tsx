"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CopilotKit } from "@copilotkit/react-core";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: In Next.js 13+, metadata doesn't work in client components
// Move this to a separate server component wrapper if needed

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getPersistentThreadId = () => {
    const saved = localStorage.getItem("copilot_thread_id");
    if (saved) return saved;
    const newId = crypto.randomUUID();
    localStorage.setItem("copilot_thread_id", newId);
    return newId;
  };
  return (
    <CopilotKit
      runtimeUrl="/api/copilotkit"
      showDevConsole={false}
      publicLicenseKey={process.env.COPILOT_PUBLIC_LICENSE_KEY}
      // This tells the agent not to check the state too aggressively
      threadId={getPersistentThreadId()}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </CopilotKit>
  );
}

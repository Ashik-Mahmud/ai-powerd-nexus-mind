"use client";

import ChatPanel from "@/src/components/ChatPanel";

export default function Home() {
  return (
    <div className="flex flex-col items-center flex-1 h-screen bg-white dark:bg-black">
      <div className="w-1/2 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden mt-10 h-[calc(100vh-2.5rem)]">
        <ChatPanel />
      </div>
    </div>
  );
}

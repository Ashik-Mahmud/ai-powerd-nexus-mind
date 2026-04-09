import { Metadata } from "next";
import LayoutShell from "@/src/components/LayoutShell";

export const metadata: Metadata = {
  title: "History - Nexus Mind",
  description: "View your conversation history",
};

export default function History() {
  return (
    <LayoutShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Conversation History
          </h1>
          <p className="text-slate-400 mt-2">
            Review your previous conversations and ask follow-up questions
          </p>
        </div>
        {/* History list will go here */}
        <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
          <p className="text-slate-400">History component coming soon...</p>
        </div>
      </div>
    </LayoutShell>
  );
}

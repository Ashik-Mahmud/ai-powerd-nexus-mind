import ChatPanel from "@/src/components/ChatPanel";
import LayoutShell from "@/src/components/LayoutShell";
import ResizeablePanel from "@/src/components/ResizeablePanel";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/src/components/ui/resizable";
import { Metadata } from "next";

// add meta data
export const metadata: Metadata = {
  title: "Dashboard - Nexus Mind",
  description: "Your AI-powered assistant dashboard",
};

export default function DashboardHome() {
  return (
    <LayoutShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to Nexus Mind
          </h1>
          <p className="text-slate-400 mt-2">
            Ask questions about anything or upload documents for personalized answers
          </p>
        </div>
        <ResizeablePanel />
      </div>
    </LayoutShell>
  );
}

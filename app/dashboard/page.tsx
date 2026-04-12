import ChatAreaWrapper from "@/src/components/chatPannel/ChatAreaWrapper";
import ChatPanel from "@/src/components/chatPannel/ChatPanel";
import LayoutShell from "@/src/components/LayoutShell";
import ResizeablePanel from "@/src/components/ResizeablePanel";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/src/components/ui/resizable";
import RotatingText from "@/src/components/ui/RotatingText";
import { CopilotChat, CopilotSidebar } from "@copilotkit/react-core/v2";
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
               <ChatAreaWrapper />
            </div>
        </LayoutShell>
    );
}

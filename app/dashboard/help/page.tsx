import { Metadata } from "next";
import LayoutShell from "@/src/components/LayoutShell";

export const metadata: Metadata = {
  title: "Help - Nexus Mind",
  description: "Get help and learn how to use Nexus Mind",
};

export default function Help() {
  return (
    <LayoutShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Help & Documentation
          </h1>
          <p className="text-slate-400 mt-2">
            Learn how to get the most out of Nexus Mind
          </p>
        </div>
        {/* Help content will go here */}
        <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
          <p className="text-slate-400">Help documentation coming soon...</p>
        </div>
      </div>
    </LayoutShell>
  );
}

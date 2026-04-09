import { Metadata } from "next";
import LayoutShell from "@/src/components/LayoutShell";

export const metadata: Metadata = {
  title: "Settings - Nexus Mind",
  description: "Customize your Nexus Mind experience",
};

export default function Settings() {
  return (
    <LayoutShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-slate-400 mt-2">
            Customize your preferences and account settings
          </p>
        </div>
        {/* Settings form will go here */}
        <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
          <p className="text-slate-400">Settings panel coming soon...</p>
        </div>
      </div>
    </LayoutShell>
  );
}

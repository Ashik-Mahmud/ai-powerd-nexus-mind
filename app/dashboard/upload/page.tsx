import { Metadata } from "next";
import LayoutShell from "@/src/components/LayoutShell";

export const metadata: Metadata = {
  title: "Upload - Nexus Mind",
  description: "Upload your documents for personalized AI responses",
};

export default function Upload() {
  return (
    <LayoutShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Upload Documents
          </h1>
          <p className="text-slate-400 mt-2">
            Upload your files to get personalized AI-powered answers
          </p>
        </div>
        {/* Upload component will go here */}
        <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
          <p className="text-slate-400">Upload component coming soon...</p>
        </div>
      </div>
    </LayoutShell>
  );
}

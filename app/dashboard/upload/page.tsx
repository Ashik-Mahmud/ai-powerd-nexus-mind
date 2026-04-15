import { Metadata } from "next";
import LayoutShell from "@/src/components/LayoutShell";
import UploadWrapper from "@/src/components/uploads/UploadWrapper";

export const metadata: Metadata = {
  title: "Upload - Nexus Mind",
  description: "Upload your documents for personalized AI responses",
};

export default function Upload() {
  return (
    <LayoutShell>
      <UploadWrapper />
      
    </LayoutShell>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Nexus Mind",
  description: "Your AI-powered assistant dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950">
      {children}
    </div>
  );
}

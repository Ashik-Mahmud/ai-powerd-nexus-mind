"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { ThemeProvider } from "@/src/context/ThemeContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CopilotKit
        runtimeUrl="/api/copilotkit"
        showDevConsole={false}
        publicLicenseKey={process.env.NEXT_PUBLIC_COPILOT_PUBLIC_LICENSE_KEY}
      >
        {children}
      </CopilotKit>
    </ThemeProvider>
  );
}

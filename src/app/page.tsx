"use client";

import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";
import { QuickstartSection } from "./components/quickstart-section";
import { ApiReferenceSection } from "./components/api-reference-section";
import { AgentKitSection } from "./components/agent-kit-section";
import { ModelsSection } from "./components/models-section";
import { FooterSection } from "./components/footer-section";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-oa-dark text-oa-text-primary">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 md:pl-64">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="p-4 md:p-12">
          <div className="max-w-4xl mx-auto">
            <QuickstartSection />
            <ApiReferenceSection />
            <AgentKitSection />
            <ModelsSection />
            <FooterSection />
          </div>
        </main>
      </div>
    </div>
  );
}

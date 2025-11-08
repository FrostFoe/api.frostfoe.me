"use client";

import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";
import { QuickstartSection } from "./components/quickstart-section";
import { AgentKitSection } from "./components/agent-kit-section";
import { ModelsSection } from "./components/models-section";
import { FooterSection } from "./components/footer-section";
import { EnhancedSidebar } from "./components/enhanced-sidebar";
import { Breadcrumb } from "./components/breadcrumb";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-oa-dark text-oa-text-primary">
      {/* Enhanced Sidebar */}
      <EnhancedSidebar />

      {/* Main area */}
      <div className="flex-1 md:pl-64">
        {/* Header */}
        <Header />

        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: "ঘর", href: "/" },
            { label: "ডকুমেন্টেশন", href: "/docs" },
            { label: "ফ্রস্টফয় এপিআই", href: "/docs/api" },
          ]}
        />

        {/* Main content */}
        <main className="p-6 md:p-8 lg:p-12">
          <div className="max-w-5xl mx-auto">
            <QuickstartSection />
            <AgentKitSection />
            <ModelsSection />
            <FooterSection />
          </div>
        </main>
      </div>
    </div>
  );
}

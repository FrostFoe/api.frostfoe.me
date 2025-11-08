"use client";

import { Header } from "./components/header";
import { QuickstartSection } from "./components/quickstart-section";
import { AgentKitSection } from "./components/agent-kit-section";
import { ModelsSection } from "./components/models-section";
import { FooterSection } from "./components/footer-section";
import { EnhancedSidebar } from "./components/enhanced-sidebar";
import { Breadcrumb } from "./components/breadcrumb";
import { TableOfContents } from "./components/table-of-contents";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-oa-dark text-oa-text-primary">
      <EnhancedSidebar />

      <div className="flex-1 md:pl-64 lg:pr-48">
        <Header />

        <Breadcrumb
          items={[
            { label: "ঘর", href: "/" },
            { label: "ডকুমেন্টেশন", href: "/docs" },
            { label: "ফ্রস্টফয় এপিআই", href: "/docs/api" },
          ]}
        />

        <main className="p-4 sm:p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <QuickstartSection />
            <AgentKitSection />
            <ModelsSection />
            <FooterSection />
          </div>
        </main>
      </div>
      <TableOfContents />
    </div>
  );
}

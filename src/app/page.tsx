"use client";

import { Header } from "./components/header";
import { QuickstartSection } from "./components/quickstart-section";
import { AgentKitSection } from "./components/agent-kit-section";
import { ModelsSection } from "./components/models-section";
import { FooterSection } from "./components/footer-section";
import { EnhancedSidebar } from "./components/enhanced-sidebar";
import { Breadcrumb } from "./components/breadcrumb";
import { HadithApiSection } from "./components/hadith-api-section";
import { QuranApiSection } from "./components/quran-api-section";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-oa-dark text-oa-text-primary">
      <EnhancedSidebar />

      <div className="flex-1 md:pl-64">
        <Header />

        <Breadcrumb
          items={[
            { label: "হোম", href: "/" },
            { label: "ডকুমেন্টেশন", href: "/" },
          ]}
        />

        <main className="p-4 sm:p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <QuickstartSection />
            <AgentKitSection />
            <ModelsSection />
            <HadithApiSection />
            <QuranApiSection />
            <FooterSection />
          </div>
        </main>
        <footer className="py-8 border-t border-oa-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center text-sm text-oa-text-tertiary">
            Made with 🤍 with Next.js
          </div>
        </footer>
      </div>
    </div>
  );
}

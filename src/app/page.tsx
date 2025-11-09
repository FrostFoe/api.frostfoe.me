"use client";

import { LandingContent } from "@/components/landing/landing-content";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/enhanced-sidebar";
import { Header } from "@/components/shared/header";

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
            { label: "ভূমিকা", href: "/" },
          ]}
        />

        <main className="p-4 sm:p-6 md:p-8">
          <LandingContent />
        </main>
      </div>
    </div>
  );
}

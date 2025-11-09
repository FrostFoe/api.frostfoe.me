import { GuidesMainContent } from "@/components/guides/guides-main-content";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/enhanced-sidebar";
import { Header } from "@/components/shared/header";

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen bg-oa-dark text-oa-text-primary">
      <EnhancedSidebar />

      <div className="flex-1 md:pl-64">
        <Header />

        <Breadcrumb
          items={[
            { label: "হোম", href: "/" },
            { label: "নির্দেশিকা", href: "/guides" },
          ]}
        />

        <main className="p-4 sm:p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <GuidesMainContent />
          </div>
        </main>
      </div>
    </div>
  );
}

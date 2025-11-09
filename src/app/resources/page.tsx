import { ResourcesMainContent } from "@/components/resources/resources-main-content";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/enhanced-sidebar";
import { Header } from "@/components/shared/header";

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen bg-oa-dark text-oa-text-primary">
      <EnhancedSidebar />

      <div className="flex-1 md:pl-64">
        <Header />

        <Breadcrumb
          items={[
            { label: "হোম", href: "/" },
            { label: "রিসোর্স", href: "/resources" },
          ]}
        />

        <main className="p-4 sm:p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <ResourcesMainContent />
          </div>
        </main>
      </div>
    </div>
  );
}

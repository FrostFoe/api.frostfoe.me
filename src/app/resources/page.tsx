import { Header } from "../header";
import { EnhancedSidebar } from "../components/enhanced-sidebar";
import { Breadcrumb } from "../components/breadcrumb";
import { ResourcesMainContent } from "@/components/resources/resources-main-content";

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
        <footer className="py-8 border-t border-oa-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center text-sm text-oa-text-tertiary">
            Made with 🤍 with Next.js
          </div>
        </footer>
      </div>
    </div>
  );
}

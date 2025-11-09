import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/enhanced-sidebar";
import { Header } from "@/components/shared/header";

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen">
      <EnhancedSidebar />
      <div className="flex-1 md:ml-64">
        <Header />
        <Breadcrumb
          items={[
            { label: "ডকুমেন্টেশন", href: "/" },
            { label: "নির্দেশিকা", href: "/guides" },
          ]}
        />
        <main className="p-4 sm:p-6 md:p-8"></main>
      </div>
    </div>
  );
}

import { Header } from "../header";
import { EnhancedSidebar } from "../components/enhanced-sidebar";
import { Breadcrumb } from "../components/breadcrumb";
import { AgentKitSection } from "@/components/api-reference/agent-kit-section";
import { ModelsSection } from "@/components/api-reference/models-section";
import { HadithApiSection } from "@/components/api-reference/hadith-api-section";
import { QuranApiSection } from "@/components/api-reference/quran-api-section";

export default function ApiReferencePage() {
  return (
    <div className="flex min-h-screen bg-oa-dark text-oa-text-primary">
      <EnhancedSidebar />

      <div className="flex-1 md:pl-64">
        <Header />

        <Breadcrumb
          items={[
            { label: "হোম", href: "/" },
            { label: "এপিআই রেফারেন্স", href: "/api-reference" },
          ]}
        />

        <main className="p-4 sm:p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              এপিআই রেফারেন্স
            </h1>
            <p className="text-oa-text-secondary mb-12">
              ফ্রস্টফয় প্ল্যাটফর্মের বিভিন্ন এপিআই সম্পর্কে বিস্তারিত তথ্য ও
              ব্যবহারের নির্দেশিকা এখানে পাবেন।
            </p>

            <div id="chat-api" className="scroll-mt-20">
              <AgentKitSection />
            </div>
            <div id="models" className="scroll-mt-20">
              <ModelsSection />
            </div>
            <div id="hadith-api" className="scroll-mt-20">
              <HadithApiSection />
            </div>
            <div id="quran-api" className="scroll-mt-20">
              <QuranApiSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

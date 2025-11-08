"use client";

import { Header } from "./header";
import { QuickstartSection } from "./components/quickstart-section";
import { EnhancedSidebar } from "./components/enhanced-sidebar";
import { Breadcrumb } from "./components/breadcrumb";
import { AgentKitSection } from "./components/agent-kit-section";
import { ModelsSection } from "./components/models-section";
import { HadithApiSection } from "./components/hadith-api-section";
import { QuranApiSection } from "./components/quran-api-section";
import { FooterSection } from "./components/footer-section";

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
          <div className="max-w-5xl mx-auto">
            <QuickstartSection />
            <section id="installation" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-white mb-4">
                ইনস্টলেশন
              </h2>
              <p className="text-oa-text-secondary">
                আমাদের প্ল্যাটফর্ম ব্যবহার করার জন্য কোনো বিশেষ ইনস্টলেশনের
                প্রয়োজন নেই। আপনি সরাসরি আমাদের এপিআই এন্ডপয়েন্ট ব্যবহার করে
                ডেটা পেতে পারেন।
              </p>
            </section>
            <section id="authentication" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-white mb-4">
                অথেন্টিকেশন
              </h2>
              <p className="text-oa-text-secondary">
                বর্তমানে, আমাদের পাবলিক এপিআই এন্ডপয়েন্টগুলো ব্যবহার করার জন্য
                কোনো অথেন্টিকেশন কী-এর প্রয়োজন নেই। ভবিষ্যতে আমরা API কী ভিত্তিক
                অথেন্টিকেশন যোগ করতে পারি।
              </p>
            </section>
            <section id="first-request" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-semibold text-white mb-4">
                আপনার প্রথম অনুরোধ
              </h2>
              <p className="text-oa-text-secondary">
                আপনি `curl` অথবা যেকোনো প্রোগ্রামিং ল্যাঙ্গুয়েজ ব্যবহার করে
                আমাদের এপিআই-তে আপনার প্রথম অনুরোধ পাঠাতে পারেন। কুইকস্টার্ট
                সেকশনে উদাহরণ দেওয়া আছে।
              </p>
            </section>
            
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

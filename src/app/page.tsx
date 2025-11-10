import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/sidebar";
import { Header } from "@/components/shared/header";
import { Code, Copy, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <EnhancedSidebar />
      <div className="flex-1 md:ml-64">
        <Header />
        <Breadcrumb
          items={[
            { label: "ডকুমেন্টেশন", href: "/" },
            { label: "ভূমিকা", href: "/" },
          ]}
        />
        <main className="p-4 sm:p-6 md:p-8">
          {/* Hero Section */}
          <section className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              ফ্রস্টফয় এপিআই এ স্বাগতম
            </h1>
            <p className="text-base sm:text-lg text-oa-text-secondary mb-4 sm:mb-6 leading-relaxed">
              শক্তিশালী এবং নমনীয় এপিআই দিয়ে তৈরি করুন আপনার পরবর্তী প্রজন্মের অ্যাপ্লিকেশন। 
              ফ্রস্টফয় প্ল্যাটফর্ম আপনাকে প্রদান করে চ্যাট, হাদিস এবং কুরআন এপিআই সহ 
              সম্পূর্ণ সমাধান।
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                href="/api-reference"
                className="btn btn-primary text-sm sm:text-base w-full sm:w-auto text-center"
              >
                এপিআই রেফারেন্স দেখুন
              </Link>
              <Link
                href="/guides"
                className="btn btn-secondary text-sm sm:text-base w-full sm:w-auto text-center"
              >
                নির্দেশিকা পড়ুন
              </Link>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">প্রধান বৈশিষ্ট্যসমূহ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {[
                {
                  title: "চ্যাট এপিআই",
                  description: "শক্তিশালী কথোপকথন এবং এআই-চালিত মিথস্ক্রিয়া সক্ষম করুন।",
                },
                {
                  title: "হাদিস এপিআই",
                  description: "বিশাল হাদিস সংগ্রহ অ্যাক্সেস করুন এবং ফিল্টার করুন সহজে।",
                },
                {
                  title: "কুরআন এপিআই",
                  description: "কুরআনের আয়াত এবং সুরা অ্যাক্সেস করুন একাধিক ভাষায়।",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 sm:p-6 border border-oa-border rounded-lg bg-oa-bg-dark hover:bg-oa-bg-light transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-oa-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Installation Section */}
          <section id="installation" className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">শুরু করুন</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">ইনস্টলেশন</h3>
                <p className="text-sm sm:text-base text-oa-text-secondary mb-3 sm:mb-4">
                  এনপিএম বা পিপ ব্যবহার করে ফ্রস্টফয় এসডিকে ইনস্টল করুন:
                </p>
                <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <code className="text-oa-text-secondary font-mono text-xs sm:text-sm">
                    npm install frostfoe-sdk
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white" id="authentication">
                  অথেন্টিকেশন
                </h3>
                <p className="text-sm sm:text-base text-oa-text-secondary mb-3 sm:mb-4">
                  সমস্ত এপিআই অনুরোধে আপনার এপিআই কী অন্তর্ভুক্ত করুন:
                </p>
                <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <code className="text-oa-text-secondary font-mono text-xs sm:text-sm">
                    <span className="text-syntax-keyword">Authorization:</span>{" "}
                    <span className="text-syntax-string">Bearer YOUR_API_KEY</span>
                  </code>
                </div>
                <p className="text-oa-text-secondary text-xs sm:text-sm mt-3">
                  আপনার এপিআই কী <Link href="#" className="text-white hover:underline">ড্যাশবোর্ড</Link> থেকে পান।
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white" id="first-request">
                  আপনার প্রথম অনুরোধ
                </h3>
                <p className="text-sm sm:text-base text-oa-text-secondary mb-3 sm:mb-4">
                  একটি সাধারণ হাদিস এপিআই অনুরোধ পাঠান:
                </p>
                <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <code className="text-oa-text-secondary font-mono text-xs sm:text-sm">
                    <span className="text-syntax-keyword">curl</span>{" "}
                    <span className="text-syntax-string">
                      "https://api.frostfoe.me/api/hadith?limit=5"
                    </span>{" "}
                    <span className="text-syntax-keyword">\</span>
                    <br />
                    {"  "}<span className="text-syntax-keyword">-H</span>{" "}
                    <span className="text-syntax-string">
                      "Authorization: Bearer YOUR_API_KEY"
                    </span>
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">দ্রুত লিঙ্কসমূহ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { title: "এপিআই রেফারেন্স", href: "/api-reference", icon: "📚" },
                { title: "ত্রুটি সমাধান", href: "/guides#errors", icon: "⚠️" },
                { title: "উদাহরণ কোড", href: "/resources#examples", icon: "💻" },
                { title: "সহায়তা পান", href: "/resources#support", icon: "❓" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-3 sm:p-4 border border-oa-border rounded-lg bg-oa-bg-dark hover:bg-oa-bg-light transition-colors flex items-center gap-3"
                >
                  <span className="text-xl sm:text-2xl">{link.icon}</span>
                  <span className="text-sm sm:text-base text-white font-medium">{link.title}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section className="border-t border-oa-border pt-6 sm:pt-8 mt-8 sm:mt-12">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">সাহায্যের প্রয়োজন?</h2>
            <p className="text-sm sm:text-base text-oa-text-secondary mb-4 sm:mb-6 leading-relaxed">
              আমাদের সম্পূর্ণ <Link href="/api-reference" className="text-white hover:underline">এপিআই ডকুমেন্টেশন</Link> পড়ুন বা 
              আমাদের <Link href="/resources#support" className="text-white hover:underline">সাপোর্ট টিম</Link> এর সাথে যোগাযোগ করুন।
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

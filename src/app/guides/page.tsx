import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/sidebar";
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
        <main className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <section className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              নির্দেশিকা
            </h1>
            <p className="text-sm sm:text-lg text-oa-text-secondary">
              ফ্রস্টফয় এপিআই ব্যবহারের জন্য সেরা অনুশীলন এবং উন্নত বিষয়গুলি শিখুন।
            </p>
          </section>

          {/* Error Handling */}
          <section id="errors" className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-oa-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">ত্রুটি ব্যবস্থাপনা</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">HTTP স্ট্যাটাস কোডসমূহ</h3>
                <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                  ফ্রস্টফয় এপিআই স্ট্যান্ডার্ড HTTP স্ট্যাটাস কোড ব্যবহার করে অনুরোধের ফলাফল নির্দেশ করে:
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    {
                      code: "200",
                      meaning: "সফল",
                      description: "অনুরোধ সফলভাবে প্রক্রিয়া করা হয়েছে",
                    },
                    {
                      code: "400",
                      meaning: "খারাপ অনুরোধ",
                      description: "অনুরোধে অবৈধ প্যারামিটার বা মিসিং প্রয়োজনীয় ক্ষেত্র রয়েছে",
                    },
                    {
                      code: "401",
                      meaning: "অননুমোদিত",
                      description: "এপিআই কী অবৈধ বা অনুপস্থিত",
                    },
                    {
                      code: "403",
                      meaning: "নিষিদ্ধ",
                      description: "এপিআই কী এই এন্ডপয়েন্টে অ্যাক্সেস করার অনুমতি রাখে না",
                    },
                    {
                      code: "404",
                      meaning: "খুঁজে পাওয়া যায় না",
                      description: "অনুরোধ করা সম্পদ বিদ্যমান নেই",
                    },
                    {
                      code: "429",
                      meaning: "খুব অনেক অনুরোধ",
                      description: "হার সীমা অতিক্রম করা হয়েছে",
                    },
                    {
                      code: "500",
                      meaning: "অভ্যন্তরীণ সার্ভার ত্রুটি",
                      description: "সার্ভারে একটি অপ্রত্যাশিত ত্রুটি ঘটেছে",
                    },
                  ].map((status) => (
                    <div key={status.code} className="p-3 sm:p-4 border border-oa-border rounded-lg bg-oa-bg-dark">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <code className="font-mono font-bold text-white text-xs sm:text-sm">{status.code}</code>
                        <span className="font-semibold text-white text-xs sm:text-sm">{status.meaning}</span>
                      </div>
                      <p className="text-oa-text-secondary text-xs sm:text-sm">{status.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">ত্রুটি প্রতিক্রিয়া</h3>
                <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                  ত্রুটি প্রতিক্রিয়াগুলি সমস্যার বিবরণ সহ একটি JSON অবজেক্ট ফেরত দেয়:
                </p>
                <div className="bg-oa-dark rounded p-2 sm:p-4 overflow-x-auto font-mono text-xs sm:text-sm">
                  <pre className="text-oa-text-secondary">{`{
  "error": "Invalid API key",
  "error_code": "INVALID_API_KEY",
  "status": 401,
  "timestamp": "2024-01-15T10:30:00Z"
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">ত্রুটি কোডসমূহ</h3>
                <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                  সাধারণ ত্রুটি কোড এবং তাদের অর্থ:
                </p>
                <div className="space-y-2 text-xs sm:text-sm">
                  {[
                    { code: "INVALID_API_KEY", meaning: "প্রদত্ত এপিআই কী অবৈধ" },
                    { code: "RATE_LIMIT_EXCEEDED", meaning: "আপনি আপনার হার সীমা অতিক্রম করেছেন" },
                    { code: "MISSING_PARAMETER", meaning: "প্রয়োজনীয় প্যারামিটার অনুপস্থিত" },
                    { code: "INVALID_PARAMETER", meaning: "প্যারামিটার মান অবৈধ বিন্যাসে" },
                    { code: "RESOURCE_NOT_FOUND", meaning: "অনুরোধ করা সম্পদ বিদ্যমান নেই" },
                    { code: "INTERNAL_SERVER_ERROR", meaning: "সার্ভারে অপ্রত্যাশিত ত্রুটি" },
                  ].map((error) => (
                    <div key={error.code} className="p-2 sm:p-3 border border-oa-border/50 rounded bg-oa-bg-dark/50">
                      <span className="font-mono text-white text-xs sm:text-sm">{error.code}</span>
                      <span className="text-oa-text-secondary ml-2 sm:ml-3 text-xs sm:text-sm">{error.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Rate Limiting */}
          <section id="rate-limiting" className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-oa-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">হার সীমিতকরণ</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-xs sm:text-base text-oa-text-secondary">
                ফ্রস্টফয় এপিআই বিভিন্ন পরিকল্পনার জন্য বিভিন্ন হার সীমা প্রয়োগ করে। এটি নিশ্চিত করে যে সেবা সবার জন্য উপলব্ধ থাকে।
              </p>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">সীমা কিভাবে কাজ করে</h3>
                <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                  হার সীমা সাধারণত প্রতি মিনিট বা ঘণ্টায় অনুরোধের সংখ্যা দ্বারা গণনা করা হয়। আপনি যখন সীমা অতিক্রম করেন, আমরা ৪২৯ স্ট্যাটাস কোড ফেরত পাঠাই।
                </p>
                <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-2 sm:p-4 text-xs sm:text-sm overflow-x-auto">
                  <p className="text-oa-text-secondary font-mono mb-2">
                    HTTP/1.1 429 Too Many Requests
                  </p>
                  <p className="text-oa-text-secondary font-mono">
                    Retry-After: 60
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">পরিকল্পনা এবং সীমাসমূহ</h3>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full text-xs sm:text-sm inline-block min-w-full">
                    <thead>
                      <tr className="border-b border-oa-border">
                        <th className="text-left py-3 px-3 text-oa-text-secondary">পরিকল্পনা</th>
                        <th className="text-left py-3 px-3 text-oa-text-secondary">প্রতি মিনিটে</th>
                        <th className="text-left py-3 px-3 text-oa-text-secondary">প্রতি দিনে</th>
                      </tr>
                    </thead>
                    <tbody className="text-oa-text-secondary">
                      <tr className="border-b border-oa-border/50">
                        <td className="py-3 px-3 font-semibold text-white">বিনামূল্যে</td>
                        <td className="py-3 px-3">10</td>
                        <td className="py-3 px-3">1,000</td>
                      </tr>
                      <tr className="border-b border-oa-border/50">
                        <td className="py-3 px-3 font-semibold text-white">পেশাদার</td>
                        <td className="py-3 px-3">100</td>
                        <td className="py-3 px-3">100,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-white">এন্টারপ্রাইজ</td>
                        <td className="py-3 px-3">অসীম</td>
                        <td className="py-3 px-3">অসীম</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">হার সীমা মোকাবেলা করা</h3>
                <p className="text-oa-text-secondary mb-4">
                  যখন আপনি হার সীমায় আঘাত করেন:
                </p>
                <ul className="space-y-2 text-oa-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-white font-semibold">১।</span>
                    <span>Retry-After হেডার পড়ুন কতক্ষণ অপেক্ষা করতে হবে তা জানতে</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-semibold">২।</span>
                    <span>এক্সপোনেনশিয়াল ব্যাকঅফ প্রয়োগ করুন পুনরায় চেষ্টা করার আগে</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-semibold">৩।</span>
                    <span>একটি উচ্চতর পরিকল্পনায় আপগ্রেড করার বিবেচনা করুন</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Webhooks */}
          <section id="webhooks" className="mb-12 pb-12 border-b border-oa-border">
            <h2 className="text-3xl font-bold mb-6 text-white">ওয়েবহুক</h2>
            
            <div className="space-y-6">
              <p className="text-oa-text-secondary">
                ওয়েবহুকগুলি আপনার সিস্টেমকে নির্দিষ্ট ঘটনা সম্পর্কে অবিলম্বে অবহিত করে। আপনার পছন্দের URL এ HTTP POST অনুরোধ পাঠানো হয়।
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">সমর্থিত ইভেন্টসমূহ</h3>
                <div className="space-y-3">
                  {[
                    {
                      event: "chat.message.created",
                      description: "একটি নতুন চ্যাট বার্তা তৈরি হয়েছে",
                    },
                    {
                      event: "chat.message.completed",
                      description: "একটি চ্যাট বার্তা প্রতিক্রিয়া সম্পূর্ণ হয়েছে",
                    },
                    {
                      event: "api.key.revoked",
                      description: "একটি এপিআই কী প্রত্যাহার করা হয়েছে",
                    },
                  ].map((item) => (
                    <div key={item.event} className="p-4 border border-oa-border rounded-lg bg-oa-bg-dark">
                      <p className="font-mono font-semibold text-white">{item.event}</p>
                      <p className="text-oa-text-secondary text-sm mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">ওয়েবহুক পেলোড</h3>
                <p className="text-oa-text-secondary mb-4">
                  সমস্ত ওয়েবহুক অনুরোধ একই JSON কাঠামো অনুসরণ করে:
                </p>
                <div className="bg-oa-dark rounded p-4 overflow-x-auto font-mono text-sm">
                  <pre className="text-oa-text-secondary">{`{
  "id": "wh_123456",
  "event": "chat.message.created",
  "data": {
    "message_id": "msg_789",
    "content": "হ্যালো, আপনি কিভাবে আছেন?",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">ওয়েবহুক স্বাক্ষর যাচাই</h3>
                <p className="text-oa-text-secondary mb-4">
                  প্রতিটি ওয়েবহুক অনুরোধ একটি স্বাক্ষর সহ স্বাক্ষরিত হয় যা আপনি যাচাই করতে পারেন:
                </p>
                <div className="bg-oa-dark rounded p-4 overflow-x-auto font-mono text-sm">
                  <pre className="text-oa-text-secondary">{`X-Frostfoe-Signature: sha256=abc123def456`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-white">সেরা অনুশীলন</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">নিরাপত্তা</h3>
                <ul className="space-y-2 text-oa-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>সর্বদা HTTPS ব্যবহার করুন এপিআই এন্ডপয়েন্টে</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>কখনও ক্লায়েন্ট-সাইড কোডে এপিআই কী প্রকাশ করবেন না</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>পরিবেশ পরিবর্তনশীলে এপিআই কী সংরক্ষণ করুন</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>নিয়মিত আপনার এপিআই কী রোটেট করুন</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">কর্মক্ষমতা</h3>
                <ul className="space-y-2 text-oa-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>একাধিক অনুরোধ ব্যাচ করুন যেখানে সম্ভব</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>প্রতিক্রিয়া ক্যাশ করুন যখন উপযুক্ত</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>কানেকশন পুল ব্যবহার করুন দীর্ঘ-চলা সংযোগের জন্য</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">নির্ভরযোগ্যতা</h3>
                <ul className="space-y-2 text-oa-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>এক্সপোনেনশিয়াল ব্যাকঅফের সাথে পুনরায় চেষ্টা করুন</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>Timeout সেট করুন দীর্ঘ-চলা অনুরোধে</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-semibold min-w-6">✓</span>
                    <span>ত্রুটি লগিং এবং মনিটরিং প্রয়োগ করুন</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

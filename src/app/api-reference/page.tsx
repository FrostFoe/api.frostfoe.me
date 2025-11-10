import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/sidebar";
import { Header } from "@/components/shared/header";
import { CodeSnippetDisplay } from "@/components/shared/code-snippet-display";
import { InteractivePlayground } from "@/components/shared/interactive-playground";
import { ResponsiveTableWrapper } from "@/components/shared/responsive-table-wrapper";

export default function ApiReferencePage() {
  const hadithExamples = [
    {
      title: "সীমা সহ পান",
      description: "প্রথম ৫টি হাদিস পান",
      endpoint: "/api/hadith",
      method: "GET" as const,
      expectedResponse: {
        data: [
          {
            id: 1,
            text: "আমরা সেখানে উপস্থিত ছিলাম...",
            author: "Al-Bukhari",
            type: "hadith",
          },
        ],
        count: 5,
      },
    },
    {
      title: "লেখক দ্বারা ফিল্টার",
      description: "আল-বুখারির হাদিস পান",
      endpoint: "/api/hadith",
      method: "GET" as const,
      expectedResponse: {
        data: [
          {
            id: 2,
            text: "আমরা আল-বুখারির কাছ থেকে পেয়েছি...",
            author: "Al-Bukhari",
            type: "hadith",
          },
        ],
        count: 1,
      },
    },
    {
      title: "র্যান্ডম হাদিস",
      description: "একটি র্যান্ডম হাদিস পান",
      endpoint: "/api/hadith?random=true",
      method: "GET" as const,
      expectedResponse: {
        data: [
          {
            id: 42,
            text: "জ্ঞান এবং বিজ্ঞতা...",
            author: "Muslim",
            type: "hadith",
          },
        ],
        count: 1,
      },
    },
  ];
  return (
    <div className="flex min-h-screen">
      <EnhancedSidebar />
      <div className="flex-1 md:ml-64">
        <Header />
        <Breadcrumb
          items={[
            { label: "ডকুমেন্টেশন", href: "/" },
            { label: "এপিআই রেফারেন্স", href: "/api-reference" },
          ]}
        />
        <main className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <section className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              এপিআই রেফারেন্স
            </h1>
            <p className="text-base sm:text-lg text-oa-text-secondary">
              সমস্ত ফ্রস্টফয় এপিআই এন্ডপয়েন্টের সম্পূর্ণ ডকুমেন্টেশন এবং উদাহরণ।
            </p>
          </section>

          {/* Chat API */}
          <section id="chat-api" className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-oa-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">চ্যাট এপিআই</h2>
            <p className="text-sm sm:text-base text-oa-text-secondary mb-4 sm:mb-6">
              চ্যাট এপিআই ব্যবহার করে আপনার অ্যাপ্লিকেশনে কথোপকথন যোগ্যতা যোগ করুন।
            </p>

            {/* POST Create Message */}
            <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="mb-4">
                <div className="inline-block bg-blue-500/10 text-blue-400 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-mono mb-2">
                  POST
                </div>
                <p className="text-base sm:text-xl font-mono text-white break-all">
                  /api/chat/create
                </p>
              </div>
              <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                একটি নতুন চ্যাট সংলাপ তৈরি করুন।
              </p>

              <div className="mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">অনুরোধ বডি:</h4>
                <div className="bg-oa-dark rounded p-2 sm:p-3 overflow-x-auto font-mono text-xs sm:text-sm">
                  <pre className="text-oa-text-secondary">{`{
  "message": "হ্যালো, আপনি কে?",
  "model": "frostfoe-v1"
}`}</pre>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">প্যারামিটারসমূহ:</h4>
                <ResponsiveTableWrapper>
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-oa-border">
                        <th className="text-left py-2 px-3 text-oa-text-secondary">প্যারামিটার</th>
                        <th className="text-left py-2 px-3 text-oa-text-secondary">টাইপ</th>
                        <th className="text-left py-2 px-3 text-oa-text-secondary">বর্ণনা</th>
                      </tr>
                    </thead>
                    <tbody className="text-oa-text-secondary">
                      <tr className="border-b border-oa-border/50">
                        <td className="py-2 px-3 font-mono">message</td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">পাঠানোর বার্তা</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono">model</td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">ব্যবহার করার মডেল</td>
                      </tr>
                    </tbody>
                  </table>
                </ResponsiveTableWrapper>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">প্রতিক্রিয়া:</h4>
                <div className="bg-oa-dark rounded p-3 overflow-x-auto font-mono text-sm">
                  <pre className="text-oa-text-secondary">{`{
  "id": "chat_123456",
  "message": "আপনার স্বাগত, আমি ফ্রস্টফয় এআই।",
  "model": "frostfoe-v1",
  "created_at": "2024-01-15T10:30:00Z"
}`}</pre>
                </div>
              </div>

              {/* Code Snippets */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-oa-border/50">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">কোড উদাহরণ</h4>
                <CodeSnippetDisplay endpoint="/api/chat/create" method="POST" />
              </div>
            </div>

            {/* GET Chat History */}
            <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="mb-4">
                <div className="inline-block bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-mono mb-2">
                  GET
                </div>
                <p className="text-base sm:text-xl font-mono text-white break-all">
                  /api/chat/history/{'{'}<span className="text-orange-400">conversation_id</span>{'}'}
                </p>
              </div>
              <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                একটি সংলাপের ইতিহাস পান।
              </p>

              <div className="mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">প্যারামিটারসমূহ:</h4>
                <ResponsiveTableWrapper>
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-oa-border">
                        <th className="text-left py-2 px-3 text-oa-text-secondary">প্যারামিটার</th>
                        <th className="text-left py-2 px-3 text-oa-text-secondary">টাইপ</th>
                        <th className="text-left py-2 px-3 text-oa-text-secondary">বর্ণনা</th>
                      </tr>
                    </thead>
                    <tbody className="text-oa-text-secondary">
                      <tr>
                        <td className="py-2 px-3 font-mono">conversation_id</td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">সংলাপের আইডি</td>
                      </tr>
                    </tbody>
                  </table>
                </ResponsiveTableWrapper>
              </div>
            </div>
          </section>

          {/* Hadith API */}
          <section id="hadith-api" className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-oa-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">হাদিস এপিআই</h2>
            <p className="text-sm sm:text-base text-oa-text-secondary mb-4 sm:mb-6">
              হাদিস সংগ্রহ অ্যাক্সেস করুন এবং বিভিন্ন মাপদণ্ড অনুসারে অনুসন্ধান করুন।
            </p>

            {/* GET Hadiths */}
            <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="mb-4">
                <div className="inline-block bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-mono mb-2">
                  GET
                </div>
                <p className="text-base sm:text-xl font-mono text-white">
                  /api/hadith
                </p>
              </div>
              <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                হাদিস তালিকা পান অনুসন্ধান এবং ফিল্টার বিকল্প সহ।
              </p>

              <div className="mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">প্রশ্ন প্যারামিটারসমূহ:</h4>
                <ResponsiveTableWrapper>
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-oa-border">
                        <th className="text-left py-2 px-3 text-oa-text-secondary">প্যারামিটার</th>
                        <th className="text-left py-2 px-3 text-oa-text-secondary">টাইপ</th>
                        <th className="text-left py-2 px-3 text-oa-text-secondary">বর্ণনা</th>
                      </tr>
                    </thead>
                    <tbody className="text-oa-text-secondary">
                      <tr className="border-b border-oa-border/50">
                        <td className="py-2 px-3 font-mono">limit</td>
                        <td className="py-2 px-3">number</td>
                        <td className="py-2 px-3">ফলাফলের সংখ্যা সীমা (ডিফল্ট: 10)</td>
                      </tr>
                      <tr className="border-b border-oa-border/50">
                        <td className="py-2 px-3 font-mono">search</td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">পাঠ্য বা লেখক দ্বারা অনুসন্ধান করুন</td>
                      </tr>
                      <tr className="border-b border-oa-border/50">
                        <td className="py-2 px-3 font-mono">author</td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">লেখক দ্বারা ফিল্টার করুন</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono">random</td>
                        <td className="py-2 px-3">boolean</td>
                        <td className="py-2 px-3">একটি র্যান্ডম হাদিস পান</td>
                      </tr>
                    </tbody>
                  </table>
                </ResponsiveTableWrapper>
              </div>

              <div className="mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">উদাহরণ অনুরোধ:</h4>
                <div className="bg-oa-dark rounded p-2 sm:p-3 overflow-x-auto font-mono text-xs sm:text-sm">
                  <code className="text-oa-text-secondary">
                    GET /api/hadith?limit=5&author=Al-Bukhari
                  </code>
                </div>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">প্রতিক্রিয়া:</h4>
                <div className="bg-oa-dark rounded p-2 sm:p-3 overflow-x-auto font-mono text-xs sm:text-sm">
                  <pre className="text-oa-text-secondary">{`{
  "data": [
    {
      "id": 1,
      "text": "আমরা সেখানে উপস্থিত ছিলাম...",
      "author": "Al-Bukhari",
      "type": "hadith"
    }
  ],
  "count": 1
}`}</pre>
                </div>
              </div>

              {/* Interactive Playground */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-oa-border/50">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">ইন্টারেক্টিভ উদাহরণ</h4>
                <InteractivePlayground examples={hadithExamples} />
              </div>
            </div>
          </section>

          {/* Quran API */}
          <section id="quran-api" className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-oa-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">কুরআন এপিআই</h2>
            <p className="text-sm sm:text-base text-oa-text-secondary mb-4 sm:mb-6">
              কুরআনের আয়াত এবং সুরা বিভিন্ন অনুবাদ সহ অ্যাক্সেস করুন।
            </p>

            {/* GET Surahs */}
            <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="mb-4">
                <div className="inline-block bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-mono mb-2">
                  GET
                </div>
                <p className="text-base sm:text-xl font-mono text-white">
                  /api/quran
                </p>
              </div>
              <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                সমস্ত সুরার তালিকা পান।
              </p>

              <div className="mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">প্রশ্ন প্যারামিটারসমূহ:</h4>
                <ResponsiveTableWrapper>
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-oa-border">
                        <th className="text-left py-2 px-3 text-oa-text-secondary">প্যারামিটার</th>
                        <th className="text-left py-2 px-3 text-oa-text-secondary">টাইপ</th>
                        <th className="text-left py-2 px-3 text-oa-text-secondary">বর্ণনা</th>
                      </tr>
                    </thead>
                    <tbody className="text-oa-text-secondary">
                      <tr>
                        <td className="py-2 px-3 font-mono">random</td>
                        <td className="py-2 px-3">boolean</td>
                        <td className="py-2 px-3">একটি র্যান্ডম আয়াত পান</td>
                      </tr>
                    </tbody>
                  </table>
                </ResponsiveTableWrapper>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">প্রতিক্রিয়া:</h4>
                <div className="bg-oa-dark rounded p-2 sm:p-3 overflow-x-auto font-mono text-xs sm:text-sm">
                  <pre className="text-oa-text-secondary">{`{
  "surahs": [
    {
      "id": 1,
      "name": "আল-ফাতিহা",
      "transliteration": "Al-Fatiha",
      "translation": "The Opening",
      "total_verses": 7,
      "type": "Meccan"
    }
  ]
}`}</pre>
                </div>
              </div>
            </div>

            {/* GET Specific Surah */}
            <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-4 sm:p-6">
              <div className="mb-4">
                <div className="inline-block bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-mono mb-2">
                  GET
                </div>
                <p className="text-base sm:text-xl font-mono text-white break-all">
                  /api/quran?id=<span className="text-orange-400">surah_id</span>
                </p>
              </div>
              <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                একটি নির্দিষ্ট সুরার সমস্ত আয়াত পান।
              </p>

              <div className="mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">উদাহরণ অনুরোধ:</h4>
                <div className="bg-oa-dark rounded p-2 sm:p-3 overflow-x-auto font-mono text-xs sm:text-sm">
                  <code className="text-oa-text-secondary">
                    GET /api/quran?id=1
                  </code>
                </div>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3">প্রতিক্রিয়া:</h4>
                <div className="bg-oa-dark rounded p-2 sm:p-3 overflow-x-auto font-mono text-xs sm:text-sm">
                  <pre className="text-oa-text-secondary">{`{
  "id": 1,
  "name": "আল-ফাতিহা",
  "verses": [
    {
      "id": 1,
      "text": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "transliteration": "Bismillah ar-rahman ar-rahim",
      "translation_en": "In the name of Allah, the Merciful...",
      "translation_bn": "দয়াময় ও ক্ষমাশীল আল্লাহর নামে..."
    }
  ]
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Models Section */}
          <section id="models" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">উপলব্ধ মডেলসমূহ</h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  name: "frostfoe-v1",
                  description: "সর্বশেষ প্রজন্মের মডেল, দ্রুত এবং নির্ভরযোগ্য",
                },
                {
                  name: "frostfoe-light",
                  description: "হালকা মডেল, কম বিলম্ব সহ সহজ কাজের জন্য",
                },
                {
                  name: "frostfoe-pro",
                  description: "উন্নত মডেল, জটিল যুক্তির জন্য সর্বোত্তম",
                },
              ].map((model) => (
                <div key={model.name} className="p-3 sm:p-4 border border-oa-border rounded-lg bg-oa-bg-dark">
                  <p className="font-mono font-semibold text-white text-xs sm:text-sm">{model.name}</p>
                  <p className="text-oa-text-secondary text-xs sm:text-sm mt-1">{model.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

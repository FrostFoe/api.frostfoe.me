import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/sidebar";
import { Header } from "@/components/shared/header";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen">
      <EnhancedSidebar />
      <div className="flex-1 md:ml-64">
        <Header />
        <Breadcrumb
          items={[
            { label: "ডকুমেন্টেশন", href: "/" },
            { label: "রিসোর্স", href: "/resources" },
          ]}
        />
        <main className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <section className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              রিসোর্স এবং উদাহরণ
            </h1>
            <p className="text-sm sm:text-lg text-oa-text-secondary">
              ফ্রস্টফয় এপিআই ব্যবহার করা শুরু করতে আপনার প্রয়োজনীয় সবকিছু।
            </p>
          </section>

          {/* Code Examples */}
          <section id="examples" className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-oa-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">কোড উদাহরণ</h2>

            <div className="space-y-6 sm:space-y-8">
              {/* JavaScript Example */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">JavaScript</h3>
                <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                  JavaScript দিয়ে চ্যাট এপিআই ব্যবহার করার একটি উদাহরণ:
                </p>
                <div className="bg-oa-dark rounded p-2 sm:p-4 overflow-x-auto font-mono text-xs sm:text-sm">
                  <pre className="text-oa-text-secondary">{`const API_KEY = 'your-api-key';

async function sendMessage(message) {
  const response = await fetch(
    'https://api.frostfoe.me/api/chat/create',
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${API_KEY}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        model: 'frostfoe-v1',
      }),
    }
  );

  if (!response.ok) {
    throw new Error(\`Error: \${response.status}\`);
  }

  return await response.json();
}

// ব্যবহার
sendMessage('আপনি কিভাবে কাজ করেন?')
  .then(result => console.log(result))
  .catch(error => console.error(error));`}</pre>
                </div>
              </div>

              {/* Python Example */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">Python</h3>
                <p className="text-xs sm:text-base text-oa-text-secondary mb-4">
                  Python দিয়ে হাদিস এপিআই থেকে ডেটা ফেচ করার একটি উদাহরণ:
                </p>
                <div className="bg-oa-dark rounded p-2 sm:p-4 overflow-x-auto font-mono text-xs sm:text-sm">
                  <pre className="text-oa-text-secondary">{`import requests

API_KEY = 'your-api-key'
BASE_URL = 'https://api.frostfoe.me'

def get_hadiths(limit=10, author=None):
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }
    
    params = {
        'limit': limit
    }
    
    if author:
        params['author'] = author
    
    response = requests.get(
        f'{BASE_URL}/api/hadith',
        headers=headers,
        params=params
    )
    
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f'Error: {response.status_code}')

# ব্যবহার
hadiths = get_hadiths(limit=5, author='Al-Bukhari')
for hadith in hadiths['data']:
    print(f"- {hadith['text']}")`}</pre>
                </div>
              </div>

              {/* cURL Example */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">cURL</h3>
                <p className="text-oa-text-secondary mb-4">
                  cURL দিয়ে কুরআন এপিআই ব্যবহার করার একটি উদাহরণ:
                </p>
                <div className="bg-oa-dark rounded p-4 overflow-x-auto font-mono text-sm">
                  <pre className="text-oa-text-secondary">{`# একটি র্যান্ডম আয়াত পান
curl -X GET \\
  'https://api.frostfoe.me/api/quran?random=true' \\
  -H 'Authorization: Bearer your-api-key'

# একটি নির্দিষ্ট সুরা পান
curl -X GET \\
  'https://api.frostfoe.me/api/quran?id=1' \\
  -H 'Authorization: Bearer your-api-key'

# সব সুরাহ তালিকা পান
curl -X GET \\
  'https://api.frostfoe.me/api/quran' \\
  -H 'Authorization: Bearer your-api-key'`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* SDKs */}
          <section id="sdks" className="mb-12 pb-12 border-b border-oa-border">
            <h2 className="text-3xl font-bold mb-6 text-white">এসডিকে এবং লাইব্রেরি</h2>
            
            <div className="space-y-4">
              {[
                {
                  name: "JavaScript/TypeScript SDK",
                  description: "আপনার ওয়েব অ্যাপ্লিকেশনের জন্য সম্পূর্ণ-বৈশিষ্ট্যযুক্ত এসডিকে",
                  repo: "frostfoe/sdk-js",
                  lang: "TypeScript",
                },
                {
                  name: "Python SDK",
                  description: "পাইথন অ্যাপ্লিকেশনের জন্য অফিসিয়াল এসডিকে",
                  repo: "frostfoe/sdk-py",
                  lang: "Python",
                },
                {
                  name: "Go SDK",
                  description: "গো ভাষার জন্য হালকা-ওজনের এসডিকে",
                  repo: "frostfoe/sdk-go",
                  lang: "Go",
                },
                {
                  name: "Java SDK",
                  description: "জাভা-ভিত্তিক অ্যাপ্লিকেশনের জন্য এসডিকে",
                  repo: "frostfoe/sdk-java",
                  lang: "Java",
                },
              ].map((sdk) => (
                <div
                  key={sdk.repo}
                  className="p-4 border border-oa-border rounded-lg bg-oa-bg-dark hover:bg-oa-bg-light transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-semibold text-white">{sdk.name}</h3>
                      <p className="text-sm text-oa-text-secondary mt-1">{sdk.description}</p>
                    </div>
                    <span className="px-3 py-1 bg-oa-bg-light rounded text-xs font-mono text-white whitespace-nowrap">
                      {sdk.lang}
                    </span>
                  </div>
                  <a
                    href={`https://github.com/${sdk.repo}`}
                    className="inline-flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {sdk.repo}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12 pb-12 border-b border-oa-border">
            <h2 className="text-3xl font-bold mb-6 text-white">সাধারণ প্রশ্নাবলী</h2>

            <div className="space-y-4">
              {[
                {
                  q: "আমি কিভাবে একটি এপিআই কী পাই?",
                  a: "আপনার ড্যাশবোর্ডে যান এবং 'এপিআই কী' সেকশনে ক্লিক করুন। একটি নতুন কী তৈরি করুন এবং এটি নিরাপদে সংরক্ষণ করুন।",
                },
                {
                  q: "আমি কি আমার এপিআই কী পরিবর্তন করতে পারি?",
                  a: "হ্যাঁ, যেকোনো সময় আপনার এপিআই কী রোটেট করতে পারেন। পুরানো কী সাথে সাথে অকার্যকর হয়ে যাবে।",
                },
                {
                  q: "হার সীমা কত?",
                  a: "বিনামূল্যে পরিকল্পনা প্রতি মিনিটে ১০ অনুরোধ সীমিত। পেশাদার পরিকল্পনা ১০০/মিনিট এবং এন্টারপ্রাইজ অসীম।",
                },
                {
                  q: "আমি কি ওয়েবহুক ব্যবহার করতে পারি?",
                  a: "হ্যাঁ, পেশাদার এবং এন্টারপ্রাইজ পরিকল্পনায় ওয়েবহুক উপলব্ধ। আপনার পছন্দের ইভেন্টের জন্য ওয়েবহুক কনফিগার করুন।",
                },
                {
                  q: "পরিষেবা স্তর চুক্তি কি?",
                  a: "আমরা ৯৯.৯% আপটাইম গ্যারান্টি দিই। বিস্তারিত এসএলএ নথি আমাদের ডকুমেন্টেশন দেখুন।",
                },
                {
                  q: "আমি কি একাধিক এপিআই কী রাখতে পারি?",
                  a: "হ্যাঁ, একাধিক কী তৈরি করতে পারেন বিভিন্ন পরিবেশ বা অ্যাপ্লিকেশনের জন্য।",
                },
              ].map((item, index) => (
                <details key={index} className="p-4 border border-oa-border rounded-lg bg-oa-bg-dark cursor-pointer group">
                  <summary className="flex justify-between items-center font-semibold text-white hover:text-blue-400 transition-colors">
                    {item.q}
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-oa-text-secondary mt-4">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Support */}
          <section id="support" className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-white">সাপোর্ট এবং সহায়তা</h2>

            <div className="space-y-4">
              <div className="p-6 border border-oa-border rounded-lg bg-oa-bg-dark">
                <h3 className="text-xl font-semibold mb-2 text-white">📧 ইমেইল সাপোর্ট</h3>
                <p className="text-oa-text-secondary mb-3">
                  আমাদের সাপোর্ট টিম ২৪/৭ উপলব্ধ আপনার সমস্যা সমাধান করতে।
                </p>
                <a
                  href="mailto:support@frostfoe.me"
                  className="text-white hover:text-blue-400 transition-colors font-mono"
                >
                  support@frostfoe.me
                </a>
              </div>

              <div className="p-6 border border-oa-border rounded-lg bg-oa-bg-dark">
                <h3 className="text-xl font-semibold mb-2 text-white">💬 কমিউনিটি ফোরাম</h3>
                <p className="text-oa-text-secondary mb-3">
                  অন্যান্য ডেভেলপারদের সাথে সংযুক্ত হন এবং অভিজ্ঞতা শেয়ার করুন।
                </p>
                <a
                  href="https://community.frostfoe.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                >
                  ফোরাম ভিজিট করুন
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="p-6 border border-oa-border rounded-lg bg-oa-bg-dark">
                <h3 className="text-xl font-semibold mb-2 text-white">🐛 বাগ রিপোর্ট</h3>
                <p className="text-oa-text-secondary mb-3">
                  কোন সমস্যা খুঁজে পেয়েছেন? আমাদের GitHub তে ইস্যু রিপোর্ট করুন।
                </p>
                <a
                  href="https://github.com/frostfoe/api-platform/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  ইস্যু রিপোর্ট করুন
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="p-6 border border-oa-border rounded-lg bg-oa-bg-dark">
                <h3 className="text-xl font-semibold mb-2 text-white">📱 স্ট্যাটাস পেজ</h3>
                <p className="text-oa-text-secondary mb-3">
                  রিয়েল-টাইম সিস্টেম স্ট্যাটাস এবং রক্ষণাবেক্ষণ তথ্য দেখুন।
                </p>
                <a
                  href="https://status.frostfoe.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                >
                  স্ট্যাটাস পেজ
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-12 pt-8 border-t border-oa-border">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">
                এখনই শুরু করুন
              </h2>
              <p className="text-oa-text-secondary mb-6">
                আপনার প্রথম অ্যাপ্লিকেশন তৈরি করুন এবং ফ্রস্টফয় এপিআির শক্তি আবিষ্কার করুন।
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/" className="btn btn-primary">
                  শুরু করুন
                </Link>
                <Link href="/api-reference" className="btn btn-secondary">
                  ডকুমেন্টেশন পড়ুন
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

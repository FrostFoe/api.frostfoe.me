import React from "react";
import { Tabs } from "./tabs";
import { CodeSnippet } from "./code-snippet";

interface CodeExample {
  curl: string;
  javascript: string;
  python?: string;
}

interface ApiEndpointProps {
  title: string;
  description: string;
  examples: CodeExample;
}

function ApiEndpoint({ title, description, examples }: ApiEndpointProps) {
  const tabs = [
    {
      id: "curl",
      label: "cURL",
      content: <CodeSnippet code={examples.curl} language="bash" />,
    },
    {
      id: "javascript",
      label: "JavaScript",
      content: <CodeSnippet code={examples.javascript} language="javascript" />,
    },
    ...(examples.python
      ? [
          {
            id: "python",
            label: "Python",
            content: <CodeSnippet code={examples.python} language="python" />,
          },
        ]
      : []),
  ];

  return (
    <div className="border border-oa-border rounded-lg bg-oa-bg-dark p-4">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-sm text-oa-text-secondary">{description}</p>
      <Tabs tabs={tabs} defaultTab="curl" />
    </div>
  );
}

export function ApiReferenceSection() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-semibold text-white mb-6">
        🌙 ফ্রস্টলি API রেফারেন্স
      </h2>

      <div className="space-y-6">
        <ApiEndpoint
          title="📜 Hadith API — /api/hadith"
          description="হাদীস সংগ্রহ থেকে দ্রুত অনুসন্ধান, লেখক ফিল্টার বা র‌্যান্ডম হাদীস পেতে এই API ব্যবহার করো।"
          examples={{
            curl: `curl -X GET "https://api.frostfoe.me/api/hadith?random=true" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
            javascript: `const response = await fetch('https://api.frostfoe.me/api/hadith?random=true', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});
const data = await response.json();
console.log(data);`,
            python: `import requests

response = requests.get(
  'https://api.frostfoe.me/api/hadith?random=true',
  headers={'Authorization': 'Bearer YOUR_API_KEY'}
)
data = response.json()
print(data)`,
          }}
        />

        <ApiEndpoint
          title="📖 Quran API — /api/quran"
          description="কুরআনের সূরা ও আয়াত এক্সেস করার জন্য এই API ব্যবহার করা হয়। সম্পূর্ণ সূরা, নির্দিষ্ট আয়াত বা একটি র‌্যান্ডম আয়াত পাওয়া যায়।"
          examples={{
            curl: `curl -X GET "https://api.frostfoe.me/api/quran?id=1" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
            javascript: `const response = await fetch('https://api.frostfoe.me/api/quran?id=1', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});
const surah = await response.json();
console.log(surah);`,
            python: `import requests

response = requests.get(
  'https://api.frostfoe.me/api/quran?id=1',
  headers={'Authorization': 'Bearer YOUR_API_KEY'}
)
surah = response.json()
print(surah)`,
          }}
        />
      </div>
    </section>
  );
}

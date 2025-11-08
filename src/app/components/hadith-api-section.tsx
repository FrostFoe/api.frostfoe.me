import React from "react";
import { HttpBadge } from "./http-badge";
import { CodeSnippet } from "./code-snippet";

export function HadithApiSection() {
  return (
    <section id="hadith-api" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-semibold text-white mb-4">হাদিস এপিআই</h2>
      <p className="text-oa-text-secondary mb-8">
        হাদিস সংক্রান্ত তথ্য পেতে এই এপিআই ব্যবহার করুন। আপনি একটি র‍্যান্ডম হাদিস,
        নির্দিষ্ট সংখ্যক হাদিস, অথবা নির্দিষ্ট লেখকের হাদিস পেতে পারেন।
      </p>

      <div className="space-y-8">
        {/* Get a random hadith */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            একটি র‍্যান্ডম হাদিস পান
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            একটি случайный হাদিস পেতে, `random=1` প্যারামিটার ব্যবহার করুন।
          </p>
          <div className="card !p-0">
            <div className="p-4 border-b border-oa-border">
              <HttpBadge method="GET" endpoint="/api/hadith?random=1" />
            </div>
            <CodeSnippet
              language="json"
              showLineNumbers={false}
              code={`{
  "data": [
    {
      "id": 5,
      "text": "পরিষ্কার-পরিচ্ছন্নতা ঈমানের অঙ্গ।",
      "author": "মুসলিম",
      "type": "hadith"
    }
  ],
  "count": 1
}`}
            />
          </div>
        </div>

        {/* Get a limited number of hadiths */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            নির্দিষ্ট সংখ্যক হাদিস পান
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            নির্দিষ্ট সংখ্যক হাদিস পেতে `limit` প্যারামিটার ব্যবহার করুন।
          </p>
          <div className="card !p-0">
            <div className="p-4 border-b border-oa-border">
              <HttpBadge method="GET" endpoint="/api/hadith?limit=2" />
            </div>
            <CodeSnippet
              language="json"
              showLineNumbers={false}
              code={`{
  "data": [
    {
      "id": 1,
      "text": "তোমাদের মধ্যে সর্বোত্তম সে-ই, যে নিজ নৈতিকতায় সর্বোত্তম।",
      "author": "বুখারী ও মুসলিম",
      "type": "hadith"
    },
    {
      "id": 2,
      "text": "যে ব্যক্তি আল্লাহর প্রতি ও শেষ দিনের প্রতি ঈমান রাখে, সে যেন ভালো কথা বলে অথবা চুপ থাকে।",
      "author": "বুখারী",
      "type": "hadith"
    }
  ],
  "count": 2
}`}
            />
          </div>
        </div>

        {/* Search hadiths by author */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            লেখক দ্বারা হাদিস খুঁজুন
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            নির্দিষ্ট লেখকের হাদিস খুঁজতে `author` প্যারামিটার ব্যবহার করুন।
          </p>
          <div className="card !p-0">
            <div className="p-4 border-b border-oa-border">
              <HttpBadge method="GET" endpoint="/api/hadith?author=মুসলিম" />
            </div>
            <CodeSnippet
              language="json"
              showLineNumbers={false}
              code={`{
  "data": [
    {
      "id": 1,
      "text": "তোমাদের মধ্যে সর্বোত্তম সে-ই, যে নিজ নৈতিকতায় সর্বোত্তম।",
      "author": "বুখারী ও মুসলিম",
      "type": "hadith"
    },
    {
      "id": 3,
      "text": "আল্লাহ সুন্দর এবং তিনি সৌন্দর্যকে ভালোবাসেন।",
      "author": "মুসলিম",
      "type": "hadith"
    },
    {
      "id": 4,
      "text": "যে ব্যক্তি জ্ঞান অর্জনের জন্য কোনো পথ অবলম্বন করে, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন।",
      "author": "মুসলিম",
      "type": "hadith"
    },
    {
      "id": 5,
      "text": "পরিষ্কার-পরিচ্ছন্নতা ঈমানের অঙ্গ।",
      "author": "মুসলিম",
      "type": "hadith"
    }
  ],
  "count": 4
}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

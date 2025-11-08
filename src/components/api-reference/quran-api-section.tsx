import React from "react";
import { HttpBadge } from "../http-badge";
import { CodeSnippet } from "@/app/components/code-snippet";

export function QuranApiSection() {
  return (
    <section id="quran-api" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-semibold text-white mb-4">কুরআন এপিআই</h2>
      <p className="text-oa-text-secondary mb-8">
        কুরআনের সূরা এবং আয়াত সংক্রান্ত তথ্য পেতে এই এপিআই ব্যবহার করুন। আপনি
        সমস্ত সূরার তালিকা, নির্দিষ্ট সূরা বা একটি র‍্যান্ডম আয়াত পেতে পারেন।
      </p>

      <div className="space-y-8">
        {/* Get all surahs */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            সমস্ত সূরার তালিকা পান
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            কুরআনের সমস্ত সূরার একটি তালিকা পেতে, কোনো প্যারামিটার ছাড়াই অনুরোধ
            করুন।
          </p>
          <div className="card !p-0">
            <div className="p-4 border-b border-oa-border">
              <HttpBadge method="GET" endpoint="/api/quran" />
            </div>
            <CodeSnippet
              language="json"
              showLineNumbers={false}
              code={`{
  "surahs": [
    {
      "id": 1,
      "name": "الفاتحة",
      "transliteration": "Al-Fatihah",
      "translation": "The Opening",
      "total_verses": 7,
      "type": "Meccan"
    },
    {
      "id": 2,
      "name": "البقرة",
      "transliteration": "Al-Baqarah",
      "translation": "The Cow",
      "total_verses": 286,
      "type": "Medinan"
    }
    // ... and so on
  ]
}`}
            />
          </div>
        </div>

        {/* Get a specific surah */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            একটি নির্দিষ্ট সূরা পান
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            একটি নির্দিষ্ট সূরা এবং তার সমস্ত আয়াত পেতে `id` প্যারামিটার ব্যবহার
            করুন।
          </p>
          <div className="card !p-0">
            <div className="p-4 border-b border-oa-border">
              <HttpBadge method="GET" endpoint="/api/quran?id=1" />
            </div>
            <CodeSnippet
              language="json"
              showLineNumbers={false}
              code={`{
  "id": 1,
  "name": "الفاتحة",
  "transliteration": "Al-Fatihah",
  "translation": "The Opening",
  "type": "Meccan",
  "total_verses": 7,
  "verses": [
    {
      "id": 1,
      "text": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "transliteration": "বিছমিল্লাহির রাহমানির রাহিম।",
      "translation_bn": "শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।",
      "translation_en": "In the name of Allah, Most Gracious, Most Merciful."
    },
    // ... other verses
  ]
}`}
            />
          </div>
        </div>

        {/* Get a random verse */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            একটি র‍্যান্ডম আয়াত পান
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            একটি র‍্যান্ডম আয়াত পেতে `random=1` প্যারামিটার ব্যবহার করুন।
          </p>
          <div className="card !p-0">
            <div className="p-4 border-b border-oa-border">
              <HttpBadge method="GET" endpoint="/api/quran?random=1" />
            </div>
            <CodeSnippet
              language="json"
              showLineNumbers={false}
              code={`{
  "id": 255,
  "text": "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
  "surah_id": 2,
  "surah_name": "البقرة",
  "transliteration": "Allahu la ilaha illa huwa alhayyu alqayyoomu...",
  "translation_bn": "আল্লাহ ছাড়া অন্য কোন উপাস্য নেই, তিনি জীবিত, সবকিছুর ধারক।...",
  "translation_en": "Allah! There is no god but He,-the Living, the Self-subsisting, Eternal..."
}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { CodeSnippet } from "@/components/code-snippet";
import { HttpBadge } from "@/components/shared/http-badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const quranParams = [
  {
    param: "id",
    type: "number",
    desc: "নির্দিষ্ট সূরার তথ্য পেতে সূরার আইডি দিন (যেমন, `id=1`)।",
  },
  {
    param: "random",
    type: "boolean",
    desc: "একটি র‍্যান্ডম আয়াত পেতে `true` সেট করুন।",
  },
];

export function QuranApiSection() {
  return (
    <section id="quran-api" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-semibold text-white mb-4">কুরআন এপিআই</h2>
      <p className="text-oa-text-secondary mb-8">
        পবিত্র কুরআনের সূরা এবং আয়াত সংক্রান্ত তথ্য পেতে এই এপিআই ব্যবহার করুন। আপনি সমস্ত সূরার একটি তালিকা, নির্দিষ্ট সূরার বিস্তারিত তথ্য অথবা একটি দৈবচয়ন করা আয়াত পেতে পারেন।
      </p>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>এন্ডপয়েন্ট প্যারামিটার</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>প্যারামিটার</TableHead>
                  <TableHead>টাইপ</TableHead>
                  <TableHead>বর্ণনা</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quranParams.map((p) => (
                  <TableRow key={p.param}>
                    <TableCell className="font-mono">{p.param}</TableCell>
                    <TableCell className="font-mono">{p.type}</TableCell>
                    <TableCell>{p.desc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            সমস্ত সূরার তালিকা
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            কুরআনের ১১৪টি সূরার একটি তালিকা পেতে, কোনো ক্যোয়ারী প্যারামিটার ছাড়াই অনুরোধ করুন। প্রতিটি সূরার নাম, অনুবাদ, এবং মোট আয়াত সংখ্যা অন্তর্ভুক্ত থাকবে।
          </p>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 border-b">
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
  ]
}`}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            একটি নির্দিষ্ট সূরা পান
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            একটি নির্দিষ্ট সূরা এবং তার সমস্ত আয়াত (আরবি, উচ্চারণ, এবং অনুবাদ সহ) পেতে `id` প্যারামিটার ব্যবহার করুন।
          </p>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 border-b">
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
    }
  ]
}`}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            একটি র‍্যান্ডম আয়াত পান
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            কুরআন থেকে একটি দৈবচয়ন করা আয়াত পেতে `random=true` প্যারামিটার ব্যবহার করুন। এটি 'দিনের আয়াত' ফিচার তৈরির জন্য খুবই উপযোগী।
          </p>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 border-b">
              <HttpBadge method="GET" endpoint="/api/quran?random=true" />
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

import React from "react";
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
import CodeSnippet from "@/components/code-snippet";


const hadithParams = [
  {
    param: "random",
    type: "boolean",
    desc: "একটি র‍্যান্ডম হাদিস পেতে `true` সেট করুন।",
  },
  {
    param: "limit",
    type: "number",
    desc: "নির্দিষ্ট সংখ্যক হাদিস পেতে সংখ্যা দিন (যেমন, `limit=5`)।",
  },
  {
    param: "search",
    type: "string",
    desc: "হাদিসের বিষয়বস্তু বা লেখকের নাম দিয়ে অনুসন্ধান করুন।",
  },
  {
    param: "author",
    type: "string",
    desc: "নির্দিষ্ট লেখকের হাদিস খুঁজতে লেখকের নাম দিন।",
  },
];

export function HadithApiSection() {
  return (
    <section id="hadith-api" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-semibold text-white mb-4">হাদিস এপিআই</h2>
      <p className="text-oa-text-secondary mb-8">
        সহীহ হাদিসের একটি বিশাল সংগ্রহ থেকে তথ্য পেতে এই RESTful এপিআই ব্যবহার করুন। আপনি একটি র‍্যান্ডম হাদিস, নির্দিষ্ট সংখ্যক হাদিস, অথবা লেখক বা বিষয়বস্তু দ্বারা হাদিস অনুসন্ধান করতে পারেন।
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
                {hadithParams.map((p) => (
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
            একটি র‍্যান্ডম হাদিস পান
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            একটি দৈবচয়ন করা হাদিস পেতে, `random=true` ক্যোয়ারী প্যারামিটার ব্যবহার করুন। এটি প্রতিদিনের হাদিস বা অনুপ্রেরণামূলক উক্তির জন্য চমৎকার।
          </p>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 border-b">
              <HttpBadge method="GET" endpoint="/api/hadith?random=true" />
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

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            একাধিক হাদিস পান (লিমিট সহ)
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            নির্দিষ্ট সংখ্যক হাদিস পেতে `limit` প্যারামিটার ব্যবহার করুন। এটি তালিকা বা ফিড তৈরির জন্য উপযোগী।
          </p>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 border-b">
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

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            হাদিস অনুসন্ধান করুন (Search)
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            নির্দিষ্ট শব্দ বা লেখকের উপর ভিত্তি করে হাদিস খুঁজতে `search` বা `author` প্যারামিটার ব্যবহার করুন।
          </p>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-4">
            <div className="p-4 border-b">
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
    { "id": 3, "text": "...", "author": "মুসলিম", "type": "hadith" },
    { "id": 4, "text": "...", "author": "মুসলিম", "type": "hadith" },
    { "id": 5, "text": "...", "author": "মুসলিম", "type": "hadith" }
  ],
  "count": 4
}`}
            />
          </div>
           <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 border-b">
              <HttpBadge method="GET" endpoint="/api/hadith?search=ঈমান" />
            </div>
            <CodeSnippet
              language="json"
              showLineNumbers={false}
              code={`{
  "data": [
    {
      "id": 2,
      "text": "যে ব্যক্তি আল্লাহর প্রতি ও শেষ দিনের প্রতি ঈমান রাখে, সে যেন ভালো কথা বলে অথবা চুপ থাকে।",
      "author": "বুখারী",
      "type": "hadith"
    },
    {
      "id": 5,
      "text": "পরিষ্কার-পরিচ্ছন্নতা ঈমানের অঙ্গ।",
      "author": "মুসলিম",
      "type": "hadith"
    }
  ],
  "count": 2
}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

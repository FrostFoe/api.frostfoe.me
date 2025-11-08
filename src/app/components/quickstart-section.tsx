import React from "react";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CodeSnippet } from "./code-snippet";

export function QuickstartSection() {
  return (
    <section id="introduction" className="mb-16 scroll-mt-20">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        কুরআন ও হাদিস এপিআই প্ল্যাটফর্ম
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-white">
            ডেভেলপার কুইকস্টার্ট
          </h2>
          <p className="text-md text-oa-text-secondary mt-2 mb-6">
            মাত্র কয়েক মিনিটেই আপনার প্রথম API অনুরোধ পাঠিয়ে প্ল্যাটফর্মের
            মৌলিক ফিচারগুলো বুঝে নিন।
          </p>
          <Link
            href="#hadith-api"
            className="inline-block btn btn-primary px-6 py-2.5 text-base w-full sm:w-auto text-center"
          >
            এপিআই ডকুমেন্টেশন দেখুন
          </Link>
        </div>

        {/* Code Example */}
        <div className="w-full">
          <Tabs defaultValue="javascript" className="w-full">
            <div className="relative rounded-t-lg bg-oa-bg-dark border border-b-0 border-oa-border p-2">
              <div className="flex pl-2 pt-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/70"
                >
                  <circle r="12" cy="12" cx="12"></circle>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/70"
                >
                  <circle r="12" cy="12" cx="12"></circle>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/70"
                >
                  <circle r="12" cy="12" cx="12"></circle>
                </svg>
              </div>
              <TabsList className="absolute inset-x-0 -top-1.5 flex justify-center bg-transparent p-0 border-0">
                <TabsTrigger
                  value="javascript"
                  className="text-xs text-oa-text-tertiary data-[state=active]:text-oa-text-primary data-[state=active]:bg-oa-bg-light rounded-md px-3 py-1"
                >
                  script.js
                </TabsTrigger>
                <TabsTrigger
                  value="curl"
                  className="text-xs text-oa-text-tertiary data-[state=active]:text-oa-text-primary data-[state=active]:bg-oa-bg-light rounded-md px-3 py-1"
                >
                  terminal
                </TabsTrigger>
                <TabsTrigger
                  value="python"
                  className="text-xs text-oa-text-tertiary data-[state=active]:text-oa-text-primary data-[state=active]:bg-oa-bg-light rounded-md px-3 py-1"
                >
                  script.py
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="javascript" className="mt-0">
              <CodeSnippet
                language="javascript"
                code={`// একটি র‍্যান্ডম হাদিস পেতে
async function getRandomHadith() {
  const response = await fetch('/api/hadith?random=1');
  const data = await response.json();
  console.log(data);
}

getRandomHadith();

// সূরা ফাতিহা পেতে
async function getSurahAlFatihah() {
  const response = await fetch('/api/quran?id=1');
  const data = await response.json();
  console.log(data);
}

getSurahAlFatihah();`}
              />
            </TabsContent>
            <TabsContent value="curl" className="mt-0">
              <CodeSnippet
                language="bash"
                code={`# একটি র‍্যান্ডম হাদিস পেতে
curl http://localhost:9002/api/hadith?random=1

# নির্দিষ্ট সংখ্যক হাদিস পেতে (যেমন ৫টি)
curl http://localhost:9002/api/hadith?limit=5

# একটি নির্দিষ্ট সূরা পেতে (যেমন সূরা ফাতিহা, id=1)
curl http://localhost:9002/api/quran?id=1

# একটি র‍্যান্ডম আয়াত পেতে
curl http://localhost:9002/api/quran?random=1`}
              />
            </TabsContent>
            <TabsContent value="python" className="mt-0">
              <CodeSnippet
                language="python"
                code={`import requests
import json

BASE_URL = "http://localhost:9002"

# একটি র‍্যান্ডম হাদিস পেতে
def get_random_hadith():
    response = requests.get(f"{BASE_URL}/api/hadith?random=1")
    if response.status_code == 200:
        print(json.dumps(response.json(), indent=2, ensure_ascii=False))
    else:
        print(f"Error: {response.status_code}")

get_random_hadith()

# সূরা বাকারাহ (id=2) পেতে
def get_surah_baqarah():
    response = requests.get(f"{BASE_URL}/api/quran?id=2")
    if response.status_code == 200:
        print(json.dumps(response.json(), indent=2, ensure_ascii=False))

get_surah_baqarah()`}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

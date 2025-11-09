import React from "react";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CodeSnippet } from "@/app/components/code-snippet";

export function QuickstartSection() {
    const curlCode = `curl 'http://localhost:9002/api/hadith?random=true'

curl 'http://localhost:9002/api/quran?id=1'`;

    const jsCode = `async function getRandomHadith() {
  try {
    const response = await fetch('/api/hadith?random=true');
    const data = await response.json();
    console.log('Random Hadith:', data.data[0].text);
  } catch (error) {
    console.error("Failed to fetch hadith:", error);
  }
}

async function getSurahAlFatihah() {
  try {
    const response = await fetch('/api/quran?id=1');
    const data = await response.json();
    console.log('Surah Al-Fatihah:', data.transliteration, \`(\${data.translation})\`);
  } catch (error) {
    console.error("Failed to fetch surah:", error);
  }
}

getRandomHadith();
getSurahAlFatihah();`;

    const pythonCode = `import requests
import json

BASE_URL = "http://localhost:9002"

def get_random_verse():
    try:
        response = requests.get(f"{BASE_URL}/api/quran?random=true")
        response.raise_for_status()
        verse = response.json()
        print(f"Random Verse from {verse['surah_name']}:")
        print(verse['translation_bn'])
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")

get_random_verse()`;


  return (
    <section id="introduction" className="mb-16 scroll-mt-20">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        ফ্রস্টফয়: ইন্টেলিজেন্ট এপিআই প্ল্যাটফর্ম
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-white">
            ডেভেলপার কুইকস্টার্ট
          </h2>
          <p className="text-md text-oa-text-secondary mt-2 mb-6">
            আমাদের শক্তিশালী এবং সহজেই ব্যবহারযোগ্য এপিআই দিয়ে আপনার অ্যাপ্লিকেশন তৈরি শুরু করুন। মাত্র কয়েক মিনিটেই আপনার প্রথম অনুরোধ পাঠিয়ে প্ল্যাটফর্মের ক্ষমতা আবিষ্কার করুন।
          </p>
          <Link
            href="/api-reference"
            className="inline-block btn btn-primary px-6 py-2.5 text-base w-full sm:w-auto text-center"
          >
            এপিআই ডকুমেন্টেশন দেখুন
          </Link>
        </div>

        <div className="w-full">
          <Tabs defaultValue="curl" className="w-full">
            <div className="rounded-t-lg bg-oa-bg-dark border border-b-0 border-oa-border p-2">
              <div className="flex items-center">
                <div className="hidden sm:flex pl-2 pt-1 gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/70"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70"></span>
                  <span className="h-3 w-3 rounded-full bg-green-500/70"></span>
                </div>
                <div className="flex-grow flex justify-center">
                  <TabsList className="bg-transparent p-0 border-0 h-auto">
                    <TabsTrigger value="curl" className="text-xs text-oa-text-tertiary data-[state=active]:text-oa-text-primary data-[state=active]:bg-oa-bg-light rounded-md px-3 py-1">cURL</TabsTrigger>
                    <TabsTrigger value="javascript" className="text-xs text-oa-text-tertiary data-[state=active]:text-oa-text-primary data-[state=active]:bg-oa-bg-light rounded-md px-3 py-1">JavaScript</TabsTrigger>
                    <TabsTrigger value="python" className="text-xs text-oa-text-tertiary data-[state=active]:text-oa-text-primary data-[state=active]:bg-oa-bg-light rounded-md px-3 py-1">Python</TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </div>
            <TabsContent value="curl" className="mt-0">
              <CodeSnippet language="bash" code={curlCode} />
            </TabsContent>
            <TabsContent value="javascript" className="mt-0">
              <CodeSnippet language="javascript" code={jsCode} />
            </TabsContent>
            <TabsContent value="python" className="mt-0">
              <CodeSnippet language="python" code={pythonCode} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import Link from "next/link";
import { Tabs } from "./tabs";
import { CodeSnippet } from "./code-snippet";

export function QuickstartSection() {
  return (
    <section id="introduction" className="mb-16 scroll-mt-20">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        ফ্রস্টফয় এপিআই প্ল্যাটফর্ম
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-white">
            ডেভেলপার কুইকস্টার্ট
          </h2>
          <p className="text-md text-oa-text-secondary mt-2 mb-6">
            মাত্র কয়েক মিনিটেই তোমার প্রথম Frostfy API অনুরোধ পাঠাও এবং
            প্ল্যাটফর্মের মৌলিক ফিচারগুলো বুঝে নাও।
          </p>
          <Link
            href="#"
            className="inline-block btn btn-primary px-6 py-2.5 text-base w-full sm:w-auto text-center"
          >
            শুরু করো
          </Link>
        </div>

        {/* Code Example */}
        <div className="bg-oa-bg-dark rounded-lg border border-oa-border overflow-hidden">
          <Tabs
            tabs={[
              {
                id: "javascript",
                label: "JavaScript",
                content: (
                  <CodeSnippet
                    language="javascript"
                    code={`import Frostfy from "frostfy";
const client = new Frostfy({ apiKey: process.env.FROSTFY_KEY });

const response = await client.chat.create({
  model: "frostfy-5",
  messages: [{ 
    role: "user", 
    content: "বরফের রোবট সম্পর্কে একটি গল্প লেখো." 
  }]
});

console.log(response.output_text);`}
                  />
                ),
              },
              {
                id: "curl",
                label: "cURL",
                content: (
                  <CodeSnippet
                    language="bash"
                    code={`curl -X POST https://api.frostfoe.me/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "frostfy-5",
    "messages": [
      {
        "role": "user",
        "content": "বরফের রোবট সম্পর্কে একটি গল্প লেখো."
      }
    ]
  }'`}
                  />
                ),
              },
              {
                id: "python",
                label: "Python",
                content: (
                  <CodeSnippet
                    language="python"
                    code={`import os
from frostfy import Frostfy

client = Frostfy(api_key=os.getenv("FROSTFY_KEY"))

response = client.chat.create(
    model="frostfy-5",
    messages=[
        {
            "role": "user",
            "content": "বরফের রোবট সম্পর্কে একটি গল্প লেখো."
        }
    ]
)

print(response.output_text)`}
                  />
                ),
              },
            ]}
            defaultTab="javascript"
          />
        </div>
      </div>
    </section>
  );
}

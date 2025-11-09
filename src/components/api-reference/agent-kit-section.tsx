import React from "react";
import { CodeSnippet } from "@/components/code-snippet";
import { HttpBadge } from "@/components/shared/http-badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function AgentKitSection() {
  const fetchCode = `fetch('https://api.frostfoe.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    model: 'frostfoe-5-nano',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.'
      },
      {
        role: 'user',
        content: 'হ্যালো, আপনার নাম কি?'
      }
    ]
  })
})
.then(response => response.json())
.then(data => {
  console.log(data.choices[0].message.content);
})
.catch(error => {
  console.error('Error:', error);
});`;

  const nodeCode = `const https = require('https');

const data = JSON.stringify({
  model: 'frostfoe-5-nano',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'হ্যালো, আপনার নাম কি?' }
  ]
});

const options = {
  hostname: 'api.frostfoe.ai',
  port: 443,
  path: '/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });
  res.on('end', () => {
    console.log(JSON.parse(body).choices[0].message.content);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();`;

  const responseJson = `{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 171888649,
  "model": "frostfoe-5-nano",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "আমি ফ্রস্টফয় দ্বারা তৈরি একটি বৃহৎ ভাষা মডেল।"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 15,
    "total_tokens": 35
  }
}`;

  return (
    <section id="chat-api" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-semibold text-white mb-4">চ্যাট এপিআই</h2>
      <p className="text-oa-text-secondary mb-8">
        ফ্রস্টফয় মডেলগুলির সাথে কথোপকথনমূলক ইন্টারফেস তৈরি করতে চ্যাট এপিআই ব্যবহার করুন। এটি একটি শক্তিশালী এবং নমনীয় এন্ডপয়েন্ট যা বিভিন্ন ধরণের চ্যাট-ভিত্তিক অ্যাপ্লিকেশন, কনটেন্ট তৈরি এবং আরও অনেক কিছু করতে পারে।
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            একটি চ্যাট সেশন তৈরি করুন
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            একটি নতুন চ্যাট সেশন তৈরি করতে, আপনাকে মডেলের নাম এবং বার্তাগুলির একটি তালিকা সহ একটি POST অনুরোধ পাঠাতে হবে। সিস্টেম বার্তা (system message) ব্যবহার করে আপনি মডেলের আচরণ নির্ধারণ করতে পারেন।
          </p>
          <div className="card !p-0">
            <div className="p-4 border-b border-oa-border">
              <HttpBadge method="POST" endpoint="/v1/chat/completions" />
            </div>
            <Tabs defaultValue="javascript" className="w-full">
               <TabsList className="bg-oa-bg-dark border-b border-oa-border rounded-none p-0 h-auto justify-start">
                <TabsTrigger value="javascript" className="text-xs data-[state=active]:bg-oa-bg-light data-[state=active]:text-white rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-white border-b-2 border-transparent">JavaScript</TabsTrigger>
                <TabsTrigger value="node" className="text-xs data-[state=active]:bg-oa-bg-light data-[state=active]:text-white rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-white border-b-2 border-transparent">Node.js</TabsTrigger>
              </TabsList>
              <TabsContent value="javascript" className="mt-0">
                <CodeSnippet
                  language="javascript"
                  showLineNumbers={true}
                  code={fetchCode}
                />
              </TabsContent>
              <TabsContent value="node" className="mt-0">
                <CodeSnippet
                  language="javascript"
                  showLineNumbers={true}
                  code={nodeCode}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            উদাহরণ প্রতিক্রিয়া (Response)
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            সফল অনুরোধের পর, এপিআই নিম্নলিখিত ফরম্যাটে একটি প্রতিক্রিয়া দেবে, যেখানে মডেলের উত্তর এবং টোকেন ব্যবহারের তথ্য থাকবে।
          </p>
          <div className="card !p-0">
            <div className="p-4 border-b border-oa-border">
              <span className="text-sm text-oa-text-secondary">
                JSON Response Body
              </span>
            </div>
            <CodeSnippet
              language="json"
              showLineNumbers={false}
              code={responseJson}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

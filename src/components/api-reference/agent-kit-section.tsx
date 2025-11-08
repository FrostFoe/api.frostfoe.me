import React from "react";
import { HttpBadge } from "@/app/components/http-badge";
import { CodeSnippet } from "@/app/components/code-snippet";

export function AgentKitSection() {
  const nodeJsCode = `const axios = require('axios');

const data = {
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
};

axios.post('https://api.frostfoe.ai/v1/chat/completions', data, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => {
  console.log(response.data.choices[0].message.content);
})
.catch(error => {
  console.error('Error:', error);
});`;

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
        ফ্রস্টফয় মডেলগুলির সাথে কথোপকথনমূলক ইন্টারফেস তৈরি করতে চ্যাট
        এপিআই ব্যবহার করুন। এটি একটি শক্তিশালী এবং নমনীয় এন্ডপয়েন্ট যা বিভিন্ন
        ধরণের চ্যাট-ভিত্তিক অ্যাপ্লিকেশন তৈরি করতে পারে।
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            একটি চ্যাট সেশন তৈরি করুন
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            একটি নতুন চ্যাট সেশন তৈরি করতে, আপনাকে মডেলের নাম এবং বার্তাগুলির
            একটি তালিকা পাঠাতে হবে।
          </p>
          <div className="card !p-0">
            <div className="p-4 border-b border-oa-border">
              <HttpBadge method="POST" endpoint="/v1/chat/completions" />
            </div>
            <CodeSnippet
              language="javascript"
              showLineNumbers={true}
              code={nodeJsCode}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            উদাহরণ প্রতিক্রিয়া (Response)
          </h3>
          <p className="text-sm text-oa-text-secondary mb-4">
            সফল অনুরোধের পর, এপিআই নিম্নলিখিত ফরম্যাটে একটি প্রতিক্রিয়া দেবে:
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

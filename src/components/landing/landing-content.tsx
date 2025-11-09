import React from "react";
import { QuickstartSection } from "@/components/landing/quickstart-section";
import { CodeSnippet } from "@/app/components/code-snippet";

export function LandingContent() {
  const authExample = `const response = await fetch('https://api.frostfoe.ai/v1/hadith', {
  headers: {
    'Authorization': 'Bearer YOUR_SECRET_API_KEY'
  }
});

const data = await response.json();
console.log(data);
`;

  return (
    <>
      <QuickstartSection />
      <section id="installation" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          ইনস্টলেশন
        </h2>
        <p className="text-oa-text-secondary">
          আমাদের প্ল্যাটফর্মটি একটি RESTful এপিআই হিসেবে ডিজাইন করা হয়েছে, তাই কোনো বিশেষ ইনস্টলেশনের প্রয়োজন নেই। আপনি যেকোনো প্রোগ্রামিং ল্যাঙ্গুয়েজ বা টুল ব্যবহার করে আমাদের HTTP এন্ডপয়েন্টে সরাসরি অনুরোধ পাঠাতে পারেন। আপনার প্রয়োজন শুধু একটি ইন্টারনেট সংযোগ এবং একটি HTTP ক্লায়েন্ট।
        </p>
      </section>
      <section id="authentication" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          অথেন্টিকেশন
        </h2>
        <p className="text-oa-text-secondary mb-6">
          বর্তমানে, আমাদের পাবলিক এপিআই এন্ডপয়েন্টগুলো ('/api/quran' এবং '/api/hadith') ব্যবহারের জন্য কোনো অথেন্টিকেশন কী-এর প্রয়োজন নেই। তবে, আমাদের উন্নত মডেলগুলো ('/v1/chat/completions') ব্যবহারের জন্য একটি API কী প্রয়োজন হবে, যা আপনাকে 'Authorization' হেডারে একটি Bearer টোকেন হিসেবে পাঠাতে হবে।
        </p>
        <CodeSnippet
          language="javascript"
          showLineNumbers={false}
          code={authExample}
        />
      </section>
      <section id="first-request" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          আপনার প্রথম অনুরোধ
        </h2>
        <p className="text-oa-text-secondary">
          আপনি 'curl' অথবা যেকোনো প্রোগ্রামিং ল্যাঙ্গুয়েজ ব্যবহার করে আমাদের এপিআই-তে আপনার প্রথম অনুরোধ পাঠাতে পারেন। নিচের কুইকস্টার্ট সেকশনে বিভিন্ন ভাষায় কোড উদাহরণ দেওয়া আছে যা আপনাকে দ্রুত শুরু করতে সাহায্য করবে।
        </p>
      </section>
    </>
  );
}

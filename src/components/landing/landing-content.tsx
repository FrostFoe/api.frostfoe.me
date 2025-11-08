import React from "react";
import { QuickstartSection } from "@/components/landing/quickstart-section";

export function LandingContent() {
  return (
    <>
      <QuickstartSection />
      <section id="installation" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          ইনস্টলেশন
        </h2>
        <p className="text-oa-text-secondary">
          আমাদের প্ল্যাটফর্ম ব্যবহার করার জন্য কোনো বিশেষ ইনস্টলেশনের
          প্রয়োজন নেই। আপনি সরাসরি আমাদের এপিআই এন্ডপয়েন্ট ব্যবহার করে
          ডেটা পেতে পারেন।
        </p>
      </section>
      <section id="authentication" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          অথেন্টিকেশন
        </h2>
        <p className="text-oa-text-secondary">
          বর্তমানে, আমাদের পাবলিক এপিআই এন্ডপয়েন্টগুলো ব্যবহার করার জন্য
          কোনো অথেন্টিকেশন কী-এর প্রয়োজন নেই। ভবিষ্যতে আমরা API কী ভিত্তিক
          অথেন্টিকেশন যোগ করতে পারি।
        </p>
      </section>
      <section id="first-request" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          আপনার প্রথম অনুরোধ
        </h2>
        <p className="text-oa-text-secondary">
          আপনি `curl` অথবা যেকোনো প্রোগ্রামিং ল্যাঙ্গুয়েজ ব্যবহার করে
          আমাদের এপিআই-তে আপনার প্রথম অনুরোধ পাঠাতে পারেন। কুইকস্টার্ট
          সেকশনে উদাহরণ দেওয়া আছে।
        </p>
      </section>
    </>
  );
}

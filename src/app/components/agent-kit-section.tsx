import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AgentKitSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-white mb-6">
        ফ্রস্টফয় এজেন্টকিট দিয়ে তৈরি করুন
      </h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <div className="space-y-3 mb-6">
            <button className="btn w-full text-left btn-secondary">
              ডিজাইন
            </button>
            <button className="btn w-full text-left btn-secondary opacity-50">
              ডিপ্লয়
            </button>
            <button className="btn w-full text-left btn-secondary opacity-50">
              অপ্টিমাইজ
            </button>
          </div>
          <button className="w-full text-left p-4 rounded-lg bg-oa-bg-light hover:bg-opacity-80">
            <div className="flex justify-between items-center">
              <span className="text-oa-text-secondary">
                <span className="text-white font-medium">ডিজাইন </span>
                এবং ভার্সন করুন ওয়ার্কফ্লো Agent Builder দিয়ে, অথবা কোডের
                মাধ্যমে নিয়ন্ত্রণ নিন Frostfy SDK ব্যবহার করে।
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 ml-2" />
            </div>
          </button>
        </div>

        <div className="bg-oa-bg-dark rounded-lg border border-oa-border p-2">
          <Image
            src="https://cdn.openai.com/API/docs/images/builder-home-visual-dark.png"
            alt="ফ্রস্টফয় এজেন্ট বিল্ডার ইন্টারফেস"
            className="rounded-md w-full h-auto"
            width={1000}
            height={750}
            priority
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { Cpu, Zap, Wind } from "lucide-react";

interface Model {
  name: string;
  desc: string;
  icon: React.ElementType;
  tags: string[];
}

const MODELS: Model[] = [
  {
    name: "ফ্রস্টফয় ৫",
    desc: "সবচেয়ে শক্তিশালী এবং উন্নত মডেল, যা জটিল যুক্তি, কোডিং এবং সৃজনশীল কাজের জন্য সেরা।",
    icon: Cpu,
    tags: ["Reasoning", "Code", "Creative"],
  },
  {
    name: "ফ্রস্টফয় ৫ মিনি",
    desc: "উচ্চ পারফরম্যান্স এবং কম খরচের একটি ভারসাম্যপূর্ণ মডেল, যা বেশিরভাগ সাধারণ কাজের জন্য উপযুক্ত।",
    icon: Zap,
    tags: ["Fast", "General", "Cost-Effective"],
  },
  {
    name: "ফ্রস্টফয় ৫ ন্যানো",
    desc: "সবচেয়ে দ্রুত এবং হালকা মডেল, যা দ্রুত প্রতিক্রিয়া এবং মোবাইল অ্যাপ্লিকেশনের জন্য আদর্শ।",
    icon: Wind,
    tags: ["Fastest", "Mobile", "Chat"],
  },
];

function ModelTag({ tag }: { tag: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-oa-bg-light text-oa-text-secondary">
      {tag}
    </span>
  );
}

function ModelCard({ model }: { model: Model }) {
  return (
    <Link
      href="#"
      className="card card-hover flex flex-col justify-between p-6 group"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <model.icon className="w-5 h-5 text-oa-text-secondary group-hover:text-white transition-colors" />
          <h3 className="font-semibold text-white">{model.name}</h3>
        </div>
        <p className="text-sm text-oa-text-secondary mb-4">{model.desc}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {model.tags.map((tag) => (
          <ModelTag key={tag} tag={tag} />
        ))}
      </div>
    </Link>
  );
}

export function ModelsSection() {
  return (
    <section id="models" className="mb-16 scroll-mt-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">মডেল ব্রাউজ করুন</h2>
        <Link
          href="#"
          className="text-sm text-oa-text-tertiary hover:text-white"
        >
          সব মডেল দেখুন
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MODELS.map((model) => (
          <ModelCard key={model.name} model={model} />
        ))}
      </div>
    </section>
  );
}

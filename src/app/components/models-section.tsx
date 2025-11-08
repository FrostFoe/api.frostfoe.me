import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Model {
  name: string;
  desc: string;
  img: string;
}

const MODELS: Model[] = [
  {
    name: "Frostfy 5",
    desc: "সবচেয়ে শক্তিশালী জেনারেটিভ মডেল কোডিং ও এজেন্টিক কাজের জন্য",
    img: "https://cdn.openai.com/API/docs/images/model-page/model-art/gpt-5.jpg",
  },
  {
    name: "Frostfy 5 Mini",
    desc: "দ্রুত ও কম খরচের সংস্করণ",
    img: "https://cdn.openai.com/API/docs/images/model-page/model-art/gpt-5-mini.jpg",
  },
  {
    name: "Frostfy 5 Nano",
    desc: "সবচেয়ে দ্রুত ও হালকা মডেল",
    img: "https://cdn.openai.com/API/docs/images/model-page/model-art/gpt-5-nano.jpg",
  },
];

function ModelCard({ model }: { model: Model }) {
  return (
    <Link
      href="#"
      className="flex flex-col gap-4 text-white hover:text-white group"
    >
      <div
        className="h-[180px] w-full rounded-lg bg-cover bg-center overflow-hidden border border-oa-border group-hover:border-oa-text-tertiary"
        style={{ backgroundImage: `url(${model.img})` }}
      />
      <div>
        <div className="font-semibold">{model.name}</div>
        <div className="text-sm text-oa-text-secondary">{model.desc}</div>
      </div>
    </Link>
  );
}

export function ModelsSection() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">মডেল ব্রাউজ করো</h2>
        <Link
          href="#"
          className="text-sm text-oa-text-tertiary hover:text-white"
        >
          সব দেখো
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {MODELS.map((model) => (
          <ModelCard key={model.name} model={model} />
        ))}
      </div>
    </section>
  );
}

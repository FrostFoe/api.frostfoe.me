"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 fixed top-0 left-0 h-full border-r border-oa-border bg-oa-dark p-4 flex-col hidden md:flex z-10">
        <div className="h-14 flex items-center px-2">
          <Link href="#" className="flex items-center gap-2">
            <img src="/logo.svg" className="text-white h-6" alt="Frostfy Platform" />
            <span className="font-semibold text-lg text-white">
              ফ্রস্টফয় এপিআই প্ল্যাটফর্ম
            </span>
          </Link>
        </div>

        <div className="mt-4 px-2">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg bg-oa-bg-dark px-3 py-2 text-left text-sm text-oa-text-tertiary border border-oa-border hover:border-oa-text-secondary"
          >
            <span>অনুসন্ধান</span>
            <span className="flex items-center gap-1 text-xs">
              <kbd className="px-1.5 py-0.5 rounded border border-oa-border bg-oa-bg-light">
                ⌘
              </kbd>
              <kbd className="px-1.5 py-0.5 rounded border border-oa-border bg-oa-bg-light">
                K
              </kbd>
            </span>
          </button>
        </div>

        <nav className="mt-6 flex-1 space-y-2 px-2">
          <Link href="#" className="sidebar-link">
            <img src="/icons/cookbook.svg" className="w-5 h-5" alt="Cookbook" />
            <span>রিসোর্স গাইড</span>
          </Link>
          <Link href="#" className="sidebar-link">
            <img src="/icons/forum.svg" className="w-5 h-5" alt="Forum" />
            <span>কমিউনিটি</span>
          </Link>
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 md:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-0 h-14 border-b border-oa-border bg-oa-dark/80 backdrop-blur-sm">
          <div className="flex h-full items-center justify-between px-4 md:px-8">
            <div className="md:hidden" />
            <nav className="hidden md:flex items-center space-x-2">
              <Link href="#" className="main-nav-link-active">
                ডকুমেন্টেশন
              </Link>
              <Link href="#" className="main-nav-link">
                API রেফারেন্স
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="btn btn-ghost text-sm hidden sm:block"
              >
                লগ ইন
              </Link>
              <Link href="#" className="btn btn-primary text-sm">
                সাইন আপ
              </Link>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="p-4 md:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Quickstart */}
            <section className="mb-16">
              <h1 className="text-4xl font-bold text-white mb-6">
                ফ্রস্টফয় এপিআই প্ল্যাটফর্ম
              </h1>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="flex flex-col justify-center h-full">
                  <h2 className="text-lg font-semibold text-white">
                    ডেভেলপার কুইকস্টার্ট
                  </h2>
                  <p className="text-md text-oa-text-secondary mt-2 mb-6">
                    মাত্র কয়েক মিনিটেই তোমার প্রথম Frostfy API অনুরোধ পাঠাও
                    এবং প্ল্যাটফর্মের মৌলিক ফিচারগুলো বুঝে নাও।
                  </p>
                  <div>
                    <Link
                      href="#"
                      className="inline-block btn btn-primary px-6 py-2.5 text-base"
                    >
                      শুরু করো
                    </Link>
                  </div>
                </div>

                <div className="bg-oa-bg-dark rounded-lg border border-oa-border overflow-hidden">
                  <div className="flex justify-between items-center px-4 py-2 border-b border-oa-border">
                    <div className="text-sm text-oa-text-secondary flex items-center gap-2">
                      <span>জাভাস্ক্রিপ্ট</span>
                      <img
                        src="/icons/chevron.svg"
                        className="w-2 h-2 text-oa-text-tertiary"
                        alt="Chevron"
                      />
                    </div>
                    <button
                      type="button"
                      className="btn-ghost p-1 rounded"
                      aria-label="Copy code"
                    >
                      <img
                        src="/icons/copy.svg"
                        className="w-4 h-4 text-oa-text-tertiary"
                        alt="Copy"
                      />
                    </button>
                  </div>
                  <div className="p-4 text-sm">
                    <pre>
                      <code className="font-mono">
                        {`import Frostfy from "frostfy";
const client = new Frostfy({ apiKey: process.env.FROSTFY_KEY });

const response = await client.chat.create({
  model: "frostfy-5",
  messages: [{ role: "user", content: "বরফের রোবট সম্পর্কে একটি গল্প লেখো." }]
});

console.log(response.output_text);`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Frostfy API Reference Examples */}
            <section className="mb-20">
              <h2 className="text-2xl font-semibold text-white mb-6">
                ফ্রস্টফয় API রেফারেন্স উদাহরণ
              </h2>

              <div className="space-y-6 text-sm text-oa-text-secondary">
                {/* Chat */}
                <div className="p-4 border border-oa-border rounded-lg bg-oa-bg-dark">
                  <h3 className="text-white font-semibold mb-2">
                    🗣️ চ্যাট API — <code>/v1/chat</code>
                  </h3>
                  <pre>
                    <code className="font-mono">
                      {`POST https://api.frostfy.ai/v1/chat
{
  "model": "frostfy-5",
  "messages": [
    {"role": "user", "content": "আজকের আবহাওয়া কেমন?"}
  ]
}`}
                    </code>
                  </pre>
                </div>

                {/* Image */}
                <div className="p-4 border border-oa-border rounded-lg bg-oa-bg-dark">
                  <h3 className="text-white font-semibold mb-2">
                    🖼️ ইমেজ API — <code>/v1/images</code>
                  </h3>
                  <pre>
                    <code className="font-mono">
                      {`POST https://api.frostfy.ai/v1/images
{
  "prompt": "বরফে ঢাকা পর্বতের উপর সূর্যোদয়",
  "size": "1024x1024"
}`}
                    </code>
                  </pre>
                </div>

                {/* Agent */}
                <div className="p-4 border border-oa-border rounded-lg bg-oa-bg-dark">
                  <h3 className="text-white font-semibold mb-2">
                    🤖 এজেন্ট API — <code>/v1/agents</code>
                  </h3>
                  <pre>
                    <code className="font-mono">
                      {`POST https://api.frostfy.ai/v1/agents
{
  "name": "FrostBot",
  "tools": ["web", "math", "calendar"],
  "goal": "ব্যবহারকারীর প্রশ্নের উত্তর দেওয়া ও কাজ সম্পন্ন করা"
}`}
                    </code>
                  </pre>
                </div>

                {/* Audio */}
                <div className="p-4 border border-oa-border rounded-lg bg-oa-bg-dark">
                  <h3 className="text-white font-semibold mb-2">
                    🎧 অডিও API — <code>/v1/audio</code>
                  </h3>
                  <pre>
                    <code className="font-mono">
                      {`POST https://api.frostfy.ai/v1/audio
{
  "file": "recording.mp3",
  "task": "transcribe"
}`}
                    </code>
                  </pre>
                </div>

                {/* Reasoning */}
                <div className="p-4 border border-oa-border rounded-lg bg-oa-bg-dark">
                  <h3 className="text-white font-semibold mb-2">
                    🧠 রিজনিং API — <code>/v1/reasoning</code>
                  </h3>
                  <pre>
                    <code className="font-mono">
                      {`POST https://api.frostfy.ai/v1/reasoning
{
  "query": "একটি বরফের কিউব গলতে কত সময় লাগবে?",
  "context": "তাপমাত্রা 25°C, ভর 100 গ্রাম"
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </section>

            {/* AgentKit Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-white mb-6">
                ফ্রস্টফয় এজেন্টকিট দিয়ে তৈরি করো
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
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
                        ও ভার্সন করো ওয়ার্কফ্লো Agent Builder দিয়ে, অথবা কোডের
                        মাধ্যমে নিয়ন্ত্রণ নাও Frostfy SDK ব্যবহার করে।
                      </span>
                      <img
                        src="/icons/arrow.svg"
                        className="w-5 h-5 ml-2 text-white flex-shrink-0"
                        alt="Arrow"
                      />
                    </div>
                  </button>
                </div>
                <div className="bg-oa-bg-dark rounded-lg border border-oa-border p-2">
                  <Image
                    src="https://cdn.openai.com/API/docs/images/builder-home-visual-dark.png"
                    alt="Frostfy Agent Builder Interface"
                    className="rounded-md w-full h-auto"
                    width={1000}
                    height={750}
                    priority
                  />
                </div>
              </div>
            </section>

            {/* Models */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">
                  মডেল ব্রাউজ করো
                </h2>
                <Link
                  href="#"
                  className="text-sm text-oa-text-tertiary hover:text-white"
                >
                  সব দেখো
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    name: "Frostfy 5",
                    desc: "সবচেয়ে শক্তিশালী জেনারেটিভ মডেল কোডিং ও এজেন্টিক কাজের জন্য",
                    img: "https://cdn.openai.com/API/docs/images/model-page/model-art/gpt-5.jpg",
                  },
                  {
                    name: "Frostfy 5 Mini",
                    desc: "দ্রুত ও কম খরচের সংস্করণ",
                    img: "https://cdn.openai.com/API/docs/images/model-page/model-art/gpt-5-mini.jpg",
                  },
                  {
                    name: "Frostfy 5 Nano",
                    desc: "সবচেয়ে দ্রুত ও হালকা মডেল",
                    img: "https://cdn.openai.com/API/docs/images/model-page/model-art/gpt-5-nano.jpg",
                  },
                ].map((m) => (
                  <Link
                    key={m.name}
                    href="#"
                    className="flex flex-col gap-4 text-white hover:text-white group"
                  >
                    <div
                      className="h-[180px] w-full rounded-lg bg-cover bg-center overflow-hidden border border-oa-border group-hover:border-oa-text-tertiary"
                      style={{ backgroundImage: `url(${m.img})` }}
                    />
                    <div>
                      <div className="font-semibold">{m.name}</div>
                      <div className="text-sm text-oa-text-secondary">
                        {m.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Footer */}
            <section className="mt-24 mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: "/icons/help-center.svg",
                    title: "সহায়তা কেন্দ্র",
                    desc: "অ্যাকাউন্ট ও বিলিং সংক্রান্ত প্রশ্নাবলি",
                  },
                  {
                    icon: "/icons/developer-forum.svg",
                    title: "ডেভেলপার কমিউনিটি",
                    desc: "অন্য ফ্রস্টফয় ডেভেলপারদের সাথে আলোচনা করো",
                  },
                  {
                    icon: "/icons/cookbook-footer.svg",
                    title: "রিসোর্স হাব",
                    desc: "উদাহরণ ও কোড স্নিপেট থেকে শেখো",
                  },
                  {
                    icon: "/icons/status.svg",
                    title: "স্ট্যাটাস",
                    desc: "ফ্রস্টফয় সার্ভিসের বর্তমান অবস্থা দেখো",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href="#"
                    className="card card-hover text-center p-6 group"
                  >
                    <div className="relative">
                      <div className="flex justify-center mb-2">
                        <img
                          src={item.icon}
                          className="text-oa-text-secondary w-6 h-6"
                          alt={item.title}
                        />
                      </div>
                      <div className="font-bold text-white mb-2">
                        {item.title}
                      </div>
                      <div className="text-sm text-oa-text-secondary">
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

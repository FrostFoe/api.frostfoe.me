import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Rocket, Mail, Github, MessageSquare } from "lucide-react";


const faqItems = [
  {
    value: "faq-1",
    question: "আমার API কী কোথায় পাব?",
    answer:
      "আপনার অ্যাকাউন্ট ড্যাশবোর্ডের 'API Keys' সেকশন থেকে আপনি আপনার কী পরিচালনা করতে এবং নতুন কী তৈরি করতে পারবেন। প্রতিটি প্রোজেক্টের জন্য আলাদা কী ব্যবহার করার পরামর্শ দেওয়া হয়।",
  },
  {
    value: "faq-2",
    question: "কোন মডেলটি আমার জন্য সেরা?",
    answer:
      "আপনার প্রয়োজন অনুযায়ী মডেল নির্বাচন করুন। দ্রুত প্রতিক্রিয়ার জন্য 'ফ্রস্টফয় ৫ ন্যানো', ভারসাম্যপূর্ণ পারফরম্যান্সের জন্য 'মিনি', এবং সবচেয়ে শক্তিশালী ও জটিল কাজের জন্য 'ফ্রস্টফয় ৫' ব্যবহার করুন। বিস্তারিত জানতে আমাদের মডেল সেকশন দেখুন।",
  },
  {
    value: "faq-3",
    question: "আমি কি কমার্শিয়াল প্রোজেক্টে এই এপিআই বিনামূল্যে ব্যবহার করতে পারি?",
    answer:
      "আমাদের পাবলিক ডেটা এপিআইগুলো (কুরআন ও হাদিস) সীমিত আকারে বিনামূল্যে কমার্শিয়াল প্রোজেক্টে ব্যবহার করা যেতে পারে। তবে, উচ্চ ট্রাফিকের জন্য আমাদের পেইড প্ল্যান প্রয়োজন হবে। জেনারেটিভ মডেল ব্যবহারের জন্য সর্বদা একটি পেইড প্ল্যান প্রয়োজন।",
  },
];

export function ResourcesMainContent() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        রিসোর্স ও টুলস
      </h1>
      <p className="text-oa-text-secondary mb-12">
        আপনার ডেভেলপমেন্ট প্রক্রিয়াকে আরও সহজ ও দ্রুত করতে আমাদের উদাহরণ, SDK, এবং অন্যান্য রিসোর্সগুলো ব্যবহার করুন। এই রিসোর্সগুলো আপনাকে ফ্রস্টফয় প্ল্যাটফর্মের পূর্ণ সম্ভাবনাকে কাজে লাগাতে সাহায্য করবে।
      </p>

      <section id="examples" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          ব্যবহারিক উদাহরণ (Use Cases)
        </h2>
        <div className="text-oa-text-secondary">
          <p>
            আমাদের এপিআই ব্যবহার করে কী ধরনের অ্যাপ্লিকেশন তৈরি করা সম্ভব, তার কিছু বাস্তব উদাহরণ নিচে দেওয়া হলো। এই উদাহরণগুলো আপনাকে দ্রুত ধারণা পেতে এবং আপনার নিজের প্রোজেক্টের জন্য অনুপ্রেরণা খুঁজে পেতে সাহায্য করবে।
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong className="text-white">দৈনিক ইসলামিক অ্যাপ:</strong> প্রতিদিন একটি নতুন হাদিস বা কুরআনের আয়াত দেখানোর জন্য আমাদের এপিআই ব্যবহার করুন।</li>
            <li><strong className="text-white">চ্যাটবট ও অ্যাসিস্ট্যান্ট:</strong> ফ্রস্টফয় চ্যাট মডেল ব্যবহার করে গ্রাহক পরিষেবা বা ব্যক্তিগত সহায়ক তৈরি করুন।</li>
            <li><strong className="text-white">ইসলামিক কুইজ অ্যাপ:</strong> কুরআন ও হাদিসের ডেটা ব্যবহার করে শিক্ষামূলক কুইজ বা গেম তৈরি করুন।</li>
             <li><strong className="text-white">কনটেন্ট তৈরি:</strong> আমাদের জেনারেটিভ মডেল ব্যবহার করে ব্লগ পোস্ট, সামাজিক মাধ্যমের জন্য কনটেন্ট, বা মার্কেটিং কপি তৈরি করুন।</li>
          </ul>
        </div>
      </section>

      <section id="sdks" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          এসডিকে ও লাইব্রেরি (SDKs & Libraries)
        </h2>
        <Alert>
          <Rocket className="h-4 w-4" />
          <AlertTitle>শীঘ্রই আসছে!</AlertTitle>
          <AlertDescription>
            আপনার পছন্দের প্রোগ্রামিং ল্যাঙ্গুয়েজে আমাদের প্ল্যাটফর্ম সহজে ইন্টিগ্রেট করার জন্য আমরা বিভিন্ন SDK (সফটওয়্যার ডেভেলপমেন্ট কিট) সরবরাহ করব। আপাতত, আপনি যেকোনো HTTP ক্লায়েন্ট ব্যবহার করে আমাদের REST এপিআই অ্যাক্সেস করতে পারেন।
             <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                `npm install @frostfoe/sdk` (JavaScript/TypeScript)
              </li>
              <li>
                `pip install frostfoe-sdk` (Python)
              </li>
            </ul>
          </AlertDescription>
        </Alert>
      </section>

      <section id="faq" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          সাধারণ প্রশ্নাবলী (FAQ)
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="support" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          সহায়তা ও কমিউনিটি
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
           <Link href="mailto:support@frostfoe.ai" className="card card-hover flex items-center gap-4 p-4">
              <Mail className="h-6 w-6 text-oa-text-secondary"/>
              <div>
                <h3 className="font-semibold text-white">ইমেল সাপোর্ট</h3>
                <p className="text-sm text-oa-text-secondary">support@frostfoe.ai</p>
              </div>
           </Link>
           <Link href="#" className="card card-hover flex items-center gap-4 p-4">
              <MessageSquare className="h-6 w-6 text-oa-text-secondary"/>
              <div>
                <h3 className="font-semibold text-white">কমিউনিটি ডিসকর্ড</h3>
                <p className="text-sm text-oa-text-secondary">আলোচনা ও সহায়তার জন্য যোগ দিন</p>
              </div>
           </Link>
           <Link href="#" className="card card-hover flex items-center gap-4 p-4">
              <Github className="h-6 w-6 text-oa-text-secondary"/>
              <div>
                <h3 className="font-semibold text-white">গিটহাব</h3>
                <p className="text-sm text-oa-text-secondary">ইস্যু রিপোর্ট করুন বা অবদান রাখুন</p>
              </div>
           </Link>
        </div>
      </section>
    </>
  );
}

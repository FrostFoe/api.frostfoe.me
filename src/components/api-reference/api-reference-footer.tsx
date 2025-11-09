import React from "react";
import Link from "next/link";
import {
  HelpCircle,
  Users,
  BookOpen,
  Server,
} from "lucide-react";

interface FooterItem {
  icon: React.ElementType;
  title: string;
  desc: string;
  href: string;
}

const FOOTER_ITEMS: FooterItem[] = [
  {
    icon: HelpCircle,
    title: "সহায়তা কেন্দ্র",
    desc: "অ্যাকাউন্ট ও বিলিং সংক্রান্ত প্রশ্নাবলি",
    href: "/resources#support",
  },
  {
    icon: Users,
    title: "ডেভেলপার কমিউনিটি",
    desc: "অন্য ফ্রস্টফয় ডেভেলপারদের সাথে আলোচনা করুন",
    href: "/resources#support",
  },
  {
    icon: BookOpen,
    title: "রিসোর্স হাব",
    desc: "উদাহরণ ও কোড স্নিপেট থেকে শিখুন",
    href: "/resources#examples",
  },
  {
    icon: Server,
    title: "স্ট্যাটাস",
    desc: "ফ্রস্টফয় সার্ভিসের বর্তমান অবস্থা দেখুন",
    href: "#",
  },
];

function FooterCard({ item }: { item: FooterItem }) {
  return (
    <Link href={item.href} className="card card-hover text-center p-6 group">
      <div className="flex flex-col items-center">
        <item.icon className="w-6 h-6 mb-2 text-oa-text-secondary group-hover:text-white transition-colors" />
        <div className="font-bold text-white mb-2">{item.title}</div>
        <div className="text-sm text-oa-text-secondary">{item.desc}</div>
      </div>
    </Link>
  );
}

export function ApiReferenceFooter() {
  return (
    <section className="mt-24 mb-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FOOTER_ITEMS.map((item) => (
          <FooterCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

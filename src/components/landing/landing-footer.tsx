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
}

const FOOTER_ITEMS: FooterItem[] = [
  {
    icon: HelpCircle,
    title: "সাধারণ সহায়তা",
    desc: "আপনার প্রশ্ন ও উত্তর খুঁজুন",
  },
  {
    icon: Users,
    title: "কমিউনিটি ফোরাম",
    desc: "কমিউনিটির সাথে যুক্ত হন",
  },
  {
    icon: BookOpen,
    title: "ব্লগ ও টিউটোরিয়াল",
    desc: "নতুন ফিচার সম্পর্কে জানুন",
  },
  {
    icon: Server,
    title: "সিস্টেম স্ট্যাটাস",
    desc: "সার্ভিসের অবস্থা মনিটর করুন",
  },
];

function FooterCard({ item }: { item: FooterItem }) {
  return (
    <Link href="#" className="card card-hover text-center p-6 group">
      <div className="flex flex-col items-center">
        <item.icon className="w-6 h-6 mb-2 text-oa-text-secondary group-hover:text-white transition-colors" />
        <div className="font-bold text-white mb-2">{item.title}</div>
        <div className="text-sm text-oa-text-secondary">{item.desc}</div>
      </div>
    </Link>
  );
}

export function LandingFooter() {
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

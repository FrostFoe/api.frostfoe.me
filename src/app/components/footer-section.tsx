import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterItem {
  icon: string;
  title: string;
  desc: string;
}

const FOOTER_ITEMS: FooterItem[] = [
  {
    icon: "/icons/help-center.svg",
    title: "সহায়তা কেন্দ্র",
    desc: "অ্যাকাউন্ট ও বিলিং সংক্রান্ত প্রশ্নাবলি",
  },
  {
    icon: "/icons/developer-forum.svg",
    title: "ডেভেলপার কমিউনিটি",
    desc: "অন্য ফ্রস্টফয় ডেভেলপারদের সাথে আলোচনা করো",
  },
  {
    icon: "/icons/cookbook-footer.svg",
    title: "রিসোর্স হাব",
    desc: "উদাহরণ ও কোড স্নিপেট থেকে শেখো",
  },
  {
    icon: "/icons/status.svg",
    title: "স্ট্যাটাস",
    desc: "ফ্রস্টফয় সার্ভিসের বর্তমান অবস্থা দেখো",
  },
];

function FooterCard({ item }: { item: FooterItem }) {
  return (
    <Link
      href="#"
      className="card card-hover text-center p-6 group"
    >
      <div className="flex flex-col items-center">
        <Image
          src={item.icon}
          width={24}
          height={24}
          alt={item.title}
          className="mb-2"
        />
        <div className="font-bold text-white mb-2">{item.title}</div>
        <div className="text-sm text-oa-text-secondary">{item.desc}</div>
      </div>
    </Link>
  );
}

export function FooterSection() {
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

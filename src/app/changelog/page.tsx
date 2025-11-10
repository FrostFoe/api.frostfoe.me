import { Breadcrumb } from "@/components/shared/breadcrumb";
import { EnhancedSidebar } from "@/components/shared/sidebar";
import { Header } from "@/components/shared/header";
import { AlertCircle, CheckCircle, Zap, Bug, Shield } from "lucide-react";

interface ChangelogEntry {
  version: string;
  date: string;
  changes: {
    type: "feature" | "improvement" | "bugfix" | "security" | "breaking";
    title: string;
    description: string;
  }[];
}

const changelog: ChangelogEntry[] = [
  {
    version: "2.5.0",
    date: "২০২৪-০১-১৫",
    changes: [
      {
        type: "feature",
        title: "নতুন ওয়েবহুক সিস্টেম",
        description: "উন্নত ওয়েবহুক ম্যানেজমেন্ট এবং রিটাই লজিক যুক্ত করা হয়েছে।",
      },
      {
        type: "improvement",
        title: "চ্যাট এপিআই অপটিমাইজেশন",
        description: "চ্যাট এপিআই এর প্রতিক্রিয়া সময় ৩৫% উন্নত করা হয়েছে।",
      },
      {
        type: "feature",
        title: "ব্যাচ অনুরোধ সমর্থন",
        description: "একসাথে একাধিক অনুরোধ পাঠানোর সুবিধা যোগ করা হয়েছে।",
      },
    ],
  },
  {
    version: "2.4.5",
    date: "২০২৪-০১-১০",
    changes: [
      {
        type: "bugfix",
        title: "কুরআন এপিআই ফিল্টারিং বাগ",
        description: "সুরা নির্বাচনে কিছু নির্দিষ্ট ক্ষেত্রে সমস্যা সমাধান করা হয়েছে।",
      },
      {
        type: "improvement",
        title: "ত্রুটি বার্তা উন্নতি",
        description: "আরও বিস্তারিত এবং সহায়ক ত্রুটি বার্তা প্রদান করা হচ্ছে।",
      },
      {
        type: "security",
        title: "নিরাপত্তা প্যাচ",
        description: "API কী ভ্যালিডেশন এ একটি গুরুত্বপূর্ণ নিরাপত্তা সমস্যা সমাধান করা হয়েছে।",
      },
    ],
  },
  {
    version: "2.4.0",
    date: "২০২৪-০১-০৫",
    changes: [
      {
        type: "feature",
        title: "হাদিস সার্চ ফিল্টার",
        description: "লেখক, ধরন এবং শ্রেণী অনুযায়ী হাদিস সার্চ ফিল্টার যুক্ত করা হয়েছে।",
      },
      {
        type: "improvement",
        title: "পারফরম্যান্স অপটিমাইজেশন",
        description: "ডাটাবেস কোয়েরি অপটিমাইজ করে সার্ভার লোড ২৫% কমানো হয়েছে।",
      },
    ],
  },
  {
    version: "2.3.0",
    date: "২০২৩-১২-২৮",
    changes: [
      {
        type: "feature",
        title: "রেট লিমিট হেডার",
        description: "প্রতিটি অনুরোধে রেমেনিং রেট লিমিট হেডার যুক্ত করা হয়েছে।",
      },
      {
        type: "breaking",
        title: "API ভার্সন আপগ্রেড",
        description: "API v1.0 থেকে v2.0 এ আপগ্রেড করা হয়েছে। পুরানো এন্ডপয়েন্ট ৩০ দিনের জন্য উপলব্ধ থাকবে।",
      },
    ],
  },
  {
    version: "2.2.5",
    date: "২০২৩-১২-২০",
    changes: [
      {
        type: "bugfix",
        title: "CORS সমস্যা সমাধান",
        description: "ক্রস-অরিজিন অনুরোধে কিছু সমস্যা সমাধান করা হয়েছে।",
      },
      {
        type: "improvement",
        title: "ডকুমেন্টেশন আপডেট",
        description: "সমস্ত এন্ডপয়েন্টের জন্য বাংলা ডকুমেন্টেশন সম্পূর্ণ করা হয়েছে।",
      },
    ],
  },
  {
    version: "2.2.0",
    date: "২০২৩-१२-१५",
    changes: [
      {
        type: "feature",
        title: "কাস্টম হেডার সাপোর্ট",
        description: "এপিআই অনুরোধে কাস্টম হেডার যুক্ত করার সুবিধা যোগ করা হয়েছে।",
      },
      {
        type: "feature",
        title: "ক্যাশিং মেকানিজম",
        description: "উন্নত ক্যাশিং সিস্টেম প্রয়োগ করা হয়েছে সর্বোচ্চ কর্মক্ষমতার জন্য।",
      },
    ],
  },
];

export default function ChangelogPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case "improvement":
        return <CheckCircle className="w-5 h-5 text-blue-400" />;
      case "bugfix":
        return <Bug className="w-5 h-5 text-red-400" />;
      case "security":
        return <Shield className="w-5 h-5 text-purple-400" />;
      case "breaking":
        return <AlertCircle className="w-5 h-5 text-orange-400" />;
      default:
        return null;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "feature":
        return "নতুন বৈশিষ্ট্য";
      case "improvement":
        return "উন্নতি";
      case "bugfix":
        return "বাগ ফিক্স";
      case "security":
        return "নিরাপত্তা";
      case "breaking":
        return "বিরতি পরিবর্তন";
      default:
        return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-yellow-500/10 text-yellow-400";
      case "improvement":
        return "bg-blue-500/10 text-blue-400";
      case "bugfix":
        return "bg-red-500/10 text-red-400";
      case "security":
        return "bg-purple-500/10 text-purple-400";
      case "breaking":
        return "bg-orange-500/10 text-orange-400";
      default:
        return "bg-gray-500/10 text-gray-400";
    }
  };

  return (
    <div className="flex min-h-screen">
      <EnhancedSidebar />
      <div className="flex-1 md:ml-64">
        <Header />
        <Breadcrumb
          items={[
            { label: "ডকুমেন্টেশন", href: "/" },
            { label: "পরিবর্তনসূচী", href: "/changelog" },
          ]}
        />
        <main className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <section className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              পরিবর্তনসূচী
            </h1>
            <p className="text-sm sm:text-lg text-oa-text-secondary">
              ফ্রস্টফয় এপিআই প্ল্যাটফর্মের সমস্ত আপডেট এবং নতুন বৈশিষ্ট্য এখানে দেখুন।
            </p>
          </section>

          {/* Changelog Entries */}
          <div className="space-y-6 sm:space-y-8">
            {changelog.map((entry) => (
              <div key={entry.version} className="relative">
                {/* Version Header */}
                <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-oa-border">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      v{entry.version}
                    </h2>
                    <span className="text-xs sm:text-sm text-oa-text-tertiary">
                      {entry.date}
                    </span>
                  </div>
                </div>

                {/* Changes List */}
                <div className="space-y-3 sm:space-y-4">
                  {entry.changes.map((change, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 bg-oa-bg-dark border border-oa-border/50 rounded-lg hover:border-oa-border transition-colors"
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        {/* Icon */}
                        <div className="mt-1 flex-shrink-0">{getIcon(change.type)}</div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <h3 className="text-sm sm:text-base font-semibold text-white">
                              {change.title}
                            </h3>
                            <span
                              className={`px-2 py-0.5 sm:py-1 rounded text-xs font-mono font-semibold ${getTypeColor(
                                change.type
                              )}`}
                            >
                              {getTypeLabel(change.type)}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-oa-text-secondary">
                            {change.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Migration Guide */}
          <section className="mt-16 pt-12 border-t border-oa-border">
            <h2 className="text-2xl font-bold mb-4 text-white">
              মাইগ্রেশন গাইড
            </h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-200 mb-3">
                v1.0 থেকে v2.0 এ আপগ্রেড করা হচ্ছে?
              </h3>
              <p className="text-oa-text-secondary mb-4">
                v2.0 এ কিছু ভাঙ্গা পরিবর্তন রয়েছে যা আপনার কোডকে প্রভাবিত করতে পারে।
                সম্পূর্ণ মাইগ্রেশন গাইড পড়ুন:
              </p>
              <a
                href="/guides#migration"
                className="inline-flex items-center gap-2 text-white hover:text-yellow-200 transition-colors"
              >
                মাইগ্রেশন গাইড পড়ুন →
              </a>
            </div>
          </section>

          {/* Timeline Info */}
          <section className="mt-12 p-6 bg-oa-bg-dark border border-oa-border rounded-lg">
            <p className="text-oa-text-secondary text-sm text-center">
              আমরা প্রতি মাসে নতুন বৈশিষ্ট্য এবং উন্নতি নিয়ে আসি।
              <br />
              আরও আপডেটের জন্য আমাদের <a href="https://community.frostfoe.me" className="text-white hover:underline">কমিউনিটি ফোরাম</a> ফলো করুন।
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

import { useState, useCallback } from "react";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: "endpoint" | "guide" | "faq" | "section";
  href: string;
  keywords: string[];
}

const searchData: SearchResult[] = [
  // Endpoints
  {
    id: "chat-create",
    title: "চ্যাট তৈরি করুন",
    description: "একটি নতুন চ্যাট সংলাপ তৈরি করুন",
    category: "endpoint",
    href: "/api-reference#chat-api",
    keywords: ["chat", "create", "message", "conversation"],
  },
  {
    id: "chat-history",
    title: "চ্যাট ইতিহাস পান",
    description: "একটি সংলাপের ইতিহাস পান",
    category: "endpoint",
    href: "/api-reference#chat-api",
    keywords: ["chat", "history", "conversation", "messages"],
  },
  {
    id: "hadith-get",
    title: "হাদিস পান",
    description: "হাদিস তালিকা পান অনুসন্ধান এবং ফিল্টার বিকল্প সহ",
    category: "endpoint",
    href: "/api-reference#hadith-api",
    keywords: ["hadith", "get", "list", "search", "filter"],
  },
  {
    id: "quran-surahs",
    title: "সুরা পান",
    description: "সমস্ত সুরার তালিকা পান",
    category: "endpoint",
    href: "/api-reference#quran-api",
    keywords: ["quran", "surah", "list", "verses"],
  },
  {
    id: "quran-specific",
    title: "নির্দিষ্ট সুরা পান",
    description: "একটি নির্দিষ্ট সুরার সমস্ত আয়াত পান",
    category: "endpoint",
    href: "/api-reference#quran-api",
    keywords: ["quran", "surah", "verses", "specific"],
  },

  // Guides
  {
    id: "guide-errors",
    title: "ত্রুটি ব্যবস্থাপনা",
    description: "HTTP স্ট্যাটাস কোড এবং ত্রুটি সমাধান",
    category: "guide",
    href: "/guides#errors",
    keywords: ["error", "handling", "status", "codes", "troubleshoot"],
  },
  {
    id: "guide-rate-limit",
    title: "হার সীমিতকরণ",
    description: "এপিআই ব্যবহারের হার সীমা এবং পরিকল্পনা",
    category: "guide",
    href: "/guides#rate-limiting",
    keywords: ["rate", "limit", "plan", "quota"],
  },
  {
    id: "guide-webhooks",
    title: "ওয়েবহুক",
    description: "ওয়েবহুক সেটআপ এবং ব্যবহার",
    category: "guide",
    href: "/guides#webhooks",
    keywords: ["webhook", "event", "callback"],
  },
  {
    id: "guide-best-practices",
    title: "সেরা অনুশীলন",
    description: "নিরাপত্তা, কর্মক্ষমতা এবং নির্ভরযোগ্যতা",
    category: "guide",
    href: "/guides#best-practices",
    keywords: ["best", "practices", "security", "performance"],
  },

  // FAQ
  {
    id: "faq-api-key",
    title: "এপিআই কী কিভাবে পাই?",
    description: "আপনার এপিআই কী পাওয়ার প্রক্রিয়া",
    category: "faq",
    href: "/resources#faq",
    keywords: ["api", "key", "get", "obtain"],
  },
  {
    id: "faq-rotate",
    title: "এপিআই কী পরিবর্তন করা",
    description: "আপনার এপিআই কী রোটেট করুন",
    category: "faq",
    href: "/resources#faq",
    keywords: ["rotate", "change", "api", "key"],
  },
  {
    id: "faq-rate-limit-value",
    title: "হার সীমা কত?",
    description: "বিভিন্ন পরিকল্পনার হার সীমা",
    category: "faq",
    href: "/resources#faq",
    keywords: ["rate", "limit", "quota"],
  },
  {
    id: "faq-webhook",
    title: "ওয়েবহুক ব্যবহার করতে পারি?",
    description: "ওয়েবহুক কার্যকারিতা সম্পর্কে",
    category: "faq",
    href: "/resources#faq",
    keywords: ["webhook", "use", "available"],
  },

  // Sections
  {
    id: "section-chat-api",
    title: "চ্যাট এপিআই",
    description: "কথোপকথন সক্ষমতা যোগ করুন",
    category: "section",
    href: "/api-reference#chat-api",
    keywords: ["chat", "api", "conversation"],
  },
  {
    id: "section-hadith-api",
    title: "হাদিস এপিআই",
    description: "হাদিস সংগ্রহ অ্যাক্সেস করুন",
    category: "section",
    href: "/api-reference#hadith-api",
    keywords: ["hadith", "api", "collection"],
  },
  {
    id: "section-quran-api",
    title: "কুরআন এপিআই",
    description: "কুরআনের আয়াত এবং সুরা অ্যাক্সেস করুন",
    category: "section",
    href: "/api-reference#quran-api",
    keywords: ["quran", "api", "verses"],
  },
  
  // Additional Pages
  {
    id: "page-status",
    title: "সিস্টেম স্ট্যাটাস",
    description: "রিয়েল-টাইম সিস্টেম স্ট্যাটাস এবং পারফরম্যান্স মেট্রিক্স",
    category: "section",
    href: "/status",
    keywords: ["status", "uptime", "performance", "metrics"],
  },
  {
    id: "page-changelog",
    title: "পরিবর্তনসূচী",
    description: "নতুন বৈশিষ্ট্য এবং আপডেটের সম্পূর্ণ তালিকা",
    category: "section",
    href: "/changelog",
    keywords: ["changelog", "updates", "features", "version"],
  },
];

export const useSearch = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const search = useCallback((query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);

    const searchQuery = query.toLowerCase();
    const filtered = searchData.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery);
      const descriptionMatch = item.description
        .toLowerCase()
        .includes(searchQuery);
      const keywordMatch = item.keywords.some((kw) =>
        kw.includes(searchQuery)
      );

      return titleMatch || descriptionMatch || keywordMatch;
    });

    setResults(filtered);
    setIsSearching(false);
  }, []);

  const clear = useCallback(() => {
    setResults([]);
  }, []);

  return { results, search, clear, isSearching };
};

import type { Metadata } from "next";
import { Hind_Siliguri, Poppins, Lateef } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

// 🎨 Font configurations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

const lateef = Lateef({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-lateef",
  display: "swap",
});

// 🧠 SEO Metadata
export const metadata: Metadata = {
  title: "FrostFoe API — বুদ্ধিমান এজেন্ট, ছবি, অডিও ও রিজনিং মডেল",
  description:
    "FrostFoe API দিয়ে তৈরি করো পরবর্তী প্রজন্মের স্মার্ট অ্যাপ — টেক্সট, ইমেজ, অডিও, এজেন্ট ও রিজনিং ক্ষমতা এক প্ল্যাটফর্মে।",
  keywords:
    "FrostFoe, FrostFoe API, AI API, Agent SDK, বাংলা এআই, Generative AI, Image API, Reasoning, Chat API, ফ্রস্টফয়, এজেন্ট এপিআই, কৃত্রিম বুদ্ধিমত্তা",
  authors: [{ name: "FrostFoe Technologies" }],
  openGraph: {
    title: "FrostFoe API — এজেন্ট, ছবি, অডিও ও বুদ্ধিমান রিজনিং",
    description:
      "একটি শক্তিশালী AI API প্ল্যাটফর্ম যা টেক্সট, ভিশন, ইমেজ জেনারেশন, এজেন্টিক সিস্টেম ও রিজনিং সমর্থন করে।",
    url: "https://frostfoe.ai",
    siteName: "FrostFoe Platform",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FrostFoe API — Next-gen AI Platform",
    description:
      "Use FrostFoe API to build AI-powered apps with chat, vision, image, audio, and agentic intelligence — all in one unified platform.",
  },
};

// 🧩 Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${poppins.variable} ${hindSiliguri.variable} ${lateef.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-bengali">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

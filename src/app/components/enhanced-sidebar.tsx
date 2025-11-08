"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavSection {
  id: string;
  title: string;
  icon?: string;
  items: NavItem[];
}

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

const navSections: NavSection[] = [
  {
    id: "getting-started",
    title: "🚀 Getting Started",
    items: [
      { label: "Introduction", href: "#introduction" },
      { label: "Installation", href: "#installation" },
      { label: "Authentication", href: "#authentication" },
      { label: "Your First Request", href: "#first-request" },
    ],
  },
  {
    id: "api-reference",
    title: "📖 API Reference",
    items: [
      { label: "Chat Completions", href: "#chat-api" },
      { label: "Hadith API", href: "#hadith-api" },
      { label: "Quran API", href: "#quran-api" },
      { label: "Models", href: "#models" },
    ],
  },
  {
    id: "guides",
    title: "🔧 Guides",
    items: [
      { label: "Error Handling", href: "#errors" },
      { label: "Rate Limiting", href: "#rate-limiting" },
      { label: "Webhooks", href: "#webhooks" },
      { label: "Best Practices", href: "#best-practices" },
    ],
  },
  {
    id: "resources",
    title: "💡 Resources",
    items: [
      { label: "Examples", href: "#examples" },
      { label: "SDKs", href: "#sdks" },
      { label: "FAQ", href: "#faq" },
      { label: "Support", href: "#support" },
    ],
  },
];

export function EnhancedSidebar() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["getting-started", "api-reference"])
  );

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <aside className="w-64 fixed top-0 left-0 h-full border-r border-oa-border bg-oa-dark p-4 flex-col hidden md:flex z-10 overflow-y-auto">
      {/* Logo */}
      <div className="h-14 flex items-center px-2 mb-6">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            width={24}
            height={24}
            alt="Frostfy Platform Logo"
          />
          <span className="font-semibold text-lg text-white truncate">
            ফ্রস্টফয় ডকস
          </span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-6 px-2">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg bg-oa-bg-dark px-3 py-2 text-left text-sm text-oa-text-tertiary border border-oa-border hover:border-oa-text-secondary transition-colors"
        >
          <span>🔍 অনুসন্ধান</span>
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

      {/* Navigation Sections */}
      <nav className="flex-1 space-y-1">
        {navSections.map((section) => (
          <div key={section.id} className="mb-4">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-oa-bg-dark transition-colors text-sm font-medium text-oa-text-secondary hover:text-white"
            >
              <span>{section.title}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  expandedSections.has(section.id) ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>

            {/* Section Items */}
            {expandedSections.has(section.id) && (
              <div className="mt-1 ml-2 space-y-0.5 border-l border-oa-border">
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center px-3 py-1.5 text-sm text-oa-text-tertiary hover:text-white hover:bg-oa-bg-dark rounded-md transition-colors"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-oa-border mr-2" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Links */}
      <div className="pt-4 border-t border-oa-border space-y-2">
        <Link
          href="#"
          className="flex items-center gap-2 px-3 py-2 text-sm text-oa-text-tertiary hover:text-white hover:bg-oa-bg-dark rounded-lg transition-colors"
        >
          📝 ব্লগ
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-3 py-2 text-sm text-oa-text-tertiary hover:text-white hover:bg-oa-bg-dark rounded-lg transition-colors"
        >
          ❓ সহায়তা
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-3 py-2 text-sm text-oa-text-tertiary hover:text-white hover:bg-oa-bg-dark rounded-lg transition-colors"
        >
          🐙 GitHub
        </Link>
      </div>
    </aside>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X, Command } from "lucide-react";
import Link from "next/link";
import { useSearch } from "@/hooks/use-search";
import { cn } from "@/lib/utils";

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { results, search, clear } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setQuery("");
        clear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, clear]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleSearch = (q: string) => {
    setQuery(q);
    search(q);
  };

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery("");
    clear();
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "endpoint":
        return "bg-blue-500/10 text-blue-400";
      case "guide":
        return "bg-purple-500/10 text-purple-400";
      case "faq":
        return "bg-green-500/10 text-green-400";
      case "section":
        return "bg-orange-500/10 text-orange-400";
      default:
        return "bg-gray-500/10 text-gray-400";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "endpoint":
        return "এন্ডপয়েন্ট";
      case "guide":
        return "গাইড";
      case "faq":
        return "সাধারণ প্রশ্ন";
      case "section":
        return "বিভাগ";
      default:
        return category;
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center justify-between w-48 px-3 py-2 rounded-lg bg-oa-bg-dark border border-oa-border text-oa-text-tertiary hover:border-oa-text-secondary transition-colors text-sm"
      >
        <span className="flex items-center gap-2">
          <Search className="w-4 h-4" />
          অনুসন্ধান...
        </span>
        <span className="flex items-center gap-1 text-xs">
          <Command className="w-3 h-3" />
          K
        </span>
      </button>

      {/* Mobile Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-oa-text-secondary hover:text-white"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed top-0 left-0 right-0 pt-20 px-4 md:pt-32">
            <div
              className="mx-auto max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="relative">
                <div className="flex items-center gap-2 px-4 py-3 bg-oa-dark border border-oa-border rounded-lg">
                  <Search className="w-5 h-5 text-oa-text-tertiary" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="অনুসন্ধান করুন..."
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white placeholder-oa-text-tertiary"
                    autoFocus
                  />
                  {query && (
                    <button
                      onClick={() => {
                        setQuery("");
                        clear();
                      }}
                      className="p-1 hover:bg-oa-bg-dark rounded"
                    >
                      <X className="w-4 h-4 text-oa-text-tertiary" />
                    </button>
                  )}
                </div>

                {/* Results Dropdown */}
                {(query || results.length > 0) && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-oa-dark border border-oa-border rounded-lg shadow-xl max-h-96 overflow-y-auto">
                    {results.length > 0 ? (
                      <div className="py-2">
                        {results.map((result) => (
                          <Link
                            key={result.id}
                            href={result.href}
                            onClick={() => handleSelect(result.href)}
                            className="px-4 py-3 hover:bg-oa-bg-light transition-colors border-b border-oa-border/50 last:border-0 cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="font-semibold text-white truncate">
                                    {result.title}
                                  </p>
                                  <span
                                    className={cn(
                                      "px-2 py-0.5 rounded text-xs font-mono whitespace-nowrap",
                                      getCategoryColor(result.category)
                                    )}
                                  >
                                    {getCategoryLabel(result.category)}
                                  </span>
                                </div>
                                <p className="text-sm text-oa-text-secondary truncate">
                                  {result.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : query ? (
                      <div className="px-4 py-8 text-center">
                        <p className="text-oa-text-secondary">
                          কোন ফলাফল পাওয়া যায়নি
                        </p>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

              {/* Keyboard Tips */}
              {!query && (
                <div className="mt-4 flex items-center justify-center gap-6 text-xs text-oa-text-tertiary">
                  <span>
                    <kbd className="px-2 py-1 rounded bg-oa-bg-dark border border-oa-border">
                      ↵
                    </kbd>{" "}
                    নির্বাচন করুন
                  </span>
                  <span>
                    <kbd className="px-2 py-1 rounded bg-oa-bg-dark border border-oa-border">
                      ESC
                    </kbd>{" "}
                    বন্ধ করুন
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

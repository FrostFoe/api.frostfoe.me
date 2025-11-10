"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { generateCodeSnippets } from "@/lib/code-snippets";
import { cn } from "@/lib/utils";

interface CodeSnippetDisplayProps {
  endpoint: string;
  method?: "GET" | "POST";
}

export function CodeSnippetDisplay({
  endpoint,
  method = "GET",
}: CodeSnippetDisplayProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [copied, setCopied] = useState(false);

  const snippets = generateCodeSnippets(endpoint, method);
  const currentSnippet = snippets.find((s) => s.language === selectedLanguage);

  const copyToClipboard = () => {
    if (currentSnippet) {
      navigator.clipboard.writeText(currentSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      {/* Language Selector */}
      <div className="flex gap-2 flex-wrap">
        {snippets.map((snippet) => (
          <button
            key={snippet.language}
            onClick={() => setSelectedLanguage(snippet.language)}
            className={cn(
              "px-4 py-2 rounded font-mono text-sm transition-colors",
              selectedLanguage === snippet.language
                ? "bg-blue-500 text-white"
                : "bg-oa-bg-dark border border-oa-border text-oa-text-secondary hover:text-white"
            )}
          >
            {snippet.label}
          </button>
        ))}
      </div>

      {/* Code Display */}
      {currentSnippet && (
        <div className="bg-oa-dark border border-oa-border rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-3 border-b border-oa-border/50 bg-oa-bg-dark">
            <span className="text-xs text-oa-text-secondary font-mono">
              {currentSnippet.label}
            </span>
            <button
              onClick={copyToClipboard}
              className="text-oa-text-secondary hover:text-white transition-colors flex items-center gap-1 text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  কপি করা হয়েছে
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  কপি করুন
                </>
              )}
            </button>
          </div>
          <pre className="p-4 overflow-x-auto font-mono text-sm text-oa-text-secondary leading-relaxed">
            {currentSnippet.code}
          </pre>
        </div>
      )}
    </div>
  );
}

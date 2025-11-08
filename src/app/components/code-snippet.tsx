"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CodeSnippetProps {
  code: string;
  language: string;
}

export function CodeSnippet({ code, language }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  return (
    <div className="bg-oa-bg-dark rounded-lg border border-oa-border overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 border-b border-oa-border bg-oa-bg-light">
        <span className="text-sm text-oa-text-secondary">{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="btn-ghost p-1.5 rounded transition-colors hover:bg-oa-border"
          aria-label={copied ? "Copied!" : "Copy code"}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <svg
              className="w-4 h-4 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <Image
              src="/icons/copy.svg"
              width={16}
              height={16}
              alt="Copy"
            />
          )}
        </button>
      </div>
      <div className="p-4 text-sm overflow-x-auto">
        <pre>
          <code className="font-mono text-oa-text-secondary text-xs leading-relaxed">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

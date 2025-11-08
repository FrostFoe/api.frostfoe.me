"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CodeSnippetProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

export function CodeSnippet({ code, language, showLineNumbers = true }: CodeSnippetProps) {
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

  // Simple syntax highlighting rules
  const highlightCode = (code: string, lang: string) => {
    // JavaScript/TypeScript keywords
    if (["javascript", "js", "typescript", "ts", "jsx", "tsx"].includes(lang.toLowerCase())) {
      return code
        .replace(/\b(import|from|const|let|var|function|async|await|return|if|else|for|while|do|switch|case|break|default|class|extends|new|this|super|static|public|private|protected|interface|type|enum)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/(['"`])(.*?)\1/g, '<span class="text-green-400">$1$2$1</span>')
        .replace(/\/\/(.*?)$/gm, '<span class="text-gray-500">\/\/$1</span>');
    }
    
    // Python keywords
    if (["python", "py"].includes(lang.toLowerCase())) {
      return code
        .replace(/\b(import|from|def|class|if|else|elif|for|while|return|async|await|with|as|try|except|finally|raise|assert|lambda|True|False|None|and|or|not|in|is)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/(['"`])(.*?)\1/g, '<span class="text-green-400">$1$2$1</span>')
        .replace(/#(.*?)$/gm, '<span class="text-gray-500">#$1</span>');
    }
    
    // Bash/cURL
    if (["bash", "sh", "curl"].includes(lang.toLowerCase())) {
      return code
        .replace(/\b(curl|echo|export|set|cd|ls|mkdir|cp|mv|rm|sudo|docker|git|npm|yarn|pnpm|node|python|java|go|rust)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/(['"`])(.*?)\1/g, '<span class="text-green-400">$1$2$1</span>')
        .replace(/#(.*?)$/gm, '<span class="text-gray-500">#$1</span>')
        .replace(/-([\w]+)/g, '<span class="text-yellow-400">-$1</span>');
    }

    return code;
  };

  const lines = code.split('\n');
  const highlightedCode = highlightCode(code, language);

  return (
    <div className="bg-oa-bg-dark rounded-lg border border-oa-border overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 border-b border-oa-border bg-oa-bg-light">
        <span className="text-sm text-oa-text-secondary capitalize">{language}</span>
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
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm">
          <code className="font-mono text-oa-text-secondary text-xs leading-relaxed flex">
            {showLineNumbers && (
              <span className="text-gray-600 select-none mr-4 flex flex-col">
                {lines.map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </span>
            )}
            <span
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
              className="flex-1"
            />
          </code>
        </pre>
      </div>
    </div>
  );
}

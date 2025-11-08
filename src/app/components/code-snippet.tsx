"use client";

import React, { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";

interface CodeSnippetProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

export function CodeSnippet({
  code,
  language,
  showLineNumbers = true,
}: CodeSnippetProps) {
  const [highlightedCode, setHighlightedCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const highlight = (code: string, lang: string) => {
      // Basic syntax highlighting logic
      if (
        ["javascript", "js", "typescript", "ts", "jsx", "tsx"].includes(
          lang.toLowerCase(),
        )
      ) {
        return code
          .replace(
            /\b(import|from|const|let|var|function|async|await|return|if|else|for|while|do|switch|case|break|default|class|extends|new|this|super|static|public|private|protected|interface|type|enum)\b/g,
            '<span class="text-blue-400">$1</span>',
          )
          .replace(
            /(['"`])(.*?)\1/g,
            '<span class="text-green-400">$1$2$1</span>',
          )
          .replace(
            /\/\/(.*?)$/gm,
            '<span class="text-gray-500">//$1</span>',
          );
      }

      if (["python", "py"].includes(lang.toLowerCase())) {
        return code
          .replace(
            /\b(import|from|def|class|if|else|elif|for|while|return|async|await|with|as|try|except|finally|raise|assert|lambda|True|False|None|and|or|not|in|is)\b/g,
            '<span class="text-blue-400">$1</span>',
          )
          .replace(
            /(['"`])(.*?)\1/g,
            '<span class="text-green-400">$1$2$1</span>',
          )
          .replace(/#(.*?)$/gm, '<span class="text-gray-500">#$1</span>');
      }

      if (["bash", "sh", "curl"].includes(lang.toLowerCase())) {
        return code
          .replace(
            /\b(curl|echo|export|set|cd|ls|mkdir|cp|mv|rm|sudo|docker|git|npm|yarn|pnpm|node|python|java|go|rust)\b/g,
            '<span class="text-blue-400">$1</span>',
          )
          .replace(
            /(['"`])(.*?)\1/g,
            '<span class="text-green-400">$1$2$1</span>',
          )
          .replace(/#(.*?)$/gm, '<span class="text-gray-500">#$1</span>')
          .replace(/-([\w-]+)/g, '<span class="text-yellow-400">-$1</span>');
      }

      return code;
    };
    setHighlightedCode(highlight(code, language));
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="bg-oa-bg-dark rounded-b-lg border border-t-0 border-oa-border overflow-hidden relative">
       <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-oa-bg-light hover:bg-opacity-80 text-oa-text-tertiary hover:text-white"
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm whitespace-pre-wrap break-words">
          <code className="font-mono text-oa-text-secondary text-xs leading-relaxed flex">
            {showLineNumbers && (
              <span className="text-gray-600 select-none mr-4 flex flex-col text-right">
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

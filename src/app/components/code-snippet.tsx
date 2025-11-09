"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";


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
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const customStyle = {
    backgroundColor: 'var(--oa-bg-dark)',
    margin: 0,
    padding: '1rem',
    fontSize: '0.8rem',
    lineHeight: '1.5',
    borderRadius: '0 0 0.5rem 0.5rem',
    whiteSpace: 'pre-wrap', 
    wordWrap: 'break-word' as const,
  };

  return (
    <div className="bg-oa-bg-dark rounded-b-lg border border-t-0 border-oa-border overflow-hidden relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-oa-bg-light hover:bg-opacity-80 text-oa-text-tertiary hover:text-white z-10"
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={customStyle}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        wrapLongLines={true}
        lineNumberStyle={{ color: '#6b7280', minWidth: '2.25em' }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

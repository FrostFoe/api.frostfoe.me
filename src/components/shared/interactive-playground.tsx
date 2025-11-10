"use client";

import React, { useState } from "react";
import { Play, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaygroundExample {
  title: string;
  description: string;
  endpoint: string;
  method: "GET" | "POST";
  requestBody?: Record<string, any>;
  expectedResponse: Record<string, any>;
}

interface InteractivePlaygroundProps {
  examples: PlaygroundExample[];
}

export function InteractivePlayground({ examples }: InteractivePlaygroundProps) {
  const [selectedExample, setSelectedExample] = useState(0);
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const current = examples[selectedExample];

  const handleRun = async () => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      // Simulate API call with expected response
      await new Promise((resolve) => setTimeout(resolve, 800));
      setResponse(JSON.stringify(current.expectedResponse, null, 2));
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-oa-bg-dark border border-oa-border rounded-lg overflow-hidden">
      {/* Example Selector */}
      <div className="border-b border-oa-border p-4">
        <p className="text-sm font-semibold text-white mb-3">
          উদাহরণ নির্বাচন করুন
        </p>
        <div className="flex gap-2 flex-wrap">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedExample(index);
                setResponse("");
                setError("");
              }}
              className={cn(
                "px-4 py-2 rounded text-sm transition-colors",
                selectedExample === index
                  ? "bg-blue-500 text-white"
                  : "bg-oa-dark border border-oa-border text-oa-text-secondary hover:text-white"
              )}
            >
              {example.title}
            </button>
          ))}
        </div>
      </div>

      {/* Example Details */}
      <div className="p-6 space-y-6">
        {/* Description */}
        <div>
          <p className="text-oa-text-secondary mb-3">{current.description}</p>
        </div>

        {/* Endpoint Info */}
        <div className="bg-oa-dark rounded border border-oa-border/50 p-4">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={cn(
                "px-2 py-1 rounded text-xs font-mono font-bold text-white",
                current.method === "GET"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-blue-500/10 text-blue-400"
              )}
            >
              {current.method}
            </span>
            <code className="text-sm text-oa-text-secondary font-mono">
              {current.endpoint}
            </code>
          </div>

          {/* Request Body */}
          {current.requestBody && (
            <div>
              <p className="text-xs text-oa-text-tertiary font-semibold mb-2">
                Request Body:
              </p>
              <pre className="text-xs text-oa-text-secondary bg-oa-dark rounded p-2 overflow-x-auto font-mono">
                {JSON.stringify(current.requestBody, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Run Button */}
        <button
          onClick={handleRun}
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white rounded font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <Play className="w-4 h-4" />
          {loading ? "চলছে..." : "এখনই চেষ্টা করুন"}
        </button>

        {/* Response */}
        {(response || error) && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-white">প্রতিক্রিয়া</label>
              {response && (
                <button
                  onClick={copyToClipboard}
                  className="text-xs text-oa-text-secondary hover:text-white transition-colors flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3" />
                      কপি করা হয়েছে
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      কপি করুন
                    </>
                  )}
                </button>
              )}
            </div>
            <div className="bg-oa-dark rounded p-4 max-h-64 overflow-y-auto border border-oa-border/50">
              <pre
                className={cn(
                  "text-xs font-mono leading-relaxed",
                  error ? "text-red-400" : "text-oa-text-secondary"
                )}
              >
                {error || response}
              </pre>
            </div>
          </div>
        )}

        {/* Info Box */}
        {!response && !error && (
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded text-sm text-blue-200">
            💡 এপিআই পরীক্ষা করতে "এখনই চেষ্টা করুন" বাটনে ক্লিক করুন। এটি একটি নকল প্রতিক্রিয়া দেখাবে।
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Copy, Check, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApiTesterProps {
  endpoint: string;
  method?: "GET" | "POST";
  description?: string;
  defaultParams?: Record<string, string>;
}

export function ApiTester({
  endpoint,
  method = "GET",
  description,
  defaultParams = {},
}: ApiTesterProps) {
  const [params, setParams] = useState<Record<string, string>>(defaultParams);
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const handleParamChange = (key: string, value: string) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const buildUrl = () => {
    let url = `https://api.frostfoe.me${endpoint}`;
    if (method === "GET" && Object.keys(params).length > 0) {
      const queryParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });
      url += `?${queryParams.toString()}`;
    }
    return url;
  };

  const handleTest = async () => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const url = buildUrl();
      const options: RequestInit = {
        method,
        headers: {
          "Authorization": "Bearer demo-key",
          "Content-Type": "application/json",
        },
      };

      if (method === "POST" && Object.keys(params).length > 0) {
        options.body = JSON.stringify(params);
      }

      const res = await fetch(url, options);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
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
    <div className="bg-oa-bg-dark border border-oa-border rounded-lg p-6 space-y-4">
      {description && (
        <p className="text-oa-text-secondary text-sm">{description}</p>
      )}

      {/* Endpoint Info */}
      <div className="p-3 bg-oa-dark rounded border border-oa-border/50">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "px-2 py-1 rounded text-xs font-mono font-bold text-white",
              method === "GET"
                ? "bg-green-500/10 text-green-400"
                : "bg-blue-500/10 text-blue-400"
            )}
          >
            {method}
          </span>
          <code className="text-sm text-oa-text-secondary font-mono flex-1">
            {endpoint}
          </code>
        </div>
      </div>

      {/* Parameters */}
      {Object.keys(defaultParams).length > 0 && (
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-white">
            পরামিতি
          </label>
          <div className="space-y-2">
            {Object.entries(defaultParams).map(([key]) => (
              <div key={key} className="flex gap-2">
                <label className="w-24 text-sm text-oa-text-secondary">
                  {key}
                </label>
                <input
                  type="text"
                  value={params[key] || ""}
                  onChange={(e) => handleParamChange(key, e.target.value)}
                  className="flex-1 px-3 py-2 bg-oa-dark border border-oa-border rounded text-sm text-white placeholder-oa-text-tertiary focus:outline-none focus:border-blue-500"
                  placeholder={`Enter ${key}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Test Button */}
      <button
        onClick={handleTest}
        disabled={loading}
        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white rounded font-semibold transition-colors flex items-center justify-center gap-2"
      >
        <Play className="w-4 h-4" />
        {loading ? "পরীক্ষা করা হচ্ছে..." : "এপিআই পরীক্ষা করুন"}
      </button>

      {/* Response */}
      {(response || error) && (
        <div className="space-y-2">
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
          <div className="bg-oa-dark border border-oa-border rounded p-3 max-h-96 overflow-y-auto">
            <pre className={cn(
              "text-xs font-mono",
              error ? "text-red-400" : "text-oa-text-secondary"
            )}>
              {error || response}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

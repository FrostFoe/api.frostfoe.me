import React from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD";

interface HttpBadgeProps {
  method: HttpMethod;
  endpoint?: string;
}

const methodColors: Record<HttpMethod, { bg: string; text: string }> = {
  GET: { bg: "bg-blue-500/20", text: "text-blue-400" },
  POST: { bg: "bg-green-500/20", text: "text-green-400" },
  PUT: { bg: "bg-yellow-500/20", text: "text-yellow-400" },
  DELETE: { bg: "bg-red-500/20", text: "text-red-400" },
  PATCH: { bg: "bg-purple-500/20", text: "text-purple-400" },
  HEAD: { bg: "bg-gray-500/20", text: "text-gray-400" },
};

export function HttpBadge({ method, endpoint }: HttpBadgeProps) {
  const colors = methodColors[method];

  return (
    <div className="flex items-center gap-3">
      <span
        className={`inline-flex items-center px-3 py-1 rounded-md font-mono font-semibold text-sm ${colors.bg} ${colors.text}`}
      >
        {method}
      </span>
      {endpoint && (
        <span className="text-sm text-oa-text-secondary font-mono">
          {endpoint}
        </span>
      )}
    </div>
  );
}

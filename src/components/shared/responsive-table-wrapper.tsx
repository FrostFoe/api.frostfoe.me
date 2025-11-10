"use client";

import React from "react";

interface ResponsiveTableProps {
  children: React.ReactNode;
}

export function ResponsiveTableWrapper({ children }: ResponsiveTableProps) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
      <div className="inline-block min-w-full">
        {children}
      </div>
    </div>
  );
}

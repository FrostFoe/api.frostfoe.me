"use client";

import { useEffect, useState } from "react";

interface TableOfContentsItem {
  id: string;
  label: string;
  level: number; // 2 or 3 for h2 or h3
}

export function TableOfContents() {
  const [items, setItems] = useState<TableOfContentsItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // This component is not rendered, so we can keep the logic minimal
    const headings = Array.from(
      document.querySelectorAll("main h2, main h3")
    ).map((heading) => ({
      id: heading.id,
      label: heading.textContent || "",
      level: parseInt(heading.tagName[1]),
    }));

    if (headings.length > 0) {
      setItems(headings);
    }
  }, []);

  if (items.length === 0) return null;

  return null; // Return null to hide the component
}

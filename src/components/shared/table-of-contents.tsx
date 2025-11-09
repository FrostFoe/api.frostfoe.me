"use client";

import { useEffect, useState } from "react";

interface TableOfContentsItem {
  id: string;
  label: string;
  level: number;
}

export function TableOfContents() {
  const [items, setItems] = useState<TableOfContentsItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
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

  return null;
}

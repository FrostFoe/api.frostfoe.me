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
    // Extract headings from the page
    const headings = Array.from(
      document.querySelectorAll("main h2, main h3")
    ).map((heading) => ({
      id: heading.id,
      label: heading.textContent || "",
      level: parseInt(heading.tagName[1]),
    }));

    setItems(headings);

    // Set up intersection observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  return (
    <aside className="hidden lg:fixed lg:right-0 lg:top-16 lg:bottom-0 lg:w-48 lg:overflow-y-auto lg:border-l lg:border-oa-border lg:bg-oa-dark lg:p-6">
      <nav className="space-y-2">
        <div className="text-xs font-semibold text-oa-text-secondary uppercase tracking-wider mb-4">
          এই পৃষ্ঠায়
        </div>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`block w-full text-left text-sm px-3 py-2 rounded transition-colors ${
              activeId === item.id
                ? "bg-oa-bg-dark text-white border-l-2 border-oa-text-secondary"
                : "text-oa-text-secondary hover:text-white hover:bg-oa-bg-dark"
            } ${item.level === 3 ? "ml-4" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

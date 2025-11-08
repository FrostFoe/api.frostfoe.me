import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6 px-4 md:px-8 py-2">
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && (
            <span className="text-oa-text-tertiary">/</span>
          )}
          {index === items.length - 1 ? (
            <span className="text-oa-text-secondary">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-oa-text-tertiary hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

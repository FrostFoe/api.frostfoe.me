import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-0 h-14 border-b border-oa-border bg-oa-dark/80 backdrop-blur-xs">
      <div className="flex h-full items-center justify-between px-4 md:px-8">
        <div className="md:hidden" />
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="#" className="main-nav-link-active">
            ডকুমেন্টেশন
          </Link>
          <Link href="#" className="main-nav-link">
            API রেফারেন্স
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#" className="btn btn-ghost text-sm hidden sm:block">
            লগ ইন
          </Link>
          <Link href="#" className="btn btn-primary text-sm">
            সাইন আপ
          </Link>
        </div>
      </div>
    </header>
  );
}

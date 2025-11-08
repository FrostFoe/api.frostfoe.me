import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 fixed top-0 left-0 h-full border-r border-oa-border bg-oa-dark p-4 flex-col hidden md:flex z-10">
      <div className="h-14 flex items-center px-2">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            width={24}
            height={24}
            alt="Frostfy Platform Logo"
          />
          <span className="font-semibold text-lg text-white">
            ফ্রস্টফয় এপিআই প্ল্যাটফর্ম
          </span>
        </Link>
      </div>

      <div className="mt-4 px-2">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg bg-oa-bg-dark px-3 py-2 text-left text-sm text-oa-text-tertiary border border-oa-border hover:border-oa-text-secondary"
        >
          <span>অনুসন্ধান</span>
          <span className="flex items-center gap-1 text-xs">
            <kbd className="px-1.5 py-0.5 rounded border border-oa-border bg-oa-bg-light">
              ⌘
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded border border-oa-border bg-oa-bg-light">
              K
            </kbd>
          </span>
        </button>
      </div>

      <nav className="mt-6 flex-1 space-y-2 px-2">
        <Link href="#" className="sidebar-link flex items-center gap-2">
          <Image
            src="/icons/cookbook.svg"
            width={20}
            height={20}
            alt="Cookbook"
          />
          <span>রিসোর্স গাইড</span>
        </Link>
        <Link href="#" className="sidebar-link flex items-center gap-2">
          <Image src="/icons/forum.svg" width={20} height={20} alt="Forum" />
          <span>কমিউনিটি</span>
        </Link>
      </nav>
    </aside>
  );
}

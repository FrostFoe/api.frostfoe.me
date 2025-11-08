"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EnhancedSidebar } from "./enhanced-sidebar";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 h-14 border-b border-oa-border bg-oa-dark/80 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">মেনু খুলুন</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64 bg-oa-dark border-r-oa-border">
                <EnhancedSidebar isSheet={true} />
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={cn(
                "main-nav-link",
                pathname === "/" && "main-nav-link-active"
              )}
            >
              ডকুমেন্টেশন
            </Link>
            <Link href="/introduction" className={cn(
                "main-nav-link",
                pathname.startsWith('/introduction') && "main-nav-link-active"
              )}>
              শুরু করুন
            </Link>
          </nav>
        </div>
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

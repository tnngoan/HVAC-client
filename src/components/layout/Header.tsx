"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PhoneCTA from "@/components/ui/PhoneCTA";
import MobileNav from "./MobileNav";
import { mainNav } from "@/data/navigation";
import { business } from "@/data/business";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900">
              {business.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {mainNav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-brand-600"
                  >
                    {item.label}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-brand-600"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side: Phone CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <PhoneCTA variant="header" className="hidden sm:inline-flex" />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}

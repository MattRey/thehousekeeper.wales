"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { clsx } from "clsx";
import { Social } from "./social";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-foreground bg-background sticky top-0 z-50">
      <div className="container pt-6 pb-4 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-serif text-lg font-light text-primary transition">
          <Link href="/our-services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/about-us" className="hover:text-gray-400">
            About us
          </Link>
          <Link href="/property-management" className="hover:text-gray-400">
            Property management
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-secondary rounded-sm"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="container hidden lg:block">
        <Social />
      </div>
      <div className="lg:hidden flex flex-col justify-between">
        <nav
          className={clsx(
            "absolute top-0 left-0 w-full h-screen flex flex-col items-end gap-6 font-serif text-lg font-light text-primary bg-background mt-23 md:hidden border-t border-border px-6 py-12 space-y-3 transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Link
            href="/our-services"
            className="block hover:text-gray-400 transition"
          >
            Services
          </Link>
          <Link
            href="/about-us"
            className="block hover:text-gray-400 transition"
          >
            About us
          </Link>
          <Link
            href="/property-management"
            className="block hover:text-gray-400 transition"
          >
            Property management
          </Link>
          <Link
            href="/contact"
            className="block hover:text-gray-400 transition"
          >
            Contact us
          </Link>
          <Social />
        </nav>
      </div>
    </header>
  );
}

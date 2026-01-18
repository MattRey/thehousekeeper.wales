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
          <span className="relative w-5 h-5 inline-block">
            <svg
              className="absolute top-0 left-0 w-5 h-5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <line
                x1={clsx(isOpen ? "-4" : "4")}
                y1="7"
                x2="20"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className={clsx(
                  "origin-center transition-transform duration-300",
                  isOpen && "rotate-45 translate-y-[7px]"
                )}
              />
              <line
                x1={clsx(isOpen ? "-4" : "8")}
                y1="17"
                x2="20"
                y2="17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className={clsx(
                  "origin-center transition-transform duration-300",
                  isOpen && "-rotate-45 -translate-y-[7px] w-full"
                )}
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="container hidden lg:block">
        <Social />
      </div>
      <div className="lg:hidden flex flex-col justify-between">
        <nav
          className={clsx(
            "absolute top-0 left-0 w-full h-screen flex flex-col items-end gap-6 font-serif text-lg font-light text-primary bg-background mt-22 md:hidden border-t border-border px-6 py-12 space-y-3 transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Link
            href="/our-services"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about-us"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
          <Social />
        </nav>
      </div>
    </header>
  );
}

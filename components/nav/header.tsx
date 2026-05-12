"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 py-6 sm:px-12 sm:py-8 lg:px-20">
        <div
          className="mx-auto flex max-w-[1440px] items-center justify-between text-bone"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Meyer Motorsport — Startseite"
          >
            <span className="flex h-7 w-7 items-center justify-center border border-bone/40">
              <span className="serif text-sm leading-none">M</span>
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.25em] sm:inline">
              Meyer Motorsport
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-bone/70">
              DE
            </span>
            <button
              type="button"
              aria-label="Suche"
              className="text-bone/80 transition-colors hover:text-bone"
            >
              <Search size={18} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="text-bone/80 transition-colors hover:text-bone"
            >
              {open ? (
                <X size={20} strokeWidth={1.4} />
              ) : (
                <Menu size={20} strokeWidth={1.4} />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all duration-300 sm:px-8 sm:py-5 lg:px-16 bg-transparent"
      >
        <div
          className="mx-auto flex max-w-360 items-center justify-between text-bone"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Meyer Motorsport — Startseite"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/brand/logo.jpg" 
              alt="Meyer Motorsport Logo" 
              className="h-10 w-auto object-contain mix-blend-screen"
            />
          </Link>

          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="text-bone/80 transition-colors hover:text-gold"
          >
            {open ? (
              <X size={20} strokeWidth={1.4} />
            ) : (
              <Menu size={20} strokeWidth={1.4} />
            )}
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

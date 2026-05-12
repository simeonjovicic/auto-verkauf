"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overHomeHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <header
        className={
          "fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all duration-300 sm:px-8 sm:py-5 lg:px-16 " +
          (overHomeHero
            ? "bg-transparent"
            : "border-b border-chrome bg-panel/88 shadow-[0_10px_30px_rgba(17,24,32,0.08)] backdrop-blur-xl")
        }
      >
        <div
          className={
            "mx-auto flex max-w-[1440px] items-center justify-between " +
            (overHomeHero ? "text-bone" : "text-graphite")
          }
          style={overHomeHero ? { textShadow: "0 1px 8px rgba(0,0,0,0.45)" } : undefined}
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Meyer Motorsport — Startseite"
          >
            <span
              className={
                "flex h-7 w-7 items-center justify-center border " +
                (overHomeHero ? "border-bone/40" : "border-graphite/25 bg-showroom")
              }
            >
              <span className="serif text-sm leading-none">M</span>
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.25em] sm:inline">
              Meyer Motorsport
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <span
              className={
                "text-[11px] uppercase tracking-[0.25em] " +
                (overHomeHero ? "text-bone/70" : "text-steel")
              }
            >
              DE
            </span>
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className={
                "transition-colors " +
                (overHomeHero ? "text-bone/80 hover:text-bone" : "text-graphite/75 hover:text-signal")
              }
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

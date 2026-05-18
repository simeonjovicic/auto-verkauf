"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { SITE } from "@/lib/site";
import { useTheme } from "@/components/theme/theme-context";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, hydrated } = useTheme();

  const isHome = pathname === "/";
  const isFischer = !hydrated || theme === "fischer";
  const hideAtTop = isHome && isFischer;
  const showHeader = !hideAtTop || scrolled || open;

  useEffect(() => {
    if (!hideAtTop) {
      setScrolled(true);
      return;
    }

    const updateScrolled = () => setScrolled(window.scrollY > 16);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, [hideAtTop]);

  const headerBg = isFischer
    ? "border-b border-fischer-line bg-paper/85 backdrop-blur"
    : "bg-transparent";

  const textColor = isFischer ? "text-anthracite" : "text-bone";
  const textShadow = isFischer ? undefined : "0 1px 8px rgba(0,0,0,0.45)";
  const linkHover = isFischer ? "hover:text-hyundai" : "hover:text-gold";
  const logoText = isFischer ? "text-hyundai" : "text-bone";
  const logoMark = isFischer
    ? "h-9 w-9 object-contain"
    : "h-9 w-9 object-contain drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all duration-300 sm:px-8 sm:py-5 lg:px-16 ${headerBg} ${showHeader ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}
      >
        <div
          className={`mx-auto flex max-w-360 items-center justify-between ${textColor}`}
          style={textShadow ? { textShadow } : undefined}
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Fischerauto — Startseite"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fischerauto/fa_herz.png"
              alt=""
              className={logoMark}
              aria-hidden
            />
            <span
              className={`text-lg font-semibold tracking-[0.12em] sm:text-xl ${logoText}`}
            >
              Fischerauto
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            {isHome && (
              <ThemeToggle variant={isFischer ? "light" : "dark"} />
            )}
            <a
              href={`tel:${SITE.phone}`}
              className={`hidden text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors md:inline ${linkHover}`}
            >
              {SITE.phoneDisplay}
            </a>
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className={`transition-colors ${isFischer ? "text-anthracite/80 hover:text-hyundai" : "text-bone/80 hover:text-gold"}`}
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

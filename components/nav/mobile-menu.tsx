"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";

type Props = { open: boolean; onClose: () => void };

export function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label="Hauptnavigation"
      className={
        "fixed inset-0 z-40 flex flex-col items-center justify-center bg-ink/96 transition-[opacity,visibility] duration-300 " +
        (open ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0")
      }
    >
      <nav>
        <ul className="space-y-5 text-center sm:space-y-7">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.href}
              className={
                "transition duration-500 ease-out " +
                (open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")
              }
              style={{ transitionDelay: open ? `${80 + index * 45}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="serif inline-block text-4xl text-bone transition-colors hover:text-gold sm:text-6xl lg:text-7xl"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

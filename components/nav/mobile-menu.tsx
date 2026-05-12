"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { NAV_LINKS } from "@/lib/site";

type Props = { open: boolean; onClose: () => void };

export function MobileMenu({ open, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    if (open) {
      el.style.display = "flex";
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4, ease: "power3.out" },
      );
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.06,
            ease: "power3.out",
            delay: 0.08,
          },
        );
      }
    } else {
      gsap.to(el, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          el.style.display = "none";
        },
      });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, onClose]);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Hauptnavigation"
      style={{ display: "none", opacity: 0 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-ink/95 backdrop-blur-xl"
    >
      <nav>
        <ul ref={listRef} className="space-y-5 text-center sm:space-y-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
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

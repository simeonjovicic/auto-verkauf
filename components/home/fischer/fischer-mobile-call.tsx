"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FischerMobileCall() {
  return (
    <a
      href={`tel:${SITE.phone}`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-hyundai px-5 py-3 text-sm font-semibold text-paper shadow-[0_18px_40px_rgba(0,44,95,0.35)] transition-colors hover:bg-hyundai-deep md:hidden"
      aria-label={`Anrufen ${SITE.phoneDisplay}`}
    >
      <Phone size={16} strokeWidth={2} aria-hidden />
      Anrufen
    </a>
  );
}

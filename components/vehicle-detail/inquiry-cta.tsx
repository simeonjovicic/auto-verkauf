import Link from "next/link";
import { SITE } from "@/lib/site";
import type { Vehicle } from "@/lib/vehicles";

export function InquiryCta({ vehicle }: { vehicle: Vehicle }) {
  const subject = `Anfrage: ${vehicle.name} ${vehicle.subtitle}`;
  const body = `Sehr geehrter Herr Meyer,\n\nich interessiere mich für den ${vehicle.name} ${vehicle.subtitle} (${vehicle.num}).\n\nBitte senden Sie mir weitere Informationen und einen Besichtigungstermin.\n\nMit freundlichen Grüssen,\n`;
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="border-y border-line py-10">
      <p className="eyebrow text-mute">Interesse</p>
      <p className="serif mt-4 text-3xl leading-tight text-bone">
        Besichtigung in Wien — nach Vereinbarung.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/kontakt/?fahrzeug=${vehicle.slug}`}
          className="inline-flex items-center justify-center bg-bone px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold hover:text-ink"
        >
          Anfrage senden →
        </Link>
        <a
          href={mailto}
          className="inline-flex items-center justify-center border border-line px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-bone transition-colors hover:border-bone"
        >
          E-Mail direkt
        </a>
        <a
          href={`tel:${SITE.mobile.replace(/\s/g, "")}`}
          className="inline-flex items-center justify-center border border-line px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-bone transition-colors hover:border-bone"
        >
          {SITE.mobileDisplay}
        </a>
      </div>
    </div>
  );
}

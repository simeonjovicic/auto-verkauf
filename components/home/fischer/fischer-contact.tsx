import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export function FischerContact() {
  return (
    <section
      id="kontakt"
      className="bg-surface-soft text-anthracite"
      aria-labelledby="fischer-kontakt-title"
    >
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-12 px-6 py-20 sm:px-12 sm:py-24 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:py-28">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hyundai">
            Kontakt
          </p>
          <h2
            id="fischer-kontakt-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Vorbeikommen oder anrufen.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-fischer-mute lg:text-[17px]">
            Wir sind in der Wagramer Straße 36A in 1220 Wien. Persönliche
            Beratung ohne Termin — oder Sie rufen kurz an.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center bg-hyundai px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-hyundai-deep"
            >
              <Phone size={16} strokeWidth={2} className="mr-2" aria-hidden />
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border border-anthracite/15 px-7 py-3.5 text-sm font-semibold tracking-wide text-anthracite transition-colors hover:border-hyundai hover:text-hyundai"
            >
              Nachricht senden
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          <li className="flex gap-4 bg-paper p-6 shadow-[0_18px_50px_rgba(0,44,95,0.06)]">
            <MapPin size={20} strokeWidth={1.6} className="mt-1 shrink-0 text-hyundai" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-anthracite/60">
                Adresse
              </p>
              <p className="mt-2 text-sm text-anthracite">
                {SITE.address.street}
                <br />
                {SITE.address.postal} · {SITE.address.district}
              </p>
            </div>
          </li>
          <li className="flex gap-4 bg-paper p-6 shadow-[0_18px_50px_rgba(0,44,95,0.06)]">
            <Phone size={20} strokeWidth={1.6} className="mt-1 shrink-0 text-hyundai" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-anthracite/60">
                Telefon
              </p>
              <p className="mt-2 text-sm text-anthracite">{SITE.phoneDisplay}</p>
            </div>
          </li>
          <li className="flex gap-4 bg-paper p-6 shadow-[0_18px_50px_rgba(0,44,95,0.06)]">
            <Mail size={20} strokeWidth={1.6} className="mt-1 shrink-0 text-hyundai" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-anthracite/60">
                E-Mail
              </p>
              <p className="mt-2 text-sm text-anthracite">{SITE.email}</p>
            </div>
          </li>
          <li className="flex gap-4 bg-paper p-6 shadow-[0_18px_50px_rgba(0,44,95,0.06)]">
            <Clock size={20} strokeWidth={1.6} className="mt-1 shrink-0 text-hyundai" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-anthracite/60">
                Verkauf
              </p>
              <p className="mt-2 text-sm text-anthracite">
                Mo–Fr 09:00–18:00
                <br />
                Sa 09:00–12:00
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

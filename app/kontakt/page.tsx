import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Fischerauto — Wagramer Straße 36A, 1220 Wien. Kontakt für Verkauf, Service, Reparatur, Teile und Gebrauchtwagen.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen Sie mit Fischerauto."
        lede="Verkauf, Serviceannahme, Werkstätte und Teilelager sind direkt am Standort in Wien-Donaustadt erreichbar."
      />

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mute">Anfrage</p>
            <h2 className="serif mt-3 text-3xl text-bone sm:text-4xl">
              Schreiben Sie uns.
            </h2>
            <div className="mt-10">
              <Suspense
                fallback={
                  <p className="text-sm text-mute">Formular wird geladen…</p>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pl-8">
            <dl className="space-y-8">
              <div>
                <dt className="eyebrow text-mute">Adresse</dt>
                <dd className="serif mt-3 text-xl text-bone">
                  {SITE.address.street}
                  <br />
                  {SITE.address.postal} {SITE.address.city}, {SITE.address.country}
                </dd>
                <p className="mt-2 text-xs text-mute">
                  Kundenparkplatz vor Ort · {SITE.address.district}
                </p>
              </div>
              <div>
                <dt className="eyebrow text-mute">Telefon</dt>
                <dd className="mt-3 space-y-1 text-sm text-bone">
                  <p>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="hover:text-gold"
                    >
                      {SITE.phoneDisplay}
                    </a>
                    <span className="ml-2 text-mute">· Zentrale</span>
                  </p>
                  <p className="text-mute">Fax · {SITE.faxDisplay}</p>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">E-Mail</dt>
                <dd className="mt-3 text-sm text-bone">
                  <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">Öffnungszeiten</dt>
                <dd className="mt-4 space-y-5 text-sm text-bone">
                  {SITE.openingHours.map((block) => (
                    <div key={block.label}>
                      <p className="font-medium">{block.label}</p>
                      <ul className="mt-1 space-y-1 text-mute">
                        {block.lines.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-ink px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-mute">Anfahrt</p>
          <h2 className="serif mt-3 text-3xl text-bone sm:text-4xl">
            Wien-Donaustadt.
          </h2>
          <div className="mt-10 aspect-[16/9] overflow-hidden border border-line">
            <iframe
              title="Standort Fischerauto auf Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.googleMapsQuery)}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

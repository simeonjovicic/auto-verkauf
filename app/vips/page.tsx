import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Footer } from "@/components/footer/footer";
import Link from "next/link";
import { vehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "VIPs",
  description:
    "Diskreter Service für eine ausgewählte Klientel. Meyer Motorsport betreut Sammler, Persönlichkeiten und Unternehmen mit dem gleichen Anspruch.",
};

const showcase = vehicles.find((v) => v.slug === "ferrari-488-pista") ?? vehicles[0];

export default function VipsPage() {
  return (
    <>
      <PageHero
        eyebrow="03 · Service"
        title="Diskret, persönlich, verbindlich."
        lede="Seit vier Jahrzehnten betreuen wir Sammler, Persönlichkeiten und Unternehmen mit dem gleichen Anspruch — Vertraulichkeit und kompromisslose Sorgfalt vom ersten Gespräch an."
      />

      <section className="relative bg-ink">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <picture>
            <source srcSet={showcase.srcAvif} type="image/avif" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={showcase.src}
              alt={showcase.alt}
              width={showcase.width}
              height={showcase.height}
              draggable={false}
              className="h-full w-full object-cover select-none"
              style={{
                backgroundImage: `url(${showcase.blurDataURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </picture>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60"
          />
        </div>
      </section>

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-mute">Was Sie erwartet</p>
            <h2 className="serif mt-3 text-balance text-4xl text-bone sm:text-5xl">
              Ein einziger Ansprechpartner. Für alles.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                t: "Suche & Vermittlung",
                d: "Auf Zuruf finden wir Fahrzeuge, die nicht öffentlich angeboten werden — europaweit, mit überprüfter Historie.",
              },
              {
                t: "Übernahme & Übergabe",
                d: "Inspektion, Transport, Anmeldung. Sie sehen das Fahrzeug, wenn es bereit ist.",
              },
              {
                t: "Garage & Pflege",
                d: "Klimatisierte Unterstellung, regelmässige Bewegung, Werterhalt — auf Wunsch ganzjährig.",
              },
              {
                t: "Verkauf in Ihrem Namen",
                d: "Diskrete Vermittlung Ihrer Fahrzeuge. Keine öffentlichen Listings, keine Spekulanten.",
              },
            ].map((l) => (
              <div key={l.t}>
                <h3 className="serif text-2xl text-bone">{l.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mute">Erstkontakt</p>
            <h2 className="serif mt-3 text-balance text-4xl text-bone sm:text-5xl">
              Sprechen Sie direkt mit dem Inhaber.
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-mute sm:text-lg">
              Anfragen werden persönlich und vertraulich beantwortet — meist
              innerhalb desselben Tages.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end lg:justify-end">
            <Link
              href="/kontakt/"
              className="inline-flex items-center justify-center bg-bone px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold"
            >
              Anfrage senden →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

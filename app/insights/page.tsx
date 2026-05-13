import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { posts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Marktnotizen, Neuzugänge und Werkstattbesuche aus Wien — Insights aus dem Alltag eines spezialisierten Sportwagenhauses.",
};

const dateFormatter = new Intl.DateTimeFormat("de-AT", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}

export default function InsightsPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notizen aus dem Bestand."
        lede="Marktnotizen, Neuzugänge und Werkstattbesuche aus Wien — kurze Texte zu langfristigen Themen."
      />
      <section className="bg-ink px-6 py-20 text-bone sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-360">
          {sorted.length === 0 ? (
            <p className="text-center text-mute">
              Demnächst erscheinen hier Beiträge. Folgen Sie uns oder fragen Sie
              direkt an.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {sorted.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group flex flex-col overflow-hidden border border-line bg-ink transition-colors hover:border-bone/30"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-stage">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] select-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-5 p-7 sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                      {p.eyebrow}
                    </p>
                    <h2 className="serif text-2xl leading-[1.1] text-bone sm:text-[26px]">
                      {p.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-mute">
                      {p.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-line pt-4 text-[11px] uppercase tracking-[0.22em] text-mute">
                      <time dateTime={p.date}>{formatDate(p.date)}</time>
                      <span
                        aria-hidden
                        className="text-bone/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
                      >
                        Lesen →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

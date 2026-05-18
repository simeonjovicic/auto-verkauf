import { Reveal } from "@/components/ui/reveal";

export function FischerInhaberQuote() {
  return (
    <section
      className="bg-paper text-anthracite"
      aria-label="Zitat vom Inhaber"
    >
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <Reveal direction="up" distance={16}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.18em] text-anthracite/50">
              03
            </span>
            <div className="h-px w-12 bg-anthracite/25" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-anthracite/55">
              Vom Inhaber
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={120}>
          <blockquote className="mt-8">
            <p className="font-serif text-xl italic leading-[1.3] tracking-tight text-anthracite sm:text-2xl lg:text-[28px]">
              „Mein Vater hat den Betrieb 1974 gegründet. Heute führen wir
              ihn zu fünft – drei Generationen unter einem Dach. Manche
              Kunden begleiten uns seit den 70ern. Das verpflichtet.“
            </p>
          </blockquote>
        </Reveal>

        <Reveal direction="up" delay={260}>
          <div className="mt-8 flex items-center gap-5">
            <svg
              viewBox="0 0 80 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-20 shrink-0 text-anthracite/55"
              aria-hidden
            >
              <path
                d="M2 20 C8 8, 14 26, 20 14 C26 2, 32 22, 38 14 C44 6, 50 24, 56 14 C62 4, 68 22, 76 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-anthracite">
                Franz Fischer
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-anthracite/55">
                Inhaber · Gründer 1974
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

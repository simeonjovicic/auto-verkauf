const FACTS = [
  {
    value: "seit 1974",
    label: "Wiener Familienbetrieb in Donaustadt",
  },
  {
    value: "3 Generationen",
    label: "Familie Fischer im Unternehmen",
  },
  {
    value: "Verkauf + Service",
    label: "Neuwagen, Werkstatt, Teile und Beratung",
  },
  {
    value: "alle Marken",
    label: "Service, Reparatur und Pickerl im Haus",
  },
] as const;

export function FischerTrust() {
  return (
    <section className="border-y border-fischer-line bg-paper text-anthracite">
      <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-20">
        <dl className="grid grid-cols-1 divide-y divide-fischer-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.value} className="py-6 sm:px-6 sm:first:pl-0 lg:py-7">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper">
                {fact.value}
              </dt>
              <dd className="mt-2 max-w-56 text-sm leading-relaxed text-fischer-mute">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

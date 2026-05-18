// variants.jsx — 4 distinct wireframe directions for Autohaus Fischer
// Each variant is a vertical page wireframe. The container is .wf — see
// wireframe-styles.css for primitives (.ph, .lines, .anno, .nav, .car, etc).

const { useState } = React;

// =============================================================
// Shared placeholders / data
// =============================================================
const TEAM = [
  ['Franz Fischer', 'Inhaber'],
  ['Monika Fischer', 'Inhaberin'],
  ['Marko Fischer', 'Geschäftsleitung'],
  ['Irina Fischer', 'Inhaberin'],
  ['Daniel Fischer', 'Stv. Geschäftsführer'],
  ['David Balogh', 'Verkaufsleitung'],
  ['Marion Schulz', 'Service & Annahme'],
  ['Bojan Benko', 'Teile & Garantie'],
];

const CARS = [
  ['Hyundai Kona Elektro', '2024 · 8.500 km · Weiß', '€ 28.900'],
  ['Hyundai Tucson Hybrid', '2023 · 21.400 km · Schwarz', '€ 32.500'],
  ['Mitsubishi Eclipse Cross', '2024 · 6.100 km · Silber', '€ 26.800'],
  ['Hyundai i30 Kombi', '2022 · 38.900 km · Blau', '€ 18.400'],
  ['Hyundai Ioniq 5', '2024 · 3.200 km · Anthrazit', '€ 41.200'],
  ['Mitsubishi Space Star', '2023 · 12.700 km · Rot', '€ 14.900'],
];

const SERVICES = [
  ['Neuwagen', 'Hyundai & Mitsubishi'],
  ['Eintausch', 'mit Garantie & Überprüfung'],
  ['Werkstatt', 'Service & Havariedienst'],
  ['Finanzierung', 'Versicherung & Leasing'],
  ['Ersatzwagen', 'während Service'],
  ['Reifen', 'Wechsel & Einlagerung'],
];

// Small inline SVG arrow for annotations
function ArrowAnno({ d, style }) {
  return (
    <svg width="60" height="40" viewBox="0 0 60 40" style={style}>
      <path d={d} fill="none" stroke="var(--hand)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// =============================================================
// VARIANT A — "Der Brief"
// Editorial, hyper-personal. Hero is a handwritten letter from the owner.
// Vehicles + team feel like continuations of the same intimate conversation.
// =============================================================
function VariantA() {
  return (
    <div className="wf">
      {/* Nav */}
      <div className="nav">
        <div className="brand">Autohaus Fischer</div>
        <ul>
          <li className="ulink">Bestand</li>
          <li className="ulink">Familie</li>
          <li className="ulink">Werkstatt</li>
          <li className="ulink">Kontakt</li>
        </ul>
        <div className="cta">01 263 42 92</div>
      </div>

      {/* HERO — letter format */}
      <div className="section relative" style={{ paddingTop: 64, paddingBottom: 56 }}>
        <div className="container">
          <div className="eyebrow">Ein Brief an Sie · Wien, Wagramer Straße 36a</div>
          <h1 className="display mt-16" style={{ fontSize: 84, fontStyle: 'italic' }}>
            Liebe Kundin,<br/>lieber Kunde,
          </h1>

          <div className="grid mt-32" style={{ gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start' }}>
            <div className="col gap-16" style={{ fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.55, color: 'var(--ink)' }}>
              <p style={{ margin: 0 }}>
                seit <span className="hl">1974</span> verkaufen wir Autos in der Wagramer Straße. Mein Vater hat den Betrieb gegründet, heute führen wir ihn zu fünft — drei Generationen unter einem Dach. Manche unserer Kunden begleiten uns seit den 70ern.
              </p>
              <p style={{ margin: 0 }}>
                Wir verkaufen Hyundai und Mitsubishi. Wir machen das Service. Wir nehmen Ihren alten Wagen in Zahlung. Und wenn etwas ist, dann reden Sie mit einem von uns — nicht mit einem Call­center.
              </p>
              <div className="row gap-24 center mt-16">
                <div className="anno" style={{ fontSize: 28, transform: 'rotate(-3deg)' }}>Franz &amp; Monika Fischer</div>
              </div>
            </div>

            {/* Polaroid family photo */}
            <div className="relative" style={{ paddingTop: 8 }}>
              <div style={{ background: '#fff', padding: '14px 14px 56px', boxShadow: '0 8px 24px rgba(0,0,0,.08), 0 2px 0 rgba(0,0,0,.04)', transform: 'rotate(2.5deg)', position: 'relative' }}>
                <div className="ph" style={{ aspectRatio: '4 / 5', borderColor: '#ccc' }}>
                  <span>Foto · Familie Fischer 2024</span>
                </div>
                <div className="anno" style={{ position: 'absolute', left: 20, bottom: 14, fontSize: 20, color: '#333' }}>
                  v.l.n.r. Marko, Franz, Monika, Daniel, Irina
                </div>
              </div>
              <div className="anno-arrow" style={{ left: -90, top: 80 }}>
                <div style={{ transform: 'rotate(-8deg)', width: 110 }}>echtes Foto,<br/>nicht gestellt</div>
              </div>
            </div>
          </div>
        </div>

        <div className="anno-arrow" style={{ right: 48, top: 28, transform: 'rotate(4deg)' }}>
          <div style={{ width: 180 }}>
            Headline ist italic, sehr groß.<br/>Wirkt wie eine echte Anrede.
          </div>
        </div>
      </div>

      {/* AUS UNSERER HALLE */}
      <div className="section">
        <div className="container">
          <div className="row between baseline mb-24">
            <div>
              <div className="section-label">§ 01 · Aktuell in unserer Halle</div>
              <h2 style={{ fontSize: 42, fontStyle: 'italic' }}>Was gerade bei uns steht.</h2>
            </div>
            <div className="row gap-8 center">
              <div className="chip">Alle 34 Fahrzeuge →</div>
            </div>
          </div>

          <div className="grid gap-24" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {CARS.slice(0, 6).map(([n, s, p], i) => (
              <div className="car" key={i}>
                <div className="ph"><span>Fahrzeugfoto</span></div>
                <div className="meta">
                  <div className="spec">{s}</div>
                  <div className="name">{n}</div>
                  <div className="price">{p}</div>
                  {i === 0 && (
                    <div className="anno mt-8" style={{ fontSize: 17 }}>„Mein Liebling diese Woche." — Marko</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAMILIE / TEAM */}
      <div className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <div className="section-label">§ 02 · Die Familie &amp; das Team</div>
          <h2 style={{ fontSize: 42, fontStyle: 'italic' }} className="mb-24">
            13 Menschen, ein Haus, drei Generationen.
          </h2>

          <div className="grid gap-24" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {TEAM.map(([name, role], i) => (
              <div className="person" key={i}>
                <div className="ph"><span>Portrait</span></div>
                <div className="name">{name}</div>
                <div className="role">{role}</div>
              </div>
            ))}
          </div>
          <div className="anno mt-24" style={{ fontSize: 19 }}>
            → Direktwahl + E-Mail bei jedem · jeder Mitarbeiter ist ansprechbar
          </div>
        </div>
      </div>

      {/* WERKSTATT */}
      <div className="section">
        <div className="container">
          <div className="grid gap-48" style={{ gridTemplateColumns: '1fr 1.2fr', alignItems: 'center' }}>
            <div className="ph" style={{ aspectRatio: '4 / 5' }}><span>Werkstatt · Foto</span></div>
            <div className="col gap-16">
              <div className="section-label">§ 03 · Service &amp; Werkstatt</div>
              <h2 style={{ fontSize: 48, fontStyle: 'italic' }}>
                „Einmal im Jahr<br/>einen kontrollierenden<br/>Blick."
              </h2>
              <div className="lines" style={{ maxWidth: 460 }}>
                <i/><i/><i/><i/>
              </div>
              <div className="row gap-12 mt-16">
                <div className="btn solid">Service-Termin anfragen</div>
                <div className="btn">Havariedienst →</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KONTAKT / STANDORT */}
      <div className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="container">
          <div className="grid gap-48" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="col gap-16">
              <div className="eyebrow" style={{ color: '#bbb' }}>§ 04 · Besuchen Sie uns</div>
              <h2 style={{ fontSize: 56, fontStyle: 'italic', color: 'var(--paper)' }}>
                Wagramer Straße 36a, 1220 Wien
              </h2>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#ddd', lineHeight: 1.9 }}>
                Verkauf · Mo–Fr 9:00–18:00 · Sa 9:00–12:00<br/>
                Werkstatt · Mo–Do 7:30–16:45 · Fr 7:00–13:00<br/>
                Teile · Mo–Do 8:00–16:00 · Fr 8:00–12:00
              </div>
              <div className="row gap-12 mt-16">
                <div className="btn" style={{ borderColor: 'var(--paper)', color: 'var(--paper)' }}>+43 1 263 42 92</div>
                <div className="btn" style={{ borderColor: 'var(--paper)', color: 'var(--paper)' }}>Route planen →</div>
              </div>
            </div>
            <div className="ph" style={{ borderColor: '#555', background: '#222', color: '#888' }}><span>Karte · Wien Donaustadt</span></div>
          </div>
        </div>
      </div>

      <div className="foot">
        <div>
          <div className="brand" style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic' }}>Autohaus Fischer</div>
          <div className="mt-8" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>F.+M. Fischer GmbH · Familienbetrieb seit 1974</div>
        </div>
        <div><h4>Haus</h4><ul><li>Über uns</li><li>Team</li><li>Werkstatt</li></ul></div>
        <div><h4>Fahrzeuge</h4><ul><li>Bestand</li><li>Hyundai</li><li>Mitsubishi</li></ul></div>
        <div><h4>Service</h4><ul><li>Termin</li><li>Havarie</li><li>Reifen</li></ul></div>
      </div>
    </div>
  );
}

// =============================================================
// VARIANT B — "Stille Galerie"
// Maximum negative space, massive thin display type, one car per fold.
// Reads like a quiet museum brochure.
// =============================================================
function VariantB() {
  return (
    <div className="wf">
      {/* Sparse nav */}
      <div className="nav" style={{ borderBottom: 'none', padding: '28px 64px' }}>
        <div className="brand" style={{ fontStyle: 'normal', letterSpacing: '0.02em' }}>FISCHER</div>
        <ul style={{ gap: 36 }}>
          <li className="ulink">Bestand</li>
          <li className="ulink">Werkstatt</li>
          <li className="ulink">Haus</li>
          <li className="ulink">Kontakt</li>
        </ul>
        <div className="eyebrow">1220 Wien · Est. 1974</div>
      </div>

      {/* HERO — massive headline only */}
      <div className="relative" style={{ padding: '120px 64px 80px' }}>
        <div className="eyebrow mb-24">— Autohaus seit 1974</div>
        <h1 className="display" style={{ fontSize: 168, lineHeight: 0.88, fontStyle: 'italic' }}>
          Familie<br/>Fischer.
        </h1>
        <div className="row between mt-32" style={{ alignItems: 'flex-end' }}>
          <div style={{ maxWidth: 380, fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.45 }}>
            Hyundai &amp; Mitsubishi.<br/>Verkauf · Service · Eintausch.<br/>
            <span style={{ color: 'var(--ink-soft)' }}>In der Wagramer Straße 36a. Seit drei Generationen.</span>
          </div>
          <div className="eyebrow">↓ Scroll</div>
        </div>

        <div className="anno-arrow" style={{ right: 80, top: 110 }}>
          <div style={{ transform: 'rotate(6deg)', width: 200, textAlign: 'right' }}>
            sehr ruhig.<br/>nur Typografie,<br/>kein Foto im Hero.
          </div>
        </div>
      </div>

      {/* Wide single car */}
      <div style={{ padding: '40px 64px 100px' }}>
        <div className="ph" style={{ aspectRatio: '21 / 9', width: '100%' }}>
          <span>Hero-Bild · ein einzelnes Fahrzeug, breit, ruhig</span>
        </div>
        <div className="row between mt-16 baseline">
          <div className="eyebrow">N° 01 — Hyundai Ioniq 5 · 2024</div>
          <div className="eyebrow">€ 41.200</div>
        </div>
      </div>

      {/* Numbered story sections */}
      <div style={{ padding: '80px 64px', borderTop: '1px solid var(--ink)' }}>
        <div className="grid" style={{ gridTemplateColumns: '120px 1fr 1fr', gap: 64 }}>
          <div className="eyebrow">N° 02</div>
          <h2 className="display" style={{ fontSize: 56, fontStyle: 'italic' }}>
            Das Haus.
          </h2>
          <div className="col gap-16" style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.55 }}>
            <p style={{ margin: 0 }}>
              Gegründet 1974 von Franz und Monika Fischer. Heute führen drei Generationen den Betrieb in der Wagramer Straße — vom Verkauf über die Werkstatt bis zum Teilelager.
            </p>
            <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
              Ausstellung im Untergeschoß und auf dem Dach. Eigener Kundenparkplatz. Sie finden bei uns immer ein Familienmitglied.
            </p>
          </div>
        </div>
      </div>

      {/* Inventory — quiet wide list */}
      <div style={{ padding: '80px 64px', borderTop: '1px solid var(--ink)' }}>
        <div className="grid mb-24" style={{ gridTemplateColumns: '120px 1fr', gap: 64 }}>
          <div className="eyebrow">N° 03</div>
          <h2 className="display" style={{ fontSize: 56, fontStyle: 'italic' }}>Im Bestand.</h2>
        </div>

        {CARS.slice(0, 5).map(([n, s, p], i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 200px 1fr 1fr 120px', gap: 32, alignItems: 'center', padding: '22px 0', borderTop: '1px solid var(--ink-light)' }}>
            <div className="eyebrow">{String(i + 1).padStart(2, '0')}</div>
            <div className="ph" style={{ aspectRatio: '4 / 3' }}><span>Foto</span></div>
            <div className="col gap-4">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontStyle: 'italic' }}>{n}</div>
              <div className="eyebrow">{s}</div>
            </div>
            <div></div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, textAlign: 'right' }}>{p}</div>
          </div>
        ))}
        <div className="row mt-32 between center">
          <div className="eyebrow">+ 29 weitere Fahrzeuge</div>
          <div className="btn">Vollständiger Bestand →</div>
        </div>
      </div>

      {/* Quote */}
      <div style={{ padding: '120px 64px', borderTop: '1px solid var(--ink)', textAlign: 'center' }}>
        <div className="eyebrow mb-24">N° 04 — Stimme einer Kundin</div>
        <h2 className="display" style={{ fontSize: 60, fontStyle: 'italic', maxWidth: 900, margin: '0 auto', lineHeight: 1.1 }}>
          „Ich kauf meine Autos<br/>seit 30 Jahren beim Fischer."
        </h2>
        <div className="eyebrow mt-24">— Helga K., 1220 Wien · Kundin seit 1995</div>
      </div>

      {/* Team — single thin row */}
      <div style={{ padding: '80px 64px', borderTop: '1px solid var(--ink)' }}>
        <div className="row between baseline mb-24">
          <h2 className="display" style={{ fontSize: 48, fontStyle: 'italic' }}>Das Team.</h2>
          <div className="eyebrow">N° 05 — 13 Mitarbeiter</div>
        </div>
        <div className="grid gap-16" style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
          {TEAM.map(([name, role], i) => (
            <div className="person" key={i}>
              <div className="ph" style={{ aspectRatio: '3 / 4' }}><span>{i+1}</span></div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 13, fontStyle: 'italic' }}>{name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--ink-soft)' }}>{role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '80px 64px 40px', borderTop: '1px solid var(--ink)' }}>
        <div className="grid" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic' }}>Fischer.</div>
            <div className="eyebrow mt-8">Wagramer Straße 36a · 1220 Wien</div>
            <div className="eyebrow">+43 1 263 42 92 · office@fischerauto.at</div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.8 }}>
            <li>Bestand</li><li>Werkstatt</li><li>Eintausch</li>
          </ul>
          <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.8 }}>
            <li>Haus</li><li>Team</li><li>Kontakt</li>
          </ul>
          <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 2, color: 'var(--ink-soft)' }}>
            <li>Impressum</li><li>Datenschutz</li><li>Newsletter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// =============================================================
// VARIANT C — "Werkstattbuch"
// Editorial multi-column layout (newspaper-journal). Information dense
// but visually quiet — feels handmade, like a small-town shop journal.
// =============================================================
function VariantC() {
  return (
    <div className="wf">
      {/* Masthead */}
      <div style={{ padding: '24px 48px 18px', borderBottom: '3px double var(--ink)' }}>
        <div className="row between baseline">
          <div className="eyebrow">Nr. 207 · Frühjahrsausgabe 2026</div>
          <div className="eyebrow">Wagramer Straße 36a · 1220 Wien</div>
        </div>
        <h1 className="display mt-8" style={{ fontSize: 80, fontStyle: 'italic', textAlign: 'center', letterSpacing: '-0.01em' }}>
          Das Fischer-Journal
        </h1>
        <div className="row between baseline mt-8">
          <div className="eyebrow">Familienbetrieb · seit 1974</div>
          <div className="eyebrow">Hyundai · Mitsubishi · Werkstatt · Eintausch</div>
        </div>
      </div>

      {/* Top nav as small links row */}
      <div style={{ padding: '12px 48px', borderBottom: '1px solid var(--ink)', display: 'flex', justifyContent: 'center', gap: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        <span>Bestand</span><span>·</span><span>Werkstatt</span><span>·</span><span>Familie</span><span>·</span><span>Eintausch</span><span>·</span><span>Standort</span><span>·</span><span>Kontakt</span>
      </div>

      {/* HERO: lead story + sidebar */}
      <div style={{ padding: '40px 48px', borderBottom: '1px solid var(--ink)' }}>
        <div className="grid" style={{ gridTemplateColumns: '2fr 1px 1fr', gap: 36 }}>
          {/* Lead */}
          <div>
            <div className="eyebrow mb-16">— Das Haus</div>
            <h2 className="display" style={{ fontSize: 56, fontStyle: 'italic', lineHeight: 1 }}>
              Drei Generationen,<br/>ein offenes Ohr.
            </h2>
            <div className="ph mt-24" style={{ aspectRatio: '16 / 9' }}><span>Foto · Familie vor dem Haus</span></div>
            <div className="grid mt-24" style={{ gridTemplateColumns: '1fr 1fr', gap: 24, fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 1.55 }}>
              <p style={{ margin: 0 }}>
                Seit 1974 in Wien-Donaustadt. Gegründet von Franz und Monika Fischer — heute geführt von der zweiten und dritten Generation. Verkauf, Werkstatt, Teilelager und Eintauschwagen aus einer Hand.
              </p>
              <p style={{ margin: 0 }}>
                Spezialisiert auf Hyundai und Mitsubishi — vom i30 Kombi bis zum Ioniq 5. Eigener Havariedienst, Ersatzwagen während Service, Versicherungs- und Finanzierungsberatung im Haus.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ background: 'var(--ink)', width: 1 }} />
          <div className="col gap-24">
            <div>
              <div className="eyebrow mb-12">Heute geöffnet</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.4 }}>
                Verkauf · <span className="hl">9:00–18:00</span><br/>
                Werkstatt · <span className="hl">7:30–16:45</span><br/>
                Teile · 8:00–16:00
              </div>
            </div>
            <div className="scribble" />
            <div>
              <div className="eyebrow mb-12">In Kürze</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--font-serif)', fontSize: 15 }}>
                <li>· 34 Fahrzeuge im Bestand</li>
                <li>· 11 davon Elektro &amp; Hybrid</li>
                <li>· 13 Mitarbeiter im Haus</li>
                <li>· 52 Jahre in Familienhand</li>
              </ul>
            </div>
            <div className="scribble" />
            <div className="note">
              „Schauen Sie einfach vorbei —<br/>auch ohne Termin." <br/><br/>— Franz
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: BESTAND — 3 columns */}
      <div style={{ padding: '48px 48px', borderBottom: '1px solid var(--ink)' }}>
        <div className="row between baseline mb-24">
          <h2 className="display" style={{ fontSize: 44, fontStyle: 'italic' }}>Bestand</h2>
          <div className="eyebrow">— 34 Fahrzeuge · Stand 18.05.2026</div>
        </div>
        <div className="grid gap-32" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {CARS.slice(0, 3).map(([n, s, p], i) => (
            <div key={i} className="col gap-8">
              <div className="ph" style={{ aspectRatio: '4 / 3' }}><span>Foto</span></div>
              <div className="eyebrow mt-8">{s}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic' }}>{n}</div>
              <div className="lines mt-8"><i/><i/></div>
              <div className="row between mt-8 baseline">
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20 }}>{p}</div>
                <div className="eyebrow">Probefahrt →</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: WERKSTATT + FAMILIE — 2 columns */}
      <div style={{ padding: '48px 48px', borderBottom: '1px solid var(--ink)' }}>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1px 1fr', gap: 36 }}>
          <div className="col gap-12">
            <h2 className="display" style={{ fontSize: 36, fontStyle: 'italic' }}>Werkstatt</h2>
            <div className="ph" style={{ aspectRatio: '4 / 3' }}><span>Werkstatt · Foto</span></div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 1.55, margin: 0 }}>
              Unsere Techniker werden laufend geschult. Service, §57a, Reifen­service, Karosserie, Havarie­dienst. Während des Services stellen wir Ersatzwagen.
            </p>
            <div className="row gap-8 mt-8" style={{ flexWrap: 'wrap' }}>
              <div className="chip">Service</div>
              <div className="chip">§57a</div>
              <div className="chip">Reifen</div>
              <div className="chip">Karosserie</div>
              <div className="chip">Havarie</div>
            </div>
          </div>
          <div style={{ background: 'var(--ink)' }} />
          <div className="col gap-12">
            <h2 className="display" style={{ fontSize: 36, fontStyle: 'italic' }}>Familie &amp; Team</h2>
            <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {TEAM.slice(0, 8).map(([name, role], i) => (
                <div className="person" key={i}>
                  <div className="ph" style={{ aspectRatio: '1 / 1' }}><span>·</span></div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 12 }}>{name.split(' ')[0]}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--ink-soft)' }}>{role}</div>
                </div>
              ))}
            </div>
            <div className="eyebrow mt-8">→ Alle 13 Mitarbeiter mit Direktwahl</div>
          </div>
        </div>
      </div>

      {/* SECTION: SERVICES — chip wall */}
      <div style={{ padding: '48px 48px', borderBottom: '1px solid var(--ink)' }}>
        <h2 className="display mb-16" style={{ fontSize: 36, fontStyle: 'italic' }}>Was wir tun</h2>
        <div className="grid gap-16" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {SERVICES.map(([t, s], i) => (
            <div key={i} className="col gap-4" style={{ borderTop: '1px solid var(--ink)', paddingTop: 12 }}>
              <div className="eyebrow">{String(i+1).padStart(2,'0')}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic' }}>{t}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--ink-soft)' }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: STANDORT */}
      <div style={{ padding: '48px 48px' }}>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 36 }}>
          <div>
            <h2 className="display mb-16" style={{ fontSize: 36, fontStyle: 'italic' }}>Besuchen Sie uns</h2>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.5 }}>
              Wagramer Straße 36a<br/>
              1220 Wien · Donaustadt<br/>
              <br/>
              +43 1 263 42 92<br/>
              office@fischerauto.at
            </div>
            <div className="row gap-8 mt-16">
              <div className="btn solid">Termin vereinbaren</div>
              <div className="btn">Route →</div>
            </div>
          </div>
          <div className="ph" style={{ aspectRatio: '4 / 3' }}><span>Karte</span></div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '20px 48px', borderTop: '3px double var(--ink)', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink-soft)' }}>
        © 2026 F.+M. Fischer GmbH · Impressum · Datenschutz · Newsletter
      </div>
    </div>
  );
}

// =============================================================
// VARIANT D — "Werkbank"
// Pragmatic warmth: search/filter front-and-centre but anchored by a
// large family portrait + handwritten note. Modern catalog with personality.
// =============================================================
function VariantD() {
  return (
    <div className="wf">
      <div className="nav">
        <div className="brand">Autohaus Fischer</div>
        <ul>
          <li className="ulink">Fahrzeuge</li>
          <li className="ulink">Werkstatt</li>
          <li className="ulink">Über uns</li>
          <li className="ulink">Kontakt</li>
        </ul>
        <div className="row gap-8 center">
          <div className="eyebrow">DE</div>
          <div className="cta">+43 1 263 42 92</div>
        </div>
      </div>

      {/* HERO: portrait + headline + search */}
      <div style={{ padding: '56px 48px 48px' }}>
        <div className="grid" style={{ gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'center' }}>
          <div className="col gap-24">
            <div className="eyebrow">Familienbetrieb seit 1974 · Wien Donaustadt</div>
            <h1 className="display" style={{ fontSize: 80, fontStyle: 'italic', lineHeight: 0.98 }}>
              Ihr Auto.<br/>Aus unserer<br/>Familie.
            </h1>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--ink-soft)', maxWidth: 480 }}>
              Hyundai und Mitsubishi. Neu, gebraucht, im Eintausch. Verkauf und Werkstatt unter einem Dach — seit 52 Jahren in der Wagramer Straße.
            </div>

            {/* Search / filter bar */}
            <div className="row gap-8 center" style={{ background: '#fff', border: '1.5px solid var(--ink)', padding: 6, borderRadius: 999, maxWidth: 560 }}>
              <div className="col" style={{ padding: '4px 16px', borderRight: '1px solid var(--ink-light)', flex: 1 }}>
                <div className="eyebrow" style={{ fontSize: 9 }}>Marke</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15 }}>Alle</div>
              </div>
              <div className="col" style={{ padding: '4px 16px', borderRight: '1px solid var(--ink-light)', flex: 1 }}>
                <div className="eyebrow" style={{ fontSize: 9 }}>Antrieb</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15 }}>Elektro</div>
              </div>
              <div className="col" style={{ padding: '4px 16px', flex: 1 }}>
                <div className="eyebrow" style={{ fontSize: 9 }}>Bis €</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15 }}>30.000</div>
              </div>
              <div className="btn accent" style={{ borderRadius: 999, padding: '12px 20px' }}>Suchen →</div>
            </div>
            <div className="eyebrow">34 Fahrzeuge verfügbar · 11 Elektro</div>
          </div>

          <div className="relative">
            <div className="ph" style={{ aspectRatio: '4 / 5' }}><span>Familienportrait</span></div>
            <div className="note" style={{ position: 'absolute', right: -24, bottom: -28, maxWidth: 220, transform: 'rotate(3deg)' }}>
              „Bei uns ist immer ein Fischer da."<br/><br/>— Marko F.
            </div>
          </div>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="section" style={{ borderBottom: '1px solid var(--ink)', borderTop: '1px solid var(--ink)' }}>
        <div className="container">
          <div className="row between baseline mb-24">
            <h2 className="display" style={{ fontSize: 42, fontStyle: 'italic' }}>Aktuelle Highlights</h2>
            <div className="row gap-8">
              <div className="chip solid">Alle</div>
              <div className="chip">Elektro</div>
              <div className="chip">Hybrid</div>
              <div className="chip">Eintausch</div>
              <div className="chip">Unter €20.000</div>
            </div>
          </div>

          <div className="grid gap-16" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {CARS.slice(0, 4).map(([n, s, p], i) => (
              <div className="car" key={i}>
                <div className="ph"><span>Foto</span></div>
                <div className="meta">
                  <div className="row between center">
                    <div className="spec">{s.split(' · ')[0]}</div>
                    {i === 0 && <div className="chip accent" style={{ padding: '2px 8px', fontSize: 9 }}>Neu</div>}
                  </div>
                  <div className="name">{n}</div>
                  <div className="spec">{s.split(' · ').slice(1).join(' · ')}</div>
                  <div className="row between baseline mt-8">
                    <div className="price">{p}</div>
                    <div className="eyebrow">Details →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES grid */}
      <div className="section">
        <div className="container">
          <div className="grid gap-48" style={{ gridTemplateColumns: '1fr 2fr' }}>
            <div>
              <div className="section-label">Was wir tun</div>
              <h2 className="display" style={{ fontSize: 44, fontStyle: 'italic' }}>
                Alles aus einem Haus.
              </h2>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                Vom Erstkontakt bis zum nächsten §57a — wir sind die einzige Adresse, die Sie für Ihr Auto brauchen.
              </p>
            </div>
            <div className="grid gap-16" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {SERVICES.map(([t, s], i) => (
                <div key={i} style={{ border: '1px solid var(--ink)', padding: 18, background: 'var(--paper)' }}>
                  <div className="eyebrow mb-12">0{i+1}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontStyle: 'italic' }}>{t}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 13, color: 'var(--ink-soft)' }} className="mt-8">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* QUOTE band */}
      <div style={{ background: 'var(--accent)', color: '#fff', padding: '64px 48px', textAlign: 'center' }}>
        <div className="eyebrow mb-16" style={{ color: 'rgba(255,255,255,0.7)' }}>— Stammkundin seit 1995</div>
        <h2 className="display" style={{ fontSize: 48, fontStyle: 'italic', maxWidth: 900, margin: '0 auto', lineHeight: 1.1 }}>
          „Bei den Fischers fühlt man sich nicht wie ein Kunde,<br/>sondern wie ein Nachbar."
        </h2>
        <div className="eyebrow mt-16" style={{ color: 'rgba(255,255,255,0.7)' }}>— Helga K., 1220 Wien</div>
      </div>

      {/* TEAM strip */}
      <div className="section">
        <div className="container">
          <div className="row between baseline mb-24">
            <div>
              <div className="section-label">Wer wir sind</div>
              <h2 className="display" style={{ fontSize: 42, fontStyle: 'italic' }}>13 Menschen. Ein Team.</h2>
            </div>
            <div className="chip">Ganzes Team →</div>
          </div>
          <div className="grid gap-16" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
            {TEAM.slice(0, 6).map(([name, role], i) => (
              <div className="person" key={i}>
                <div className="ph" style={{ aspectRatio: '3 / 4' }}><span>·</span></div>
                <div className="name">{name}</div>
                <div className="role">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA / STANDORT */}
      <div className="section" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--ink)' }}>
        <div className="container">
          <div className="grid gap-48" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="col gap-16">
              <div className="section-label">Besuchen Sie uns</div>
              <h2 className="display" style={{ fontSize: 56, fontStyle: 'italic' }}>
                Wagramer Straße 36a,<br/>1220 Wien.
              </h2>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 2, color: 'var(--ink-soft)' }}>
                VERKAUF — MO–FR 9:00–18:00 · SA 9:00–12:00<br/>
                WERKSTATT — MO–DO 7:30–16:45 · FR 7:00–13:00<br/>
                TEILE — MO–DO 8:00–16:00 · FR 8:00–12:00
              </div>
              <div className="row gap-8 mt-16">
                <div className="btn solid">Probefahrt buchen</div>
                <div className="btn">Service-Termin →</div>
              </div>
            </div>
            <div className="ph" style={{ aspectRatio: '4 / 3' }}><span>Karte · Donaustadt</span></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="foot">
        <div>
          <div className="brand" style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic' }}>Autohaus Fischer</div>
          <div className="mt-8" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>F.+M. Fischer GmbH · 1220 Wien · Seit 1974</div>
          <div className="mt-8 row gap-8">
            <div className="chip">Hyundai</div>
            <div className="chip">Mitsubishi</div>
          </div>
        </div>
        <div><h4>Fahrzeuge</h4><ul><li>Bestand</li><li>Elektro</li><li>Eintausch</li></ul></div>
        <div><h4>Service</h4><ul><li>Werkstatt</li><li>Reifen</li><li>§57a</li></ul></div>
        <div><h4>Haus</h4><ul><li>Über uns</li><li>Team</li><li>Kontakt</li></ul></div>
      </div>
    </div>
  );
}

Object.assign(window, { VariantA, VariantB, VariantC, VariantD });

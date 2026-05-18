// site.jsx — Hi-Fi Variante D — Autohaus Fischer

const { useState, useEffect, useMemo } = React;

// ─────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="mark">Autohaus Fischer</span>
          <span className="sub">— Seit 1974</span>
        </a>
        <ul className="nav-links">
          <li><a href="#bestand">Bestand</a></li>
          <li><a href="#angebot">Angebote</a></li>
          <li><a href="#werkstatt">Werkstatt</a></li>
          <li><a href="#team">Familie</a></li>
          <li><a href="#standort">Standort</a></li>
        </ul>
        <div className="nav-right">
          <a href="tel:+4312634292" className="nav-phone">+43 1 263 42 92</a>
          <button className="nav-burger" aria-label="Menü"><span></span></button>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────
function Hero({ showNote, heroStyle }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">— Familienbetrieb · Wien Donaustadt · Est. 1974</div>
          {heroStyle === 'statement' ? (
            <h1>
              Ihr Auto. <br/>
              Aus unserer <br/>
              <span className="underline">Familie.</span>
            </h1>
          ) : heroStyle === 'question' ? (
            <h1>
              Suchen Sie<br/>
              Ihr nächstes <br/>
              <span className="underline">Auto?</span>
            </h1>
          ) : (
            <h1>
              52 Jahre <br/>
              <span className="underline">Autos.</span> Eine Familie.
            </h1>
          )}
          <p className="hero-lede">
            Hyundai &amp; Mitsubishi — neu, gebraucht, im Eintausch. Verkauf und
            Werkstatt unter einem Dach in der Wagramer Straße. Drei Generationen
            Fischer warten auf Ihren Besuch.
          </p>

          <div className="search">
            <div className="search-cell">
              <span className="lbl">Marke</span>
              <span className="val">Alle Marken</span>
            </div>
            <div className="search-cell">
              <span className="lbl">Antrieb</span>
              <span className="val">Elektro</span>
            </div>
            <div className="search-cell">
              <span className="lbl">Bis €</span>
              <span className="val">30.000</span>
            </div>
            <button className="search-btn" onClick={() => document.getElementById('bestand')?.scrollIntoView({ behavior: 'smooth' })}>
              Suchen
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 7 L13 7 M9 3 L13 7 L9 11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <div className="hero-stats">
            <span><span className="dot"/>34 Fahrzeuge verfügbar</span>
            <span>·</span>
            <span>11 Elektro &amp; Hybrid</span>
            <span>·</span>
            <span>Heute geöffnet bis 18:00</span>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait">
            <FamilyPortraitPlaceholder />
            <span className="badge">Familie Fischer · 2024</span>
          </div>
          {showNote && (
            <div className="portrait-note">
              „Bei uns ist immer ein Fischer da. Schauen Sie einfach vorbei."
              <span className="sig">— Marko F.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// TRUST STRIP
// ─────────────────────────────────────────────────────────
function TrustStrip() {
  return (
    <div className="container">
      <div className="trust">
        <div className="trust-cell">
          <div className="n">52</div>
          <div className="l">Jahre in Familienhand</div>
        </div>
        <div className="trust-cell">
          <div className="n">3</div>
          <div className="l">Generationen Fischer</div>
        </div>
        <div className="trust-cell">
          <div className="n">13</div>
          <div className="l">Mitarbeiter im Haus</div>
        </div>
        <div className="trust-cell">
          <div className="n">34</div>
          <div className="l">Fahrzeuge im Bestand</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// BESTAND mit Filter
// ─────────────────────────────────────────────────────────
const FILTERS = [
  { id: 'all',    label: 'Alle',         test: () => true },
  { id: 'elek',   label: 'Elektro',      test: c => c.fuel === 'Elektro' },
  { id: 'hyb',    label: 'Hybrid',       test: c => /Hybrid/i.test(c.fuel) },
  { id: 'unter20',label: 'Unter € 20.000', test: c => parseFloat(c.price.replace(/[^0-9.]/g, '')) < 20 },
  { id: 'einta',  label: 'Eintausch',    test: c => c.tag?.label === 'Eintauschwagen' },
];

function Bestand({ onPick }) {
  const [filter, setFilter] = useState('all');
  const visible = useMemo(() => CARS.filter(FILTERS.find(f => f.id === filter).test), [filter]);

  return (
    <section className="section" id="bestand">
      <div className="container">
        <div className="section-eyebrow"><span>§ 01 · Bestand</span></div>
        <div className="section-head">
          <h2>Aktuelle Highlights<br/>aus unserer Halle.</h2>
          <div className="chips">
            {FILTERS.map(f => {
              const n = f.id === 'all' ? CARS.length : CARS.filter(f.test).length;
              return (
                <button
                  key={f.id}
                  className={`chip ${filter === f.id ? 'active' : ''}`}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}<span className="count">{n}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="cars">
          {visible.map(c => (
            <div key={c.id} className="car" onClick={() => onPick(c)}>
              <div className="car-img">
                <CarPlaceholder tone={c.img.tone} model={c.img.model} plate={c.img.plate} />
                {c.tag && <span className={`car-tag ${c.tag.cls || ''}`}>{c.tag.label}</span>}
                <button className="car-fav" onClick={e => { e.stopPropagation(); e.currentTarget.textContent = e.currentTarget.textContent === '♥' ? '♡' : '♥'; }}>♡</button>
              </div>
              <div className="car-meta">
                <div className="car-spec">{c.year} · {c.km} km · {c.color}</div>
                <div className="car-name">{c.name}</div>
                <div className="car-spec">{c.variant.split(' · ')[0]}</div>
                <div className="car-foot">
                  <div className="car-price">{c.price}</div>
                  <div className="car-arrow">Details →</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <button className="btn">Alle 34 Fahrzeuge ansehen →</button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// INHABER-Zitat
// ─────────────────────────────────────────────────────────
function InhaberCard() {
  return (
    <section className="section section-tight" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <div className="inhaber">
          <div className="inhaber-portrait">
            <PortraitPlaceholder initials="F" tone="sand" />
          </div>
          <div>
            <div className="section-eyebrow"><span>Vom Inhaber</span></div>
            <p className="inhaber-quote">
              „Mein Vater hat den Betrieb 1974 gegründet. Heute führen wir ihn zu fünft —
              drei Generationen unter einem Dach. Manche Kunden begleiten uns seit den 70ern.
              Das verpflichtet."
            </p>
            <div className="signature">
              <svg width="120" height="50" viewBox="0 0 120 50">
                <path d="M 5 30 Q 15 8 25 28 Q 35 48 45 25 Q 52 10 60 30 Q 70 50 80 22 Q 90 10 105 28 L 115 30" stroke="var(--hand)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
              Franz Fischer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────
function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="services-grid">
          <div>
            <div className="section-eyebrow"><span>§ 02 · Was wir tun</span></div>
            <h2 className="h-serif" style={{ fontSize: 'clamp(36px, 4.4vw, 60px)' }}>
              Alles aus<br/>einem Haus.
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.55, maxWidth: 380, marginTop: 18 }}>
              Vom Erstkontakt bis zum nächsten §57a — wir sind die einzige Adresse,
              die Sie für Ihr Auto brauchen.
            </p>
          </div>
          <div className="services-cards">
            {SERVICES.map((s, i) => (
              <div key={i} className="svc-card">
                <span className="num">0{i + 1}</span>
                <div className="t">{s.t}</div>
                <div className="d">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// AKTUELLES ANGEBOT (feature card)
// ─────────────────────────────────────────────────────────
function FeatureOffer({ onPick }) {
  return (
    <section className="section section-tight" id="angebot">
      <div className="container">
        <div className="angebot">
          <div className="angebot-grid">
            <div>
              <div className="eyebrow" style={{ color: 'rgba(244,241,234,0.6)', marginBottom: 16 }}>★ Angebot der Woche · bis 31. Mai</div>
              <h2>Hyundai Ioniq 5<br/>Long Range AWD.</h2>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'rgba(244,241,234,0.7)', maxWidth: 460 }}>
                Vorführwagen aus 2024 — 3.200 km, voll ausgestattet, mit der
                vollen Hyundai 8-Jahres-Garantie auf die Batterie.
              </p>
              <div className="price-block">
                <span className="price-old">€ 46.900</span>
                <span className="price-new">€ 41.200</span>
              </div>
              <div className="btn-row">
                <button className="btn solid" onClick={() => onPick(CARS[0])}>Details &amp; Probefahrt</button>
                <button className="btn">Finanzierung berechnen</button>
              </div>
            </div>
            <div className="angebot-img">
              <CarPlaceholder tone="slate" model="suv" plate="W" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// WERKSTATT
// ─────────────────────────────────────────────────────────
function Werkstatt({ onAnfrage }) {
  return (
    <section className="section" id="werkstatt" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="werkstatt">
          <div className="werkstatt-img">
            <WerkstattPlaceholder />
          </div>
          <div>
            <div className="section-eyebrow"><span>§ 03 · Service &amp; Werkstatt</span></div>
            <h2 className="display">
              Einmal im Jahr,<br/>ein kontrollierender<br/>Blick.
            </h2>
            <p className="werkstatt-quote">
              „Wer ein Auto kauft, tätigt eine Investition. Wir kümmern uns darum,
              dass diese Investition lange gut aufgehoben ist."
            </p>
            <ul className="werkstatt-list">
              <li>Service nach Hersteller­vorgabe</li>
              <li>§57a / Pickerl</li>
              <li>Reifenservice &amp; Einlagerung</li>
              <li>Karosserie &amp; Lackierung</li>
              <li>Havarie­dienst</li>
              <li>Ersatzwagen inkludiert</li>
            </ul>
            <div className="btn-row">
              <button className="btn solid" onClick={onAnfrage}>Termin anfragen</button>
              <a href="tel:+4312634292" className="btn">+43 1 263 42 92-11</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// QUOTE BAND
// ─────────────────────────────────────────────────────────
function QuoteBand() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, []);
  const q = TESTIMONIALS[i];
  return (
    <section className="quote-band">
      <div className="quote-mark">"</div>
      <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 22, position: 'relative' }}>— Stammkundinnen &amp; Stammkunden</div>
      <h2 key={i}>„{q.quote}"</h2>
      <div className="who">{q.who} · {q.detail}</div>
      <div className="quote-dots">
        {TESTIMONIALS.map((_, idx) => (
          <span key={idx} className={idx === i ? 'active' : ''} onClick={() => setI(idx)} />
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────────────────
function Team() {
  const [show, setShow] = useState(6);
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section-eyebrow"><span>§ 04 · Familie &amp; Team</span></div>
        <div className="section-head">
          <h2>12 Menschen. Drei Generationen.<br/>Ein Haus.</h2>
          <button className="btn" onClick={() => setShow(show >= TEAM.length ? 6 : TEAM.length)}>
            {show >= TEAM.length ? 'Weniger zeigen' : `Alle ${TEAM.length} Mitarbeiter →`}
          </button>
        </div>
        <div className="team-grid">
          {TEAM.slice(0, show).map((p, i) => (
            <div key={i} className="person">
              <div className="photo">
                <PortraitPlaceholder initials={p.initials} tone={p.tone} />
                {p.gen && <span className="gen">{p.gen}</span>}
              </div>
              <div className="nm">{p.name}</div>
              <div className="rl">{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// STANDORT
// ─────────────────────────────────────────────────────────
function Standort() {
  return (
    <section className="section standort" id="standort">
      <div className="container">
        <div className="standort-grid">
          <div>
            <div className="section-eyebrow"><span>§ 05 · Besuchen Sie uns</span></div>
            <h2 className="display">
              Wagramer Straße<br/>36a, 1220 Wien.
            </h2>
            <div className="hours">
              <strong>Verkauf</strong> &nbsp;·&nbsp; Mo–Fr 9:00–18:00 &nbsp;·&nbsp; Sa 9:00–12:00<br/>
              <strong>Werkstatt</strong> &nbsp;·&nbsp; Mo–Do 7:30–16:45 &nbsp;·&nbsp; Fr 7:00–13:00<br/>
              <strong>Teilelager</strong> &nbsp;·&nbsp; Mo–Do 8:00–16:00 &nbsp;·&nbsp; Fr 8:00–12:00
            </div>
            <div className="btn-row">
              <a className="btn solid" href="https://maps.google.com" target="_blank" rel="noreferrer">Route planen →</a>
              <a className="btn" href="mailto:office@fischerauto.at">office@fischerauto.at</a>
            </div>
            <p style={{ marginTop: 24, fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--ink-soft)', maxWidth: 460 }}>
              Eigener Kundenparkplatz · Ausstellung im Untergeschoß und auf dem Dach ·
              Mit U1 Kaisermühlen-VIC oder Bus 92A erreichbar.
            </p>
          </div>
          <div className="standort-map">
            <MapPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="mark">Autohaus Fischer</div>
            <p>F.+M. Fischer GmbH · Wagramer Straße 36a · 1220 Wien · Familienbetrieb in 3. Generation seit 1974</p>
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '6px 12px', border: '1px solid rgba(255,255,255,.2)', borderRadius: 999 }}>Hyundai</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '6px 12px', border: '1px solid rgba(255,255,255,.2)', borderRadius: 999 }}>Mitsubishi</span>
            </div>
          </div>
          <div className="foot-col">
            <h4>Fahrzeuge</h4>
            <ul>
              <li><a href="#bestand">Gesamter Bestand</a></li>
              <li><a href="#bestand">Elektro &amp; Hybrid</a></li>
              <li><a href="#bestand">Eintauschwagen</a></li>
              <li><a href="#angebot">Aktuelle Angebote</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Service</h4>
            <ul>
              <li><a href="#werkstatt">Werkstatt</a></li>
              <li><a href="#werkstatt">§57a / Pickerl</a></li>
              <li><a href="#werkstatt">Reifen &amp; Einlagerung</a></li>
              <li><a href="#werkstatt">Havariedienst</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Haus</h4>
            <ul>
              <li><a href="#team">Über uns</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#standort">Standort</a></li>
              <li><a href="mailto:office@fischerauto.at">Kontakt</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 F.+M. Fischer GmbH · +43 1 263 42 92 · office@fischerauto.at</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a>Impressum</a>
            <a>Datenschutz</a>
            <a>Barriere­freiheit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, TrustStrip, Bestand, InhaberCard, Services,
  FeatureOffer, Werkstatt, QuoteBand, Team, Standort, Footer,
});

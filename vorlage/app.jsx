// app.jsx — Mount DesignCanvas with 4 wireframe variants + tweaks panel
const { useEffect } = React;

const VARIANT_META = [
  {
    id: 'a',
    label: 'A · Der Brief',
    sub: 'Hyper-persönlich. Hero ist ein Brief vom Inhaber, Polaroid der Familie. Vehikel & Team wirken wie Fortsetzung der Unterhaltung.',
    component: VariantA,
    height: 3520,
  },
  {
    id: 'b',
    label: 'B · Stille Galerie',
    sub: 'Edel & ruhig pur. Massive italic-Typo, viel Weißraum, ein Auto pro Fold, nummerierte Sektionen wie ein Museums-Katalog.',
    component: VariantB,
    height: 3680,
  },
  {
    id: 'c',
    label: 'C · Fischer-Journal',
    sub: 'Editorial im Zeitungs-/Journal-Stil. Masthead, mehrspaltig, dicht aber ruhig — wirkt wie handgemacht, langjährig.',
    component: VariantC,
    height: 2880,
  },
  {
    id: 'd',
    label: 'D · Persönlicher Katalog',
    sub: 'Pragmatisch & warm. Filter im Hero, Familienportrait daneben. Modernster Ansatz mit Persönlichkeit.',
    component: VariantD,
    height: 3360,
  },
];

const ACCENT_OPTIONS = [
  { name: 'Terra (Wien-Ziegel)',     val: '#b54a2c' },
  { name: 'Anthrazit',               val: '#1a1a1a' },
  { name: 'Tiefblau',                val: '#1f3a5f' },
  { name: 'Olive',                   val: '#6b6a3a' },
];

const PAPER_OPTIONS = [
  { name: 'Natur (warmes Beige)', paper: '#f4f1ea', paper2: '#ebe7dc' },
  { name: 'Off-White',            paper: '#f7f5f0', paper2: '#eeece4' },
  { name: 'Papier kalt',          paper: '#f1f1ee', paper2: '#e7e7e0' },
  { name: 'Werkstatt-Grau',       paper: '#ecebe6', paper2: '#dfddd4' },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#b54a2c",
  "paperIdx": 0,
  "showAnnotations": true,
  "showLabels": true
}/*EDITMODE-END*/;

function ControlsPanel() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks live to the page
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', t.accent);
    const paper = PAPER_OPTIONS[t.paperIdx] || PAPER_OPTIONS[0];
    root.style.setProperty('--paper', paper.paper);
    root.style.setProperty('--paper-2', paper.paper2);
    document.body.classList.toggle('hide-anno', !t.showAnnotations);
  }, [t.accent, t.paperIdx, t.showAnnotations]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Akzentfarbe">
        <TweakColor
          label="Akzent"
          value={t.accent}
          options={ACCENT_OPTIONS.map(o => o.val)}
          onChange={v => setTweak('accent', v)}
        />
      </TweakSection>
      <TweakSection label="Papier-Ton">
        <TweakSelect
          label="Hintergrund"
          value={t.paperIdx}
          options={PAPER_OPTIONS.map((o, i) => ({ value: i, label: o.name }))}
          onChange={v => setTweak('paperIdx', Number(v))}
        />
      </TweakSection>
      <TweakSection label="Wireframe-Vibe">
        <TweakToggle
          label="Annotationen anzeigen"
          value={t.showAnnotations}
          onChange={v => setTweak('showAnnotations', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

function App() {
  return (
    <>
      <DesignCanvas>
        <DCSection
          id="home"
          title="Startseite"
          subtitle={'Vier Richtungen — alle „edel & ruhig“, jede mit anderem Charakter. Hover über eine Karte zum Drag/Fokus.'}
        >
          {VARIANT_META.map(v => {
            const Comp = v.component;
            return (
              <DCArtboard
                key={v.id}
                id={v.id}
                label={v.label}
                width={1280}
                height={v.height}
              >
                <Comp />
              </DCArtboard>
            );
          })}
        </DCSection>

        <DCSection
          id="notes"
          title="Was als nächstes"
          subtitle="Nach Auswahl der Richtung: Detailseiten (Fahrzeug-Detail, Werkstatt-Termin, Team-Profil) + responsive Varianten."
        >
          <DCArtboard id="next" label="Nächste Schritte" width={520} height={520}>
            <div style={{ padding: 36, fontFamily: "'Geist', system-ui, sans-serif", background: '#fff', height: '100%' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888', marginBottom: 14 }}>Roadmap</div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, fontStyle: 'italic', margin: '0 0 18px', lineHeight: 1.1 }}>
                Sobald eine Richtung steht:
              </h3>
              <ol style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.7, color: '#333', margin: 0 }}>
                <li>Echte Hyundai/Mitsubishi-Modelle &amp; Bilder einsetzen</li>
                <li>Fahrzeug-Detailseite mit Galerie &amp; Probefahrt-CTA</li>
                <li>Werkstatt-Termin-Flow als interaktiver Prototyp</li>
                <li>Team-Profile mit Direktwahl &amp; persönlicher Note</li>
                <li>Mobile Layout (375px) für alle Sektionen</li>
                <li>Hi-Fi Visual Design mit finaler Typo &amp; Foto-Direction</li>
              </ol>
              <div style={{ marginTop: 20, padding: 14, background: '#fff9c4', fontFamily: "'Caveat', cursive", fontSize: 18, color: '#4a3a10', transform: 'rotate(-1deg)' }}>
                Tipp: Variante A &amp; D lassen sich auch mischen<br/>— Brief-Hero + funktionale Bestandsliste.
              </div>
            </div>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <ControlsPanel />
    </>
  );
}

// Style: hide annotations when toggled off
const annoStyle = document.createElement('style');
annoStyle.textContent = `
  body.hide-anno .anno,
  body.hide-anno .anno-arrow,
  body.hide-anno .note { display: none !important; }
`;
document.head.appendChild(annoStyle);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

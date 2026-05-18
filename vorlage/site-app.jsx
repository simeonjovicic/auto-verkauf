// app.jsx — Root für Autohaus Fischer Hi-Fi

const { useState: useS, useEffect: useE } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#b54a2c",
  "paperIdx": 0,
  "heroStyle": "statement",
  "showNote": true,
  "darkMode": false
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  '#b54a2c', // Wien-Ziegel (warm terra)
  '#1f3a5f', // Tiefblau (Hyundai-nah)
  '#2b5d3b', // Forstgrün
  '#7a5230', // Cognac
  '#1a1814', // Pures Anthrazit
];

const PAPER_OPTIONS = [
  { name: 'Natur (warm beige)',  paper: '#f4f1ea', paper2: '#ebe7dc' },
  { name: 'Off-White (kühl)',    paper: '#f7f6f1', paper2: '#eeece4' },
  { name: 'Sand',                paper: '#ede6d4', paper2: '#e0d8c0' },
];

function Tweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useE(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', t.accent);
    const paper = PAPER_OPTIONS[t.paperIdx] || PAPER_OPTIONS[0];
    root.style.setProperty('--paper', paper.paper);
    root.style.setProperty('--paper-2', paper.paper2);
    document.body.classList.toggle('dark', !!t.darkMode);
  }, [t.accent, t.paperIdx, t.darkMode]);

  return [t, setTweak];
}

function TweaksUi({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Erscheinung">
        <TweakColor
          label="Akzentfarbe"
          value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={v => setTweak('accent', v)}
        />
        <TweakSelect
          label="Hintergrund"
          value={t.paperIdx}
          options={PAPER_OPTIONS.map((o, i) => ({ value: i, label: o.name }))}
          onChange={v => setTweak('paperIdx', Number(v))}
        />
        <TweakToggle
          label="Dunkler Modus"
          value={!!t.darkMode}
          onChange={v => setTweak('darkMode', v)}
        />
      </TweakSection>
      <TweakSection label="Hero">
        <TweakRadio
          label="Headline-Stil"
          value={t.heroStyle}
          options={[
            { value: 'statement', label: 'Statement' },
            { value: 'years',     label: '52 Jahre' },
            { value: 'question',  label: 'Frage' },
          ]}
          onChange={v => setTweak('heroStyle', v)}
        />
        <TweakToggle
          label="Handschriftliche Notiz"
          value={!!t.showNote}
          onChange={v => setTweak('showNote', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

function App() {
  const [car, setCar] = useS(null);
  const [serviceOpen, setServiceOpen] = useS(false);
  const [t, setTweak] = Tweaks();

  return (
    <>
      <Nav />
      <Hero showNote={t.showNote} heroStyle={t.heroStyle} />
      <TrustStrip />
      <Bestand onPick={setCar} />
      <InhaberCard />
      <Services />
      <FeatureOffer onPick={setCar} />
      <Werkstatt onAnfrage={() => setServiceOpen(true)} />
      <QuoteBand />
      <Team />
      <Standort />
      <Footer />

      <VehicleModal car={car} onClose={() => setCar(null)} />
      <ServiceModal open={serviceOpen} onClose={() => setServiceOpen(false)} />

      <TweaksUi t={t} setTweak={setTweak} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

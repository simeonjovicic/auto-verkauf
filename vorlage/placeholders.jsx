// placeholders.jsx — SVG-Platzhalter für Fotos
// Die Bilder werden später durch echte Fotos ersetzt. Bis dahin schöne, intentionale Placeholder.

function CarPlaceholder({ tone = 'beige', model = 'sedan', plate = '' }) {
  // tone palettes
  const palettes = {
    beige: { sky: '#e8e2d4', ground: '#d4ccb8', body: '#2a2a2a', window: '#4a4a4a' },
    sand:  { sky: '#efe6d0', ground: '#d8c9a3', body: '#7a4530', window: '#3a2418' },
    slate: { sky: '#dde0e5', ground: '#b8bcc4', body: '#1a3a5f', window: '#0a1e35' },
    olive: { sky: '#e4e6d4', ground: '#c8cba8', body: '#3a4528', window: '#1f2614' },
    mist:  { sky: '#e8eaec', ground: '#c8ccd0', body: '#cccccc', window: '#888888' },
    forest:{ sky: '#dde6dc', ground: '#b8c4b8', body: '#1f3528', window: '#0a1810' },
    rouge: { sky: '#ecdfdc', ground: '#d4b8b0', body: '#5a1a18', window: '#2a0a08' },
  };
  const p = palettes[tone] || palettes.beige;

  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id={`sky-${tone}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.sky} />
          <stop offset="100%" stopColor={p.ground} />
        </linearGradient>
        <linearGradient id={`body-${tone}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.body} stopOpacity="1" />
          <stop offset="100%" stopColor={p.body} stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#sky-${tone})`} />
      {/* horizon line subtle */}
      <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
      {/* shadow */}
      <ellipse cx="200" cy="240" rx="160" ry="14" fill="rgba(0,0,0,0.18)" />
      {model === 'suv' ? (
        // SUV silhouette
        <g>
          <path d="M 60 230 L 80 175 Q 100 155 130 152 L 270 152 Q 300 158 320 178 L 340 230 Z" fill={`url(#body-${tone})`} />
          <path d="M 105 175 Q 115 158 135 156 L 190 156 L 200 175 Z" fill={p.window} opacity="0.9" />
          <path d="M 210 175 L 220 156 L 270 156 Q 290 158 298 175 Z" fill={p.window} opacity="0.9" />
          <circle cx="115" cy="235" r="22" fill="#1a1a1a" />
          <circle cx="115" cy="235" r="11" fill="#3a3a3a" />
          <circle cx="295" cy="235" r="22" fill="#1a1a1a" />
          <circle cx="295" cy="235" r="11" fill="#3a3a3a" />
          {/* highlight */}
          <path d="M 80 195 L 130 175 L 270 175 L 320 195" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" />
        </g>
      ) : model === 'kombi' ? (
        <g>
          <path d="M 50 235 L 75 195 Q 95 178 125 175 L 295 175 Q 320 178 335 195 L 350 235 Z" fill={`url(#body-${tone})`} />
          <path d="M 105 195 Q 115 180 135 178 L 200 178 L 208 195 Z" fill={p.window} opacity="0.9" />
          <path d="M 215 195 L 222 178 L 290 178 Q 310 180 318 195 Z" fill={p.window} opacity="0.9" />
          <circle cx="115" cy="240" r="20" fill="#1a1a1a" />
          <circle cx="115" cy="240" r="10" fill="#3a3a3a" />
          <circle cx="305" cy="240" r="20" fill="#1a1a1a" />
          <circle cx="305" cy="240" r="10" fill="#3a3a3a" />
        </g>
      ) : (
        // sedan/hatchback
        <g>
          <path d="M 55 235 L 90 195 Q 110 175 145 170 L 270 170 Q 305 178 325 200 L 345 235 Z" fill={`url(#body-${tone})`} />
          <path d="M 115 195 Q 130 178 155 175 L 200 175 L 210 195 Z" fill={p.window} opacity="0.9" />
          <path d="M 215 195 L 222 175 L 260 175 Q 285 180 300 195 Z" fill={p.window} opacity="0.9" />
          <circle cx="120" cy="240" r="22" fill="#1a1a1a" />
          <circle cx="120" cy="240" r="11" fill="#3a3a3a" />
          <circle cx="295" cy="240" r="22" fill="#1a1a1a" />
          <circle cx="295" cy="240" r="11" fill="#3a3a3a" />
          {/* shine line */}
          <path d="M 100 210 L 145 195 L 270 195 L 320 210" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
        </g>
      )}
      {plate && (
        <g>
          <rect x="180" y="216" width="42" height="11" rx="1" fill="#fff" />
          <text x="201" y="225" fontFamily="monospace" fontSize="8" fill="#1a1a1a" textAnchor="middle" fontWeight="700">{plate}</text>
        </g>
      )}
    </svg>
  );
}

function PortraitPlaceholder({ initials = '·', tone = 'warm', gen }) {
  const palettes = {
    warm: ['#d4b89c', '#e2c8ac', '#c4a07a'],
    cool: ['#a8b8c8', '#bccad8', '#8aa0b8'],
    rose: ['#d8b4ac', '#e8c4bc', '#c89890'],
    sage: ['#aab8a0', '#bcc8b4', '#90a088'],
    sand: ['#cebda0', '#dcccae', '#b4a484'],
    moss: ['#9aa890', '#aab8a0', '#7e8c74'],
    fog:  ['#bcb8b0', '#ccc8c0', '#a4a098'],
    ink:  ['#5a5450', '#6a6460', '#48423e'],
  };
  const p = palettes[tone] || palettes.warm;
  const id = `pp-${tone}-${initials}`;
  return (
    <svg viewBox="0 0 200 280" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p[1]} />
          <stop offset="100%" stopColor={p[2]} />
        </linearGradient>
        <radialGradient id={`${id}-l`} cx="0.35" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="200" height="280" fill={`url(#${id})`} />
      <rect width="200" height="280" fill={`url(#${id}-l)`} />
      {/* silhouette */}
      <ellipse cx="100" cy="110" rx="42" ry="48" fill={p[2]} opacity="0.55" />
      <path d="M 30 280 Q 30 200 100 188 Q 170 200 170 280 Z" fill={p[2]} opacity="0.55" />
      <text x="100" y="148" fontFamily="'Instrument Serif', serif" fontStyle="italic" fontSize="44" fill="rgba(255,255,255,0.85)" textAnchor="middle" fontWeight="400">{initials}</text>
    </svg>
  );
}

function WerkstattPlaceholder() {
  return (
    <svg viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="wk-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3a38" />
          <stop offset="100%" stopColor="#1a1a18" />
        </linearGradient>
        <linearGradient id="wk-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a28" />
          <stop offset="100%" stopColor="#444442" />
        </linearGradient>
        <radialGradient id="wk-light" cx="0.5" cy="0.2" r="0.4">
          <stop offset="0%" stopColor="rgba(255,220,160,0.4)" />
          <stop offset="100%" stopColor="rgba(255,220,160,0)" />
        </radialGradient>
      </defs>
      <rect width="500" height="600" fill="url(#wk-bg)" />
      <rect y="380" width="500" height="220" fill="url(#wk-floor)" />
      <rect width="500" height="600" fill="url(#wk-light)" />
      {/* lift / hoist columns */}
      <rect x="60" y="100" width="14" height="380" fill="#c8c8c8" />
      <rect x="426" y="100" width="14" height="380" fill="#c8c8c8" />
      <rect x="60" y="100" width="380" height="20" fill="#a8a8a8" />
      {/* car on lift */}
      <g transform="translate(110, 280)">
        <ellipse cx="140" cy="100" rx="120" ry="8" fill="rgba(0,0,0,0.4)" />
        <path d="M 20 75 L 50 35 Q 70 18 100 15 L 180 15 Q 210 20 230 38 L 260 75 Z" fill="#5a4030" />
        <path d="M 70 38 Q 80 22 100 20 L 145 20 L 152 38 Z" fill="rgba(80,90,110,0.7)" />
        <path d="M 158 38 L 165 20 L 210 22 Q 225 25 235 40 Z" fill="rgba(80,90,110,0.7)" />
        <circle cx="80" cy="82" r="16" fill="#1a1a1a" />
        <circle cx="80" cy="82" r="8" fill="#3a3a3a" />
        <circle cx="218" cy="82" r="16" fill="#1a1a1a" />
        <circle cx="218" cy="82" r="8" fill="#3a3a3a" />
      </g>
      {/* tool cabinet right */}
      <rect x="360" y="430" width="70" height="120" fill="#2a3a4a" />
      <rect x="368" y="440" width="54" height="22" fill="#3a4a5a" />
      <rect x="368" y="468" width="54" height="22" fill="#3a4a5a" />
      <rect x="368" y="496" width="54" height="22" fill="#3a4a5a" />
      <rect x="368" y="524" width="54" height="20" fill="#3a4a5a" />
      {/* tire stack left */}
      <ellipse cx="100" cy="540" rx="26" ry="8" fill="#1a1a1a" />
      <ellipse cx="100" cy="525" rx="26" ry="8" fill="#1a1a1a" />
      <ellipse cx="100" cy="510" rx="26" ry="8" fill="#1a1a1a" />
      <ellipse cx="100" cy="495" rx="26" ry="8" fill="#222" />
      {/* fluorescent lamp glow up top */}
      <rect x="180" y="40" width="140" height="6" fill="#fff8d8" opacity="0.7" />
      <rect x="180" y="42" width="140" height="2" fill="#fff" opacity="0.9" />
    </svg>
  );
}

function FamilyPortraitPlaceholder() {
  // wide family group portrait
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="fp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8dfd0" />
          <stop offset="100%" stopColor="#c4b8a0" />
        </linearGradient>
        <radialGradient id="fp-light" cx="0.5" cy="0.2" r="0.7">
          <stop offset="0%" stopColor="rgba(255,240,210,0.45)" />
          <stop offset="100%" stopColor="rgba(255,240,210,0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#fp-bg)" />
      <rect width="400" height="500" fill="url(#fp-light)" />
      {/* floor shadow */}
      <ellipse cx="200" cy="460" rx="180" ry="20" fill="rgba(0,0,0,0.18)" />
      {/* 5 family silhouettes */}
      {[
        { x: 70,  scale: 0.78, color: '#7a5848' },
        { x: 135, scale: 0.92, color: '#5a4030' },
        { x: 205, scale: 1.0, color: '#2a3548' },
        { x: 275, scale: 0.88, color: '#6a4838' },
        { x: 335, scale: 0.74, color: '#4a3828' },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x}, ${250 - p.scale * 120}) scale(${p.scale})`}>
          {/* head */}
          <ellipse cx="0" cy="40" rx="26" ry="32" fill={p.color} opacity="0.9" />
          {/* body */}
          <path d={`M -55 290 Q -55 110 0 100 Q 55 110 55 290 Z`} fill={p.color} opacity="0.9" />
          {/* face hint */}
          <ellipse cx="0" cy="42" rx="22" ry="28" fill="rgba(255,220,200,0.4)" />
        </g>
      ))}
      {/* light fall on faces */}
      <rect width="400" height="200" fill="url(#fp-light)" />
    </svg>
  );
}

function MapPlaceholder() {
  return (
    <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="450" fill="#e8e4d8" />
      <rect width="600" height="450" fill="url(#map-grid)" />
      {/* Danube */}
      <path d="M -20 60 Q 200 80 320 180 T 620 280" stroke="#a8c0d8" strokeWidth="42" fill="none" opacity="0.7" />
      <path d="M -20 60 Q 200 80 320 180 T 620 280" stroke="#bccfe0" strokeWidth="36" fill="none" opacity="0.8" />
      {/* major roads */}
      <path d="M 0 280 L 600 200" stroke="#fff" strokeWidth="8" />
      <path d="M 0 280 L 600 200" stroke="#d4ccb8" strokeWidth="6" />
      <path d="M 220 0 L 380 450" stroke="#fff" strokeWidth="6" />
      <path d="M 220 0 L 380 450" stroke="#d4ccb8" strokeWidth="4" />
      {/* minor */}
      <path d="M 100 130 L 580 380" stroke="#fff" strokeWidth="3" />
      <path d="M 400 80 L 580 420" stroke="#fff" strokeWidth="3" />
      {/* blocks */}
      <rect x="60" y="320" width="80" height="50" fill="rgba(180,170,150,0.4)" />
      <rect x="180" y="340" width="60" height="60" fill="rgba(180,170,150,0.4)" />
      <rect x="420" y="280" width="90" height="50" fill="rgba(180,170,150,0.4)" />
      <rect x="450" y="350" width="70" height="60" fill="rgba(180,170,150,0.4)" />
      <rect x="80" y="200" width="60" height="40" fill="rgba(180,170,150,0.4)" />
      {/* Park */}
      <rect x="240" y="240" width="100" height="70" fill="rgba(160,190,140,0.5)" rx="4" />
      <text x="290" y="280" fontFamily="serif" fontSize="11" fill="rgba(0,0,0,0.4)" textAnchor="middle" fontStyle="italic">Donaupark</text>
      {/* labels */}
      <text x="160" y="50" fontFamily="serif" fontSize="11" fill="rgba(0,0,0,0.4)" fontStyle="italic">Donau</text>
      <text x="500" y="190" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.45)" letterSpacing="0.1em">WAGRAMER STR.</text>
      {/* pin */}
      <g transform="translate(360, 230)">
        <circle cx="0" cy="40" r="22" fill="rgba(181,74,44,0.2)" />
        <path d="M 0 -10 C -14 -10 -22 0 -22 14 C -22 30 0 50 0 50 C 0 50 22 30 22 14 C 22 0 14 -10 0 -10 Z" fill="var(--accent, #b54a2c)" />
        <circle cx="0" cy="12" r="7" fill="#fff" />
      </g>
      <text x="396" y="246" fontFamily="'Instrument Serif', serif" fontStyle="italic" fontSize="14" fill="#1a1814">Fischer</text>
    </svg>
  );
}

Object.assign(window, { CarPlaceholder, PortraitPlaceholder, WerkstattPlaceholder, FamilyPortraitPlaceholder, MapPlaceholder });

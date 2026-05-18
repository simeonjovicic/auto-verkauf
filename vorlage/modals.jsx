// modals.jsx — Fahrzeug-Detail & Werkstatt-Anfrage

const { useState: useStateM, useEffect: useEffectM } = React;

// ─────────────────────────────────────────────────────────
// VEHICLE DETAIL MODAL
// ─────────────────────────────────────────────────────────
function VehicleModal({ car, onClose }) {
  useEffectM(() => {
    if (!car) return;
    const onKey = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [car, onClose]);

  if (!car) return null;

  return (
    <div className="modal-bg open" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 1 L13 13 M13 1 L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>

        <div className="modal-hero">
          <CarPlaceholder tone={car.img.tone} model={car.img.model} plate={car.img.plate} />
        </div>
        <div className="modal-thumbs">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`t ${i === 0 ? 'active' : ''}`}>
              <CarPlaceholder tone={car.img.tone} model={car.img.model} plate="" />
            </div>
          ))}
        </div>

        <div className="modal-body">
          <div className="sub">{car.variant} · {car.km} km · {car.color}</div>
          <h2>{car.name}</h2>

          <div className="modal-price">
            <div>
              <div className="rate">Kaufpreis · inkl. MwSt.</div>
              <div className="p">{car.price}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="rate">Leasing ab</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22 }}>{car.rate}</div>
            </div>
          </div>

          <div className="spec-grid">
            <div><span className="l">Erstzulassung</span><span className="v">{car.year}</span></div>
            <div><span className="l">Kilometerstand</span><span className="v">{car.km} km</span></div>
            <div><span className="l">Antrieb</span><span className="v">{car.fuel}</span></div>
            <div><span className="l">Getriebe</span><span className="v">{car.transmission}</span></div>
            <div><span className="l">Leistung</span><span className="v">{car.power}</span></div>
            <div><span className="l">Farbe</span><span className="v">{car.color}</span></div>
          </div>

          <div style={{ background: 'var(--paper-2)', padding: '20px 22px', borderRadius: 'var(--r-md)', marginTop: 8 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Inklusive</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.8, fontFamily: 'var(--font-serif)' }}>
              <li>§57a-Begutachtung bis {car.year && parseInt(car.year) + 2}</li>
              <li>12 Monate Fischer-Garantie auf Antriebsstrang</li>
              <li>Frische Servicierung im Haus durchgeführt</li>
              <li>Probefahrt jederzeit möglich</li>
            </ul>
          </div>

          <div className="modal-actions">
            <button className="btn solid">Probefahrt buchen</button>
            <button className="btn">Anfrage senden</button>
          </div>

          <div className="dealer-card">
            <div className="av">
              <PortraitPlaceholder initials="DB" tone="sage" />
            </div>
            <div>
              <div className="nm">David Balogh</div>
              <div className="rl">Verkaufsleitung</div>
            </div>
            <a className="pho" href="tel:+43126342923131">+43 1 263 42 92-31</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SERVICE-ANFRAGE MODAL
// ─────────────────────────────────────────────────────────
function ServiceModal({ open, onClose }) {
  const [type, setType] = useStateM(0);
  const [done, setDone] = useStateM(false);

  useEffectM(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffectM(() => {
    if (open) setDone(false);
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-bg open" onClick={onClose}>
      <div className="req-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 1 L13 13 M13 1 L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>

        {done ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent-soft)', display: 'grid', placeItems: 'center', margin: '0 auto 24px', color: 'var(--accent)', fontSize: 28 }}>✓</div>
            <h3>Danke!</h3>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--ink-soft)', maxWidth: 360, margin: '12px auto 24px' }}>
              Wir melden uns innerhalb von 24 Stunden bei Ihnen zur Terminbestätigung.
            </p>
            <div className="hand" style={{ fontSize: 24 }}>— Marion</div>
            <button className="btn" style={{ marginTop: 24 }} onClick={onClose}>Schließen</button>
          </div>
        ) : (
          <>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Werkstatt · Termin anfragen</div>
            <h3>Wann passt es Ihnen?</h3>
            <p className="lede">
              Schreiben Sie uns kurz worum es geht — Marion meldet sich
              persönlich zur Bestätigung.
            </p>

            <div className="eyebrow" style={{ marginBottom: 10 }}>Was brauchen Sie?</div>
            <div className="service-pick">
              {WERKSTATT_TYPES.map((s, i) => (
                <button key={i} className={type === i ? 'active' : ''} onClick={() => setType(i)}>
                  <span className="ti">{s.ti}</span>
                  <span className="du">≈ {s.du}</span>
                </button>
              ))}
            </div>

            <div className="field-row">
              <div className="field">
                <label>Name</label>
                <input type="text" placeholder="Maria Maier" />
              </div>
              <div className="field">
                <label>Telefon</label>
                <input type="tel" placeholder="+43 660 …" />
              </div>
            </div>

            <div className="field">
              <label>Fahrzeug · Marke &amp; Modell</label>
              <input type="text" placeholder="z. B. Hyundai i30, Bj. 2019, Kennzeichen W-…" />
            </div>

            <div className="field-row">
              <div className="field">
                <label>Wunschtermin</label>
                <input type="date" />
              </div>
              <div className="field">
                <label>Uhrzeit</label>
                <select>
                  <option>Vormittag (8–12)</option>
                  <option>Nachmittag (13–17)</option>
                  <option>Egal</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>Nachricht (optional)</label>
              <textarea rows="3" placeholder="Was ist los? Z. B. Quietschen beim Bremsen…"></textarea>
            </div>

            <button className="submit-btn" onClick={() => setDone(true)}>Termin anfragen</button>

            <div className="req-foot">
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>i</span>
              <span>Lieber telefonisch? <a href="tel:+431263429211" style={{ borderBottom: '1px solid currentColor' }}>+43 1 263 42 92-11</a> · direkt zu Marion.</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { VehicleModal, ServiceModal });

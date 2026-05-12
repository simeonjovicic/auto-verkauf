export function BackgroundGradient() {
  return (
    <div aria-hidden className="absolute inset-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Hero.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        draggable={false}
      />
      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 75% at 50% 45%, transparent 35%, rgba(10,10,10,0.45) 85%, rgba(10,10,10,0.92) 100%)",
        }}
      />
      {/* bottom scrim */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.6) 30%, rgba(10,10,10,0.2) 65%, transparent 100%)",
        }}
      />
      {/* top scrim */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

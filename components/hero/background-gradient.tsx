export function BackgroundGradient() {
  return (
    <div aria-hidden className="absolute inset-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/fischerauto/team.png"
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
            "radial-gradient(ellipse 95% 75% at 58% 45%, transparent 30%, rgba(10,10,10,0.52) 82%, rgba(10,10,10,0.92) 100%)",
        }}
      />
      {/* bottom scrim */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%]"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.5) 38%, rgba(10,10,10,0.12) 74%, transparent 100%)",
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

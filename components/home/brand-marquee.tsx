export function BrandMarquee() {
  const brands = [
    { name: "Ferrari", icon: "https://cdn.simpleicons.org/ferrari/ffffff" },
    { name: "Lamborghini", icon: "https://cdn.simpleicons.org/lamborghini/ffffff" },
    { name: "Porsche", icon: "https://cdn.simpleicons.org/porsche/ffffff" },
    { name: "BMW", icon: "https://cdn.simpleicons.org/bmw/ffffff" },
    { name: "Mercedes-Benz", icon: "https://cdn.worldvectorlogo.com/logos/mercedes-benz-5.svg" },
  ];

  // Duplicate the array to ensure seamless infinite scrolling
  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="overflow-hidden border-b border-line bg-ink py-12 sm:py-16">
      <div className="relative mx-auto flex max-w-full overflow-hidden">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent sm:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent sm:w-48" />

        {/* Marquee Track */}
        <div className="flex w-max min-w-full shrink-0 animate-marquee items-center gap-16 px-8 sm:gap-32 sm:px-16">
          {marqueeItems.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-6 opacity-60 transition-opacity hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.icon}
                alt={`${brand.name} Logo`}
                className="h-10 w-auto object-contain sm:h-12"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <span className="serif text-xl tracking-widest text-bone sm:text-2xl">
                {brand.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

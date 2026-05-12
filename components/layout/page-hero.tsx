type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
};

export function PageHero({ eyebrow, title, lede }: Props) {
  return (
    <section className="border-b border-line bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-1">
            <p className="eyebrow text-mute">{eyebrow}</p>
          </div>
          <div className="lg:col-span-8">
            <h1 className="serif text-balance text-5xl leading-[1.05] text-bone sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            {lede ? (
              <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-mute sm:text-xl">
                {lede}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

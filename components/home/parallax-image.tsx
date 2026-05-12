type Props = {
  src: string;
  srcAvif: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ParallaxImage({
  src,
  srcAvif,
  alt,
  width,
  height,
  className,
}: Props) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <picture>
        <source srcSet={srcAvif} type="image/avif" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-full w-full object-cover select-none"
        />
      </picture>
    </div>
  );
}

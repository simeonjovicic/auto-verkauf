import type { Gradient } from "@/lib/vehicles";

export const GRADIENT_COLORS: Record<Gradient, string> = {
  "hero-teal": "#7ec8c8",
  "hero-cream": "#e8d49a",
  "hero-blush": "#d99891",
  "hero-sage": "#a8c4a2",
  "hero-sky": "#9bb8d4",
  "hero-slate": "#8a8d94",
};

/**
 * Hero rendering mode.
 * - `photo`  : full-bleed source images with vignette + scrim (works with any photography).
 * - `cutout` : transparent-background PNGs centered on the gradient
 *              (requires a `<slug>-cutout.png` per car; generate via remove.bg or rembg).
 *
 * Default `photo` — swap to `cutout` once cutout PNGs land in `public/cars/`.
 */
export const HERO_MODE: "photo" | "cutout" = "cutout";

# Motion

Animation library: **GSAP 3** + **ScrollTrigger** + **Flip**, smooth scroll via **Lenis**.

All motion respects `prefers-reduced-motion: reduce`. The reduced-motion branch is
the same DOM, minus the GSAP timelines — content remains accessible without
animation.

## Hero scroller — `components/hero/hero-scroller.tsx`

The reference video lives at `public/reference/hero-animation.mp4`. The hero is a
scroll-pinned, scrub-driven sequence of cars over a per-car gradient backdrop.

- **Pin**: `ScrollTrigger.create({ trigger: section, start: "top top", end: "+=N*innerHeight*perCar", pin: true, scrub: 1 })`
  - `perCar = 1` on desktop (`min-width: 768px`)
  - `perCar = 0.6` on mobile — same animation, shorter scroll distance
- **Per-frame logic** in `onUpdate(self)`:
  - `p = self.progress * (N-1)` → continuous index across the car array
  - `i = floor(p)`, `t = p - i` → outgoing car index and 0..1 crossfade factor
  - Outgoing car: `translate3d(-15*t vw, 0, 0)`, `opacity 1 - t`
  - Incoming car: `translate3d(15*(1-t) vw, 0, 0)`, `opacity t`
  - Text panels: same crossfade with a ±20px Y offset
  - Background: `gsap.utils.interpolate(c1, c2, t)` between the two cars'
    gradient colors, set as `--bg-color` on the gradient div
- Direct DOM mutation (`el.style.transform = ...`) rather than `gsap.set()` —
  this keeps the per-frame work minimal at scrub time.
- `gsap.matchMedia` swaps the desktop / mobile triggers when the viewport
  crosses 768px. Each cleanup goes through `gsap.context().revert()`.

The `HERO_MODE` flag in `components/hero/constants.ts` switches between
`"photo"` (current — full-bleed background image per car) and `"cutout"`
(centered transparent PNG with drop-shadow) without changing the scroll logic.

## Smooth scroll — `components/smooth-scroll.tsx`

Lenis is initialised once at the root; its scroll events drive `ScrollTrigger`
and its `raf` runs through the GSAP ticker so everything stays in sync:

```ts
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

The instance is exposed as `window.__lenis` so the mobile menu can call
`.stop()` / `.start()` while the overlay is open.

## Mobile menu — `components/nav/mobile-menu.tsx`

Fullscreen overlay (`z-40`, sits behind the `z-50` global header). On open:

- `body.style.overflow = "hidden"` + `window.__lenis?.stop()` prevents background
  scroll
- Background fades in (`opacity 0 → 1`, 0.35s)
- Nav links rise in with `stagger 0.05`, `y: 24 → 0`, `opacity 0 → 1` (0.4s
  each, `power3.out`)
- Escape key closes; focus returns to the menu button

## Parallax image — `components/home/parallax-image.tsx`

Inside the philosophy and unternehmen sections. The image moves vertically
across its own scroll window:

```ts
gsap.fromTo(img, { y: -amount }, {
  y: amount, ease: "none",
  scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: 1 },
});
```

The image is wrapped in `overflow-hidden` and `scale-110` so the parallax
movement never reveals the edges.

## Inventory grid — `components/vehicles/vehicle-grid.tsx`

Filter / sort uses **GSAP Flip** for ergonomic reordering:

1. Just before `setFilter` / `setSort`, the click handler calls
   `Flip.getState(gridRef.current.children, { props: "opacity" })` and stores
   the snapshot in a ref.
2. After React re-renders the filtered list, `useLayoutEffect` calls
   `Flip.from(state, { duration: 0.55, ease: "power3.out", absolute: true, stagger: 0.03, onEnter, onLeave })`.
3. `onEnter` fades + scales new tiles in from 0.94. `onLeave` fades + scales
   removed tiles out. The snapshot ref is cleared after each run.

Under reduced motion the snapshot ref is dropped before applying — React's own
layout swap takes over.

## Cleanup

Every component that creates ScrollTriggers wraps its setup in
`gsap.context(() => { ... }, scopeRef)` and returns `ctx.revert()` from
`useEffect`. This is what lets the hero rebuild correctly under
`gsap.matchMedia` viewport changes and on route navigation.

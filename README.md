# Meyer Motorsport

Vienna supercar dealership site. Static export, self-hosted, German only.

- Next.js 16 App Router · React 19 · Tailwind v4
- GSAP 3 (ScrollTrigger, Flip) + Lenis smooth scroll
- react-hook-form + zod (contact form → mailto)
- No backend: `output: 'export'`, `images.unoptimized: true`

## Develop

```bash
npm install
npm run dev         # http://localhost:3000
npm run fetch:cars  # re-download + re-encode car images (writes lib/vehicles.ts)
```

## Build & deploy

```bash
npm run build       # outputs static site to ./out
```

Copy `./out` to the web root on the target server. The build emits a fully-static
tree — `index.html` per route, hashed assets under `/_next/`, raw images under
`/cars/`.

### nginx config

```nginx
server {
  listen 80;
  listen [::]:80;
  server_name meyer-motorsport.at www.meyer-motorsport.at;
  return 301 https://www.meyer-motorsport.at$request_uri;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name www.meyer-motorsport.at;

  root /var/www/meyer-motorsport/out;
  index index.html;

  # SSL cert paths (set via certbot or similar)
  # ssl_certificate     /etc/letsencrypt/live/www.meyer-motorsport.at/fullchain.pem;
  # ssl_certificate_key /etc/letsencrypt/live/www.meyer-motorsport.at/privkey.pem;

  # Compression
  gzip on;
  gzip_types text/css application/javascript image/svg+xml application/json;
  gzip_min_length 1024;
  # brotli on; brotli_types text/css application/javascript image/svg+xml;

  # Long-lived caching for hashed Next assets
  location /_next/static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    access_log off;
  }

  # Long-lived caching for car images (filename changes via re-encode if needed)
  location /cars/ {
    expires 30d;
    add_header Cache-Control "public";
  }

  # Trailing-slash static export → drop .html from request URI
  location / {
    try_files $uri $uri.html $uri/index.html =404;
  }

  # Joomla → Next 301 redirects (see below)
  include /etc/nginx/conf.d/meyer-motorsport.redirects.conf;

  # Security headers
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  add_header Permissions-Policy "interest-cohort=()" always;
}
```

### Old Joomla URL → new path redirects

Save as `/etc/nginx/conf.d/meyer-motorsport.redirects.conf`. The exact source
URLs need to be confirmed against analytics or a crawl of the live Joomla site
before launch — placeholders below show the rewrite pattern.

```nginx
# Section landings
rewrite ^/de/fahrzeuge\.html$              /fahrzeuge/    permanent;
rewrite ^/de/aktuelle-fahrzeuge\.html$     /fahrzeuge/    permanent;
rewrite ^/de/unternehmen\.html$            /unternehmen/  permanent;
rewrite ^/de/kontakt\.html$                /kontakt/      permanent;
rewrite ^/de/impressum\.html$              /impressum/    permanent;
rewrite ^/de/vips\.html$                   /vips/         permanent;
rewrite ^/de/stunts\.html$                 /stunts/       permanent;

# Joomla "index.php?option=…" patterns → /fahrzeuge/
if ($args ~* "option=com_content") {
  rewrite ^/index\.php$ /fahrzeuge/? permanent;
}

# Drop legacy language prefix
rewrite ^/de/?$    /     permanent;
rewrite ^/de/(.+)$ /$1   permanent;

# Individual vehicle detail pages — confirm slugs from Joomla DB before launch
# rewrite ^/de/fahrzeuge/ferrari-488-spider\.html$ /fahrzeuge/ferrari-488-spider/ permanent;

# Catch-all .html → no-trailing-slash
rewrite ^(/.+)\.html$ $1/ permanent;
```

### Sitemap / robots

`app/sitemap.ts` and `app/robots.ts` emit `/sitemap.xml` and `/robots.txt` at
build time. Submit `https://www.meyer-motorsport.at/sitemap.xml` to Google
Search Console after launch.

## Constraints (carry forward, don't break)

- `output: 'export'` — no API routes, no Server Actions, no middleware
- `next/image` runs with `images.unoptimized: true`; use `<picture>` + AVIF/JPG
- Contact form posts only via `mailto:` (built client-side from form values)
- Redirects live in nginx, NOT `next.config.ts`
- Dynamic routes (`/fahrzeuge/[slug]`) require `generateStaticParams`
- German only

See `CLAUDE.md` for the full operating brief and `MOTION.md` for animation
notes.

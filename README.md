# Gwave Innovation — Website

Marketing site for **Gwave Innovation Pvt. Ltd.** — a process-driven electronics
manufacturing (PCBA job work) and plastic injection molding company.

Built with [Astro](https://astro.build), Tailwind CSS v4, and Preline UI.
Adapted from the open-source [ScrewFast](https://github.com/mearashadowfax/ScrewFast)
template (MIT).

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Build & preview

```bash
pnpm build      # static output to dist/
pnpm preview
```

Deploy `dist/` to Vercel or Netlify (config is already in the repo).

## Where things live

| What | File |
| --- | --- |
| Brand colors | `src/assets/styles/global.css` — the `--color-yellow-*` / `--color-orange-*` scales are mapped to Gwave blues |
| Logo | `src/components/BrandLogo.astro` (inline SVG mark + wordmark) and the favicon at `src/images/icon.svg` |
| Navigation & footer links | `src/utils/navigation.ts` |
| Site metadata / SEO | `src/data_files/constants.ts` |
| Home page | `src/pages/index.astro` |
| Services page | `src/pages/services.astro` |
| Contact page | `src/pages/contact.astro` + `src/components/sections/misc/ContactSection.astro` |
| USP cards | `src/data_files/features.json` |
| FAQ | `src/data_files/faqs.json` |
| Icons | `src/components/ui/icons/icons.ts` |

## Before launch — TODO

- [ ] **Logo:** drop your official artwork in and either replace the inline SVG in
      `BrandLogo.astro` with `<img src="/gwave-logo.png" />`, or keep the current
      vector recreation.
- [ ] **Favicon PNGs:** replace `src/images/icon.png`, `icon-maskable.png`, and the
      Open Graph `src/images/social.png` (1200×630) with branded artwork. The SVG
      favicon (`src/images/icon.svg`) is already on-brand.
- [ ] **Photos:** swap the placeholder images in `src/images/` for real photos of your
      SMT line / PCBs / molding (referenced in `index.astro` and `services.astro`).
- [ ] **Contact details:** replace `[EMAIL]`, `[PHONE]`, `[ADDRESS, CITY, STATE PIN]`,
      and business hours in `ContactSection.astro` and `FooterSection.astro`.
- [ ] **Contact form:** add your free [Web3Forms](https://web3forms.com) access key in
      `ContactSection.astro` (`YOUR_WEB3FORMS_ACCESS_KEY`).
- [ ] **Domain:** confirm `SITE.url` in `constants.ts` and `site:` in `astro.config.mjs`.
- [ ] **Social:** update the LinkedIn URL (or add more) in `navigation.ts`.

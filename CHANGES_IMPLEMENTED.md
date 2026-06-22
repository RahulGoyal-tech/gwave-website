# Gwave Innovation — Changes Implemented

This build applies the website modifications brief. Summary of what changed and the few items that still need your input.

## Done

**Logo (correct artwork everywhere)**
- `src/components/BrandLogo.astro` rewritten to use the official logo. It now shows the navy wordmark on light backgrounds and the white wordmark on dark — automatically, in both header and footer. The old hand-drawn placeholder SVG (with the mismatched "Gwave" bold / "Innovation" light weights) is gone.
- Official files added: `public/gwave_logo_navy.png`, `public/gwave_logo_white.png`, `public/gwave_logo_mark.png`.
- Favicon / app icons / OG share image regenerated from the real mark: `src/images/icon.svg`, `icon.png`, `icon-maskable.png`, `social.png`, and `public/favicon.ico`.

**Typography (Outfit, consistent)**
- Outfit is loaded in `src/layouts/MainLayout.astro` and set as the default font in `src/assets/styles/global.css` (`--font-sans` + a base rule), so the whole site uses one consistent typeface.
- The brand name now renders in one consistent weight wherever it appears (no more bold/light split).

**Icons**
- The `badge-check` icon used by the homepage tabs and the "Skilled Workmanship" card is defined and renders correctly. (The template's "yellow" tokens are already mapped to Gwave blue, so icon colours are on-brand.)

**Content**
- Hero, About, and closing CTA rewritten (`src/pages/index.astro`).
- New **Mission & Vision** cards and a **Philosophy** band added to the homepage.
- "Portal / self-serve ordering" language removed from the homepage and services page.
- **Services page** (`src/pages/services.astro`) rebuilt into **six clearly separate service cards** — Component Assembly (with IC Programming + Board Testing shown as sub-services), Box Build Assembly, PCB Sourcing, **3D Printing (added)**, Injection Molding, and **Component Sourcing marked "Coming soon."** Each card lists what you provide, volume, and a Request-a-Quote action.
- A **"Simple, transparent ordering"** 4-step section replaces the old portal section, including the dedicated-WhatsApp-group transparency note.
- "8 services" stat reconciled to **6** on both pages.
- SEO/OG descriptions in `src/data_files/constants.ts` updated (no longer claim active component sourcing).

**Contact (your details)**
- `ContactSection.astro` and `FooterSection.astro` now show: **sales@gwaveinnovation.com**, **+91 92117 05237** (`tel:+919211705237`), **Mohali, Punjab, India**, and business hours.
- Added a **Service dropdown** to the contact form.

## Still needs your input

1. **Section photos.** The large photos in `src/images/` are still the template's stock images — these need to be replaced with your real photos (SMT line, populated PCBs, IC programming, box build, injection-molding machine, 3D printer). Drop your images in `src/images/` using the same filenames, or update the imports in `index.astro`.
2. **Contact form delivery.** The form uses Web3Forms. Create a free key at https://web3forms.com using the **sales@gwaveinnovation.com** inbox and replace `YOUR_WEB3FORMS_ACCESS_KEY` in `ContactSection.astro`.
3. **Confirm:** full postal address (for footer + map), exact business hours (currently "Mon–Sat, 9:30 AM – 6:30 PM"), GST number (show or not), and social links.

## Run locally
```
pnpm install
pnpm dev      # preview
pnpm build    # production build (verified passing)
```

---

## Round 2 updates

- **Logo redone as crisp vector** (`src/components/BrandLogo.astro`): the small black raster is replaced with a sharp SVG of the arc mark + "Gwave Innovation" wordmark in a single consistent weight. It is brand-navy on light backgrounds and white on dark — switching reliably in both navbar and footer. (The PNG logos remain in `public/` and are used for the favicon / OG image.)
- **Homepage "Two divisions" section** (`src/pages/index.astro`) now has **exactly two tabs — Electronics and Injection Molding** — and uses two new on-brand graphics (`src/images/electronics-division.png`, `injection-molding.png`) instead of the construction stock photos.
- **Contact**: the "Visit our facility" block is removed; it now simply shows **Location — Delhi, India**. Footer location updated to **Delhi, India** as well.

# SATVA Makhana — Website Codebase

A complete, production-ready marketing and B2B lead-gen website for **SATVA Foods** — a premium Makhana (fox nuts) export brand originating from Bihar, India.

Built with **Next.js 14 (App Router)**, **Tailwind CSS 3**, and **TypeScript**. Exports to fully static HTML — deployable to Vercel, Netlify, GitHub Pages, or any CDN with zero backend required.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, Static Export) |
| Styling | Tailwind CSS 3 + custom design tokens |
| Language | TypeScript 5 |
| Fonts | Playfair Display + Inter (via `next/font/google`) |
| Deployment | Vercel (recommended) / Netlify / GitHub Pages |

---

## Project Structure

```
satva-web/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, Navbar/Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind base + custom component classes
│   ├── about/page.tsx
│   ├── products/
│   │   ├── page.tsx        # Products listing
│   │   └── [slug]/page.tsx # Product detail (SSG)
│   ├── export/page.tsx     # Export & B2B page
│   ├── why-makhana/page.tsx
│   ├── quality/page.tsx
│   ├── contact/page.tsx    # Contact form (client component)
│   └── faq/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with scroll-aware transparency
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx      # Polymorphic button/link component
│   │   ├── SectionHeading.tsx
│   │   └── ProductCard.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TrustBar.tsx
│       ├── FeaturedProducts.tsx
│       ├── BrandStory.tsx
│       ├── HealthBenefits.tsx
│       ├── B2BSection.tsx
│       ├── CertificationsSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── NewsletterSection.tsx
│       └── FAQAccordion.tsx
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   └── products.ts         # Product data, FAQs, testimonials, nav
├── public/                 # Static assets (images, favicon, OG image)
│   └── images/             # Product photos go here
├── tailwind.config.ts      # Full SATVA brand design system
├── next.config.js          # Static export configuration
├── tsconfig.json
└── postcss.config.js
```

---

## Getting Started

### 1. Clone or download this repository

```bash
git clone https://github.com/YOUR_USERNAME/satva-web.git
cd satva-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
```

The `out/` directory contains the fully static site, ready for deployment.

---

## Adding Product Images

Product images are referenced from the `/public/images/` directory. Add your product photos here:

```
public/images/
├── product-premium-white.jpg
├── product-jumbo.jpg
├── product-organic.jpg
├── product-roasted-salted.jpg
├── product-flour.jpg
└── og-image.jpg          (1200×630px — for social media sharing)
```

**Recommended image specs:**
- Format: JPEG (compressed) or WebP
- Dimensions: minimum 800×600px (4:3 ratio for product cards)
- File size: under 300KB per image for performance
- Tools: [Squoosh.app](https://squoosh.app) or [TinyPNG](https://tinypng.com)

---

## Customisation Guide

### Update business details

Edit `lib/products.ts` to update:
- Product catalogue, grades, pricing, MOQs
- FAQ answers
- Testimonials
- Navigation items

Edit `components/layout/Footer.tsx` to update email addresses, phone numbers, and footer links.

Edit `app/layout.tsx` to update:
- `metadataBase` URL (change `satvafoods.com` to your actual domain)
- Default SEO title and description

### Update contact form

The contact form in `app/contact/page.tsx` uses a local `useState` — in production, connect it to one of:

- **Netlify Forms** — Add `netlify` attribute to the `<form>` tag. Zero config on Netlify hosting.
- **Formspree** — Replace the `handleSubmit` with a `fetch` POST to `https://formspree.io/f/YOUR_ID`
- **EmailJS** — Client-side email sending, no backend needed
- **Custom API route** — Add a Next.js API route `/app/api/contact/route.ts`

### Update WhatsApp number

Search for `91XXXXXXXXXX` across all files and replace with your actual WhatsApp business number (country code + number, no spaces or hyphens).

### Brand colours

Colours are defined in `tailwind.config.ts` under `theme.extend.colors.satva`. All component classes in `globals.css` reference these tokens — change the hex values there to re-theme the entire site.

---

## Deployment

### Option A — Vercel (Recommended, Free tier available)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repository — Vercel auto-detects Next.js
4. Set Framework: **Next.js** (auto-detected)
5. Deploy — live in ~2 minutes
6. Add your custom domain in Vercel Project Settings → Domains

> **Note:** For Vercel, you can optionally remove `output: 'export'` from `next.config.js` to enable server-side rendering, image optimisation, and API routes (free on Vercel's Edge Network).

### Option B — Netlify

1. Push repository to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy

Add a `netlify.toml` for custom redirects if needed:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option C — GitHub Pages

1. In `next.config.js`, add `basePath: '/your-repo-name'` if not using a custom domain
2. Build: `npm run build`
3. Push the `out/` directory to the `gh-pages` branch

Automate with GitHub Actions:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Option D — Any CDN / Static Host

Run `npm run build`, upload the entire `out/` directory to:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages

---

## SEO Checklist (Pre-Launch)

- [ ] Update `metadataBase` in `app/layout.tsx` to your live domain
- [ ] Create `public/og-image.jpg` (1200×630px) for social sharing
- [ ] Create `public/favicon.ico` and `public/apple-touch-icon.png`
- [ ] Add Google Search Console verification meta tag in `app/layout.tsx`
- [ ] Update all product image `alt` text in `lib/products.ts`
- [ ] Test Open Graph preview at [opengraph.xyz](https://opengraph.xyz)
- [ ] Verify mobile performance at [pagespeed.web.dev](https://pagespeed.web.dev)

---

## Post-Launch Optimisation Roadmap

**Month 1 — Foundation**
- Connect contact form to your email/CRM
- Add Google Analytics 4 via `next/script`
- Set up Google Search Console and submit sitemap
- Replace placeholder product images with real photography

**Month 2 — Content & SEO**
- Add a blog / resources section for Makhana SEO content
- Create landing pages for each target market (UAE importers, UK distributors, US Amazon sellers)
- Add structured data (JSON-LD) for products and FAQ pages

**Month 3 — Conversion**
- Add a live chat widget (Tidio, Crisp, or WhatsApp floating button)
- Implement email marketing integration (Mailchimp, ConvertKit)
- A/B test hero headline and CTA copy
- Add trust signals: actual certification badge images, founder photo, farm photos

---

## Environment Variables

No environment variables are required for the base static site. If you add dynamic features, create `.env.local`:

```bash
# Contact form service
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Email service (server-side only — don't expose keys client-side)
SMTP_HOST=smtp.yourprovider.com
SMTP_USER=your@email.com
SMTP_PASS=yourpassword
```

---

## License

This codebase is proprietary to SATVA Foods. All rights reserved.

---

*Built with Next.js 14 + Tailwind CSS 3 + TypeScript*

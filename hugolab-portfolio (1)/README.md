# HügoLab — Portfolio (Next.js + Tailwind + Framer Motion)

A clean, bilingual (FR/EN) portfolio scaffold for HügoLab, ready for local dev and one‑click deployment to Vercel.

## Tech
- Next.js 14 (App Router)
- React 18
- TailwindCSS (dark mode class-based)
- Framer Motion (animations)
- Fully client-side homepage with language + theme toggles

## Structure
```
hugolab-portfolio/
├─ app/
│  ├─ globals.css
│  ├─ layout.jsx
│  ├─ page.jsx        # renders the Portfolio component
│  └─ Portfolio.jsx   # your provided component (editable)
├─ public/
│  ├─ favicon.ico
│  └─ robots.txt
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ .gitignore
```

## Quickstart (Local)
```bash
# 1) Install dependencies
npm install

# 2) Run dev server
npm run dev

# 3) Open http://localhost:3000
```
> If you see build errors about Tailwind or framer-motion, ensure Node 18+ and re-install.

## Deploy to Vercel
1. Create a GitHub repo and push this folder.
2. On vercel.com, **New Project** → import the repo.
3. Framework preset: **Next.js**. Build command is `next build` (default), output is `.next`.
4. Add a custom domain when ready (optional).
5. After deployment, update the `metadataBase` in `app/layout.jsx` to your final domain.

## Customization
- Edit text (FR/EN) inside `STRINGS` within `app/Portfolio.jsx`.
- Replace project cards (images, links) in `PROJECTS` array.
- Update socials/contact in `SOCIALS` & `CONTACT` constants.
- Swap OG / favicon in `/public` for brand consistency.

## Notes
- The homepage is a client component (due to framer-motion + UI state).
- Dark mode is toggled by adding/removing the `dark` class on `<html>` (already wired).
- Images use Unsplash placeholders; replace with your real assets or a CDN.

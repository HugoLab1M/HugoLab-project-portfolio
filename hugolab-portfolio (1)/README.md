# HügoLab — Maquette “La Seiche”

Next.js implementation of the La Seiche concept page with a red & white art direction, built with Tailwind CSS and ready for direct deployment on Vercel.

## Tech
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Next/Image with remote Unsplash support

## Structure
```
hugolab-portfolio/
├─ app/
│  ├─ globals.css        # Tailwind base styles + font imports
│  ├─ layout.jsx         # Global metadata + body defaults
│  ├─ MaquetteLaSeiche.jsx
│  └─ page.jsx           # Server component that renders the maquette
├─ public/
│  ├─ favicon.ico
│  └─ robots.txt
├─ next.config.mjs       # Remote image domains
├─ tailwind.config.js    # Custom color palette + shadows
├─ postcss.config.js
├─ package.json
└─ .gitignore
```

## Run locally
```bash
# 1) Install dependencies
npm install

# 2) Launch the dev server
npm run dev

# 3) Visit http://localhost:3000
```
> Requires Node.js 18+. Stop any other process on port 3000 before running the dev server.

## Staying in sync with GitHub
```bash
# Fetch the latest commits from GitHub
git fetch origin

# Switch to the feature branch (replace <branch> if needed)
git checkout <branch>

# Or, if you already have the branch checked out, pull the newest work
git pull origin <branch>
```
After reviewing the changes locally, create commits as usual and push them back with:
```bash
git push origin <branch>
```

## Deploying to Vercel
1. Ensure the branch you want to deploy is pushed to GitHub.
2. In the Vercel dashboard, select **New Deployment** (or wait for the auto-deploy triggered by your push).
3. Framework preset: **Next.js**. The default commands (`npm install`, `npm run build`) already work with this repo.
4. Once the build finishes, promote the deployment to production if required.

## Customization checklist
- Update copy, CTAs, and contact channels inside `app/MaquetteLaSeiche.jsx`.
- Swap placeholder images by editing the `standHighlights` and hero image URLs.
- Adjust colors and gradients through `tailwind.config.js` and `app/globals.css`.
- Replace favicon/robots under `public/` as needed.

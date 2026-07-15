# DICE — Static Content Guide

This site is a **fully static frontend-only React app**. No backend, no API calls, no database.
All displayed content lives in `/src/data/` as plain JavaScript objects. Deployable to Vercel, Netlify, GitHub Pages, or any static host.

## Where content lives

| File | What it controls |
|---|---|
| `src/data/team.js` | Core team members (name, role, photo, socials) |
| `src/data/faculty.js` | Faculty coordinators |
| `src/data/events.js` | Event cards on the Events rail |
| `src/data/gallery.js` | Gallery masonry photos |
| `src/data/features.js` | "What makes DICE" feature cards |
| `src/data/site.js` | Global config: club name, contact email, socials |

## How to add a real photo

1. Drop your file in `/public/images/team/` (or `/faculty/`, `/events/`, `/gallery/`)
2. Open the matching data file (e.g. `src/data/team.js`)
3. Change `photo: null` → `photo: "/images/team/aditi.jpg"`
4. Done. The gradient placeholder auto-hides when a real photo is set.

You can also use full URLs:  `photo: "https://your-cdn.com/aditi.jpg"`

## How to update team info

Edit `src/data/team.js`. Each entry:
```js
{
  name: "Aditi Sharma",
  role: "President",
  photo: "/images/team/aditi.jpg",
  placeholderLabel: "core-team-1.jpg", // fallback label if no photo
  socials: {
    instagram: "https://instagram.com/aditi",
    linkedin:  "https://linkedin.com/in/aditi",
    github:    "https://github.com/aditi",
  },
},
```

## Build / Deploy

```bash
cd frontend
yarn install
yarn build      # → produces /build folder for static deployment
```

Then upload the `frontend/build/` folder to:
- **Vercel** — `vercel --prod`
- **Netlify** — drag-drop or `netlify deploy --prod`
- **GitHub Pages** — push `build/` contents to a `gh-pages` branch
- **Any static host** — serve the `build/` directory

## Backend

Ignored. The `/backend` folder is not used by the site.

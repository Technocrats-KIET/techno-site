# Technocrats Club Website

Official site for the Technocrats Club at KIET — domains, events, achievements, team, and resources.

## Tech stack

- **React 18** + **react-router-dom 6** (lazy-loaded routes)
- **Vite 5** (dev server + Rollup production build)
- **Tailwind CSS** (installed; used sparingly — most styles live in CSS Modules)
- **lottie-web** for the home-page animation
- **@emailjs/browser** for the contact form
- Deployed on **Vercel** (`vercel.json` defines cache headers for `.webp` and `/assets/*`)

## Local development

Requires **Node 20** (see `.nvmrc`) and **bun** as the package manager.

```bash
bun install
bun run dev       # http://localhost:3000
bun run build     # → dist/
bun run preview   # serve the built bundle locally
```

## Project layout

```
techno-site/
├── index.html              # Vite entry (loads /src/index.jsx)
├── vite.config.js
├── public/                 # Static assets served from /
│   ├── Achievements/  Contact/  Courses/  Domain/
│   ├── Events/  Gallery/  Home/  Team/  Testimonials/
│   └── common/             # shared images (logo, gradients, etc.)
└── src/
    ├── index.jsx           # router + lazy route registration
    ├── App.jsx             # layout shell (Header / Outlet / Footer)
    ├── Components/         # reusable presentational pieces
    │   ├── Header/  Footer/  Card/
    │   ├── TeamCard/  CourseCard/  Domaincard/
    │   ├── GalleryCard/  Testicard/  Videocard/
    │   ├── ResourceCard/  Aboutdetcard/  AchievementCard/
    ├── Pages/              # route-level components
    │   ├── Home/  About/  Team/  Contact/
    │   ├── Domain/  Resource/  Courses/  Videos/  player/
    │   ├── EventPage/  Gallery/  Testimonials/  TeamSection/
    │   ├── Achievement/  Hackathons/  Internship/
    │   ├── Hackers/        # /hackers/:name event carousel
    │   └── Registration/
    ├── data/               # page data, kept out of components
    │   ├── team.js  courses.js  hackers.js
    │   ├── achievements.js  testimonials.js  domains.js
    ├── hooks/
    │   └── useMobileMenu.js
    └── animation.json      # Lottie data, lazy-loaded on /
```

**Conventions**

- React components live in PascalCase folders and use the `.jsx` extension.
- Each component pairs with a `.module.css` (CSS Modules) — kebab-case classes inside, camelCase access in JSX.
- Page-level data (team rosters, course catalog, event lists) lives in `src/data/` rather than inline in components. Add a new entry → edit the data file, not the JSX.
- All assets are referenced by absolute path from `public/` (e.g. `/Team/2k26 core/Gaurang.webp`). No imports of binary assets from `src/`.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/team` | Team rosters (founders + cores by year) |
| `/event` | Past events |
| `/achievement` | Hub: hackathons + internships |
| `/achievements/hackathons` | Hackathon wins |
| `/achievements/internships` | Industry internships |
| `/hackers/:name` | Per-event carousel |
| `/course?c=<domain>` | Course playlist for a domain |
| `/resource` | Domain entry-points → courses |
| `/videos`, `/video?id=<playlist>` | YouTube embed wrapper |
| `/contact` | Contact form (EmailJS) |
| `/register` | Registration |

## Deployment

Pushed to `main` → Vercel auto-deploys with `bun run build`. Output is in `dist/`. SPA fallback is handled by Vercel's React-app preset.

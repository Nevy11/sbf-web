# Smart Blossoming Foundation — Website

Official website for [Smart Blossoming Foundation](https://smartblossomingfoundation.pages.dev/), a community-centred organisation creating safe spaces for young people to heal emotionally, grow mentally, build confidence, and live with purpose.

**Live site:** [https://smartblossomingfoundation.pages.dev/](https://smartblossomingfoundation.pages.dev/)

## About the project

This is a React single-page application built with Vite and TypeScript. It serves as the public-facing home for SBF — sharing the foundation's story, programs, voices, and ways to get involved — while also providing a protected member dashboard backed by Supabase.

The product experience is rooted in three pillars:

- **Heal** — emotional wellbeing and psychological safety
- **Grow** — learning, skills, and personal development
- **Blossom** — purpose, confidence, and community contribution

## Features

### Public website

- Hero carousel with foundation messaging
- Thematic stories section (growth themes with expandable cards)
- Case stories — "Stories of Becoming"
- About Us and founder spotlight (Hannet Paul)
- Voices That Inspire — mentor and speaker highlights
- Our Journey So Far — mentorship, career skills, and school outreach
- Donate, Volunteer, Contact, and Events & Programs pages
- Privacy, Terms of Service, and Safeguarding policy pages
- Responsive layout with mobile navigation

### Member area

- Supabase authentication (sign up / sign in)
- Protected dashboard with Heal, Grow, and Blossom views

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React 19, TypeScript |
| Build tool | Vite |
| Routing | React Router |
| Styling | Global CSS + CSS Modules |
| Icons | Lucide React |
| Auth & data | Supabase |
| Hosting | Cloudflare Pages |
| Deploy CLI | Wrangler |

## Project structure

```text
public/               # Static assets (images, favicon, _redirects)
src/
  components/         # Shared UI (SiteHeader, ProtectedRoute, etc.)
  lib/                # Supabase client and utilities
  pages/              # Route-level page components
  App.tsx             # Route definitions
  App.css             # Global styles
  main.tsx            # Application entry point
supabase/
  config.toml         # Supabase local/project config
  migrations/         # Database migrations
wrangler.toml         # Cloudflare Pages project config
```

## Prerequisites

- Node.js 18+
- Yarn
- A Supabase project (for auth/dashboard features)
- A Cloudflare account (for deployment)

## Getting started

### 1. Clone and install

```bash
git clone <repository-url>
cd sbf-web
yarn install
```

### 2. Environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run locally

```bash
yarn dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start the Vite development server |
| `yarn build` | Type-check and build for production (`dist/`) |
| `yarn preview` | Preview the production build locally |
| `yarn lint` | Run ESLint |
| `yarn deploy` | Build and deploy to Cloudflare Pages |

## Routes

| Path | Page |
|------|------|
| `/` | Landing page |
| `/events-programs` | Programs & events |
| `/contact` | Contact form |
| `/donate` | Donation information |
| `/volunteer` | Volunteer opportunities |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/safeguarding-policy` | Safeguarding policy |
| `/login` | Sign in |
| `/signup` | Create account |
| `/dashboard` | Member dashboard (protected) |
| `/dashboard/heal` | Heal view (protected) |
| `/dashboard/grow` | Grow view (protected) |
| `/dashboard/blossom` | Blossom view (protected) |

## Deployment

The site is deployed to **Cloudflare Pages** under the project `smartblossomingfoundation`.

```bash
yarn deploy
```

This runs a production build and uploads `dist/` to Pages on the `main` branch.

Manual deploy:

```bash
yarn build
npx wrangler pages deploy dist --project-name=smartblossomingfoundation --branch=main --commit-dirty=true
```

### SPA routing

Client-side routing is handled by `public/_redirects`:

```text
/*    /index.html   200
```

This ensures React Router paths work when users visit URLs directly or refresh the page.

## Supabase

Authentication and dashboard data use Supabase. Migration files live in `supabase/migrations/`.

To deploy an Edge Function:

```bash
supabase functions deploy <function_name> --no-verify-jwt
```

## Contact

- **Email:** smartblossomingfoundation@gmail.com
- **Phone:** 0735231262

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally with `yarn dev` and `yarn build`
4. Open a pull request with a clear summary

## License

© 2024–Present Smart Blossoming Foundation (SBF). All rights reserved.

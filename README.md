# Smart Blossoming Foundation (SBF) Web App

The Smart Blossoming Foundation web app is a React and TypeScript experience designed to support mental wellness, personal growth, and guided transformation. The platform is structured around three core user journeys:

- Heal: emotional wellbeing and mental health support
- Grow: learning, reflection, and personal development
- Blossom: purpose, confidence, and self-actualization

This project combines a modern frontend experience with Supabase-backed data access and Cloudflare deployment support.

## Overview

SBF provides a digital space where users can:

- explore a welcoming landing experience
- create an account and sign in securely
- access a protected dashboard experience
- navigate through themed wellness and growth views
- interact with a foundation-centered experience designed for reflection and progress

## Core Pillars

The product experience is organized around three pillars:

- Heal: creating psychological safety and emotional wellness
- Grow: building knowledge, skills, and continuous learning habits
- Blossom: embodying purpose and becoming an empowered self

## Features

- responsive, single-page application experience
- protected routes for authenticated users
- structured dashboard navigation for Heal, Grow, and Blossom views
- Supabase integration for authentication and data access
- Cloudflare Worker-based asset serving for deployment
- modular component structure for maintainability

## Tech Stack

- Frontend: React, TypeScript, Vite
- Routing: React Router
- Styling: CSS Modules and custom styles
- Backend and data: Supabase
- Hosting and deployment: Cloudflare Workers / Wrangler
- Linting: ESLint

## Project Structure

```text
src/
  components/         # shared UI components and route protection
  lib/                # shared client and app utilities
  pages/              # route-level views and page components
  App.tsx             # application routing configuration
  main.tsx            # app entry point
  worker.ts           # Cloudflare Worker entry for SPA asset serving
supabase/
  config.toml         # Supabase project config
  migrations/         # database migration files
```

## Prerequisites

Before getting started, make sure you have:

- Node.js 18+ or newer
- Yarn
- a Supabase project
- a Cloudflare account if you plan to deploy

## Environment Setup

Create a local environment file named `.env` in the project root and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

These values are used by the Supabase client in the application.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sbf-web
```

2. Install dependencies:

```bash
yarn install
```

## Development

Start the local development server:

```bash
yarn dev
```

The app will be available in your browser at the local Vite URL shown in the terminal.

## Available Scripts

- `yarn dev` – start the Vite development server
- `yarn build` – build the production bundle
- `yarn preview` – preview the built app locally
- `yarn lint` – run ESLint checks

## Routing Overview

The app currently includes the following main routes:

- `/` – landing page
- `/login` – sign in page
- `/signup` – sign up page
- `/dashboard` – protected dashboard shell
- `/dashboard/heal` – Heal experience
- `/dashboard/grow` – Grow experience
- `/dashboard/blossom` – Blossom experience

## Supabase Notes

The application uses Supabase for backend connectivity and data access. Database migration files are stored in the `supabase/migrations` directory.

If you are working with Supabase Edge Functions, you can deploy them using the Supabase CLI:

```bash
supabase functions deploy <function_name> --no-verify-jwt
```

## Deployment

### Frontend and Worker

This project is configured for Cloudflare deployment using Wrangler and a Worker entry point in `src/worker.ts`.

Build the site:

```bash
yarn build
```

Deploy with Wrangler:

```bash
npx wrangler deploy
```

## Contributing

Contributions are welcome. If you plan to make changes:

1. create a feature branch
2. make your updates
3. test locally
4. open a pull request with a clear summary of the change

## License

© 2024-Present Smart Blossoming Foundation (SBF). All rights reserved.

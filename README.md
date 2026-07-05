# Smart Blossoming Foundation (SBF) Web App

Welcome to the **Smart Blossoming Foundation (SBF)** web application repository. SBF is a dedicated space for mental wellness, continuous learning, and personal transformation, aiming to turn stories of pain into journeys of purpose.

## Core Pillars

Our foundation is built on three core pillars:
- **Heal (Mental Health):** Establishing psychological safety and emotional wellness.
- **Grow (Knowledge):** Acquiring new insights and skills for continuous mental expansion.
- **Blossom (Transformation):** Embodying your purpose and becoming your best, empowered self.

## Key Features

- **Growth Rating System:** An integrated dashboard that tracks and rates the level of growth (Personalized Growth Score, Milestone Achievements).
- **Resource Library:** Curated literature, tools, and support systems mapped to the user's stage of development.
- **Inclusive & Accessible:** Fully inclusive with bilingual support in **English & Kiswahili**.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Custom CSS
- **Deployment:** Cloudflare Workers / Pages
- **Backend / Database:** Supabase

## Getting Started

### Prerequisites
- Node.js
- Yarn package manager (This project uses `yarn` for package management)
- Supabase CLI (for deploying edge functions)

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd sbf-web
   ```
2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```

### Available Scripts

- `yarn dev` - Starts the Vite development server.
- `yarn build` - Compiles TypeScript and builds the app for production.
- `yarn lint` - Runs ESLint to check for code quality.
- `yarn preview` - Previews the production build locally.

## Deployment

### Frontend (Cloudflare)
This project uses Cloudflare for hosting. You can deploy the frontend using Wrangler:
```bash
npx wrangler deploy
```

### Backend (Supabase Edge Functions)
Supabase Edge Functions are used for backend operations. 

**Important:** Every time you update a Supabase Edge Function, you must deploy it using the following command:
```bash
supabase functions deploy <function_name> --no-verify-jwt
```

## License

© 2024-Present Smart Blossoming Foundation (SBF). All rights reserved.

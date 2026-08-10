This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Project Manifesto: moms-boutique
## 1. System Infrastructure Context
- Frontend: Next.js 15 (App Router, src/app/page.js), Tailwind CSS.
- Host/Pipeline: GitHub Main Branch -> Vercel Edge Network Deployment (Fully Automated).
- Backend Core: Supabase (Free Tier, Project ID: ldkbbzdvtdsmbxfypwm).
- Active Integration: Vercel-Supabase Linkage enabled.

## 2. Environment & Terminal Configurations
- OS Security: Windows PowerShell execution policy bypassed via [Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process] to enable global npm/Vercel CLI installations.
- Configuration: Vercel CLI linked locally via [vercel link].
- Env Token Layer: Local `.env.local` fully populated with Production Supabase credentials pulled via Vercel CLI.
- Next Image Rules: `next.config.mjs` configured with `remotePatterns` to securely whitelist host `ldkbbzdvtdsmbxfypwm.supabase.co`.

## 3. Current Codebase & Grid State
- Layout Mapping: Grid loops via `{filteredProducts.map((product) => ...}`.
- Data Hydration: Component tags explicitly match keys: `{product.name}`, `{product.condition}`, and `{product.price}`. All strings render perfectly on the live web.
- Image Asset Configuration: Line 92 utilizes standard HTML `<img src={product.images[0]} />` to pull first-index items from multi-image lists.

## 4. Current State Bottleneck (For Fresh Chat Debugging)
- Symptom: Text keys and pricing render live perfectly, but image elements throw a broken placeholder icon.
- Next Action Hypotheses: 
  1. Inspect Supabase storage bucket permissions (Confirm public anonymity access token policies).
  2. Verify strict filename extension matches (Confirm if bucket objects use lowercase `.png` or uppercase `.PNG`).

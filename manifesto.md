# Project Manifesto: moms-boutique
## 1. System Infrastructure Context
- Frontend: Next.js 15 (App Router, src/app/page.js), Tailwind CSS.
- Host/Pipeline: GitHub Main Branch -> Vercel Edge Network Deployment.
- Backend Core: Supabase (Free Tier, Project ID: ldkbbzdvtdsmbxfypwm).
- Active Integration: Vercel-Supabase Linkage enabled.

## 2. Resolved Environment & Terminal States
- OS Security: Windows PowerShell execution policy bypassed via [Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process] to enable global npm/Vercel CLI installations.
- Configuration: Vercel CLI linked locally via [vercel link].
- Env Token Layer: Local `.env.local` fully populated with Production Supabase credentials pulled via Vercel CLI.
- Next Image Rules: `next.config.mjs` configured with `remotePatterns` to securely whitelist host `ldkbbzdvtdsmbxfypwm.supabase.co`.

## 3. Storage & Data Layer State
- Cloud Bucket: Dedicated public storage bucket named `product-images` initialized in Supabase.
- Asset Status: Base URL normalized to standard naming conventions (lowercase, hyphen-delimited, no spaces).
- Current Component Mapping: Ready for data hydration within `src/app/page.js` array block.

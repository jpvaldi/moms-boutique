# Current Architecture Context & System State

## Core Stack
- Project Name: MOMS-BOUTIQUE
- Frontend: Next.js 15 (App Router, active development in src/app/page.js)
- CSS Framework: Tailwind CSS
- Infra: Vercel Edge Pipeline (Automated Deploy via main branch)
- Persistence Layer: Supabase Free Tier
- Active Instance ID: ldkbbzdvtdsmbxfypwm
- CDN Storage: Bucket 'product-images' (Public SELECT enabled)

## Explicit CDN URL Construction Rule
All product images must be fetched using this absolute template literal structure:
`https://supabase.co{product.images}`

## Data Layer Requirements
- `product.images` must evaluate to an array of raw strings containing filenames only (e.g., ["image.jpg"]).
- Never use naked domain placeholders like "https://supabase.co" or relative paths inside mock array strings.

## Engineering Protocols
- Avoid clipped or incomplete code fragments.
- Always provide fully synthesized code blocks with explicit variable names intact.

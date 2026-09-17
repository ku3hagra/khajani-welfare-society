# Khajani Welfare Society — Greenfield Website

Branch: `greenfield-v0.8`

This branch is reserved for the new greenfield Khajani Welfare Society website. The existing `main` branch remains untouched and should be treated as legacy/reference-only.

## Working authority
- New greenfield build only
- Production domain target: `https://khajaniwelfaresociety.com`
- Frontend: Next.js App Router + TypeScript
- Hosting: separate Vercel project `khajani-welfare-society-greenfield`
- CMS: Sanity
- Public media: real Khajani imagery only
- Any image showing `SDTT` is rejected
- Premises/building imagery requires verification before publication
- CMS-managed content remains design-safe, not open-ended page-builder content
- SEO, mobile, accessibility basics and performance are launch requirements

## Version
Current packaged source authority: `Khajani_Website_Greenfield_Phase2_VisualIntegrated_v0.8.zip`

## Important deployment rule
A Vercel preview is considered authoritative only when its source commit matches this greenfield branch/version. Existing Khajani prototype deployments and the Kriti NET/JRF project must not be modified.

## Media handling
Large documentary images, donation QR, programme photos and other routine media should migrate to Sanity's media layer instead of making Git the long-term media archive. Fixed brand assets may remain in the repository where appropriate.

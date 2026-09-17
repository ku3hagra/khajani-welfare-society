# Khajani Website — Git-backed source of truth v0.8.1

This directory is the authoritative code source for the new greenfield Khajani Welfare Society website on branch `greenfield-v0.8`.

## Deployment contract
- Legacy `main` remains untouched and is not the greenfield base.
- Vercel preview must use this `greenfield/` directory as its Root Directory.
- `khajaniwelfaresociety.com` stays disconnected until preview QA is approved.

## Media policy
- Fixed lightweight runtime brand assets may live in `public/`.
- Large archival originals and routine editable website media belong in Sanity, not Git.
- Any image containing `SDTT` is prohibited from public use.
- Premises imagery requires verification before publication.

## Version parity
A certified checkpoint requires this Git source, the packaged ZIP, and the deployed Vercel preview to correspond to the same version.

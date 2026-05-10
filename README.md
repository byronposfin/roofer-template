# Plumber Template — Clawr.ai

Master Vite + React + TypeScript + Tailwind landing page for UK plumbing businesses.

Cloned by `pipeline.py` per lead. All `{{TOKENS}}` are replaced with business data before deploy.

## Tokens (16)

`{{BUSINESS_NAME}}` `{{BUSINESS_PHONE}}` `{{BUSINESS_EMAIL}}` `{{BUSINESS_ADDRESS}}` `{{BUSINESS_CITY}}` `{{BUSINESS_POSTCODE}}` `{{NICHE}}` `{{NICHE_PLURAL}}` `{{HERO_HEADLINE}}` `{{META_TITLE}}` `{{META_DESC}}` `{{REVIEW_1}}` `{{REVIEW_2}}` `{{REVIEW_3}}` `{{YEARS_TRADING}}` `{{SERVICE_AREA}}`

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Vercel auto-detects.

## AI Concierge

The empty `<div id="ai-concierge" data-business="{{BUSINESS_NAME}}">` in `src/components/AIConciergeStub.tsx` is a v2 injection point. Mount the real widget into `#ai-concierge` and read `data-business`. No refactor required.

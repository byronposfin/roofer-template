// ─── NICHE CONFIG ─────────────────────────────────────────────────────────────
// This file is written by the Clawr.ai pipeline at deploy time.
// DO NOT edit manually — changes will be overwritten on next deploy.
// Source: clawr/niches/<niche>.json
// ──────────────────────────────────────────────────────────────────────────────

export interface Service {
  icon: string;
  title: string;
  body: string;
}

export interface NicheConfig {
  id: string;
  displayName: string;
  plural: string;
  heroTagline: string;
  trustBadges: string[];
  services: Service[];
  palette: {
    primary: string;
    primaryHover: string;
    secondary: string;
  };
  faqs: { q: string; a: string }[];
  ctaLabel: string;
}

const nicheConfig: NicheConfig = {{NICHE_CONFIG_JSON}};

export default nicheConfig;

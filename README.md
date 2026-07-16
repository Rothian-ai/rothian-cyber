# Rothian Cyber — Secure by Nature

Premium marketing site for Rothian Cyber, part of the Rothian Group digital ecosystem.
Shares the design language, motion system and engineering architecture of the
Rothian Digital prototype while keeping Cyber's own identity: dark "abyss" palette,
violet→cyan bioluminescent gradient, and the **Secure by Nature** metaphor system
(every service is paired with an animal or plant defense from the natural world).

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (tokens in `src/index.css`)
- Framer Motion (shared motion language in `src/lib/motion.ts` — long expo-out ease)
- Lenis smooth scrolling
- React Router 7, lazy-loaded routes

## Commands

```bash
npm run dev      # dev server
npm run build    # tsc + vite build
npm run lint     # oxlint
```

## Structure

- `src/data/` — all content (services, pillars, solutions, experts, capabilities, FAQs, posts)
- `src/components/ui/` — primitives (Button, Reveal, SplitText, SectionHeading, CountUp, Marquee, Accordion)
- `src/components/layout/` — Navbar, Footer, ScrollProgress, ScrollManager, WhatsAppFab
- `src/components/shared/` — PageHero, CtaBand, DetailTemplate, NatureCallout, ServiceCard, InsightsSection
- `src/components/home/` — Hero (jellyfish video), IncidentBand, PillarsShowcase, ThreatStats, WhyUs, ExpertsMarquee, FaqSection
- `src/pages/` — one file per route

## Routes

`/` · `/about` · `/about/experts` · `/what-we-do` · `/services` ·
`/services/:pillar` (discover/adapt/evolve) · `/services/:pillar/:slug` (9 services) ·
`/capabilities` · `/solutions` · `/solutions/:slug` (soc/ciso) · `/insights` · `/faq` · `/contact`

## Conversion notes

- Primary CTA everywhere: **Book a Security Assessment** (`/contact`)
- Emergency path: **Under attack? / Report an Incident** → `/contact?urgency=critical`
  (pre-selects the Critical urgency pill and routes messaging to rapid response)
- Contact form is frontend-only; wire `onSubmit` in `src/pages/Contact.tsx` to a backend.
- Blog posts in `src/data/posts.ts` link to the live WordPress articles.

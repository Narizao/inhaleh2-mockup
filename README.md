# InhaleH₂ — Mockup & Strategy Package

A clickable HTML mockup of a redesigned InhaleH₂ storefront, plus a companion strategy & CRO deck. Built as the deliverable for the InhaleH₂ Shopify proposal.

## What's in this folder

```
inhaleh2-mockup/
├── index.html             # Homepage — B2C-led, with B2B path split
├── product.html           # PDP — sticky CTA, bundles, comparison, social proof
├── practitioners.html     # B2B landing — wholesale tiers + application form
├── science.html           # Science / How it works — FiH₂ explained, research
├── README.md              # This file
└── assets/
    ├── css/style.css      # Design system + all components (single file)
    ├── js/site.js         # Mini-cart, gallery, variants, audience toggle
    ├── fonts/             # DM Sans (variable + italic)
    ├── img/               # Logos, products, atmospheric imagery, gradients, profiles
    └── video/hero.mp4     # Homepage hero video (provided in brand kit)
```

The companion deck lives one level up: `InhaleH2-Strategy-and-CRO.pptx`.

---

## How to view it

### Option A — Open locally (fastest)
Double-click `index.html`. Everything is self-contained — no build step, no server.

> Note: some browsers (Chrome especially) restrict autoplay of the hero video on `file://` URLs. If the video doesn't autoplay locally, host it (Option B) or open in Firefox.

### Option B — Host it for sharing (recommended for the interview)

**Netlify Drop** (60 seconds, no signup required, free):
1. Go to https://app.netlify.com/drop
2. Drag the entire `inhaleh2-mockup` folder onto the page
3. You get a public URL like `https://random-name-12345.netlify.app` — share that

**Alternatives that work just as well:**
- **Vercel** — `vercel deploy` from the folder (CLI required)
- **GitHub Pages** — push to a repo, enable Pages on the main branch
- **Cloudflare Pages** — drag-and-drop, similar to Netlify
- **Local server** — from this folder, run `python3 -m http.server 8000`, then open http://localhost:8000

---

## Pages map

| Page | What it demonstrates |
|------|----------------------|
| `index.html` | Brand applied at scale. Hero with video, pillars marquee, trust strip, problem framing, product showcase, science explainer, comparison table, social proof, B2B band, FAQ, footer. |
| `product.html` | A PDP built for a $2,495 considered purchase: sticky CTA, three bundles (with the "best value" pre-selected), variant selectors, finance copy, six trust bullets, a 60-day risk-free trial, comparison table, six reviews, FAQ. |
| `practitioners.html` | A real B2B journey: clinical positioning, six value props, case quote, in-clinic use cases, two-tier program comparison, and a 7-field application form. |
| `science.html` | The FiH₂ wedge fully explained — what it is, why no one else delivers it, the four-step closed-loop process, comparison vs alternatives, research links, safety guidance, glossary. |

---

## What's clickable / interactive

The mockup is built to feel like a real site, not a static prototype:

- **Audience toggle** in the top-right of the nav — switch between Personal (B2C) and Clinical (B2B). Routes to homepage vs practitioners page.
- **Mini-cart** — click the cart icon on any page to slide it open.
- **PDP gallery** — click thumbnails to swap the main product image.
- **PDP variants** — bundle and color selectors visually update.
- **PDP quantity** — increment/decrement.
- **FAQ accordions** — open and close.
- **Sticky add-to-cart** on the PDP — follows you down the page.

Forms, search, and account links are visual only (no submit handler) — this is a mockup, not a Shopify implementation.

---

## Brand system applied

**Primary palette:** `#4077FF`, `#1238C4`, `#09277C`, `#02194B`, `#00112B`
**Secondary lights:** `#C1F4F7` (mint), `#B0D0FF`, `#D5B8FF`, `#FFDACA`, `#EFECEA`
**Accents:** `#27CEF4` (cyan), `#9F5CFF`, `#FF9864`, `#FF722C`

**Type:**
- Display: Degular (Adobe / Oh No Type Co. — paid, named in spec)
- Body: DM Sans (provided in brand kit, embedded in mockup)
- Substitution: the mockup uses DM Sans for both display and body so it renders identically without a Degular license. In production, swap the display stack to Degular and the cascade carries through automatically.

All component spacing uses a 4pt grid. Tokens live in `assets/css/style.css` under `:root` for easy adjustment.

---

## What was built and why — short version

| Decision | Why |
|----------|-----|
| Hero with brand-supplied video + "Inhale to excel." | Lead with the strongest brand asset — the new hero film — and the new tagline. Built atmosphere, not a stock image. |
| FiH₂ wedge in copy and IA | The category's only real differentiator. Every other hydrogen product avoids the dose question. |
| Audience toggle + dedicated B2B page | Clinics and consumers want different things. The current site forces both into one funnel. |
| Comparison table on homepage and PDP | Buyers compare. We do the comparison for them, with the dose row as the win row. |
| "Year One" bundle pre-selected | Anchors AOV upward and reduces decision load on a $2,495 SKU. |
| Sticky CTA on PDP | Long PDP, considered purchase. Friction down, conversion up. |
| 7-field practitioner application | Respect the practitioner's time. Lower friction = more qualified submits. |
| Trust strip with Dr. LeBaron, SR&ED, Carrick | Resolves the "is this credible?" question for a non-FDA-cleared wellness device. |

Eight changes, eight hypotheses — see slide 7 of the deck for the testing plan.

---

## Roadmap (from deck)

| Phase | Timing | Focus |
|-------|--------|-------|
| 01 — Foundation | Weeks 1–3 | Port to Shopify Online Store 2.0, set tokens, wire global components, GA4. |
| 02 — Conversion launch | Weeks 4–7 | Ship PDP, B2B page, Find-a-Clinic, start A/B tests. |
| 03 — Scale & retention | Weeks 8–12+ | Subscriptions, Klaviyo flows, personalisation, internationalisation. |

---

## Notes for the interview conversation

- The mockup is intentionally not a Shopify theme. It's faster to iterate as static HTML when the goal is showing strategic and visual range. Phase 01 of the roadmap is the port.
- All copy is original and category-aware — careful around medical claims (it's not FDA-cleared and the site says so explicitly on the PDP and Science page).
- Imagery, video, and brand colors are all from the new brand kit. Logos are SVG.
- The deck has detailed lift estimates and the rationale for each — useful for opening the conversation around prioritisation.

---

Built by Andres Aguerrevere · April 2026

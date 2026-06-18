# BUILD PROMPT — The Sovereign Identity Institution

Paste everything below into Cursor (Agent / Composer mode) to build the full site.

---

## 0. Role & Mandate

You are the lead designer-engineer at a small studio that builds for private-banking, sovereign-wealth, and old-money institutional clients. The client, **Melvin Nibbs**, has commissioned **The Sovereign Identity Institution** — a discreet, high-authority digital presence. He has already rejected templated AI output. You are being trusted with real copy and a real visual system; execute both with precision, not invention.

Two rules override every other instinct you have:

1. **The copy is sacred.** Every word in the `/Copy` folder is final. Do not rewrite, shorten, expand, "improve," retitle, reorder sentences within a block, fix perceived typos, or generate placeholder/lorem text anywhere. Your only job with the words is to give them the right container — hierarchy, rhythm, whitespace, scale. If a copy file is ambiguous about which section it belongs to, infer it from content and headings, never by altering the text to fit.
2. **The accent is singular.** `#C9A15A` (champagne gold) is the only interactive/attention color on the entire site. One per screen, used deliberately. No gradients, anywhere, ever. Flat is the point.

---

## 1. Stack

- **Next.js 14+ (App Router)** + **TypeScript** (strict mode)
- **Tailwind CSS** (v3, configured via tokens below — no default Tailwind palette in use)
- **Framer Motion** (`motion`) for the few moments of orchestrated motion described in §6
- `next/font/google` for typeface loading (no manual `@font-face` / no Google Fonts `<link>` tags)
- `clsx` + `tailwind-merge` for conditional classNames
- No UI kit (no shadcn, no MUI). Every component is hand-built to the token system below — a borrowed kit will fight the single-accent rule.

---

## 2. Assets

- `public/lion-head.png` — the mark. Treat it as a crest/seal, not a logo icon to be casually resized. It should appear sparingly: primary lockup in the header/hero, and as a quiet watermark/divider device at 1–2 other moments described in §6. Never tint it, never place it on a gradient, never shrink it below a size where its detail collapses.
- **Wordmark**: "MELVIN NIBBS" — set in `label` type (Inter, 600, 0.16em tracking, uppercase) or `h1`/`display` Playfair where the lockup calls for more weight. Do not introduce a different typeface for the wordmark.
- **Institutional name**: "The Sovereign Identity Institution" — functions as a kicker/eyebrow beneath or beside the wordmark in most lockups (label scale), and as the full `display`-scale statement once, in the hero, where the copy supports it.
- Build the primary lockup as a reusable `<Crest />` or `<Lockup />` component: lion-head mark + wordmark + institutional name, with props to control orientation (stacked for hero, horizontal for header) and scale.

---

## 3. Design System — "Wealth Noir"

Implement this exactly as Tailwind theme tokens / CSS variables. Do not introduce colors, radii, or spacing values outside this system.

### Color
| Token | Hex | Use |
|---|---|---|
| `primary` | `#E9E3D4` | Headlines, core body text on dark |
| `secondary` | `#8C8575` | Borders, captions, metadata, dividers, muted labels |
| `tertiary` | `#C9A15A` | **The single accent.** Links, the one primary CTA per view, focus rings, active states. Reserve it. |
| `neutral` | `#0A0A09` | Page background. Let it carry the composition — negative space is a feature, not empty space. |
| `surface` | `#131211` | Card/panel backgrounds, raised above `neutral` |
| `on-primary` | `#0A0A09` | Text on top of the gold accent |

### Type
| Role | Family | Size | Weight | Notes |
|---|---|---|---|---|
| `display` | Playfair Display | 4.5rem | 500 | Hero statements only — used with restraint, not on every section |
| `h1` | Playfair Display | 2.5rem | 500 | Section headings |
| `body` | Inter | 0.95rem | 400 | 1.65 line-height. This is the workhorse for all copy blocks |
| `label` | Inter | 0.72rem | 600 | 0.16em letter-spacing, uppercase. Eyebrows, nav, captions, form labels |

Load Playfair Display and Inter via `next/font/google`, expose as CSS variables (`--font-display`, `--font-body`), wire into `tailwind.config.ts`.

### Radii & Spacing
- `rounded-sm: 1px` / `rounded-md: 2px` / `rounded-lg: 3px` — everything is nearly square. This is a deliberate refusal of the soft, friendly rounded-corner SaaS look.
- Spacing scale: `sm: 8px`, `md: 16px`, `lg: 32px`. Build a generous outer rhythm (section padding should read in multiples of `lg`, not arbitrary values).

### Components (build these as the base primitives before any page work)
- **`<ButtonPrimary />`**: background `tertiary`, text `on-primary`, `rounded-md`, padding `12px 20px`, label-scale type, uppercase, letter-spaced. No hover gradient or glow — a precise state change only (e.g. background darkens 6–8%, no shadow bloom).
- **`<Card />`**: background `surface`, text `primary`, `rounded-lg`, padding `24px`, hairline `secondary` border at low opacity. No drop shadows — separation comes from the surface/neutral contrast, not elevation effects.
- Build secondary primitives as needed (e.g. a ghost/outline button using `secondary` border + `primary` text — but this is not "another accent," it must never compete with the gold).

### Hard constraints (check before every commit)
- No gradients anywhere — backgrounds, buttons, text, borders, overlays. Flat fields only.
- No more than one `tertiary`-colored element doing the "primary action" job per viewport.
- No border-radius outside the 1/2/3px scale.
- No font outside Playfair Display (display/headings) and Inter (everything else).

---

## 4. Content & Information Architecture

Before writing a single component, **read every file in `/Copy` in full.** Then:

1. Build a content map: for each file, identify what section/page it is (hero, founder statement, institutional philosophy, services/offerings, process, credentials, testimonial, application/contact, footer/legal — names are illustrative, use what the copy actually contains, don't force it into this list).
2. Preserve the copy's own internal structure — if a block has three numbered pillars, render three pillars (in order, with their exact text); if a block is a single dense paragraph, it stays a single paragraph, not bullet-fied.
3. Where copy implies sequence (a true numbered process, a timeline, ordered steps) — and only then — use numbered markers (01 / 02 / 03). Do not add numbering as decoration to content that isn't sequential.
4. If copy includes a title/headline/CTA label explicitly, use that exact string on the corresponding heading/button — do not paraphrase a CTA's label.
5. Determine page structure from the copy itself: this may be a single long-form one-page institutional site, or multiple routed pages (e.g. `/`, `/about`, `/apply`). Decide based on volume and distinctness of the content found — do not default to a generic 5-section SaaS layout if the copy doesn't support it.

If any copy file is genuinely missing a section it references (e.g. mentions a gallery with no images provided), leave a clearly marked, low-key placeholder comment in code (`{/* TODO: imagery pending from client */}`) rather than inventing content — flag it, don't fill it.

---

## 5. Visual Direction

This is private-banking-grade, not startup-grade. Calibrate against Patek Philippe, a sovereign wealth fund's investor site, or a discreet family office — not against Stripe, Linear, or any AI-generated SaaS landing page. Concretely, that means:

- **Negative space is the primary luxury signal.** Generous top/bottom section padding (think 120–180px desktop), narrow measure for body copy (don't let `body` text run wider than ~65–70 characters per line), and restraint in how much appears in one viewport.
- **The lion crest is the signature element.** It should appear like a wax seal or hallmark — once large and ceremonial in the hero, then again only as a quiet, low-opacity watermark at one or two structurally important moments (e.g. behind a founder statement, or as a section divider mark) — never as a repeating decorative pattern.
- **Hairlines, not boxes.** Use 1px `secondary`-at-low-opacity rules to separate sections/content rather than cards-with-borders everywhere. Reserve the `<Card />` component for content that's genuinely discrete (e.g. a credentials list, a pull-quote, a form).
- **Imagery**: if `/Copy` or the project includes photography, treat it in true black-and-white or deep duotone toward `neutral`/`primary` — no full-color imagery competing with the palette. If no imagery is supplied, do not source stock photos; build with type, the crest, and negative space alone.

---

## 6. Motion (use sparingly — this is the one place restraint matters most)

- **Page-load sequence (hero only, once):** the lion crest and wordmark resolve in with a slow, precise fade/slight-scale-in (e.g. 600–900ms, easeOut, no bounce/spring overshoot — this brand does not bounce). Headline text follows with a brief stagger.
- **Scroll reveals:** subsequent sections fade/translate up gently into view (8–16px translate, ~400ms) on first intersection, with `viewport={{ once: true }}`. Stagger children inside a section lightly (40–80ms apart) rather than animating each line separately.
- **Hover/focus states:** the only color-shift hover behavior is on `tertiary` elements and links — a precise opacity or shade shift, no scale-bounce, no glow.
- **Respect `prefers-reduced-motion`:** all of the above must degrade to instant/no animation when the user has reduced motion set. Build this via a shared motion variant/util, not ad hoc per component.
- Do not add: parallax scroll effects, cursor-follow elements, particle/noise canvases, autoplaying carousels, or scroll-jacking. None of these belong in this system.

---

## 7. Technical Requirements

- **Accessibility**: semantic HTML landmarks, visible keyboard focus (a `tertiary`-colored focus ring, not a default browser blue outline), correct heading hierarchy following the copy's own structure, alt text for any imagery, sufficient contrast (verify `secondary` on `neutral` for small text meets at least AA for body-sized use, adjust opacity rather than introducing a new color if it fails).
- **Responsive**: mobile-first. `display` scale (4.5rem) needs a deliberate, fluid step-down on mobile (e.g. `clamp()` or Tailwind responsive variants) — don't let it overflow or force horizontal scroll. Verify the crest lockup re-flows from horizontal (header) to stacked (mobile menu/hero) sensibly.
- **Performance**: `next/image` for any photography, font subsetting via `next/font`, no unused heavy libraries, Lighthouse performance should be a real consideration, not an afterthought.
- **Metadata/SEO**: derive `<title>`, meta description, and Open Graph tags from the actual copy provided (e.g. the institutional name + a line genuinely present in the copy) — do not invent marketing language not present in `/Copy` for these either.
- **Project structure**:
  ```
  app/
    layout.tsx          (fonts, metadata, global providers)
    page.tsx            (or routed pages per §4.5)
    globals.css         (CSS variables, base styles)
  components/
    ui/                 (ButtonPrimary, Card, Lockup/Crest, Divider, etc.)
    sections/           (one component per content section, named for its content)
  lib/
    motion.ts           (shared Framer Motion variants, respecting reduced-motion)
    utils.ts            (cn() helper via clsx + tailwind-merge)
  public/
    lion-head.png
  tailwind.config.ts    (full Wealth Noir token system)
  ```

---

## 8. Process

1. Read every file in `/Copy` fully before building anything. Produce a brief content map (in a code comment or scratch file) of section → source file → role.
2. Set up the Next.js + TypeScript + Tailwind project, wire the full token system into `tailwind.config.ts` and `globals.css`, load fonts via `next/font`.
3. Build the primitives in §3 (`ButtonPrimary`, `Card`, `Lockup`) in isolation first.
4. Build the hero with the full page-load motion sequence, using the exact copy mapped to it.
5. Build remaining sections in copy order, applying §5's visual direction per section based on what that section's content actually is (a founder statement reads differently than a credentials list — design each on its own terms within the same system, don't force one template across all of them).
6. Wire navigation/footer once all sections exist, so it can link to what's actually there.
7. **Self-critique pass before calling it done:**
   - Did I change, trim, or add to any copy anywhere? (Must be no.)
   - Is `tertiary` gold used as more than one "primary action" in any single viewport? (Must be no.)
   - Any gradients anywhere? (Must be no.)
   - Any border-radius outside 1/2/3px? (Must be no.)
   - Does the page work and look intentional at 375px wide and at 1440px+ wide?
   - Does it still look correct/legible with reduced motion forced on?
   - Is there one thing on this site someone would remember and describe to a colleague? If not, the crest treatment in the hero isn't doing its job yet — revisit it before moving on.
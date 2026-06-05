
# Premium Coaching Institute Website — Build Plan

A conversion-focused, trust-building marketing site. Single-page structure with separate routes for major sections to maximize SEO and shareability.

## Design System (src/styles.css)

Replace default tokens with the premium palette using oklch equivalents:
- `--background` → Deep Midnight Blue `#0A1428`
- `--secondary` / surface-2 → `#121A2E`
- `--card` → `#1E2A44`
- `--foreground` → `#E5E7EB`
- `--primary` (Gold) → `#D4A017`
- `--destructive` / CTA Red → `#C8102E`
- `--accent` (Teal highlight) → `#00B29F`
- `--border` → subtle gold/white at low opacity

Add custom tokens: `--gradient-premium` (gold sheen), `--shadow-elite` (deep blue glow), `--shadow-gold` (soft gold glow).

Typography: Playfair Display (headings, authoritative serif) + Inter (body). Strong tracking, generous spacing.

Animations: fade-up, subtle scale-in, marquee ticker, carousel fade. No aggressive bounces.

## Route Structure

- `/` — Full landing page with all 9 sections
- `/courses` — Detailed courses
- `/results` — Topper showcase
- `/faculty` — Faculty profiles
- `/contact` — Contact + enquiry form

Each route gets its own SEO `head()` metadata. Shared `Header`, `Footer`, `AnnouncementBar`, and floating action buttons via the root layout.

## Components

```
src/components/
  layout/
    AnnouncementBar.tsx      — auto-scrolling marquee ticker
    Header.tsx                — sticky nav, logo, contact info, Enroll CTA
    Footer.tsx                — dark premium footer
    FloatingActions.tsx       — fixed Call + WhatsApp buttons
  sections/
    HeroSlider.tsx            — 60vh slider, 3 slides, auto-rotate 3s, fade
    Introduction.tsx          — mission/vision + 4 stat cards w/ count-up
    AchievementCarousel.tsx   — horizontal auto-scroll, pause on hover
    Courses.tsx               — 4 large horizontal cards
    WhyChooseUs.tsx           — 4 premium feature cards
    Faculty.tsx               — faculty profile grid
    ParentTrust.tsx           — testimonials, Google-review style
    FAQ.tsx                   — shadcn Accordion
    EnquiryForm.tsx           — zod-validated form
  ui/                         — shadcn (button, card, accordion, input, etc.)
```

## Section Details

1. **Announcement Bar** — Gold/red gradient strip, 4 messages scrolling left infinitely.
2. **Header** — Sticky, blurred deep-blue background on scroll. Top utility row (phone, email), main nav row (logo + menu + gold Enroll Now button). Mobile hamburger.
3. **Hero Slider** — 60vh, three placeholder images (classroom, toppers, environment), gradient overlay, headline "Building Future Doctors & Engineers", two CTAs (Enroll = gold, Call = outline), 4 trust badges with check icons.
4. **Introduction** — Background image with dark overlay, mission + vision blocks, 4 stat cards (25+ Years, 10,000+ Students, 95% Success, 500+ Top Rankers) with animated counters.
5. **Achievement Carousel** — Horizontal scroll with 8+ placeholder cards (toppers, awards, events), autoplay 3s, pause-on-hover, prev/next chevrons.
6. **Courses** — 4 full-width horizontal cards (Class 11, Class 12, JEE, NEET). Each: title, subjects list, features, duration, "Learn More" link. Gold accent border on hover.
7. **Why Choose Us** — 4-column grid of premium cards with Lucide icons (GraduationCap, UserCheck, ClipboardList, Trophy), subtle hover lift.
8. **Faculty** — 6 faculty cards (photo placeholder, name, "15+ years experience", subject, 1-line bio).
9. **Parent Trust** — Testimonial grid styled like Google reviews (avatar, 5 stars, name, relation, quote).
10. **FAQ** — Accordion with 6 questions.
11. **Enquiry Form** — Card with fields (Name, Phone, Class select, Course select, Message). Zod validation, toast confirmation.

## Floating Elements
- Right-center: Phone icon button (gold)
- Bottom-right: WhatsApp icon button (teal/green)
- Both with subtle pulse, visible always.

## Images
Generate 3 hero images + 1 introduction background using `imagegen` (premium classroom, students, study environment — photoreal, premium tone). Faculty/testimonial avatars use neutral placeholder silhouettes or generated portraits.

## Technical Notes
- All colors via semantic tokens — no raw hex in components.
- Form is frontend-only (toast on submit); backend wiring not requested.
- Mobile-first responsive at every section.
- Accessibility: semantic HTML, alt text, focus states.
- Single H1 per route, proper meta tags.

## Out of Scope (this round)
- Backend / database / actual form submission storage
- Real CMS for results/faculty
- Authentication

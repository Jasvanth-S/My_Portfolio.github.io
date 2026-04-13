---
name: portfolio-qa-tester
description: >
  Elite portfolio QA testing and production readiness skill. Use this skill IMMEDIATELY
  whenever a user wants to: test their portfolio website, check if links/buttons/forms work,
  audit responsive design across devices, find and fix bugs, check cross-browser compatibility,
  audit accessibility or SEO, or prepare their portfolio for production/job applications.
  Also triggers on: "check my portfolio", "test my website", "find bugs in my site",
  "is my portfolio ready", "responsive issues", "broken links", "production ready",
  "portfolio audit", "QA my site", "fix portfolio bugs". This is a comprehensive 13-phase
  testing framework that leaves absolutely nothing untested.
---

# 🧪 Portfolio QA Tester — Super Skill

A world-class, 13-phase portfolio quality assurance and production readiness framework.
Use this skill to systematically test, audit, and fix every aspect of a developer/designer portfolio.

---

## ⚡ QUICK START

When triggered, immediately ask for:
1. **Portfolio URL** (live site or localhost URL)
2. **Tech stack** (React, Next.js, HTML/CSS, Vue, etc.)
3. **What's already been checked** (if anything)
4. **Deadline / urgency** (adjust depth accordingly)

Then proceed through phases — **never skip a phase**, but you may compress low-priority ones for tight deadlines.

---

## 🗂️ THE 13 PHASES AT A GLANCE

| # | Phase | What You're Testing | Priority |
|---|---|---|---|
| 1 | Discovery | Inventory all elements | 🔴 Always first |
| 2 | Responsive | All breakpoints 320px–1920px+ | 🔴 Critical |
| 3 | Links & Nav | Every link, every route | 🔴 Critical |
| 4 | Buttons & Interactions | Click, hover, focus, keyboard | 🔴 Critical |
| 5 | Forms | Validation, submission, errors | 🔴 Critical |
| 6 | Content & Visual | Text, images, sections | 🟠 High |
| 7 | Performance | Lighthouse, load speed | 🟠 High |
| 8 | Accessibility | A11y, keyboard nav, ARIA | 🟠 High |
| 9 | SEO | Meta tags, OG, structured data | 🟡 Medium |
| 10 | Security | HTTPS, headers, secrets | 🟡 Medium |
| 11 | Cross-browser | Chrome, Firefox, Safari, Edge | 🟡 Medium |
| 12 | Bug Fixing | Classify, fix, verify | 🔴 Ongoing |
| 13 | Production Checklist | Final go/no-go decision | 🔴 Final gate |

---

## 📋 PHASE 1 — DISCOVERY & INVENTORY

**Goal:** Know what exists before testing anything.

Build this inventory first:

```markdown
## Portfolio Inventory

### Pages / Sections
- [ ] Hero / Landing
- [ ] About
- [ ] Skills / Tech Stack
- [ ] Projects / Work
- [ ] Experience / Timeline
- [ ] Education (if present)
- [ ] Testimonials (if present)
- [ ] Contact
- [ ] Footer

### Interactive Elements Found
- Navigation links: ___
- Buttons (CTAs): ___
- External links: ___
- Forms: ___
- Modals/Overlays: ___
- Animations: ___
- Downloadable files: ___
```

---

## 📱 PHASE 2 — RESPONSIVE DESIGN

**Test at these exact breakpoints:**

```
320px  → iPhone SE (smallest modern phone)
390px  → iPhone 14
412px  → Android mid-range
768px  → iPad Portrait
1024px → iPad Landscape / Small Laptop
1280px → Laptop
1440px → Standard Desktop
1920px → Full HD / Large Monitor
```

**At EVERY breakpoint check:**

```
□ No horizontal scrollbar
□ Nav collapses → hamburger works open/close
□ Hero text not clipped or overflowing
□ Images scale, don't stretch or pixelate
□ Cards/grids reflow (no single orphan items on wide rows)
□ Footer stacks correctly
□ Buttons ≥ 44px tap targets (mobile)
□ Body font ≥ 16px
□ No overlapping elements
□ Sticky header correct on scroll
□ Section spacing not cramped or excessive
□ Form keyboard doesn't break layout (iOS/Android)
□ Fixed elements don't block content
```

**Common responsive bugs to look for:**
- `width: 100vw` causing horizontal scroll (use `max-width: 100%`)
- Absolute positioned elements overflowing container
- Fixed font sizes on small screens
- Images without `max-width: 100%`
- Flexbox `min-width: 0` missing on flex children
- Grid not switching to single column on mobile
- Z-index wars making elements unreachable

---

## 🔗 PHASE 3 — LINK & NAVIGATION AUDIT

**Navigation Links:**
```
□ All nav items scroll/route to correct destination
□ Active/highlighted state updates on scroll (Intersection Observer)
□ Smooth scroll works
□ Mobile hamburger: opens, closes, closes on link click
□ Logo → back to top/home
```

**External Links:**
```
□ GitHub profile → correct
□ LinkedIn → correct
□ Twitter/X → correct (if used)
□ Each project → live demo loads
□ Each project → GitHub repo loads
□ Email mailto: → opens client
□ Resume PDF → downloads/opens
□ ALL external links have target="_blank"
□ ALL external links have rel="noopener noreferrer"
```

**Link Health Checks:**
```
□ No 404 responses
□ No HTTP (only HTTPS)
□ No expired domains
□ No redirect loops
```

> 💡 **Tool tip:** Use browser DevTools Network tab to catch any failing requests. Filter by status 4xx/5xx.

---

## 🖱️ PHASE 4 — BUTTONS & INTERACTIONS

**For EVERY button verify:**
```
□ Default state (correct color, size, label)
□ Hover state (cursor: pointer, visual change)
□ Active/pressed state (slight scale or color shift)
□ Focus state (visible outline — never outline: none without alternative)
□ Disabled state (if applicable — looks disabled, not clickable)
□ Correct action on click
```

**Specific buttons to test:**
```
□ Primary CTA ("Hire Me", "Contact Me", "View Work")
□ Secondary CTA ("Download Resume", "See Projects")
□ Form Submit button
□ Theme toggle (dark/light mode persists on refresh)
□ Back-to-top button (appears after 300px scroll)
□ Project filter buttons (filter and re-render correctly)
□ Modal/overlay open buttons
□ Modal close (X button + ESC key + click outside)
□ Copy-to-clipboard (email/link) + shows feedback toast
□ Carousel prev/next/dots
□ Accordion expand/collapse
□ Tab switching
```

---

## 📝 PHASE 5 — FORM AUDIT

**Contact Form — Full Test Matrix:**

| Test Case | Expected Result |
|---|---|
| Submit empty form | Validation errors on all required fields |
| Name = whitespace only | Validation error |
| Invalid email format | "Please enter valid email" |
| Valid data, submit | Loading spinner shown |
| Successful send | Success message, form resets |
| Network failure | Error message, data preserved |
| Tab through fields | Logical order, all reachable |
| Submit via Enter key | Same as button click |

**Form Code Quality:**
```
□ <label> for every <input> (not just placeholder)
□ Correct input types (email, tel, text, textarea)
□ autocomplete attributes set correctly
□ Required fields have required attribute
□ Error messages are descriptive (not just "Invalid")
□ Error messages announced to screen readers (aria-live)
□ Form action uses HTTPS endpoint
□ Spam protection present (reCAPTCHA, honeypot, or rate limit)
```

---

## 🖼️ PHASE 6 — CONTENT & VISUAL AUDIT

**Section-by-Section Checks:**

### Hero
```
□ Name spelled correctly
□ Role/title accurate and current
□ Hero image/avatar: loads, not pixelated, proper crop
□ Animated typing text (if used): correct strings, no typos
□ CTA buttons visible and above the fold
□ No content hidden behind fixed header
```

### About
```
□ Bio complete — no lorem ipsum
□ Photo loads + crisp at all sizes
□ Stats/numbers accurate
□ All skill pills/tags load correctly
```

### Projects
```
□ All project thumbnails load (no broken images)
□ Every project has: title, description, tech tags, links
□ No "Coming Soon" placeholders (or style them intentionally)
□ Hover effects on project cards
□ Project descriptions not truncated unexpectedly
```

### Skills
```
□ All skill icons load (SVG preferred)
□ No broken img icons showing alt text
□ Skill names spelled correctly
□ Progress bars (if used) are accurate and animated
```

### Contact
```
□ Email address is real
□ Location/timezone accurate
□ Availability status is current
```

### Footer
```
□ Copyright year = current year
□ All footer links work
□ "Built with" attribution accurate
□ Zero placeholder text
```

---

## ⚡ PHASE 7 — PERFORMANCE AUDIT

**Run Lighthouse (Chrome DevTools → Lighthouse tab):**

Target scores:
```
Performance:    ≥ 90  (target 95+)
Accessibility:  ≥ 95  (target 100)
Best Practices: ≥ 90
SEO:            ≥ 90
```

**Manual optimizations:**

```
Images:
□ WebP or AVIF format (not raw PNG/JPG for photos)
□ Explicit width + height (prevents CLS)
□ loading="lazy" on all below-fold images
□ Hero image preloaded: <link rel="preload" as="image">
□ Responsive images with srcset

JavaScript:
□ Scripts use defer or async (no render-blocking)
□ Bundle is code-split (not one giant main.js)
□ No unused libraries bundled

CSS:
□ Fonts use font-display: swap
□ No unused CSS (purged in production)
□ Critical CSS inlined (optional but ideal)

Core Web Vitals:
□ LCP (Largest Contentful Paint) < 2.5s
□ FID / INP < 200ms
□ CLS (Cumulative Layout Shift) < 0.1
```

---

## ♿ PHASE 8 — ACCESSIBILITY AUDIT

**Critical (WCAG 2.1 AA required):**

```
□ Color contrast ≥ 4.5:1 body text  (test with WebAIM Contrast Checker)
□ Color contrast ≥ 3:1 large text (18px+)
□ Every image has alt text (descriptive or alt="" for decorative)
□ Exactly ONE <h1> per page
□ Heading hierarchy: h1 → h2 → h3 (never skip levels)
□ All interactive elements keyboard reachable (Tab key)
□ Visible focus indicator on all focused elements
□ Focus trapped inside open modals
□ Skip to main content link as first focusable element
□ All <button> elements have text or aria-label
□ All icon-only buttons have aria-label
□ Form inputs have <label> (not just placeholder)
□ <html lang="en"> set (or correct language)
□ ARIA roles correct (not redundant, not on wrong elements)
□ Dynamic content changes announced (aria-live regions)
□ Animations respect: @media (prefers-reduced-motion: reduce)
□ No autoplay video/audio with sound
```

**Test using:**
- Tab key only navigation (no mouse)
- Chrome → DevTools → Accessibility tree
- axe DevTools extension (free)
- NVDA / VoiceOver screen reader spot check

---

## 🔍 PHASE 9 — SEO AUDIT

```html
<!-- Required in <head> -->
□ <title>Your Name — Frontend Developer</title>  (50-60 chars)
□ <meta name="description" content="...">  (150-160 chars)
□ <meta name="robots" content="index, follow">
□ <link rel="canonical" href="https://yoursite.com">

<!-- Open Graph (for social sharing previews) -->
□ <meta property="og:title" content="...">
□ <meta property="og:description" content="...">
□ <meta property="og:image" content="...">  (1200x630px)
□ <meta property="og:url" content="...">
□ <meta property="og:type" content="website">

<!-- Twitter Card -->
□ <meta name="twitter:card" content="summary_large_image">
□ <meta name="twitter:title" content="...">
□ <meta name="twitter:description" content="...">
□ <meta name="twitter:image" content="...">

<!-- Structured Data -->
□ JSON-LD Person schema with name, jobTitle, url, sameAs links

<!-- Files -->
□ /robots.txt exists and is correct
□ /sitemap.xml exists (for multi-page sites)
□ /favicon.ico + Apple touch icon + manifest.json
```

---

## 🔒 PHASE 10 — SECURITY AUDIT

```
□ Site loads on HTTPS (not HTTP)
□ HTTP → HTTPS redirect works
□ SSL cert valid + not expiring within 30 days
□ External links have rel="noopener noreferrer"
□ No API keys in client-side source code or JS bundles
□ No sensitive env vars exposed
□ .env not in git repository
□ Contact form has spam protection
□ Dependencies: run npm audit — zero critical vulnerabilities
□ HTTP security headers (check headers.io or SecurityHeaders.com):
    □ X-Content-Type-Options: nosniff
    □ X-Frame-Options: DENY or SAMEORIGIN
    □ Referrer-Policy set
    □ Content-Security-Policy (basic at minimum)
```

---

## 🌐 PHASE 11 — CROSS-BROWSER AUDIT

**Must test on:**
```
□ Chrome (latest) — Desktop
□ Chrome (latest) — Mobile (DevTools device emulation)
□ Firefox (latest) — Desktop
□ Safari (latest) — Desktop
□ Safari — iPhone (if you have access)
□ Edge (latest) — Desktop
```

**Cross-browser specific pitfalls:**
```
□ CSS Grid gap support (all modern browsers OK)
□ :has() selector (not in older Firefox — have fallback)
□ CSS custom properties (fine everywhere)
□ Backdrop-filter (check Safari prefix)
□ Scroll behavior smooth (all OK, graceful degradation)
□ ResizeObserver (all OK)
□ IntersectionObserver (all OK)
□ Web fonts loading consistently
□ Scrollbar styling degrading gracefully
□ Input date/color pickers styled consistently
```

---

## 🐛 PHASE 12 — BUG FIXING PROTOCOL

### Bug Severity Matrix

| Level | Examples | Action |
|---|---|---|
| 🔴 P0 Critical | Layout completely broken at breakpoint, non-working form, 404 on main links | Fix before anything else |
| 🟠 P1 High | Visual glitch on common screen size, wrong link destination, missing image | Fix in current session |
| 🟡 P2 Medium | Minor spacing issue, icon misalignment, hover effect missing | Fix before deploy |
| 🟢 P3 Low | Pixel-perfect cosmetic issue, animation timing, optional enhancement | Backlog |

### Bug Report Template

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BUG #___
Section:     [e.g., Projects Section]
Severity:    [P0 / P1 / P2 / P3]
Breakpoints: [e.g., 320px–767px]
Browser:     [e.g., All / Safari only]

DESCRIPTION:
[What is visually or functionally broken]

ROOT CAUSE:
[The specific CSS property / JS function / HTML structure causing it]

FIX APPLIED:
[Exact before/after code change]

BEFORE:
  property: broken-value;

AFTER:
  property: fixed-value;

VERIFIED ON:
  □ 320px □ 390px □ 768px □ 1024px □ 1440px
  □ Chrome □ Firefox □ Safari □ Edge
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Common Portfolio Bugs & Fixes

```css
/* BUG: Horizontal scroll on mobile */
/* FIX: */
html, body {
  overflow-x: hidden;
  max-width: 100%;
}

/* BUG: Images stretching in flex containers */
/* FIX: */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* BUG: Text overflowing container */
/* FIX: */
.text-container {
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-width: 0; /* critical in flex/grid children */
}

/* BUG: Fixed navbar covering content */
/* FIX: */
html {
  scroll-padding-top: 80px; /* match navbar height */
}

/* BUG: Focus outline removed (accessibility violation) */
/* FIX: */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* BUG: Animations not respecting user preference */
/* FIX: */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* BUG: Cards misaligned in last row of grid */
/* FIX: */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* auto-fill prevents orphaned stretched cards */
}

/* BUG: Z-index issues with sticky nav + modals */
/* FIX: Define z-index scale */
:root {
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal-backdrop: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

---

## ✅ PHASE 13 — PRODUCTION READINESS GATE

**The portfolio is PRODUCTION READY only when ALL boxes are checked:**

### Content ✅
```
□ Zero lorem ipsum or filler text
□ All project details accurate and complete
□ Contact info real and monitored
□ Resume/CV is current (updated within 6 months)
□ Copyright year is correct
```

### Technical ✅
```
□ Zero broken links (0 dead URLs)
□ Zero broken images (0 alt text fallbacks visible)
□ Zero JS console errors on production build
□ Zero CSS layout errors at any breakpoint
□ Forms tested end-to-end and working
□ HTTPS enforced
□ 404 page exists and is styled
```

### Design ✅
```
□ Consistent spacing scale used throughout
□ On-brand color palette (no rogue colors)
□ Typography: ≤ 2 font families, ≤ 3 weights
□ All interactive states implemented (hover, active, focus)
□ Dark mode fully complete (if offered)
□ No orphaned single words at line ends (widows)
```

### Performance ✅
```
□ Lighthouse Performance ≥ 90
□ Lighthouse Accessibility ≥ 95
□ Lighthouse Best Practices ≥ 90
□ Lighthouse SEO ≥ 90
□ All images optimized
□ No render-blocking resources
```

### Deployment ✅
```
□ Custom domain configured + working
□ SSL valid (check expiry > 60 days)
□ Environment variables secured (not in source)
□ Analytics configured (know who's visiting)
□ Error monitoring active (optional but recommended)
□ Site tested on real device (not just emulation)
```

---

## 📊 FINAL QA REPORT TEMPLATE

```markdown
# Portfolio QA Report
**Site:** [URL]
**Audit Date:** [Date]
**Auditor:** Claude QA Agent
**Overall Status:** 🔴 NOT READY / 🟡 NEARLY READY / 🟢 PRODUCTION READY

---

## Executive Summary
- Total Bugs Found: ___
- P0 Critical: ___ | P1 High: ___ | P2 Medium: ___ | P3 Low: ___
- Bugs Fixed: ___ | Remaining: ___

## Phase Scores
| Phase | Score | Notes |
|---|---|---|
| Responsive Design | ___/100 | |
| Links & Navigation | ___/100 | |
| Buttons & Interactions | ___/100 | |
| Forms | ___/100 | |
| Content & Visual | ___/100 | |
| Performance | ___/100 | Lighthouse: ___ |
| Accessibility | ___/100 | |
| SEO | ___/100 | |
| Security | ___/100 | |
| Cross-browser | ___/100 | |

**Overall Score: ___/100**

---

## Bug Log
[List all bugs using the template from Phase 12]

---

## Top 5 Fixes Before Launch
1.
2.
3.
4.
5.

## Recommended Enhancements (Post-Launch)
1.
2.
3.
```

---

## 🛠️ TOOLS REFERENCE

| Tool | Purpose | URL |
|---|---|---|
| Chrome Lighthouse | Performance + A11y + SEO | DevTools → Lighthouse |
| axe DevTools | Accessibility deep scan | Chrome extension |
| WebAIM Contrast Checker | Color contrast ratios | webaim.org/resources/contrastchecker |
| GTmetrix | Load speed + waterfall | gtmetrix.com |
| SecurityHeaders.io | HTTP security headers | securityheaders.com |
| W3C Validator | HTML validity | validator.w3.org |
| CSS Validator | CSS validity | jigsaw.w3.org/css-validator |
| Google Rich Results | Structured data test | search.google.com/test/rich-results |
| Screaming Frog (free) | Crawl all links | screamingfrog.co.uk |
| BrowserStack | Real cross-browser | browserstack.com |
| ResponsivelyApp | Multi-device preview | responsively.app |
| Squoosh | Image optimization | squoosh.app |

---

*Portfolio QA Tester SKILL.md — v1.0 | Production-grade portfolio audit framework*

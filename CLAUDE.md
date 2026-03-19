# CLAUDE.md — Open Signal

## Project Overview

Open Signal is a free, autonomous, AI-powered intelligence publication. It delivers premium-quality tech/AI analysis without paywalls, ads, or subscription gates. The site is built with Astro, styled with Tailwind CSS, and content is authored in MDX.

**Owner:** Zachary Ahmed (zahhmedd1992 on GitHub)
**Status:** Phase 1 — Foundation
**Site URL:** https://open-signal.vercel.app (placeholder until custom domain)

---

## Tech Stack

```
Framework:      Astro 6.x (static-first, content-optimized)
Styling:        Tailwind CSS 4.x (CSS-first config, no tailwind.config.mjs)
Content:        MDX files in src/content/ (Git-native, no external CMS)
Search:         Pagefind (build-time search index, zero JS overhead)
Hosting:        Vercel (auto-deploy from GitHub)
Analytics:      Umami (phase 2+)
Automation:     GitHub Actions (phase 2+)
AI Engine:      Claude API for content generation (phase 2+)
```

---

## Repository Structure

```
open-signal/
├── CLAUDE.md                     # This file — persistent context
├── EDITORIAL.md                  # Editorial guidelines and voice
├── astro.config.mjs
├── package.json
├── src/
│   ├── content.config.ts         # Content collection schemas
│   ├── layouts/                  # BaseLayout, ArticleLayout, BriefingLayout
│   ├── components/               # Header, Footer, ArticleCard, etc.
│   ├── pages/                    # All routes
│   ├── content/                  # MDX articles organized by pillar
│   │   ├── deep-signals/
│   │   ├── briefings/
│   │   ├── signal-maps/
│   │   ├── long-view/
│   │   └── open-source/
│   ├── styles/
│   │   └── global.css            # Tailwind 4 + design tokens
│   └── utils/                    # reading-time, dates, related articles
└── public/                       # Static assets
```

---

## Content Pillars

1. **Deep Signals** — Flagship long-form analysis (1,500-3,000 words), 3-4/week
2. **Signal Briefings** — Dense morning briefings (500-800 words), daily weekdays
3. **Signal Maps** — Visual/structural explainers with tables and diagrams, 1-2/week
4. **The Long View** — Weekend deep dives (3,000-5,000 words), 1/week Saturday
5. **Open Source** — Meta-content about the project itself, 1-2/month

---

## Session Start Checklist

1. Read this file
2. Check current phase status above
3. Run `npm run build` to verify build health
4. Continue from where the last session left off

---

## Coding Conventions

- Astro components use `.astro` extension
- Tailwind CSS 4: all theme customization in `src/styles/global.css` using `@theme` directive — NO `tailwind.config.mjs`
- Content collections use `src/content.config.ts` (Astro 5+ pattern)
- Use `getCollection()` from `astro:content` to query content
- TypeScript strict mode enabled
- Components are self-contained — styles via Tailwind utility classes
- Dark mode: class-based (`.dark` on `<html>`) with localStorage persistence
- No external runtime JS dependencies — Astro Islands only where truly needed

---

## Quality Standards

- Every article must have complete frontmatter matching its collection schema
- Build must pass before any deploy
- No broken links in navigation
- Lighthouse performance score target: 95+
- All pages must work in both light and dark mode

---

## Phased Rollout

- **Phase 1 (Current):** Foundation — site, design system, layouts, components, 5 pilot articles, deploy
- **Phase 2:** Semi-autonomous — GitHub Actions for daily briefings, quality scoring, Pagefind, RSS, analytics
- **Phase 3:** Autonomous — remove human review gate, all content pipelines on schedule, editorial calendar automation
- **Phase 4:** Full autonomy + growth — newsletter, self-improvement loop, social media, community features

# Carnival Memories Design System

## Critical: Carnival Memories ≠ TRCruise

This design system documents the **Carnival Memories** product (carnivalmemories.com), NOT the TRCruise platform.

TRCruise is a multi-brand platform that powers Carnival Memories, DCL, NCL, MSC, and other brands. Each brand applies its own overrides via SCSS files and `.trconf` config.

**When referencing the TRCruise repo for component structure:**

1. ALWAYS check `src/environments/branding/_carnival.scss` for Carnival-specific overrides FIRST
2. ALWAYS check `src/environments/branding/carnival.trconf` for Carnival-specific config
3. ALWAYS verify against the live site (carnivalmemories.com) — the live site is the source of truth
4. NEVER use TRCruise platform defaults (colors like forest green, v6 greys, etc.) when Carnival has its own tokens

**Carnival brand overrides include:**
- Colors: Primary blue scale (#0F559A), Secondary red (#DC1225), custom photo-upload-bg (#c2daf140), etc.
- Typography: TempoStd for headings (uppercase, weight 400), HelveticaNeueRegular for body
- Buttons: 2px border-radius, 52px/44px heights, no box-shadow
- Nav: white background, $primary-500 text color, bordered icon buttons at 1440px+
- Modal backdrop: $primary-500 (not black)

**The pattern is:** TRCruise provides the component structure → `_carnival.scss` overrides the styling → `carnival.trconf` configures behavior. This design system must show the FINAL rendered result as seen on carnivalmemories.com.

## Repo Access

A GitHub PAT for the TreeRing org is stored in `.env` as `GITHUB_TOKEN`. Use it for reading TRCruise repo files via the GitHub API when needed.

## Tech Stack

- React + TypeScript + Tailwind CSS v4 (with @tailwindcss/vite)
- React Router for navigation
- Vite dev server
- All brand tokens defined in `src/index.css` under `@theme`
- TempoStd font served from `public/fonts/TempoStd-HeavyCondensed.woff2`
- Icons from TRCruise repo served from `public/icons/`

## Project Structure

- `src/components/` — Sidebar, PageLayout, ShowcaseSection (shared layout components)
- `src/pages/` — One page per design system entry (Intro, ColorPalette, Typography, etc.)
- `src/App.tsx` — Routes
- `public/icons/` — SVG icons pulled from TRCruise repo
- `public/fonts/` — Font files

---
trigger: always_on
---

# UI/UX Design System Rules

## Visual Design Language
- **Brand Personality**: High-performance digital growth engineering. Crisp, trustworthy, data-driven, and enterprise-grade.
- **Tone**: Professional, authoritative, and direct. Avoid playful or casual consumer app stylings.

## Spacing & Grid System
- Section Padding: `py-20 lg:py-28` for primary sections, `py-12 sm:py-16` for metric/sub-sections.
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-12`.
- Grid Hierarchy:
  - Metrics / Counters: 4 columns on desktop (`lg:grid-cols-4`), 2 on tablet (`sm:grid-cols-2`), 1 on mobile.
  - Services / Feature Cards: 3 columns on desktop (`lg:grid-cols-3`), 2 on tablet (`md:grid-cols-2`), 1 on mobile.
  - Form & Hero Split: 6/6 or 5/7 columns on desktop (`lg:grid-cols-12`).

## Typography Hierarchy
- H1 (Page Hero): `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]`
- H2 (Section Title): `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight`
- H3 (Card Title): `text-lg sm:text-xl font-bold text-slate-900 tracking-tight`
- Body Large (Hero Subtitle): `text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl`
- Body Standard: `text-sm sm:text-base text-slate-600 leading-relaxed`
- Microcopy / Metadata: `text-xs text-slate-500 font-medium`

## Interactive States
- Cards: `hover:-translate-y-1 hover:shadow-lg hover:border-[#046BD2]/40 transition-all duration-200`
- Buttons: `active:scale-[0.99] transition-all duration-150`
- Focus Rings: Visible `outline-2 outline-[#046BD2] outline-offset-2`

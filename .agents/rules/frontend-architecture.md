# Frontend Architecture Rules

## 1. Directory Structure
```
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── api/send/         # Lead submission email & reCAPTCHA endpoint
│   ├── globals.css       # Centralized design system tokens and Tailwind v4 theme
│   └── [pages]/          # Route pages (use Client Components when using interactivity)
├── components/
│   ├── ui/               # Reusable UI primitives (Button, Badge, Card, Input, etc.)
│   ├── adforge/          # Marketing domain components (HeroSection, LeadForm, etc.)
│   └── [shared]/         # Global layout components (Navbar, Footer, ToolsSection, CTA)
```

## 2. Server vs Client Component Guidelines
- Mark interactive components with `"use client";` at the very top.
- Leaf components with hooks (`useState`, `useEffect`, `useRef`, `framer-motion`) must be client components.
- Ensure all forms use `LeadForm` or primitives to prevent client-side hydration mismatches.

## 3. Form Handling & API Contracts
- Form submissions must target `/api/send` via `POST` with `Content-Type: application/json`.
- Payload schema:
  - `name`: string (required)
  - `email`: string (required)
  - `phone`: string (required)
  - `website`: string (optional, defaults to "N/A")
  - `service`: string (optional)
  - `monthlyBudget`: string (optional)
  - `message`: string (optional)
  - `source`: string (identifies the page or form trigger)
  - `recaptchaToken`: string (Google reCAPTCHA v2 token)

## 4. Accessibility & Quality Checklist
- Every interactive element must be keyboard focusable with a clear focus ring.
- Color contrast ratios must exceed WCAG AA standards (minimum 4.5:1 for body text).
- Images must use Next.js `<Image>` with explicit width, height, and meaningful `alt` text.
- TypeScript verification with `npx tsc --noEmit` must yield 0 errors.

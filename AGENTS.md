<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AdForge Frontend Architecture & Design System Rules

AdForge is a performance marketing and digital growth company platform. The interface must feel:
> "Data-driven like a technology company, persuasive like a performance marketing agency, and polished like a premium brand."

## 1. Single Source of Truth — Component Primitives
NEVER write arbitrary, inline-styled one-off buttons, badges, cards, or inputs. All UI must reuse the design system:

### Core Primitives (`src/components/ui/`)
- `Button`: Standardized button primitive (`variant="primary" | "secondary" | "outline" | "ghost" | "accent" | "danger"`, `size="sm" | "md" | "lg"`). Supports `href`, icons (`leftIcon`, `rightIcon`), loading state, and accessible focus.
- `Badge`: Standardized badge pill (`variant="primary" | "secondary" | "outline" | "success" | "warning" | "info" | "accent"`, `size="sm" | "md"`, optional `dot`).
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`: Standardized surface card (`surface="white" | "muted" | "dark"`, optional `interactive`).
- `Input`, `Textarea`, `Select`: Accessible form controls with standardized focus rings, labels, and error states.
- `SectionHeader`: Standardized eyebrow badge, title with gradient highlight, and subtext.

### Marketing Components (`src/components/adforge/`)
- `HeroSection`: Unified hero layout across service and inner pages (`theme="brand" | "light"`).
- `MetricCard`: Unified stat/metric card with trend signals and icons.
- `ServiceCard`: Unified service/campaign card with tags, bullets, and CTA links.
- `LeadForm`: Unified lead capture form integrated with Google reCAPTCHA v2 and `/api/send`.

## 2. Design Token System (`src/app/globals.css`)
- **Primary Brand Blue**: `--color-primary` (`#046BD2`), hover `--color-primary-hover` (`#0356A8`).
- **Cyan Accent**: `--color-accent` (`#168ED3`).
- **High-Conversion Warm Accent**: `--color-accent-warm` (`#E11D48`).
- **Surfaces**: `--background` (`#FFFFFF`), `--color-surface` (`#F8FAFC`), `--color-surface-dark` (`#0A1628`), `--color-surface-darker` (`#060D1F`).
- **Borders**: `--color-border` (`#E2E8F0`), `--color-border-strong` (`#CBD5E1`).
- **Text**: Heading `--color-text-heading` (`#0F172A`), Body `--color-text-body` (`#334155`), Muted `--color-text-muted` (`#64748B`).

## 3. Strict Prohibitions
- DO NOT invent arbitrary button background hex codes (e.g. random `#D82C5E` pink buttons with custom rounded borders). Always use `<Button variant="..." />`.
- DO NOT create disparate card layouts for individual services or tools. All cards must share the same padding, border radius (`rounded-2xl`), border colors, and typography scale.
- DO NOT use unstyled raw inputs or textareas. Always use `Input`, `Select`, or `Textarea`.
- DO NOT hardcode gaudy gradient headers with `#FFDE59` yellow text. Use `HeroSection` or design system highlights.
- DO NOT break `/api/send` form payload contracts (`name`, `email`, `phone`, `service`, `monthlyBudget`, `message`, `source`, `recaptchaToken`).

## 4. Verification Standard
Any code modification MUST pass TypeScript type checking without errors:
`npx tsc --noEmit`

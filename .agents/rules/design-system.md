# Component Design System Registry

All UI components must be imported exclusively from `@/components/ui` or `@/components/adforge`.

## Primitives (`@/components/ui`)
| Component | Supported Props | Usage |
|---|---|---|
| `Button` | `variant` (primary, secondary, outline, ghost, accent, danger), `size` (sm, md, lg), `leftIcon`, `rightIcon`, `isLoading`, `fullWidth`, `href` | Primary, secondary, and link action buttons. Replaces all one-off button tags. |
| `Badge` | `variant` (primary, secondary, outline, success, warning, info, accent), `size` (sm, md), `dot`, `icon` | Status indicators, categories, and eyebrow labels. |
| `Card` | `surface` (white, muted, dark), `interactive` (boolean) | Standard containers with uniform border radii and padding. |
| `Input` | `label`, `error`, `helperText`, `leftIcon`, `rightIcon` | Accessible text, email, phone form inputs. |
| `Select` | `label`, `options` ({ value, label }[]), `error`, `helperText` | Standardized dropdown menus. |
| `Textarea` | `label`, `rows`, `error`, `helperText` | Multi-line text inputs. |
| `SectionHeader` | `badge`, `badgeVariant`, `title`, `highlight`, `description`, `align` | Uniform section headline and subtitle block. |

## Domain Components (`@/components/adforge`)
| Component | Supported Props | Usage |
|---|---|---|
| `HeroSection` | `badge`, `title`, `highlight`, `subtitle`, `primaryCtaText`, `primaryCtaHref`, `secondaryCtaText`, `secondaryCtaHref`, `trustPoints`, `theme` | Canonical hero section for all service and sub-pages. |
| `MetricCard` | `value`, `label`, `subtext`, `trend`, `trendPositive`, `icon`, `surface` | Key statistical milestones and performance numbers. |
| `ServiceCard` | `tag`, `title`, `description`, `bullets`, `icon`, `href`, `ctaText` | Individual service offerings and capability cards. |
| `LeadForm` | `source`, `title`, `subtitle`, `variant` (compact, full) | Lead capture form with built-in reCAPTCHA v2 and `/api/send` integration. |

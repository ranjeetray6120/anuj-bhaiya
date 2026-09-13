---
name: ui-implementation
description: Guides AI agents in implementing and refactoring UI screens following the AdForge design system.
---

# UI Implementation Skill for AdForge

When asked to create or update any page, screen, card, or component in AdForge:

1. **Step 1: Check Primitives First**
   - Check `@/components/ui` for primitives:
     - `Button` for all CTA, action, or navigation buttons.
     - `Badge` for status indicators, categories, and tags.
     - `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` for card containers.
     - `Input`, `Textarea`, `Select` for form fields.
     - `SectionHeader` for page and section headings.
   - Check `@/components/adforge` for domain patterns:
     - `HeroSection` for page headers.
     - `MetricCard` for stat grids.
     - `ServiceCard` for feature/service grids.
     - `LeadForm` for lead capture forms.

2. **Step 2: Prohibit One-Off Styles**
   - Never write custom hex codes for buttons (e.g., `#D82C5E` or `#168ed3`).
   - Never invent special card padding or borders for single sections.
   - Never use arbitrary inline gradient styles for section backgrounds.

3. **Step 3: Verify TypeScript Types**
   - After editing, always run:
     ```bash
     npx tsc --noEmit
     ```
   - Ensure zero compiler errors before completing the turn.

# Hero Component Rules

```md
> This document is authoritative. If implementation contradicts this guide, update the guide or refactor the code.
````

## Purpose

Heroes establish page intent quickly, orient users, and present the page's top-priority action when needed.

## Required anatomy

- Required: eyebrow, title, supporting description
- Optional: single primary CTA, supporting visual
- Prohibited: dense body copy and competing multi-action clusters

## Acceptable use cases

- Top-of-page framing for major landing pages
- Introducing a high-priority user task with one clear action
- Establishing context before deeper section content

## Rules

- Use one primary CTA maximum in the hero
- CTA is optional; include it only when a clear top-priority task exists
- Hero visual supports context only and must not carry essential prose
- Keep hierarchy predictable: eyebrow (optional) -> title -> description -> action
- Avoid stacking unrelated messages in the hero region

## Content rules

- Eyebrow sets context (section/program/topic framing)
- Title states page purpose in plain language
- Description explains value/task and expected next step, not long-form detail
- CTA copy is verb-led and specific
- Do not use vague CTA text when destination is ambiguous

Suggested length guidance:

- Eyebrow: short context label (about 2-6 words)
- Title: concise purpose statement (about 3-10 words)
- Description: brief supporting guidance (about 1-3 sentences)

## Visual and layout rules

- Typography and spacing use shared roles/tokens only
- Maintain readable line length for title/description across breakpoints
- Keep consistent vertical rhythm between hero and first content section
- Avoid custom one-off hero themes without an approved variant

## Responsive behavior

- Mobile/tablet/desktop behavior is predefined for content and visual placement
- Hero should remain scannable without excessive scroll before main content
- Preserve layout stability as media loads

## Required states

For heroes with interactive elements, define and validate:

- Default
- Hover/focus-visible for CTA
- Active (if applicable)
- Disabled/loading for CTA only when applicable
- Fallback behavior when optional visual is omitted

## Accessibility requirements

- Hero heading must fit page heading hierarchy
- CTA must have clear accessible name and keyboard/focus support
- Decorative hero visuals are hidden from assistive tech when appropriate
- Ensure text contrast remains compliant over hero backgrounds

## Testing hooks

- Component tests: eyebrow, title, and description are always present
- Component tests: CTA render logic and interaction states
- E2E tests: primary hero task flow on key landing pages
- A11y tests: heading structure, contrast, and focus checks

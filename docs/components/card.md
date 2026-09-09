# Card Component Rules

```md
> This document is authoritative. If implementation contradicts this guide, update the guide or refactor the code.
````

## Purpose

Cards group related content into scannable, repeatable units that help users compare and choose.

## Required anatomy

- Required: a primary identifying element for the card family
- Optional: eyebrow, description, metadata, media, CTA
- Prohibited: unrelated controls that conflict with card's primary destination

Primary identifying element guidance:

- Preferred default: title
- Allowed approved alternatives: quote lead (testimonial), metric value + qualifier (stat card)
- Each card family must document which identifying element it uses

## Acceptable use cases

- Listing repeatable content types (news, events, programs, resources)
- Presenting short summaries with clear next action
- Supporting scan-and-select behavior in grids/lists

## Rules

- The primary identifying element is the primary affordance; metadata must not visually overpower it
- Typography, spacing, and color follow shared roles/tokens only
- Keep card purpose singular (one content type per card pattern)
- Use one primary action maximum per card
- Entire-card click is allowed only when the card has one destination and no nested interactive controls

## Content rules

- Titles (when used) are specific and concise; avoid decorative phrasing
- Description is summary text, not full-body prose
- Metadata order is stable within a card family (for example: date -> source -> tag)
- CTA copy is verb-led and destination-specific

## Card family registry

- Standard content cards: title required
- Testimonial cards: quote lead + person identity may satisfy identifying element
- Stat cards: metric value + qualifier may satisfy identifying element

If a new family needs different anatomy, document it here before rollout.

## Media rules

- Use approved aspect ratios for each card family
- Keep image treatment consistent across a grid/list
- Do not place essential prose inside images
- Use meaningful alt text for informative images; decorative images may use empty alt

## Responsive behavior

- Card layout changes by breakpoint are predefined per card family
- Preserve stable heights/spacing where comparison matters
- Prevent avoidable layout shift as media loads

## Required states

For interactive cards or card CTAs, define and validate:

- Default
- Hover
- Focus-visible
- Active (if applicable)
- Disabled (if applicable)
- Empty (for data-driven lists)
- Error (for failed data fetch where applicable)

## Accessibility requirements

- Heading levels stay correct within page outline
- Click targets are keyboard accessible with visible focus
- Link/button semantics remain correct (navigation vs action)
- Do not rely on color alone for category/status meaning

## Testing hooks

- Unit tests: card data mapping and guards (if present)
- Component tests: required anatomy rendering, metadata order, CTA behavior
- E2E tests: key browse/select journey through card lists
- A11y tests: heading, role/label, and focus visibility checks

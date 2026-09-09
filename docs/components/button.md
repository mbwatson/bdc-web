# Button Component Rules

```md
> This document is authoritative. If implementation contradicts this guide, update the guide or refactor the code.
````

## Purpose

Buttons communicate action priority and trigger user actions.

Semantic rule:

- Use native `<button>` for in-place behavior (submit, toggle, open/close, confirm)
- Use `<a>` for navigation destinations (including high-emphasis CTA links styled as buttons)
- Use inline text links for prose/body-copy navigation

## Acceptable use cases by variant

- Primary (filled): highest-priority action in a local context
- Secondary (outline): lower-priority alternative near a primary
- Tertiary/text: low-emphasis supporting action
- Destructive: irreversible or high-risk action only
- Icon-only: common actions only (search, close, overflow), with required accessible label

## Variant mapping for current UI APIs

Use this map when implementing with existing USWDS-oriented variants:

- Primary (filled): `default`, `accent-warm`, `accent-cool`
- Secondary (outline/quiet): `secondary`, `outline`
- Inverse contexts only: `inverse`, `outline-inverse`
- Low-emphasis/supporting: `base`, `unstyled`

Notes:

- Choose one primary tone per action cluster; avoid mixing multiple filled tones as competing primaries.
- `destructive` should be added as an explicit approved variant when introduced in shared packages.

## Rules

- Use one primary button maximum per local action cluster
- Do not place competing primary buttons side-by-side
- Do not use button styling for decoration
- Do not use button styling for simple navigation in prose content
- Do not disable without communicating why an action is unavailable

## Labeling and copy

- CTA text is verb-led and specific (for example: `Download report`)
- Keep labels short and scannable (generally 2-5 words)
- Use sentence case consistently
- Avoid vague labels unless surrounding context makes intent explicit
- Use explicit destructive labels (for example: `Delete dataset`)

## Interaction and layout

- Use real `<button>` for actions; set explicit `type`
- Use `<a>` for navigation destinations
- Minimum touch target: 44x44 px equivalent
- In forms/modals, keep action hierarchy predictable and consistent
- Whole-card click patterns must not conflict with nested buttons

Allowed exception:

- A high-emphasis navigation CTA may be rendered as a link-styled button when emphasis is intentional and hierarchy is clear.

## Required states

Every interactive button must define and validate:

- Default
- Hover
- Focus-visible
- Active (if applicable)
- Disabled (if applicable)
- Loading (for async actions)

## Accessibility requirements

- Buttons are keyboard operable
- Focus state remains visible and high-contrast
- Icon-only buttons include `aria-label`
- Decorative icons are hidden from assistive tech where appropriate
- Do not rely on color alone to communicate intent/state

## Testing hooks

- Unit tests: mapping or guard logic for variants and state guards
- Component tests: role/name queries, click/keyboard interaction, disabled/loading behavior
- E2E tests: critical submission flows and destructive confirmations
- A11y tests: role/label/focus checks and automated axe coverage

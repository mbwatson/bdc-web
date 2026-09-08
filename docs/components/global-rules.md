# Global Component Rules

```md
> This document is authoritative. If implementation contradicts this guide, update the guide or refactor the code.
````

## Global Rules Checklist

Every reusable component must satisfy all applicable checks before merge.

### Semantics and accessibility

- Uses the correct semantic element for intent (link vs button vs heading vs list)
- Keyboard accessible with visible focus states
- Meets contrast requirements in all interactive states
- Has accessible names/labels for interactive controls
- Respects heading order and landmark structure
- Supports reduced-motion behavior where animation exists

### Structure and anatomy

- Documents required vs optional anatomy slots
- Uses one primary action maximum per local action cluster
- Avoids mixing unrelated content roles in one visual block
- Uses approved typography roles and spacing scale

### Content and UX quality

- Uses specific, plain language copy
- Uses verb-led CTA text with clear destination/intent
- Signals external destinations consistently
- Defines empty and error states for data-driven components

### Responsive and performance

- Defines behavior at mobile/tablet/desktop breakpoints
- Avoids layout shift from media/content load
- Uses approved media ratios and fallback behavior
- Uses client hydration only when interactivity requires it

# Component Spec Template

```md
## Component: <Name>

### Purpose
- What user task does this component support?

### Usage contexts
- Where it is allowed
- Where it is not allowed

### Anatomy
- Required slots: <list>
- Optional slots: <list>
- Prohibited content: <list>

### Actions
- Primary action: <when present + allowed copy pattern>
- Secondary action: <when allowed>
- Action cap: <max number in a given context>

### Content rules
- Title length: <min/max>
- Description length: <min/max>
- Metadata order: <exact order if applicable>
- CTA copy pattern: <verb + object format>

### Visual rules
- Allowed variants: <list>
- Typography roles: <token/utility mapping>
- Spacing rules: <token/utility mapping>
- Media rules: <ratio, focal behavior, alt strategy>

### State model
- Default
- Hover/focus (if interactive)
- Active/pressed (if applicable)
- Disabled (if applicable)
- Loading (if applicable)
- Empty
- Error

### Responsive behavior
- Mobile: <stack/collapse/truncate behavior>
- Tablet: <behavior>
- Desktop: <behavior>

### Accessibility requirements
- Required ARIA/labeling
- Keyboard behavior
- Screen reader announcements (if dynamic)

### Implementation notes
- Astro-only by default; justify any React usage
- Client directive and reason (if any)

### Test hooks
- Unit tests: <what logic must be covered>
- Component tests: <render/interaction checks>
- E2E tests: <critical user journey checks>
- A11y tests: <axe/manual checks>
```

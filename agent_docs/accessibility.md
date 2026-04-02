# Accessibility Rules

Read this when building or reviewing any UI. Non-negotiable — engineers will
reject code without proper a11y.

Most mechanical checks are enforced by `eslint-plugin-jsx-a11y`. These rules
cover judgement calls the linter can't make.

- Colour contrast: don't use `text-gray-300` on `bg-white` or similar
  low-contrast combos. Minimum WCAG AA (4.5:1 for text, 3:1 for large text).
- ARIA: use sparingly and correctly. Prefer semantic HTML over ARIA attributes.
  If ARIA is needed, `aria-label`, `aria-describedby`, and `role` are the most
  common.
- Focus indicators: never remove `outline` on focusable elements. Tailwind's
  `focus-visible:ring-2` is preferred.
- Skip link: include a "Skip to content" link as the first focusable element
  when the page has navigation.
- Motion: wrap animations in `motion-safe:` or provide `prefers-reduced-motion`
  support.
- Forms: every `<input>` needs a `<label>` (visible or `sr-only`).
- Keyboard access: every interactive element must be reachable via Tab and
  operable via Enter/Space. Use native `<button>`, `<a>`, `<input>` — not divs
  with click handlers.

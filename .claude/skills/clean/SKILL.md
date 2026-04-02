---
name: clean
description: Clean up Figma Make code into production-ready React + Tailwind
---

The designer has pasted Figma Make (or Figma Dev Mode) output and wants it
cleaned up. Follow every rule in CLAUDE.md to transform it:

1. Ask the designer which file or component they want to create (e.g., "What
   should I call this component? HeroSection, PricingCard, etc.").
2. Create the component file in `src/components/`.
3. Apply all Figma Make cleanup rules from CLAUDE.md:
   - Replace divs with semantic HTML
   - Convert all styles to Tailwind utilities (no inline styles)
   - Add accessibility attributes (alt text, labels, keyboard support)
   - Use flexbox/grid instead of absolute positioning
   - Add responsive breakpoints
   - Add hover/focus/active states
   - Flatten unnecessary nesting
4. Wire the component into `App.tsx`.
5. Run `npm run check` and fix any errors.
6. Show the designer a before/after summary of what changed and why.

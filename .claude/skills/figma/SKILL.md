---
name: figma
description: Fetch a design from Figma and build it as a component
---

The designer wants to pull a design directly from Figma using the Figma MCP.

1. Ask the designer for the Figma file URL or node link if they haven't
   provided one.
2. Use the Figma MCP tools to inspect the design — get the layout structure,
   styles, colors, typography, and spacing.
3. Build a React component in `src/components/` that faithfully reproduces the
   design using Tailwind utilities.
4. Follow every rule in CLAUDE.md — semantic HTML, accessibility, responsive
   breakpoints, no inline styles.
5. Wire it into `App.tsx` or its respective components so the designer can preview it with `npm run dev`.
6. Run `npm run check` and fix any errors.
7. Walk the designer through the result and ask if anything looks off.

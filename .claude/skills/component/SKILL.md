---
name: component
description: Extract part of the page into a reusable component
---

The designer wants to extract a piece of UI into its own reusable component.

1. Ask which part of the UI they want extracted if not clear from context.
2. Create a new file in `src/components/` with a descriptive name.
3. Move the JSX, define a typed props interface for anything that should be
   configurable (text, images, callbacks).
4. Replace the original JSX with the new component, passing props.
5. Make sure the component follows all CLAUDE.md rules (semantic HTML, Tailwind,
   a11y).
6. Run `npm run check` and fix any issues.
7. Briefly explain to the designer what props the component accepts and how to
   reuse it.

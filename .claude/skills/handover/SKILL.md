---
name: handover
description: Prepare the project for engineer handover
---

The designer is done and wants to hand the project off to an engineer. Prepare
everything:

1. Run `npm run check` — fix any errors. The engineer should never receive
   code with lint or type errors.
2. Review all components for CLAUDE.md compliance:
   - Semantic HTML (no div soup)
   - Tailwind only (no inline styles, no CSS files)
   - Accessibility (alt text, labels, keyboard navigation, contrast)
   - Responsive design (sm/md/lg breakpoints)
   - Clean component structure (one per file, typed props)
   - No dead code left behind. If we dont use it actively now delete it
   - Unused dependency removal
   - File renaming, use naming for humans not machines
   - Deduplication of patterns that occur many times
   - Prefer types over interfaces
3. Remove any unused files, imports, or placeholder content.
4. Make sure `src/components/` is tidy — no duplicate or dead components.
5. Run `npm run build` to verify production build succeeds.
6. Give the designer a summary of what's in the project:
   - List of components and what they do
   - Any design decisions that an engineer should know about
   - Anything that still needs backend wiring or real data

---
name: check
description: Run all quality checks and fix any issues
---

Run the full quality check suite and fix everything:

1. Run `npm run format` to auto-format all files.
2. Run `npm run check` (format:check + lint + TypeScript).
3. If there are errors, fix them one by one.
4. Re-run `npm run check` until it passes cleanly.
5. Tell the designer "All checks pass — ready for handover" or explain what
   you fixed in plain language.

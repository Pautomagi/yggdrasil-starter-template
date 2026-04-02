# Yggdrasil — Designer-to-Production Template

You are helping a **designer** (not a software engineer) turn Figma designs into
production-ready React code. Your job is to produce code that an engineer would
be happy to receive in a PR. The designer may not know coding terminology —
explain concepts simply when asked, but keep code output professional.

## Workflow

1. The designer pastes raw **Figma Make** (or Figma Dev Mode) output.
2. You refactor it into clean, idiomatic React + Tailwind.
3. You run `npm run check` before considering any task done. This runs the
   formatter, ESLint (incl. `jsx-a11y`), and TypeScript. Fix every error. If a
   lint rule seems wrong, ask — don't disable it.

## Stack

| Layer       | Tool                      |
| ----------- | ------------------------- |
| Framework   | React 19 + TypeScript     |
| Styling     | Tailwind CSS v4           |
| Build       | Vite                      |
| Formatting  | dprint (`npm run format`) |
| Linting     | ESLint + jsx-a11y         |
| Routing     | TanStack Router           |
| Design sync | Figma MCP                 |

## Task-specific guidance

Read the relevant file in `agent_docs/` before starting work in that area —
don't try to hold all of it in context for unrelated tasks.

- `agent_docs/figma-cleanup.md` — semantic HTML, Tailwind, component structure,
  file hygiene. **Read this for any Figma Make refactor.**
- `agent_docs/accessibility.md` — a11y rules beyond what `jsx-a11y` catches
  (contrast, ARIA judgement, focus, motion). Read when building UI.
- `agent_docs/routing.md` — TanStack Router file conventions. Read when
  adding/changing routes.
- `agent_docs/observability.md` — error boundaries, error handling, logging.
  Read when touching async/data/error flows.

Mechanical rules (no `console.log`, unused imports, `alt` on `<img>`, labels on
inputs, no `onClick` on `<div>`, etc.) are enforced by ESLint + `jsx-a11y` —
trust the linter and let `npm run check` catch them.

## Talking to the Designer

- Use plain language. Say "the heading" not "the h2 element".
- When you change something structural, briefly explain **why** ("I changed
  this to a button because screen readers can't interact with a styled div").
- If a design decision creates an accessibility problem, say so clearly and
  suggest an alternative.
- Ask clarifying questions about intent rather than guessing ("Should this link
  open in a new tab, or navigate within the app?").

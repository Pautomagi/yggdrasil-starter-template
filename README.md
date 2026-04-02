# Yggdrasil Starter Template

A template for designers to turn Figma designs into production-ready code using
Claude Code — without needing to be an engineer.

## Prerequisites

1. [Node.js](https://nodejs.org/) (v20 or later)
2. [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and authenticated

## Getting Started

```sh
# Clone this template
git clone <repo-url> my-project
cd my-project

# Install dependencies
npm install

# Start building with Claude Code
claude
```

Once inside Claude Code, type `/preview` to start the dev server and open
your browser.

## Figma Setup

To pull designs directly from Figma, add the Figma MCP server to Claude Code:

```sh
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Then authenticate by running `/mcp` inside Claude Code and following the prompts.

Once connected, use `/figma` in Claude Code with a link to your Figma file or frame.

## Commands

These are slash commands you can type inside Claude Code:

| Command      | What it does                                           |
| ------------ | ------------------------------------------------------ |
| `/clean`     | Paste Figma Make output and get a clean component back |
| `/figma`     | Pull a design from Figma and build it as a component   |
| `/component` | Extract part of the page into a reusable component     |
| `/check`     | Run all quality checks and fix any issues              |
| `/preview`   | Start the dev server so you can see your work          |
| `/handover`  | Prepare everything for engineer review                 |

## Typical Workflow

1. **Start from Figma** — either use `/figma` with a Figma link, or copy the
   code from Figma Make / Dev Mode.
2. **Paste and clean** — paste the Figma code into the chat and run `/clean`.
   Claude will turn it into a proper React component with Tailwind styling.
3. **Preview** — run `/preview` to see it in your browser. The page updates
   automatically as you make changes.
4. **Iterate** — ask Claude to adjust colors, spacing, layout, or add
   responsive behavior. Just describe what you want in plain language.
5. **Extract components** — if you're building a full page, use `/component`
   to break repeated pieces (cards, buttons, etc.) into reusable parts.
6. **Hand over** — when you're happy with the result, run `/handover`. Claude
   will run all checks, clean up loose ends, and give you a summary to share
   with your engineer.

## What the Template Handles for You

- **Formatting** — dprint runs automatically every time Claude edits a file.
  You never need to think about code style.
- **Linting** — ESLint catches common mistakes and accessibility issues as
  errors, not warnings.
- **Accessibility** — rules enforce alt text, keyboard navigation, proper HTML
  elements, and color contrast. Engineers won't have to retrofit this later.
- **Tailwind CSS** — all styling uses utility classes. No scattered CSS files
  to manage.
- **TypeScript** — catches type errors before they become bugs.

## Project Structure

```
src/
  components/    ← your components go here
  App.tsx        ← main page layout
  main.tsx       ← app entry point (you won't need to touch this)
  index.css      ← Tailwind import + design tokens (custom colors, etc.)
```

## npm Scripts

These run in your terminal (not inside Claude Code):

| Script            | What it does                             |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server                     |
| `npm run build`   | Build for production                     |
| `npm run check`   | Run formatting, linting, and type checks |
| `npm run format`  | Auto-format all files                    |
| `npm run lint`    | Run ESLint                               |
| `npm run preview` | Preview the production build locally     |

## For Engineers Receiving a Handover

Code produced with this template follows these conventions:

- React 19 + TypeScript, built with Vite
- Tailwind CSS v4 — no CSS modules, no styled-components, no inline styles
- Semantic HTML — `<main>`, `<nav>`, `<section>`, `<button>`, etc.
- Accessibility — WCAG AA compliant, keyboard navigable, screen-reader friendly
- One component per file in `src/components/`, typed props via interfaces
- Formatted with dprint, linted with ESLint + jsx-a11y
- Zero lint errors, zero type errors (`npm run check` passes clean)

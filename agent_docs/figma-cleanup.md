# Figma Make Cleanup Rules

Read this when refactoring raw Figma Make / Dev Mode output into production code.

## 1. Semantic HTML

Figma Make outputs `<div>` for everything. Fix this:

- Page landmark → `<main>`
- Navigation → `<nav>` with `<ul>/<li>` for link lists
- Section groups → `<section>` with an `<h2>`+
- Cards / self-contained blocks → `<article>`
- Clickable actions → `<button>` (never a styled `<div>` with onClick)
- Links → `<a>` with real `href`
- Text → `<p>`, `<span>`, heading tags at the correct level
- Lists → `<ul>`/`<ol>` + `<li>`
- Images with meaning → `<img>` with descriptive `alt`
- Decorative images → `alt=""` or use CSS background

## 2. Tailwind — No Raw CSS

- **Never** use inline `style={}` attributes. Convert every style to Tailwind
  utility classes.
- **Never** create CSS files for component styles. All styling is Tailwind.
- Replace Figma's pixel values with Tailwind's spacing scale (`p-4`, `gap-6`,
  etc.). Use arbitrary values `[17px]` only when no scale value is close.
- Replace hex colors with Tailwind palette tokens (`text-gray-700`,
  `bg-blue-600`). If the design system needs custom colors, define them as CSS
  custom properties in `src/index.css` and reference them via
  `text-[var(--brand)]`.
- Use responsive prefixes (`sm:`, `md:`, `lg:`) — Figma output is usually a
  single fixed breakpoint.
- Use `dark:` variants for dark-mode support when applicable.

## 3. Component Structure

- One component per file. File name matches the default export:
  `HeroSection.tsx` → `export default function HeroSection()`.
- Place components in `src/components/`.
- Place page-level layouts in `src/pages/` if routing is used.
- Extract repeated UI into reusable components (e.g., `Button`, `Card`).
- Props must be typed with an explicit `interface` (not inline).
- Avoid `any`. If the type is truly unknown, use `unknown`.

## 4. Common Figma Make Problems

| Figma Make does this            | You must do this instead                            |
| ------------------------------- | --------------------------------------------------- |
| Absolute positioning everywhere | Use flexbox/grid via Tailwind (`flex`, `grid`)      |
| Fixed pixel widths              | Use responsive widths (`w-full`, `max-w-xl`, etc.)  |
| Nested wrapper divs             | Flatten unnecessary nesting                         |
| Auto-generated class names      | Remove them — use Tailwind utilities directly       |
| No hover/focus/active states    | Add interactive states (`hover:`, `focus-visible:`) |
| No responsive design            | Add responsive breakpoints (`sm:`, `md:`, `lg:`)    |
| Images as `<div>` backgrounds   | Use `<img>` with proper `alt` when meaningful       |

## 5. File Hygiene

- `src/index.css` — only Tailwind imports and CSS custom properties (design tokens).
- No other `.css` files unless they contain third-party overrides.
- Images go in `src/assets/`. Use descriptive file names, not `image1.png`.
- Delete any unused files, imports, or components.

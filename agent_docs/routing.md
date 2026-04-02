# Routing — TanStack Router

Read this when adding, removing, or changing routes.

Only add routing when the project genuinely needs multiple pages. A single-page
marketing site or a lone component demo does not need a router.

## Setup

- Install `@tanstack/react-router` and the Vite plugin
  `@tanstack/router-plugin`.
- Use **file-based routing** with the Vite plugin. Route files live in
  `src/routes/` and are auto-discovered — no manual route config to maintain.
- Register the plugin in `vite.config.ts` (import from
  `@tanstack/router-plugin/vite` and place it before the React plugin).
- The root route file is `src/routes/__root.tsx`. It exports a component that
  wraps the entire app (nav, footer, error boundary, `<Outlet />`).

## Route File Conventions

| File path                     | URL             |
| ----------------------------- | --------------- |
| `src/routes/index.tsx`        | `/`             |
| `src/routes/about.tsx`        | `/about`        |
| `src/routes/blog/index.tsx`   | `/blog`         |
| `src/routes/blog/$postId.tsx` | `/blog/:postId` |
| `src/routes/_layout.tsx`      | (layout route)  |

- Create the route file and TanStack will add the required code to register it.
  You might need to wait for it to be generated.
- Dynamic segments use the `$param` prefix (`$postId`, `$slug`).
- Layout routes (shared UI without their own URL) use the `_prefix`.

## Navigation

- Use `<Link to="/about">` from `@tanstack/react-router` — never raw `<a>` for
  internal links. Raw `<a>` causes a full page reload.
- Use the `useNavigate` hook for programmatic navigation (after form submit,
  etc.).
- Active link styling: `<Link>` accepts `activeProps` / `inactiveProps` — use
  these instead of manually checking the URL.

## Data Loading

- Prefer TanStack Router's `loader` for route-level data fetching — data loads
  before the route renders, avoiding layout shift and loading spinners.
- For complex caching/revalidation needs, pair with **TanStack Query** rather
  than hand-rolled fetch logic.

## Rules

- **Never** use `react-router-dom`, `wouter`, or other routers. TanStack Router
  is the standard for this project.
- Keep route files thin — they define the route and compose components from
  `src/components/` and `src/pages/`. Business logic and UI belong in those
  folders, not in route files.
- Every route must export a proper component. Don't leave placeholder routes —
  either build the page or don't create the route.
- 404 handling: add a `src/routes/$404.tsx` (or splat route) that shows a
  user-friendly not-found page.

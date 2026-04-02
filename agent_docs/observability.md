# Observability, Logging & Error Handling

Read this when adding async operations, data fetching, error states, or logging.

## Error Boundaries

- Wrap page-level components in a React error boundary so a single broken
  component doesn't crash the whole app.
- Place a shared `ErrorBoundary` in `src/components/ErrorBoundary.tsx`. Re-use
  it — don't create one per component.
- The fallback UI should be user-friendly ("Something went wrong") with a retry
  action. Never show raw stack traces to users.

## Error Handling in Components

- **Async operations** (data fetching, form submissions) must have explicit
  error handling. Never fire-and-forget a promise — always `.catch()` or use
  `try/catch` in async functions.
- Show error states in the UI. Every component that loads data should handle
  three states: loading, success, and error.
- Use typed error responses — avoid catching `any`. Narrow the error type
  (`if (error instanceof Error)`) before accessing properties.
- Don't swallow errors silently. If you catch an error, either display it to
  the user, re-throw it, or log it — never an empty `catch {}`.

## Logging

- Use `console.error()` only for genuine errors that need developer attention.
  Use `console.warn()` for recoverable issues during development.
- When the project adds a logging library (e.g., Sentry, LogRocket), prefer
  that over console methods. Structured logging with context (`userId`,
  `componentName`, `action`) is better than string messages.
- Never log sensitive data: tokens, passwords, PII, or API keys.

## Observability-Ready Patterns

- Give key user actions descriptive `data-testid` attributes — these double as
  hooks for analytics and monitoring tools later.
- When adding event handlers for important flows (sign-up, checkout, form
  submit), structure them so an analytics call can be inserted in one place
  without refactoring.
- If the app uses `fetch` or an HTTP client, centralise it in a shared utility
  (`src/lib/api.ts` or similar) so logging, error handling, and auth headers
  live in one place rather than scattered across components.

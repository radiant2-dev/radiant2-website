# AGENTS

## Project snapshot
- Stack: Vite + React (JS/TS), Tailwind CSS v4, Radix UI, Lucide icons.
- Entry: `index.html` -> `src/main.jsx` (standard Vite).

## Quick commands
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

## Conventions
- Keep components small and colocated in `src/`.
- Prefer Tailwind utility classes; avoid new global CSS unless necessary.
- When adding UI, follow existing design language in `src/`.
- Static assets live in `public/` (served as-is) and can be imported from `src/` when bundled.

## Notes for agents
- Only edit files in this repo; avoid touching `node_modules`.
- If you add new dependencies, update `package.json` and keep it minimal.

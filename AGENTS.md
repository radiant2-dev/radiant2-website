# AGENTS

## Project snapshot

- Stack: Vite, JavaScript, React, Tailwind, Shadcn
- Entry: `index.html` -> `src/main.jsx` (standard Vite).

## Quick commands

- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`
- Format: `npm run format`
- Check formatting: `npm run format:check`

## Conventions

- Keep components small and colocated in `src/`.
- Prefer Tailwind utility classes; avoid new global CSS unless necessary.
- When adding UI, follow existing design language in `src/`.
- Static assets live in `public/` (served as-is) and can be imported from `src/` when bundled.
- Use Shadcn components if possible, don't reinvent the wheel
- Don't use Typescript, this is a pure JS website
- Run Prettier via `npm run format` before handing off changes.

## Design

- Keep simple minimalist design
- Prefer flat design and styling, avoid depth and shadows, unless explicitly
  asked

## Notes for agents

- Only edit files in this repo; avoid touching `node_modules`.
- If you add new dependencies, update `package.json` and keep it minimal.

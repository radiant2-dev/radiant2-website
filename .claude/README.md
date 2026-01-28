# Claude Commands for Radiant2

This directory contains custom Claude Code commands (skills) for the Radiant2 project.

## Available Commands

### `/npm-prepush`

Runs comprehensive npm/Node.js pre-push checks and automatically fixes issues where possible.

**What it does:**

1. ✅ Checks code formatting with Prettier (auto-fixes)
2. ✅ Runs ESLint for code quality (attempts auto-fix)
3. ✅ Builds the project with Vite
4. 📊 Provides detailed summary of all findings
5. 🔧 Automatically fixes issues when possible

**Usage:**

```
/npm-prepush
```

**Example workflow:**

```
User: /npm-prepush

Claude will:
- Run format:check → auto-fix if needed
- Run lint → auto-fix if possible
- Run build → report any errors
- Summarize what passed, what was fixed, what needs attention
```

**When to use:**

- Before pushing code to repository
- After making significant changes
- To ensure code quality before creating a PR
- As a quick health check of the codebase

## Benefits of Claude Commands vs Git Hooks

- **Interactive**: Get detailed explanations of what failed and why
- **Smart fixing**: Claude can understand context and suggest better fixes
- **No forced execution**: Run checks when you want, not automatically
- **Better feedback**: Clear summaries with actionable next steps
- **Learning**: Understand what's being fixed and why

## Available NPM Scripts

The following scripts are used by the `/prepush` command:

- `npm run format:check` - Check if files need formatting
- `npm run format` - Auto-format all files
- `npm run lint` - Check for linting issues
- `npm run lint:fix` - Auto-fix linting issues
- `npm run build` - Build the project

You can run these manually if needed, but the `/prepush` command handles all of them intelligently.

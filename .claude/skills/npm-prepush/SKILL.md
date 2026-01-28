---
name: npm-prepush
description: Run comprehensive npm/Node.js pre-push checks (format, lint, build). Automatically fix issues and provide detailed summary. Use before pushing code or when checking code quality.
disable-model-invocation: true
allowed-tools: Bash(npm *), Bash(npx *)
---

# npm-prepush

Run comprehensive pre-push checks for npm/Node.js projects and automatically fix issues where possible.

## Steps

1. **Check Code Formatting (Prettier)**
   - Run: `npm run format:check`
   - If it fails, automatically fix with: `npm run format`
   - List all files that were formatted

2. **Check Linting (ESLint)**
   - Run: `npm run lint`
   - If it fails, attempt auto-fix with: `npm run lint:fix`
   - List any remaining errors that need manual fixes

3. **Build Project**
   - Run: `npm run build`
   - If it fails, identify which files/components have issues
   - Provide clear error summary

4. **Provide Comprehensive Summary**

Create a clear summary with:

```
🔍 Pre-Push Check Results
==========================

✅ PASSED:
- [List what passed]

⚠️ AUTO-FIXED:
- [List files that were formatted]
- [List lint issues that were auto-fixed]

❌ NEEDS ATTENTION:
- [List remaining issues with file paths]

📊 Summary: [Overall status and next steps]
```

## Important Notes

- Always run ALL three checks, even if one fails
- Be specific about which files were modified
- Provide actionable next steps for any failures
- If everything passes, clearly state the code is ready to push
- Use emoji indicators for visual clarity (✅ ⚠️ ❌)

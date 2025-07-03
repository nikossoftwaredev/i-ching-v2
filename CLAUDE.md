# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack (fast refresh)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture Overview

This is a Next.js 15 application using the App Router with TypeScript and Tailwind CSS.

### Key Technologies

- **Next.js 15.3.4** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** with PostCSS
- **shadcn/ui** components setup (components.json configured)
- **pnpm** as package manager

### Project Structure

- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts
  - `page.tsx` - Homepage
  - `globals.css` - Global styles and Tailwind directives
- `/components` - React components (shadcn/ui components will be added here)
- `/lib` - Utility functions
  - `utils.ts` - Contains `cn()` helper for className merging
- `/public` - Static assets

### Important Configuration

- **TypeScript**: Strict mode enabled, using path aliases (@/\* maps to root)
- **Tailwind**: CSS variables enabled, configured for shadcn/ui components
- **ESLint**: Next.js recommended rules with TypeScript support

# Must Use

- use pnpm dlx shadcn@latest add button to add any shadcn component.

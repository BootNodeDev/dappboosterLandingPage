# LLM Instructions

This file provides guidance to LLM-powered coding assistants when working with code in this repository.

## Project Overview

dAppBooster landing page built with Astro 5, deployed as a static site on Vercel. Single page, no SSR, no client-side framework.

## Commands

```bash
pnpm dev        # Dev server on localhost:4321
pnpm build      # Production build to ./dist/
pnpm preview    # Preview production build locally
pnpm lint       # Prettier --write + ESLint --fix
pnpm format     # Prettier --write on .astro files
```

No test framework is configured.

## Architecture

All interactivity is vanilla JS in `<script>` tags within Astro components (FAQ accordion, clipboard copy). No hydration directives are used anywhere.

### Path Aliases (tsconfig.json)

- `@/*` -- `./src/*`
- `@components/*`, `@layouts/*`, `@pages/*`, `@assets/*`, `@constants/*` -- corresponding `./src/` subdirectories

### Key Files

- `src/pages/index.astro` -- sole page, composes all sections; defines all CSS custom properties in `:root`
- `src/layouts/Layout.astro` -- HTML shell with meta tags, fonts, global styles (10px base font-size for rem)
- `src/constants/externalLinks.ts` -- shared link definitions; imported by Hero, Banner, and Footer
- `vercel.json` -- injects security response headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) on all routes at the Vercel CDN layer
- `.npmrc` -- hoists `eslint-plugin-jsx-a11y` to the top-level `node_modules` via `public-hoist-pattern`; required because `eslint-plugin-astro` loads it with `requireUserLocal` which bypasses pnpm's symlink isolation; removing this breaks `pnpm lint`

### Component Patterns

- Props via frontmatter destructuring: `const { variant, href } = Astro.props`
- Content injection via `<slot />`
- Data-driven sections use local arrays with `.map()` (Intro, Features, FAQ, Footer social items)
- SVG icons are standalone Astro components using `fill="currentColor"` -- never wrapped in `<Image>`
- Raster/SVG file imports use the Astro `<Image>` component with required `width`/`height` and explicit `loading="eager"|"lazy"`

## Styling Conventions

- Scoped CSS in `<style>` blocks, no CSS framework
- Desktop-first responsive design (max-width media queries: 1200px, 1024px, 768px, 480px)
- **Spacing**: always `calc(var(--space) * N)`, never hardcoded pixel values
- **Visual hierarchy**: use `opacity: 0.7`/`0.8` on secondary text, not different color values
- **Hover states**: `translateY(-2px)` on buttons; global `transition` on `a`/`button` must target specific properties (`color`, `background-color`), never `transition: all`
- **Animations**: use `translate3d` (not `translate`) for GPU acceleration; respect `prefers-reduced-motion`
- **Decorative elements**: absolute-positioned circles using `radial-gradient` backgrounds with `z-index: -1`
- Font: Manrope Variable, rem units based on `html { font-size: 10px }`

## Code Conventions

- TypeScript strict mode (extends `astro/tsconfigs/strict`)
- No semicolons in TS/JS
- pnpm as package manager, Node >=20.19.5 (.nvmrc)
- ESLint 9 flat config covering JS, TS, Markdown, CSS, and Astro (eslint-plugin-astro with jsx-a11y-recommended enabled)
- External links must use `target="_blank" rel="noopener noreferrer"`

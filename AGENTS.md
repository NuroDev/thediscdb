# Project guidance

These instructions apply to the entire repository.

## Project overview

TheDiscDB is an Astro SSR frontend for the TheDiscDB GraphQL API. It deploys to
Cloudflare Workers and uses Tailwind CSS for styling. Interactive components use
React through the Astro Preact integration's compatibility mode.

- Runtime target: Cloudflare Workers
- Framework: Astro 7.4 beta with `output: 'server'`
- Cloudflare tooling: `cf` CLI with `@astrojs/cloudflare` v15 beta
- Package manager: pnpm 11.20.0
- Minimum Node.js version: 22.18
- TypeScript: strict mode

Use pnpm exclusively. Do not add Bun or npm lockfiles.
Use global `cf` for account commands such as `cf auth login`. Project scripts use
the locally installed Astro and `cf` versions.

## Commands

```bash
pnpm install --frozen-lockfile  # Reproduce the dependency tree
pnpm dev                        # Start the Astro development server
pnpm check                      # Check formatting, then lint
pnpm build                      # Build the production Worker with Astro
pnpm deploy                     # Deploy the existing build with cf
pnpm preview                    # Preview with the Cloudflare workerd runtime
pnpm codegen                    # Regenerate the GraphQL SDK
pnpm cf-typegen                 # Regenerate Cloudflare binding types
```

Cloudflare builds and type generation may need permission to bind temporary local
runtime ports. There is currently no automated test script. Do not report tests as
passing.

## Architecture

- `astro.config.ts` configures SSR, Cloudflare, Preact compatibility, Tailwind,
  remote images, and the `/` to `/movies` redirect.
- `cloudflare.config.ts` owns the Worker entrypoint, bindings, custom domain,
  compatibility settings, caching, and observability. Do not add Wrangler config.
- Astro's Cloudflare adapter writes deployable output to
  `.cloudflare/output/`. Build before running `pnpm deploy` or `pnpm preview`.
- Cloudflare binding and runtime types are generated in
  `.cloudflare/types/index.d.ts` by dev, build, or `pnpm cf-typegen`. Regenerate
  them before typechecking a fresh checkout. Never edit generated types manually.
- `src/worker.ts` is the custom Cloudflare Worker entrypoint. Keep Astro requests
  routed through `@astrojs/cloudflare/handler`.
- `src/pages/` contains route handlers and Astro pages. Pages fetch their data in
  server-side frontmatter.
- `src/graphql/index.ts` owns the `graphql-request` client and Cloudflare Cache API
  wrapper. Keep external GraphQL calls behind this client.
- `src/components/GlobalSearch.tsx` is a React component rendered through Preact
  compatibility mode.
- `src/layouts/Layout.astro` owns global styles, metadata, navigation, and Astro's
  client router.
- Prefer the `~/*` import alias for source imports.

## GraphQL workflow

- Define operations in `src/graphql/queries.gql`.
- `pnpm codegen` fetches the remote schema configured in `codegen.config.ts` and
  generates `src/graphql/sdk.gen.ts`.
- Never edit `src/graphql/sdk.gen.ts` manually.
- After changing queries or codegen configuration, run `pnpm codegen` and include
  the generated result.
- Add cache TTLs for new operations to `TTL_MAP` in `src/graphql/index.ts` when
  their caching needs differ from the default five minutes.

## Application constraints

### Pagination

List pages use GraphQL cursor pagination. Preserve these pairings:

- Forward: `first` with `after`
- Backward: `last` with `before`

Never omit both `first` and `last`, because that can return an unbounded result.
The movies, series, and boxsets pages currently request 48 items forward and 24
backward. This is a known inconsistency. Do not silently change it during unrelated
work. If pagination is in scope, confirm the intended page size and use it in both
directions.

Pagination URLs use `cursor` and `direction`; list filtering also uses `q`, `sort`,
`dir`, and, where supported, `genre`. Preserve applicable query parameters when
adding or changing controls.

### Images

- API image paths must pass through `getImageUrl()` in `src/utils/image.ts`.
- Use Astro's `Image` component for content images when possible.
- Remote image optimization is restricted to `thediscdb.com`.
- Poster images use a 2:3 aspect ratio.

### Navigation

- Astro's `ClientRouter` provides client-side navigation.
- Navigation persists between pages.
- Poster transition names must match between cards and detail pages.

## Styling

- Use Tailwind CSS utilities and the `cn()` helper in `src/utils/cn.ts` for merged
  class names.
- Reuse `default-focus` and `default-transition` from
  `src/styles/global.css`.
- Dark mode follows the system preference. There is no manual theme toggle.

## Definition of done

Before reporting a code change as complete:

1. Run `pnpm codegen` when GraphQL operations or generator configuration changed.
2. Run `pnpm check`.
3. Run `pnpm build`.
4. State that no automated tests are configured, unless a test script has been
   added by that point.
5. Update this file when commands or architectural constraints materially change.

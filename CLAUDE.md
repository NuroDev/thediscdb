# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a custom frontend for TheDiscDB (https://thediscdb.com/), a catalog of physical movie disc contents. The project uses Astro with SSR (Server-Side Rendering) deployed to Cloudflare Workers, consuming data from the official TheDiscDB GraphQL API.

**Deployment Target**: Cloudflare Workers
**Package Manager**: Bun (v1.3.2)

## Development Commands

```bash
# Development
bun run dev              # Start dev server
bun run build            # Build for production
bun run preview          # Preview production build with Wrangler

# Code Quality
bun run check            # Run Biome checks (lint + format)
bun run lint             # Lint with Biome
bun run format           # Format with Biome

# Code Generation
bun run codegen          # Regenerate TypeScript types from GraphQL schema
bun run cf-typegen       # Generate Cloudflare Workers types
```

**Important**: After modifying `src/graphql/queries.gql`, always run `bun run codegen` to regenerate the TypeScript SDK.

## Architecture

### SSR with Cloudflare Workers

- **Output Mode**: `server` (full SSR, not static)
- **Adapter**: `@astrojs/cloudflare`
- **No Content Layer**: Data is fetched directly in page components via GraphQL, not through Astro's content layer
- **Home redirect**: `/` → `/movies` (307 temporary redirect)

### Data Flow

1. **GraphQL Client** (`src/graphql/index.ts`):
   - Singleton `GraphQLClient` instance
   - Endpoint: `https://thediscdb.com/graphql/`
   - Type-safe SDK generated from queries

2. **Queries** (`src/graphql/queries.gql`):
   - All GraphQL queries live here
   - After editing, run `bun run codegen` to regenerate types

3. **Code Generation** (`codegen.config.ts`):
   - Schema fetched from: `https://raw.githubusercontent.com/TheDiscDb/data/refs/heads/main/tools/ImportBuddy/source/ImportBuddy/TheDiscDb.Client/schema.graphql`
   - Generates: `src/graphql/sdk.gen.ts`
   - Uses `graphql-request` plugin for type-safe queries

### Pagination Strategy

**GraphQL Cursor-Based Pagination**:
- Forward: `first: 24` + `after: cursor` (Next button)
- Backward: `last: 24` + `before: cursor` (Previous button)
- Page size: 24 items

**Critical Implementation Detail**:
```typescript
// ✅ Correct bidirectional pagination
{
  first: direction === 'prev' ? undefined : 24,
  after: direction === 'next' ? cursor : undefined,
  last: direction === 'prev' ? 24 : undefined,
  before: direction === 'prev' ? cursor : undefined,
}

// ❌ WRONG - will return all items when going back
{
  first: direction === 'prev' ? undefined : 24,  // undefined = no limit!
}
```

The pagination component (`src/components/Pagination.astro`) uses `cursor` and `direction` query params to construct pagination URLs.

### Routing Structure

```
/                           → 307 redirect to /movies
/search                     → Global search results page
/movies                     → List page (with sort, pagination)
/movies/[slug]              → Detail page
/series                     → List page
/series/[slug]              → Detail page
/boxsets                    → List page
/boxsets/[slug]             → Detail page
```

### Global Search

The site features a global search that searches across all content types:

- **Search Input**: Located in the navigation bar, visible on all pages
- **Dropdown Results**: Shows up to 3 results per type (Movies, Series, BoxSets) as you type
- **Search Results Page**: `/search?q=query` shows 12 results per type with pagination links
- **Implementation**:
  - `GlobalSearch.tsx`: Preact component with debounced search (300ms)
  - `/api/search`: Server-side API endpoint that queries all content types in parallel
  - Server-side GraphQL search using `contains` filter on title field

### List Page Features

All list pages (`/movies`, `/series`, `/boxsets`) support:
- **Sort**: Latest Release (default), Date Added, Release Date, Title
- **Pagination**: Cursor-based with 24 items/page
- **Search via URL**: Can be filtered via `?q=query` parameter (used by "View all" links from global search)

Query params: `?q=search&sort=latestReleaseDate&cursor=...&direction=next`

### Image Handling

Images from the API are relative URLs. Use `getImageUrl()` utility (`src/utils/image.ts`) to convert them to absolute URLs:
```typescript
getImageUrl('/path/to/image.jpg')  // → 'https://thediscdb.com/images/path/to/image.jpg'
```

**Image Optimization**: The project uses Astro's `Image` component for automatic optimization:
- Remote images from `thediscdb.com` are allowed via `image.remotePatterns` in `astro.config.ts`
- Images are optimized at build time with `imageService: 'compile'`
- The `MediaCard` component uses `<Image>` with appropriate dimensions (400x600 for 2:3 aspect ratio)

When adding new image components, import and use `Image` from `astro:assets`:
```astro
---
import { Image } from 'astro:assets';
import { getImageUrl } from '~/utils/image';

const imageUrl = getImageUrl(props.imageUrl);
---

{imageUrl && (
  <Image
    src={imageUrl}
    alt="Description"
    width={400}
    height={600}
    loading="lazy"
  />
)}
```

## View Transitions

The site uses Astro's View Transitions API for smooth client-side navigation:

- **Enabled globally** via `<ClientRouter />` in `Layout.astro`
- **Navigation persists** across page changes with `transition:persist`
- **Content animates** with a slide effect using `transition:animate="slide"`
- **Cover art morphs** between list and detail pages using `transition:name="poster-${slug}"`

**How it works:**
1. When navigating from a movie list to a movie detail page, the poster image smoothly transitions from its position in the grid to the larger detail view
2. The same `transition:name` (e.g., `poster-the-matrix`) is used on both the `MediaCard` and detail page images
3. Navigation and main layout persist, only content animates

**Adding transitions to new elements:**
```astro
<!-- Named transition for morphing -->
<img transition:name="unique-id" ... />

<!-- Animate on page change -->
<div transition:animate="slide" ... />

<!-- Persist element across navigation -->
<nav transition:persist />
```

## Styling

- **Framework**: TailwindCSS v4 (via `@tailwindcss/vite`)
- **Utility**: `cn()` function (`src/utils/cn.ts`) for conditional class merging
- **Custom utilities** in `src/styles/global.css`:
  - `default-focus`: Standard focus ring styles
  - `default-transition`: 300ms ease-in-out transition
  - `dark`: Custom dark mode variant using `prefers-color-scheme`

**Example usage**:
```astro
<div class="default-transition hover:scale-[1.02]">
  <button class="default-focus">Click me</button>
</div>
```

## Component Architecture

### Layouts
- `src/layouts/Layout.astro`: Base layout with Navigation and main wrapper

### Reusable Components
- `Navigation.astro`: Top nav bar with active state and global search
- `GlobalSearch.tsx`: Preact component for global search with dropdown results
- `MediaCard.astro`: Card for movies/series/boxsets (used in list pages)
- `Pagination.astro`: Cursor pagination controls
- `SortControls.astro`: Sort dropdown with direction toggle

### Page Components
List pages and detail pages fetch data directly in their frontmatter using the GraphQL client:

```typescript
---
import { query } from '~/graphql';

const { mediaItems } = await query.GetAllMovies({
  first: 24,
  order: [{ latestReleaseDate: 'DESC' }],
  where: { type: { eq: 'Movie' } }
});
---
```

## Common Patterns

### Adding a New GraphQL Query

1. Add query to `src/graphql/queries.gql`
2. Run `bun run codegen`
3. Import and use: `import { query } from '~/graphql'`
4. Call: `await query.YourNewQuery({ ... })`

### Adding Sort Options

Edit `SortControls.astro` to add new sort options, ensuring the field exists in the GraphQL schema and is included in the `order` parameter.

### Adding a New Page Type

If adding a new content type beyond movies/series/boxsets:
1. Add GraphQL queries (list + detail)
2. Create `/src/pages/[type]/index.astro` (list)
3. Create `/src/pages/[type]/[slug].astro` (detail)
4. Add nav item to `Navigation.astro`
5. Implement pagination with correct `first/last/before/after` logic

## Future Enhancements

The project is prepared for but does not currently implement:
- **ISR Caching**: Can be added using `Astro.response.headers.set('Cache-Control', ...)` in page frontmatter
- **FlexSearch**: For client-side fuzzy search (currently uses GraphQL `contains` filter)
- **Preact Components**: Integration is configured but not yet used for interactive features

## Notes

- TypeScript strict mode is enabled
- Biome handles all linting and formatting (not Prettier/ESLint)
- Images use aspect ratio utilities (e.g., `aspect-2/3` for posters)
- Dark mode is system preference-based (no toggle)

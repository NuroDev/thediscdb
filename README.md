<div align='center'>
    <br/>
    <br/>
    <h3>💿</h3>
	<h3>The DiscDB</h3>
    <p>A modern, fast frontend for <a href="https://thediscdb.com/" target="_blank" rel="noopener noreferrer">TheDiscDB</a></p>
	<p>A comprehensive catalog of physical movie disc contents.</p>
    <br/>
    <br/>
</div>

## Features

- **Server-Side Rendering**: Fast initial page loads with Astro SSR on [Cloudflare Workers](https://workers.cloudflare.com/)
- **Global Search**: Search across movies, series, and boxsets with real-time dropdown results
- **Advanced Filtering**: Sort by latest release, date added, release date, or title
- **Smooth Transitions**: View Transitions API for seamless page navigation with morphing animations
- **Responsive Design**: Fully responsive [TailwindCSS](https://tailwindcss.com/) layout with dark mode support
- **Type-Safe**: End-to-end type safety with GraphQL Code Generator
- **Optimized Images**: Automatic image optimization with Astro's built-in image service

## Tech Stack

- **Framework**: [Astro](https://astro.build/) with SSR
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Data**: [GraphQL](https://graphql.org/) with [graphql-request](https://github.com/jasonkuhrt/graphql-request)
- **Interactivity**: [Preact](https://preactjs.com/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Code Quality**: [Biome](https://biomejs.dev/)

## Prerequisites

- [Bun](https://bun.sh/) v1.3.2 or later

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd thediscdb

# Install dependencies
bun install

# Generate TypeScript types from GraphQL schema
bun run codegen

# Start development server
bun run dev
```

## Development Commands

```bash
# Development
bun run dev              # Start dev server at http://localhost:4321
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

## Project Structure

```
thediscdb/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── GlobalSearch.tsx # Search component (Preact)
│   │   ├── MediaCard.astro  # Movie/series card
│   │   ├── Navigation.astro # Top navigation bar
│   │   └── Pagination.astro # Cursor-based pagination
│   ├── graphql/
│   │   ├── queries.gql      # GraphQL queries
│   │   ├── index.ts         # GraphQL client setup
│   │   └── sdk.gen.ts       # Generated TypeScript SDK
│   ├── layouts/
│   │   └── Layout.astro     # Base page layout
│   ├── pages/
│   │   ├── movies/          # Movie list and detail pages
│   │   ├── series/          # Series list and detail pages
│   │   ├── boxsets/         # Boxset list and detail pages
│   │   ├── search.astro     # Global search results
│   │   └── api/             # API endpoints
│   ├── styles/
│   │   └── global.css       # Global styles and utilities
│   └── utils/               # Utility functions
├── astro.config.ts          # Astro configuration
├── codegen.config.ts        # GraphQL Code Generator config
└── wrangler.jsonc           # Cloudflare Workers config
```

## How It Works

### Data Flow

1. GraphQL queries are defined in `src/graphql/queries.gql`
2. Running `bun run codegen` generates a type-safe SDK
3. Pages fetch data server-side using the SDK
4. Astro renders pages on Cloudflare Workers edge network

### Pagination

The site uses cursor-based pagination (not offset-based) for efficient data fetching:
- 48 items per page
- Bidirectional navigation (next/previous)
- Cursor state maintained via URL query parameters

### Search

**Global Search**:
- Real-time search with 300ms debounce
- Shows up to 3 results per content type
- Full results available at `/search?q=query`

**List Filtering**:
- Each list page supports `?q=` parameter for filtering
- Combined with sort options for flexible browsing

### View Transitions

Smooth client-side navigation using Astro's View Transitions:
- Cover art morphs between list and detail pages
- Navigation bar persists across pages
- Content slides in with custom animations

## Deployment

The project is configured for [Cloudflare Workers](https://workers.cloudflare.com/) deployment:

```bash
# Build for production
bun run build

# Deploy to Cloudflare Workers
wrangler deploy
```

Ensure you have a `wrangler.jsonc` configured with your Cloudflare account details.

## Adding GraphQL Queries

1. Add your query to `src/graphql/queries.gql`
2. Run `bun run codegen` to regenerate types
3. Import and use: `import { query } from '~/graphql'`
4. Call in your page: `await query.YourNewQuery({ ... })`

## Contributing

This is a personal project, but suggestions and feedback are welcome!

## Credits

- Data provided by [TheDiscDB](https://thediscdb.com/)
- Built with [Astro](https://astro.build/)
- Deployed on [Cloudflare Workers](https://workers.cloudflare.com/)

## License

MIT

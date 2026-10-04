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
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Code Quality**: [Biome](https://biomejs.dev/)

## Prerequisites

- [Node.js](https://nodejs.org/) v22.18 or later
- [pnpm](https://pnpm.io/) v11.20.0 or later
- Global [Cloudflare CLI](https://developers.cloudflare.com/cf/), installed with
  `pnpm add --global cf`, for account commands such as `cf auth login`

Project scripts use the locally installed Astro and `cf` versions.

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd thediscdb

# Install dependencies
pnpm install --frozen-lockfile

# Generate Cloudflare binding and runtime types
pnpm cf-typegen

# Generate TypeScript types from GraphQL schema
pnpm codegen

# Start development server
pnpm dev
```

## Development Commands

```bash
# Development
pnpm dev                  # Start dev server at http://localhost:4321
pnpm build                # Build for production with Astro
pnpm deploy               # Deploy the existing production build with cf
pnpm deploy:preview       # Build and deploy a branch Worker Preview
pnpm preview              # Preview production build with Cloudflare workerd

# Code Quality
pnpm check                # Run Oxfmt and Oxlint checks
pnpm lint                 # Lint with Oxlint
pnpm format               # Format with Oxfmt

# Code Generation
pnpm codegen              # Regenerate TypeScript types from GraphQL schema
pnpm cf-typegen           # Generate Cloudflare Workers types
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
└── cloudflare.config.ts     # Cloudflare Workers config
```

## How It Works

### Data Flow

1. GraphQL queries are defined in `src/graphql/queries.gql`
2. Running `pnpm codegen` generates a type-safe SDK
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
pnpm build

# Deploy to Cloudflare Workers
pnpm deploy
```

The project uses the `cf` CLI, Astro 7.4 beta, and `@astrojs/cloudflare` v15 beta.
Worker settings live in `cloudflare.config.ts`, including the custom domain,
bindings, and observability. Build output and generated types live in the ignored
`.cloudflare/` directory.

Sign in with `cf auth login` before deploying, or set
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in CI. `cf` does not reuse a
Wrangler login. For Workers Builds, use `pnpm build` as the build command and
`pnpm deploy` as the deploy command.

### Workers Previews

Deploy the production configuration once with `pnpm build && pnpm deploy` to
enable Preview URLs. Then build and deploy a branch Preview:

```bash
pnpm deploy:preview                # Use the current Git or CI branch name
pnpm deploy:preview my-feature     # Use an explicit Preview name
```

The command builds with Preview settings and returns its URLs. Previews use
`workers.dev`, without the production custom domain. Rebuild with `pnpm build`
before deploying to production again. `pnpm preview` remains the local preview
command. See [Cloudflare Workers Previews](https://developers.cloudflare.com/cf/projects/#deploy-a-preview).

## Adding GraphQL Queries

1. Add your query to `src/graphql/queries.gql`
2. Run `pnpm codegen` to regenerate types
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

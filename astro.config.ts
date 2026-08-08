import cloudflare from '@astrojs/cloudflare';
import { cacheCloudflare } from '@astrojs/cloudflare/cache';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		imageService: 'compile',
	}),
	cache: {
		provider: cacheCloudflare(),
	},
	image: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'thediscdb.com',
			},
		],
	},
	integrations: [
		preact({
			compat: true,
		}),
	],
	output: 'server',
	redirects: {
		'/': {
			destination: '/movies',
			status: 307,
		},
	},
	routeRules: {
		'/api/search': { maxAge: 300, swr: 60, tags: ['search'] },
		'/boxsets': { maxAge: 300, swr: 60, tags: ['boxsets'] },
		'/boxsets/[slug]': { maxAge: 600, swr: 300, tags: ['boxsets'] },
		'/movies': { maxAge: 300, swr: 60, tags: ['movies'] },
		'/movies/[slug]': { maxAge: 600, swr: 300, tags: ['movies'] },
		'/search': { maxAge: 300, swr: 60, tags: ['search'] },
		'/series': { maxAge: 300, swr: 60, tags: ['series'] },
		'/series/[slug]': { maxAge: 600, swr: 300, tags: ['series'] },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});

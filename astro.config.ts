import cloudflare from '@astrojs/cloudflare';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		imageService: 'compile',
		platformProxy: {
			enabled: true,
		},
	}),
	image: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'thediscdb.com',
			},
		],
	},
	integrations: [preact()],
	output: 'server',
	redirects: {
		'/': {
			destination: '/movies',
			status: 307,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});

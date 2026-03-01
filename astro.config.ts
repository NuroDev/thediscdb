import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
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
	integrations: [react()],
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

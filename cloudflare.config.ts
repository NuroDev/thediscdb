import { bindings, defineConfig } from 'cf/config';

const WORKER_NAME = 'thediscdb';

export default defineConfig(({ isPreview }) => ({
	worker: {
		cache: {
			enabled: true,
		},
		compatibilityDate: '2026-10-04',
		compatibilityFlags: ['nodejs_compat', 'global_fetch_strictly_public'],
		domains: isPreview ? [] : [`${WORKER_NAME}.nuro.dev`],
		entrypoint: './src/worker.ts',
		env: {
			ASSETS: bindings.assets(),
			IMAGES: bindings.images(),
		},
		name: WORKER_NAME,
		observability: {
			enabled: true,
			issues: {
				enabled: true,
			},
			logs: {
				enabled: true,
			},
			traces: {
				enabled: true,
			},
		},
		previewUrls: true,
	},
}));

import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// This is important for processing Svelte files (e.g., TypeScript, PostCSS)
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
		// No paths.base needed if deploying to the root of your domain
		// If you absolutely need a base path (e.g., for a monorepo or specific subdirectory hosting),
		// ensure Netlify is configured to serve from that subdirectory as well,
		// which is less common for simple SvelteKit deployments.
	}
};

export default config;

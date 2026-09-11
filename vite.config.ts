import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// SvelteKit reads its own configuration (adapter, preprocess, paths, etc.)
// from svelte.config.js. This file only wires the SvelteKit Vite plugin in.
export default defineConfig({
	plugins: [sveltekit()]
});

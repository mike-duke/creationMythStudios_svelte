import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// SvelteKit reads its own configuration (adapter, preprocess, paths, etc.)
// from svelte.config.js. This file wires in the Vite plugins.
export default defineConfig({
	plugins: [
		// Image optimization for <enhanced:img>. MUST come before sveltekit().
		// At build time it generates avif/webp + multiple sizes and adds
		// intrinsic width/height to prevent layout shift.
		enhancedImages(),
		sveltekit()
	]
});

import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

// When deploying to GitHub Pages at https://<user>.github.io/<repo>/, the site
// is served from a sub-path, so links/assets must be prefixed with it.
// The deploy workflow sets BASE_PATH to '/<repo-name>' in CI.
// Locally (dev) and on a custom domain / user page, leave it empty.
const base = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Treat .svelte, .svx and .md files as components. mdsvex compiles the
	// markdown ones into Svelte components at build time — this is what lets our
	// content live as plain .md files.
	extensions: ['.svelte', '.svx', '.md'],

	// mdsvex is a Svelte preprocessor that turns markdown (with optional embedded
	// Svelte) into components.
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],

	compilerOptions: {
		// Force runes mode for the whole project (Svelte 5). Can be removed in Svelte 6.
		runes: true
	},

	kit: {
		// adapter-static pre-renders the whole app to plain HTML/CSS/JS, which is
		// exactly what GitHub Pages needs (no server at runtime).
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// A 404 page makes GitHub Pages behave nicely on unknown URLs.
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base
		}
	}
};

export default config;

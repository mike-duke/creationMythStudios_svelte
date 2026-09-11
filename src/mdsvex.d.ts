// Lets TypeScript understand imports of markdown files processed by mdsvex.
// Each .md / .svx file compiles to a Svelte component (the default export),
// plus any named exports from its frontmatter `metadata`.
declare module '*.md' {
	import type { Component } from 'svelte';
	export const metadata: Record<string, unknown>;
	const component: Component;
	export default component;
}

declare module '*.svx' {
	import type { Component } from 'svelte';
	export const metadata: Record<string, unknown>;
	const component: Component;
	export default component;
}

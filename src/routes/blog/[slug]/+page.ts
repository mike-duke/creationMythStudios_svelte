import { getPosts, type PostMeta } from '$lib/posts';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import type { EntryGenerator, PageLoad } from './$types';

// All post modules, lazily loadable by path. Not eager, so each post's content
// is only pulled in when that page is built.
const postModules = import.meta.glob<{
	default: Component;
	metadata: Omit<PostMeta, 'slug'>;
}>('$lib/posts/*.md');

// Map slug -> loader function, e.g. 'self-editing-checklist' -> () => import(...)
const bySlug = Object.fromEntries(
	Object.entries(postModules).map(([path, loader]) => {
		const slug = path.split('/').pop()!.replace(/\.md$/, '');
		return [slug, loader];
	})
);

// Tells the static prerenderer exactly which /blog/[slug] pages to generate.
// Without this, SvelteKit wouldn't know the dynamic slugs at build time.
export const entries: EntryGenerator = () => {
	return getPosts().map((post) => ({ slug: post.slug }));
};

export const load: PageLoad = async ({ params }) => {
	const loader = bySlug[params.slug];
	if (!loader) {
		throw error(404, 'Post not found');
	}

	const post = await loader();
	return {
		// The compiled Svelte component for the post body.
		content: post.default,
		meta: { slug: params.slug, ...post.metadata }
	};
};

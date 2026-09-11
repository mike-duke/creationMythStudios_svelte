import { getPosts } from '$lib/posts';
import type { PageLoad } from './$types';

// Runs at build time (the whole site is prerendered). Returns the list of
// posts to the page component as `data`.
export const load: PageLoad = () => {
	return { posts: getPosts() };
};

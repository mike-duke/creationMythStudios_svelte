// Utilities for reading blog posts from src/lib/posts/*.md.
//
// Posts are plain markdown files with YAML frontmatter (title, date, etc.).
// mdsvex exposes that frontmatter as a `metadata` export on each compiled
// module, and Vite's import.meta.glob lets us collect them all at build time.

export type PostMeta = {
	slug: string;
	title: string;
	description: string;
	date: string;
	published: boolean;
};

// The frontmatter shape as it comes out of mdsvex (before we attach the slug).
type Frontmatter = Omit<PostMeta, 'slug'>;

/**
 * Read metadata for every post, newest first, excluding unpublished drafts.
 * `eager: true` means the modules are loaded at build time, so this stays
 * synchronous and fully static.
 */
export function getPosts(): PostMeta[] {
	const modules = import.meta.glob<{ metadata: Frontmatter }>('./posts/*.md', {
		eager: true
	});

	const posts: PostMeta[] = Object.entries(modules).map(([path, mod]) => {
		// './posts/my-post.md' -> 'my-post'
		const slug = path.split('/').pop()!.replace(/\.md$/, '');
		return { slug, ...mod.metadata };
	});

	return posts
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Format an ISO date string as a friendly, human-readable date. */
export function formatDate(date: string): string {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

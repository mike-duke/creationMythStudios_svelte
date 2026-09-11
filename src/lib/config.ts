// Central place for site-wide values. Editing these updates the whole site.
// This keeps content/config out of components so you can tweak copy quickly.

export const site = {
	name: 'Creation Myth Studios',
	tagline: 'Freelance fiction editing',
	// Used in <title> and meta descriptions.
	description:
		'Freelance fiction editing — developmental editing, line editing, and copyediting for novelists and short-story writers.',
	// Your Formspree form endpoint. Replace with your real form ID.
	// It looks like: https://formspree.io/f/xxxxxxxx
	formspreeEndpoint: 'https://formspree.io/f/your-form-id',
	// Contact email shown on the site (optional).
	email: 'hello@creationmythstudios.com'
};

// Primary navigation. `href` values are root-relative; the layout prefixes them
// with the configured base path so they work on GitHub Pages sub-paths.
export const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/contact', label: 'Contact' }
];

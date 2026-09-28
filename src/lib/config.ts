// Central place for site-wide values. Editing these updates the whole site.
// This keeps content/config out of components so you can tweak copy quickly.

export const site = {
	name: 'Creation Myth Studios',
	tagline: 'Dolor sit amet',
	// Used in <title> and meta descriptions.
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	// Your Formspree form endpoint. Replace with your real form ID.
	// It looks like: https://formspree.io/f/xxxxxxxx
	formspreeEndpoint: 'https://formspree.io/f/your-form-id',
	// Contact email shown on the site (optional).
	email: 'creationmythstudios@gmail.com'
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

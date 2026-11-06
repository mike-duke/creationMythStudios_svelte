// Central place for site-wide values. Editing these updates the whole site.
// This keeps content/config out of components so you can tweak copy quickly.

export const site = {
	name: 'Creation Myth Studios',
	tagline: 'Upgrade Your Story',
	// Used in <title> and meta descriptions.
	description:
		'Freelance developmental editing by Mike Duke, available at page rate or by the hour. Contact me at creationmythstudios@gmail.com',
	// Your Formspree form endpoint. Replace with your real form ID.
	// It looks like: https://formspree.io/f/xxxxxxxx
	formspreeEndpoint: 'https://formspree.io/f/xykrrqyl',
	// Contact email shown on the site (optional).
	email: 'creationmythstudios@gmail.com'
};

// Static routes used in the nav. Typed as the specific route literals (not the
// broad RouteId, which includes any dynamic routes that require params) so
// `resolve(link.href)` type-checks in the layout.
// When you add a page (e.g. a blog), add its route here and to navLinks below.
type NavRoute = '/' | '/about' | '/services' | '/contact';

// Primary navigation. `href` values are route IDs, resolved in the layout with
// `resolve()` so they include the configured base path on GitHub Pages.
export const navLinks: { href: NavRoute; label: string }[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' }
];

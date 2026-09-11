// This file applies to every route (it's the root layout's "load" module).
//
// `prerender = true` tells SvelteKit to render every page to static HTML at
// build time. Combined with adapter-static, this produces a fully static site
// with no server needed at runtime — perfect for GitHub Pages.
export const prerender = true;

// `trailingSlash: 'always'` makes routes emit as folders with index.html
// (e.g. /about/index.html), which is the most reliable form for static hosts
// like GitHub Pages.
export const trailingSlash = 'always';

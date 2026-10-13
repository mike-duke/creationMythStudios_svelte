<script lang="ts">
  import "../app.css";
  import { asset, resolve } from "$app/paths";
  import { page } from "$app/state";
  import { afterNavigate } from "$app/navigation";
  import { navLinks, site } from "$lib/config";

  // `children` is the current page's content (like React's children).
  let { children } = $props();

  // Whether the mobile nav menu is open. Reactive state (like React's useState).
  let menuOpen = $state(false);

  // Close the menu after any navigation, so tapping a link on mobile collapses
  // the menu and shows the new page.
  afterNavigate(() => {
    menuOpen = false;
  });

  // Compare the current path to a nav route, ignoring trailing slashes.
  // `resolve()` produces the full path (with base + trailing slash), matching
  // what `page.url.pathname` looks like.
  function isActive(href: (typeof navLinks)[number]["href"]): boolean {
    const strip = (p: string) => p.replace(/\/$/, "") || "/";
    return strip(page.url.pathname) === strip(resolve(href));
  }
</script>

<svelte:head>
  <link rel="icon" href={asset("/favicon.svg")} />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<svelte:window
  onkeydown={(e) => {
    if (e.key === "Escape") menuOpen = false;
  }}
/>

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href={resolve("/")} aria-label="{site.name} — home">
      <!-- Lucide "book-open" icon. Placeholder until a custom logo (also SVG). -->
      <svg
        class="brand-icon"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5v16m8.001-2A2 2 0 0 0 22 17V5a2 2 0 0 0-1.999-2L16 3.002A5 5 0 0 0 12 5a5 5 0 0 0-4-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 1.999 2H8a5 5 0 0 1 4 2a5 5 0 0 1 4-2z"
        />
      </svg>
    </a>

    <button
      class="nav-toggle"
      aria-expanded={menuOpen}
      aria-controls="primary-nav"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      onclick={() => (menuOpen = !menuOpen)}
    >
      <span class="nav-toggle-bar" class:open={menuOpen}></span>
      <span class="visually-hidden">Menu</span>
    </button>

    <nav id="primary-nav" aria-label="Primary" class:open={menuOpen}>
      <ul>
        {#each navLinks as link (link.href)}
          <li>
            <a
              href={resolve(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
              class:active={isActive(link.href)}
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<main id="main" class="container">
  {@render children()}
</main>

<footer class="site-footer">
  <div class="container">
    <p>&copy; {new Date().getFullYear()} {site.name}. {site.tagline}.</p>
  </div>
</footer>

<style>
  .skip-link {
    position: absolute;
    left: -999px;
    top: 0;
    background: var(--color-accent-strong);
    color: #fff;
    padding: 0.5rem 1rem;
    z-index: 10;
  }
  .skip-link:focus {
    left: 0;
  }

  .site-header {
    background: var(--color-surface);
    color: var(--color-surface-text);
    /* `sticky` also establishes the positioning context for the mobile nav
       dropdown, which is absolutely positioned below the header. */
    position: sticky;
    top: 0;
    z-index: 5;
  }
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem 1.5rem;
    padding-block: 0.9rem;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    color: var(--color-surface-text);
    text-decoration: none;
  }
  .brand-icon {
    display: block;
  }
  .brand:hover {
    color: var(--color-accent-strong);
  }

  /* --- Hamburger toggle button (mobile only) --- */
  .nav-toggle {
    /* Sized to a comfortable 44px tap target. */
    width: 44px;
    height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-surface-text);
    padding: 0;
  }
  /* The middle bar; ::before and ::after are the top and bottom bars. */
  .nav-toggle-bar,
  .nav-toggle-bar::before,
  .nav-toggle-bar::after {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background: currentColor;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
  }
  .nav-toggle-bar::before {
    transform: translateY(-7px);
  }
  .nav-toggle-bar::after {
    transform: translateY(5px); /* 7px minus the 2px bar height */
  }
  /* Open state: morph the three bars into an X. */
  .nav-toggle-bar.open {
    background: transparent;
  }
  .nav-toggle-bar.open::before {
    transform: translateY(0) rotate(45deg);
  }
  .nav-toggle-bar.open::after {
    transform: translateY(-2px) rotate(-45deg);
  }

  /* --- Nav: mobile-first (collapsed dropdown) --- */
  nav {
    /* Hidden by default on mobile; shown when .open is applied. */
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  nav.open {
    display: block;
  }
  nav ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0.5rem 1.25rem 1rem;
  }
  nav a {
    display: block;
    font-family: var(--font-body);
    font-size: 1.05rem;
    color: var(--color-muted);
    text-decoration: none;
    padding: 0.6rem 0;
    border-bottom: 2px solid transparent;
  }
  nav a:hover {
    color: var(--color-surface-text);
  }
  nav a.active {
    color: var(--color-surface-text);
    /* Darker teal so the underline meets the 3:1 UI contrast bar against the
       light header background. */
    border-bottom-color: var(--color-accent-strong);
  }

  /* --- Desktop: inline nav, no hamburger --- */
  @media (min-width: 640px) {
    .nav-toggle {
      display: none;
    }
    nav {
      display: block;
      position: static;
      background: none;
      border-top: none;
      box-shadow: none;
    }
    nav ul {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.25rem 1.25rem;
      padding: 0;
    }
    nav a {
      display: inline-block;
      font-size: 1rem;
      padding: 0.25rem 0;
    }
  }

  main {
    /* Grow to fill space between header and footer, pushing the footer to the
       bottom of the viewport on short pages. */
    flex: 1;
    padding-block: 2.5rem 4rem;
  }

  .site-footer {
    background: var(--color-surface);
    color: var(--color-muted);
    font-family: var(--font-body);
    font-size: 0.95rem;
  }
  .site-footer .container {
    padding-block: 1.5rem;
  }
  .site-footer p {
    margin: 0;
  }
</style>

<script lang="ts">
  import "../app.css";
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import { navLinks, site } from "$lib/config";

  // `children` is the current page's content (like React's children).
  let { children } = $props();

  // Normalise a path for active-link comparison: strip the base prefix and any
  // trailing slash so "/about/" matches the "/about" nav entry.
  function isActive(href: string): boolean {
    const current =
      page.url.pathname.replace(base, "").replace(/\/$/, "") || "/";
    const target = href.replace(/\/$/, "") || "/";
    return current === target;
  }
</script>

<svelte:head>
  <link rel="icon" href="{base}/favicon.svg" />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="{base}/">{site.name}</a>
    <nav aria-label="Primary">
      <ul>
        {#each navLinks as link (link.href)}
          <li>
            <a
              href="{base}{link.href}"
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
    background: var(--color-accent);
    color: #fff;
    padding: 0.5rem 1rem;
    z-index: 10;
  }
  .skip-link:focus {
    left: 0;
  }

  .site-header {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 5;
  }
  .header-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem 1.5rem;
    padding-block: 0.9rem;
  }
  .brand {
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--color-text);
    text-decoration: none;
    letter-spacing: -0.01em;
  }

  nav ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1.25rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  nav a {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-muted);
    text-decoration: none;
    padding: 0.25rem 0;
    border-bottom: 2px solid transparent;
  }
  nav a:hover {
    color: var(--color-text);
  }
  nav a.active {
    color: var(--color-text);
    border-bottom-color: var(--color-accent);
  }

  main {
    min-height: 60vh;
    padding-block: 2.5rem 4rem;
  }

  .site-footer {
    border-top: 1px solid var(--color-border);
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

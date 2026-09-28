<script lang="ts">
  import { base } from "$app/paths";
  import { site } from "$lib/config";
</script>

<svelte:head>
  <title>{site.name} — {site.tagline}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<section class="hero">
  <p class="eyebrow">{site.tagline}</p>
  <h1>Lorem ipsum dolor sit amet consectetur.</h1>
  <p class="lede">
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.
  </p>
  <p class="cta-row">
    <a class="button" href="{base}/contact">Lorem ipsum</a>
    <a class="secondary" href="{base}/services">Dolor sit amet &rarr;</a>
  </p>
</section>

<section class="prose">
  <h2>Lorem ipsum</h2>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut
    perspiciatis unde omnis iste natus error.
  </p>
  <p>
    <a href="{base}/about">Sed ut perspiciatis &rarr;</a>
  </p>
</section>

<style>
  .hero {
    padding-block: 1rem 2.5rem;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 2rem;
  }
  .eyebrow {
    font-family: var(--font-body);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.85rem;
    color: var(--color-accent);
    margin: 0 0 0.5rem;
  }
  .lede {
    font-size: 1.25rem;
    color: var(--color-text);
  }
  .cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
    margin-top: 1.75rem;
  }
  .secondary {
    font-family: var(--font-body);
    font-weight: 600;
    text-decoration: none;
  }
</style>

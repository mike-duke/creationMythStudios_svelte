<script lang="ts">
  import { resolve } from "$app/paths";
  import { site } from "$lib/config";
  import { home } from "$lib/content/home";
</script>

<svelte:head>
  <title>{site.name} — {site.tagline}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<section class="hero">
  <p class="eyebrow">{home.eyebrow}</p>
  <enhanced:img
    class="hero-image"
    src="$lib/images/river_right_compressed.jpg"
    alt="A mountain river running over a rocky bank, lined with evergreen trees and a pine-covered ridge under a clear blue sky"
    sizes="min(736px, 100vw)"
  />
  <h1>{home.heading}</h1>
  {#each home.lede as para}
    <p class="lede">{para}</p>
  {/each}
  <p>
    <a href={resolve("/about")}>Learn more about me &rarr;</a>
  </p>
</section>

<section class="prose">
  <h2>{home.prose.heading}</h2>
  <p>
    {home.prose.para}
  </p>
  <p class="cta-row">
    <a class="button" href={resolve("/contact")}>Contact Me</a>
    <a class="secondary" href={resolve("/services")}>See my services &rarr;</a>
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
  /* `enhanced\:img` escapes the colon in the tag name for the CSS selector. */
  .hero-image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius);
    margin: 0.75rem 0 1.5rem;
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

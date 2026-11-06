<script lang="ts">
  import { resolve } from "$app/paths";
  import { site } from "$lib/config";
  // mdsvex compiles this .md file into a Svelte component at build time.
  // We import it and render it like any other component.
  import About from "$lib/content/about.md";
</script>

<svelte:head>
  <title>About — {site.name}</title>
  <meta
    name="description"
    content="Lorem ipsum dolor sit amet consectetur adipiscing elit."
  />
</svelte:head>

<article class="prose">
  <!--
    At build time <enhanced:img> generates avif/webp in multiple sizes and sets
    width/height automatically. Keep alt text descriptive; use alt="" only for
    purely decorative images.
  -->
  <enhanced:img
    class="feature"
    src="$lib/images/river_right_compressed_small.jpg"
    alt="A clear mountain river flowing past a rocky, boulder-strewn bank, with evergreen-covered slopes and a rocky ridge beneath a bright blue sky"
    sizes="min(700px, 100vw)"
  />

  <About />

  <p class="cta-row">
    <a class="button" href={resolve("/contact")}>Contact Me</a>
  </p>
</article>

<style>
  /* Constrain the image to the content column and keep its aspect ratio.
     `enhanced\:img` escapes the colon in the tag name for the CSS selector. */
  .prose :global(enhanced\:img.feature),
  .prose :global(img.feature) {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius);
    margin-bottom: 2rem;
  }

  /* Right-justified contact button, matching the home page. */
  .cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem 1.5rem;
    margin-top: 1.75rem;
  }
</style>

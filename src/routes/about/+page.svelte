<script lang="ts">
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
    Optimized image example. At build time <enhanced:img> generates avif/webp
    plus multiple sizes and sets width/height automatically. Provide the source
    at ~2x the display size (this one is 1450px wide for a ~700px column).
    Swap the src for your own file in src/lib/images/ and update the alt text.
    The alt text should describe the image for screen readers; use alt="" only
    for purely decorative images.
  -->
  <enhanced:img
    class="feature"
    src="$lib/images/placeholder.jpg"
    alt="Placeholder image — replace with a real photo and a descriptive alt text"
    sizes="min(700px, 100vw)"
  />

  <About />
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
</style>

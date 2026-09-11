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
    content="About {site.name}, freelance fiction editor."
  />
</svelte:head>

<article class="prose">
  <About />
</article>

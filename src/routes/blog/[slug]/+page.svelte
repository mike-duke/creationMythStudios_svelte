<script lang="ts">
  import { resolve } from "$app/paths";
  import { site } from "$lib/config";
  import { formatDate } from "$lib/posts";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  // The post body is a component; assign to a Capitalised name so we can render
  // it as <Content /> in the markup below.
  const Content = $derived(data.content);
</script>

<svelte:head>
  <title>{data.meta.title} — {site.name}</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>

<article class="prose">
  <p class="back"><a href={resolve("/blog")}>&larr; All posts</a></p>
  <h1>{data.meta.title}</h1>
  <p class="date">{formatDate(data.meta.date)}</p>
  <Content />
</article>

<style>
  .back {
    font-family: var(--font-body);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  .date {
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--color-muted);
    margin-top: -0.5rem;
    margin-bottom: 2rem;
  }
</style>

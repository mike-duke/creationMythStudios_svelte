<script lang="ts">
  import { base } from "$app/paths";
  import { site } from "$lib/config";
  import { formatDate } from "$lib/posts";
  import type { PageData } from "./$types";

  // `data` comes from +page.ts's load function.
  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Blog — {site.name}</title>
  <meta
    name="description"
    content="Notes on writing, revising, and editing fiction."
  />
</svelte:head>

<h1>Blog</h1>
<p class="lede">Notes on writing, revising, and working with an editor.</p>

{#if data.posts.length === 0}
  <p>No posts yet — check back soon.</p>
{:else}
  <ul class="post-list">
    {#each data.posts as post (post.slug)}
      <li>
        <article>
          <h2><a href="{base}/blog/{post.slug}">{post.title}</a></h2>
          <p class="date">{formatDate(post.date)}</p>
          <p class="desc">{post.description}</p>
        </article>
      </li>
    {/each}
  </ul>
{/if}

<style>
  .lede {
    color: var(--color-muted);
  }
  .post-list {
    list-style: none;
    margin: 2rem 0 0;
    padding: 0;
    display: grid;
    gap: 1.75rem;
  }
  .post-list article {
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 1.75rem;
  }
  .post-list h2 {
    margin: 0 0 0.25rem;
    font-size: 1.4rem;
  }
  .post-list h2 a {
    text-decoration: none;
  }
  .post-list h2 a:hover {
    text-decoration: underline;
  }
  .date {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--color-muted);
    margin: 0 0 0.5rem;
  }
  .desc {
    margin: 0;
  }
</style>

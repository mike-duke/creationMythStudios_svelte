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
  <h1>Your story deserves a careful reader.</h1>
  <p class="lede">
    I help novelists and short-story writers shape stronger drafts — from
    big-picture structure down to the rhythm of a single sentence. Thoughtful,
    honest editing that keeps your voice intact.
  </p>
  <p class="cta-row">
    <a class="button" href="{base}/contact">Start a conversation</a>
    <a class="secondary" href="{base}/services">See how I can help &rarr;</a>
  </p>
</section>

<section class="prose">
  <h2>What I do</h2>
  <p>
    Every manuscript is at a different stage, so I meet your work where it is.
    Whether you need a developmental read to untangle a plot, a line edit to
    sharpen your prose, or a final copyedit before you submit, the goal is the
    same: to make the book unmistakably yours, only clearer and more confident.
  </p>
  <p>
    <a href="{base}/about">Learn a bit about me &rarr;</a>
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

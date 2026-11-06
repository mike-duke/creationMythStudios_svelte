<script lang="ts">
  import { resolve } from "$app/paths";
  import { site } from "$lib/config";
  import { services } from "$lib/content/services";
</script>

<svelte:head>
  <title>Services — {site.name}</title>
  <meta name="description" content="Lorem ipsum dolor sit amet consectetur." />
</svelte:head>

<h1>Ways to Work With Me</h1>
<p class="lede">
  Here are the best ways to work with me. If you don't see a method that works
  for you, send me a message and we can chat!
</p>

<div class="services">
  {#each services as service (service.title)}
    <section class="card">
      <h2>{service.title}</h2>
      <p class="summary">{service.summary}</p>
      <ul>
        {#each service.details as detail (detail)}
          <li>{detail}</li>
        {/each}
      </ul>
      <p class="rate">{service.rate}</p>
    </section>
  {/each}
</div>

<p class="cta">
  <a class="button" href={resolve("/contact")}>Contact Me</a>
</p>

<style>
  .lede {
    font-size: 1.2rem;
    color: var(--color-accent);
    max-width: 34rem;
  }
  .services {
    display: grid;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .card {
    background: var(--color-surface);
    color: var(--color-surface-text);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    padding: 1.5rem 1.75rem;
  }
  .card h2 {
    margin-top: 0;
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
  .summary {
    color: var(--color-surface-text);
  }
  .card ul {
    margin: 0.75rem 0 1rem;
    padding-left: 1.25rem;
    /* Darker teal: readable on the light card; bullets inherit this color. */
    color: var(--color-accent-strong);
  }
  .card li {
    margin-bottom: 0.35rem;
  }
  .rate {
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: var(--color-muted);
    margin: 0;
    text-align: right;
  }
  .cta {
    margin-top: 2.5rem;
    /* Right-justify the contact button, matching the home and about pages. */
    text-align: right;
  }
</style>

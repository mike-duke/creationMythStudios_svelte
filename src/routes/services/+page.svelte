<script lang="ts">
  import { resolve } from "$app/paths";
  import { site } from "$lib/config";
  import { services } from "$lib/content/services";
</script>

<svelte:head>
  <title>Services — {site.name}</title>
  <meta name="description" content="Lorem ipsum dolor sit amet consectetur." />
</svelte:head>

<h1>Lorem Ipsum</h1>
<p class="lede">
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis
  nostrud exercitation ullamco laboris nisi ut aliquip.
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
  <a class="button" href={resolve("/contact")}>Lorem ipsum dolor</a>
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
  }
  .summary {
    color: var(--color-surface-text);
  }
  .card ul {
    margin: 0.75rem 0 1rem;
    padding-left: 1.25rem;
  }
  .card li {
    margin-bottom: 0.35rem;
  }
  .rate {
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: var(--color-muted);
    margin: 0;
  }
  .cta {
    margin-top: 2.5rem;
  }
</style>

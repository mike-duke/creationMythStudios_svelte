<script lang="ts">
  import { resolve } from "$app/paths";
  import { site } from "$lib/config";
  import { home } from "$lib/content/home";
  import Divider from "$lib/components/Divider.svelte";
</script>

<svelte:head>
  <title>{site.name} — {site.tagline}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<section class="hero">
  <enhanced:img
    class="hero-image"
    src="$lib/images/mountain_path_compressed_edited.jpg"
    alt="A narrow dirt trail winding through a green meadow toward a stand of pine and aspen trees under a partly cloudy blue sky"
    sizes="min(736px, 100vw)"
  />
  <h1>{home.siteHeading}</h1>
  <p class="lede">{home.lede}</p>
  <p class="cta-row">
    <a class="button" href={resolve("/contact")}>Contact Me</a>
  </p>
</section>

<Divider />

<section class="about">
  <div class="about-text">
    <h2>{home.aboutHeading}</h2>
    <p>{home.aboutPara}</p>
    <p class="cta-link">
      <a href={resolve("/about")}>Learn more about me &rarr;</a>
    </p>
  </div>
  <enhanced:img
    class="about-photo"
    src="$lib/images/headshot_square_compressed.jpg"
    alt="Headshot of Mike"
    sizes="(max-width: 560px) 200px, min(40vw, 300px)"
  />
</section>

<Divider />

<section class="services">
  <h2>{home.servicesHeading}</h2>
  <p>{home.servicesPara}</p>
  <p class="cta-link">
    <a href={resolve("/services")}>See my services &rarr;</a>
  </p>
</section>

{#if home.testimonials.length > 0}
  <Divider />

  <section class="testimonials">
    {#if home.testimonialsHeading}
      <h2>{home.testimonialsHeading}</h2>
    {/if}
    <ul class="testimonial-track">
      {#each home.testimonials as testimonial (testimonial.clientName)}
        <li class="testimonial-card">
          {#if testimonial.image}
            <enhanced:img
              class="testimonial-photo"
              src={testimonial.image}
              alt="Photo of {testimonial.clientName}"
              sizes="96px"
            />
          {/if}
          <blockquote>
            <p class="quote">{testimonial.quote}</p>
          </blockquote>
          <p class="client-name">{testimonial.clientName}</p>
        </li>
      {/each}
    </ul>
  </section>
{/if}

<style>
  .hero {
    padding-block: 1rem 0;
  }
  /* `enhanced\:img` escapes the colon in the tag name for the CSS selector. */
  .hero-image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius);
    margin: 0.75rem 0 1.5rem;
  }
  .hero h1 {
    margin-bottom: 0.4rem;
  }
  .lede {
    font-size: 1.25rem;
    color: var(--color-text);
    margin-top: 0;
  }

  /* Space between the hero and the about section.
     Text on the left, headshot on the right. Stacks on narrow screens. */
  .about {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .about-text {
    flex: 1 1 auto;
    min-width: 0;
  }
  .about-text h2 {
    margin-top: 0;
  }
  /* enhanced:img renders as <picture><img></picture>. The <picture> is the
     flex child, so size that; the inner <img> (.about-photo) fills it. */
  .about > :global(picture) {
    flex: 0 0 40%;
    max-width: 300px;
    aspect-ratio: 1 / 1;
  }
  .about-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  @media (max-width: 560px) {
    .about {
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
    }
    .about > :global(picture) {
      flex-basis: auto;
      width: 200px;
    }
    .about .cta-link {
      text-align: center;
    }
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem 1.5rem;
    margin-top: 1.75rem;
  }
  /* Right-justify the about/services "read more" links. */
  .cta-link {
    text-align: right;
  }

  /* Horizontal track: cards sit in a row and scroll sideways when they
     overflow. Holds as many cards as there are testimonials. */
  .testimonial-track {
    list-style: none;
    margin: 1.5rem 0 0;
    padding: 0 0 1rem;
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    /* Snap each card into view as you scroll. */
    scroll-snap-type: x mandatory;
    /* Room for the scrollbar without clipping card shadows. */
    -webkit-overflow-scrolling: touch;
  }
  /* A single card: image on top, italic quote, name at the bottom. */
  .testimonial-card {
    flex: 0 0 280px;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 1.75rem 1.5rem;
    background: var(--color-surface);
    color: var(--color-surface-text);
    border-radius: var(--radius);
  }
  .testimonial-photo {
    flex: 0 0 auto;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
  }
  .testimonial-card blockquote {
    margin: 0;
    flex: 1 1 auto;
  }
  .quote {
    margin: 0;
    font-style: italic;
  }
  .client-name {
    margin: 0;
    font-family: var(--font-body);
    font-weight: 600;
    color: var(--color-muted);
  }
</style>

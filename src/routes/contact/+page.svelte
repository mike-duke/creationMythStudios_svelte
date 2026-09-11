<script lang="ts">
  import { site } from "$lib/config";

  // Form submission state, using Svelte 5 runes ($state = reactive variable).
  type Status = "idle" | "submitting" | "success" | "error";
  let status = $state<Status>("idle");
  let errorMessage = $state("");

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    status = "submitting";
    errorMessage = "";

    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status = "success";
        form.reset();
      } else {
        // Formspree returns validation details in the JSON body.
        const result = await response.json().catch(() => null);
        errorMessage =
          result?.errors
            ?.map((e: { message: string }) => e.message)
            .join(", ") ?? "Something went wrong. Please try again.";
        status = "error";
      }
    } catch {
      errorMessage =
        "Network error. Please check your connection and try again.";
      status = "error";
    }
  }
</script>

<svelte:head>
  <title>Contact — {site.name}</title>
  <meta
    name="description"
    content="Get in touch about editing your manuscript."
  />
</svelte:head>

<h1>Get in touch</h1>
<p class="lede">
  Tell me a little about your project — genre, length, and where it's at — and
  I'll get back to you within a few business days.
</p>

{#if status === "success"}
  <div class="notice success" role="status">
    <p><strong>Thanks — your message is on its way.</strong></p>
    <p>
      I'll reply to you soon. In the meantime, feel free to email me directly at
      <a href="mailto:{site.email}">{site.email}</a>.
    </p>
  </div>
{:else}
  <form onsubmit={handleSubmit} novalidate>
    <div class="field">
      <label for="name">Name</label>
      <input id="name" name="name" type="text" autocomplete="name" required />
    </div>

    <div class="field">
      <label for="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        required
      />
    </div>

    <div class="field">
      <label for="project">About your project</label>
      <textarea id="project" name="message" rows="6" required></textarea>
    </div>

    {#if status === "error"}
      <p class="notice error" role="alert">{errorMessage}</p>
    {/if}

    <button class="button" type="submit" disabled={status === "submitting"}>
      {status === "submitting" ? "Sending…" : "Send message"}
    </button>
  </form>

  <p class="alt">
    Prefer email? Reach me at <a href="mailto:{site.email}">{site.email}</a>.
  </p>
{/if}

<style>
  .lede {
    color: var(--color-accent);
    max-width: 34rem;
  }
  form {
    margin-top: 2rem;
    max-width: 34rem;
  }
  .field {
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  label {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 0.95rem;
  }
  input,
  textarea {
    font: inherit;
    font-size: 1rem;
    padding: 0.65rem 0.8rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    background: var(--color-surface);
    color: var(--color-surface-text);
  }
  input:focus,
  textarea:focus {
    border-color: var(--color-accent-strong);
  }
  textarea {
    resize: vertical;
  }
  .notice {
    padding: 1rem 1.25rem;
    border-radius: var(--radius);
    margin: 1.5rem 0;
  }
  .notice.success {
    background: #edf7ee;
    border: 1px solid #bfe0c2;
    /* Dark text: the notice sits on a light background, so it must not inherit
       the page's light body text (which would be near-invisible here). */
    color: var(--color-text-dark);
  }
  .notice.error {
    background: #fdeeee;
    border: 1px solid #f0c2c2;
    color: #8a2a2a;
  }
  /* Links inside the light notice boxes need the darker teal to stay readable. */
  .notice a {
    color: var(--color-accent-strong);
  }
  .notice a:hover {
    color: var(--color-accent-hover);
  }
  .notice p {
    margin: 0 0 0.5rem;
  }
  .notice p:last-child {
    margin-bottom: 0;
  }
  .alt {
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: var(--color-muted);
    margin-top: 1.5rem;
  }
</style>

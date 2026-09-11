# Creation Myth Studios

A static website for a freelance fiction editing business, built with
**SvelteKit** and deployed to **GitHub Pages**. All content lives in files in
this repo — there is no separate backend. The site is prerendered to plain
HTML/CSS/JS at build time.

## Tech at a glance

- **SvelteKit** (Svelte 5, runes mode) with `@sveltejs/adapter-static` for static generation
- **mdsvex** so content can be written as Markdown (`.md`)
- **Formspree** for the contact form (no backend needed)
- **GitHub Actions** to build and deploy on every push to `main`

## Local development

```bash
npm install        # first time only
npm run dev        # start the dev server at http://localhost:5173
npm run check      # type-check the project
npm run build      # produce the static site in ./build
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  routes/                     # each folder is a page (file-based routing)
    +layout.svelte            # shared shell: nav + footer + global styles
    +layout.ts                # enables prerendering for the whole site
    +page.svelte              # Home
    about/+page.svelte        # renders src/lib/content/about.md
    services/+page.svelte     # renders src/lib/content/services.ts
    contact/+page.svelte      # Formspree contact form
    blog/
      +page.ts / +page.svelte # blog index (lists posts)
      [slug]/                 # a single post, one page generated per post
  lib/
    config.ts                 # site name, nav links, Formspree endpoint, email
    content/                  # About (markdown) + Services (data) content
    posts/                    # blog posts as Markdown files with frontmatter
    posts.ts                  # helpers to read post metadata
static/                       # files served as-is (favicon, robots.txt, .nojekyll)
svelte.config.js              # adapter, mdsvex, and base-path config
```

## Editing content

- **Site name / nav / contact info:** `src/lib/config.ts`
- **About page copy:** `src/lib/content/about.md`
- **Services:** `src/lib/content/services.ts`
- **Blog posts:** add a new `.md` file in `src/lib/posts/` with frontmatter:

  ```markdown
  ---
  title: My post title
  description: A one-line summary.
  date: 2026-09-11
  published: true
  ---

  Write your post here in Markdown.
  ```

  The blog index and its page are generated automatically. Set
  `published: false` to keep a draft out of the site.

## Contact form (Formspree)

Set your Formspree form endpoint in `src/lib/config.ts`:

```ts
formspreeEndpoint: "https://formspree.io/f/your-form-id";
```

## Deploying to GitHub Pages

1. Create a GitHub repo and push this project to the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the
   site and publishes it.

The workflow sets `BASE_PATH` to `/<repo-name>` automatically, so the site works
when served from `https://<username>.github.io/<repo-name>/`.

### Moving to a custom domain later

If you add a custom domain (or use a `<username>.github.io` repo), the site is
served from the root, so set `BASE_PATH` to an empty string. In the workflow,
change the build step's env to `BASE_PATH: ''`.

```

```

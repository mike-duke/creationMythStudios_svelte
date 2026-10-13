<!--
  A decorative section divider: a centered icon flanked by two thin lines.
  Drop <Divider /> between page sections. The icon is a Lucide "pen-tool"
  (inline SVG). To change the icon, swap the <svg> contents below.

  Decorative only, so it's aria-hidden and uses role="presentation".
-->
<div class="divider" role="presentation" aria-hidden="true">
  <span class="line"></span>
  <svg class="icon" viewBox="0 0 24 24" width="22" height="22">
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path
        d="m18 13l-.654-4.736a4 4 0 0 0-2.756-3.266l-9.163-2.9a2 2 0 0 0-2.017.493l-.82.819a2 2 0 0 0-.492 2.017l2.9 9.163a4 4 0 0 0 3.266 2.756L13 18"
      />
      <path
        d="M18.648 12.352a1.205 1.205 0 0 1 1.704 0l1.296 1.296a1.205 1.205 0 0 1 0 1.704l-6.296 6.296a1.205 1.205 0 0 1-1.704 0l-1.296-1.296a1.205 1.205 0 0 1 0-1.704zM3 3l6.586 6.586"
      />
      <circle cx="11" cy="11" r="2" />
    </g>
  </svg>
  <span class="line"></span>
</div>

<style>
  .divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-block: 3rem;
    /* Inset the whole divider so the lines don't run to the container edges. */
    padding-inline: 2rem;
    color: var(--color-accent);
  }
  .line {
    flex: 1 1 auto;
    height: 3px;
    border-radius: 999px;
    /* A faded accent so the lines are visible against the dark background. */
    background: color-mix(in srgb, var(--color-accent) 45%, transparent);
  }
  .icon {
    flex: 0 0 auto;
    display: block;
    /* Inherits `color` above via currentColor. */
  }
</style>

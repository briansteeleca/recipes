<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

  @layer utilities {
    .prose ul > li:before,
    .prose ol > li:before {
      content: '・';
      float: left;
      margin: 0 0 0 -0.9em;
      width: 0.9em;
    }

    @media (min-width: 992px) {
      .prose ul > li:before,
      .prose ol > li:before {
        margin: 0;
        width: 1.5em;
      }
    }
  }

  /* @layer base {
    h1 {
      @apply text-8xl;
    }
    p {
      @apply text-xl;
      @apply leading-8;
    }
  } */
</style>

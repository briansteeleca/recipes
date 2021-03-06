<script>
  export let full = false;
  export let height = 'h-auto';
  export let zIndexClass = 'z-0';
</script>

{#if full}
  <div class="container mx-auto">
    <slot />
  </div>
{:else}
  <div class="container mx-auto px-4 {height} {zIndexClass}">
    <slot />
  </div>
{/if}

<!-- Multiple class toggles can be included -->
<style>
  /* .container {
    width: 100%;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .container.full {
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  } */
</style>

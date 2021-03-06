<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`recipes.json`)
      .then((r) => r.json())
      .then((posts) => {
        console.log(posts);
        return { posts };
      });
  }
</script>

<script>
  import Container from '../../components/Container.svelte';
  import Image from 'svelte-image';
  export let posts;
</script>

<svelte:head>
  <title>Recipes</title>
</svelte:head>

<Container>
  <section class="my-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-24 xl:gap-8">
      {#each posts as post}
        <section class="">
          <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
          <div class="card w-full overflow-hidden border border-red-500">
            <Image
              wrapperClass="border border-green-500 m-0"
              src="images/431-1024x1024.jpg"
              alt="recipe"
            />

            <div class="m-0 p-8">
              <a class="block" rel="prefetch" href="recipes/{post.slug}"
                >{post.title}</a
              >
            </div>
          </div>
        </section>
      {/each}
    </div>
  </section>
</Container>

<style>
  .card {
    min-height: 100px;
  }
</style>

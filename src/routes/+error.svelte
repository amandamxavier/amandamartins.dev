<script lang="ts">
	import '../assets/sass/global.sass';
	import { Footer, Metadata, Navbar } from '$lib/components';
</script>

<Metadata />
<Navbar />
<main>
	<section>
		<p class="badge">Error</p>
		<h1>Sorry...</h1>
		<h2>Looks like the content you're searching for doesn't exist!</h2>
	</section>
	<figure>
		<img src="/img/lost.gif" alt="John Travolta lost looking around" />
	</figure>
</main>
<Footer />

<style lang="sass">
  main
    display: flex
    justify-content: center
    align-items: center
    height: 70vh
    margin: 0 300px

    section
      display: flex
      flex-direction: column
      align-items: flex-start
    h1
      width: 50rem
</style>

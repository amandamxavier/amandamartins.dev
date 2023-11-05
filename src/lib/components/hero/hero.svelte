<script lang="ts">
	import { PrimaryButton } from '$lib/components';
</script>

<section>
	<h1>Hello, my name is Amanda, nice to meet you.</h1>
	<h2>I'm a self-taught curiosity-driven developer, currently based in Brazil.</h2>
	<PrimaryButton url="#about" title="Get to know me" />
</section>

<style lang="sass">
  section
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center
    height: 60vh
    margin: 0 20rem

    h1
      width: 50rem

  @media only screen and (max-width: 768px)
    section
      margin: 0 1rem

      h1
        width: 100%
</style>

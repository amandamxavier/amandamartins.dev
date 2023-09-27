<script lang="ts">
	import { PrimaryButton } from '$lib/components';
</script>

<header>
	<a href="/">Home</a>
	<a href="/#projects">Projects</a>
	<a href="/#about">About me</a>
	<a href="/#volunteering">Volunteering</a>
	<a href="/#content">Content Creation</a>
	<PrimaryButton url="/#contact" title="Contact" />
</header>

<style lang="sass">
  header
    display: flex
    justify-content: center
    align-items: center
    margin: 1rem
    
  @media only screen and (max-width: 768px)
    header
      display: none
</style>

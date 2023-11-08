<script>
	import { SecondaryButton } from '$lib/components';
</script>

<main id="content">
	<section>
		<p class="badge">Content Creation</p>
		<h3>What I Create</h3>
		<p>
			I love to be creative, and I’m always working on some of my ideas and projects, such as
			writing for <strong>DEV Community</strong> and <strong>Medium</strong>, and sharing my journey
			through my <strong>LinkedIn</strong>.
		</p>
		<ul>
			<li>
				<SecondaryButton url="https://dev.to/amandamxavier" icon="fa-brands fa-dev" />
			</li>
			<li>
				<SecondaryButton url="https://medium.com/@amandamxavier" icon="fa-brands fa-medium" />
			</li>
		</ul>
	</section>
	<figure>
		<img
			src="/img/pixelmandy.png"
			alt="Main illustration of the PixelMandy channel of Amanda waving smiling, with straight black hair, white skin and a yellow sweatshirt."
		/>
	</figure>
</main>

<style lang="sass">
    main
      display: flex
      justify-content: flex-start
      align-items: center
      gap: 250px
  
    section
      flex: 1
      display: flex
      flex-direction: column
      align-items: flex-start

      ul
        display: flex
        flex-wrap: wrap

    figure img
      width: 380px
      border-radius: 100%

    @media only screen and (max-width: 768px)
      main
        flex-direction: column-reverse
        gap: 10px

      section
        align-items: center

      ul
        justify-content: center

      figure img
        width: 240px
</style>

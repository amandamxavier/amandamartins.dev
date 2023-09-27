<script>
	import { PrimaryButton } from '$lib/components';
</script>

<main id="content">
	<section>
		<p class="badge">Content Creation</p>
		<h3>What I Create</h3>
		<p>
			I love to be creative, and I’m always working on some of my ideas and projects, such as
			writing for <strong>dev.to</strong>, sharing knowledge through my
			<strong>Instagram</strong> page, vlogging on my <strong>YouTube</strong>
			channel, or live coding and gaming on my <strong>Twitch</strong> channel.
		</p>
		<p>
			In addition, I’m a game developer who is passionate about creating immersive and engaging
			experiences for players. I’m currently sharing my journey and knowledge on <strong
				>@PixelMandy</strong
			>.
		</p>
		<ul>
			<li>
				<PrimaryButton url="https://pixelmandy.live" icon="fa-solid fa-link" title="@PixelMandy" />
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

  figure img
    width: 380px
    border-radius: 100%

  @media only screen and (max-width: 768px)
    main
      flex-direction: column-reverse
      gap: 10px

    section
      align-items: center

    figure img
      width: 240px
</style>

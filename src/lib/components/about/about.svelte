<script>
	import { SecondaryButton } from '$lib/components';
</script>

<main id="about">
	<section>
		<p class="badge">About me</p>
		<h3>Let me introduce myself...</h3>
		<p>
			I have experience developing cloud-native applications, working with relational databases,
			applying object-oriented and functional programming paradigms, and familiarity with
			infrastructure and DevOps Culture.
		</p>
		<p>
			Currently studying and improving skills, such as design patterns, clean code, and test-driven
			development to ensure quality and reliability.
		</p>
		<ul>
			<li>
				<SecondaryButton url="https://linkedin.com/in/amandamxavier" icon="fa-brands fa-linkedin-in" />
			</li>
			<li>
				<SecondaryButton url="https://github.com/amandamxavier" icon="fa-brands fa-github" />
			</li>
			<li>
				<SecondaryButton url="https://pixelmandy.itch.io" icon="fa-brands fa-itch-io" />
			</li>
			<li>
				<SecondaryButton url="https://dev.to/amandamxavier" icon="fa-brands fa-dev" />
			</li>
		</ul>
	</section>
	<figure>
		<img
			src="/img/profile-picture.jpg"
			alt="Amanda looking to the side with her hand on her chin thoughtfully, with white skin, curly black hair, round gold glasses, and a white t-shirt."
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

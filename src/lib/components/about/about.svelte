<script>
	import { SecondaryButton } from '$lib/components';
</script>

<main id="about">
	<section>
		<p class="badge">About me</p>
		<h3>Let me introduce myself...</h3>
		<p>
			I ave experience developing <strong>full-stack cloud-native applications</strong>, managing
			<strong>infrastructure</strong>
			and <strong>DevOps pipelines</strong>, working with <strong>relational</strong> and
			<strong>non-relational databases</strong>, and applying <strong>functional</strong> and
			<strong>object-oriented</strong> programming paradigms.
		</p>
		<p>
			Also, learning more about <strong>test-driven development</strong>,
			<strong>design patterns</strong>, and <strong>software architecture</strong> to ensure
			<strong>quality</strong>
			and <strong>reliability</strong>.
		</p>
		<ul>
			<li>
				<SecondaryButton
					url="https://linkedin.com/in/amandamxavier"
					icon="fa-brands fa-linkedin-in"
				/>
			</li>
			<li>
				<SecondaryButton url="https://github.com/amandamxavier" icon="fa-brands fa-github" />
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

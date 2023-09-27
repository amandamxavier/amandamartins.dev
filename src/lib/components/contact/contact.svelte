<script>
	import { PrimaryButton, SecondaryButton } from '$lib/components';
</script>

<main>
	<section id="contact">
		<p class="badge">Contact</p>
		<h3>Want to work with me?</h3>
		<p>
			You can reach me from all over my social networks, or just send an email. I’d love to hear
			from you!
		</p>
		<ul>
			<li>
				<PrimaryButton
					url="mailto:hi@amandamartins.dev"
					icon="fa-regular fa-paper-plane"
					title="Email me"
				/>
			</li>
			<li>
				<SecondaryButton url="https://linkedin.com/in/pixelmandy" icon="fa-brands fa-linkedin-in" />
			</li>
		</ul>
	</section>
</main>

<style lang="sass">
  main
    margin: 5rem 20rem

  section
    display: flex
    flex-direction: column
    align-items: center
    background-color: var(--gray)
    border-radius: 50px
    padding: 3rem

    ul
      display: flex

  @media only screen and (max-width: 768px)
    main
      margin: 1rem
      flex-direction: column

    section
      padding: 0.8rem
      text-align: center
</style>

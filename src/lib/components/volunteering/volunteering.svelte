<script>
	import { PrimaryButton } from '$lib/components';
</script>

<main id="volunteering">
	<figure>
		<img src="/img/feministech.png" alt="Logo of the Feministech community" />
	</figure>
	<section>
		<p class="badge">Volunteering</p>
		<h3>What I Participate</h3>
		<p>
			I am also a coordinator of <strong>Feministech</strong>, a community that supports women,
			transgender and non-binary people in tech. I contribute mostly to open-source projects of the
			community and participate in online events.
		</p>
		<ul>
			<li>
				<PrimaryButton
					url="https://feministech.com.br"
					icon="fa-solid fa-link"
					title="Go to the website"
				/>
			</li>
		</ul>
	</section>
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

  figure img
    width: 320px
    border-radius: 100%

  @media only screen and (max-width: 768px)
    main
      flex-direction: column
      gap: 10px

    section
      align-items: center

    figure img
      width: 240px
</style>

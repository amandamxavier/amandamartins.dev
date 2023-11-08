<main id="skills">
	<section>
		<p class="badge">Skills</p>
		<h3>Experience so far...</h3>
	</section>
	<ul>
		<li>
			<i class="fa-solid fa-paintbrush" />
			<h4 class="marker-yellow">Front-End</h4>
			<p>
				I've professional experience with <strong>Angular</strong>, but worked on various projects
				with diverse frameworks, such as <strong>Svelte</strong>, <strong>React</strong>,
				<strong>Next</strong>
				and <strong>Vue</strong>.
			</p>
		</li>
		<li>
			<i class="fa-solid fa-gear" />
			<h4 class="marker-red">Back-End</h4>
			<p>
				Worked mostly developing <strong>RESTful APIs</strong> with
				<strong>Spring</strong>, and <strong>.NET</strong>. Currently studying
				<strong>NodeJS</strong>, <strong>Fastify</strong>, and developed some projects using
				<strong>Python</strong>.
			</p>
		</li>
		<li>
			<i class="fa-solid fa-cloud" />
			<h4 class="marker-blue">Cloud</h4>
			<p>
				Certified <strong>Azure Fundamentals</strong> and
				<strong>AWS Cloud Practitioner</strong>, I've also worked on some projects using
				<strong>Google Cloud Platform</strong>
				and
				<strong>Oracle</strong>.
			</p>
		</li>
		<li>
			<i class="fa-solid fa-mug-hot" />
			<h4 class="marker-orange">Consulting</h4>
			<p>
				I've also worked as a consultant for <strong>IBM</strong>, and as a Customer Success and
				Customer Support for
				<strong>Linte</strong>, a law-tech Brazilian startup.
			</p>
		</li>
	</ul>
</main>

<style lang="sass">
  main
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center

    section
      display: flex
      flex-direction: column
      align-items: center
      margin: 2rem

    ul
      display: flex
      gap: 40px
      text-align: left

      li
        display: flex
        flex-direction: column
        align-items: flex-start

        i

          font-size: 4rem
          margin: 2rem 0

        p
          margin: 2rem 0

        h4
          font-weight: 700
          padding: 0 0.3rem 0.3rem 0

        .marker-yellow
          background-color: var(--yellow)

        .marker-red
          background-color: var(--red)

        .marker-blue
          background-color: var(--blue)

        .marker-orange
          background-color: var(--orange)

  @media only screen and (max-width: 768px)
    main
      ul
        gap: 0
      
      li
        margin: 1rem

    section
      align-items: center

    ul
      flex-direction: column
</style>

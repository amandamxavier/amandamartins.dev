<footer>
	<ul>
		<li>
			<a href="http://linkedin.com/in/amandamxavier" target="_blank" rel="noopener noreferrer">
				<i class="fa-brands fa-linkedin-in" />
			</a>
		</li>
		<li>
			<a href="https://github.com/amandamxavier" target="_blank" rel="noopener noreferrer">
				<i class="fa-brands fa-github" />
			</a>
		</li>
		<li>
			<a href="https://pixelmandy.itch.io" target="_blank" rel="noopener noreferrer">
				<i class="fa-brands fa-itch-io" />
			</a>
		</li>
		<li>
			<a href="https://medium.com/@amandamxavier" target="_blank" rel="noopener noreferrer">
				<i class="fa-brands fa-medium" />
			</a>
		</li>
		<li>
			<a href="https://dev.to/amandamxavier" target="_blank" rel="noopener noreferrer">
				<i class="fa-brands fa-dev" />
			</a>
		</li>
	</ul>
	<section>
		<p>© 2023 Amanda Martins.</p>
		<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Made with Svelte</a>
	</section>
</footer>

<style lang="sass">
  section
    display: flex
    justify-content: space-between
    align-items: center

  ul
    display: flex
    flex-wrap: wrap
    justify-content: flex-end

    li a
      color: var(--black)
      font-size: 1.5rem

  section 
    p
      color: gray
      font-weight: 500

    a
      color: gray
      font-weight: 500

      &:hover
        border-bottom: 0.2rem solid var(--gray)

  @media only screen and (max-width: 768px)
    footer
      margin: 3rem 0 0.2rem 0
      flex-direction: column
      gap: 100px

    section
      flex-direction: column

    ul
      justify-content: center
</style>

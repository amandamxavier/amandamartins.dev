<footer>
	<ul>
		<li>
			<a
				href="http://linkedin.com/in/pixelmandy"
				class="fa-brands fa-linkedin-in"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
		<li>
			<a
				href="https://github.com/pixelmandy"
				class="fa-brands fa-github"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
		<li>
			<a
				href="https://pixelmandy.itch.io"
				class="fa-brands fa-itch-io"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
		<li>
			<a
				href="http://instagram.com/pixelmandy_"
				class="fa-brands fa-instagram"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
		<li>
			<a
				href="http://instagram.com/@pixelmandy"
				class="fa-brands fa-tiktok"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
		<li>
			<a
				href="http://bolha.us/@amandamartins.dev"
				class="fa-brands fa-mastodon"
				target="_blank"
				rel="me noopener noreferrer"
			/>
		</li>
		<li>
			<a
				href="https://dev.to/pixelmandy"
				class="fa-brands fa-dev"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
		<li>
			<a
				href="http://twitch.tv/pixelmandy"
				class="fa-brands fa-twitch"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
		<li>
			<a
				href="http://youtube.com/@pixelmandy"
				class="fa-brands fa-youtube"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
		<li>
			<a
				href="https://discord.com/invite/TgGAXqH6Zf"
				class="fa-brands fa-discord"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</li>
	</ul>
	<section>
		<p>© 2023 Amanda Martins.</p>
		<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Made with Svelte</a>
	</section>
</footer>

<style lang="sass">
  footer
    margin: 0 20rem

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

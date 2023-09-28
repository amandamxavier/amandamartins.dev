<script lang="ts">
	import { onMount } from 'svelte';
	import { getRepos } from '../../utils/repos.js';

	let repos = [];

	onMount(async () => {
		repos = await getRepos();
	});
</script>

<section>
	<ul>
		{#each repos as repo}
			<figure>
				<a href={repo.url} target="_blank">
					<img src={repo.preview} alt={repo.description} />
				</a>
			</figure>
		{/each}
	</ul>
	<ul class="reversed">
		{#each repos as repo}
			<figure>
				<a href={repo.url} target="_blank">
					<img src={repo.preview} alt={repo.description} />
				</a>
			</figure>
		{/each}
	</ul>
</section>

<style lang="sass">
  section
    margin: auto
    overflow: hidden
    position: relative
    width: 100%
    margin-bottom: 1rem

    ul
      display: flex
      width: calc(100vw * 14)
      margin: 0
      animation: scroll 100s linear infinite

      figure
        margin: 1rem 0

        a
          border: none
          transition: 0.3s

          &:hover
            border: none
            opacity: 0.8

        img
          border-radius: 10px

    .reversed
      animation: scroll-reversed 100s linear infinite

    @keyframes scroll
      0%
        transform: translateX(0)

      100%
        transform: translateX(calc(-250px * 7))

    @keyframes scroll-reversed
      0%
        transform: translateX(calc(-250px * 7))

      100%
        transform: translateX(0)

    @media only screen and (min-width: 768px)
      img
        height: 13rem
</style>

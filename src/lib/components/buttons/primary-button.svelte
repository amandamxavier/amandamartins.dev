<script lang="ts">
	export let url: string, icon: string | null, title: string;
</script>

{#if icon && title}
	<a href={url} class="icon-with-text" target="_blank" rel="noopener noreferrer">
		<span class={icon} />{title}</a
	>
{:else if !icon}
	<a href={url} rel="noopener noreferrer">{title}</a>
{:else}
	<a href={url} target="_blank" rel="noopener noreferrer"> <span class={icon} /></a>
{/if}

<style lang="sass">
  a
    display: flex
    justify-content: center
    align-items: center
    background-color: var(--black)
    color: var(--white)
    border: 0.2rem solid var(--black)
    border-radius: 50px
    padding: 1rem 2rem
    transition: 0.3s

    &:hover
      background-color: var(--accent)
      border: 0.2rem solid var(--accent)
      color: var(--black)

    &:focus
      background-color: var(--accent)
      border: 0.2rem solid var(--accent)
      color: var(--black)

    span
      font-size: 1.5rem

  .icon-with-text span
    margin-right: 1.3rem
</style>

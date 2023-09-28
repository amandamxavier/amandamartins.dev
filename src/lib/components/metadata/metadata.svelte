<script lang="ts">
	import { page } from '$app/stores';

	export let title = '',
		description = "I'm Amanda Martins, a developer and content creator, currently based in Brazil.",
		thumbnail = '/img/thumbnail.png';

	const baseDomain = 'amandamartins.dev';
	const baseURL = 'https://amandamartins.dev';
	$: pageTitle = title.length
		? `${title} » Amanda Martins - Developer and Content Creator`
		: 'Amanda Martins - Developer and Content Creator';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{pageTitle}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="{baseURL}{$page.url.pathname}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{baseURL}{thumbnail}" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={baseDomain} />
	<meta property="twitter:url" content="{baseURL}{$page.url.pathname}" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{baseURL}{thumbnail}" />
</svelte:head>

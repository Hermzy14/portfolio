<script>
	import Header from '../components/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	main {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>

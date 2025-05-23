<script>
	import Background from '../components/Background.svelte';
	import Header from '../components/Header.svelte';
</script>

<div id="wrapper">
	<Header />
	<main>
		<slot />
	</main>
</div>
<Background />

<style>
	@import url('https://fonts.googleapis.com/css?family=Antic%20Didone:700|Zen%20Kaku%20Gothic%20New:400');

	:root {
		--text-color: #f5efe5d9;
		--heading-color: #f5efe5;
		--background-color: #172015;
		--primary-color: #cabda5;
		--secondary-color: #47673c;
		--accent-color: #eb6624;
	}

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
	}

	:global(body) {
		font-family: 'Zen Kaku Gothic New';
		font-weight: 400;
		color: var(--text-color);
		background-color: var(--background-color);
	}

	:global(html) {
		font-size: 100%;
	} /* 16px */

	:global(h1),
	:global(h2),
	:global(h3) {
		font-family: 'Antic Didone';
		font-weight: 700;
		color: var(--heading-color);
	}

	:global(h1) {
		font-size: 3.053rem; /* 48.8px */
	}

	:global(h2) {
		font-size: 2.442rem; /* 39.04px */
	}

	:global(h3) {
		font-size: 1.954rem; /* 31.2px */
	}

	:global(small) {
		font-size: 0.8rem; /* 12.8px */
	}

	#wrapper {
		width: 100vw;
		display: flex;
		flex-direction: row;
		gap: 5rem;
		padding: 10rem;
	}

	main {
		width: 50%;
		height: 100vh;
		scroll-behavior: smooth;
		overflow-y: auto;
	}

	@media (max-height: 1000px) {
		#wrapper {
			padding: 5rem;
		}
	}
</style>

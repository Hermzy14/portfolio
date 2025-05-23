<script>
	import Background from '../components/Background.svelte';
	import Header from '../components/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Background />

<style>
	@import url('https://fonts.googleapis.com/css?family=Gulzar:700|Noto%20Sans%20Symbols:400');

	:root {
		--text-color: #f5efe5;
		--background-color: #0d120c;
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
		overflow: hidden;
	}

	:global(body) {
		font-family: 'Noto Sans Symbols';
		font-weight: 400;
		color: var(--text-color);
		background-color: var(--background-color);
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5) {
		font-family: 'Gulzar';
		font-weight: 700;
	}

	:global(html) {
		font-size: 100%;
	} /* 16px */

	:global(h1) {
		font-size: 4.21rem; /* 67.36px */
	}

	:global(h2) {
		font-size: 3.158rem; /* 50.56px */
	}

	:global(h3) {
		font-size: 2.369rem; /* 37.92px */
	}

	:global(h4) {
		font-size: 1.777rem; /* 28.48px */
	}

	:global(h5) {
		font-size: 1.333rem; /* 21.28px */
	}

	:global(small) {
		font-size: 0.75rem; /* 12px */
	}
</style>

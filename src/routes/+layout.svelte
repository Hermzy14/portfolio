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
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');

	:root {
		--text-color: #f5efe5d9;
		--heading-color: #f5efe5;
		--background-color: #172015;
		--primary-color: #cabda5;
		--secondary-color: #eb662420;
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
		font-family: 'Roboto Flex', sans-serif;
		font-weight: 100;
		color: var(--text-color);
		background-color: var(--background-color);
	}

	:global(html) {
		font-size: 100%;
		scroll-behavior: smooth;
	} /* 16px */

	:global(h1),
	:global(h2),
	:global(h3) {
		font-weight: 700;
		color: var(--heading-color);
	}

	:global(h1) {
		font-size: 4.2rem;
	}

	:global(h2) {
		font-size: 3rem;
		font-weight: 400;
	}

	:global(h3) {
		font-size: 2rem;
	}

	:global(small) {
		font-size: 0.75rem;
	}

	#wrapper {
		width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: row;
		gap: 5rem;
		padding: 10rem;
		position: relative;
	}

	main {
		width: 50%;
	}

	@media (max-height: 1000px) {
		:global(h1) {
			font-size: 2.5rem; /* 40px */
		}
		:global(h2) {
			font-size: 2rem; /* 32px */
		}
		:global(h3) {
			font-size: 1.5rem; /* 24px */
		}
		:global(small) {
			font-size: 0.7rem; /* 11.2px */
		}

		#wrapper {
			padding: 5rem 10rem;
		}
	}
</style>

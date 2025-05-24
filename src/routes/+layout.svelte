<script>
	import { page } from '$app/state';
	import Background from '../components/Background.svelte';
	import Header from '../components/Header.svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { children } = $props();

	let previousPath = $state('');

	$effect(() => {
		if (page) {
			previousPath = page.url.pathname;
		}
	});
</script>

<div id="wrapper">
	<Header />
	<main>
		{#key page.url.pathname}
			<div in:fade={{ duration: 600, easing: cubicOut }}>
				{@render children()}
			</div>
		{/key}
	</main>
</div>
<Background />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');

	:root {
		--text-color: #f5efe5d9;
		--heading-color: #f5efe5;
		--background-color: #131922;
		--primary-color: #58a6ff20;
		--secondary-color: #58a6ff20;
		--accent-color: #58a6ff;
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
		font-size: 3.5rem;
	}

	:global(h2) {
		font-size: 2.5rem;
		font-weight: 400;
	}

	:global(h3) {
		font-size: 1.5rem;
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
		position: relative;
		overflow: hidden;
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

	@media (max-width: 860px) {
		#wrapper {
			flex-direction: column;
			padding: 5rem 2rem;
		}

		main {
			width: 100%;
		}
	}
</style>

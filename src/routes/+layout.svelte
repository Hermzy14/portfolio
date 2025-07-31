<script>
	import { page } from '$app/state';
	import Background from '../components/Background.svelte';
	import Header from '../components/Header.svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut, cubicOut } from 'svelte/easing';
	import { theme } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	export const prerender = true;

	let { children } = $props();

	// Get the current page URL
	let currentPage = $derived(page.url.pathname);
	function isProjectPage() {
		return ['/learniverse', '/chaos-game', '/card-game', '/train-dispatch-system'].includes(
			currentPage
		);
	}
	// Check if the current page is a project page, and set the class accordingly
	let isProject = $derived(isProjectPage());
	$effect(() => {
		if (typeof window !== 'undefined') {
			document.body.classList.toggle('project-page', isProject);
		}
	});

	// Initialize theme on mount
	onMount(() => {
		document.documentElement.setAttribute('data-theme', $theme);
	});

	// Update theme when it changes
	$effect(() => {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('data-theme', $theme);
		}
	});
</script>

{#key page.url.pathname}
	<div id="wrapper" in:fade={{ duration: 600, easing: cubicInOut }}>
		<Header />
		{#if isProject}
			<main class="project-page">
				{@render children()}
			</main>
		{/if}
		{#if !isProject}
			<main class="home-page">
				{@render children()}
			</main>
		{/if}
	</div>
{/key}
<Background />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');

	:root {
		/* Dark theme (default) */
		--text-color: #f5efe5d9;
		--heading-color: #f5efe5;
		--background-color: #131922;
		--background-color-translucent: #131922bb;
		--primary-color: #58a6ff20;
		--secondary-color: #58a6ff20;
		--accent-color: #58a6ff;

		/* Transition duration for theme switching */
		--theme-transition: 0.6s ease-in-out;
	}

	:root[data-theme='light'] {
		/* Light theme */
		--text-color: #4a4a4a;
		--heading-color: #383838;
		--background-color: #e4e1da;
		--background-color-translucent: #e4e1dabb;
		--primary-color: #a0c4e460;
		--secondary-color: #a0c4e460;
		--accent-color: #779cbb;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		/* Add smooth transition to all elements */
		transition:
			background-color var(--theme-transition),
			color var(--theme-transition),
			border-color var(--theme-transition),
			box-shadow var(--theme-transition);
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
		/* Ensure body transitions smoothly */
		transition:
			background-color var(--theme-transition),
			color var(--theme-transition);
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

	.home-page {
		width: 50%;
		position: relative;
		overflow: hidden;
	}

	.project-page {
		width: 100%;
		margin-top: 3rem;
		position: relative;
		overflow: hidden;
		z-index: 1;
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

		.home-page {
			width: 100%;
		}
	}
</style>

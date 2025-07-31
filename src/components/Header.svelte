<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import { Mail, FileText, ArrowUp, Sun, Moon } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme.js';
	import ProjectList from './ProjectList.svelte';

	let activeSection = $state('about');
	let activeProject = $state('');
	let showProjectDropdown = $state(false);

	function updateActiveSection() {
		const sections = ['about', 'projects', 'contact'];

		const scrollPosition = window.scrollY + window.innerHeight / 5; // Offset for better detection

		for (const section of sections) {
			const element = document.getElementById(section);
			if (element) {
				const rect = element.getBoundingClientRect();
				const top = rect.top + window.scrollY;
				const bottom = top + rect.height;

				if (scrollPosition >= top && scrollPosition < bottom) {
					activeSection = section;
					break;
				}
			}
		}
	}

	function updateActiveSectionFromRoute(pathname: string) {
		// Check if we're on a project page
		const projectRoutes = ['/learniverse', '/chaos-game', '/card-game', '/train-dispatch-system'];

		if (projectRoutes.includes(pathname)) {
			activeSection = 'projects';
			activeProject = pathname.split('/')[1]; // Extract project name from the path
		} else if (pathname === '/' || pathname.includes('#about')) {
			activeSection = 'about';
			activeProject = '';
		} else if (pathname.includes('#projects')) {
			activeSection = 'projects';
			activeProject = '';
		} else if (pathname.includes('#contact')) {
			activeSection = 'contact';
			activeProject = '';
		} else {
			// Default to about for home page
			activeSection = 'about';
			activeProject = '';
		}
	}

	// Listen to route changes
	$effect(() => {
		if ($page) {
			updateActiveSectionFromRoute($page.url.pathname);
		}
	});

	$effect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', updateActiveSection);

			return () => {
				window.removeEventListener('scroll', updateActiveSection);
			};
		}
	});
</script>

<a href="#hero" class="go-to-top"><ArrowUp size={30} /></a>
<header class={activeProject ? 'project-page' : ''}>
	<section id="hero">
		<h1>Herman Lundby-Holen</h1>
		<h2>Software utvikler</h2>
		<p>
			Jeg er en dataingeniørstudent med en lidenskap for teknologi og design. Jeg elsker å løse
			problemer og skape innovative løsninger.
		</p>
	</section>

	<nav class={activeProject ? 'active-project' : ''}>
		<ul>
			<li class={activeSection === 'about' ? 'active-item' : ''}>
				<a href="/#about" class={activeSection === 'about' ? 'active' : ''}>Om meg</a>
			</li>
			<li
				class={activeSection === 'projects' ? 'active-item' : ''}
				class:project-dropdown-container={activeProject}
				onmouseenter={() => {
					if (activeProject) showProjectDropdown = true;
				}}
				onmouseleave={() => {
					if (activeProject) showProjectDropdown = false;
				}}
			>
				<a href="/#projects" class={activeSection === 'projects' ? 'active' : ''}>Prosjekter</a>

				{#if activeSection === 'projects' && !activeProject}
					<ul
						class="project-list"
						in:slide={{ duration: 300, easing: cubicOut }}
						out:slide={{ duration: 200, easing: cubicOut }}
					>
						<li class={activeProject === 'learniverse' ? 'active-item' : ''}>
							<a href="/learniverse" class={activeProject === 'learniverse' ? 'active' : ''}
								>Learniverse Connect</a
							>
						</li>
						<li class={activeProject === 'chaos-game' ? 'active-item' : ''}>
							<a href="/chaos-game" class={activeProject === 'chaos-game' ? 'active' : ''}
								>Chaos Game</a
							>
						</li>
						<li class={activeProject === 'card-game' ? 'active-item' : ''}>
							<a href="/card-game" class={activeProject === 'card-game' ? 'active' : ''}
								>Card Game</a
							>
						</li>
						<li class={activeProject === 'train-dispatch-system' ? 'active-item' : ''}>
							<a
								href="/train-dispatch-system"
								class={activeProject === 'train-dispatch-system' ? 'active' : ''}
								>Train Dispatch System</a
							>
						</li>
					</ul>
				{/if}

				<!-- Hover dropdown for project pages -->
				{#if activeProject && showProjectDropdown}
					<div class="project-dropdown-wrapper">
						<ProjectList />
					</div>
				{/if}
			</li>
			<li class={activeSection === 'contact' ? 'active-item' : ''}>
				<a href="/#contact" class={activeSection === 'contact' ? 'active' : ''}>Kontakt meg</a>
			</li>
		</ul>
	</nav>

	<section id="contact-options">
		<div class="contact-options-wrapper">
			<a href="https://github.com/Hermzy14" target="_blank" class="contact-link" title="GitHub"
				><SiGithub size={30} /></a
			>
			<a href="mailto:hermanluho@gmail.com" class="contact-link" title="Mail">
				<Mail size={30} /></a
			>
			<a href="/CV.pdf" target="_blank" class="contact-link" title="CV"> <FileText size={30} /></a>
		</div>
		<button
			class="theme-toggle"
			onclick={() => theme.toggle()}
			title={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{#if $theme === 'dark'}
				<Sun size={24} />
			{:else}
				<Moon size={24} />
			{/if}
		</button>
	</section>
</header>

<style>
	.go-to-top {
		display: none;
	}

	header {
		position: sticky;
		top: 10rem;
		left: 0;
		width: 50%;
		height: calc(100vh - 20rem);
		color: var(--text-color);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		z-index: 10;
		transition: color var(--theme-transition, 0.6s ease-in-out);
	}

	.project-page {
		background-color: var(--background-color-translucent);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12);
	}

	header::after {
		content: '';
		position: absolute;
		top: 0;
		right: -2.5rem;
		width: 1px;
		height: 100%;
		background: linear-gradient(
			to bottom,
			transparent 0%,
			var(--primary-color) 10%,
			var(--primary-color) 90%,
			transparent 100%
		);
		transition: background var(--theme-transition, 0.6s ease-in-out);
	}

	#hero {
		display: flex;
		flex-direction: column;
		text-align: justify;
		scroll-margin-top: 5rem;
	}

	#hero h2 {
		font-size: 1.5rem;
		margin: 0.5rem 0 1rem 0;
	}

	nav ul {
		list-style-position: inside;
		list-style-type: lower-roman;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	nav li {
		color: var(--text-color);
		transition: color 0.3s ease;
		width: fit-content;
		position: relative;
	}

	nav li:hover {
		color: var(--accent-color);
	}

	nav li.active-item {
		color: var(--accent-color);
	}

	nav a {
		color: var(--text-color);
		text-decoration: none;
		padding: 1rem;
		border-radius: 8px;
		transition: color var(--theme-transition, 0.3s ease-in-out);
		width: 100%;
	}

	nav a:hover {
		color: var(--accent-color);
	}

	.active {
		color: var(--accent-color);
	}

	.project-list {
		font-size: small;
		margin-left: 1.5rem;
		padding-top: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		overflow: hidden;
	}

	/* Hover dropdown styles */
	.project-dropdown-wrapper {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 1rem;
		padding: 0.5rem;
		min-width: max-content;

		background: var(--background-color-translucent);
		border: 1px solid var(--primary-color);
		backdrop-filter: blur(8px);
		border-radius: 8px;

		z-index: 1000;
		list-style: none;
	}

	#contact-options {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.contact-options-wrapper {
		display: flex;
		gap: 1rem;
	}

	.contact-link {
		background: var(--text-color);
		border-radius: 50%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		color: var(--background-color);
		text-decoration: none;
		transition: all var(--theme-transition, 0.3s ease-in-out);
	}

	.contact-link:hover {
		background: var(--accent-color);
		color: var(--text-color);
	}

	.theme-toggle {
		background: var(--text-color);
		border-radius: 50%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		color: var(--background-color);
		border: none;
		cursor: pointer;
		transition: all var(--theme-transition, 0.3s ease-in-out);
	}

	.theme-toggle:hover {
		background: var(--accent-color);
		color: var(--text-color);
	}

	@media (max-height: 1000px) {
		header {
			top: 5rem;
			height: calc(100vh - 10rem);
		}
	}

	@media (max-width: 860px) {
		.go-to-top {
			display: block;
			position: fixed;
			bottom: 2rem;
			right: 2rem;
			background-color: var(--text-color);
			color: var(--background-color);
			border-radius: 50%;
			width: 40px;
			height: 40px;
			border: none;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		header {
			position: relative;
			width: 100%;
			top: 0;
		}

		#hero h1 {
			display: none;
		}

		.active,
		nav li.active-item {
			color: var(--text-color);
		}

		/* Hide dropdown on mobile */
		.project-dropdown-wrapper {
			display: none;
		}
	}

	/* Special styles for the active project */
	:global(body.project-page) header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding: 2rem;
	}

	:global(body.project-page) header::after {
		content: '';
		position: absolute;
		top: auto;
		bottom: 0;
		right: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: linear-gradient(
			to right,
			transparent 0%,
			var(--primary-color) 20%,
			var(--primary-color) 80%,
			transparent 100%
		);
	}

	:global(body.project-page) #hero h1 {
		font-size: 2rem;
	}

	:global(body.project-page) #hero h2 {
		display: none;
	}

	:global(body.project-page) #hero p {
		display: none;
	}

	:global(body.project-page) nav {
		display: flex;
		justify-content: center;
	}

	:global(body.project-page) nav ul {
		flex-direction: row;
		gap: 2rem;
	}

	:global(body.project-page) .project-list {
		display: none;
	}

	:global(body.project-page) #contact-options {
		display: none;
	}
</style>

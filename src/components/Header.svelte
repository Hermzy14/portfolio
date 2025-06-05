<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import { Mail, FileText, ArrowUp } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { page } from '$app/stores';

	let activeSection = $state('about');
	let activeProject = $state('');

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
<header>
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
			<li class={activeSection === 'projects' ? 'active-item' : ''}>
				<a href="/#projects" class={activeSection === 'projects' ? 'active' : ''}>Prosjekter</a>
				{#if activeSection === 'projects'}
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
			</li>
			<li class={activeSection === 'contact' ? 'active-item' : ''}>
				<a href="/#contact" class={activeSection === 'contact' ? 'active' : ''}>Kontakt meg</a>
			</li>
		</ul>
	</nav>

	<section id="contact-options">
		<a href="https://github.com/Hermzy14" target="_blank" class="contact-link" title="GitHub"
			><SiGithub size={30} /></a
		>
		<a href="mailto:hermanluho@gmail.com" class="contact-link" title="Mail"> <Mail size={30} /></a>
		<a href="/CV.pdf" target="_blank" class="contact-link" title="CV"> <FileText size={30} /></a>
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
		transition: color 0.3s ease;
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

	#contact-options {
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
		transition: all 0.3s ease;
	}
	.contact-link:hover {
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
			font-size: 2rem;
		}

		.active,
		nav li.active-item {
			color: var(--text-color);
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

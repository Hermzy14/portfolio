<script lang="ts">
	import { SiGithub, SiGmail } from '@icons-pack/svelte-simple-icons';
	import { Mail } from 'lucide-svelte';

	let activeSection = $state('about');
	let mainElement: HTMLElement;

	function updateActiveSection() {
		const sections = ['about', 'projects', 'contact']; // Fixed: separate items

		if (!mainElement) return;

		const scrollPosition = mainElement.scrollTop + 100; // Offset for better detection

		for (const section of sections) {
			const element = document.getElementById(section);
			if (element) {
				const rect = element.getBoundingClientRect();
				const mainRect = mainElement.getBoundingClientRect();
				const top = rect.top - mainRect.top + mainElement.scrollTop;
				const bottom = top + rect.height;

				if (scrollPosition >= top && scrollPosition < bottom) {
					activeSection = section;
					break;
				}
			}
		}
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			// Get the main element
			const foundMain = document.querySelector('main');
			if (foundMain instanceof HTMLElement) {
				mainElement = foundMain;
			} else {
				mainElement = undefined as unknown as HTMLElement;
			}

			if (mainElement) {
				mainElement.addEventListener('scroll', updateActiveSection);
				updateActiveSection(); // Initial check
			}

			return () => {
				if (mainElement) {
					mainElement.removeEventListener('scroll', updateActiveSection);
				}
			};
		}
	});
</script>

<header>
	<section>
		<h1>Herman Lundby-Holen</h1>
		<h2>Software utvikler</h2>
		<p>
			Jeg er en dataingeniørstudent med en lidenskap for teknologi og design. Jeg elsker å løse
			problemer og skape innovative løsninger.
		</p>
	</section>

	<nav>
		<ul>
			<li><a href="#about" class={activeSection === 'about' ? 'active' : ''}>Om meg</a></li>
			<li>
				<a href="#projects" class={activeSection === 'projects' ? 'active' : ''}>Prosjekter</a>
			</li>
			<li>
				<a href="#contact" class={activeSection === 'contact' ? 'active' : ''}>Kontakt meg</a>
			</li>
		</ul>
	</nav>

	<section>
		<a href="https://github.com/Hermzy14" target="_blank" class="contact-link"
			><SiGithub size={30} /></a
		>
		<a href="mailto:hermanluho@gmail.com" class="contact-link">
			<Mail size={30} class="mail-icon" /></a
		>
	</section>
</header>

<style>
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

	nav ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
	}

	nav a {
		color: var(--text-color);
		text-decoration: none;
		padding: 1rem;
		border-radius: 8px;
		display: block;
		transition: color 0.3s ease;
	}

	nav a:hover {
		color: var(--accent-color);
	}

	.active {
		color: var(--accent-color);
	}

	.contact-link {
		color: var(--text-color);
		text-decoration: none;
		transition: color 0.3s ease;
	}
	.contact-link:hover {
		color: var(--accent-color);
	}

	.mail-icon {
		background: var(--text-color);
	}

	@media (max-height: 1000px) {
		header {
			top: 5rem;
			height: calc(100vh - 10rem);
		}
	}
</style>

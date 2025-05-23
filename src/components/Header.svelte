<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import { Mail, FileText } from 'lucide-svelte';

	let activeSection = $state('about');

	function updateActiveSection() {
		const sections = ['about', 'projects', 'contact']; // Fixed: separate items

		const scrollPosition = window.scrollY + window.innerHeight / 3; // Offset for better detection

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

	$effect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', updateActiveSection);
			// Initial check
			updateActiveSection();

			return () => {
				window.removeEventListener('scroll', updateActiveSection);
			};
		}
	});
</script>

<header>
	<section id="hero">
		<h1>Herman Lundby-Holen</h1>
		<h2>Software utvikler</h2>
		<p>
			Jeg er en dataingeniørstudent med en lidenskap for teknologi og design. Jeg elsker å løse
			problemer og skape innovative løsninger.
		</p>
	</section>

	<nav>
		<ul>
			<li class={activeSection === 'about' ? 'active-item' : ''}>
				<a href="#about" class={activeSection === 'about' ? 'active' : ''}>Om meg</a>
			</li>
			<li class={activeSection === 'projects' ? 'active-item' : ''}>
				<a href="#projects" class={activeSection === 'projects' ? 'active' : ''}>Prosjekter</a>
			</li>
			<li class={activeSection === 'contact' ? 'active-item' : ''}>
				<a href="#contact" class={activeSection === 'contact' ? 'active' : ''}>Kontakt meg</a>
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

	#hero {
		display: flex;
		flex-direction: column;
		text-align: justify;
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
</style>

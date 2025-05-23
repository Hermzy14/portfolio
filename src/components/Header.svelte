<script lang="ts">
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
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 200px;
		color: var(--text-color);
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}

	nav ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
	}

	nav a {
		color: var(--text-color);
		text-decoration: none;
		padding: 1rem;
		border-radius: 8px;
		display: block;
		text-align: center;
		transition: color 0.3s ease;
	}

	nav a:hover {
		color: var(--accent-color);
	}

	.active {
		color: var(--accent-color);
	}
</style>

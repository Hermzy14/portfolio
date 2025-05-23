<script lang="ts">
	import { page } from '$app/state';

	let url = $state(page.url.pathname);
	// Listen for changes to the URL
	$effect(() => {
		url = page.url.pathname;
	});
</script>

<header>
	<nav>
		<ul>
			<li><a href="/" class={url === '/' ? 'active' : ''}>Hjem</a></li>
			<li><a href="/about" class={url === '/about' ? 'active' : ''}>Om meg</a></li>
			<li><a href="/projects" class={url === '/projects' ? 'active' : ''}>Prosjekter</a></li>
			<li><a href="/contact" class={url === '/contact' ? 'active' : ''}>Kontakt meg</a></li>
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

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
		background-color: #333;
		color: white;
		padding: 2rem;
		margin-bottom: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	nav ul {
		list-style-type: none;
		display: flex;
		gap: 2rem;
	}

	nav a {
		color: white;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 8px;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.active {
		background: #555;
	}
</style>

<script lang="ts">
	const projects = [
		{
			title: 'Learniverse Connect',
			description: 'Webtek & Apputvikling',
			year: '2025',
			href: '/learniverse'
		},
		{
			title: 'Chaos Game',
			description: 'Programmering 2',
			year: '2024',
			href: '/chaos-game'
		},
		{
			title: 'Card Game',
			description: 'Programmering 2',
			year: '2024',
			href: 'https://webteknologi9.netlify.app',
			target: '_blank'
		},
		{
			title: 'Train Dispatch System',
			description: 'Programmering 1',
			year: '2023',
			href: 'https://webteknologi9.netlify.app',
			target: '_blank'
		}
	];
</script>

<ul>
	{#each projects as project}
		<li>
			<a href={project.href} target={project.target}>
				<span class="project-title">{project.title}</span>
				<span class="project-description">{project.description}</span>
				<div class="seperator"></div>
				<span class="project-year">{project.year}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}

	li {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	a {
		display: flex;
		gap: 0.5rem;
		text-decoration: none;
		color: var(--text-color);
		padding: 0.5rem;
		border-radius: 8px;
		transition: background 0.3s ease;
		font-size: 0.8rem;
	}

	a:hover {
		background: var(--secondary-color);
	}

	.project-title {
		font-weight: 700;
	}

	.seperator {
		flex-grow: 1;
		border-bottom: 1px solid var(--text-color);
		align-self: center;
	}
</style>

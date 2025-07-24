<script>
	import ProjectList from './ProjectList.svelte';
</script>

<section id="projects">
	<h2>Prosjekter</h2>
	<p>
		I løpet av studiene har jeg vært involvert i flere prosjekter som har utviklet både mine
		tekniske ferdigheter og samarbeidsevner. Her er noen av dem:
	</p>
	<ProjectList />
</section>

<style>
	section {
		scroll-margin-top: 5rem;
		margin-bottom: 5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>

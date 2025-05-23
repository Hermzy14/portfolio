<script lang="ts">
	let age: number = $state(0);

	$effect(() => {
		calculateAge();
	});

	function calculateAge() {
		const currentYear = new Date().getFullYear();
		age = currentYear - 2003;
	}
</script>

<section id="about">
	<h1>Hei,</h1>
	<p>Jeg heter Herman, er en {age} gammel gutt som studerer dataingeniør ved NTNU</p>
</section>

<style>
	section {
		height: 100vh;
		scroll-margin-top: 2rem;
	}
</style>

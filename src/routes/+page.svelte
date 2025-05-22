<script lang="ts">
	let age: Number = $state(0);

	$effect(() => {
		calculateAge();
	});

	function calculateAge() {
		const currentYear = new Date().getFullYear();
		age = currentYear - 2003;
	}
</script>

<section id="hero">
	<h1>Hei, jeg er Herman Lundby-Holen</h1>
	<p>Jeg er {age} år gammel og studerer dataingeniør ved NTNU.</p>
</section>

<style>
</style>

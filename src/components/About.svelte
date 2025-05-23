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
	<h2>Om meg</h2>
	<p>
		Hei, jeg er {age} år gammel og studerer dataingeniør ved NTNU i Ålesund. Interessen min for problemløsning
		og teknologi - kombinert med en lidenskap for design - førte meg hit, hvor jeg spesialiserer meg
		i applikasjonsutvikling.
	</p>
	<p>
		Gjennom studiene har jeg deltatt i flere prosjekter som har utviklet både mine tekniske
		ferdigheter og samarbeidsevner. Under <a href="#projects">Prosjekter</a> kan du lese mere om noen
		av dem i detalj.
	</p>
	<p>
		Når jeg fullfører studiene, ser jeg for meg en fremtid innen frontend-utvikling eller
		apputvikling - områder som virkelig fascinerer meg akkurat nå. Samtidig er jeg åpen for nye
		utfordringer og elsker å lære! Mest av alt ønsker jeg å bidra til løsninger som utgjør en
		positiv forskjell.
	</p>
	<p>
		Ved siden av studiene er jeg også læringsassistent i Programmering 1, der jeg støtter studenter
		i forståelsen av objektorientert programmering med Java. Arbeidet krever både sterk faglig
		forståelse og evnen til å kommunisere klart. På fritiden liker jeg å eksperimentere og utforske
		ny teknologi.
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		scroll-margin-top: 10rem;
		gap: 1rem;
		margin-bottom: 5rem;
	}

	p,
	a {
		text-align: justify;
		color: var(--text-color);
	}

	@media (max-height: 1000px) {
		section {
			scroll-margin-top: 5rem;
		}
	}
</style>

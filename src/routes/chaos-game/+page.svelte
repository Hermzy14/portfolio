<script>
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
</script>

<h1>Chaos Game - Visualisering av fraktaler med JavaFX</h1>

<p>
	Dette prosjektet, utviklet i løpet av vårsemesteret 2024 ved NTNU i Ålesund, er en
	JavaFX-applikasjon som implementerer et kaosspill - en metode for å generere fraktalmønstre.
	Sammen med Mustafa Yusuf-Haji, var jeg ansvarlig for å utvikle applikasjonen, inkludert design av
	brukergrensesnittet, implementering av fraktalgenereringslogikken, og håndtering av I/O.
</p>

<a href="https://github.com/Hermzy14/Chaos-Game" target="_blank" class="github-link"
	><SiGithub /> Sjekk ut på GitHub</a
>

<div class="img-container">
	<img src="/ChaosGameOverview.gif" alt="Oversikt over Chaos Game applikasjonen." />
</div>

<h3>Oversikt av prosjektet</h3>
<p>
	Kaosspillet demonstrerer hvordan komplekse mønstre kan oppstå fra enkle, iterative regler.
	Brukerere starter med en polygon, og ved å gjentatte ganger flytte et punkt halvveis mot tilfeldig
	valgte punkter, lages fraktalene. Jo flere iterasjoner som utføres, deto mer detaljerte blir
	fraktalen.
</p>

<h3>Hovedfunksjoner og læringsutbytte</h3>
<p id="experience">Prosjektet ga meg praktisk erfaring med:</p>
<ul>
	<li>
		JavaFX GUI: Jeg lærte å bruke JavaFX for å lage et interaktivt brukergrensesnitt som lar brukere
		kontrollere fraktalgenereringen.
	</li>
	<li>
		MVC: Jeg implementerte MVC-arkitekturen for å skille logikk, brukergrensesnitt og
		datahåndtering, noe som forbedret kodeorganiseringen og vedlikeholdbarheten.
	</li>
	<li>
		Parametermanipulering: Applikasjonen lar brukere dynamisk justere ulike parametere. Denne
		funksjonaliteten viser min evne til å lage fleksible og tilpassbare applikasjoner.
	</li>
	<li>
		Data Persistence: Muligheten til å lagre og laste fraktaler fra filer viser min forståelse av
		fil- og I/O-operasjoner.
	</li>
</ul>

<style>
	.img-container {
		display: flex;
		justify-content: center;
	}
	img {
		border-radius: 8px;
		margin: 1rem 0;
	}

	p {
		text-align: justify;
		margin: 0.5rem 0 1rem 0;
	}
	#experience {
		margin-bottom: 0.5rem;
	}

	.github-link {
		background: var(--text-color);
		border-radius: 8px;
		padding: 0.5rem 1rem;
		gap: 0.5rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--background-color);
		text-decoration: none;
		transition: all var(--theme-transition, 0.3s ease-in-out);
	}
	.github-link:hover {
		background: var(--accent-color);
		color: var(--text-color);
	}

	ul {
		list-style: disc;
		padding-left: 1rem;
	}

	li {
		margin-bottom: 0.5rem;
	}
</style>

<script lang="ts">
	import { parts, appendices, chapterNumber } from '$lib/grammar/toc';
	import { CANONICAL_HOSTNAME } from '$lib/consts';

	const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

	const bookJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Book',
		name: 'A Grammar of Sakhalin Ainu',
		url: new URL('/grammar', CANONICAL_HOSTNAME).toString(),
		description:
			'A reference grammar of Sakhalin (Karafuto) Ainu with corpus-attested interlinear examples.',
		inLanguage: 'en',
		genre: 'Reference grammar',
		about: { '@type': 'Language', name: 'Sakhalin Ainu', alternateName: 'Karafuto Ainu' },
		publisher: { '@type': 'Organization', name: 'Aynu Itah', url: CANONICAL_HOSTNAME },
		isPartOf: { '@type': 'WebSite', name: 'Aynu Itah', url: CANONICAL_HOSTNAME }
	};
	const bookJsonLdScript =
		'<' + 'script type="application/ld+json">' + JSON.stringify(bookJsonLd) + '</' + 'script>';
</script>

<svelte:head>
	<title>A Grammar of Sakhalin Ainu</title>
	<meta
		name="description"
		content="A modern reference grammar of Sakhalin Ainu (Karafuto Ainu, Enciw itah): phonology, morphology, and syntax, with attested, glossed examples linked to a dictionary and corpus."
	/>
	<meta property="og:title" content="A Grammar of Sakhalin Ainu" />
	<meta
		property="og:description"
		content="A reference grammar of Sakhalin Ainu with corpus-attested interlinear examples."
	/>
	<meta property="og:url" content={new URL('/grammar', CANONICAL_HOSTNAME).toString()} />
	<meta property="og:type" content="website" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- controlled JSON-LD built from constants, never user input -->
	{@html bookJsonLdScript}
</svelte:head>

<article class="grammar-cover">
	<header class="cover-head">
		<p class="cover-kicker">Aynu Itah · itah.aynu.org</p>
		<h1>A Grammar of Sakhalin Ainu</h1>
		<p class="cover-sub">
			A reference grammar of the Ainu language of Sakhalin (<span lang="ja">樺太</span>
			<i>Karafuto</i>, <span lang="ru">Сахалин</span>), the language its speakers called
			<i lang="ain">enciw itah</i>
			— with interlinear examples drawn from attested texts and linked to the
			<a href="/">dictionary</a> on this site.
		</p>
	</header>

	<section class="preface">
		<h2>Preface</h2>
		<p>
			Sakhalin Ainu is the variety of Ainu once spoken across the southern half of Sakhalin island.
			Its last fully fluent speakers died in the 1990s, but it is among the better documented Ainu
			varieties: Bronisław Piłsudski transcribed and translated a large body of texts at the
			beginning of the twentieth century, Chiri Mashiho built his
			<cite lang="ja">アイヌ語法研究</cite> (1942) around it, and from the 1960s onward Murasaki Kyōko
			recorded and analysed the speech of the last generation, above all that of Asai Take. This grammar
			stands on that work. It is not the first description of Sakhalin Ainu — Piłsudski (1912), Chiri
			(1942) and Murasaki (1976; 1979) each contain one — but it aims to be the first full-length reference
			grammar of the language in English: a single, systematically organised description that covers
			phonology, morphology, and syntax, incorporates the analytical advances of recent work by Anna
			Bugaeva, Elia Dal Corso, Sakaguchi Ryō, and others, and supports every claim with attested, cited
			data.
		</p>
		<p>
			Every numbered example is glossed morpheme by morpheme following the Leipzig Glossing Rules
			and carries a citation of its original source and a dialect tag. The examples come from the
			published record of the language: Piłsudski’s <cite>Materials</cite>, the texts embedded in
			Dobrotvorsky’s dictionary of 1875, the letters and book of Sentoku Tarōji, the folktales of
			Asai Take, the recordings edited in the Endangered Languages of the Pacific Rim series, and
			the grammatical literature. Ainu words in examples are linked to the dictionary of this site,
			which in turn links each word to a searchable corpus, so the path from a grammatical statement
			to the primary record is never more than two clicks long.
		</p>
		<p>
			Unless a dialect tag says otherwise, statements describe the West-coast varieties documented
			by Chiri and Murasaki, which form the core of the twentieth-century record; East-coast data,
			chiefly from Piłsudski and Sentoku, are flagged as such, and Hokkaidō Ainu appears only where
			a comparison clarifies the Sakhalin facts. Where the published literature is silent, the
			description rests on our own analysis of the text corpus, and the prose says so explicitly.
		</p>
	</section>

	<section class="toc">
		<h2>Contents</h2>
		{#each parts as part, pi}
			<h3 class="toc-part">Part {roman[pi]} · {part.title}</h3>
			<ol class="toc-list">
				{#each part.chapters as c}
					<li value={chapterNumber(c.slug)}>
						<a href={`/grammar/${c.slug}`}>{c.title}</a>
						<p class="toc-summary">{c.summary}</p>
					</li>
				{/each}
			</ol>
		{/each}
		<h3 class="toc-part">Back matter</h3>
		<ul class="toc-list toc-backmatter">
			{#each appendices as a}
				<li><a href={`/grammar/${a.slug}`}>{a.title}</a></li>
			{/each}
		</ul>
	</section>

	<section class="howto">
		<h2>How to cite</h2>
		<p>
			Aynu Itah. 2026. <cite>A Grammar of Sakhalin Ainu</cite>. Online:
			<a href="https://itah.aynu.org/grammar">https://itah.aynu.org/grammar</a> (accessed
			<i>date</i>).
		</p>
	</section>
</article>

<style>
	.cover-head {
		margin: 1rem 0 2.5rem;
	}

	.cover-kicker {
		font-variant-caps: all-small-caps;
		letter-spacing: 0.14em;
		color: #1e40af;
		margin-bottom: 0.4rem;
	}

	.grammar-cover h1 {
		font-size: 2.3rem;
		line-height: 1.15;
		font-weight: 700;
		margin: 0 0 0.8rem;
	}

	.cover-sub {
		font-size: 1.1rem;
		color: #374151;
	}

	.toc-part {
		margin: 1.4em 0 0.4em;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.08em;
		font-size: 1.05rem;
		color: #4b5563;
	}

	.toc-list {
		margin: 0;
		padding-left: 2.2em;
	}

	.toc-backmatter {
		list-style: none;
		padding-left: 0.4em;
	}

	.toc-list > li {
		margin: 0.35em 0;
	}

	.toc-list a {
		font-weight: 600;
		color: #1f2937;
	}

	.toc-list a:hover {
		color: #1e40af;
		text-decoration: underline;
	}

	.toc-summary {
		margin: 0.05em 0 0;
		font-size: 0.9rem;
		color: #6b7280;
	}
</style>

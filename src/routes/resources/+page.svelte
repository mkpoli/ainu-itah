<script lang="ts">
	type Res = { name: string; url: string; description: string; lang?: string };

	// Sister projects in the aynu.org ecosystem.
	const ecosystem: Res[] = [
		{
			name: 'tu itak re itak — learn Ainu',
			url: 'https://quiz.aynu.org/',
			description:
				'A gamified, Duolingo-style Ainu course: lessons, streaks, and spaced repetition.',
			lang: 'ja/en'
		},
		{
			name: 'Itak-uoeroskip — Ainu glossary',
			url: 'https://itak.aynu.org/',
			description: 'A collaborative glossary of Ainu terminology for modern concepts.',
			lang: 'ain'
		},
		{
			name: 'Kampisos — Ainu corpus',
			url: 'https://kampisos.aynu.io/',
			description: 'A searchable corpus of attested Ainu texts, dialect-tagged and source-cited.',
			lang: 'ain'
		},
		{
			name: 'Aynuwiki',
			url: 'https://wiki.aynu.org/',
			description: 'A wiki written in the Ainu language.',
			lang: 'ain'
		},
		{
			name: 'Aynu.org',
			url: 'https://aynu.org/',
			description: 'The hub for these and other Ainu-language tools and projects.',
			lang: 'en'
		}
	];

	const sections: { title: string; items: Res[] }[] = [
		{
			title: 'Organizations & museums',
			items: [
				{
					name: 'Upopoy — National Ainu Museum and Park',
					url: 'https://ainu-upopoy.go.jp/en/',
					description:
						'Japan’s national centre for Ainu culture: a museum and outdoor park with daily Ainu-language and cultural programmes.',
					lang: 'ja/en'
				},
				{
					name: 'The Foundation for Ainu Culture (FF-Ainu)',
					url: 'https://www.ff-ainu.or.jp/web/english/',
					description:
						'The public foundation promoting Ainu culture, language revitalization, and research.',
					lang: 'ja/en'
				},
				{
					name: 'Ainu Association of Hokkaido',
					url: 'https://www.ainu-assn.or.jp/english/',
					description:
						'The principal Ainu representative organization, preserving and transmitting Ainu culture.',
					lang: 'ja/en'
				},
				{
					name: 'Hokkaido University — Center for Ainu and Indigenous Studies',
					url: 'https://www.cais.hokudai.ac.jp/english/',
					description:
						'University research centre studying Ainu and other indigenous peoples across linguistics, history, and law.',
					lang: 'ja/en'
				},
				{
					name: 'Nibutani Ainu Culture Museum',
					url: 'https://www.biratori-ainu-culture.com/en/trip/nibutani-museum/',
					description:
						'Biratori-town museum of the Saru-river Ainu, holding artifacts and recordings of yukar epics.',
					lang: 'ja/en'
				},
				{
					name: 'Hokkaido Museum',
					url: 'https://www.hm.pref.hokkaido.lg.jp/en/index/',
					description:
						'Prefectural museum in Sapporo with a permanent Ainu culture and history exhibition.',
					lang: 'ja/en'
				},
				{
					name: 'Agency for Cultural Affairs — Ainu culture',
					url: 'https://www.bunka.go.jp/english/policy/cultural_properties/ainu/',
					description: 'Government agency page on national policy and programmes for Ainu culture.',
					lang: 'ja/en'
				}
			]
		},
		{
			title: 'Dictionaries & learning',
			items: [
				{
					name: 'National Ainu Museum — Ainu Language Archive',
					url: 'https://ainugo.nam.go.jp/',
					description:
						'Museum archive bundling several searchable dictionaries (Kayano, Tamura’s Saru dialect, and more) plus hundreds of hours of native-speaker audio and video.',
					lang: 'ja'
				},
				{
					name: 'A Topical Dictionary of Conversational Ainu (NINJAL)',
					url: 'https://ainu.ninjal.ac.jp/topic/en/',
					description:
						'3,467 conversational headwords with transcription, English translations, morpheme breakdowns, and native-speaker audio.',
					lang: 'en/ja'
				},
				{
					name: 'A Glossed Audio Corpus of Ainu Folklore (NINJAL)',
					url: 'https://ainu.ninjal.ac.jp/folklore/en/',
					description:
						'A fully glossed, audio-aligned corpus of Ainu folktales and divine epics with morpheme-by-morpheme analysis.',
					lang: 'en/ja'
				},
				{
					name: 'STV Radio — Ainu Language Radio Course',
					url: 'https://www.stv.jp/radio/ainugo/index.html',
					description:
						'A weekly broadcast lesson series running since 1987, with free downloadable PDF texts and audio.',
					lang: 'ja'
				},
				{
					name: 'ILCAA — Ainu Language Materials (Tamura recordings)',
					url: 'https://ainugo.aa-ken.jp/',
					description:
						'Suzuko Tamura’s field recordings: folktale audio synced to transcription with Japanese translation and full-text search.',
					lang: 'ja'
				},
				{
					name: 'Ainu Language Portal Site (FF-Ainu)',
					url: 'https://www.ff-ainu.or.jp/web/potal_site/',
					description:
						'The Foundation’s hub of learning materials: courses, textbooks, games, oral-literature media, and dictionary links.',
					lang: 'ja'
				},
				{
					name: 'aynuitak.org — Ainu language resources',
					url: 'https://www.aynuitak.org/about/resources',
					description:
						'An English grammar guide with a curated, annotated list of dictionaries, corpora, and archives.',
					lang: 'en'
				},
				{
					name: 'Glosbe — English–Ainu dictionary',
					url: 'https://glosbe.com/en/ain',
					description: 'A free community English–Ainu dictionary with examples and audio.',
					lang: 'en'
				},
				{
					name: 'TUYTAH — Sakhalin Ainu oral literature',
					url: 'https://www.aa.tufs.ac.jp/~mmine/kiki_gen/murasaki/tuytah-j.html',
					description:
						'Kyōko Murasaki’s documentation of Sakhalin Ainu storytelling recorded from Take Asai.',
					lang: 'ja'
				}
			]
		},
		{
			title: 'Media — audio, video & music',
			items: [
				{
					name: 'STV Radio — Ainu course podcast archive',
					url: 'https://www.stv.jp/radio/podcast/ainugo/index.html',
					description: 'Downloadable MP3 archive of STV’s weekly Ainu-language radio course.',
					lang: 'ja'
				},
				{
					name: 'Nibutani — Ainu oral literature archive',
					url: 'https://nibutani-ainu-museum.com/culture/language/story/',
					description:
						'Yukar and uwepeker recordings with MP3 audio, commentary, and PDF transcripts.',
					lang: 'ja'
				},
				{
					name: 'MAREWREW',
					url: 'https://marewrew.bandcamp.com/',
					description: 'The female Ainu vocal group reviving traditional upopo round-singing.',
					lang: 'en/ja'
				},
				{
					name: 'OKI DUB AINU BAND',
					url: 'https://okidub.bandcamp.com/',
					description: 'OKI’s band fusing the Sakhalin-Ainu tonkori with dub and rock.',
					lang: 'en/ja'
				}
			]
		},
		{
			title: 'Academic & archives',
			items: [
				{
					name: 'Documentation of the Saru dialect of Ainu (ELAR)',
					url: 'https://www.elararchive.org/dk0107/',
					description:
						'Bugaeva & Nakagawa’s ELAR deposit: a folktale corpus, last-speaker recordings, and a time-aligned talking dictionary.',
					lang: 'en'
				},
				{
					name: 'Endangered Languages Archive (ELAR)',
					url: 'https://www.elararchive.org/',
					description:
						'The digital repository hosting the Ainu Saru-dialect collection among worldwide deposits.',
					lang: 'en'
				},
				{
					name: 'Hokkaido Digital Museum — Ainu oral literature',
					url: 'https://hokkaido-digital-museum.jp/en/hokkaido/ainu/a-02/',
					description:
						'An overview of Ainu oral-literature genres (yukar, kamuy yukar, uepeker) with source references.',
					lang: 'en/ja'
				},
				{
					name: 'Józef Piłsudski Museum — Bronisław Piłsudski Ainu materials',
					url: 'https://bronislawpilsudski.pl/en/',
					description:
						'The museum portal for Piłsudski’s early-1900s Ainu fieldwork: wax-cylinder recordings, photographs, and records.',
					lang: 'en/pl'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Resources · Aynu Itah</title>
	<meta
		name="description"
		content="A curated directory of Ainu-language resources — organizations and museums, dictionaries and learning materials, audio/video/music, and academic archives — plus the aynu.org ecosystem of tools."
	/>
	<meta property="og:title" content="Ainu resources · Aynu Itah" />
	<meta property="og:type" content="website" />
</svelte:head>

{#snippet card(r: Res)}
	<li
		class="rounded-lg border border-gray-200 p-4 transition hover:border-blue-800/40 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-500/50"
	>
		<a
			href={r.url}
			target="_blank"
			rel="noopener"
			class="font-semibold text-blue-800 hover:underline dark:text-blue-300">{r.name}</a
		>
		{#if r.lang}<span
				class="ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-gray-500 dark:bg-gray-800 dark:text-gray-400"
				>{r.lang}</span
			>{/if}
		<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">{r.description}</p>
	</li>
{/snippet}

<div class="mx-auto max-w-screen-md px-4 py-8">
	<h1 class="text-3xl font-bold">Ainu resources</h1>
	<p class="mt-2 text-gray-600 dark:text-gray-300">
		A directory of places to learn, hear, and study the Ainu language. Links open in a new tab.
	</p>

	<section class="mt-8">
		<h2 class="text-xl font-bold">Sister projects</h2>
		<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
			Other tools in the <a
				href="https://aynu.org/"
				target="_blank"
				rel="noopener"
				class="text-blue-800 hover:underline dark:text-blue-300">aynu.org</a
			> ecosystem.
		</p>
		<ul class="mt-3 grid gap-3 sm:grid-cols-2">
			{#each ecosystem as r}{@render card(r)}{/each}
		</ul>
	</section>

	{#each sections as s}
		<section class="mt-8">
			<h2 class="text-xl font-bold">{s.title}</h2>
			<ul class="mt-3 grid gap-3 sm:grid-cols-2">
				{#each s.items as r}{@render card(r)}{/each}
			</ul>
		</section>
	{/each}

	<p class="mt-10 text-sm text-gray-500 dark:text-gray-400">
		Know a resource we’re missing? Suggest it on our
		<a
			href="https://discord.gg/sJRXq3Gspm"
			target="_blank"
			rel="noopener"
			class="text-blue-800 hover:underline dark:text-blue-300">Discord</a
		>.
	</p>
</div>

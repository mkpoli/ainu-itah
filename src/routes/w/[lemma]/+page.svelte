<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/stores';
	import { CANONICAL_HOSTNAME } from '$lib/consts';
	import { latn2kana, latn2cyrl } from '$lib/script';
	import { languageTag } from '$lib/paraglide/runtime';
	import KampisosIcon from '$lib/icons/Kampisos.svg.svelte';
	import type { WordForm } from '$lib/dict';

	let { data } = $props();
	const entry = $derived(data.entry);

	// Same gloss-language priority as the dictionary table: the UI-matching language
	// first, the other two after.
	const TRANSLATION_LANGS = ['ja', 'en', 'ru'] as const;
	const LANG_LABEL: Record<'ja' | 'en' | 'ru', () => string> = {
		ja: m.sisan,
		en: m.ankiris,
		ru: m.nuca
	};
	const glossLangs = $derived.by(() => {
		const prim = TRANSLATION_LANGS.find((l) => l === languageTag());
		return prim ? [prim, ...TRANSLATION_LANGS.filter((l) => l !== prim)] : [...TRANSLATION_LANGS];
	});

	function posLabel(pos: string): string {
		const fn = m[`pos_${pos}` as keyof typeof m] as (() => string) | undefined;
		return fn?.() ?? pos;
	}

	const FORM_TYPE_ABBRS: Record<WordForm['type'], string> = {
		possessed: 'POSS',
		case: 'CASE',
		personal: 'PERS',
		plural: 'PL',
		collective: 'COLL',
		valency: 'VAL',
		nominalized: 'NMLZ'
	};

	function joinMorphs(analysis: [string, string][]): string {
		return analysis
			.map(([morph], i) =>
				i === 0 || morph.startsWith('-') || morph.startsWith('=') || morph.endsWith('=')
					? morph
					: `-${morph}`
			)
			.join('');
	}
	function joinGlosses(analysis: [string, string][]): string {
		return analysis.map(([, gloss]) => gloss).join('-');
	}

	function kampisosUrl(lemma: string): string {
		return `https://kampisos.aynu.io/search?q=${encodeURIComponent(lemma.replace(/^-/, ''))}&dialect_lv1=樺太`;
	}

	// SEO: a one-line gloss summary and the self-referencing canonical URL.
	const allGlosses = $derived(
		entry ? [...(entry.en ?? []), ...(entry.ja ?? []), ...(entry.ru ?? [])] : []
	);
	const metaTitle = $derived(
		entry
			? `${entry.lemma}${allGlosses.length ? ` — ${allGlosses.slice(0, 4).join(', ')}` : ''} · Aynu Itah`
			: `${data.lemma} · Aynu Itah`
	);
	const metaDescription = $derived(
		entry
			? `${entry.lemma}: ${allGlosses.join('; ')} — Sakhalin (Karafuto) Ainu dictionary entry with word forms, frequency and Hokkaidō Ainu correspondences.`
			: `No dictionary headword “${data.lemma}” in the Sakhalin Ainu dictionary.`
	);
	const canonicalUrl = $derived(new URL($page.url.pathname, CANONICAL_HOSTNAME).toString());
	const jsonLd = $derived(
		entry
			? '<' +
					'script type="application/ld+json">' +
					JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'DefinedTerm',
						name: entry.lemma,
						description: allGlosses.join('; '),
						inLanguage: 'ain',
						url: canonicalUrl,
						inDefinedTermSet: {
							'@type': 'DefinedTermSet',
							name: 'A dictionary of Sakhalin Ainu',
							url: new URL('/', CANONICAL_HOSTNAME).toString()
						}
					}) +
					'</' +
					'script>'
			: ''
	);
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} />
	<!-- canonical + hreflang are emitted for every route by the root layout -->
	{#if entry}
		<meta property="og:title" content={metaTitle} />
		<meta property="og:description" content={metaDescription} />
		<meta property="og:type" content="article" />
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- controlled JSON-LD built from dictionary data -->
		{@html jsonLd}
	{:else}
		<meta name="robots" content="noindex,follow" />
	{/if}
</svelte:head>

<article class="mx-auto max-w-screen-md px-4 py-8">
	<nav class="mb-4 text-sm text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
		<a href="/" class="hover:text-blue-800 hover:underline dark:text-blue-300">{m.dictionaries()}</a
		>
		<span aria-hidden="true">/</span>
		<span lang="ain-Latn">{data.lemma}</span>
	</nav>

	{#if entry}
		<header>
			<h1 class="text-4xl font-bold" lang="ain-Latn">{entry.lemma}</h1>
			<p class="mt-1 text-lg text-gray-500 dark:text-gray-400">
				<span lang="ain-Kana">{latn2kana(entry.lemma)}</span>
				<span aria-hidden="true">·</span>
				<span lang="ain-Cyrl">{latn2cyrl(entry.lemma)}</span>
			</p>
			{#if data.viaForm}
				<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
					<span lang="ain-Latn">{data.viaForm}</span> — {m.forms()} ·
					<span lang="ain-Latn">{entry.lemma}</span>
				</p>
			{/if}
			{#if entry.poses?.length}
				<div class="mt-3 flex flex-wrap gap-2">
					{#each entry.poses as pos}
						<span class="rounded bg-gray-100 px-2 py-0.5 text-sm text-gray-600 dark:bg-gray-800"
							>{posLabel(pos)}</span
						>
					{/each}
				</div>
			{/if}
		</header>

		<dl class="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
			{#each glossLangs as lang}
				{#if entry[lang]?.length}
					<dt class="text-sm font-semibold text-gray-500 dark:text-gray-400" {lang}>
						{LANG_LABEL[lang]()}
					</dt>
					<dd {lang}>{entry[lang]?.join(lang === 'ja' ? '、' : ', ')}</dd>
				{/if}
			{/each}
		</dl>

		{#if data.examples?.length}
			<section class="mt-6">
				<h2 class="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Examples</h2>
				<ul class="space-y-3">
					{#each data.examples as ex}
						<li>
							<p lang="ain-Latn">{ex.text}</p>
							<p class="text-sm text-gray-600 dark:text-gray-300" lang="ja">{ex.translation}</p>
							<p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
								{ex.dialect} ·
								{#if ex.uri.startsWith('http')}
									<a href={ex.uri} target="_blank" rel="noopener" class="hover:underline"
										>{ex.source}</a
									>
								{:else}{ex.source}{/if}
							</p>
						</li>
					{/each}
				</ul>
				{#if data.exampleCount > data.examples.length}
					<p class="mt-2 text-xs">
						<a
							href={kampisosUrl(entry.lemma)}
							target="_blank"
							rel="noopener"
							class="text-blue-800 hover:underline dark:text-blue-300">More in the corpus →</a
						>
					</p>
				{/if}
			</section>
		{/if}

		{#if entry.structure}
			<section class="mt-6">
				<h2 class="text-sm font-semibold text-gray-500 dark:text-gray-400">{m.ikiri()}</h2>
				<p class="mt-1">
					<span lang="ain-Latn">{joinMorphs(entry.structure)}</span>
					<span class="text-gray-500 dark:text-gray-400">— {joinGlosses(entry.structure)}</span>
				</p>
			</section>
		{/if}

		{#if entry.forms?.length}
			<section class="mt-6">
				<h2 class="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">{m.forms()}</h2>
				<ul class="space-y-2">
					{#each entry.forms as form}
						<li class="flex flex-wrap items-baseline gap-x-2">
							<a
								href="/w/{encodeURIComponent(form.lemma)}"
								class="font-medium text-blue-800 hover:underline dark:text-blue-300"
								lang="ain-Latn">{form.lemma}</a
							>
							<span
								class="rounded bg-gray-100 px-1 text-[10px] uppercase tracking-wide text-gray-500 dark:bg-gray-800 dark:text-gray-400"
								>{FORM_TYPE_ABBRS[form.type] ?? form.type}</span
							>
							<span class="text-sm text-gray-500 dark:text-gray-400" lang="ain-Latn"
								>{joinMorphs(form.analysis)}</span
							>
							<span class="text-sm text-gray-500 dark:text-gray-400"
								>{joinGlosses(form.analysis)}</span
							>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		{#if entry.hokkaido?.length || entry.cognates?.length}
			<section class="mt-6">
				<h2 class="mb-1 text-sm font-semibold text-gray-500 dark:text-gray-400">{m.hokkaido()}</h2>
				<p lang="ain-Latn">
					{[
						...new Set([...(entry.hokkaido ?? []).map((c) => c.lemma), ...(entry.cognates ?? [])])
					].join(', ')}
				</p>
			</section>
		{/if}

		<dl class="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
			<dt class="font-semibold text-gray-500 dark:text-gray-400">{m.frequency()}</dt>
			<dd class="tabular-nums">{entry.frequencyRolled ?? entry.frequency}</dd>
		</dl>

		<footer
			class="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-200 pt-4 text-sm dark:border-gray-800"
		>
			<a
				href={kampisosUrl(entry.lemma)}
				target="_blank"
				rel="noopener"
				class="flex items-center gap-1.5 text-blue-800 hover:underline dark:text-blue-300"
			>
				<KampisosIcon class="h-5 w-5" /> Kampisos
			</a>
			<a
				href="/?q={encodeURIComponent(entry.lemma)}"
				class="text-blue-800 hover:underline dark:text-blue-300">{m.search()} →</a
			>
			<a href="/grammar" class="text-blue-800 hover:underline dark:text-blue-300"
				>{m.reference_grammar()} →</a
			>
		</footer>
	{:else}
		<h1 class="text-2xl font-bold" lang="ain-Latn">{data.lemma}</h1>
		<p class="mt-3 text-gray-600">
			{m.word_count({ count: 0 })}
		</p>
		<div class="mt-6 flex flex-wrap gap-4 text-sm">
			<a
				href="/?q={encodeURIComponent(data.lemma)}"
				class="text-blue-800 hover:underline dark:text-blue-300">{m.search()} →</a
			>
			<a
				href={kampisosUrl(data.lemma)}
				target="_blank"
				rel="noopener"
				class="flex items-center gap-1.5 text-blue-800 hover:underline dark:text-blue-300"
			>
				<KampisosIcon class="h-5 w-5" /> Kampisos
			</a>
		</div>
	{/if}
</article>

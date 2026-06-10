<script lang="ts">
	import { TOC } from '$lib/grammar/toc';
	import { CANONICAL_HOSTNAME } from '$lib/consts';
	import Foreign from '$lib/components/grammar/Foreign.svelte';

	const existing = new Set(
		Object.keys(import.meta.glob('/src/routes/grammar/*/+page.{svx,svelte}')).map(
			(p) => p.split('/').at(-2) as string
		)
	);
</script>

<svelte:head>
	<title>A Grammar of Sakhalin Ainu</title>
	<meta
		name="description"
		content="A modern, evidence-based, corpus-linked reference grammar of Sakhalin Ainu (Enchiw), with interlinear examples glossed to the Leipzig Glossing Rules."
	/>
	<link rel="canonical" href={new URL('/grammar', CANONICAL_HOSTNAME).toString()} />
</svelte:head>

<div class="prose prose-slate max-w-none">
	<p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Reference grammar</p>
	<h1 class="mb-2">A Grammar of Sakhalin Ainu</h1>
	<p class="lead text-lg text-gray-600">
		A modern, evidence-based description of <strong>Sakhalin Ainu</strong> (Enchiw), the variety of
		the Ainu language once spoken across the island of Sakhalin. Every claim is grounded in primary
		documentation and the descriptive literature; every example is interlinear-glossed to the
		<a href="https://www.eva.mpg.de/lingua/resources/glossing-rules.php">Leipzig Glossing Rules</a>
		and cited to its source.
	</p>

	<p>
		Sakhalin Ainu is treated here in its own right, drawing primarily on the well-documented
		<strong>West-coast</strong> varieties and systematically flagging the <strong>East-coast</strong>
		(Taraika) varieties recorded by Piłsudski. Hokkaido Ainu is referred to only for explicit
		contrast — it is not a prerequisite for reading this grammar.
	</p>
</div>

<aside class="mt-10 rounded-xl border border-gray-200 bg-gray-50/60 p-6">
	<p class="text-xs font-semibold uppercase tracking-widest text-gray-400">
		The language at a glance
	</p>
	<dl class="mt-4 grid gap-x-10 gap-y-4 sm:grid-cols-2">
		<div>
			<dt class="text-[11px] font-medium uppercase tracking-wide text-gray-400">Autonym</dt>
			<dd class="text-gray-800"><span lang="ain-Latn">enciw</span> (Enchiw) ‘person’</dd>
		</div>
		<div>
			<dt class="text-[11px] font-medium uppercase tracking-wide text-gray-400">Also known as</dt>
			<dd class="text-gray-800">
				<Foreign lang="ja" rom="Karafuto Ainu-go">樺太アイヌ語</Foreign>,
				<Foreign lang="ru" rom="sakhalinskij ajnskij">сахалинский айнский</Foreign>
			</dd>
		</div>
		<div>
			<dt class="text-[11px] font-medium uppercase tracking-wide text-gray-400">Where & when</dt>
			<dd class="text-gray-800">
				Southern Sakhalin (and the lower Amur littoral), into the late twentieth century
			</dd>
		</div>
		<div>
			<dt class="text-[11px] font-medium uppercase tracking-wide text-gray-400">Family</dt>
			<dd class="text-gray-800">Ainuic — alongside Hokkaido and Kuril Ainu</dd>
		</div>
		<div>
			<dt class="text-[11px] font-medium uppercase tracking-wide text-gray-400">Sub-varieties</dt>
			<dd class="text-gray-800">
				West coast (Raychishka, Maoka …) · East coast (Taraika …)
			</dd>
		</div>
		<div>
			<dt class="text-[11px] font-medium uppercase tracking-wide text-gray-400">Status</dt>
			<dd class="text-gray-800">
				Dormant since its last fluent speaker, Asai Take, died in 1994; in revival as Enchiw
			</dd>
		</div>
		<div class="sm:col-span-2">
			<dt class="text-[11px] font-medium uppercase tracking-wide text-gray-400">
				Core documentation
			</dt>
			<dd class="text-gray-800">
				Piłsudski 1912 (East coast) · Murasaki 1976/1979 (West coast) · Chiri 1942 · and the
				modern work of Dal Corso, Sakaguchi, and Bugaeva — see the
				<a href="/grammar/references" class="text-blue-600 hover:underline">references</a>.
			</dd>
		</div>
	</dl>
	<a
		href="https://en.wikipedia.org/wiki/Sakhalin_Ainu_language"
		target="_blank"
		rel="noreferrer"
		class="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
	>
		Sakhalin Ainu on Wikipedia <span aria-hidden="true">→</span>
	</a>
</aside>

<div class="mt-10 grid gap-8 sm:grid-cols-2">
	{#each TOC as part}
		<section>
			<h2 class="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
				{part.title}
			</h2>
			<ul class="space-y-1">
				{#each part.chapters as ch}
					{@const live = existing.has(ch.slug)}
					<li class="flex gap-3 text-sm">
						<span class="w-6 shrink-0 text-right text-gray-400 tabular-nums">{ch.num}</span>
						{#if live}
							<a href={`/grammar/${ch.slug}`} class="text-gray-800 hover:text-blue-600">{ch.title}</a>
						{:else}
							<span class="text-gray-400" title="Not yet written">{ch.title}</span>
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</div>

<script lang="ts">
	import { TOC } from '$lib/grammar/toc';
	import { CANONICAL_HOSTNAME } from '$lib/consts';

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

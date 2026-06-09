<script lang="ts">
	import { BIBLIOGRAPHY, slugifyKey } from '$lib/grammar/bibliography';

	const REGION_ORDER = ['sakhalin', 'kuril', 'general', 'hokkaido'] as const;
	const REGION_LABEL: Record<string, string> = {
		sakhalin: 'Sakhalin Ainu',
		kuril: 'Kuril Ainu',
		general: 'Ainu (general / cross-dialectal)',
		hokkaido: 'Hokkaido Ainu (for contrast)'
	};

	const grouped = REGION_ORDER.map((r) => ({
		region: r,
		entries: BIBLIOGRAPHY.filter((b) => (b.region ?? 'general') === r).sort((a, b) =>
			a.key.localeCompare(b.key)
		)
	})).filter((g) => g.entries.length);
</script>

<svelte:head>
	<title>References — A Grammar of Sakhalin Ainu</title>
</svelte:head>

<article>
	<header class="mb-8 border-b border-gray-200 pb-6">
		<p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Texts and Reference</p>
		<h1 class="mt-1 text-3xl font-bold tracking-tight">References</h1>
		<p class="mt-3 max-w-2xl text-gray-600">
			Sources cited throughout the grammar. Inline citations such as “(Dal Corso 2025b: 192)” link
			here.
		</p>
	</header>

	{#each grouped as group}
		<section class="mb-10">
			<h2 class="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
				{REGION_LABEL[group.region]}
			</h2>
			<ul class="space-y-3">
				{#each group.entries as b}
					<li id={slugifyKey(b.key)} class="scroll-mt-20 text-sm leading-relaxed">
						<span class="text-gray-700">{b.full}</span>
						{#if b.reported}
							<span class="ml-1 text-xs text-gray-400" title="Cited as reported in another work, not consulted in the original">[reported]</span>
						{/if}
						{#if b.url}
							<a href={b.url} class="text-blue-600 hover:underline" target="_blank" rel="noreferrer"
								>↗</a
							>
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</article>

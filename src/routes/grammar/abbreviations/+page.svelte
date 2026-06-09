<script lang="ts">
	import { GLOSS_ABBREVS } from '$lib/grammar/glossing';
</script>

<svelte:head>
	<title>Glossing abbreviations — A Grammar of Sakhalin Ainu</title>
</svelte:head>

<article>
	<header class="mb-8 border-b border-gray-200 pb-6">
		<p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Texts and Reference</p>
		<h1 class="mt-1 text-3xl font-bold tracking-tight">Glossing Abbreviations</h1>
		<p class="mt-3 max-w-2xl text-gray-600">
			Interlinear glosses follow the
			<a
				href="https://www.eva.mpg.de/lingua/resources/glossing-rules.php"
				class="text-blue-600 hover:underline">Leipzig Glossing Rules</a
			>. Grammatical categories are written in small capitals; the same expansions appear as
			tooltips on every example. The indefinite / fourth-person set (<i>-an</i> / <i>an-</i> /
			<i>i-</i>) is glossed <span style="font-variant-caps: all-small-caps">prm</span> (participant-referentiality
			mismatch).
		</p>
	</header>

	<dl class="grid gap-x-8 gap-y-2 sm:grid-cols-2">
		{#each GLOSS_ABBREVS as g}
			<div class="flex gap-3 border-b border-gray-100 py-1.5">
				<dt
					class="w-24 shrink-0 font-mono text-sm"
					style="font-variant-caps: all-small-caps; letter-spacing: 0.03em"
				>
					{g.tag}
				</dt>
				<dd class="text-sm text-gray-700">{g.meaning}</dd>
			</div>
		{/each}
	</dl>
</article>

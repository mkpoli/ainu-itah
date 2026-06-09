<script lang="ts">
	import { createExampleCounter } from '$lib/grammar/exampleCounter';
	import { lookupBib, slugifyKey } from '$lib/grammar/bibliography';

	// mdsvex layout wrapping every grammar chapter (.svx). Receives the chapter's
	// YAML frontmatter as props and the rendered Markdown as its default slot.
	let {
		title = '',
		num = '',
		part = '',
		blurb = '',
		status = 'draft',
		sources = []
	}: {
		title?: string;
		num?: string;
		part?: string;
		blurb?: string;
		status?: string;
		sources?: string[];
	} = $props();

	// One example-numbering counter per chapter.
	createExampleCounter();

	const STATUS_LABEL: Record<string, string> = {
		draft: 'Draft',
		review: 'In review',
		stub: 'Stub',
		planned: 'Planned'
	};

	const sourceEntries = $derived(sources.map((k) => lookupBib(k)).filter((b) => b != null));
</script>

<article class="chapter">
	<header class="mb-8 border-b border-gray-200 pb-6">
		{#if part}
			<p class="text-xs font-semibold uppercase tracking-widest text-gray-400">{part}</p>
		{/if}
		<div class="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
			{#if num}<span class="text-2xl font-light text-gray-400 tabular-nums">{num}</span>{/if}
			<h1 class="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
			{#if status && status !== 'draft'}
				<span
					class="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-gray-500"
					>{STATUS_LABEL[status] ?? status}</span
				>
			{/if}
		</div>
		{#if blurb}<p class="mt-3 max-w-2xl text-gray-600">{blurb}</p>{/if}
	</header>

	<div
		class="prose prose-slate max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-h2:mt-10 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-1 prose-a:font-normal prose-table:text-sm"
	>
		<slot />
	</div>

	{#if sourceEntries.length}
		<aside class="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm">
			<h2 class="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
				Primary sources drawn on in this chapter
			</h2>
			<ul class="space-y-1">
				{#each sourceEntries as b}
					<li>
						<a
							href={`/grammar/references#${slugifyKey(b!.key)}`}
							class="text-gray-700 hover:text-blue-600">{b!.key}</a
						>
						<span class="text-gray-500"> — {b!.full}</span>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>

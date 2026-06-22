<script lang="ts">
	import { SOURCES } from '$lib/sources';
	import { CANONICAL_HOSTNAME } from '$lib/consts';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.sources_title()} · Aynu Itah</title>
	<meta name="description" content={m.sources_intro()} />
	<link rel="canonical" href={new URL('/sources', CANONICAL_HOSTNAME).toString()} />
</svelte:head>

<article class="mx-auto max-w-screen-md px-4 py-8">
	<nav class="mb-4 text-sm text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
		<a href="/" class="hover:text-blue-800 hover:underline dark:text-blue-300">{m.dictionaries()}</a
		>
		<span aria-hidden="true">/</span>
		<span>{m.sources_title()}</span>
	</nav>

	<h1 class="text-3xl font-bold">{m.sources_title()}</h1>
	<p class="mt-2 max-w-prose text-gray-600 dark:text-gray-300">{m.sources_intro()}</p>

	<dl class="mt-8 space-y-5">
		{#each SOURCES as src}
			<div id={src.key} class="scroll-mt-20 border-l-2 border-gray-200 pl-4 dark:border-gray-700">
				<dt class="font-semibold">{src.short}</dt>
				<dd class="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
					{src.full}
					{#if src.url}
						<a
							href={src.url}
							target="_blank"
							rel="noopener"
							class="ml-1 text-blue-800 hover:underline dark:text-blue-300">↗</a
						>
					{/if}
				</dd>
			</div>
		{/each}
	</dl>
</article>

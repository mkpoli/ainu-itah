<script lang="ts">
	import ChapterShell from '$lib/grammar/components/ChapterShell.svelte';
	import { chapterNumber, appendices } from '$lib/grammar/toc';

	let { data } = $props();

	const ogTitle = $derived(`${data.num}. ${data.meta.title} — A Grammar of Sakhalin Ainu`);
</script>

<svelte:head>
	<title>{ogTitle}</title>
	<meta name="description" content={data.meta.summary} />
	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={data.meta.summary} />
	<meta property="og:type" content="article" />
</svelte:head>

{#key data.meta.slug}
	<ChapterShell
		num={data.num}
		title={data.meta.title}
		summary={data.meta.summary}
		component={data.component}
	/>
{/key}

<nav class="ch-nav" aria-label="Chapter navigation">
	<span>
		{#if data.prev}
			<a href={`/grammar/${data.prev.slug}`}
				>← {chapterNumber(data.prev.slug)}. {data.prev.short ?? data.prev.title}</a
			>
		{/if}
	</span>
	<span>
		{#if data.next}
			<a href={`/grammar/${data.next.slug}`}
				>{chapterNumber(data.next.slug)}. {data.next.short ?? data.next.title} →</a
			>
		{:else}
			<a href={`/grammar/${appendices[0].slug}`}>{appendices[0].title} →</a>
		{/if}
	</span>
</nav>

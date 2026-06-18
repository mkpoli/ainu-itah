<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		w,
		gl,
		children
	}: {
		/** The Ainu word, also used as the dictionary query. */
		w: string;
		/** Optional gloss shown in quotes after the word. */
		gl?: string;
		/** Optional display text differing from the query. */
		children?: Snippet;
	} = $props();
</script>

<i lang="ain" class="ain"
	><a href={`/w/${encodeURIComponent(w)}`} title={`Look up ${w} in the dictionary`}
		>{#if children}{@render children()}{:else}{w}{/if}</a
	></i
>{#if gl}&nbsp;‘{gl}’{/if}

<script lang="ts">
	import { languageTag } from '$lib/paraglide/runtime';
	import { latn2kana, latn2cyrl } from '$lib/script';

	// Inline Sakhalin Ainu word/form for use in prose, e.g. <W w="cise" /> or
	// <W w="ku-cise-he" gloss="my house" />. Rendered in the reader's active
	// script (Latin / Kana / Cyrillic) and, by default, linked to a dictionary
	// search for the citation form.
	let {
		w = '',
		gloss = '',
		link = true
	}: { w?: string; gloss?: string; link?: boolean } = $props();

	const tag = $derived(languageTag());
	const display = $derived(
		['ja', 'ain-Kana'].includes(tag)
			? latn2kana(w)
			: ['ru', 'ain-Cyrl'].includes(tag)
				? latn2cyrl(w)
				: w
	);
	// Strip affix/clitic boundary marks for the dictionary lookup query.
	const query = $derived(w.replace(/[=-]/g, '').trim());
</script>

{#if link && query}<a
		href={`/?q=${encodeURIComponent(query)}`}
		lang="ain-Latn"
		class="font-medium italic text-inherit decoration-dotted underline-offset-2 hover:underline"
		title={gloss ? `${w} ‘${gloss}’` : w}>{display}</a
	>{:else}<span lang="ain-Latn" class="font-medium italic" title={gloss}>{display}</span
	>{/if}{#if gloss}&nbsp;‘{gloss}’{/if}

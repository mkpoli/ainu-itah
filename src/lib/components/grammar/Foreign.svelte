<script lang="ts">
	import type { Snippet } from 'svelte';

	// Inline foreign-language term: the original script carried in a proper BCP-47
	// `lang` attribute, plus an optional italic romanization. e.g.
	//   <Foreign lang="ja" rom="Karafuto">樺太</Foreign>   → Karafuto (樺太)
	//   <Foreign lang="ru" rom="Sakhalin">Сахалин</Foreign> → Sakhalin (Сахалин)
	//   <Foreign lang="ja">樺太アイヌ語</Foreign>            → 樺太アイヌ語  (tagged, no rom)
	// The `lang` attribute lets screen readers and search engines treat the text
	// correctly and lets the browser pick proper CJK/Cyrillic glyphs.
	let {
		lang = '',
		rom = '',
		children
	}: { lang?: string; rom?: string; children?: Snippet } = $props();
</script>

{#if rom}<i lang={`${lang}-Latn`}>{rom}</i> (<span {lang}>{@render children?.()}</span>){:else}<span
		{lang}>{@render children?.()}</span
	>{/if}

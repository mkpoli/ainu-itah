<script lang="ts">
	import { lookupBib, slugifyKey } from '$lib/grammar/bibliography';

	// Inline citation, e.g. <Cite key="Dal Corso 2025" page="192" />
	// renders "(Dal Corso 2025: 192)" linking to the References chapter and
	// showing the full reference on hover. Pass `paren={false}` to drop the
	// surrounding parentheses (for author-prominent citations in prose).
	let {
		key = '',
		page = '',
		paren = true
	}: { key?: string; page?: string; paren?: boolean } = $props();

	const bib = $derived(lookupBib(key));
	const inner = $derived(`${key}${page ? `: ${page}` : ''}`);
</script>

<a
	href={`/grammar/references#${slugifyKey(key)}`}
	class="cite text-inherit underline decoration-dotted underline-offset-2 hover:text-blue-600"
	title={bib?.full ?? key}>{paren ? `(${inner})` : inner}</a
>

<style>
	.cite {
		white-space: nowrap;
	}
</style>

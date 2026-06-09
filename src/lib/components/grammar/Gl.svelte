<script lang="ts">
	import { expandGloss } from '$lib/grammar/glossing';

	// Inline gloss abbreviation for use in prose, e.g. <Gl t="PFV" />.
	// Renders the tag in small caps with a hover tooltip from the glossing
	// registry. Composite tags like "1SG.A" are expanded part-by-part.
	let { t = '' }: { t?: string } = $props();
</script>

<abbr class="gloss-gram cursor-help no-underline" title={expandGloss(t)}>{t}</abbr>

<style>
	.gloss-gram {
		font-variant-caps: all-small-caps;
		letter-spacing: 0.03em;
	}
</style>

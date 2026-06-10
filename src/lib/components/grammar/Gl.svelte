<script lang="ts">
	import { expandGloss, lookupGloss } from '$lib/grammar/glossing';
	import { tagId } from '$lib/grammar/glossUtil';

	// Inline gloss abbreviation for use in prose, e.g. <Gl t="PFV" />.
	// Renders the tag in small caps with a hover tooltip from the glossing
	// registry. Composite tags like "1SG.A" are expanded part-by-part.
	let { t = '' }: { t?: string } = $props();
</script>

<a
	href={lookupGloss(t) ? `/grammar/abbreviations#${tagId(t)}` : '/grammar/abbreviations'}
	class="gloss-gram cursor-help text-inherit no-underline"
	title={expandGloss(t)}>{t}</a
>

<style>
	.gloss-gram {
		font-variant-caps: all-small-caps;
		letter-spacing: 0.03em;
	}
</style>

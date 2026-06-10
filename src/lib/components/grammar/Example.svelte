<script lang="ts">
	import { dev } from '$app/environment';
	import { expandGloss, isGrammaticalGloss } from '$lib/grammar/glossing';
	import { nextExampleNumber } from '$lib/grammar/exampleCounter';
	import type { Dialect } from '$lib/grammar/types';
	import Cite from './Cite.svelte';

	// Leipzig-style interlinear glossed example (IGT).
	//
	//   <Example
	//     ain="néa nispa ku-nukar"
	//     gloss="that nobleman 1SG.A-see"
	//     free="I saw that nobleman."
	//     cite="DalCorso2025align" page="192" dialect="East" />
	//
	// `ain` is the morpheme-segmented object line (morphemes joined by - or =,
	// words by spaces); `gloss` aligns to it token-for-token, morpheme-for-
	// morpheme. Grammatical glosses (ALLCAPS / person tags) render in small caps
	// with a hover tooltip; lexical glosses render as plain text.
	let {
		ain = '',
		gloss = '',
		free = '',
		surface = '',
		cite = '',
		page = '',
		src = '',
		dialect = undefined,
		note = '',
		n = undefined
	}: {
		ain?: string;
		gloss?: string;
		free?: string;
		surface?: string;
		cite?: string;
		page?: string;
		src?: string;
		dialect?: Dialect;
		note?: string;
		n?: number;
	} = $props();

	const num = n ?? nextExampleNumber();

	const aw = $derived(ain.trim().length ? ain.trim().split(/\s+/) : []);
	const gw = $derived(gloss.trim().length ? gloss.trim().split(/\s+/) : []);
	const words = $derived(aw.map((a, i) => ({ ain: a, gloss: gw[i] ?? '' })));
	const mismatch = $derived(aw.length !== gw.length && gw.length > 0);

	const DIALECT_LABEL: Record<Dialect, string> = {
		West: 'West Sakhalin',
		East: 'East Sakhalin',
		Sakhalin: 'Sakhalin',
		Kuril: 'Kuril',
		Hokkaido: 'Hokkaido'
	};

	// Split a glossed word into morpheme pieces, keeping the - / = separators.
	function pieces(word: string) {
		return word
			.split(/([-=])/)
			.filter((s) => s.length)
			.map((s) => ({ sep: s === '-' || s === '=', text: s }));
	}

</script>

<figure id={`ex-${num}`} class="ex my-5 scroll-mt-20">
	<div class="flex gap-3">
		<div class="w-9 shrink-0 select-none pt-px text-right tabular-nums text-gray-500">({num})</div>
		<div class="min-w-0">
			{#if surface}
				<div lang="ain-Latn" class="mb-0.5 text-gray-600">{surface}</div>
			{/if}

			{#if words.length}
				<div class="flex flex-wrap gap-x-4 gap-y-1.5">
					{#each words as w}
						<div class="flex flex-col leading-tight">
							<span lang="ain-Latn" class="ain-line font-medium">
								{#each pieces(w.ain) as p}{#if p.sep}<span class="text-gray-400"
											>{p.text}</span
										>{:else}<a
											href={`/?q=${encodeURIComponent(p.text)}`}
											class="text-inherit underline-offset-2 hover:text-blue-600 hover:underline"
											title={`Look up ${p.text} in the dictionary`}>{p.text}</a
										>{/if}{/each}
							</span>
							<span class="gloss-line text-sm text-gray-700">
								{#each pieces(w.gloss) as p}{#if p.sep}<span class="text-gray-400"
											>{p.text}</span
										>{:else if isGrammaticalGloss(p.text)}<abbr
											class="gloss-gram cursor-help no-underline"
											title={expandGloss(p.text)}>{p.text}</abbr
										>{:else}{p.text}{/if}{/each}
							</span>
						</div>
					{/each}
				</div>
			{/if}

			{#if free}
				<div class="mt-1.5">‘{free}’</div>
			{/if}

			{#if note}
				<div class="mt-0.5 text-sm text-gray-600">{note}</div>
			{/if}

			<div class="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-gray-500">
				{#if cite}<Cite key={cite} {page} paren={false} />{/if}
				{#if src}<span>{src}</span>{/if}
				{#if dialect}<span
						class="rounded border border-gray-300 px-1 py-px text-[10px] uppercase tracking-wide text-gray-500"
						>{DIALECT_LABEL[dialect]}</span
					>{/if}
			</div>

			{#if mismatch && dev}
				<div class="mt-1 text-xs text-red-600">
					⚠ alignment: {aw.length} object words vs {gw.length} gloss words
				</div>
			{/if}
		</div>
	</div>
</figure>

<style>
	.gloss-gram {
		font-variant-caps: all-small-caps;
		letter-spacing: 0.03em;
	}
</style>

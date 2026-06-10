<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import data from '$lib/data.json';
	import KampisosIcon from '$lib/icons/Kampisos.svg.svelte';
	import { extrapolateSakhalinFromHokkaido } from '$lib/utils/itah';
	import { languageTag } from '$lib/paraglide/runtime';
	import { cyrl2latn, latn2cyrl, latn2kana, kana2latn } from '$lib/script';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	// A regular word-form demoted under its base entry (schema v2, additive).
	interface WordForm {
		lemma: string;
		ja?: string[];
		en?: string[];
		ru?: string[];
		analysis: [string, string][];
		type: 'possessed' | 'case' | 'personal' | 'plural' | 'collective' | 'valency';
		frequency: number;
	}

	// A typed Sakhalin↔Hokkaido same-etymon correspondence (schema v2, additive).
	interface Correspondence {
		lemma: string;
		type: string;
		rules?: string[];
		conf?: number;
		curated?: boolean;
		form?: string;
	}

	interface Entry {
		lemma: string;
		ja?: string[];
		en?: string[];
		ru?: string[];
		poses?: string[];
		frequency: number;
		cognates?: string[];
		noncognates?: string[];
		forms?: WordForm[];
		structure?: [string, string][];
		frequencyRolled?: number;
		freqSource?: 'marker';
		hokkaido?: Correspondence[];
		hokkaidoNot?: string[];
	}

	const entries: Entry[] = data;

	const FORM_TYPE_ABBRS: Record<WordForm['type'], string> = {
		possessed: 'POSS',
		case: 'CASE',
		personal: 'PERS',
		plural: 'PL',
		collective: 'COLL',
		valency: 'VAL'
	};

	const CORR_TYPE_GLYPHS: Record<string, string> = {
		identity: '=',
		'regular-sound-change': '~',
		contraction: '⁓',
		'construction-difference': '≙',
		'irregular-correspondence': '≈'
	};

	function corrTitle(corr: Correspondence): string {
		const parts = [corr.type];
		if (corr.rules?.length) parts.push(corr.rules.join(', '));
		if (corr.form) parts.push(`via ${corr.form}`);
		parts.push(corr.curated ? 'curated' : `confidence ${corr.conf ?? '?'}`);
		return parts.join(' · ');
	}

	function displayLemma(lemma: string): string {
		if (['ja', 'ain-Kana'].includes(languageTag())) {
			return latn2kana(lemma);
		} else if (['ru', 'ain-Cyrl'].includes(languageTag())) {
			return latn2cyrl(lemma);
		}
		return lemma;
	}

	// "cise" + "-he" -> "cise-he"; "kim" + "oyki" -> "kim-oyki"; clitics keep
	// their own "=" marker ("ama" + "=hci" -> "ama=hci", never "ama-=hci")
	function joinMorphs(analysis: [string, string][]): string {
		return analysis
			.map(([morph], i) =>
				i === 0 || morph.startsWith('-') || morph.startsWith('=') || morph.endsWith('=')
					? morph
					: `-${morph}`
			)
			.join('');
	}

	function joinGlosses(analysis: [string, string][]): string {
		return analysis.map(([, gloss]) => gloss).join('-');
	}

	function kampisosUrl(lemma: string): string {
		return `https://kampisos.aynu.io/search?q=${encodeURIComponent(lemma.replace(/^-/, ''))}&dialect_lv1=樺太`;
	}

	let sortBy: 'abc' | 'freq' | 'pos' = $state('freq');
	// Prefill the search box from a ?q= query param so links from the grammar
	// (the <W> component) and elsewhere land on a filtered dictionary view.
	let search = $state(get(page).url.searchParams.get('q') ?? '');
	// Explicit user toggles, keyed by lemma; falls back to auto-expansion when
	// the search only matches one of the entry's sub-forms.
	let expanded: Record<string, boolean> = $state({});

	function lemmaMatches(lemma: string): boolean {
		return (
			lemma.includes(search) ||
			lemma.includes(extrapolateSakhalinFromHokkaido(search)) ||
			latn2kana(lemma).includes(search) ||
			latn2cyrl(lemma).includes(search) ||
			lemma.includes(kana2latn(search)) ||
			lemma.includes(cyrl2latn(search))
		);
	}

	function formMatches(form: WordForm): boolean {
		return search !== '' && lemmaMatches(form.lemma);
	}

	function autoExpanded(item: Entry): boolean {
		return search !== '' && !lemmaMatches(item.lemma) && (item.forms?.some(formMatches) ?? false);
	}

	function isExpanded(item: Entry): boolean {
		return expanded[item.lemma] ?? autoExpanded(item);
	}

	function toggle(item: Entry) {
		expanded[item.lemma] = !isExpanded(item);
	}

	let sorted = $derived(
		entries.toSorted((a, b) => {
			if (sortBy === 'abc') {
				return a.lemma?.localeCompare(b.lemma) ?? 0;
			} else if (sortBy === 'freq') {
				return -1 * ((a.frequencyRolled ?? a.frequency) - (b.frequencyRolled ?? b.frequency));
			} else if (sortBy === 'pos') {
				return a.poses?.[0]?.localeCompare(b.poses?.[0] ?? '') ?? 0;
			}
			return 0;
		})
	);
	let filtered = $derived(
		sorted
			.filter(
				(item) =>
					lemmaMatches(item.lemma) ||
					item.ja?.includes(search) ||
					item.en?.includes(search) ||
					item.ru?.includes(search) ||
					item.forms?.some((form) => lemmaMatches(form.lemma))
			)
			.toSorted((a, b) => {
				if (a.lemma === search) {
					return -1;
				}
				if (b.lemma === search) {
					return 1;
				}
				return 0;
			})
			.toSorted((a, b) => {
				if (!a.poses) {
					return 1;
				}
				if (!b.poses) {
					return -1;
				}
				return 0;
			})
			.toSorted((a, b) => {
				if (!a.ja) {
					return 1;
				}
				if (!b.ja) {
					return -1;
				}
				return 0;
			})
	);
</script>

<form class="mx-auto my-4 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
	<label class="flex items-center gap-2">
		<span>{m.search()}</span>
		<input type="text" bind:value={search} />
	</label>
	<label class="flex items-center gap-2">
		<span>{m.sort_by()}</span>
		<select bind:value={sortBy}>
			<option value="abc">{m.abc()}</option>
			<option value="freq">{m.freq()}</option>
			<option value="pos">{m.pos()}</option>
		</select>
	</label>
</form>

<table
	class="mx-auto max-w-screen-md table-auto border-collapse border border-gray-300 text-center"
>
	<thead>
		<tr>
			<th>{m.aynu()}</th>
			<th>{m.sisan()}</th>
			<th>{m.nuca()}</th>
			<th>{m.ankiris()}</th>
			<th>{m.ikiri()}</th>
			<th>{m.hokkaido()} </th>
			<th>{m.frequency()}</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{#each filtered as item, i}
			<tr class={i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
				<td class="flex flex-col gap-2" lang="ain-Latn">
					<div class="flex items-center justify-center gap-1.5">
						{#if item.forms?.length}
							<button
								type="button"
								class="-ml-4 w-4 text-[10px] leading-none text-gray-400 transition-transform hover:text-blue-500 {isExpanded(
									item
								)
									? 'rotate-90 text-gray-500'
									: ''}"
								aria-expanded={isExpanded(item)}
								aria-label={`${item.forms.length} ${m.forms()}`}
								title={`${item.forms.length} ${m.forms()}`}
								onclick={() => toggle(item)}>▶</button
							>
						{/if}
						<span>{displayLemma(item.lemma)}</span>
					</div>
					{#if item.structure}
						<div class="text-xs leading-tight text-gray-500">
							<span lang="ain-Latn">{joinMorphs(item.structure)}</span><br />
							<span lang="en">{joinGlosses(item.structure)}</span>
						</div>
					{/if}
				</td>
				<td lang="ja">
					{(item.ja ?? []).join('、')}
				</td>
				<td lang="ru">
					{(item.ru ?? []).join(', ')}
				</td>
				<td lang="en">
					{(item.en ?? []).join(', ')}
				</td>
				<td>
					<div class="flex flex-wrap gap-2">
						{#each item.poses ?? [] as pos}
							<abbr
								title={(m[`pos_${pos}` as keyof typeof m] as (() => string) | undefined)?.() ?? pos}
								>{pos}</abbr
							>
						{/each}
					</div>
				</td>
				<td lang="ain-Latn">
					{#if item.hokkaido?.length || item.hokkaidoNot?.length}
						<div class="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
							{#each item.hokkaido ?? [] as corr}
								<span title={corrTitle(corr)} class="whitespace-nowrap"
									><span class="text-xs text-gray-500" aria-hidden="true"
										>{CORR_TYPE_GLYPHS[corr.type] ?? '~'}</span
									>{corr.lemma}</span
								>
							{/each}
							{#each item.hokkaidoNot ?? [] as notLemma}
								<span class="text-xs text-gray-400 line-through" title="not the same etymon"
									>{notLemma}</span
								>
							{/each}
						</div>
					{:else}
						{[...new Set([...(item.cognates ?? []), ...(item.noncognates ?? [])])].join(', ')}
					{/if}
				</td>
				<td lang="en" class="tabular-nums">
					{#if item.frequencyRolled !== undefined}
						<span
							title={item.freqSource === 'marker'
								? `${m.freq_incl_forms({ own: item.frequency })}; ${m.freq_marker_qualifier()}`
								: m.freq_incl_forms({ own: item.frequency })}
							>{item.freqSource === 'marker' ? '≈' : ''}{item.frequencyRolled}</span
						>
					{:else if item.freqSource === 'marker'}
						<span title={m.freq_marker_qualifier()}>≈{item.frequency}</span>
					{:else}
						{item.frequency}
					{/if}
				</td>
				<td>
					<a
						href={kampisosUrl(item.lemma)}
						target="_blank"
						class="flex items-center justify-center hover:text-blue-500"
					>
						<KampisosIcon class="h-6 w-6" />
					</a>
				</td>
			</tr>
			{#if item.forms?.length && isExpanded(item)}
				{#each item.forms as form}
					<tr class="text-sm text-gray-500 {i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}">
						<td class="text-left" lang="ain-Latn">
							<div class="ml-3 flex flex-col border-l-2 border-gray-400/40 py-0.5 pl-4">
								<span
									class={formMatches(form)
										? 'font-medium text-gray-800 underline decoration-amber-500 decoration-2 underline-offset-4'
										: ''}>{displayLemma(form.lemma)}</span
								>
								<span class="text-xs leading-tight text-gray-400">
									<span lang="ain-Latn">{joinMorphs(form.analysis)}</span>
									<span lang="en" class="block">{joinGlosses(form.analysis)}</span>
								</span>
							</div>
						</td>
						<td lang="ja" class="text-xs">
							{(form.ja ?? []).join('、')}
						</td>
						<td lang="ru" class="text-xs">
							{(form.ru ?? []).join(', ')}
						</td>
						<td lang="en" class="text-xs">
							{(form.en ?? []).join(', ')}
						</td>
						<td>
							<abbr
								title={form.type}
								class="rounded bg-gray-400/20 px-1 text-[10px] tracking-wide text-gray-500 no-underline"
								>{FORM_TYPE_ABBRS[form.type] ?? form.type}</abbr
							>
						</td>
						<td></td>
						<td lang="en" class="text-xs tabular-nums">
							{form.frequency}
						</td>
						<td>
							<a
								href={kampisosUrl(form.lemma)}
								target="_blank"
								class="flex items-center justify-center text-gray-400 hover:text-blue-500"
							>
								<KampisosIcon class="h-5 w-5" />
							</a>
						</td>
					</tr>
				{/each}
			{/if}
		{/each}
	</tbody>
</table>

<style lang="postcss">
	th,
	td {
		@apply p-2;
	}
</style>

<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import data from '$lib/data.json';
	import KampisosIcon from '$lib/icons/Kampisos.svg.svelte';
	import { extrapolateSakhalinFromHokkaido } from '$lib/utils/itah';

	let sortBy: 'abc' | 'freq' | 'pos' = $state('freq');
	let search = $state('');
	let sorted = $derived(
		data.toSorted((a, b) => {
			if (sortBy === 'abc') {
				return a.lemma?.localeCompare(b.lemma) ?? 0;
			} else if (sortBy === 'freq') {
				return -1 * (a.frequency - b.frequency);
			} else if (sortBy === 'pos') {
				return a.poses?.[0]?.localeCompare(b.poses?.[0]) ?? 0;
			}
			return 0;
		})
	);
	let filtered = $derived(
		sorted
			.filter(
				(item) =>
					item.lemma?.includes(search) ||
					item.ja?.includes(search) ||
					item.en?.includes(search) ||
					item.ru?.includes(search) ||
					item.lemma?.includes(extrapolateSakhalinFromHokkaido(search))
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
			<th></th>
		</tr>
	</thead>
	<tbody>
		{#each filtered as item}
			<tr class="odd:bg-gray-100 even:bg-gray-200">
				<td class="flex flex-col gap-2" lang="ain-Latn">
					{item.lemma}
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
						{#each item.poses as pos}
							<abbr title={m[`pos_${pos}` as keyof typeof m]?.() ?? pos}>{pos}</abbr>
						{/each}
					</div>
				</td>
				<td>{[...(item.cognates ?? []), ...(item.noncognates ?? [])].join(', ')}</td>
				<td>
					<a
						href={`https://kampisos.aynu.io/search?q=${encodeURIComponent(item.lemma.replace(/^-/, ''))}`}
						target="_blank"
						class="flex items-center justify-center hover:text-blue-500"
					>
						<KampisosIcon class="h-6 w-6" />
					</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	th,
	td {
		@apply p-2;
	}
</style>

<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import data from '$lib/data.json';

	let sortBy: 'abc' | 'freq' | 'pos' = $state('freq');

	let sorted = $derived(
		data.toSorted((a, b) => {
			if (sortBy === 'abc') {
				return a.lemma?.localeCompare(b.lemma) ?? 0;
			} else if (sortBy === 'freq') {
				return a.frequency - b.frequency;
			} else if (sortBy === 'pos') {
				return a.poses?.[0]?.localeCompare(b.poses?.[0]) ?? 0;
			}
		})
	);
</script>

<form class="mx-auto my-4 flex justify-center gap-2">
	<label>
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
			<th>{m.ikiri()}</th>
		</tr>
	</thead>
	<tbody>
		{#each sorted as item}
			<tr class="odd:bg-gray-100 even:bg-gray-200">
				<td class="flex flex-col gap-2">
					{item.lemma}
				</td>
				<td>
					{item.glosses}
				</td>
				<td></td>
				<td>
					{item.poses}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

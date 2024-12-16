<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import data from '$lib/data.json';
</script>

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
		{#each data as item}
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

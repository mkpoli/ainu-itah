<script lang="ts">
	import { Select } from 'bits-ui';
	import * as m from '$lib/paraglide/messages';

	interface PosOption {
		code: string;
		count: number;
	}

	let {
		value = $bindable(''),
		options,
		allCount,
		ariaLabel
	}: {
		value: string;
		options: PosOption[];
		allCount: number;
		ariaLabel: string;
	} = $props();

	function posName(code: string): string {
		const fn = m[`pos_${code}` as keyof typeof m] as (() => string) | undefined;
		return fn?.() ?? code;
	}

	// Feed the localized names to bits-ui so focused-trigger typeahead works.
	const items = $derived(options.map((o) => ({ value: o.code, label: posName(o.code) })));
	const selectedName = $derived(value ? posName(value) : '—');
</script>

<Select.Root type="single" {items} bind:value>
	<Select.Trigger
		aria-label={ariaLabel}
		class="flex min-w-[13rem] items-center justify-between gap-2 border border-gray-300 bg-white px-3 py-1 text-left text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
	>
		<span class="flex min-w-0 items-center gap-2">
			<span class="truncate">{selectedName}</span>
			{#if value}
				<span
					class=" bg-gray-100 px-1 font-mono text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-300"
					>{value}</span
				>
			{/if}
		</span>
		<svg
			aria-hidden="true"
			viewBox="0 0 20 20"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			class="h-4 w-4 shrink-0 text-gray-400"
		>
			<path d="M5.5 8 10 12.5 14.5 8" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</Select.Trigger>
	<Select.Portal>
		<Select.Content
			sideOffset={4}
			class="z-50 max-h-80 min-w-[19rem] max-w-[24rem] overflow-y-auto border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-800"
		>
			<Select.Viewport>
				{@render row('', '—', allCount)}
				{#each options as opt (opt.code)}
					{@render row(opt.code, posName(opt.code), opt.count)}
				{/each}
			</Select.Viewport>
		</Select.Content>
	</Select.Portal>
</Select.Root>

{#snippet row(code: string, name: string, count: number)}
	<Select.Item
		value={code}
		label={name}
		class="flex cursor-pointer items-center gap-2 px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-blue-50 dark:text-gray-100 dark:data-[highlighted]:bg-blue-900/40"
	>
		{#snippet children({ selected })}
			<span class="w-3.5 shrink-0 text-blue-600 dark:text-blue-400">{selected ? '✓' : ''}</span>
			<span class="grow whitespace-nowrap">{name}</span>
			{#if code}
				<span
					class=" bg-gray-100 px-1 font-mono text-[11px] text-gray-500 dark:bg-gray-700 dark:text-gray-300"
					>{code}</span
				>
			{/if}
			<span class="w-10 shrink-0 text-right text-xs tabular-nums text-gray-400">{count}</span>
		{/snippet}
	</Select.Item>
{/snippet}

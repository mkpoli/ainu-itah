<script lang="ts">
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{$page.status} · {m.aynu_itah()}</title>
</svelte:head>

<div class="mx-auto my-24 max-w-screen-sm px-4 text-center">
	<p class="text-7xl font-bold text-gray-300">{$page.status}</p>
	{#if $page.error?.message}
		<p class="mt-4 text-lg text-gray-700">{$page.error.message}</p>
	{/if}
	<a href="/" class="mt-8 inline-block text-blue-600 hover:underline">← {m.aynu_itah()}</a>
</div>

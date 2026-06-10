<script lang="ts">
	import { page } from '$app/stores';
	import { TOC, neighbours } from '$lib/grammar/toc';

	let { children } = $props();

	// Which chapters actually have a page on disk (.svx chapters or .svelte like
	// References). Used to link live chapters and dim planned ones.
	const existing = new Set(
		Object.keys(import.meta.glob('/src/routes/grammar/*/+page.{svx,svelte}')).map(
			(p) => p.split('/').at(-2) as string
		)
	);

	const seg = $derived(($page.route?.id ?? '').split('/').filter(Boolean));
	const currentSlug = $derived(seg[0] === 'grammar' ? (seg[1] ?? '') : '');
	const nav = $derived(currentSlug ? neighbours(currentSlug) : { prev: undefined, next: undefined });

	let menuOpen = $state(false);
</script>

<div class="mx-auto max-w-screen-xl px-4">
	<header
		class="sticky top-0 z-20 -mx-4 flex items-center justify-between gap-4 border-b border-gray-200 bg-white/90 px-4 py-3 backdrop-blur"
	>
		<div class="flex items-center gap-3">
			<button
				class="rounded border border-gray-300 px-2 py-1 text-sm lg:hidden"
				onclick={() => (menuOpen = !menuOpen)}
				aria-label="Toggle contents">☰</button
			>
			<a href="/grammar" class="font-semibold tracking-tight">A Grammar of Sakhalin Ainu</a>
		</div>
		<div class="flex items-center gap-3 text-sm">
			<a href="/" class="text-gray-500 hover:text-blue-600">Dictionary</a>
		</div>
	</header>

	<div class="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
		<!-- Sidebar -->
		<nav
			class="{menuOpen
				? 'block'
				: 'hidden'} border-b border-gray-200 py-4 lg:sticky lg:top-14 lg:block lg:max-h-[calc(100vh-3.5rem)] lg:self-start lg:overflow-y-auto lg:border-b-0 lg:py-8"
			aria-label="Table of contents"
		>
			{#each TOC as part}
				<div class="mb-5">
					<p class="mb-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400">
						{part.title}
					</p>
					<ul class="space-y-0.5 text-sm">
						{#each part.chapters as ch}
							{@const live = existing.has(ch.slug)}
							<li>
								{#if live}
									<a
										href={`/grammar/${ch.slug}`}
										onclick={() => (menuOpen = false)}
										class="flex gap-2 rounded px-2 py-1 hover:bg-gray-100 {currentSlug === ch.slug
											? 'bg-blue-50 font-medium text-blue-700'
											: 'text-gray-700'}"
									>
										<span class="w-5 shrink-0 text-right text-gray-400 tabular-nums">{ch.num}</span>
										<span>{ch.title}</span>
									</a>
								{:else}
									<span
										class="flex gap-2 px-2 py-1 text-gray-300"
										title="Not yet written"
									>
										<span class="w-5 shrink-0 text-right tabular-nums">{ch.num}</span>
										<span>{ch.title}</span>
									</span>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>

		<!-- Main content -->
		<main class="min-w-0 py-8">
			{@render children()}

			{#if currentSlug && (nav.prev || nav.next)}
				<nav class="mt-16 flex justify-between gap-4 border-t border-gray-200 pt-6 text-sm">
					<div>
						{#if nav.prev && existing.has(nav.prev.slug)}
							<a href={`/grammar/${nav.prev.slug}`} class="group block text-right">
								<span class="block text-xs text-gray-400">← Previous</span>
								<span class="text-gray-700 group-hover:text-blue-600">{nav.prev.title}</span>
							</a>
						{/if}
					</div>
					<div class="text-right">
						{#if nav.next && existing.has(nav.next.slug)}
							<a href={`/grammar/${nav.next.slug}`} class="group block">
								<span class="block text-xs text-gray-400">Next →</span>
								<span class="text-gray-700 group-hover:text-blue-600">{nav.next.title}</span>
							</a>
						{/if}
					</div>
				</nav>
			{/if}
		</main>
	</div>
</div>

<script module lang="ts">
	// Unique-id seed (Svelte 5.14 predates $props.id()); one search box per page,
	// so the count is deterministic and stable across SSR/hydration.
	let nextUid = 0;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { tick } from 'svelte';

	interface SearchSection {
		title: string;
		id?: string;
	}
	interface SearchDoc {
		slug: string;
		title: string;
		part: string;
		summary: string;
		sections: SearchSection[];
		text: string;
	}
	interface Prepared extends SearchDoc {
		lcTitle: string;
		lcSummary: string;
		lcText: string;
	}
	interface Segment {
		text: string;
		hit: boolean;
	}
	interface Result {
		slug: string;
		title: string;
		part: string;
		href: string;
		section?: string;
		score: number;
		titleSegs: Segment[];
		snippetSegs: Segment[];
	}

	const MAX_RESULTS = 12;

	let index = $state<Prepared[] | null>(null);
	let status = $state<'idle' | 'loading' | 'ready' | 'error'>('idle');
	let query = $state('');
	let open = $state(false);
	let active = $state(-1);

	const uid = `${nextUid++}`;
	const inputId = `gs-input-${uid}`;
	const listId = `gs-list-${uid}`;
	const optId = (i: number) => `gs-opt-${uid}-${i}`;

	async function ensureIndex() {
		if (status === 'loading' || status === 'ready') return;
		status = 'loading';
		try {
			const res = await fetch('/grammar-search.json');
			if (!res.ok) throw new Error(String(res.status));
			const docs = (await res.json()) as SearchDoc[];
			index = docs.map((d) => ({
				...d,
				lcTitle: d.title.toLowerCase(),
				lcSummary: d.summary.toLowerCase(),
				lcText: d.text.toLowerCase()
			}));
			status = 'ready';
		} catch {
			status = 'error';
		}
	}

	function escapeRe(s: string): string {
		return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function segment(text: string, terms: string[]): Segment[] {
		if (!terms.length) return [{ text, hit: false }];
		const re = new RegExp('(' + terms.map(escapeRe).join('|') + ')', 'gi');
		const out: Segment[] = [];
		let last = 0;
		let m: RegExpExecArray | null;
		while ((m = re.exec(text))) {
			if (m.index > last) out.push({ text: text.slice(last, m.index), hit: false });
			out.push({ text: m[0], hit: true });
			last = m.index + m[0].length;
			if (m.index === re.lastIndex) re.lastIndex++;
		}
		if (last < text.length) out.push({ text: text.slice(last), hit: false });
		return out;
	}

	function snippet(text: string, lcText: string, terms: string[]): string {
		let pos = -1;
		for (const t of terms) {
			const i = lcText.indexOf(t);
			if (i >= 0 && (pos < 0 || i < pos)) pos = i;
		}
		if (pos < 0) pos = 0;
		const start = Math.max(0, pos - 56);
		let s = text.slice(start, start + 196);
		if (start > 0) s = '… ' + s;
		if (start + 196 < text.length) s = s + ' …';
		return s;
	}

	const terms = $derived(
		query
			.toLowerCase()
			.split(/\s+/)
			.map((t) => t.trim())
			.filter(Boolean)
	);

	const results = $derived.by<Result[]>(() => {
		const docs = index;
		if (!docs || terms.length === 0) return [];
		const scored: Result[] = [];
		for (const d of docs) {
			let score = 0;
			let missing = false;
			for (const t of terms) {
				const inTitle = d.lcTitle.includes(t);
				const inSummary = d.lcSummary.includes(t);
				const inSections = d.sections.some((s) => s.title.toLowerCase().includes(t));
				const textHits = d.lcText.split(t).length - 1;
				if (!inTitle && !inSummary && !inSections && textHits === 0) {
					missing = true;
					break;
				}
				if (inTitle) score += 10;
				if (inSummary) score += 4;
				if (inSections) score += 6;
				score += Math.min(textHits, 5);
			}
			if (missing) continue;

			// Prefer linking to the first section whose heading matches the query.
			const section = d.sections.find(
				(s) => s.id && terms.some((t) => s.title.toLowerCase().includes(t))
			);
			const href = `/grammar/${d.slug}${section?.id ? `#${section.id}` : ''}`;
			scored.push({
				slug: d.slug,
				title: d.title,
				part: d.part,
				href,
				section: section?.title,
				score,
				titleSegs: segment(d.title, terms),
				snippetSegs: segment(snippet(d.text, d.lcText, terms), terms)
			});
		}
		scored.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
		return scored.slice(0, MAX_RESULTS);
	});

	const showPanel = $derived(open && query.trim().length > 0);

	$effect(() => {
		// Keep the active option in range as results change.
		if (active >= results.length) active = results.length - 1;
	});

	async function focusOption(i: number) {
		active = i;
		await tick();
		const el = document.getElementById(optId(i));
		el?.scrollIntoView({ block: 'nearest' });
	}

	function onInput() {
		open = true;
		active = -1;
		ensureIndex();
	}

	function onFocus() {
		ensureIndex();
		if (query.trim().length > 0) open = true;
	}

	function navigate(href: string) {
		open = false;
		query = '';
		active = -1;
		goto(href);
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			if (query) {
				query = '';
				open = false;
			}
			active = -1;
			return;
		}
		if (e.key === 'ArrowDown') {
			if (!showPanel || results.length === 0) return;
			e.preventDefault();
			open = true;
			focusOption(active < results.length - 1 ? active + 1 : 0);
		} else if (e.key === 'ArrowUp') {
			if (!showPanel || results.length === 0) return;
			e.preventDefault();
			focusOption(active > 0 ? active - 1 : results.length - 1);
		} else if (e.key === 'Enter') {
			if (showPanel && active >= 0 && active < results.length) {
				e.preventDefault();
				navigate(results[active].href);
			}
		}
	}

	function onFocusOut(e: FocusEvent) {
		const next = e.relatedTarget as Node | null;
		if (!next || !(e.currentTarget as HTMLElement).contains(next)) open = false;
	}
</script>

<form
	class="g-search"
	role="search"
	aria-label="Search the grammar"
	onfocusout={onFocusOut}
	onsubmit={(e) => e.preventDefault()}
>
	<label class="g-search-label" for={inputId}>Search the grammar</label>
	<input
		id={inputId}
		class="g-search-input"
		type="search"
		role="combobox"
		aria-expanded={showPanel}
		aria-controls={listId}
		aria-autocomplete="list"
		aria-activedescendant={showPanel && active >= 0 ? optId(active) : undefined}
		autocomplete="off"
		spellcheck="false"
		placeholder="Search the grammar…"
		bind:value={query}
		oninput={onInput}
		onfocus={onFocus}
		onkeydown={onKeydown}
	/>

	{#if showPanel}
		<div class="g-search-panel">
			{#if status === 'loading' && !index}
				<p class="g-search-msg" role="status">Loading index…</p>
			{:else if status === 'error'}
				<p class="g-search-msg" role="status">Search is unavailable right now.</p>
			{:else if results.length === 0}
				<p class="g-search-msg" role="status">No matches for “{query.trim()}”.</p>
			{:else}
				<ul class="g-search-results" role="listbox" id={listId} aria-label="Grammar search results">
					{#each results as r, i (r.slug)}
						<li
							class="g-search-opt"
							class:active={i === active}
							role="option"
							id={optId(i)}
							aria-selected={i === active}
						>
							<a href={r.href} onclick={() => navigate(r.href)} onmousemove={() => (active = i)}>
								<span class="g-search-title">
									{#each r.titleSegs as seg}{#if seg.hit}<mark>{seg.text}</mark
											>{:else}{seg.text}{/if}{/each}
								</span>
								<span class="g-search-meta">
									{r.part}{#if r.section}
										· {r.section}{/if}
								</span>
								<span class="g-search-snippet">
									{#each r.snippetSegs as seg}{#if seg.hit}<mark>{seg.text}</mark
											>{:else}{seg.text}{/if}{/each}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</form>

<style>
	.g-search {
		position: relative;
		margin-bottom: 1rem;
	}

	.g-search-label {
		display: block;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.06em;
		font-size: 0.78rem;
		color: #6b7280;
		margin-bottom: 0.25rem;
	}

	/* Shared house form-control look: square, bordered, white. */
	.g-search-input {
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #d1d5db;
		background: #ffffff;
		color: #1f2937;
		padding: 0.3rem 0.6rem;
		font: inherit;
		font-size: 0.9rem;
		line-height: 1.4;
	}

	.g-search-input:focus {
		outline: 2px solid #1e40af;
		outline-offset: -1px;
	}

	.g-search-input::placeholder {
		color: #9ca3af;
	}

	.g-search-panel {
		position: absolute;
		z-index: 30;
		left: 0;
		right: 0;
		margin-top: 2px;
		max-height: 24rem;
		overflow-y: auto;
		border: 1px solid #d1d5db;
		background: #ffffff;
		box-shadow: 0 6px 16px rgba(15, 23, 42, 0.12);
	}

	.g-search-msg {
		margin: 0;
		padding: 0.55rem 0.7rem;
		font-size: 0.82rem;
		color: #6b7280;
	}

	.g-search-results {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.g-search-opt + .g-search-opt {
		border-top: 1px solid #f1f3f5;
	}

	.g-search-opt > a {
		display: block;
		padding: 0.45rem 0.7rem;
		text-decoration: none;
		color: inherit;
	}

	.g-search-opt.active,
	.g-search-opt:hover {
		background: #f3f4f6;
	}

	.g-search-title {
		display: block;
		font-size: 0.9rem;
		font-weight: 600;
		color: #1f2937;
	}

	.g-search-meta {
		display: block;
		font-size: 0.74rem;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.04em;
		color: #6b7280;
		margin: 0.05rem 0;
	}

	.g-search-snippet {
		display: block;
		font-size: 0.8rem;
		line-height: 1.45;
		color: #4b5563;
	}

	.g-search :global(mark) {
		background: rgba(30, 64, 175, 0.14);
		color: inherit;
		font-weight: 600;
		padding: 0 0.05em;
	}

	@media (prefers-reduced-motion: reduce) {
		.g-search-opt > a,
		.g-search-input {
			transition: none;
		}
	}

	@media (prefers-color-scheme: dark) {
		.g-search-label,
		.g-search-msg,
		.g-search-meta {
			color: #9ca3af;
		}
		.g-search-input {
			border-color: #374151;
			background: #111827;
			color: #e5e7eb;
		}
		.g-search-input:focus {
			outline-color: #93c5fd;
		}
		.g-search-input::placeholder {
			color: #6b7280;
		}
		.g-search-panel {
			border-color: #374151;
			background: #0f1520;
			box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
		}
		.g-search-opt + .g-search-opt {
			border-top-color: #1f2937;
		}
		.g-search-opt.active,
		.g-search-opt:hover {
			background: #1a2233;
		}
		.g-search-title {
			color: #f3f4f6;
		}
		.g-search-snippet {
			color: #cbd5e1;
		}
		.g-search :global(mark) {
			background: rgba(147, 197, 253, 0.24);
			color: inherit;
		}
	}
</style>

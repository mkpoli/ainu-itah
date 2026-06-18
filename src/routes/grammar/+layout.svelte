<script lang="ts">
	import { page } from '$app/stores';
	import { parts, appendices, chapterNumber } from '$lib/grammar/toc';
	let { children } = $props();

	let current = $derived($page.url.pathname.replace(/^\/grammar\/?/, '').replace(/\/$/, ''));
</script>

<div class="grammar-root">
	<div class="g-shell">
		<aside class="g-sidebar">
			<details class="g-toc" open>
				<summary>Contents</summary>
				<nav aria-label="Grammar table of contents">
					{#each parts as part, pi}
						<p class="g-part">
							Part {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][pi]} · {part.title}
						</p>
						<ul>
							{#each part.chapters as c}
								<li class:current={current === c.slug}>
									<a href={`/grammar/${c.slug}`}
										><span class="g-chnum">{chapterNumber(c.slug)}</span>
										{c.short ?? c.title}</a
									>
								</li>
							{/each}
						</ul>
					{/each}
					<p class="g-part">Back matter</p>
					<ul>
						{#each appendices as a}
							<li class:current={current === a.slug}>
								<a href={`/grammar/${a.slug}`}>{a.title}</a>
							</li>
						{/each}
					</ul>
				</nav>
			</details>
		</aside>

		<main class="g-main">
			{@render children()}
		</main>
	</div>
</div>

<style>
	.grammar-root {
		font-family: Charter, 'Bitstream Charter', 'Source Serif 4', 'Noto Serif', Georgia, serif;
		color: #1f2937;
		background: #ffffff;
	}

	.g-shell {
		max-width: 72rem;
		margin: 0 auto;
		display: flex;
		gap: 2.5rem;
		padding: 1.5rem 1rem 3rem;
		width: 100%;
		flex: 1;
		align-items: flex-start;
	}

	.g-sidebar {
		width: 17rem;
		flex-shrink: 0;
		position: sticky;
		top: 1rem;
		max-height: calc(100vh - 2rem);
		overflow-y: auto;
		font-size: 0.85rem;
		line-height: 1.45;
	}

	.g-toc summary {
		cursor: pointer;
		font-weight: 700;
		font-size: 0.95rem;
		margin-bottom: 0.4rem;
	}

	.g-part {
		margin: 0.9rem 0 0.25rem;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.06em;
		color: #6b7280;
	}

	.g-toc ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.g-toc li {
		margin: 0.15rem 0;
		padding-left: 0.4rem;
		border-left: 2px solid transparent;
	}

	.g-toc li.current {
		border-left-color: #1e40af;
	}

	.g-toc li.current > a {
		color: #1e40af;
		font-weight: 600;
	}

	.g-toc a:hover {
		text-decoration: underline;
	}

	.g-chnum {
		display: inline-block;
		min-width: 1.3em;
		color: #9ca3af;
		font-variant-numeric: tabular-nums;
	}

	.g-main {
		flex: 1;
		min-width: 0;
		max-width: 46rem;
		font-size: 1.05rem;
		line-height: 1.65;
	}

	@media (max-width: 50rem) {
		.g-shell {
			flex-direction: column;
			gap: 1rem;
		}

		.g-sidebar {
			width: 100%;
			position: static;
			max-height: none;
		}

		.g-toc {
			border: 1px solid #e5e7eb;
			border-radius: 0.4rem;
			padding: 0.6rem 0.8rem;
		}
	}

	/* ——— Book typography for chapter content ——— */

	.g-main :global(h1) {
		font-size: 1.9rem;
		line-height: 1.25;
		font-weight: 700;
		margin: 0.5rem 0 1.5rem;
	}

	.g-main :global(h1 .ch-num) {
		display: block;
		font-size: 0.95rem;
		font-weight: 400;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.12em;
		color: #1e40af;
		margin-bottom: 0.3rem;
	}

	.g-main :global(h2),
	.g-main :global(h3),
	.g-main :global(h4) {
		font-weight: 700;
		line-height: 1.3;
		margin: 1.8em 0 0.6em;
	}

	.g-main :global(h2) {
		font-size: 1.35rem;
	}

	.g-main :global(h3) {
		font-size: 1.12rem;
	}

	.g-main :global(h4) {
		font-size: 1rem;
		font-style: italic;
	}

	.g-main :global(.sec-num) {
		color: #1e40af;
		font-weight: 600;
		margin-right: 0.45em;
		font-variant-numeric: tabular-nums;
	}

	.g-main :global(p) {
		margin: 0 0 0.9em;
	}

	.g-main :global(ul),
	.g-main :global(ol) {
		margin: 0 0 0.9em;
		padding-left: 1.6em;
	}

	.g-main :global(ul) {
		list-style: disc;
	}

	.g-main :global(ol) {
		list-style: decimal;
	}

	.g-main :global(li) {
		margin: 0.25em 0;
	}

	.g-main :global(i[lang^='ain']),
	.g-main :global(.ain) {
		font-style: italic;
	}

	.g-main :global(a) {
		text-decoration: none;
		color: inherit;
	}

	.g-main :global(p a),
	.g-main :global(li a),
	.g-main :global(td a) {
		color: #1e40af;
	}

	.g-main :global(p a:hover),
	.g-main :global(li a:hover),
	.g-main :global(td a:hover) {
		text-decoration: underline;
	}

	.g-main :global(a.ref),
	.g-main :global(a.xr) {
		color: #1e40af;
	}

	.g-main :global(blockquote) {
		margin: 1em 0;
		padding: 0.1em 1.2em;
		border-left: 3px solid #e5e7eb;
		color: #374151;
		font-size: 0.98rem;
	}

	.g-main :global(table) {
		border-collapse: collapse;
		margin: 1.2em 0;
		font-size: 0.95rem;
	}

	.g-main :global(caption) {
		caption-side: top;
		text-align: left;
		font-style: italic;
		margin-bottom: 0.4em;
		color: #374151;
	}

	.g-main :global(th),
	.g-main :global(td) {
		border-top: 1px solid #d1d5db;
		border-bottom: 1px solid #d1d5db;
		padding: 0.3em 0.8em;
		text-align: left;
		vertical-align: top;
	}

	.g-main :global(thead th) {
		border-top: 2px solid #4b5563;
		border-bottom: 1px solid #4b5563;
	}

	.g-main :global(tbody tr:last-child td) {
		border-bottom: 2px solid #4b5563;
	}

	/* ——— Interlinear examples ——— */

	.g-main :global(.ex) {
		display: flex;
		gap: 0.8em;
		margin: 1.1em 0 1.1em 0.2em;
	}

	.g-main :global(.ex-num) {
		flex-shrink: 0;
		min-width: 2.2em;
		font-variant-numeric: tabular-nums;
	}

	.g-main :global(.ex-body) {
		min-width: 0;
	}

	.g-main :global(.ex-orig) {
		margin: 0 0 0.2em;
		color: #374151;
	}

	.g-main :global(.ex-surface) {
		margin: 0 0 0.2em;
		font-style: italic;
		color: #374151;
	}

	.g-main :global(.ex-il) {
		display: flex;
		flex-wrap: wrap;
		column-gap: 1.1em;
		row-gap: 0.5em;
		margin-bottom: 0.25em;
	}

	.g-main :global(.ex-w) {
		display: flex;
		flex-direction: column;
	}

	.g-main :global(.ex-m) {
		font-style: italic;
	}

	.g-main :global(.ex-m a:hover) {
		text-decoration: underline dotted;
	}

	.g-main :global(.ex-g) {
		font-size: 0.92em;
		color: #374151;
	}

	.g-main :global(.ex-g abbr) {
		font-variant-caps: all-small-caps;
		letter-spacing: 0.03em;
		text-decoration: none;
		cursor: help;
	}

	.g-main :global(.ex-tr) {
		margin: 0.15em 0 0;
	}

	.g-main :global(.ex-lit) {
		color: #4b5563;
	}

	.g-main :global(.ex-src) {
		margin: 0.1em 0 0;
		font-size: 0.85em;
		color: #6b7280;
	}

	.g-main :global(.ex-src a:hover) {
		text-decoration: underline;
	}

	.g-main :global(.ex-constructed) {
		font-style: italic;
	}

	.g-main :global(.ex-note) {
		margin: 0.3em 0 0;
		font-size: 0.9em;
		color: #4b5563;
	}

	/* Chapter navigation footer */
	.g-main :global(.ch-nav) {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 3rem;
		padding-top: 1rem;
		border-top: 1px solid #e5e7eb;
		font-size: 0.92rem;
	}

	.g-main :global(.ch-nav a) {
		color: #1e40af;
	}

	.g-main :global(.ch-nav a:hover) {
		text-decoration: underline;
	}

	/* Dark mode (follows the OS preference) — flip the book's hardcoded colors. */
	@media (prefers-color-scheme: dark) {
		.grammar-root {
			background: #0b0f17;
			color: #d1d5db;
		}
		.g-part,
		.g-chnum {
			color: #9ca3af;
		}
		.g-toc li.current {
			border-left-color: #93c5fd;
		}
		.g-toc li.current > a,
		.g-main :global(h1 .ch-num),
		.g-main :global(.sec-num),
		.g-main :global(p a),
		.g-main :global(li a),
		.g-main :global(td a),
		.g-main :global(a.ref),
		.g-main :global(a.xr),
		.g-main :global(.ch-nav a) {
			color: #93c5fd;
		}
		.g-main :global(h1),
		.g-main :global(h2),
		.g-main :global(h3),
		.g-main :global(h4) {
			color: #f3f4f6;
		}
		.g-main :global(blockquote) {
			border-left-color: #374151;
			color: #cbd5e1;
		}
		.g-main :global(caption),
		.g-main :global(.ex-orig),
		.g-main :global(.ex-surface),
		.g-main :global(.ex-g),
		.g-main :global(.ex-lit),
		.g-main :global(.ex-note) {
			color: #cbd5e1;
		}
		.g-main :global(.ex-src) {
			color: #9ca3af;
		}
		.g-main :global(th),
		.g-main :global(td) {
			border-color: #374151;
		}
		.g-main :global(thead th) {
			border-top-color: #9ca3af;
			border-bottom-color: #9ca3af;
		}
		.g-main :global(tbody tr:last-child td) {
			border-bottom-color: #9ca3af;
		}
		.g-main :global(.ch-nav) {
			border-top-color: #374151;
		}
	}
</style>

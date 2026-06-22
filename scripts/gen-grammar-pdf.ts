#!/usr/bin/env bun
/**
 * Generate static/grammar.pdf — a printable book of the reference grammar — with Typst.
 *
 * Pipeline: build the site → preview server → fetch each chapter's rendered HTML →
 * pull the interlinear <Ex> examples out into Typst grids (preserving morpheme/gloss
 * alignment) and let pandoc convert the surrounding prose/tables → assemble under a
 * Typst book template (title page, contents, running headers) → `typst compile`.
 *
 * Run: bun scripts/gen-grammar-pdf.ts   (needs `pandoc` and `typst` on PATH)
 */
import { parse, type HTMLElement } from 'node-html-parser';
import { execFileSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parts, appendices, chapterNumber } from '../src/lib/grammar/toc';

const ROOT = path.resolve(import.meta.dir, '..');
const PORT = 4178;
const BASE = `http://localhost:${PORT}`;
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

const tq = (s: string) => '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
const clean = (s: string | undefined) => (s ?? '').replace(/\s+/g, ' ').trim();
const tight = (s: string | undefined) => (s ?? '').replace(/\s+/g, '').trim();
// Escape text destined for Typst *content* mode (markup metacharacters).
const escTyp = (s: string | undefined) => (s ?? '').replace(/([#$*_`<>@~\\[\]])/g, '\\$1');

// The "Gloss abbreviations" table reads better in print as a compact two-column
// list (tag — meaning) than as a full-width bordered table.
function abbrevListToTypst(table: HTMLElement): string {
	const rows = table
		.querySelectorAll('tbody tr')
		.map((r) => {
			const td = r.querySelectorAll('td');
			return { tag: clean(td[0]?.text), def: clean(td[1]?.text) };
		})
		.filter((r) => r.tag);
	const body = rows
		.map((r) => `#smallcaps[${escTyp(r.tag.toLowerCase())}]#h(0.5em)${escTyp(r.def)}`)
		.join(' \\\n');
	return `#columns(2, gutter: 1.4em)[\n#set par(justify: false, leading: 0.5em, spacing: 0.5em)\n${body}\n]`;
}

// ---- one interlinear example -> a Typst #ex(...) call --------------------------
let exSeq = 0;
const exCalls = new Map<string, string>();

function exToTypst(ex: HTMLElement): string {
	const num = clean(ex.querySelector('.ex-num')?.text) || `(${exSeq})`;
	const words = ex.querySelectorAll('.ex-w').map((w) => ({
		m: tight(w.querySelector('.ex-m')?.text),
		g: tight(w.querySelector('.ex-g')?.text)
	}));
	const orig = clean(ex.querySelector('.ex-orig')?.text);
	const surface = clean(ex.querySelector('.ex-surface')?.text);
	const tr = clean(ex.querySelector('.ex-tr')?.text);
	const src = clean(ex.querySelector('.ex-src')?.text);
	const note = clean(ex.querySelector('.ex-note')?.text);
	const wordArr = words.map((w) => `(m: ${tq(w.m)}, g: ${tq(w.g)})`).join(', ');
	const opt: string[] = [];
	if (orig) opt.push(`orig: ${tq(orig)}`);
	if (surface) opt.push(`surface: ${tq(surface)}`);
	if (tr) opt.push(`tr: ${tq(tr)}`);
	if (src) opt.push(`src: ${tq(src)}`);
	if (note) opt.push(`note: ${tq(note)}`);
	return `#ex(${tq(num)}, (${wordArr},)${opt.length ? ', ' + opt.join(', ') : ''})`;
}

// ---- figures: constrain width, embed inline SVG, caption ------------------------
// pandoc would emit unconstrained #image() (overflowing the page) and silently drops
// inline <svg>. We pull each <figure> out into a width-capped, centred Typst block;
// inline SVGs are written to a temp file so Typst can render them.
const tmpFigs: string[] = [];
const TEXT_PT = 465; // ≈ A4 text-column width in pt
function figureToTypst(fig: HTMLElement): string | null {
	const img = fig.querySelector('img');
	const svg = fig.querySelector('svg');
	const caption = escTyp(clean(fig.querySelector('figcaption')?.text));
	const styleMW = /max-width:\s*(\d+)px/.exec(fig.getAttribute('style') ?? '')?.[1];
	const imgW = img?.getAttribute('width')?.replace(/px$/, '');
	const px = Number(styleMW ?? imgW ?? '420') || 420;
	const pct = Math.min(100, Math.max(25, Math.round(((px * 0.75) / TEXT_PT) * 100)));

	let src: string | null = null;
	if (img) {
		src = img.getAttribute('src') ?? null;
	} else if (svg) {
		// Typst's SVG parser needs the xmlns declaration (the DOM serialization
		// omits it) and chokes on Svelte's <!--[--> hydration markers.
		let s = svg.outerHTML.replace(/<!--[\s\S]*?-->/g, '');
		if (!/xmlns=/.test(s)) s = s.replace(/^<svg /, '<svg xmlns="http://www.w3.org/2000/svg" ');
		const file = `_pdffig_${tmpFigs.length}.svg`;
		fs.writeFileSync(path.resolve(ROOT, 'static', file), s);
		tmpFigs.push(file);
		src = '/' + file;
	}
	if (!src) return null;
	const cap = caption ? `\n  #v(0.3em); #text(size: 0.8em, fill: luma(45%))[${caption}]` : '';
	return `#align(center, block(breakable: false, width: ${pct}%)[\n  #image(${tq(src)}, width: 100%)${cap}\n])`;
}

// ---- fetch + clean one chapter's body, return its Typst -------------------------
async function chapterBody(slug: string): Promise<string> {
	const html = await (await fetch(`${BASE}/en/grammar/${slug}`)).text();
	const root = parse(html, { comment: false });
	const main = root.querySelector('.g-main');
	if (!main) throw new Error(`no .g-main for ${slug}`);

	main.querySelector('h1')?.remove(); // chapter title — emitted as a Typst heading
	main.querySelectorAll('.ch-nav, nav').forEach((n) => n.remove()); // prev/next nav

	// replace each interlinear example with a placeholder paragraph
	for (const ex of main.querySelectorAll('.ex')) {
		const token = `EXSLOT${exSeq++}EXSLOT`;
		exCalls.set(token, exToTypst(ex));
		ex.replaceWith(parse(`<p>${token}</p>`));
	}

	// figures → width-capped centred blocks (or a temp-file SVG embed); the
	// DialectMap's interactive canvas has no print form, so drop the empty map div
	// and keep its place-name list + caption.
	for (const fig of main.querySelectorAll('figure')) {
		const typ = figureToTypst(fig);
		if (typ) {
			const token = `EXSLOT${exSeq++}EXSLOT`;
			exCalls.set(token, typ);
			fig.replaceWith(parse(`<p>${token}</p>`));
		} else {
			fig.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
		}
	}

	// the gloss-abbreviation table → a two-column list
	if (slug === 'abbreviations') {
		for (const t of main.querySelectorAll('table')) {
			if (clean(t.querySelector('th')?.text).toLowerCase().includes('abbrev')) {
				const token = `EXSLOT${exSeq++}EXSLOT`;
				exCalls.set(token, abbrevListToTypst(t));
				t.replaceWith(parse(`<p>${token}</p>`));
				break;
			}
		}
	}
	// unwrap links/abbr to plain text (no clickable refs in print)
	for (const a of main.querySelectorAll('a, abbr'))
		a.replaceWith(parse(`<span>${a.innerHTML}</span>`));

	let typ = execFileSync('pandoc', ['-f', 'html', '-t', 'typst', '--shift-heading-level-by=1'], {
		input: main.innerHTML,
		encoding: 'utf8',
		maxBuffer: 64 * 1024 * 1024
	});
	for (const [token, call] of exCalls) if (typ.includes(token)) typ = typ.split(token).join(call);
	return typ;
}

// ---- Typst template ------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const PREAMBLE = `#set document(title: "A Grammar of Sakhalin Ainu", author: "Aynu Itah")
#set text(font: ("Libertinus Serif", "Hiragino Mincho ProN", "Noto Sans", "Droid Sans Fallback"), size: 10.5pt, lang: "en")
#set par(justify: true, leading: 0.6em, spacing: 0.95em)
#set page(paper: "a4", margin: (x: 2.3cm, y: 2.5cm), numbering: "1", number-align: center,
  header: context if counter(page).get().first() > 0 {
    set text(8.5pt, fill: luma(45%)); align(right)[A Grammar of Sakhalin Ainu]
  })
#show link: it => it.body
#set table(stroke: 0.4pt + luma(60%))
#show heading: set text(weight: "bold")
#show heading.where(level: 1): it => { pagebreak(weak: true); v(1.4em); text(20pt, it.body); v(0.9em) }
#show heading.where(level: 2): it => { v(1.4em); text(15pt, it.body); v(0.5em) }
#show heading.where(level: 3): it => { v(0.7em); text(12pt, it.body); v(0.2em) }
#show heading.where(level: 4): it => { v(0.5em); text(11pt, style: "italic", it.body) }
#show heading.where(level: 5): it => { text(10.5pt, style: "italic", it.body) }

#let ex(num, words, orig: none, surface: none, tr: none, src: none, note: none) = block(breakable: false, above: 0.95em, below: 0.95em,
  grid(columns: (1.9em, 1fr), column-gutter: 0.3em,
    text(num),
    {
      if orig != none { text(style: "italic", orig); linebreak() }
      if surface != none { text(style: "italic", surface); linebreak() }
      grid(columns: (auto,) * words.len(), column-gutter: 0.9em, row-gutter: 0.2em,
        ..words.map(w => text(style: "italic", w.m)),
        ..words.map(w => text(size: 0.82em, w.g)))
      if tr != none { v(0.25em); tr }
      if src != none { text(size: 0.82em, fill: luma(45%))[ #h(0.4em) — #src] }
      if note != none { linebreak(); text(size: 0.86em, note) }
    }))
`;

const TITLE = `#page(numbering: none, header: none)[
  #v(1fr)
  #align(center)[
    #text(30pt, weight: "bold")[A Grammar of\\ Sakhalin Ainu]
    #v(0.8em)
    #text(15pt, style: "italic")[enciw itah]
    #v(3cm)
    #text(12pt)[Aynu Itah]
    #v(0.4em)
    #text(10pt, fill: luma(40%))[itah.aynu.org · ${today}]
  ]
  #v(1fr)
]
#page(numbering: none, header: none)[
  #outline(title: [Contents], depth: 2, indent: 1.2em)
]
#counter(page).update(1)
`;

// ---- assemble ------------------------------------------------------------------
async function main() {
	// PDF_PREVIEW_RUNNING=1 skips the build + preview spawn and reuses a preview
	// server the caller already has running on PORT (lets the heavy steps run
	// outside a sandbox that kills detached child processes).
	const external = process.env.PDF_PREVIEW_RUNNING === '1';
	let preview: ReturnType<typeof spawn> | null = null;
	if (!external) {
		console.log('building…');
		execFileSync('bun', ['run', 'build'], { cwd: ROOT, stdio: 'inherit' });
		console.log('starting preview…');
		preview = spawn('bun', ['run', 'preview', '--port', String(PORT)], {
			cwd: ROOT,
			stdio: 'ignore',
			detached: true
		});
	}
	try {
		for (let i = 0; i < 60; i++) {
			try {
				if ((await fetch(`${BASE}/en`)).ok) break;
			} catch {
				/* not up yet */
			}
			await new Promise((r) => setTimeout(r, 500));
		}

		const groups = [
			...parts.map((p, i) => ({ label: `Part ${ROMAN[i]}`, title: p.title, chapters: p.chapters })),
			{
				label: '',
				title: 'Appendices',
				chapters: appendices.map((a) => ({ slug: a.slug, title: a.title }))
			}
		];

		let body = '';
		for (const g of groups) {
			body += `\n= ${g.label ? g.label + ' · ' : ''}${g.title}\n`;
			for (const c of g.chapters) {
				const num = chapterNumber(c.slug);
				const head = num > 0 ? `Chapter ${num} · ${c.title}` : c.title;
				console.log(`  · ${head}`);
				body += `\n== ${head}\n\n` + (await chapterBody(c.slug)) + '\n';
			}
		}

		const typ = PREAMBLE + TITLE + body;
		const typPath = path.resolve(ROOT, 'static/grammar.typ');
		fs.writeFileSync(typPath, typ);
		console.log('compiling PDF…');
		execFileSync('typst', ['compile', typPath, path.resolve(ROOT, 'static/grammar.pdf')], {
			stdio: 'inherit'
		});
		fs.unlinkSync(typPath);
		const mb = (fs.statSync(path.resolve(ROOT, 'static/grammar.pdf')).size / 1024 / 1024).toFixed(
			2
		);
		console.log(`wrote static/grammar.pdf (${mb} MB)`);
	} finally {
		if (preview) {
			try {
				process.kill(-preview.pid!, 'SIGTERM');
			} catch {
				/* already gone */
			}
		}
		for (const f of tmpFigs) {
			try {
				fs.unlinkSync(path.resolve(ROOT, 'static', f));
			} catch {
				/* already gone */
			}
		}
	}
}

await main();

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
	console.log('building…');
	execFileSync('bun', ['run', 'build'], { cwd: ROOT, stdio: 'inherit' });
	console.log('starting preview…');
	const preview = spawn('bun', ['run', 'preview', '--port', String(PORT)], {
		cwd: ROOT,
		stdio: 'ignore',
		detached: true
	});
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
		try {
			process.kill(-preview.pid!, 'SIGTERM');
		} catch {
			/* already gone */
		}
	}
}

await main();

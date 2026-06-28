#!/usr/bin/env bun
/**
 * Build static/grammar-search.json: a full-text search index over the reference
 * grammar (the dictionary is indexed separately and is NOT touched here).
 *
 * For every chapter listed in the table of contents that has a Svelte source at
 * src/lib/grammar/chapters/<slug>.svelte, we read the file and extract its
 * searchable text. Chapters are authored as `.svelte` using a small set of
 * custom components (see src/lib/grammar/components):
 *   - <S t="…" id="…">    a numbered section with a heading title + anchor id
 *   - <Ex m="…" tr="…" …> a glossed interlinear example (text lives in attributes)
 *   - <A w="…" />          an inline Ainu word linked to the dictionary
 * Plain prose lives as ordinary HTML (<p>, <table>, <i lang="ain">…</i>, …).
 *
 * We therefore (1) drop the <script> block, (2) pull section titles/ids from <S>,
 * (3) pull the human-readable attributes (translation, morpheme line, note, …)
 * out of every self-closing <Ex>, (4) pull inline words out of every <A>, and
 * (5) strip the remaining markup to plain prose. Output shape (one row/chapter):
 *   { slug, title, part, summary, sections: [{ title, id }], text }
 *
 * The file is written minified and only when its contents change, so it is a
 * stable build artdefact. It is regenerated automatically before `vite build`
 * (see the "build" script in package.json) and can be run by hand:
 *   bun scripts/gen-grammar-search.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parts } from '../src/lib/grammar/toc';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHAPTERS_DIR = path.resolve(ROOT, 'src/lib/grammar/chapters');
const OUT = path.resolve(ROOT, 'static/grammar-search.json');

export interface SearchSection {
	title: string;
	id?: string;
}
export interface SearchDoc {
	slug: string;
	title: string;
	part: string;
	summary: string;
	sections: SearchSection[];
	text: string;
}

const ENTITIES: Record<string, string> = {
	'&amp;': '&',
	'&lt;': '<',
	'&gt;': '>',
	'&quot;': '"',
	'&apos;': "'",
	'&nbsp;': ' '
};

function decodeEntities(s: string): string {
	return s
		.replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
		.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
		.replace(/&[a-z]+;/gi, (m) => ENTITIES[m] ?? m);
}

const squish = (s: string) => s.replace(/\s+/g, ' ').trim();

/** Parse `name="value"` (and single-quoted) attribute pairs out of a tag string. */
function attrsOf(tag: string): Record<string, string> {
	const out: Record<string, string> = {};
	const re = /([a-zA-Z_][\w-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
	let m: RegExpExecArray | null;
	while ((m = re.exec(tag))) out[m[1]] = decodeEntities(m[2] ?? m[3] ?? '');
	return out;
}

/** Strip a chapter source down to its plain running prose. */
function proseOf(src: string): string {
	return squish(
		decodeEntities(
			src
				.replace(/<script[\s\S]*?<\/script>/gi, ' ')
				.replace(/<style[\s\S]*?<\/style>/gi, ' ')
				// <Ex …/> spans several lines and carries its text in attributes; it is
				// harvested separately, so drop it whole here (incl. its attributes).
				.replace(/<[^>]+>/g, ' ')
		)
	);
}

function indexChapter(slug: string, title: string, part: string, summary: string): SearchDoc {
	const src = fs.readFileSync(path.join(CHAPTERS_DIR, `${slug}.svelte`), 'utf8');

	const sections: SearchSection[] = [];
	for (const m of src.matchAll(/<S\b[\s\S]*?>/g)) {
		const a = attrsOf(m[0]);
		if (a.t) sections.push(a.id ? { title: a.t, id: a.id } : { title: a.t });
	}

	// Glossed examples: keep the reader-facing lines (morphemic, translation,
	// literal, surface, original-script, locality, note); skip the gloss line of
	// bare abbreviations and the bibliographic key.
	const exampleText: string[] = [];
	for (const m of src.matchAll(/<Ex\b[\s\S]*?\/>/g)) {
		const a = attrsOf(m[0]);
		for (const k of ['m', 'tr', 'lit', 'ain', 'orig', 'place', 'note']) {
			if (a[k]) exampleText.push(a[k]);
		}
	}

	// Inline dictionary words, e.g. <A w="hannehka" />.
	const inlineWords: string[] = [];
	for (const m of src.matchAll(/<A\b[^>]*?\bw=(?:"([^"]*)"|'([^']*)')/g)) {
		inlineWords.push(decodeEntities(m[1] ?? m[2] ?? ''));
	}

	const text = squish(
		[
			proseOf(src),
			sections.map((s) => s.title).join(' '),
			exampleText.join(' '),
			inlineWords.join(' ')
		].join(' ')
	);

	return { slug, title, part, summary, sections, text };
}

export function buildGrammarSearchDocs(): SearchDoc[] {
	const docs: SearchDoc[] = [];
	for (const part of parts) {
		for (const c of part.chapters) {
			if (!fs.existsSync(path.join(CHAPTERS_DIR, `${c.slug}.svelte`))) continue;
			docs.push(indexChapter(c.slug, c.title, part.title, c.summary));
		}
	}
	return docs;
}

/** Write the index, but only when it has changed. Returns the chapter count. */
export function writeGrammarSearchIndex(): number {
	const docs = buildGrammarSearchDocs();
	const json = JSON.stringify(docs) + '\n';
	const prev = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
	if (json !== prev) fs.writeFileSync(OUT, json);
	return docs.length;
}

if (import.meta.main) {
	try {
		const n = writeGrammarSearchIndex();
		const kb = (fs.statSync(OUT).size / 1024).toFixed(1);
		console.log(`grammar-search: indexed ${n} chapters → ${path.relative(ROOT, OUT)} (${kb} KB)`);
	} catch (err) {
		// Never break the build: fall back to the committed index if regeneration fails.
		console.warn(`grammar-search: index generation skipped (${(err as Error).message})`);
	}
}

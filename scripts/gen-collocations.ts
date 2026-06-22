#!/usr/bin/env bun
/**
 * Build src/lib/data/collocations.json: for each dictionary lemma, the content
 * words it most often sits next to in the Sakhalin (樺太) corpus.
 *
 * A collocate counts when it is (a) itself a dictionary lemma or word-form, and
 * (b) not among the N most frequent corpus tokens (those are function words like
 * taa / ne / manu / kusu that collocate with everything and carry no information).
 * Both immediate neighbours (left and right) are counted.
 *
 * Output: { byLemma: { lemma: [{ w, slug, count }] } } — up to TOP_N per lemma.
 *
 * Run: bun scripts/gen-collocations.ts [path/to/ainu-corpora/data.jsonl]
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dir, '..');
const CORPUS = process.argv[2] ?? path.resolve(ROOT, '..', 'ainu-corpora', 'data.jsonl');
const OUT = path.resolve(ROOT, 'src/lib/data/collocations.json');
const STOP_TOP = 60; // treat the 60 most frequent corpus tokens as function words
const TOP_N = 8; // collocates kept per lemma
const MIN_COUNT = 2; // a collocate must co-occur at least this many times

interface Entry {
	lemma: string;
	id?: string;
	forms?: { lemma: string }[];
}
const entries: Entry[] = JSON.parse(
	fs.readFileSync(path.resolve(ROOT, 'src/lib/data.json'), 'utf8')
);

const norm = (s: string) =>
	s
		.toLowerCase()
		.replace(/[()（）'ʼʔ’`"“”「」『』]/g, '')
		.replace(/[…,.!?？！。、，：；·＝〜~]/g, '')
		.trim();

// normalized surface (lemma OR form) -> entry slug (id ?? lemma)
const toSlug = new Map<string, string>();
for (const e of entries) {
	const slug = e.id ?? e.lemma;
	const k = norm(e.lemma);
	if (k && !toSlug.has(k)) toSlug.set(k, slug);
	for (const f of e.forms ?? []) {
		const fk = norm(f.lemma);
		if (fk && !toSlug.has(fk)) toSlug.set(fk, slug);
	}
}

// Pass 1: global token frequency (to find the function-word stoplist).
const freq = new Map<string, number>();
const sentences: string[][] = [];
for (const line of fs.readFileSync(CORPUS, 'utf8').split('\n')) {
	if (!line.trim()) continue;
	let r: { text?: string; dialect_lv1?: string[] };
	try {
		r = JSON.parse(line);
	} catch {
		continue;
	}
	if (!(r.dialect_lv1 ?? []).includes('樺太') || !r.text) continue;
	const toks = r.text.split(/\s+/).map(norm).filter(Boolean);
	sentences.push(toks);
	for (const t of toks) freq.set(t, (freq.get(t) ?? 0) + 1);
}
const stop = new Set(
	[...freq.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, STOP_TOP)
		.map(([t]) => t)
);

// Pass 2: count neighbour co-occurrences between dictionary words.
const co = new Map<string, Map<string, number>>();
const bump = (a: string, b: string) => {
	if (!co.has(a)) co.set(a, new Map());
	const m = co.get(a)!;
	m.set(b, (m.get(b) ?? 0) + 1);
};
for (const toks of sentences) {
	for (let i = 0; i < toks.length; i++) {
		const a = toks[i];
		if (!toSlug.has(a)) continue;
		for (const j of [i - 1, i + 1]) {
			const b = toks[j];
			if (!b || b === a || stop.has(b) || !toSlug.has(b)) continue;
			bump(a, b);
		}
	}
}

// Reduce to entry slugs (a surface form may map onto an entry slug) and pick top N.
const byLemma: Record<string, { w: string; slug: string; count: number }[]> = {};
let pairs = 0;
for (const e of entries) {
	const m = co.get(norm(e.lemma));
	if (!m) continue;
	const list = [...m.entries()]
		.filter(([, n]) => n >= MIN_COUNT)
		.map(([w, count]) => ({ w, slug: toSlug.get(w)!, count }))
		.sort((a, b) => b.count - a.count)
		.slice(0, TOP_N);
	if (list.length) {
		byLemma[e.id ?? e.lemma] = list;
		pairs += list.length;
	}
}

fs.writeFileSync(OUT, JSON.stringify({ byLemma }) + '\n');
console.log(
	`${sentences.length} Sakhalin sentences · ${Object.keys(byLemma).length} lemmas with ` +
		`collocates · ${pairs} pairs · ${stop.size}-word stoplist`
);
console.log(`wrote ${OUT} (${(fs.statSync(OUT).size / 1024).toFixed(0)} KB)`);

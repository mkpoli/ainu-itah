#!/usr/bin/env bun
/**
 * Build src/lib/data/citations.json: for each dictionary entry, the lexical
 * sources it is attested in. A source counts when the entry's lemma (or one of
 * its word-forms), normalised, matches a headword in that source's wordlist —
 * plus "corpus" when the lemma has glossed corpus examples (examples.json).
 *
 * Sources read from the sibling ../ainu-dictionaries repo. Keys match
 * src/lib/sources.ts. Output: { byLemma: { slug: ["corpus","frpac",…] } }.
 *
 * Run: bun scripts/gen-citations.ts [path/to/ainu-dictionaries]
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dir, '..');
const DICTS = process.argv[2] ?? path.resolve(ROOT, '..', 'ainu-dictionaries');
const OUT = path.resolve(ROOT, 'src/lib/data/citations.json');

interface Entry {
	lemma: string;
	id?: string;
	forms?: { lemma: string }[];
}
const entries: Entry[] = JSON.parse(
	fs.readFileSync(path.resolve(ROOT, 'src/lib/data.json'), 'utf8')
);
const examples = JSON.parse(
	fs.readFileSync(path.resolve(ROOT, 'src/lib/data/examples.json'), 'utf8')
) as { byLemma: Record<string, number[]> };

const base = (s: string) =>
	(s || '')
		.toLowerCase()
		.replace(/[ʼʔ’`'"·\-=\s.,;:()《》]/g, '')
		.replace(/[áàâ]/g, 'a')
		.replace(/[íìî]/g, 'i')
		.replace(/[úùû]/g, 'u')
		.replace(/[éèê]/g, 'e')
		.replace(/[óòô]/g, 'o');
// Chiri's transcription uses x for h and ś/š for s.
const chiri = (s: string) => base(s).replace(/[śš]/g, 's').replace(/x/g, 'h').replace(/[ŋ]/g, 'n');

// (key, dictionary dir, headword column, normaliser)
const DICT_SOURCES: [string, string, string, (s: string) => string][] = [
	['frpac', 'XXXX_FRPAC_Karafuto-Ainu-Wordlist', 'lemma', base],
	['tamura1958', '1958_Tamura_Sakhalin-Ainu-Yamada-Vocabulary', 'lemma', base],
	[
		'chiriWada1943',
		'1943_Chiri-Wada_Sakhalin-Ainu-Anatomy',
		'アイヌ語の単語名（アルファベット）',
		chiri
	]
];

function headwordSet(dir: string, col: string, norm: (s: string) => string): Set<string> {
	const lines = fs.readFileSync(path.resolve(DICTS, dir, 'original.tsv'), 'utf8').split('\n');
	const cols = lines[0].split('\t');
	const idx = cols.indexOf(col);
	const set = new Set<string>();
	if (idx < 0) return set;
	for (const line of lines.slice(1)) {
		const cell = line.split('\t')[idx] ?? '';
		// a cell may list several forms; take the first before a separator
		const k = norm(cell.split(/[;,]/)[0]);
		if (k) set.add(k);
	}
	return set;
}

const sourceSets = DICT_SOURCES.map(
	([key, dir, col, norm]) => [key, headwordSet(dir, col, norm)] as const
);

const byLemma: Record<string, string[]> = {};
let total = 0;
for (const e of entries) {
	const slug = e.id ?? e.lemma;
	const surfaces = [e.lemma, ...(e.forms ?? []).map((f) => f.lemma)].map(base).filter(Boolean);
	const hits: string[] = [];
	if (examples.byLemma[e.lemma]?.length) hits.push('corpus');
	for (const [key, set] of sourceSets) {
		if (surfaces.some((s) => set.has(s))) hits.push(key);
	}
	if (hits.length) {
		byLemma[slug] = hits;
		total += hits.length;
	}
}

fs.writeFileSync(OUT, JSON.stringify({ byLemma }) + '\n');
const perSource: Record<string, number> = {};
for (const list of Object.values(byLemma))
	for (const k of list) perSource[k] = (perSource[k] ?? 0) + 1;
console.log(
	`${Object.keys(byLemma).length} entries cited · ${total} attestations · ` +
		Object.entries(perSource)
			.map(([k, n]) => `${k}:${n}`)
			.join(' ')
);
console.log(`wrote ${OUT}`);

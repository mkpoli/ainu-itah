// Homograph addressing. A lexeme's identity is its stable `id` (e.g. "pa-1"),
// never the bare surface string — two etymologically distinct words can share a
// lemma. Entries with a unique lemma carry no `id` and are addressed by the
// lemma itself. Route (/w/[lemma]), table links, and the sitemap all derive
// their URL slug from here so they agree.

import type { Entry } from './dict';

/** The URL slug for an entry: its homograph id, or the bare lemma if unique. */
export function slugOf(e: Pick<Entry, 'id' | 'lemma'>): string {
	return e.id ?? e.lemma;
}

/** The 1-based sense number parsed from a homograph id ("pa-2" → 2). */
export function senseIndex(e: Pick<Entry, 'id'>): number | undefined {
	const m = e.id?.match(/-(\d+)$/);
	return m ? Number(m[1]) : undefined;
}

const SUPER = '⁰¹²³⁴⁵⁶⁷⁸⁹';
/** Superscript rendering of a sense number (2 → "²"); empty string if none. */
export function senseSuper(e: Pick<Entry, 'id'>): string {
	const n = senseIndex(e);
	return n === undefined ? '' : String(n).replace(/\d/g, (d) => SUPER[Number(d)]);
}

/** Lemmas that occur on more than one entry (i.e. true homographs). */
export function homographLemmas(entries: Pick<Entry, 'lemma'>[]): Set<string> {
	const seen = new Map<string, number>();
	for (const e of entries) seen.set(e.lemma, (seen.get(e.lemma) ?? 0) + 1);
	return new Set([...seen].filter(([, n]) => n > 1).map(([l]) => l));
}

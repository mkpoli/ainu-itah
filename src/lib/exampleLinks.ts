// Turn an Ainu example sentence into clickable tokens, each linking to the /w/
// page of the word it spells (when that word is in the dictionary). Used
// server-side by the entry pages so the corpus examples cross-link the lexicon.

import type { Entry } from './dict';
import { slugOf } from './homographs';

export interface TextToken {
	/** Original token text (with its punctuation) for display. */
	t: string;
	/** Slug of the matched entry, if this token resolves to one. */
	href?: string;
}

// Personal/number proclitics stripped before lookup (mirrors gen-examples.ts) so
// "ku=nukar" still links to nukar.
const CLITICS = new Set(['ku', 'a', 'an', 'e', 'eci', 'ci', 'i', 'un']);

const strip = (s: string) =>
	s
		.toLowerCase()
		.replace(/[()（）'ʼʔ’`"“”「」『』]/g, '')
		.replace(/[…,.!?？！。、，：；·＝〜~]/g, '')
		.trim();

/** Build a normalized surface-form → slug index from all entries and their forms. */
export function buildSurfaceIndex(entries: Entry[]): Map<string, string> {
	const idx = new Map<string, string>();
	const add = (surface: string, slug: string) => {
		const k = strip(surface);
		if (k && !idx.has(k)) idx.set(k, slug);
	};
	for (const e of entries) {
		add(e.lemma, slugOf(e));
		for (const f of e.forms ?? []) add(f.lemma, slugOf(e));
	}
	return idx;
}

/** Candidate keys for a raw token: the token itself, then with proclitics peeled. */
function candidates(raw: string): string[] {
	const t = strip(raw);
	if (!t) return [];
	const out = [t];
	if (t.includes('=')) {
		const parts = t.split('=');
		let i = 0;
		while (i < parts.length - 1 && CLITICS.has(parts[i])) i++;
		out.push(parts.slice(i).join('='), parts[parts.length - 1]);
	}
	return out;
}

/** Split a sentence into display tokens, attaching a slug where one resolves. */
export function linkTokens(text: string, idx: Map<string, string>): TextToken[] {
	return text.split(/(\s+)/).map((t) => {
		if (/^\s+$/.test(t) || t === '') return { t };
		for (const c of candidates(t)) {
			const slug = idx.get(c);
			if (slug) return { t, href: slug };
		}
		return { t };
	});
}

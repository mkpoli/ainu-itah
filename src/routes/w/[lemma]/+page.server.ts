import data from '$lib/data.json';
import examplesData from '$lib/data/examples.json';
import type { Entry } from '$lib/dict';
import type { PageServerLoad } from './$types';

// Imported server-side only, so data.json never reaches the client bundle. Each
// word page is server-rendered (crawlable, bookmarkable) and edge-cached.
const entries = data as unknown as Entry[];

// Every glossed Sakhalin (樺太) corpus sentence, indexed by the dictionary lemma it
// attests (built by scripts/gen-examples.ts; sentences stored once, referenced by
// index). Kept separate from data.json so it doesn't collide with the phased
// dictionary-data work.
export interface Example {
	text: string;
	translation: string;
	dialect: string;
	source: string;
	uri: string;
}
const EXAMPLES = examplesData as { sentences: Example[]; byLemma: Record<string, number[]> };
const DISPLAY_LIMIT = 8;

export const load: PageServerLoad = ({ params, setHeaders }) => {
	const lemma = params.lemma;

	// Exact headword first; fall back to a sub-form, surfacing that form's base
	// entry (so a grammar link to an inflected form still lands somewhere useful).
	let entry: Entry | null = entries.find((e) => e.lemma === lemma) ?? null;
	let viaForm: string | null = null;
	if (!entry) {
		for (const e of entries) {
			if (e.forms?.some((f) => f.lemma === lemma)) {
				entry = e;
				viaForm = lemma;
				break;
			}
		}
	}

	setHeaders({
		'cache-control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800'
	});

	// Examples are keyed by the base entry's lemma, so a sub-form page shows the
	// base entry's attestations too.
	const exIdx = entry ? (EXAMPLES.byLemma[entry.lemma] ?? []) : [];
	const examples = exIdx.slice(0, DISPLAY_LIMIT).map((i) => EXAMPLES.sentences[i]);

	return { lemma, entry, viaForm, examples, exampleCount: exIdx.length };
};

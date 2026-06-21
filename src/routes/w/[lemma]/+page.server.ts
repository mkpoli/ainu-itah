import data from '$lib/data.json';
import examplesData from '$lib/data/examples.json';
import type { Entry } from '$lib/dict';
import { slugOf } from '$lib/homographs';
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

/** A compact pointer to another sense, for disambiguation lists and "other senses" nav. */
export interface SenseLink {
	slug: string;
	lemma: string;
	sense?: string;
	id?: string;
	poses?: string[];
	gloss: string;
}
function senseLink(e: Entry): SenseLink {
	const gloss = [...(e.en ?? []), ...(e.ja ?? [])].slice(0, 3).join(', ');
	return { slug: slugOf(e), lemma: e.lemma, sense: e.sense, id: e.id, poses: e.poses, gloss };
}

export const load: PageServerLoad = ({ params, setHeaders }) => {
	const slug = params.lemma;

	setHeaders({
		'cache-control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800'
	});

	// 1. Exact homograph id ("pa-1"), then 2. exact bare lemma.
	let entry: Entry | null = entries.find((e) => e.id === slug) ?? null;
	let viaForm: string | null = null;
	if (!entry) {
		const sameLemma = entries.filter((e) => e.lemma === slug);
		if (sameLemma.length === 1) {
			entry = sameLemma[0];
		} else if (sameLemma.length > 1) {
			// A bare homographic lemma — show a disambiguation page listing each sense.
			return {
				lemma: slug,
				entry: null,
				homographs: sameLemma.map(senseLink),
				siblings: [] as SenseLink[],
				viaForm: null,
				examples: [] as Example[],
				exampleCount: 0
			};
		}
	}

	// 3. Fall back to a sub-form, surfacing that form's base entry (so a grammar
	// link to an inflected form still lands somewhere useful).
	if (!entry) {
		for (const e of entries) {
			if (e.forms?.some((f) => f.lemma === slug)) {
				entry = e;
				viaForm = slug;
				break;
			}
		}
	}

	// Other senses sharing this surface form, for an "other senses" cross-link.
	const siblings: SenseLink[] = entry
		? entries.filter((e) => e !== entry && e.lemma === entry!.lemma).map(senseLink)
		: [];

	// Examples are keyed by the base entry's lemma (the surface form), so all
	// homographs of a lemma share its attestations.
	const exIdx = entry ? (EXAMPLES.byLemma[entry.lemma] ?? []) : [];
	const examples = exIdx.slice(0, DISPLAY_LIMIT).map((i) => EXAMPLES.sentences[i]);

	return {
		lemma: slug,
		entry,
		homographs: null as SenseLink[] | null,
		siblings,
		viaForm,
		examples,
		exampleCount: exIdx.length
	};
};

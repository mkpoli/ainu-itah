import data from '$lib/data.json';
import type { Entry } from '$lib/dict';
import type { PageServerLoad } from './$types';

// Imported server-side only, so data.json never reaches the client bundle. Each
// word page is server-rendered (crawlable, bookmarkable) and edge-cached.
const entries = data as unknown as Entry[];

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

	return { lemma, entry, viaForm };
};

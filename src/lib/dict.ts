// Shared dictionary entry types (data.json schema v2), used by the dictionary
// table and the per-entry /w/[lemma] pages.

/** A regular word-form demoted under its base entry. */
export interface WordForm {
	lemma: string;
	ja?: string[];
	en?: string[];
	ru?: string[];
	analysis: [string, string][];
	type: 'possessed' | 'case' | 'personal' | 'plural' | 'collective' | 'valency' | 'nominalized';
	frequency: number;
}

/** A typed Sakhalin↔Hokkaido same-etymon correspondence. */
export interface Correspondence {
	lemma: string;
	type: string;
	rules?: string[];
	conf?: number;
	curated?: boolean;
	form?: string;
}

export interface Entry {
	lemma: string;
	/**
	 * Stable per-sense id for homographs (etymologically distinct words sharing a
	 * surface form), e.g. "pa-1", "pa-2". Absent for entries whose lemma is unique;
	 * those are addressed by the bare lemma. This — never the surface string — is
	 * the entry's identity and URL slug (see $lib/homographs).
	 */
	id?: string;
	/** Short disambiguating sense label for a homograph, e.g. "year", "head". */
	sense?: string;
	ja?: string[];
	en?: string[];
	ru?: string[];
	poses?: string[];
	frequency: number;
	cognates?: string[];
	noncognates?: string[];
	forms?: WordForm[];
	structure?: [string, string][];
	frequencyRolled?: number;
	freqSource?: 'marker';
	hokkaido?: Correspondence[];
	hokkaidoNot?: string[];
}

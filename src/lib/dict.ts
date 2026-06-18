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

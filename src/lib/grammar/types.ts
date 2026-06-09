// Shared types for the Sakhalin Ainu reference grammar.

/** A Sakhalin sub-variety an example or statement is anchored to. */
export type Dialect = 'West' | 'East' | 'Sakhalin' | 'Kuril' | 'Hokkaido';

/** A Leipzig glossing abbreviation. */
export interface GlossAbbrev {
	/** The tag as written in glosses, e.g. `PFV`, `INDEF`, `1SG.A`. */
	tag: string;
	/** Plain-English expansion shown on hover. */
	meaning: string;
	/** Optional longer note (Sakhalin-specific usage, etc.). */
	note?: string;
}

/** A bibliographic source. */
export interface BibEntry {
	/** Cite key as used inline and in <Example cite=…>, e.g. `Dal Corso 2025`. */
	key: string;
	/** Full reference string. */
	full: string;
	/** Primarily about which region. */
	region?: 'sakhalin' | 'hokkaido' | 'kuril' | 'general';
	/** True if cited as reported in another work rather than consulted directly. */
	reported?: boolean;
	/** Optional URL / DOI. */
	url?: string;
	/** Path to the digitised source inside the ainu-grammar repo, if any. */
	repoPath?: string;
}

/** One chapter in the table of contents. */
export interface TocChapter {
	/** Display number, e.g. `3` or `12`. */
	num: string;
	/** URL slug under /grammar/, e.g. `phonology`. */
	slug: string;
	/** Chapter title. */
	title: string;
	/** Optional one-line abstract. */
	blurb?: string;
	/** Section headings (for the on-this-page / overview). */
	sections?: string[];
	/** Whether the chapter has been written yet. */
	status?: 'draft' | 'review' | 'stub' | 'planned';
	/** Fact-base keys (.grammar-build/factbase/<key>.md) this chapter draws on. */
	factbase?: string[];
}

/** A top-level part grouping chapters. */
export interface TocPart {
	title: string;
	chapters: TocChapter[];
}

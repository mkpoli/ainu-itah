/**
 * Gloss abbreviations used in interlinear examples, following the Leipzig
 * Glossing Rules (Comrie, Haspelmath & Bickel 2015) with additions specific
 * to the description of Sakhalin Ainu.
 *
 * The Ex component checks every capital-letter gloss tag against this table,
 * so the abbreviations page is guaranteed to cover everything that appears
 * in the grammar.
 */

export const abbreviations: Record<string, string> = {
	'1': 'first person',
	ATTR: 'attributive',
	'1SG': 'first person singular',
	'1PL': 'first person plural',
	'2': 'second person',
	'2SG': 'second person singular',
	'2PL': 'second person plural',
	'3': 'third person',
	'3SG': 'third person singular',
	'3PL': 'third person plural',
	A: 'agent-like argument of a transitive verb',
	ADM: 'admonitive (‘lest’)',
	ADV: 'adverbial(izer)',
	ANTIP: 'antipassive',
	APPL: 'applicative',
	ASS: 'associative plural',
	CAUS: 'causative',
	CL: 'classifier (numeral counter suffix)',
	COMIT: 'comitative',
	COMP: 'complementizer',
	COND: 'conditional',
	CONJ: 'conjunctive (clause-linking) particle',
	COP: 'copula',
	DES: 'desiderative',
	DIM: 'diminutive',
	DIST: 'distal',
	EMPH: 'emphatic',
	EP: 'epenthetic segment',
	EVID: 'evidential',
	EXCL: 'exclusive',
	FIN: 'final (sentence-final) particle',
	FOC: 'focus',
	HORT: 'hortative',
	HUM: 'human (in classifiers)',
	IMP: 'imperative',
	INCL: 'inclusive',
	INDEF: 'indefinite person (the Sakhalin Ainu an-/-an/i- set)',
	INFR: 'inferential evidential',
	INS: 'instrumental',
	INT: 'intensifier',
	INTERJ: 'interjection',
	IPFV: 'imperfective',
	ITR: 'iterative',
	LOC: 'locative',
	MIR: 'mirative',
	NEG: 'negative',
	NMLZ: 'nominalizer/nominalization',
	O: 'object (patient-like argument of a transitive verb)',
	ORD: 'ordinal',
	PASS: 'passive',
	PERS: 'personal (evidential of personal knowledge)',
	PFV: 'perfective',
	PL: 'plural',
	POL: 'polite',
	POSS: 'possessive (the “belonging” form of nouns)',
	PRF: 'perfect',
	PROG: 'progressive',
	PROH: 'prohibitive',
	PROX: 'proximal',
	PURP: 'purposive',
	Q: 'question particle',
	QUOT: 'quotative',
	RECP: 'reciprocal',
	REFL: 'reflexive',
	REP: 'reportative evidential',
	RES: 'resultative',
	S: 'single argument of an intransitive verb',
	SG: 'singular',
	TOP: 'topic',
	VBLZ: 'verbalizer'
};

/**
 * Tags that may appear in glosses but are person–number combinations built
 * from the basic pieces, e.g. 1SG.S, 2PL.A, INDEF.O. The Ex component
 * validates each dot-separated atom, so only the atoms above need entries.
 */

export const dialectLabels: Record<string, string> = {
	WS: 'West Sakhalin',
	ES: 'East Sakhalin',
	SA: 'Sakhalin (dialect not further specified)'
};

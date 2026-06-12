/**
 * Table of contents for the reference grammar.
 *
 * Chapter numbers are derived from array order (1-based). Each chapter is a
 * Svelte component at `$lib/grammar/chapters/<slug>.svelte`. The two appendix
 * pages (abbreviations, references) are rendered from data modules instead.
 *
 * Front matter: slugs listed in FRONT_MATTER are rendered like chapters and
 * appear in the table of contents, but stand outside the numbered sequence
 * (chapterNumber returns 0 for them). This keeps every existing chapter
 * number — and the hard-coded "Chapter N" / "§N.m" references in chapter
 * prose — stable.
 */

export interface ChapterMeta {
	slug: string;
	/** Full chapter title as shown on the page. */
	title: string;
	/** Shorter label for navigation, defaults to title. */
	short?: string;
	/** One-sentence summary for the table of contents. */
	summary: string;
}

export interface Part {
	title: string;
	chapters: ChapterMeta[];
}

export const parts: Part[] = [
	{
		title: 'The language and its setting',
		chapters: [
			{
				slug: 'introduction',
				title: 'Introduction',
				summary:
					'What this grammar sets out to do, the data and conventions it relies on, how to read its glossed examples, and the dialect labels and scholarship behind them.'
			},
			{
				slug: 'language-and-speakers',
				title: 'The language and its speakers',
				short: 'Language and speakers',
				summary:
					'Sakhalin Ainu and its names, its speakers and their history, language contact, endangerment, and documentation.'
			},
			{
				slug: 'dialects-and-sources',
				title: 'Dialects, sources, and previous research',
				short: 'Dialects and sources',
				summary:
					'The West and East coast dialect groups, the major text collections and recordings, and earlier grammatical descriptions.'
			},
			{
				slug: 'orthography',
				title: 'Orthography and transcription',
				summary:
					'How Sakhalin Ainu has been written — in Latin, Cyrillic, and katakana — and the romanisation used in this grammar.'
			}
		]
	},
	{
		title: 'Phonology',
		chapters: [
			{
				slug: 'phonology',
				title: 'Phonology',
				summary:
					'Consonants and vowels, syllable structure, the coda system and h-neutralisation, vowel length, and prosody.'
			},
			{
				slug: 'morphophonology',
				title: 'Morphophonology',
				summary:
					'Alternations at morpheme boundaries: coda alternations, vowel-initial allomorphy, possessive-suffix vowel copying, and sandhi.'
			}
		]
	},
	{
		title: 'Word classes and the noun phrase',
		chapters: [
			{
				slug: 'word-classes',
				title: 'Word classes',
				summary:
					'The parts of speech of Sakhalin Ainu and the criteria that distinguish them.'
			},
			{
				slug: 'nouns-and-possession',
				title: 'Nouns and possession',
				short: 'Nouns and possession',
				summary:
					'Noun morphology, the possessive (“belonging”) form, inalienable and alienable possession, and locative nouns.'
			},
			{
				slug: 'number',
				title: 'Number',
				summary:
					'Nominal plurality with utara and -ahcin, associative plurals, and number in the verb.'
			},
			{
				slug: 'pronouns-and-demonstratives',
				title: 'Pronouns and demonstratives',
				short: 'Pronouns, demonstratives',
				summary:
					'Personal pronouns, the indefinite person, demonstratives, and interrogative–indefinite words.'
			},
			{
				slug: 'numerals',
				title: 'Numerals and quantification',
				summary:
					'The vigesimal numeral system, classifier suffixes, ordinals, and quantifiers.'
			},
			{
				slug: 'postpositions',
				title: 'Postpositions and relational nouns',
				short: 'Postpositions',
				summary:
					'Case postpositions, relational (locative) nouns, and adverbial particles.'
			}
		]
	},
	{
		title: 'The verb',
		chapters: [
			{
				slug: 'verb-structure',
				title: 'Verb structure and transitivity',
				summary:
					'The verbal template, strict transitivity classes, verbal number, and suppletion.'
			},
			{
				slug: 'person-and-alignment',
				title: 'Person marking and alignment',
				summary:
					'The person-marking paradigms, the indefinite person set, portmanteau prefixes, and morphological alignment.'
			},
			{
				slug: 'valency',
				title: 'Valency-changing morphology',
				summary:
					'Causatives, applicatives, the antipassive, reflexive and reciprocal prefixes, and noun incorporation.'
			},
			{
				slug: 'tense-aspect-mood',
				title: 'Tense, aspect, and modality',
				summary:
					'The tenseless verb, aspectual periphrasis with teh an and kusu an, perfect okere, and modal predicates.'
			},
			{
				slug: 'evidentiality',
				title: 'Evidentiality',
				summary:
					'The reportative manu, inferential and sensory evidential constructions, and their interaction with person.'
			},
			{
				slug: 'negation',
				title: 'Negation',
				summary:
					'Standard negation with hannehka, the prohibitive, negative existence, and the history of the negative system.'
			}
		]
	},
	{
		title: 'Syntax',
		chapters: [
			{
				slug: 'copula-and-existence',
				title: 'Copula, existence, and possession clauses',
				short: 'Copula and existence',
				summary:
					'The copula ne, the existential verbs an and okay, locational clauses, and existential possession.'
			},
			{
				slug: 'clause-structure',
				title: 'The simple clause and word order',
				short: 'Clause structure',
				summary:
					'Argument expression and omission, constituent order, adjuncts, and clause types including questions and commands.'
			},
			{
				slug: 'nominalization',
				title: 'Nominalization',
				summary:
					'Nominalization with pe/p, usi, hi, and the possessive-suffix strategy; headless and lexical nominalizations.'
			},
			{
				slug: 'relative-clauses',
				title: 'Relative clauses',
				summary:
					'Prenominal relativization, accessible positions, and the relation between relative clauses and noun incorporation.'
			},
			{
				slug: 'complementation',
				title: 'Complementation',
				summary:
					'Complement clauses with kuni, hi/humi/hawe/ruwe and bare complements; complement-taking predicates.'
			},
			{
				slug: 'clause-linking',
				title: 'Clause linking',
				summary:
					'Conjunctive particles teh, wa, kusu, yayne, cooccurrence with manu, and clause chaining in narrative.'
			},
			{
				slug: 'information-structure',
				title: 'Information structure',
				summary:
					'Topic marking with anah(ka), focus particles, word-order variation, and discourse particles.'
			}
		]
	},
	{
		title: 'The lexicon and language contact',
		chapters: [
			{
				slug: 'language-contact',
				title: 'Language contact and loanwords',
				short: 'Language contact',
				summary:
					'Loanwords from Japanese, the Manchu–Amur trade network, Nivkh, and Russian; their phonological adaptation and morphological integration; and the Cyrillic epistolary register.'
			}
		]
	},
	{
		title: 'Texts',
		chapters: [
			{
				slug: 'texts',
				title: 'Glossed texts',
				summary:
					'Fully glossed Sakhalin Ainu texts: a tuytah told by Asai Take, a letter by Sentoku Tarōji, and an extract from Piłsudski’s materials.'
			}
		]
	}
];

/** Unnumbered front-matter chapters; chapterNumber() yields 0 for these. */
const FRONT_MATTER = new Set(['introduction']);

const allChapters: ChapterMeta[] = parts.flatMap((p) => p.chapters);

/**
 * The numbered chapters, in order; array index + 1 is the chapter number.
 * Front matter is excluded so that adding it never renumbers anything.
 */
export const chapters: ChapterMeta[] = allChapters.filter((c) => !FRONT_MATTER.has(c.slug));

export function chapterNumber(slug: string): number {
	return chapters.findIndex((c) => c.slug === slug) + 1;
}

export function chapterBySlug(slug: string): ChapterMeta | undefined {
	return allChapters.find((c) => c.slug === slug);
}

/** Back-matter pages rendered from data rather than chapter files. */
export const appendices = [
	{ slug: 'abbreviations', title: 'Abbreviations and conventions' },
	{ slug: 'references', title: 'References' }
] as const;

import type { TocPart, TocChapter } from './types';

// Table of contents for the reference grammar — the navigation source of truth
// (sidebar, prev/next, overview) and the chapter→fact-base map used to author
// chapters. Structure follows .grammar-build/design/TOC.md. A chapter links in
// the UI once its /grammar/<slug>/+page.svx exists (detected at build time);
// `status` drives the badge only.

export const TOC: TocPart[] = [
	{
		title: 'Foundations',
		chapters: [
			{ num: '1', slug: 'introduction', title: 'Introduction', status: 'draft', blurb: 'Aims, scope, and how to read the examples, glosses, and citations.', factbase: ['profile-dialects-sources', 'example-bank'] },
			{ num: '2', slug: 'language-and-speakers', title: 'The Language and Its Speakers', status: 'draft', blurb: 'Enchiw: where it was spoken, its place in the Ainuic family, its speakers and sociolinguistic history.', factbase: ['profile-dialects-sources'] },
			{ num: '3', slug: 'dialects-and-sources', title: 'Dialects, Sources, and Philology', status: 'draft', blurb: 'The West- and East-coast subgroups, the documentary record, and how to read it critically.', factbase: ['profile-dialects-sources', 'orthography-transcription', 'example-bank'] },
			{ num: '4', slug: 'orthography', title: 'Orthography and Transcription', status: 'draft', blurb: 'Every record is a transcription: Piłsudski, Chiri/Hattori, Murasaki/modern Latin, katakana, Cyrillic.', factbase: ['orthography-transcription', 'phonology'] }
		]
	},
	{
		title: 'Phonology and Prosody',
		chapters: [
			{ num: '5', slug: 'phonology', title: 'Segmental Phonology', status: 'draft', blurb: 'The vowel and consonant inventories, including the Sakhalin-only coda fricative.', factbase: ['phonology', 'profile-dialects-sources', 'orthography-transcription'] },
			{ num: '6', slug: 'syllable-and-coda', title: 'Syllable Structure and Coda Neutralisation', status: 'draft', blurb: 'The signature process: coda /p t k r/ → x / coda-h, and its consequences.', factbase: ['phonology', 'orthography-transcription'] },
			{ num: '7', slug: 'prosody', title: 'Prosody: Accent and Length', status: 'draft', blurb: 'Distinctive vowel length and the Sakhalin-length ↔ Hokkaido-pitch correspondence.', factbase: ['phonology'] },
			{ num: '8', slug: 'morphophonology', title: 'Morphophonology', status: 'draft', blurb: 'Sandhi, the -rV verb classes, causative attachment, and fossilised vowel harmony.', factbase: ['phonology', 'nominals-possession-number'] }
		]
	},
	{
		title: 'Word Classes',
		chapters: [
			{ num: '9', slug: 'word-classes', title: 'Word Classes', status: 'draft', blurb: 'Chiri’s predicatives, noun subclasses, and the morphological typology of the language.', factbase: ['verb-valency', 'nominals-possession-number', 'particles-adverbs-syntax-discourse', 'tam-evidentiality-copula'] }
		]
	},
	{
		title: 'The Noun Phrase',
		chapters: [
			{ num: '10', slug: 'nouns-and-possession', title: 'Nouns and Possession', status: 'draft', blurb: 'Conceptual vs. possessed (affiliative) forms; the Sakhalin -he generalisation; three possessive constructions.', factbase: ['nominals-possession-number', 'person-marking-alignment', 'phonology'] },
			{ num: '11', slug: 'number', title: 'Number Marking', status: 'draft', blurb: 'The plural suffix -(a)hcin and the word utara/utah.', factbase: ['nominals-possession-number', 'person-marking-alignment'] },
			{ num: '12', slug: 'pronouns-and-demonstratives', title: 'Pronouns and Demonstratives', status: 'draft', blurb: 'Free pronouns, the proximal/distal demonstratives, anaphora, and interrogatives.', factbase: ['particles-adverbs-syntax-discourse', 'person-marking-alignment'] },
			{ num: '13', slug: 'numerals', title: 'Numerals and Quantification', status: 'draft', blurb: 'The inherited vigesimal system, the decimal innovation, classifiers, and quantifiers.', factbase: ['numerals-quantification', 'phonology', 'orthography-transcription'] },
			{ num: '14', slug: 'postpositions', title: 'Postpositions and Relational Nouns', status: 'draft', blurb: 'Case-like postpositions and the relational nouns that build complex adpositions.', factbase: ['particles-adverbs-syntax-discourse', 'nominals-possession-number', 'verb-valency'] }
		]
	},
	{
		title: 'The Verb and the Predicate',
		chapters: [
			{ num: '15', slug: 'verb-structure', title: 'Verb Structure and Transitivity', status: 'draft', blurb: 'The verb template, transitivity classes, verbal number, and incorporation.', factbase: ['verb-valency', 'person-marking-alignment'] },
			{ num: '16', slug: 'person-and-alignment', title: 'Personal Agreement and Alignment', status: 'draft', blurb: 'The S/A/O affix series and the mixed nominative–neutral–inverse alignment.', factbase: ['person-marking-alignment', 'verb-valency', 'profile-dialects-sources', 'example-bank'] },
			{ num: '17', slug: 'valency', title: 'Valency-Changing Morphology', status: 'draft', blurb: 'Causatives, applicatives, reflexive/reciprocal, antipassive, and anticausative.', factbase: ['verb-valency', 'person-marking-alignment', 'profile-dialects-sources'] },
			{ num: '18', slug: 'tense-aspect-mood', title: 'Tense, Aspect, and Mood', status: 'draft', blurb: 'No morphological tense; aspectual periphrasis and modal particles.', factbase: ['tam-evidentiality-copula', 'clause-linking-complex-sentences', 'verb-valency'] },
			{ num: '19', slug: 'evidentiality', title: 'Evidentiality', status: 'draft', blurb: 'The personal-knowledge form, the sensory inferentials, and the reportative.', factbase: ['tam-evidentiality-copula', 'nominalization-relativization-complementation', 'clause-linking-complex-sentences'] },
			{ num: '20', slug: 'negation', title: 'Negation', status: 'draft', blurb: 'The proclitic negator, the rise of analytic negation, prohibitives, and negative existentials.', factbase: ['negation', 'tam-evidentiality-copula', 'particles-adverbs-syntax-discourse'] },
			{ num: '21', slug: 'copula-and-existence', title: 'Copula and Existence', status: 'draft', blurb: 'The copula ne(e) and the existentials an / okay.', factbase: ['tam-evidentiality-copula', 'nominalization-relativization-complementation'] }
		]
	},
	{
		title: 'Syntax',
		chapters: [
			{ num: '22', slug: 'clause-structure', title: 'Clause Structure and Word Order', status: 'draft', blurb: 'Verb-final, head-marking, pro-drop clause structure; adverbs and interjections.', factbase: ['particles-adverbs-syntax-discourse', 'person-marking-alignment', 'tam-evidentiality-copula'] },
			{ num: '23', slug: 'nominalisation', title: 'Nominalisation', status: 'draft', blurb: 'Lexical and clausal nominalisers and the innovative Sakhalin V-poss form.', factbase: ['nominalization-relativization-complementation', 'tam-evidentiality-copula'] },
			{ num: '24', slug: 'relative-clauses', title: 'Relative Clauses', status: 'draft', blurb: 'The prenominal gap strategy, bound-noun heads, and adjunct relativisation.', factbase: ['nominalization-relativization-complementation'] },
			{ num: '25', slug: 'complementation', title: 'Complementation', status: 'draft', blurb: 'Complement-taking predicates, reported speech, and the evidential complement type.', factbase: ['nominalization-relativization-complementation', 'clause-linking-complex-sentences', 'tam-evidentiality-copula'] },
			{ num: '26', slug: 'clause-linking', title: 'Clause Linking and Complex Sentences', status: 'draft', blurb: 'Clause chaining, converbs, adverbial subordination, and conditionals.', factbase: ['clause-linking-complex-sentences', 'particles-adverbs-syntax-discourse', 'tam-evidentiality-copula'] },
			{ num: '27', slug: 'information-structure', title: 'Information Structure', status: 'draft', blurb: 'Topic and focus marking, the V-ka-kii focus construction, and reference tracking.', factbase: ['particles-adverbs-syntax-discourse', 'person-marking-alignment', 'verb-valency', 'example-bank'] }
		]
	},
	{
		title: 'Texts and Reference',
		chapters: [
			{ num: '28', slug: 'sample-texts', title: 'Annotated Sample Texts', status: 'draft', blurb: 'Fully glossed Sakhalin oral-literature and conversational texts, West and East.', factbase: ['example-bank', 'profile-dialects-sources', 'clause-linking-complex-sentences', 'particles-adverbs-syntax-discourse'] },
			{ num: '—', slug: 'abbreviations', title: 'Glossing Abbreviations', status: 'draft', blurb: 'The Leipzig gloss tags used throughout, with expansions.' },
			{ num: '—', slug: 'references', title: 'References', status: 'draft', blurb: 'Sources cited throughout the grammar.' }
		]
	}
];

/** All chapters in reading order, each tagged with its part title. */
export const FLAT_TOC: (TocChapter & { part: string })[] = TOC.flatMap((p) =>
	p.chapters.map((c) => ({ ...c, part: p.title }))
);

export function chapterBySlug(slug: string) {
	return FLAT_TOC.find((c) => c.slug === slug);
}

/** Previous / next chapter for footer navigation. */
export function neighbours(slug: string) {
	const i = FLAT_TOC.findIndex((c) => c.slug === slug);
	return {
		prev: i > 0 ? FLAT_TOC[i - 1] : undefined,
		next: i >= 0 && i < FLAT_TOC.length - 1 ? FLAT_TOC[i + 1] : undefined
	};
}

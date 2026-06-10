import type { GlossAbbrev } from './types';

// AUTO-GENERATED from .grammar-build/design/glossing.md (run .grammar-build/gen.ts).
// The single source of truth for interlinear gloss tooltips. The indefinite /
// 4th-person set (-an / an- / i-) is glossed INDEF (indefinite person); person/number/role portmanteaux use a dot,
// e.g. 1SG.A.
export const GLOSS_ABBREVS: GlossAbbrev[] = [
	{ tag: "1", meaning: "first person" },
	{ tag: "2", meaning: "second person" },
	{ tag: "3", meaning: "third person" },
	{ tag: "4", meaning: "fourth person (Sakaguchi's term for the INDEF set; see INDEF)" },
	{ tag: "SG", meaning: "singular" },
	{ tag: "PL", meaning: "plural (verbal plural stem; nominal plural; the word utara)" },
	{ tag: "DU", meaning: "dual" },
	{ tag: "EXCL", meaning: "exclusive (1st person plural exclusive)" },
	{ tag: "INCL", meaning: "inclusive (1st person plural inclusive)" },
	{ tag: "1SG", meaning: "first person singular" },
	{ tag: "1PL", meaning: "first person plural" },
	{ tag: "2SG", meaning: "second person singular" },
	{ tag: "2PL", meaning: "second person plural" },
	{ tag: "3SG", meaning: "third person singular" },
	{ tag: "3PL", meaning: "third person plural" },
	{ tag: "S", meaning: "intransitive subject (S-series affix)" },
	{ tag: "A", meaning: "transitive subject / possessor (A-series affix)" },
	{ tag: "O", meaning: "transitive object / locative-noun ground (O-series affix)" },
	{ tag: "IO", meaning: "indirect object" },
	{ tag: "INDEF", meaning: "indefinite / fourth person — the -an / an- / i- set" },
	{ tag: "INV", meaning: "inverse (the inverse function of an-)" },
	{ tag: "PASS", meaning: "passive / impersonal-passive reading" },
	{ tag: "COLL", meaning: "collective (the verbal clitic =(a)hci / =ahsi)" },
	{ tag: "PRON", meaning: "free (independent) personal pronoun (synonym of PRO)" },
	{ tag: "PRF", meaning: "perfect" },
	{ tag: "POL", meaning: "polite (e.g. polite imperative)" },
	{ tag: "PTV", meaning: "partitive (the -ke / -ki formant on relational nouns)" },
	{ tag: "PRO", meaning: "free (independent) personal pronoun" },
	{ tag: "PSR", meaning: "possessor" },
	{ tag: "POSS", meaning: "possessed / possessive (the affiliative suffix -hV/-V(hV); also \"possessive\" on pronouns)" },
	{ tag: "PSD", meaning: "possessed-noun suffix (affiliative marker), used when distinguishing it from POSS in prose" },
	{ tag: "PK", meaning: "personal-knowledge evidential (-hV/-Ø)" },
	{ tag: "NMLZ", meaning: "nominaliser / nominalisation (incl. the V-poss form when glossed non-evidentially)" },
	{ tag: "COMP", meaning: "complementiser (nah)" },
	{ tag: "QUOT", meaning: "quotative (nah, nax; also sekor in HA contrast)" },
	{ tag: "REP", meaning: "reportative evidential (manu(u))" },
	{ tag: "INF.RSN", meaning: "inferential, reasoning/trace source (ruwehe ne(e)/ruwehe 'an)" },
	{ tag: "INF.VIS", meaning: "inferential, visual source (sirihi 'an)" },
	{ tag: "INF.NVIS", meaning: "inferential, non-visual source: hearing/smell/touch/taste (humihi 'an)" },
	{ tag: "INF.AUD", meaning: "inferential, auditory source (hawehe 'an)" },
	{ tag: "COP", meaning: "copula (ne/nee)" },
	{ tag: "EXIST", meaning: "existential / locational verb (an SG, okay PL) when glossed as such" },
	{ tag: "NEG", meaning: "negation / negator (ham=, hannehka, suppletive negatives, focus ka … NEG)" },
	{ tag: "PROH", meaning: "prohibitive (hanka(yki))" },
	{ tag: "CAUS", meaning: "causative / transitiviser (-re, -te, -ka, -ke, -yara, -V)" },
	{ tag: "ANTIC", meaning: "anticausative (-ke; si-)" },
	{ tag: "APPL", meaning: "applicative (e-, o-, ko-)" },
	{ tag: "REFL", meaning: "reflexive (yay-, si-)" },
	{ tag: "RECP", meaning: "reciprocal (u-)" },
	{ tag: "ANTIP", meaning: "antipassive / general-object (i-)" },
	{ tag: "TR", meaning: "transitiviser / \"do, make\" (verbalising -ki/kara light verb)" },
	{ tag: "EP", meaning: "epenthetic segment (e.g. inserted -i-, -n-)" },
	{ tag: "DEI", meaning: "deictic element (e.g. he- 'head' marking goal-directed motion)" },
	{ tag: "CL", meaning: "numeral classifier (general)" },
	{ tag: "CL.PERS", meaning: "person classifier (-aynu; HA -n/-iw)" },
	{ tag: "CL.INAN", meaning: "inanimate / thing classifier (-p/-pe)" },
	{ tag: "ITER", meaning: "iterative (-pa; ranke)" },
	{ tag: "PROG", meaning: "progressive (kor an, kusu an)" },
	{ tag: "DUR", meaning: "durative (kusu kara, ea)" },
	{ tag: "RES", meaning: "resultative (wa an, hine an, kane an)" },
	{ tag: "PFV", meaning: "perfective (teh an)" },
	{ tag: "CONCL", meaning: "conclusive (wa isam, wa okere)" },
	{ tag: "PROSP", meaning: "prospective (kus-ki, kus-ne)" },
	{ tag: "IPFV", meaning: "imperfective (an after a verb)" },
	{ tag: "PC", meaning: "punctual / aoristic stem (e.g. singular existential/motion stems)" },
	{ tag: "ADV", meaning: "adverb / adverbialiser (-no, -onne, etc.)" },
	{ tag: "CVB", meaning: "converb (generic medial-verb linker)" },
	{ tag: "SS", meaning: "same-subject (converb/clause-chaining where subject is shared)" },
	{ tag: "CONJ", meaning: "conjunctive / clause-linking particle (wa, teh, hine, ike)" },
	{ tag: "CONC", meaning: "concessive (yahka)" },
	{ tag: "CAUF", meaning: "causal-final (kusu 'because/in order to'); written CAU.FIN in some sources" },
	{ tag: "COND", meaning: "conditional ('anah, ciki, (h)ike)" },
	{ tag: "TOP", meaning: "topic (anak(ne), neampe~nampe)" },
	{ tag: "FOC", meaning: "focus particle (ka in the V-ka-kii construction)" },
	{ tag: "ADD", meaning: "additive particle (ka, naa)" },
	{ tag: "RESTR", meaning: "restrictive 'only' (patek/pateh/pate)" },
	{ tag: "TERM", meaning: "terminative 'until' (pakno)" },
	{ tag: "LOC", meaning: "locative (ta, otta, oxta, or-ta)" },
	{ tag: "ALL", meaning: "allative (un, ene, onne, ne)" },
	{ tag: "ABL", meaning: "ablative; agent-of-passive 'by' (orowa, oro, ora)" },
	{ tag: "ELA", meaning: "elative 'out of' (where distinguished from ABL)" },
	{ tag: "INS", meaning: "instrumental (ani)" },
	{ tag: "COM", meaning: "comitative (tura(no))" },
	{ tag: "PROL", meaning: "prolative 'along, through' (peka, kari, okakari)" },
	{ tag: "COMPV", meaning: "comparative 'than' (akkari)" },
	{ tag: "SIM", meaning: "similative 'like, as' (kunne, neno/neeno, korachi)" },
	{ tag: "GEN", meaning: "genitive / adnominal relation" },
	{ tag: "DESID", meaning: "desiderative 'want' (rusuy)" },
	{ tag: "OBLIG", meaning: "obligation/necessity marker (where attested, e.g. kun)" },
	{ tag: "IMP", meaning: "imperative (yan, waa, kane/kanne plain)" },
	{ tag: "IMP.POL", meaning: "polite imperative (kanne)" },
	{ tag: "HORT", meaning: "hortative (\"let's\": roo/roh, anaa)" },
	{ tag: "OPT", meaning: "optative ('okaa)" },
	{ tag: "PROB", meaning: "probabilitive / dubitative-future (nankor(o), nanko(o), nee nankor)" },
	{ tag: "MIR", meaning: "mirative (wanaa)" },
	{ tag: "EXCLM", meaning: "exclamative / admirative (noo)" },
	{ tag: "FIN", meaning: "sentence-final particle (na, naa, aa, waa, etc.; generic)" },
	{ tag: "ASRT", meaning: "assertive 'indeed, you know' (na)" },
	{ tag: "Q", meaning: "interrogative / question marker (ya, hee, hii, -he, hetaneya)" },
	{ tag: "FP", meaning: "final particle (generic, where role unspecified)" },
	{ tag: "EMPH", meaning: "emphatic (wen- intensifier; ko(h); yay/oha 'just')" },
	{ tag: "RETH", meaning: "rhetorical-question final particle (yawa)" },
	{ tag: "REL", meaning: "relativiser / relative-clause marker (where overt; mostly gap strategy)" },
	{ tag: "DETR", meaning: "detransitive (cover term where direction of valency change is unspecified)" },
	{ tag: "name", meaning: "proper name (in glosses, e.g. Tahkonanna)" },
	{ tag: "LW", meaning: "loanword element (e.g. kunkutu, tanku numeral bases)" },
	{ tag: "?", meaning: "unanalysed / uncertain morpheme (kept from source; flagged in prose)" }
];

const GLOSS_MAP = new Map(GLOSS_ABBREVS.map((g) => [g.tag, g]));

/** Look up a single gloss tag (exact match). */
export function lookupGloss(tag: string): GlossAbbrev | undefined {
	return GLOSS_MAP.get(tag);
}

/**
 * Decide whether a gloss token is a grammatical category (rendered in small
 * caps with a tooltip) rather than a lexical translation. e.g. `1SG.A`, `PFV`,
 * `NMLZ` -> true; `house`, `see` -> false.
 */
export function isGrammaticalGloss(token: string): boolean {
	const core = token.replace(/[()[\].:=\-/\d]/g, '');
	if (core.length === 0) return /\d/.test(token); // pure number-person tag like "3"
	return core === core.toUpperCase() && /[A-Z]/.test(core);
}

// Expand one atomic gloss segment: strip surrounding ()/[] then resolve, with a
// fallback for glued person-number-clusivity-role tags such as `1SG`, `2SG.A`.
function expandAtom(seg: string): string {
	const s = seg.replace(/^[\[(]+|[\])]+$/g, '');
	const whole = lookupGloss(s);
	if (whole) return whole.meaning;
	const m = s.match(/^([1-4])(SG|PL|DU)?(EXCL|INCL)?(A|S|O)?$/);
	if (m) {
		const parts = [m[1], m[2], m[3], m[4]]
			.filter((p): p is string => Boolean(p))
			.map((p) => lookupGloss(p)?.meaning ?? p);
		if (parts.length) return parts.join(' ');
	}
	return s;
}

/** Plain-English expansion of a gloss token for tooltips. Composite tags such as
 *  INF.RSN resolve whole; portmanteaux (1SG.A>2SG.O, 3S.A/REFL, (PL)) split on
 *  . / > and expand part by part. */
export function expandGloss(token: string): string {
	const whole = lookupGloss(token);
	if (whole) return whole.note ? `${whole.meaning} - ${whole.note}` : whole.meaning;
	return token
		.split(/[.\/>]/)
		.filter(Boolean)
		.map((seg) => expandAtom(seg))
		.join(' \u00b7 ');
}

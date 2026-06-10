/**
 * Hokkaido -> Sakhalin Ainu sound-correspondence engine.
 *
 * TypeScript port of `ainu-morpheme-database/sakhalin/apply_rules.py`, driven
 * by the machine-readable rule table `src/lib/data/sound_rules.json`.
 *
 * NOTE ON THE DATA FILE: `src/lib/data/sound_rules.json` is a generated
 * artifact synced verbatim from `ainu-morpheme-database/sakhalin/sound_rules.json`
 * (the source of truth). Do NOT hand-edit the copy here — edit the morpheme
 * database and re-copy the file.
 *
 * Pipeline semantics (mirroring apply_rules.py exactly):
 *   - only rules with `regularity === "regular"`, a non-null `pattern`, and
 *     `direction` of "hok->sakh" or "both" participate;
 *   - rules whose `dialectGate.exclude` contains the target dialect are
 *     skipped (the site uses the West-Sakhalin baseline, matching the
 *     grammar's West-foregrounded editorial line);
 *   - the surviving rules are applied in ascending `order` with
 *     replace-all semantics (Python `re.sub`);
 *   - morpheme/clitic separators `-` and `=` are transparent to the rules'
 *     vowel tests and are stripped from the output; spaces are word
 *     boundaries and are preserved.
 *
 * Regex dialect notes (Python `re` -> JS `RegExp`):
 *   - all active patterns use only lookahead/lookbehind, character classes
 *     and alternation — valid as-is in JS (lookbehind needs ES2018);
 *   - replacement backreferences `\1` (Python) become `$1` (JS), and any
 *     literal `$` must be escaped as `$$` — handled by
 *     `pythonReplacementToJs` below;
 *   - Python `re.sub` replaces every match, so each compiled RegExp gets
 *     the `g` flag;
 *   - Python `$` also matches before a trailing newline while JS `$`
 *     (without `m`) matches only at the very end — equivalent here because
 *     forms never contain newlines; `\s` differences between the engines
 *     are likewise irrelevant for the ASCII house orthography.
 *
 * The pipeline is idempotent on already-Sakhalin forms (verified against
 * the Python oracle), which is what makes it safe for search normalisation.
 */
import soundRules from '../data/sound_rules.json';

type SoundRule = {
	id: string;
	direction: string;
	pattern: { from: string; to: string } | null;
	order: number;
	regularity: string;
	dialectGate: { exclude?: string[] } | null;
};

/** Default target dialect: the grammar's West-Sakhalin baseline. */
const DIALECT = 'sakhalin-west';

/** Translate a Python `re.sub` replacement string to JS `String.replace`. */
function pythonReplacementToJs(replacement: string): string {
	return replacement.replace(/\$/g, '$$$$').replace(/\\(\d+)/g, '$$$1');
}

/**
 * The mechanically applicable rules in application order, with patterns
 * precompiled once at module scope. Mirrors `active_rules()` in
 * apply_rules.py for the West baseline.
 */
const PIPELINE: ReadonlyArray<{ id: string; from: RegExp; to: string }> = (
	soundRules as SoundRule[]
)
	.filter(
		(rule) =>
			rule.regularity === 'regular' &&
			(rule.direction === 'hok->sakh' || rule.direction === 'both') &&
			rule.pattern !== null &&
			!(rule.dialectGate?.exclude ?? []).includes(DIALECT)
	)
	.sort((a, b) => a.order - b.order)
	.map((rule) => ({
		id: rule.id,
		from: new RegExp(rule.pattern!.from, 'g'),
		to: pythonReplacementToJs(rule.pattern!.to)
	}));

/** Morpheme/clitic separators: annotation, not phonology (cf. apply_rules.py). */
const SEPARATORS = /[-=]/g;

/**
 * Predict the (West-baseline) Sakhalin form of a possibly
 * morpheme-segmented Hokkaido form. Pure, synchronous and idempotent on
 * forms that are already Sakhalin.
 */
export function extrapolateSakhalinFromHokkaido(word: string): string {
	let result = word;
	for (const rule of PIPELINE) {
		result = result.replace(rule.from, rule.to);
	}
	return result.replace(SEPARATORS, '');
}

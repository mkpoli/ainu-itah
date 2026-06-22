# Dictionary data model

## Single source of truth

`src/lib/data.json` **is** the dictionary. It is hand-curated and edited
directly. The original corpus-derived generator (in the sibling
`ainu-corpora-process` / `ainu-morpheme-database` repos) is **retired**: the
upstream source it read is frozen, so re-running it yields nothing new and would
overwrite curation. Do not regenerate `data.json` from it. (Historical context
for how the data was first bootstrapped lives in the project memory.)

Edit `data.json` by hand; every change is a reviewable git diff. The schema is
defined in `src/lib/dict.ts` (`Entry`, `WordForm`, `Correspondence`).

### Entry shape (essentials)

- `lemma` — romanised headword. **Not** the identity for homographs.
- `id`, `sense` — for homographs only: a stable id (`pa-1`) that is the entry's
  identity and URL slug, plus a short disambiguator. Unique lemmas omit both and
  are addressed by the bare lemma. See `src/lib/homographs.ts`.
- `ja` / `en` / `ru` — gloss lists.
- `poses` — part-of-speech codes (one canonical code per category; labels and
  category grouping live in `messages/*.json` as `pos_*` / `pos_cat_*`).
- `frequency` (+ `frequencyRolled`, `freqSource: "marker"`) — corpus counts.
- `forms` — demoted word-forms with their own `analysis` and `type`.
- `structure` — interlinear morpheme/gloss breakdown of a lexicalised compound.
- `hokkaido` / `cognates` / `noncognates` — Sakhalin↔Hokkaidō correspondences.

## Derived data — kept _internal_ generation

What stays is generation that runs **on our own data / the corpus**, never on
the retired upstream source. These produce git-tracked sidecars (regenerate when
the corpus or `data.json` changes); they are inputs to the site, not the dictionary:

| Sidecar                          | Built by                                     | Contents                                                                    |
| -------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------- |
| `src/lib/data/examples.json`     | `bun scripts/gen-examples.ts`                | every translated 樺太 corpus sentence, indexed by the lemma/form it attests |
| `src/lib/data/collocations.json` | `bun scripts/gen-collocations.ts`            | top content-word collocates per lemma (function-word-filtered)              |
| `static/grammar.pdf`             | `bun run pdf` (`scripts/gen-grammar-pdf.ts`) | the printable grammar book (needs `pandoc` + `typst`)                       |

Both JSON sidecars are `.prettierignore`d. They are loaded server-side only
(`/w/[lemma]` pages, `dictionary.json` endpoint) so the heavy data never enters
the client bundle.

## Feeding data out

`data.json` is intended to be consumable by other infrastructure (the Ainu MCP,
sister sites). Treat it as the canonical public artefact of the Sakhalin lexicon.

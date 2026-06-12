# Grammar — items to verify against primary sources

Open questions surfaced by adversarial model review (GPT-5.5, Gemini 2.5 Pro, …).
These need a source check or an analytical decision before changing; the obvious,
self-contained fixes have already been applied.

## Glossing / analysis decisions
- [ ] **person-and-alignment** — in `eci-ko-urenka-re-yan` (Piłsudski text 25; Sakaguchi
  2024 ex. 3-38) the final `-yan` is glossed `1.A`, but the surrounding prose endorses
  Sakaguchi's analysis that `-(y)an` marks **2nd-person plurality, whatever its role**.
  Decide the glossing convention for the discontinuous `eci-…-yan` form (this sits on the
  disputed inverse-vs-Sakaguchi analysis); align gloss and prose.
- [ ] **negation** — `hanna` in `hanna mawa-an-ike` is glossed `NEG` but described as an
  apprehensive 'lest'. Consider the `ADM` (admonitive) atom, which already exists, if the
  apprehensive analysis is firm.
- [ ] **negation** — caritive is given as `hamo ~ hamu`, but one example has bare `ham ipe`.
  Confirm whether that token is plain negation (fine) or a distinct bare-`ham` caritive.

## Source-form checks
- [ ] **morphophonology / nouns-and-possession** — monosyllabic `-he`: §71 vs §72 of Chiri
  1942 appear to disagree on whether `kuu`→`kuu-he` (retained) or `ku-he` (shortened). Now
  presented as a variable rule with the attested `reehe` as the unshortened case; verify
  which Chiri section says what.
- [x] **verb-structure** `tampe huci ku-kore` (Chiri §68) — RESOLVED (Chiri 1942 OCR, l.1019):
  Chiri quotes Kindaichi's 摘要 p.51 with the genuine form `tampe huči ku-kore na`, and uses
  `kore` in his own example too (`tun eči-ne ǔa a-eči-kore`). The chapter already does the right
  thing — presents Sakhalin `ku-konte` as primary and explicitly flags `ku-kore` as Chiri's
  cited pan-Ainu shape (verb-structure.svelte l.203–204). Changing it to `ku-konte` would
  misquote the source; the flag is correct. No change.
- [ ] **verb-structure** — `ne` called "the single underived verb that takes a complement
  rather than an object" (Chiri §§27, 32). Verify whether `ye` 'say' / `ramu` 'think' also
  qualify; if so, soften "single".
- [ ] **verb-structure** — reconcile the singular 'come' forms: West `eh (ek-)` vs East
  `eki ~ iki` are both given without relating them.
- [x] **phonology** — coda `*t` after `i` → `s` is ATTESTED (Hattori 1964, entry 86 'elbow'):
  underlying `sittok` surfaces as Sakhalin `sistoh` — `sit`→`sis` (`*t`/i → s) plus `tok`→`toh`
  (`*k` → h). The grammar's own coda rule predicts exactly this, and Hattori attests it. Rule
  confirmed for `*t`, not only `*k`/`*p`.
- [x] **phonology** — `sahka` 'chopsticks' — VERIFIED CORRECT (Hattori 1964 + FRPAC Karafuto
  wordlist): both give Sakhalin/Rayciska `sahka` = 箸 'chopsticks' (vs Hokkaidō `pasuy`). The
  Gemini 'summer' reading is wrong. No change.

## Factual inconsistencies needing a source check (from Fable-5 review)
- [x] **Sentoku Tarōji birth year** — RESOLVED: reference materials give 1872–1929; texts'
  "1871" corrected to 1872 (orthography was already right).
- [ ] **Sentoku place** — still open: "of Otasan" (texts §26.2, l.204) and all example tags
  use Otasan, but l.207 says he "wrote three letters from Naybuci". Could both hold (origin
  vs place of writing); confirm where the letters were written and make the tags consistent.
- [x] **Dobrotvorsky appendix** — RESOLVED: texts §26.4 (which glosses the material) and
  dialects §2.2 both describe TWO pieces (Ciwokanke's speech + a dialogue); orthography's
  "three (a farewell address and two reconciliation dialogues)" was the outlier → corrected to
  two.
- [~] **Asai Take corpus size/dates** — PARTLY CHECKED: the local corpus has exactly 54
  numbered texts (001–054), so "54 tales" is right and `murasaki2001:text 92` (numerals) is a
  bad citation (no text 92 exists). Still need the published edition to find that example's
  true text number. Dates: RESOLVED — corpus `recorded_at` fields run 1984-04-17 … 1991-05-04
  (text 40 = 1990-04-07); dialects §2 "1986–1988" corrected to 1984–1991.
- [x] **numerals `asikne`** — RESOLVED: Table 1 gives Sakhalin `asne ~ asisne` and §10.2 prose
  uses `asisne`; the lone `asikne` in the twenty-five example was the Hokkaidō shape → `asisne`.
- [ ] **person-and-alignment `-(y)an` gloss** (also from GPT-5.5) — Ex with `eci-…-yan` glosses
  the suffix `1.A`, another Ex glosses `-an` as `2PL.A`, and the table labels `eci-…-yan`
  "1.A (KU/CI)"; the adopted Sakaguchi analysis says `-(y)an` marks 2nd-person plurality.
  Pick ONE convention across the chapter (entangled with the inverse-vs-Sakaguchi debate).
- [ ] **`kun(i)` gloss** — 'going.to' (person-and-alignment, TAM) vs `COND` (complementation,
  negation, relative-clauses). Decide one label (prospective vs conditional-irrealis) or
  distinguish two morphemes explicitly.
- [x] **morphophonology `sistoh` 'elbow'** — VERIFIED CORRECT (Hattori 1964, entry 86 'ひじ'):
  general Sakhalin (樺太) is `sistoh, -kihi` → possessed `sistokihi`, exactly the grammar's form.
  Fable's claim that Hattori has `sittoh`/`sittokihi` is wrong; `síttok` is the Taraika/Hokkaidō
  shape, but West/general Sakhalin metathesises to `sistoh` (regular coda `*t`/i → s, `*k` → h).
  Not corrupt. No change.
- [ ] **pronouns `taan` "far distal"** — `taan` is transparently `ta-an` (proximal/medial root
  `ta-`); a "far distal" built on it vs distal `tara(-an)` needs a source (Murasaki 2025).

## Glossing-convention decisions (from DeepSeek-V4 / GPT-5.5 round-2)
- [ ] **possessed `-hV` glossed three ways** — `NMLZ` (nouns-and-possession), `PERS`
  (evidentiality perception-noun construction), `POSS` (nominalization). The grammar says it
  is one form extended from nouns to verbs; decide whether to gloss it uniformly or document
  the context-sensitive labels deliberately.
- [ ] **texts gloss hygiene** — a `?` gloss ("one kin-? COP") and parenthesised `(INDEF.O=)`
  in texts §26 are not clean Leipzig; resolve or annotate the uncertainty explicitly.
- [ ] **`u-sam` homophony** — valency: 'marry each other' (< `sam` 'marry'); postpositions:
  'next to each other' (< relational `sam` 'side'). Add a note distinguishing the two `sam`.
- [ ] **`ani(hi)` labelled 3SG** but also described as a respectful 2nd-person address
  (pronouns §9.1.1) — note the honorific use or relabel.
- [ ] **orthography normalisation policy** — §3.4 says "we never normalise", yet the Sentoku
  morphemic line restores devoiced vowels (`цкін`→`cikin`). Distinguish phonemic restoration
  from dialect normalisation in the policy statement.
- [ ] **relative-clauses oblique stranding** (GPT-5.5) — the strandable set `ani/tura/pahno`
  (and `onne` for dative) is given as the Sakhalin counterpart of Bugaeva's Hokkaidō set;
  supply Sakhalin-attested stranding tokens or flag the inventory as Hokkaidō-based contrast.

## More (from Opus round)
- [ ] **`ucaskoma` vs `ucaskuma` — BIGGER than a spelling pick (OCR-checked).** The authoritative
  source (Dal Corso in Bugaeva 2022 Handbook) spells the Sakhalin genre term **`upaskuma`**
  (with *p*: "Legends are called upaskuma, oi, ikopepeka…"), and Piłsudski's own Materials OCR
  uses **`oi`** for his tales, not any `uc/pask-` form. So the grammar's `ucaskoma`/`ucaskuma`
  (with *c*) is internally inconsistent AND may be the Hokkaidō shape (Hokkaidō `ucaskuma`) used
  for a Sakhalin term whose attested forms are `upaskuma`/`oi`. Needs an expert decision on the
  right Sakhalin form before changing — do not auto-align the two c-spellings.
- [x] **Piłsudski recording dates** — NON-ISSUE on inspection: phonology and texts both scope
  "1903–04" explicitly to the *east-coast* texts (a subset), while the introduction's
  "1902–1905" / dialects' "1896 and again 1902–1905" describe the whole fieldwork. Consistent
  at different granularities; no change needed.
- [ ] **`murasaki1976:95` at evidentiality §16.6** was changed to `murasaki1979:95` to match the
  other two citations of the same `ku=ye-he sunke` sentence — but confirm which year is right
  at the source (1979 = grammar, 1976 = text collection; both "p. 95" was the red flag).

## Canon / transcription / glossing consistency (from Fable-5 round 2 — deferred)
- [ ] **Sakhalin coda shapes for citation forms** — several still appear in Hokkaidō shape vs
  the grammar's own coda rules: `sik` 'eye (conceptual)' (nouns Table 1; surface free form is
  `sis`), formal nouns `-p`/`kur` (Sakhalin `-h`/`kuru~kuh`), `eaykap` (negation; vs `eaykah`
  in TAM/complementation). Decide per item whether to use the Sakhalin surface form or flag the
  cited underlying form explicitly.
- [x] **`tama in=konte`** — RESOLVED: the grammar's own convention (dialects §2.1.2 "in- is the
  exclusive first-person plural object prefix"; morphophonology Ex 8) glosses `in-` as
  1PL.EXCL.O, so the texts chapter's `jewel 1SG.O=give` was the outlier → aligned to
  `bead 1PL.EXCL.O=give`.
- [x] **postpositions internal §-numbering off by one** — FIXED. The auto-numberer counts the
  overview `<S t="The case-particle system">` as §11.1, so every case particle is +1 vs the
  prose's manual numbers (which started counting at the first real particle). Corrected all six
  references: intro "(§11.1–§11.7), relational nouns (§11.8), boundary (§11.9)"; `kasketa` forms
  →§11.8; ene examples →§11.8; comitative note →§11.6; overlap note →§11.9.
- [~] **place/speaker spelling canon** — FIXED `Tunaychi`→`Tunayci`, `Otasuh`→`Odasu`. STILL
  OPEN: `Jasinoske ~ Yasinoske` (narrator name), `Nairo ~ Nayro`, and **`Taraytomari`** — do NOT
  assume it is a typo of `Tarantomari` (west); it is paired with Nayro (northeast) in numerals
  and may be a distinct Taraika-area place. Verify before unifying.
- [ ] **plural `=hci` notation** — `=hci` vs `-hci` vs `=ahci` vs `-ahci` across chapters;
  settle clitic-vs-suffix notation to match the prose ("plural clitic =hci").
- [ ] **`maskin … kun ki kusu` sentence** glossed differently in TAM §15.4 vs negation §17.2
  (PURP/because + lexical glosses) — unify beyond the TODO'd `kun` issue.
- [ ] **misc one-liners** — [`cahraku` etymology RESOLVED: phonology aligned to the
  language-contact account, ratcaku < 蠟燭 Chinese via Japanese.] `imi-yehe` vs `imiye-he`; clause-linking Ex 3
  one-off labels PFV/CONJ; copula Ex 3 keeps the `ku'ani` apostrophe against the drop-apostrophe
  policy; numerals Table 1 caption "identical except 4, 5, 9" but row 7 varies (`arawan ~ aruwan`).
- [x] **Rousselot "London"** — VERIFIED CORRECT (Bugaeva 2022 Handbook): Rousselot consulted
  Piłsudski at the **1910 Anglo-Japanese Exhibition in London**, where ten Ainu were brought as
  informants. Fable and Sonnet both wrongly assumed Paris (his Collège de France lab); the
  grammar's "London" is right. No change.
- [x] **`he-pen-u` 'raise one's face'** — VERIFIED CORRECT (Chiri 1942 『アイヌ語法研究』 OCR):
  Chiri explicitly lists the prefixal roots that form intransitives — "he-「顔」 ho-「尻」 si-「自身」
  u-「互」" — and gives "pen 上。pen-u 上げる。" So the segmentation is genuinely `he-` ('face') +
  `pen-u` ('raise'), NOT a corruption of `hepuni`. Fable/Opus suspicion refuted. No change.
- [ ] **UNCERTAIN, verify against sources** — `mat kayki` vs expected `mah` (person Ex 7).
  OCR search of Chiri 1942 and Piłsudski 1912 for `mat kayki`/`mah` returned no hit; needs a
  source not available locally, or a dialectological decision (defer).

## From Sonnet round (deferred / verified)
- [x] **`pasuy` 'chopsticks'** — CHECKED, CORRECT as-is. Sonnet flagged it as 'prayer stick',
  but that confused `pasuy` (chopsticks) with `ikupasuy` (libation stick, lit. "drinking-
  chopstick") — the derivation confirms `pasuy` = chopstick. `sahka` is simply the other
  (native) Sakhalin word for chopsticks; both can coexist. No change.
- [ ] **`hVV` final particle vs `-hV` evidential** — information-structure §24.5 lists
  sentence-final `hii/hee` as a "strengthening discourse particle" (grouped with kanne/waa),
  but nominalization §20.5 / evidentiality §16.6 adopt Bugaeva 2016's analysis that sentence-
  final `-hV` is the possessive nominalization in insubordinated use. Reconcile, or cross-
  reference, or argue they are distinct homophones.
- [ ] **Piłsudski "voicing commoner in the west"** (phonology, voicing §) — Piłsudski's corpus
  is east-coast only, so crediting him with a west-coast voicing observation is internally odd.
  Verify what Dal Corso 2024:61 actually attributes to him; reattribute or reword if needed.

## From Opus round 2 (deferred)
- [ ] **Dobrotvorsky corpus dialect tag** — the 1867–1872 Kusunnay material is tagged `WS` in
  ~11 chapters (and is the introduction's canonical WS specimen) but `SA` for several
  person-and-alignment examples and all of texts §26.4, where the prose argues it "patterns
  East". Same west-central source, contradictory tags. Decide one tag and apply it uniformly
  (a real dialectological call: geographically west-central but with East-patterning features).
- [ ] **`Sambaku kuani ohta tampaku in-konte`** (person-and-alignment) — `ohta` is glossed "at"
  but unaccounted for in the free translation; `kuani ohta` is likely the dative recipient
  ("to me") doubling `in-`. Reflect it in the translation or add a note.
- [ ] **`repohpe` 'seal'** (negation) — left unsegmented (`repo(t)-pe` 'open-sea-thing') against
  the otherwise full segmentation; minor.

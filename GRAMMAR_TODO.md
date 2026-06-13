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
- [ ] **negation** — `hanna` in `hanna mawa-an-ike` is glossed `NEG` but described as apprehensive
  'lest'. AUTHOR DECISION (sharpened): the functional case against `NEG` is strong — here `hanna`
  does NOT negate the verb ('lest I starve' ≠ 'I do not starve'), it marks apprehensive modality,
  so `NEG` is functionally misleading. Against relabeling: (a) it depends on how Dal Corso 2025:54–55
  analyses `hanna` (etymologically `han` + `na`, a negator form), and (b) the existing atom is `ADM`
  'admonitive', whereas the prose says 'apprehensive' — related but not the same category, so a new
  `APPR` atom might be cleaner. Decide: keep `NEG` (gloss-the-form) + prose function, or introduce
  an apprehensive gloss. Not auto-changed — convention call. INVESTIGATED (no change made): the
  current `NEG` is internally CONSISTENT and defensible — `hanna` is listed in negation §17's
  negator table (row: "East coast (Hunup); apprehensive, negative intention"), so it is classified
  as a negator, and the apprehensive function is already flagged three ways (prose §17.x, the Ex
  note "Apprehensive hanna", and the table). This mirrors the grammar's stated convention "we keep
  the conventional gloss … while flagging this mismatch" (person-and-alignment §13.1, for 1PL.EXCL).
  So the choice is genuinely the author's synchronic-status call: gloss `NEG` (hanna = a negator-
  derived form, current) vs gloss the function. NB the `ADM` atom ('admonitive (lest)') is defined
  in abbreviations.ts but currently UNUSED — if the functional gloss wins, wire `hanna` to `ADM`
  (or add `APPR`); if `NEG` stays, consider removing the dead `ADM` entry.
- [x] **negation** — bare `ham ipe` in the caritive section — RESOLVED: the token is the plain
  negator `ham` (gloss `NEG`), not adverbialized `hamo`; the 'without eating' reading comes from
  the adverbial juxtaposition and the absent clause linker (the caritive's defining syntax). Added
  an Ex note stating the caritive slot admits bare `ham` as well as `hamo ~ hamu`, so there is no
  inconsistency — it is plain negation doing caritive duty by position.

## Source-form checks
- [x] **morphophonology / nouns-and-possession** — monosyllabic `-he` — RESOLVED (Chiri 1942
  OCR): no §71/§72 disagreement. §71 (l.1032) only lists the formation-ending inventory; §72
  (l.1037) gives the formation. §72(は) attests monosyllabic `kuu` 弓 → `kuuhe`, `suu` → `suuhe`,
  `tūhe` — long vowel RETAINED. §72(ろ) attests `ree` 名 → `reehe`, `kaa` → `kaaha`, `cee` →
  `ceehe`. Chiri shows NO shortening to `ku-he`. The grammar's variable-rule framing with
  `reehe` as the attested unshortened anchor is consistent with §72. No change.
- [x] **verb-structure** `tampe huci ku-kore` (Chiri §68) — RESOLVED (Chiri 1942 OCR, l.1019):
  Chiri quotes Kindaichi's 摘要 p.51 with the genuine form `tampe huči ku-kore na`, and uses
  `kore` in his own example too (`tun eči-ne ǔa a-eči-kore`). The chapter already does the right
  thing — presents Sakhalin `ku-konte` as primary and explicitly flags `ku-kore` as Chiri's
  cited pan-Ainu shape (verb-structure.svelte l.203–204). Changing it to `ku-konte` would
  misquote the source; the flag is correct. No change.
- [x] **verb-structure** — `ne` "single underived verb that takes a complement" — VERIFIED
  CORRECT (Chiri 1942 §32 OCR l.464): "(1)補語を要求するもの…(1)は単純用詞としては ne「である」
  「になる」の一語を有するのみである" — Chiri says the complement-requiring (補語) class has
  exactly ONE simple/underived (単純) member, `ne`. `ye`/`ramu` are transitives taking objects
  (目的語), a different class. "Single" is Chiri's own wording. No change.
- [x] **verb-structure** — singular 'come' forms — ALREADY RECONCILED in the chapter (reviewer
  missed the connecting prose). Table 3 gives the West-coast (Asai Take) suppletive `eh (ek-)` /
  `ariki(h)`; the prose four lines below (l.442–447) explicitly contrasts the East-coast `eki ~ iki`
  (Yamabe), "used for plural subjects as well, even combined with the plural suffix (eki-hsi) — a
  hint that for 'come' the suppletion was already decaying in the early twentieth century, while
  the west-coast tales of Asai Take keep all the pairs intact." The dialectal relation is stated.
  No change.
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
- [x] **Sentoku place** — RESOLVED: both facts hold and the tags are already consistent with the
  grammar's `place=` convention, which everywhere denotes the speaker's *dialectal home locality*
  (cf. "Odasu (Asai Take)" regardless of where Murasaki recorded her), NOT the utterance's physical
  location. So "Otasan (Sentoku Tarōji)" correctly tags Sentoku's east-coast home dialect, while
  Naybuci — where he penned the 1906 letters — is the biographical writing-place, correctly stated
  in the prose (l.207). No conflict; no change.
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
- [ ] **`eci-` portmanteau glossed two ways** (Fable-5, same disputed area) — the 1→2 portmanteau
  `eci-` is glossed `1PL.EXCL.A>2SG.O` at person-and-alignment §13.1 (`eci-nukan-te`, she-bear,
  CI-series by morphology) but `1SG.A>2SG.O` at §13.4 (`cookay eani eci-koyki` 'I beat you'), even
  though that line's own subject pronoun `cookay` is glossed `1PL.EXCL`. So the chapter wavers
  between glossing CI-series forms by morphological series (1PL.EXCL) and by singular reference
  (1SG). Tie this to the `-(y)an`/inverse decision below: pick ONE — either `1.A>2SG.O` (Table 2
  collapses KU/CI as '1') or `1PL.EXCL` throughout — and apply to both the prefix and the
  co-occurring free pronoun.
- [ ] **`in-` object gloss: `1SG.O` vs `1PL.EXCL.O`** (Fable-5) — person-and-alignment §13.x
  glosses `in-` as `1SG.O` in `Sambaku … in-konte` 'gave me' (KU-series singular, doubled by
  `kuani`), consistent with that chapter's analysis that `in-` is the KU/CI-series exclusive object
  (so 1SG with a KU referent); but dialects §2.1.2, morphophonology Ex 8, and texts §26 gloss the
  same prefix `1PL.EXCL.O` (the "exclusive first-person plural object prefix" label). These are two
  defensible analyses (gloss `in-` by referent vs by the uniform series label). Decide one. NOTE:
  the earlier `tama in=konte` resolution committed texts to `1PL.EXCL.O`; if the referent-based
  analysis wins, that and the Sambaku note ("1SG object prefix") both need revisiting.
- [ ] **person-and-alignment `-(y)an` gloss** (also from GPT-5.5) — Ex with `eci-…-yan` glosses
  the suffix `1.A`, another Ex glosses `-an` as `2PL.A`, and the table labels `eci-…-yan`
  "1.A (KU/CI)"; the adopted Sakaguchi analysis says `-(y)an` marks 2nd-person plurality.
  Pick ONE convention across the chapter (entangled with the inverse-vs-Sakaguchi debate).
- [x] **`kun(i)` gloss** — RESOLVED as a TWO-morpheme split, kept and now consistent. The
  prospective/expectative formal noun `kun ~ kuni` (Chiri §80 予期法) is glossed `going.to`
  (`kun pe ne` 'is going to', and the periphrasis `kun ki`); the homophonous irrealis
  complementizer `kun(i)` is glossed `COND` (complementation §22.2, which explicitly declares it).
  Both are documented in their owner chapters (TAM §15.4 notes `kuni` "also serves as the
  complementizer of expected events"). The lone clash — `ham an-ki kun ki kusu` glossed
  `going.to … PURP` in TAM but `COND … because` in negation — is fixed by aligning negation to
  TAM's analysis (this `kun ki` is the expectative periphrasis, not the complementizer):
  negation §17.2 gloss → `going.to do PURP`.
- [x] **morphophonology `sistoh` 'elbow'** — VERIFIED CORRECT (Hattori 1964, entry 86 'ひじ'):
  general Sakhalin (樺太) is `sistoh, -kihi` → possessed `sistokihi`, exactly the grammar's form.
  Fable's claim that Hattori has `sittoh`/`sittokihi` is wrong; `síttok` is the Taraika/Hokkaidō
  shape, but West/general Sakhalin metathesises to `sistoh` (regular coda `*t`/i → s, `*k` → h).
  Not corrupt. No change.
- [x] **pronouns `taan` "far distal"** — VERIFIED (Murasaki, Enciw conversation book OCR, l.262):
  Murasaki gives `taa`《あの》'that (distal)' → `ta'aan`《ずっと向こうの》'way over there' explicitly.
  The grammar's far-distal `taan` is the apostrophe-dropped rendering of Murasaki's `ta'aan`, so
  the emphatic far form built on the distal `taa-`/`ta-` (distinct from `tara(-an)`) is
  source-grounded, not a reconstruction. No change.

## Glossing-convention decisions (from DeepSeek-V4 / GPT-5.5 round-2)
- [ ] **possessed `-hV` glossed three ways** — `NMLZ` (nouns-and-possession), `PERS`
  (evidentiality perception-noun construction), `POSS` (nominalization). The grammar says it
  is one form extended from nouns to verbs; decide whether to gloss it uniformly or document
  the context-sensitive labels deliberately.
- [x] **texts gloss hygiene** — RESOLVED by explicit annotation. The `?` on `utah-ta` reflects a
  genuinely unclear frozen `-ta` (plausibly locative in a lexicalized idiom); the note now says so
  outright. The parenthesised `(INDEF.O=)` mirrors the morpheme line's editorial `(i=)` restoration
  — a recognised convention for an editor-restored unwritten clitic — and the note now states that
  too. Both uncertainties are annotated rather than silently left as bare symbols.
- [x] **`u-sam` homophony** — RESOLVED: added a note in postpositions (§11.8) distinguishing the
  relational noun `sam` 'side' (→ `u-sam` 'next to each other') from the homophonous verb `sam`
  'marry' (→ `u-sam` 'marry each other'), cross-referenced to valency §14 (reciprocal).
- [x] **`ani(hi)` labelled 3SG** — ALREADY HANDLED (pronouns §9.1, "Third person: anihi"). The
  3SG gloss is morphologically correct, and the honorific 2nd-person use is documented in prose:
  the Ex note reads "the third-person pronoun used of the hearer as respectful avoidance, the
  singular counterpart of honorific utara." Keeping the 3SG gloss + noting the pragmatic use is
  the right treatment. No change.
- [x] **orthography normalisation policy** — RESOLVED: added an explicit clause to §3.4. Restoring
  Sentoku's devoiced-but-phonemic `i` in `cikin` is recovery *within* his own dialect (phonemic
  restoration), categorially different from rewriting one dialect's form as another's (the
  normalisation the policy avoids). No contradiction; now stated outright.
- [x] **relative-clauses oblique stranding** — ALREADY HANDLED both ways the item asks. The chapter
  explicitly attributes the strandable set to Bugaeva's Hokkaidō analysis (`bugaeva2015`:48,50) and
  maps the Sakhalin counterparts (`ani`/`tura`/`pahno`, dative `onne` for Hokkaidō `eun`); it then
  supplies the available Sakhalin tokens — `pakno` stranded before `isam`, and the `or-ta`
  relational-noun bridge (Ex 6, Dal Corso 2025:53) — while honestly flagging scarcity ("the one
  direct Sakhalin token of an oblique relative"). Flagged as Hokkaidō-based contrast AND backed by
  the Sakhalin tokens that exist. No change.

## More (from Opus round)
- [x] **`ucaskoma` vs `ucaskuma`** — RESOLVED (Bugaeva 2022 Handbook OCR, fuller check): the
  earlier note overstated `upaskuma`. Dal Corso's own Chapter 21 — the Sakhalin **Rayciska**
  material the grammar cites — is titled "a Sakhalin Ainu **`ucaskuma`** narrated by Haru
  Fujiyama", and §1 calls the genre "`ucaskuma` or `upaskuma`" (ucaskuma primary). The Handbook
  glossary (l.13187) lists "upaskuma, ucaskuma, ikopepeka" as co-existing variant terms, so
  `ucaskuma` (with *c*) is NOT a Hokkaidō intrusion — it is Dal Corso's spelling for this exact
  dialect. The grammar's `ucaskuma` is vindicated; fixed the lone internal outlier `ucaskoma`
  (dialects §2) → `ucaskuma` to match texts §26 (×3). `upaskuma` remains a legitimate variant the
  author may mention, but no change is forced.
- [x] **Piłsudski recording dates** — NON-ISSUE on inspection: phonology and texts both scope
  "1903–04" explicitly to the *east-coast* texts (a subset), while the introduction's
  "1902–1905" / dialects' "1896 and again 1902–1905" describe the whole fieldwork. Consistent
  at different granularities; no change needed.
- [ ] **`murasaki1976:95` at evidentiality §16.6** was changed to `murasaki1979:95` to match the
  other two citations of the same `ku=ye-he sunke` sentence — but confirm which year is right
  at the source (1979 = grammar, 1976 = text collection; both "p. 95" was the red flag).

## Canon / transcription / glossing consistency (from Fable-5 round 2 — deferred)
- [x] **Sakhalin coda shapes for citation forms** — RESOLVED. Convention chosen: paradigm/citation
  tables keep Chiri's morphophonemic underlying form (which explains the alternation), with the
  Sakhalin surface flagged. `eaykap`→`eaykah` was already fixed (free-standing word, so surface).
  `sik` 'eye' was already handled — §7.1 explicitly states "Chiri's morphophonemic citation; the
  West-coast isolation form is `sis` by coda neutralisation" (and possessed `sikihi` resurfaces the
  stop, so the underlying citation is right). Now closed the last gap: the formal nouns `-p` and
  `kur` (nouns §7.8) carry a note that they are Chiri's morphophonemic citations whose codas undergo
  the Chapter 4 neutralisation in West-coast isolation, cross-referenced to `sik ~ sis` (kept the
  morphophonemic form rather than asserting specific surface strings, which the corpus does not pin
  down for the nominaliser).
- [x] **`tama in=konte`** — RESOLVED: the grammar's own convention (dialects §2.1.2 "in- is the
  exclusive first-person plural object prefix"; morphophonology Ex 8) glosses `in-` as
  1PL.EXCL.O, so the texts chapter's `jewel 1SG.O=give` was the outlier → aligned to
  `bead 1PL.EXCL.O=give`.
- [x] **postpositions internal §-numbering off by one** — FIXED. The auto-numberer counts the
  overview `<S t="The case-particle system">` as §11.1, so every case particle is +1 vs the
  prose's manual numbers (which started counting at the first real particle). Corrected all six
  references: intro "(§11.1–§11.7), relational nouns (§11.8), boundary (§11.9)"; `kasketa` forms
  →§11.8; ene examples →§11.8; comitative note →§11.6; overlap note →§11.9.
- [~] **place/speaker spelling canon** — MOSTLY RESOLVED. Fixed `Tunaychi`→`Tunayci`,
  `Otasuh`→`Odasu`; now also `Jasinoske`→`Yasinoske` (dialects §2 — the orthography §3.4
  retranscription rule replaces Piłsudski's `j` with `y`, and information-structure already had
  `Yasinoske`), and `Nayro`→`Nairo` (numerals — Hattori's locality is `Nairo` 内路, an `ai`/`ay`
  orthographic variant of one place). STILL OPEN — **`Taraytomari`** (numerals ×2, postpositions
  ×2): evidence now leans toward it being the west-coast `Tarantomari` 多蘭泊 (the kanji reads
  Taran-, and numerals' "Taraytomari and Nairo pronounced final -p" mirrors phonology §4's
  "Tarantomari … Nairo stand outside the neutralisation" — the same two -p-retaining localities),
  but the `Taray-` spelling echoes Tarayka and the postpositions use is a different (syntactic)
  feature. Confirm the spelling in the cited sources (Sakaguchi 2022; the postpositions source)
  before unifying — a segmental change, unlike the orthographic `Nayro`/`Nairo`.
- [ ] **plural `=hci` notation** — AUTHOR CONVENTION CALL (sharpened on audit; do NOT blind-sweep).
  Two settled facts: the NOMINAL plural is `=hcin`/`=ahcin` (equals **+n**, e.g. `seta-ha=hcin`),
  and the dominant VERBAL example notation is `-hci`/`-ahci` (hyphen; 65 vs 4 tokens, `okay-ahci`
  ×15). BUT the 8 stray verbal `=hci`/`=ahci` (equals, no -n) are NOT random mis-sets: they cluster
  in exactly the passages that **argue the plural is a clitic** — number §8.4 ("the clitic attaches
  outside the person suffixes (`paye-an=ahci`)… ranks it with the clitic-like person markers",
  Sakaguchi) and word-classes §6 (the clitic discussion), where the m-line `an=e=hci` is m/g-aligned
  with gloss `INDEF.A=eat=PL`. So `=` there is deliberate and internally consistent. The real
  decision is the grammar's clitic-notation PHILOSOPHY: the work writes person clitics with `=`
  (`an=`, `ku=`, `e=`) and endorses Sakaguchi's analysis that the plural is the SAME kind of clitic
  — which argues for `=hci` everywhere — yet the house example-style uses `-hci`. Pick one: (a) keep
  `-hci` as boundary-notation house style and renormalise the 8 clitic-passage tokens (+their `=PL`
  glosses → `-PL`); or (b) commit to `=hci` for the endorsed clitic analysis and sweep the 65
  example tokens (+`-PL`→`=PL`). Either is a whole-grammar stylistic commitment — author's call.
  Files with the 8 `=`-tokens: verb-structure:42, word-classes:172/175, number:327,
  information-structure:179/239, morphophonology:227/495.
- [x] **`maskin … kun ki kusu` sentence** glossed differently in TAM §15.4 vs negation §17.2 —
  FULLY RESOLVED. `maskin` was already unified ("overly" → "too.much"). The remaining `kun`
  (going.to vs COND) and `kusu` (PURP vs because) differences are now settled with the `kun(i)`
  decision above: the prospective+purposive analysis wins (this is the expectative `kun ki`
  periphrasis), so negation §17.2 was aligned to TAM's `going.to do PURP`.
- [x] **misc one-liners** — ALL RESOLVED:
  • `cahraku` etymology — phonology aligned to the language-contact account (ratcaku < 蠟燭).
  • `imi-yehe` vs `imiye-he` — normalised the two texts §26 tokens to `imi-yehe` (stem `imi`/`imii`
    + possessive `-yehe`), matching the morphophonological analysis used in 6 other places.
  • `ku'ani` apostrophe — normalised copula §6's two `ku'ani` to `kuani`, matching the
    drop-apostrophe policy and the 20 other `kuani` tokens across 9 chapters.
  • numerals Table 1 caption — "identical except 4, 5, and 9" → "4, 5, 7, and 9": row 7
    (`arawan ~ aruwan`) shows the same locality variation as the others; the caption had omitted it.
  • clause-linking PFV/CONJ — NO CHANGE: both are defined in `abbreviations.ts` and build-validated;
    a once-occurring construction legitimately uses each label once.
- [x] **Rousselot "London"** — VERIFIED CORRECT (Bugaeva 2022 Handbook): Rousselot consulted
  Piłsudski at the **1910 Anglo-Japanese Exhibition in London**, where ten Ainu were brought as
  informants. Fable and Sonnet both wrongly assumed Paris (his Collège de France lab); the
  grammar's "London" is right. No change.
- [x] **`he-pen-u` 'raise one's face'** — VERIFIED CORRECT (Chiri 1942 『アイヌ語法研究』 OCR):
  Chiri explicitly lists the prefixal roots that form intransitives — "he-「顔」 ho-「尻」 si-「自身」
  u-「互」" — and gives "pen 上。pen-u 上げる。" So the segmentation is genuinely `he-` ('face') +
  `pen-u` ('raise'), NOT a corruption of `hepuni`. Fable/Opus suspicion refuted. No change.
- [x] **`mat kayki` → `mah kayki`** (person Ex 7) — FIXED. Piłsudski 1912 (p.23, the cited source)
  writes "**max** kajki anekonddsi kusu" — his `x` = /h/, so the form is `mah`. By the grammar's
  own Piłsudski retranscription rule (`x` → `h`), the Sakhalin coda rule (`*t` → `h`), AND the
  parallel Asai Take corpus token (`horokewpo 'utah mah kayki sakahci`, aa-asai/008), the Sakhalin
  surface form is `mah`. The `mat` was an errant Hokkaidō underlying shape. Corrected to `mah`.

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
- [x] **Piłsudski "voicing commoner in the west"** — VERIFIED CORRECT (Piłsudski 1912 Materials,
  phonology preface, p.5): Piłsudski writes verbatim "On the western shore of Saghalien, the latter
  group [voiced g, d, b] is more often to be met with than on the eastern shore." He makes the
  west↔east comparison himself in his phonological description, independent of his (east-coast)
  text corpus. The attribution is sound, not internally odd. No change.

## From Opus round 2 (deferred)
- [x] **Dobrotvorsky corpus dialect tag** — RESOLVED to `WS` uniformly. Decisive: the texts §26.4
  prose itself states the dialogues "come from the Kusunnay area of the **west-central coast**", and
  every other Dobrotvorsky example across the grammar (clause-linking, complementation,
  morphophonology, negation, numerals, orthography, phonology, TAM, valency, verb-structure,
  person-and-alignment ×2) already carries `WS`, with the introduction using Dobrotvorsky as its
  canonical WS specimen. `dial=` denotes geographic dialect (cf. the `place=` convention), so
  Kusunnay = West. Retagged the outliers: texts §26.4 block (6 ex.) `SA`→`WS` and the three
  Dobrotvorsky examples in person-and-alignment (`dobrotvorsky1875:238/453`) `SA`→`WS`. The
  identical sentence `tan kotan ohta utasa-an kusu ariki-an` is now `WS` everywhere. The
  East-patterning INDEF-series parallel to Sentoku's (east-coast) letters stays a prose feature
  observation, which a west-coast source can legitimately show. (Left `SA` on the constructed
  `ahci an-nukara` inverse example, cite `dalcorso2025align`, which is general/illustrative, not
  Kusunnay-sourced.)
- [x] **`Sambaku kuani ohta tampaku in-konte`** (person-and-alignment) — RESOLVED: expanded the Ex
  note to account for `ohta` — `kuani ohta` 'to me' is the dative recipient overtly doubling the
  1SG object prefix `in-` (literal 'Sambaku gave tobacco to me'). The doubling is now stated.
- [x] **`repohpe` 'seal'** (negation) — CORRECT as-is. Glossing the frozen animal name whole
  (`seal`) is principled: `repo(t)-pe` 'open-sea-thing' is diachronic etymology, not a synchronic
  parse (the `rep-` root is opaque to speakers). The contrast with productive `sine-p` 'one-NMLZ'
  in the same example is exactly the point — productive derivation is segmented, lexicalised nouns
  are glossed whole. No inconsistency; no change.

## From Fable-5 round 4 (general content review — deferred analytical items)
- [x] **evidential "scaffolding" overgeneralised** (Fable-5) — RESOLVED. Reframed nominalization
  §20.4: the evidential template is now stated as [possessor clause]–N-POSS–`an`, with the BASIC
  pattern being a plain finite possessor clause and no overt nominaliser (`re monimahpo an ruwehe an`
  'evidently three girls lived there', xref §16.3), and the copula-linked `V`-POSS `nee` N-POSS `an`
  presented as a Sakhalin *subtype* (bugaeva2016:108). Updated the §20 summary-table form cell to
  "[clause] N-POSS an (± V-POSS nee)". Complementation §22 checked and left as-is: its prose already
  analyses the sensory case correctly as a topicalised nominalized complement (xref §16.4) and its
  summary table is a pointer to §20.3 + Chapter 16, not an overstatement.
- [x] **possessive-suffix segmentation inconsistency** (Fable-5) — RESOLVED (segmentation).
  Adopted the §5 declared convention: consonant-stem possessive = stem + `-VhV` (`teh ~ tek-ihi`,
  `kam-ihi`, `ram-uhu`, `kotan-uhu`). Swept the mis-cut variants to the analysis-consistent form:
  `teki-hi`→`tek-ihi` (nouns ×2, morphophonology ×3, postpositions, numerals — incl. `teki-hi-cin`
  →`tek-ihi-cin`), `kami-hi`→`kam-ihi` (relative-clauses, TAM), `siri-hi`→`sir-ihi`
  (evidentiality, person-and-alignment — now matching nominalization §20's `sir-ihi`),
  `mosiri-hi`→`mosir-ihi` (nouns, now matching nominalization's `mosir-ihi`). Each is a single
  m-line token so word counts are unaffected; build validates. Did NOT touch vowel-stem `-he`/`-ha`
  forms (`kema-ha`, `sapa-ha`, `koro-ho`) or the frozen evidential `ruwehe`/`ruhe` (vowel stem
  `ruu`; its `trace-POSS` gloss belongs to the `-hV` three-way gloss item below). REMAINING (separate
  item): the possessor-prefix boundary `an=mosir-ihi` (nominalization, clitic `=`) vs `an-mosir-ihi`
  (nouns, affix `-`) — this `=`/`-` choice is the same clitic-notation question as the `=hci` item;
  segmentation is now uniform, only the prefix boundary differs.

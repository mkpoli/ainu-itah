// Bibliography of the lexical sources a dictionary entry can be attested in.
// Per-entry attestations are computed by scripts/gen-citations.ts (→
// src/lib/data/citations.json, keyed by entry slug); this module is the shared
// list of full references, rendered both inline on entry pages and as the global
// bibliography at /sources. Keys here must match the keys the generator emits.

export interface Source {
	key: string;
	/** Short in-line label, e.g. "FRPAC", "Tamura 1958". */
	short: string;
	/** Full bibliographic reference. */
	full: string;
	url?: string;
}

export const SOURCES: Source[] = [
	{
		key: 'corpus',
		short: 'Corpus',
		full: 'Sakhalin (樺太) Ainu text corpus — the glossed corpus of attested texts underlying this site’s examples (Piłsudski, Sentoku, Asai Take and others).'
	},
	{
		key: 'frpac',
		short: 'FRPAC',
		full: '公益財団法人アイヌ文化振興・研究推進機構 (FRPAC). 2005–2007. 単語リスト（アイヌ語・日本語）樺太 [Karafuto / Sakhalin Ainu–Japanese wordlist]. Companion to the FRPAC Karafuto-dialect textbooks.',
		url: 'https://www.ff-ainu.or.jp/web/potal_site/files/karahuto_tango.pdf'
	},
	{
		key: 'tamura1958',
		short: 'Tamura 1958',
		full: '田村すず子 (rec.) 1958. 山田ハヨさんの語彙（アイヌ語樺太方言）[Yamada Hayo’s vocabulary — Sakhalin Ainu]. 環太平洋の言語 (Endangered Languages of the Pacific Rim, ELPR).'
	},
	{
		key: 'chiriWada1943',
		short: 'Chiri & Wada 1943',
		full: '知里真志保・和田文治郎 1943. 樺太アイヌ語に於ける人体関係名彙 [Human-body vocabulary in Sakhalin Ainu], pp. 39–80.'
	}
];

export const SOURCE_MAP = new Map(SOURCES.map((s) => [s.key, s]));

// Gazetteer of the Sakhalin Ainu settlement world named in this grammar.
//
// Each place carries every name form the grammar needs — the Ainu name (and the
// katakana it is usually written in), the Karafuto-era Japanese name in kanji,
// the current Russian-era name, and an English label — plus coordinates and the
// coast it belongs to. The same table drives the interactive dialect map, the
// static locator, and the place-name renderings in the prose, so a name is
// fixed in exactly one place.
//
// Coordinates and kanji were compiled and cross-checked against Japanese/English
// Wikipedia, Wikidata and GeoNames; `confidence` flags how firmly the kanji AND
// the coordinates are pinned (low = an approximate point for a hamlet that has
// no dedicated modern article).

export type Coast = 'west' | 'east' | 'anchor' | 'hokkaido';

export interface Place {
	id: string;
	/** Romanised Ainu name, where the place has one. */
	ainu?: string;
	/** Katakana the name is usually written in (Ainu name, or the Japanese reading). */
	kana?: string;
	/** Karafuto-era Japanese name in kanji. */
	kanji?: string;
	/** Current (Russian-era) name, romanised. */
	ru?: string;
	/** English label. */
	en: string;
	lat: number;
	lng: number;
	coast: Coast;
	/** One-line significance, shown in the map popup. */
	note?: string;
	confidence: 'high' | 'medium' | 'low';
}

export const PLACES: Place[] = [
	// ── West coast (wsa), facing the Strait of Tartary ──────────────────────
	{
		id: 'honto',
		kanji: '本斗',
		kana: 'ほんと',
		ru: 'Nevelsk',
		en: 'Honto',
		lat: 46.6733,
		lng: 141.8633,
		coast: 'west',
		confidence: 'high',
		note: 'South-west port on the approach to Aniva Bay.'
	},
	{
		id: 'tarantomari',
		ainu: 'Tarantomari',
		kana: 'タラントマリ',
		kanji: '多蘭泊',
		ru: 'Kalinino',
		en: 'Tarantomari',
		lat: 46.8694,
		lng: 141.9617,
		coast: 'west',
		confidence: 'high',
		note: 'SW-coast settlement near Honto; West-coast narrative source.'
	},
	{
		id: 'maoka',
		ainu: 'Mawka',
		kana: 'マウカ',
		kanji: '真岡',
		ru: 'Kholmsk',
		en: 'Maoka',
		lat: 47.0633,
		lng: 142.0544,
		coast: 'west',
		confidence: 'high',
		note: 'Principal west-coast port; one of Murasaki’s two reference dialects.'
	},
	{
		id: 'tomarioru',
		ainu: 'Tomari-oro',
		kana: 'トマリオロ',
		kanji: '泊居',
		ru: 'Tomari',
		en: 'Tomarioru',
		lat: 47.7612,
		lng: 142.0635,
		coast: 'west',
		confidence: 'high',
		note: 'West-coast port; Ainu tomari-oro ‘within the harbour’.'
	},
	{
		id: 'kushunnai',
		ainu: 'Kus-un-nay',
		kana: 'クシュンナイ',
		kanji: '久春内',
		ru: 'Ilyinsky',
		en: 'Kushunnai',
		lat: 47.9833,
		lng: 142.2167,
		coast: 'west',
		confidence: 'high',
		note: 'West-central area documented by Dobrotvorskij (1875).'
	},
	{
		id: 'rayciska',
		ainu: 'Rayciska',
		kana: 'ライチㇱカ',
		kanji: '来知志',
		ru: 'near Krasnogorsk (Chinnai)',
		en: 'Raychishka',
		lat: 48.45,
		lng: 142.085,
		coast: 'west',
		confidence: 'medium',
		note: 'Home dialect of Murasaki’s consultants Fujiyama Haru & Asai Take.'
	},
	{
		id: 'usoro',
		ainu: 'Usoro',
		kana: 'ウソロ',
		kanji: '鵜城',
		ru: 'Orlovo',
		en: 'Usoro',
		lat: 48.8448,
		lng: 141.9434,
		coast: 'west',
		confidence: 'high',
		note: 'Northern west-coast village; Ainu usoro ‘bay, inlet’.'
	},
	{
		id: 'esutoru',
		ainu: 'Esturi',
		kana: 'エㇱトゥリ',
		kanji: '恵須取',
		ru: 'Uglegorsk',
		en: 'Esutoru',
		lat: 49.0797,
		lng: 142.0711,
		coast: 'west',
		confidence: 'high',
		note: 'North-central west-coast town; Fujiyama Haru’s birthplace.'
	},

	// ── East coast (esa), facing the Sea of Okhotsk ─────────────────────────
	{
		id: 'otomari',
		ainu: 'Kusunkotan',
		kana: 'クシュンコタン',
		kanji: '大泊',
		ru: 'Korsakov',
		en: 'Ōtomari',
		lat: 46.6333,
		lng: 142.7667,
		coast: 'east',
		confidence: 'high',
		note: 'Aniva Bay port; old Ainu Kusunkotan, poro-an-tomari ‘big harbour’.'
	},
	{
		id: 'tunayci',
		ainu: 'Tunayci',
		kana: 'トンナイチャ',
		kanji: '富内',
		ru: 'Okhotskoye',
		en: 'Tunayci',
		lat: 46.8571,
		lng: 143.1574,
		coast: 'east',
		confidence: 'high',
		note: 'Southern end of Piłsudski’s narrator chain, at the outflow of Lake Tunaycha.'
	},
	{
		id: 'ocohpoka',
		ainu: 'Ocohpoka',
		kana: 'オチョポカ',
		kanji: '落帆',
		ru: 'Okhotskoye area',
		en: 'Ocohpoka',
		lat: 46.92,
		lng: 143.1,
		coast: 'east',
		confidence: 'medium',
		note: 'Piłsudski narrator hamlet by Lake Tunay (Ociho 落帆).'
	},
	{
		id: 'ai',
		ainu: 'Ay',
		kana: 'アイ',
		kanji: '相浜',
		ru: 'near Starodubskoye',
		en: 'Ay',
		lat: 47.41,
		lng: 142.82,
		coast: 'east',
		confidence: 'medium',
		note: 'Piłsudski’s 1902–04 base; home of chief Bafunke and narrator Kimura Usarusmah.'
	},
	{
		id: 'takoye',
		ainu: 'Takoye',
		kana: 'タコエ',
		ru: 'Takoye (near Dolinsk)',
		en: 'Takoye',
		lat: 47.32,
		lng: 142.77,
		coast: 'east',
		confidence: 'low',
		note: 'Piłsudski tuita narrator site in the Naiba valley.'
	},
	{
		id: 'otasam',
		ainu: 'Otasam',
		kana: 'オタサム',
		kanji: '小田寒',
		ru: 'near Firsovo',
		en: 'Otasam',
		lat: 47.658,
		lng: 142.574,
		coast: 'east',
		confidence: 'medium',
		note: 'SE-coast narrator hamlet on the Otasamu R.; Sentoku Tarōji’s home.'
	},
	{
		id: 'siraroko',
		ainu: 'Siraroko',
		kana: 'シラウラ',
		kanji: '白浦',
		ru: 'Vzmorye',
		en: 'Siraroko / Shiraura',
		lat: 47.8505,
		lng: 142.5164,
		coast: 'east',
		confidence: 'medium',
		note: 'Piłsudski narrator hamlet on the coast north of Dolinsk.'
	},
	{
		id: 'naayro',
		ainu: 'Naayro',
		kana: 'ナイロ',
		kanji: '内路',
		ru: 'Gastello',
		en: 'Naayro (Nairo)',
		lat: 49.1,
		lng: 142.9514,
		coast: 'east',
		confidence: 'medium',
		note: 'East-coast village south of Shisuka; drawn on in Vovin’s reconstruction.'
	},
	{
		id: 'shisuka',
		ainu: 'Siisuka',
		kana: 'シスカ',
		kanji: '敷香',
		ru: 'Poronaysk',
		en: 'Shisuka',
		lat: 49.2219,
		lng: 143.0969,
		coast: 'east',
		confidence: 'high',
		note: 'East-coast town at the Poronay mouth; hub of the Taraika region.'
	},
	{
		id: 'otasu',
		ainu: 'Otasu',
		kana: 'オタス',
		ru: 'Poronaysk (delta)',
		en: 'Otasu',
		lat: 49.2389,
		lng: 143.08,
		coast: 'east',
		confidence: 'medium',
		note: '1920s multi-ethnic settlement (Uilta, Nivkh, Ainu) on the Poronay delta.'
	},
	{
		id: 'taraika',
		ainu: 'Tarayka',
		kana: 'タライカ',
		kanji: '多来加',
		ru: 'Lake Nevskoye',
		en: 'Taraika',
		lat: 49.3664,
		lng: 143.3675,
		coast: 'east',
		confidence: 'high',
		note: 'The most conservative East-coast dialect; lagoon on the Gulf of Patience.'
	},

	// ── Interior / orientation ──────────────────────────────────────────────
	{
		id: 'toyohara',
		kanji: '豊原',
		kana: 'とよはら',
		ru: 'Yuzhno-Sakhalinsk',
		en: 'Toyohara',
		lat: 46.9667,
		lng: 142.7333,
		coast: 'anchor',
		confidence: 'high',
		note: 'Karafuto prefectural capital (interior south-east).'
	},

	// ── Anchors for the locator (not dialect points) ────────────────────────
	{
		id: 'aniva-bay',
		kanji: '亜庭湾',
		kana: 'あにわわん',
		ru: 'Zaliv Aniva',
		en: 'Aniva Bay',
		lat: 46.6,
		lng: 142.6,
		coast: 'anchor',
		confidence: 'high',
		note: 'Southern bay; the Ainu settlement area ran from here up both coasts.'
	},
	{
		id: 'soya-strait',
		kanji: '宗谷海峡',
		kana: 'そうやかいきょう',
		ru: 'Proliv Laperuza',
		en: 'La Pérouse (Sōya) Strait',
		lat: 45.7222,
		lng: 142.0267,
		coast: 'anchor',
		confidence: 'high',
		note: 'The 1875 and 1945 displacement route to Hokkaidō.'
	},
	{
		id: 'hokkaido',
		ainu: 'Yaunmosir',
		kana: 'ヤウンモシㇼ',
		kanji: '北海道',
		en: 'Hokkaidō',
		lat: 45.4,
		lng: 141.8,
		coast: 'hokkaido',
		confidence: 'high',
		note: 'Post-1945 resettlement destination of the displaced Sakhalin Ainu.'
	}
];

export const COAST_COLOR: Record<Coast, string> = {
	west: '#059669', // emerald — West-coast (wsa)
	east: '#d97706', // amber  — East-coast (esa)
	anchor: '#78716c', // stone — orientation points
	hokkaido: '#4338ca' // indigo — Hokkaidō
};

export const COAST_LABEL: Record<Coast, string> = {
	west: 'West coast (wsa)',
	east: 'East coast (esa)',
	anchor: 'Orientation',
	hokkaido: 'Hokkaidō (resettlement)'
};

/** Dialect points (settlements), excluding pure orientation anchors. */
export const DIALECT_POINTS = PLACES.filter((p) => p.coast === 'west' || p.coast === 'east');

/** Look up a place by id (used by the inline place-name renderer). */
const BY_ID = new Map(PLACES.map((p) => [p.id, p]));
export function place(id: string): Place | undefined {
	return BY_ID.get(id);
}

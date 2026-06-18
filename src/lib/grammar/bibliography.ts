/**
 * Bibliography of the reference grammar.
 *
 * Keys are cited in chapters via <Ref k="..."/>. `citeAuthor` and `citeYear`
 * are what appear in the in-text citation; the full entry is rendered on the
 * references page. Original-script titles are kept alongside translations.
 */

export interface BibEntry {
	/** e.g. 'Murasaki, Kyōko' or 'Chiri Mashiho 知里真志保' */
	author: string;
	/** Short name(s) used in in-text citations, e.g. 'Murasaki'. */
	citeAuthor: string;
	year: string;
	title: string;
	/** English translation of a non-English title. */
	titleTr?: string;
	/** Journal, book, or series the work appeared in. */
	container?: string;
	editor?: string;
	pages?: string;
	publisher?: string;
	place?: string;
	url?: string;
	/** BCP-47 tag for the title text, e.g. 'ja', 'ru'. Defaults to 'en'. */
	lang?: string;
	note?: string;
	/**
	 * What the work is primarily about. Sakhalin-specific works are the core of
	 * the grammar; Hokkaidō works appear for contrast; 'general' covers pan-Ainu,
	 * comparative, and methodological literature.
	 */
	region: 'sakhalin' | 'hokkaido' | 'kuril' | 'general';
	/**
	 * True when the work is cited second-hand (apud another source) rather than
	 * consulted directly. Rendered as a badge so the reader can see which claims
	 * rest on intermediated evidence.
	 */
	reported?: boolean;
}

export const bibliography: Record<string, BibEntry> = {
	austerlitz1976: {
		region: 'general',
		author: 'Austerlitz, Robert',
		citeAuthor: 'Austerlitz',
		year: '1976',
		title: "L'appellation du renne en ghiliak",
		container: 'Études finno-ougriennes',
		pages: '13: 25–28',
		lang: 'fr',
		note: 'Cited after Janhunen (2022)',
		reported: true
	},
	asai1974: {
		region: 'general',
		author: 'Asai Tōru 浅井亨',
		citeAuthor: 'Asai',
		year: '1974',
		title: 'Classification of dialects: Cluster analysis of Ainu dialects',
		container: '北方文化研究 [Bulletin of the Institute for the Study of North Eurasian Cultures]',
		pages: '8: 45–136',
		publisher: 'Hokkaido University',
		place: 'Sapporo'
	},
	batchelor1938: {
		region: 'hokkaido',
		author: 'Batchelor, John',
		citeAuthor: 'Batchelor',
		year: '1938',
		title: 'An Ainu–English–Japanese dictionary',
		note: '4th edition',
		publisher: 'Iwanami Shoten',
		place: 'Tokyo'
	},
	bugaeva2010: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2010',
		title: 'Ainu applicatives in typological perspective',
		container: 'Studies in Language',
		pages: '34(4): 749–801',
		reported: true
	},
	bugaeva2012: {
		region: 'hokkaido',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2012',
		title: 'Southern Hokkaido Ainu',
		container: 'The languages of Japan and Korea',
		editor: 'Tranter, Nicolas',
		pages: '461–509',
		publisher: 'Routledge',
		place: 'London'
	},
	bugaeva2015: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2015',
		title: 'An equivalent of the standard-of-comparison relativization in Ainu'
	},
	bugaeva2016: {
		region: 'sakhalin',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2016',
		title: 'On the innovative nature of Sakhalin Ainu: Focusing on nominalization',
		container: 'Studia Orientalia',
		pages: '117: 95–117'
	},
	bugaeva2017: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2017',
		title: 'Noun-modifying clause constructions in Ainu',
		container:
			'Noun-Modifying Clause Constructions in Languages of Eurasia: Rethinking theoretical and geographical boundaries (Typological Studies in Language 116)',
		editor: 'Matsumoto, Yoshiko, Bernard Comrie & Peter Sells',
		pages: '203–250',
		publisher: 'John Benjamins',
		place: 'Amsterdam & Philadelphia'
	},
	bugaeva2021: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2021',
		title: 'Appositive possession in Ainu and around the Pacific',
		container: 'Linguistic Typology',
		pages: '25(2): 263–305'
	},
	bugaeva2022: {
		region: 'general',
		author: 'Bugaeva, Anna (ed.)',
		citeAuthor: 'Bugaeva',
		year: '2022',
		title: 'Handbook of the Ainu language',
		container: 'Handbooks of Japanese Language and Linguistics 12',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston'
	},
	chiri1942: {
		region: 'sakhalin',
		author: 'Chiri Mashiho 知里真志保',
		citeAuthor: 'Chiri',
		year: '1942',
		title: 'アイヌ語法研究——樺太方言を中心として',
		titleTr: 'A study of Ainu grammar, centred on the Sakhalin dialect',
		container: '樺太庁博物館報告 [Reports of the Karafuto Government Museum]',
		pages: '4(4): 51–172',
		place: 'Toyohara',
		note: 'Reprinted in 知里真志保著作集 3 (Heibonsha, 1973)',
		lang: 'ja'
	},
	chiri1952: {
		region: 'general',
		author: 'Chiri Mashiho 知里真志保',
		citeAuthor: 'Chiri',
		year: '1952',
		title: 'アイヌ語に於ける母音調和',
		titleTr: 'Vowel harmony in Ainu',
		container: '北方文化研究報告 [Reports on Northern Culture Studies] 7',
		publisher: 'Hokkaido University',
		place: 'Sapporo',
		note: 'Page references follow the reprint in 知里真志保著作集 4 (Heibonsha, 1974)',
		lang: 'ja'
	},
	chiri1973: {
		region: 'general',
		author: 'Chiri Mashiho 知里真志保',
		citeAuthor: 'Chiri',
		year: '1973',
		title: '知里真志保著作集 3：生活誌・民族学編',
		titleTr: 'Collected works of Chiri Mashiho, vol. 3',
		publisher: 'Heibonsha',
		place: 'Tokyo',
		lang: 'ja'
	},
	comrie2015: {
		region: 'general',
		author: 'Comrie, Bernard, Martin Haspelmath & Balthasar Bickel',
		citeAuthor: 'Comrie, Haspelmath & Bickel',
		year: '2015',
		title: 'The Leipzig Glossing Rules: Conventions for interlinear morpheme-by-morpheme glosses',
		publisher: 'Max Planck Institute for Evolutionary Anthropology',
		place: 'Leipzig',
		url: 'https://www.eva.mpg.de/lingua/resources/glossing-rules.php'
	},
	croft1991: {
		region: 'general',
		author: 'Croft, William',
		citeAuthor: 'Croft',
		year: '1991',
		title: 'The evolution of negation',
		container: 'Journal of Linguistics',
		pages: '27(1): 1–27',
		reported: true
	},
	dalcorso2018: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2018',
		title: 'Ainu evidentiality: A semantico-pragmatic analysis and a morphosyntactic account',
		container: 'Doctoral dissertation, SOAS University of London',
		place: 'London'
	},
	dalcorso2020: {
		region: 'hokkaido',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2020',
		title: 'The interaction of relativization and noun incorporation in Southern Hokkaidō Ainu',
		container: 'European approaches to Japanese language and linguistics',
		editor: 'Pappalardo, Giuseppe & Patrick Heinrich',
		publisher: 'Edizioni Ca’ Foscari',
		place: 'Venice'
	},
	dalcorso2021: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2021',
		title: 'The development of analytic negatives in Sakhalin Ainu',
		container: 'Japanese/Korean Linguistics 28',
		editor: 'Jeon, Hae-Sung, Pete Sells, Zixi You, Sotaro Kita & Jaehoon Yeon',
		publisher: 'CSLI Publications',
		place: 'Stanford'
	},
	dalcorso2021reedition: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2021a',
		title:
			"The language and folklore of West Sakhalin Ainu: A re-edition of Kyōko Murasaki's Karafuto Ainugo with translation and grammatical notes",
		publisher: 'LINCOM',
		place: 'Munich',
		note: 'Annotated re-edition, with English translation, of Murasaki 1976'
	},
	dalcorso2024: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2024',
		title:
			'Elements of Sakhalin Ainu phonetics, phonology, and morphosyntax in Bronisław Piłsudski’s corpus of Ainu folklore',
		container:
			'Philological and linguistic analysis working together: Exploring language diversity in Japan (Ca’ Foscari Japanese Studies 24)',
		editor: 'Calvetti, Paolo',
		pages: '53–80',
		publisher: 'Edizioni Ca’ Foscari',
		place: 'Venice'
	},
	dalcorso2025align: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2025a',
		title: 'The mixed nominative-neutral-inverse morphological alignment of Sakhalin Ainu',
		container: 'Studia Orientalia',
		pages: '126: 187–218'
	},
	dalcorso2025neg: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2025b',
		title: 'Negation in Sakhalin Ainu: History and typology',
		container: 'Studia Orientalia Electronica',
		pages: '13: 38–64',
		url: 'https://doi.org/10.23993/store.144986'
	},
	dobrotvorsky1875: {
		region: 'sakhalin',
		author: 'Dobrotvorsky, Mikhail M. Добротворский, М. М.',
		citeAuthor: 'Dobrotvorsky',
		year: '1875',
		title: 'Аинско-русский словарь',
		titleTr: 'Ainu–Russian dictionary',
		publisher: 'Kazan University',
		place: 'Kazan Казань',
		lang: 'ru'
	},
	'frpac-karafuto': {
		region: 'sakhalin',
		author: 'Ainu Bunka Shinkō Kenkyū Suishin Kikō アイヌ文化振興・研究推進機構 (FRPAC)',
		citeAuthor: 'FRPAC',
		year: '2014',
		title: 'アイヌ語教材テキスト「カラフトのアイヌ語」（入門・初級・中級）',
		titleTr:
			'Ainu language teaching materials: Sakhalin Ainu (introductory, beginner and intermediate volumes)',
		publisher: 'Foundation for Research and Promotion of Ainu Culture',
		place: 'Sapporo',
		url: 'https://www.ff-ainu.or.jp/web/potal_site/files/karahuto_shokyu.pdf',
		lang: 'ja'
	},
	furukawa1967: {
		region: 'sakhalin',
		author: 'Furukawa Kyōko 古川恭子',
		citeAuthor: 'Furukawa',
		year: '1967',
		title: 'アイヌ語カラフトライチシカ方言シンタクス',
		titleTr: 'Syntax of the Sakhalin Raychishka dialect of Ainu',
		container: '言語研究 [Gengo Kenkyū: Journal of the Linguistic Society of Japan]',
		pages: '50: 100–120',
		note: 'Furukawa Kyōko is the maiden name of Murasaki Kyōko',
		lang: 'ja'
	},
	givon1978: {
		region: 'general',
		author: 'Givón, Talmy',
		citeAuthor: 'Givón',
		year: '1978',
		title: 'Negation in language',
		container: 'Syntax and Semantics, vol. 9: Pragmatics',
		editor: 'Cole, Peter',
		pages: '69–112',
		publisher: 'Academic Press',
		place: 'New York',
		reported: true
	},
	givon1980: {
		region: 'general',
		author: 'Givón, Talmy',
		citeAuthor: 'Givón',
		year: '1980',
		title: 'The binding hierarchy and the typology of complements',
		container: 'Studies in Language',
		pages: '4(3): 333–377',
		reported: true
	},
	gruzdeva1996: {
		region: 'general',
		author: 'Gruzdeva, Ekaterina',
		citeAuthor: 'Gruzdeva',
		year: '1996',
		title: 'The linguistic situation on Sakhalin Island',
		container:
			'Atlas of languages of intercultural communication in the Pacific, Asia, and the Americas, vol. II: Texts',
		editor: 'Wurm, Stephen A., Peter Mühlhäusler & Darrell T. Tryon',
		pages: '1007–1012',
		publisher: 'Mouton de Gruyter',
		place: 'Berlin & New York',
		url: 'https://doi.org/10.1515/9783110819724.3.1007'
	},
	'hattori-chiri1960': {
		region: 'general',
		author: 'Hattori Shirō 服部四郎 & Chiri Mashiho 知里真志保',
		citeAuthor: 'Hattori & Chiri',
		year: '1960',
		title: 'アイヌ語諸方言の基礎語彙統計学的研究',
		titleTr: 'A lexicostatistic study of the Ainu dialects',
		container: '民族學研究 [Japanese journal of ethnology]',
		pages: '24(4): 307–342',
		lang: 'ja'
	},
	hattori1961: {
		region: 'sakhalin',
		author: 'Hattori Shirō 服部四郎',
		citeAuthor: 'Hattori',
		year: '1961',
		title: 'アイヌ語カラフト方言の「人称接辞」について',
		titleTr: 'On the “personal affixes” of the Sakhalin dialect of Ainu',
		container: '言語研究 [Gengo Kenkyū: Journal of the Linguistic Society of Japan]',
		pages: '39: 1–20',
		lang: 'ja'
	},
	hattori1967: {
		region: 'general',
		author: 'Hattori Shirō 服部四郎',
		citeAuthor: 'Hattori',
		year: '1967',
		title: 'アイヌ語の音韻構造とアクセント',
		titleTr: 'The phonological structure and accent of Ainu',
		container: '音声の研究 [Onsei no Kenkyū: Study of Sounds]',
		pages: '13: 207–223',
		publisher: 'Phonetic Society of Japan',
		lang: 'ja'
	},
	hattori1964: {
		region: 'general',
		author: 'Hattori Shirō 服部四郎 (ed.)',
		citeAuthor: 'Hattori',
		year: '1964',
		title: 'アイヌ語方言辞典',
		titleTr: 'An Ainu dialect dictionary',
		publisher: 'Iwanami Shoten',
		place: 'Tokyo',
		lang: 'ja'
	},
	itabashi2001: {
		region: 'general',
		author: 'Itabashi Yoshizō 板橋義三',
		citeAuthor: 'Itabashi',
		year: '2001',
		title:
			'樺太アイヌ語の母音の長短と北海道アイヌ語のピッチアクセントとの史的関係（1）——両アイヌ方言の音韻における史的関係の解明に向けての研究序説',
		titleTr:
			'The historical relation between Sakhalin Ainu vowel length and Hokkaidō Ainu pitch accent, part 1',
		container: '言語文化論究 [Studies in Languages and Cultures, Kyushu University]',
		pages: '14: 87–103',
		url: 'https://doi.org/10.15017/5392',
		lang: 'ja'
	},
	iwai1987: {
		region: 'sakhalin',
		author:
			'Iwai Toshiaki 岩井俊昭, Asakura Toshimitsu 朝倉利光, Ifukube Tōru 伊福部達 & Kawashima Toshio 川嶋稔夫',
		citeAuthor: 'Iwai et al.',
		year: '1987',
		title: 'ピウスツキ蠟管の音声再生と録音内容——レーザビーム反射法による光学式音声再生',
		titleTr:
			'Sound-reproduction from Bronisław Piłsudski’s recordings and their contents: Reproduction of sound from old wax cylinders using the laser-beam reflection method',
		container:
			'国立民族学博物館研究報告別冊 [Bulletin of the National Museum of Ethnology, special issue]',
		pages: '5: 147–163',
		url: 'https://doi.org/10.15021/00003757',
		lang: 'ja'
	},
	janhunen2022: {
		region: 'general',
		author: 'Janhunen, Juha A.',
		citeAuthor: 'Janhunen',
		year: '2022',
		title: 'Ainu ethnic origins',
		container: 'Handbook of the Ainu language',
		editor: 'Bugaeva, Anna',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston'
	},
	kirikae1984: {
		region: 'general',
		author: 'Kirikae Hideo 切替英雄',
		citeAuthor: 'Kirikae',
		year: '1984',
		title: 'アイヌ語の名詞句の構造と合成名詞',
		titleTr: 'The structure of noun phrases and compound nouns in Ainu',
		container: '言語研究 [Gengo Kenkyū: Journal of the Linguistic Society of Japan]',
		pages: '86: 105–121',
		lang: 'ja'
	},
	kirikae1997: {
		region: 'general',
		author: 'Kirikae Hideo 切替英雄',
		citeAuthor: 'Kirikae',
		year: '1997',
		title: 'アイヌによるアイヌ語表記',
		titleTr: 'The writing of Ainu by the Ainu',
		container: '国文学 解釈と鑑賞 [Japanese literature: interpretation and appreciation]',
		pages: '62(1): 99–107',
		publisher: 'Shibundō',
		place: 'Tokyo',
		lang: 'ja'
	},
	kitahara2016: {
		region: 'sakhalin',
		author: 'Kitahara Jirōta Mokottunas 北原次郎太 (ed.)',
		citeAuthor: 'Kitahara',
		year: '2016',
		title: 'Wada Bunjirō: Karafuto ainu setsuwashū 3',
		titleTr: 'Wada Bunjirō: Collection of Karafuto Ainu folktales, vol. 3',
		publisher: 'Aynu Teetawanoankur Kanpinuye Cise',
		place: 'Sapporo',
		lang: 'ja',
		note: 'Cited after Dal Corso (2025b)',
		reported: true
	},
	lee2013: {
		region: 'general',
		author: 'Lee, Sean & Toshikazu Hasegawa',
		citeAuthor: 'Lee & Hasegawa',
		year: '2013',
		title: 'Evolution of the Ainu language in space and time',
		container: 'PLOS ONE',
		pages: '8(4): e62243',
		url: 'https://doi.org/10.1371/journal.pone.0062243'
	},
	majewicz1998: {
		region: 'sakhalin',
		author: 'Majewicz, Alfred F. (ed.)',
		citeAuthor: 'Majewicz',
		year: '1998',
		title:
			'The collected works of Bronisław Piłsudski, vol. 3: Materials for the study of the Ainu language and folklore 2',
		container: 'Trends in Linguistics: Documentation 15-3',
		publisher: 'Mouton de Gruyter',
		place: 'Berlin & New York',
		note: 'Cited after Dal Corso (2025b)',
		reported: true
	},
	nakagawa2006: {
		region: 'general',
		author: 'Nakagawa Hiroshi 中川裕',
		citeAuthor: 'Nakagawa',
		year: '2006',
		title: 'アイヌ人によるアイヌ語表記への取り組み',
		titleTr: 'Ainu efforts at writing the Ainu language',
		container: '表記の習慣のない言語の表記 [Writing unwritten languages]',
		publisher:
			'Research Institute for Languages and Cultures of Asia and Africa (ILCAA), Tokyo University of Foreign Studies',
		place: 'Tokyo',
		lang: 'ja'
	},
	noonan2007: {
		region: 'general',
		author: 'Noonan, Michael',
		citeAuthor: 'Noonan',
		year: '2007',
		title: 'Complementation',
		container:
			'Language typology and syntactic description, vol. II: Complex constructions (2nd edition)',
		editor: 'Shopen, Timothy',
		pages: '52–150',
		publisher: 'Cambridge University Press',
		place: 'Cambridge',
		reported: true
	},
	murasaki1976: {
		region: 'sakhalin',
		author: 'Murasaki Kyōko 村崎恭子',
		citeAuthor: 'Murasaki',
		year: '1976',
		title: 'カラフトアイヌ語',
		titleTr: 'Sakhalin Ainu',
		note: 'Materials volume (資料篇), with cassette tapes',
		publisher: 'Kokusho Kankōkai',
		place: 'Tokyo',
		lang: 'ja'
	},
	murasaki1979: {
		region: 'sakhalin',
		author: 'Murasaki Kyōko 村崎恭子',
		citeAuthor: 'Murasaki',
		year: '1979',
		title: 'カラフトアイヌ語——文法篇',
		titleTr: 'Sakhalin Ainu: Grammar volume',
		publisher: 'Kokusho Kankōkai',
		place: 'Tokyo',
		lang: 'ja'
	},
	murasaki1996: {
		region: 'sakhalin',
		author: 'Murasaki Kyōko 村崎恭子 (ed. & tr.)',
		citeAuthor: 'Murasaki',
		year: '1996',
		title: '浅井タケ昔話全集 1：話者の絶えた樺太アイヌ語資料集成',
		titleTr:
			'The complete folktales of Asai Take, vol. 1: A compilation of Sakhalin Ainu materials from a language whose speakers are gone',
		publisher: '私家版 [privately published]',
		place: 'Yokohama',
		note: 'First edition; revised and completed as Murasaki 2001',
		lang: 'ja'
	},
	murasaki2001: {
		region: 'sakhalin',
		author: 'Murasaki Kyōko 村崎恭子 (ed.)',
		citeAuthor: 'Murasaki',
		year: '2001',
		title: '改訂浅井タケ昔話全集 I・II',
		titleTr: 'The complete folktales of Asai Take, vols. I–II, revised edition',
		container: 'Endangered Languages of the Pacific Rim (ELPR) Publication Series A2-010',
		publisher: 'Osaka Gakuin University',
		place: 'Suita',
		lang: 'ja'
	},
	murasaki2009: {
		region: 'sakhalin',
		author: 'Murasaki Kyōko 村崎恭子',
		citeAuthor: 'Murasaki',
		year: '2009',
		title: '樺太アイヌ語の数詞について',
		titleTr: 'On the numerals of Sakhalin Ainu',
		container:
			'サハリンの言語世界——北大文学研究科公開シンポジウム報告書 [The linguistic world of Sakhalin]',
		editor: 'Tsumagari Toshirō 津曲敏郎',
		pages: '71–84',
		publisher: 'Graduate School of Letters, Hokkaido University',
		place: 'Sapporo',
		url: 'https://hdl.handle.net/2115/38301',
		lang: 'ja'
	},
	murasaki2013: {
		region: 'sakhalin',
		author: 'Murasaki Kyōko 村崎恭子',
		citeAuthor: 'Murasaki',
		year: '2013',
		title: '藤山ハル口述 カラフトアイヌ語例文集 1',
		titleTr: 'Short sentences in Sakhalin Ainu spoken by Fujiyama Haru, vol. 1',
		publisher: 'Hokkaido University Center for Ainu and Indigenous Studies (online publication)',
		place: 'Sapporo',
		lang: 'ja'
	},
	murasaki2025: {
		region: 'sakhalin',
		author: 'Murasaki Kyōko 村崎恭子',
		citeAuthor: 'Murasaki',
		year: '2025',
		title: 'エンチウ（樺太アイヌ）語会話入門【改訂版】',
		titleTr: 'An introduction to Enciw (Sakhalin Ainu) conversation, revised edition',
		publisher: 'Fujita Insatsu Excellent Books',
		place: 'Kushiro',
		lang: 'ja'
	},
	ochiai2021: {
		region: 'general',
		author: 'Ochiai Izumi 落合いずみ',
		citeAuthor: 'Ochiai',
		year: '2021',
		title: 'Ainugo no sūshi saikō: nijisshinpō ni okeru kahō-sanpō kara jōhō-sanpō e no kirikae',
		titleTr:
			'Ainu numerals reconsidered: the switch from undercounting to overcounting in the vigesimal system',
		lang: 'ja'
	},
	ono2020: {
		region: 'general',
		author: 'Ono, Yohei',
		citeAuthor: 'Ono',
		year: '2020',
		title:
			'Reconsideration of “major division” of Ainu dialects: A statistical reanalysis of Asai (1974)',
		container: '北方言語研究 [Hoppō gengo kenkyū: Northern language studies]',
		pages: '10: 231–254',
		url: 'https://doi.org/10.14943/93119'
	},
	pilsudski1912: {
		region: 'sakhalin',
		author: 'Piłsudski, Bronisław',
		citeAuthor: 'Piłsudski',
		year: '1912',
		title: 'Materials for the study of the Ainu language and folklore',
		publisher: 'Imperial Academy of Sciences',
		place: 'Cracow'
	},
	pilsudski1998: {
		region: 'sakhalin',
		author: 'Piłsudski, Bronisław',
		citeAuthor: 'Piłsudski',
		year: '1998',
		title:
			'The collected works of Bronisław Piłsudski, vol. 2: Materials for the study of the Ainu language and folklore (Cracow 1912)',
		editor: 'Majewicz, Alfred F.',
		container: 'Trends in Linguistics: Documentation 15-2',
		publisher: 'Mouton de Gruyter',
		place: 'Berlin & New York'
	},
	refsing1986: {
		region: 'hokkaido',
		author: 'Refsing, Kirsten',
		citeAuthor: 'Refsing',
		year: '1986',
		title: 'The Ainu language: The morphology and syntax of the Shizunai dialect',
		publisher: 'Aarhus University Press',
		place: 'Aarhus'
	},
	sakaguchi2019yamamoto: {
		region: 'sakhalin',
		author: 'Sakaguchi Ryō 阪口諒',
		citeAuthor: 'Sakaguchi',
		year: '2019',
		title:
			'山本多助筆録アイヌ語樺太方言テキスト(1)——「カラフト・ウベベケレ（オㇷ゚ケ ネワ イコロ ウペペケレ）」',
		titleTr:
			'A Sakhalin Ainu text recorded by Yamamoto Tasuke (1): the Karafuto upepekere “Opke newa ikoro upepekere”',
		container: '北方人文研究 [Journal of the Center for Northern Humanities]',
		pages: '12: 111–121',
		publisher: 'Hokkaido University',
		place: 'Sapporo',
		url: 'https://hdl.handle.net/2115/73546',
		lang: 'ja'
	},
	sakaguchi2020utara: {
		region: 'sakhalin',
		author: 'Sakaguchi Ryō 阪口諒',
		citeAuthor: 'Sakaguchi',
		year: '2020a',
		title: 'アイヌ語樺太方言におけるutaraの用法',
		titleTr: 'The uses of utara in Sakhalin Ainu',
		container: '北方言語研究 [Hoppō gengo kenkyū: Northern language studies]',
		pages: '10: 187–202',
		url: 'https://doi.org/10.14943/93116',
		lang: 'ja'
	},
	sakaguchi2020ahcin: {
		region: 'sakhalin',
		author: 'Sakaguchi Ryō 阪口諒',
		citeAuthor: 'Sakaguchi',
		year: '2020b',
		title: 'アイヌ語樺太方言における名詞複数接尾辞ahcinの用法',
		titleTr: 'The uses of the nominal plural suffix -ahcin in Sakhalin Ainu',
		container: '北方人文研究 [Journal of the Center for Northern Humanities]',
		pages: '13: 1–19',
		url: 'https://hdl.handle.net/2115/77239',
		lang: 'ja'
	},
	sakaguchi2020tuyta: {
		region: 'sakhalin',
		author: 'Sakaguchi Ryō 阪口諒',
		citeAuthor: 'Sakaguchi',
		year: '2020c',
		title: 'ピウスツキ採集のアイヌ語樺太方言民話テキスト——「カレイ男とカジカ男」',
		titleTr:
			'A Sakhalin Ainu folktale text collected by Piłsudski: “The flatfish man and the sculpin man”',
		container:
			'千葉大学大学院人文公共学府研究プロジェクト報告書 354『ユーラシア諸言語の類型論的記述』 [Chiba University research project reports 354: Typological description of Eurasian languages]',
		pages: '43–69',
		place: 'Chiba',
		lang: 'ja'
	},
	sakaguchi2021: {
		region: 'sakhalin',
		author: 'Sakaguchi Ryō 阪口諒',
		citeAuthor: 'Sakaguchi',
		year: '2021',
		title: '『アイヌ語ロシア語辞典』中のアイヌ語樺太方言テキスト',
		titleTr: 'Sakhalin Ainu texts in the Ainu–Russian dictionary (of Dobrotvorsky)',
		container:
			'アイヌ語・アイヌ文化研究の課題 [Issues in Ainu language and culture studies]（千葉大学大学院人文公共学府研究プロジェクト報告書 358）',
		pages: '43–55',
		publisher: 'Chiba University',
		place: 'Chiba',
		lang: 'ja'
	},
	sakaguchi2022: {
		region: 'sakhalin',
		author: 'Sakaguchi Ryō 阪口諒',
		citeAuthor: 'Sakaguchi',
		year: '2022',
		title: 'アイヌ語樺太方言における数詞と計算',
		titleTr: 'Numerals and calculation in Sakhalin Ainu',
		container: '北方人文研究 [Journal of the Center for Northern Humanities]',
		pages: '15: 63–84',
		url: 'https://hdl.handle.net/2115/84608',
		lang: 'ja'
	},
	sakaguchi2024: {
		region: 'sakhalin',
		author: 'Sakaguchi Ryō 阪口諒',
		citeAuthor: 'Sakaguchi',
		year: '2024',
		title: '樺太アイヌ語における人称と数の標示に関する研究',
		titleTr: 'A study of person and number marking in Sakhalin Ainu',
		container: 'Doctoral dissertation, Chiba University',
		lang: 'ja'
	},
	sato2008: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2008',
		title: 'アイヌ語文法の基礎',
		titleTr: 'Foundations of Ainu grammar',
		publisher: 'Daigaku Shorin',
		place: 'Tokyo',
		lang: 'ja'
	},
	sato1985: {
		region: 'sakhalin',
		author: 'Satō, Tomomi',
		citeAuthor: 'Satō',
		year: '1985',
		title: 'The first person objective affix in- in the East Coast dialects of Sakhalin Ainu',
		container:
			'Proceedings of the International Symposium on B. Piłsudski’s Phonographic Records and the Ainu Culture',
		pages: '157–167',
		publisher: 'Hokkaido University',
		place: 'Sapporo'
	},
	sato2015: {
		region: 'general',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2015',
		title: 'アイヌ語の合成語のアクセント規則とその例外について',
		titleTr: 'On the accent rules of Ainu compounds and their exceptions',
		container: 'アイヌ語研究の諸問題 [Problems in Ainu language research]',
		pages: '1–13',
		lang: 'ja'
	},
	sentoku1929: {
		region: 'sakhalin',
		author: 'Sentoku Tarōji 千徳太郎治',
		citeAuthor: 'Sentoku',
		year: '1929',
		title: '樺太アイヌ叢話',
		titleTr: 'Collected accounts of the Sakhalin Ainu',
		publisher: 'Shikōdō Ichikawa Shōten 市光堂市川商店',
		place: 'Tokyo',
		lang: 'ja'
	},
	shiraishi2022: {
		region: 'general',
		author: 'Shiraishi, Hidetoshi & Itsuji Tangiku',
		citeAuthor: 'Shiraishi & Tangiku',
		year: '2022',
		title: 'Language contact in the north',
		container: 'Handbook of the Ainu language',
		editor: 'Bugaeva, Anna',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston'
	},
	shibatani1990: {
		region: 'general',
		author: 'Shibatani, Masayoshi',
		citeAuthor: 'Shibatani',
		year: '1990',
		title: 'The languages of Japan',
		publisher: 'Cambridge University Press',
		place: 'Cambridge'
	},
	tamura1999: {
		region: 'sakhalin',
		author: 'Tamura Masashi 田村雅史',
		citeAuthor: 'Tamura',
		year: '1999',
		title: '樺太アイヌ語の借用語について——ウイルタ語・ニヴフ語との関係を中心に',
		titleTr:
			'On loanwords in Sakhalin Ainu, with special reference to the Uilta and Nivkh connections',
		container: '北方言語研究 [Northern language studies]',
		pages: '別冊',
		note: 'Cited after Shiraishi & Tangiku (2022)',
		reported: true,
		lang: 'ja'
	},
	tamura2000: {
		region: 'hokkaido',
		author: 'Tamura, Suzuko',
		citeAuthor: 'Tamura',
		year: '2000',
		title: 'The Ainu language',
		publisher: 'Sanseido',
		place: 'Tokyo'
	},
	tamura2003: {
		region: 'general',
		author:
			'Kitahara Jirōta 北原次郎太, Tamura Masashi 田村雅史, Tamura Masato 田村将人, Tangiku Itsuji 丹菊逸治 & Tamura Suzuko 田村すず子 (eds.)',
		citeAuthor: 'Kitahara et al.',
		year: '2003',
		title:
			'アイヌ語樺太・名寄・釧路方言の資料——藤山ハルさん・山田ハヨさん・北風磯吉さん・徹辺重次郎さんの口頭文芸・語彙・民族誌',
		titleTr:
			'Materials on the Sakhalin, Nayoro and Kushiro dialects of Ainu: Oral literature, vocabulary and ethnography of Fujiyama Haru, Yamada Hayo, Kitakaze Isokichi and Tetsube Jūjirō',
		container: 'ELPR Publication Series A2-039',
		note: 'Recordings by Tamura Suzuko',
		publisher: 'Osaka Gakuin University',
		place: 'Suita',
		lang: 'ja'
	},
	tangiku1998: {
		region: 'sakhalin',
		author: 'Tangiku Itsuji 丹菊逸治',
		citeAuthor: 'Tangiku',
		year: '1998',
		title: 'アイヌ語樺太西海岸方言の-rV音節で終る動詞について',
		titleTr: 'On verbs ending in -rV syllables in West-coast Sakhalin Ainu',
		container:
			'千葉大学ユーラシア言語文化論集 [Chiba University Eurasian languages and cultures studies]',
		pages: '1: 222–234',
		lang: 'ja'
	},
	tangiku2022: {
		region: 'general',
		author: 'Tangiku, Itsuji',
		citeAuthor: 'Tangiku',
		year: '2022',
		title: 'Differences between Karafuto and Hokkaido Ainu dialects',
		container: 'Handbook of the Ainu language',
		editor: 'Bugaeva, Anna',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston'
	},
	tangiku2001: {
		region: 'sakhalin',
		author: 'Tangiku Itsuji 丹菊逸治 & Ogihara Shinko 荻原眞子',
		citeAuthor: 'Tangiku & Ogihara',
		year: '2001',
		title: '千徳太郎治のピウスツキ宛書簡——「ニシパ」へのキリル文字の手紙',
		titleTr: 'Sentoku Tarōji’s letters to Piłsudski: Letters in Cyrillic script to “nispa”',
		container:
			'千葉大学ユーラシア言語文化論集 [Chiba University Eurasian languages and cultures studies]',
		pages: '4: 187–226',
		lang: 'ja'
	},
	unesco2010: {
		region: 'general',
		author: 'Moseley, Christopher (ed.)',
		citeAuthor: 'UNESCO',
		year: '2010',
		title: 'Atlas of the world’s languages in danger, 3rd edn',
		publisher: 'UNESCO Publishing',
		place: 'Paris',
		url: 'https://unesdoc.unesco.org/ark:/48223/pf0000187026'
	},
	urata1998: {
		region: 'hokkaido',
		author: 'Urata Yū 浦田遊 (ed.)',
		citeAuthor: 'Urata',
		year: '1998',
		title: 'アイヌ・モシリ——幻のアイヌ語誌復刊',
		titleTr: 'Ainu mosir: Reprint of the lost Ainu-language journal',
		publisher: 'Kushiro Ainu Bunka Konwakai',
		place: 'Kushiro',
		lang: 'ja'
	},
	veselinova2016: {
		region: 'general',
		author: 'Veselinova, Ljuba',
		citeAuthor: 'Veselinova',
		year: '2016',
		title: 'The Negative Existential Cycle viewed through the lens of comparative data',
		container: 'Cyclical change continued (Linguistics Today 227)',
		editor: 'van Gelderen, Elly',
		pages: '139–187',
		publisher: 'John Benjamins',
		place: 'Amsterdam',
		reported: true
	},
	vovin1993: {
		region: 'general',
		author: 'Vovin, Alexander',
		citeAuthor: 'Vovin',
		year: '1993',
		title: 'A reconstruction of Proto-Ainu',
		publisher: 'Brill',
		place: 'Leiden'
	}
};

export type BibKey = keyof typeof bibliography;

<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	Sakhalin Ainu marks the role of oblique noun phrases with postposed case
	particles: <A w="ohta" gl="in, at" /> for location, <A w="onne" gl="to, toward" />
	for direction, <A w="orowa" gl="from" /> and <A w="wa" gl="from" /> for source,
	<A w="ani" gl="with, by means of" /> for instrument, <A w="tura" gl="together with" />
	for accompaniment, <A w="ne" gl="as, into" /> for a resulting or assumed state, and
	a handful of others. Chiri's grammar classifies these as the &lsquo;fourth class of
	particles&rsquo; (<span lang="ja">格助詞</span>) and itemises them with their
	Sakhalin variants <Ref k="chiri1942" p="§§122–123" />; Murasaki's course book
	presents the same core set for Rayciska <Ref k="murasaki2025" p="13, 21–22" paren />.
	Finer spatial relations are expressed not by particles but by
	<em>relational nouns</em> — <A w="kaske" gl="top" />, <A w="empoke" gl="underside" />,
	<A w="onnayke" gl="inside" />, <A w="sam" gl="beside" /> — which head a possessive-like
	phrase and then combine with the case particles (Chiri's &lsquo;first-class formal
	nouns&rsquo;, <Ref k="chiri1942" p="§§78–79" paren />; cf.
	<Xr ch="nouns-and-possession">Chapter 7</Xr>). This chapter describes the particles
	(§11.1–§11.7), the relational nouns (§11.8), and the fuzzy boundary between case
	particle, relational noun, and clause linker (§11.9).
</p>

<S t="The case-particle system" id="case-particles">
	<p>
		Table 1 surveys the system. The particles follow the noun phrase directly; the
		noun keeps its conceptual or possessed form as the sense requires, and plural
		<i lang="ain">-hcin</i> precedes the particle
		(<i lang="ain">teki-hi-cin ohta</i> &lsquo;in his hands&rsquo;,
		<Ref k="pilsudski1912" p="70" paren />; <Ref k="chiri1942" p="§67" paren />).
		Most of the particles also have an independent, anaphoric use without a host
		noun — <i lang="ain">ohta</i> &lsquo;there&rsquo;, <i lang="ain">orowa</i>
		&lsquo;then, after that&rsquo; (944 corpus tokens, mostly as a narrative
		connective), <i lang="ain">turano</i> &lsquo;at the same time&rsquo; — a point
		Chiri makes for each entry <Ref k="chiri1942" p="§123" />.
	</p>
	<table>
		<caption>
			Case particles of Sakhalin Ainu. Item numbers are Chiri's entries under his
			§123; forms in parentheses are East-coast spellings in the Sentoku letters.
		</caption>
		<thead>
			<tr><th>form</th><th>function</th><th>sources</th></tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain">ohta</i> (<i lang="ain">okta</i>), <i lang="ain">ta</i></td>
				<td>locative–dative ‘in, at, to’</td>
				<td><Ref k="chiri1942" p="§123(139–140), (150)" paren />; <Ref k="murasaki2025" p="21" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">onne</i></td>
				<td>allative ‘to, toward, into’</td>
				<td><Ref k="chiri1942" p="§123(129)" paren />; <Ref k="murasaki2025" p="21" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">ene</i></td>
				<td>allative ‘to’, chiefly on relational nouns</td>
				<td><Ref k="chiri1942" p="§123(103)" paren />; corpus, see (18)</td>
			</tr>
			<tr>
				<td><i lang="ain">wa</i>, <i lang="ain">orowa</i>, <i lang="ain">oro</i></td>
				<td>ablative ‘from’; agent of a passive</td>
				<td><Ref k="chiri1942" p="§123(157), (137), (135)" paren />; <Ref k="murasaki2025" p="21" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">ani</i></td>
				<td>instrumental ‘with, by means of’; cause</td>
				<td><Ref k="chiri1942" p="§123(98)" paren />; <Ref k="murasaki2025" p="13" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">tura(no)</i></td>
				<td>comitative ‘together with’</td>
				<td><Ref k="chiri1942" p="§123(153–154)" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">ne</i></td>
				<td>mutative–essive ‘as, into’</td>
				<td><Ref k="chiri1942" p="§123(121)" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">pahno</i> (<i lang="ain">pak no</i>)</td>
				<td>terminative ‘until, as far as, as much as’</td>
				<td><Ref k="chiri1942" p="§123(142)" paren />; <Ref k="murasaki2025" p="22" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">kaari</i>, <i lang="ain">okakara</i></td>
				<td>prosecutive ‘through, along, via’</td>
				<td><Ref k="chiri1942" p="§123(109), (127)" paren />; corpus, see (11)</td>
			</tr>
			<tr>
				<td><i lang="ain">peka</i></td>
				<td>perlative ‘over, about (an area)’</td>
				<td><Ref k="chiri1942" p="§123(141)" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">oykari</i></td>
				<td>‘around’</td>
				<td><Ref k="chiri1942" p="§123(126)" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">un</i></td>
				<td>attributive ‘of, belonging to (a place)’</td>
				<td><Ref k="chiri1942" p="§123(156)" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">nah</i></td>
				<td>quotative</td>
				<td><Ref k="chiri1942" p="§123(120)" paren />; <Xr ch="complementation">Chapter 22</Xr></td>
			</tr>
		</tbody>
	</table>
	<p>
		Two members of the Hokkaidō system are conspicuously restructured here. The
		allative is <i lang="ain">onne</i>, a Sakhalin form Chiri flags as such (Hokkaidō
		uses <i lang="ain">un</i> and <i lang="ain">orun</i>); and the plain ablative is
		<i lang="ain">wa</i> with its expansions <i lang="ain">oro wa</i> &gt;
		<i lang="ain">orowa</i> and, in Sakhalin only, bare <i lang="ain">oro</i>
		<Ref k="chiri1942" p="§123(129), (135), (157)" />. The attributive
		<i lang="ain">un</i> survives in place-name epithets of the type
		<i lang="ain">Sannupis-un re horokewpo</i> &lsquo;the three young men of
		Sannupista&rsquo; <Ref k="murasaki2001" p="text 51" paren />.
	</p>
</S>

<S t="Locative and dative ohta, ta" id="locative">
	<p>
		<A w="ohta" /> is the workhorse of the system — over five hundred tokens in the
		Asai corpus alone. Historically it is the relational noun <A w="oro" gl="place" />
		plus the locative particle <i lang="ain">ta</i> (<i lang="ain">or-ta</i>), and
		Chiri notes that the fusion had gone so far that <i lang="ain">ohta</i>,
		<i lang="ain">orun</i>, <i lang="ain">orowa</i> behave as simple particles
		<Ref k="chiri1942" p="§79" />. In the East-coast letters it is spelled
		<i lang="ain">okta</i>, with the cluster unlenited
		<Ref k="tangiku2001" p="Letter 1" paren />; see
		<Xr ch="morphophonology">Chapter 5</Xr> on the <i lang="ain">h</i> ~
		<i lang="ain">k</i> alternation. It marks both static location (1) and the goal
		of motion (2), the latter overlapping with <i lang="ain">onne</i>:
	</p>
	<Ex
		m="cise ohta an monimahpo nah kii manu"
		g="house LOC exist.SG girl QUOT do REP"
		tr="The girl who was in the house said this."
		cite="murasaki2001:text 52"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="nay ohta san-i ike taa wahka kuu"
		g="river LOC go.down.SG-NMLZ and EMPH water drink"
		tr="He went down to the river and drank water."
		cite="murasaki2001:text 34"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Temporal noun phrases take the same particle: <i lang="ain">sihtoono ohta</i>
		&lsquo;at midday&rsquo; <Ref k="murasaki2001" p="text 46" paren />,
		<i lang="ain">sine cup okta</i> &lsquo;in one month&rsquo;,
		<i lang="ain">nuca kotan koro okta</i> &lsquo;when the Russians held the
		country&rsquo; <Ref k="tangiku2001" p="Letter 1" paren />.
	</p>
	<p>
		The bare particle <i lang="ain">ta</i> is no longer free with ordinary nouns: in
		the corpus it appears fused with place roots and relational nouns —
		<i lang="ain">teeta</i> &lsquo;here&rsquo;, <i lang="ain">taata</i>
		&lsquo;there&rsquo;, <i lang="ain">kotanta</i> &lsquo;in the village&rsquo;,
		<i lang="ain">ciseta</i> &lsquo;at the house&rsquo; (17 tokens), and the
		<i lang="ain">kasketa</i>-type forms of §11.8 — while full noun phrases are
		hosted by <i lang="ain">ohta</i>. This distribution, which we draw from the
		corpus, matches Murasaki's teaching rule: place names and common nouns take
		<i lang="ain">ohta</i>, locative nouns take <i lang="ain">-ta</i>
		<Ref k="murasaki2025" p="17" paren />; Chiri's entry for <i lang="ain">ta</i>
		likewise has it on roots and formal nouns <Ref k="chiri1942" p="§123(150)" paren />.
	</p>
	<p>
		A Sakhalin innovation extends <i lang="ain">ohta</i> beyond location: Chiri
		documents, chiefly from Taraytomari, an overt object-marking use with effected
		objects and action nouns, where Hokkaidō would use plain word order
		<Ref k="chiri1942" p="§68" />:
	</p>
	<Ex
		m="matutah homa usey ohta karasi manu"
		g="woman.PL roe broth LOC make.PL REP"
		tr="The women prepared the roe broth."
		cite="chiri1942:§68"
		dial="WS"
		place="Taraytomari"
		note="Likewise ukoyki ohta kii ‘they had a fight’, hatto ohta kii ‘he issued a ban’ (same section). Chiri suggests the construction grew out of the locative — ‘did (work) on the broth’."
	/>
</S>

<S t="Allative onne and ene" id="allative">
	<p>
		<A w="onne" /> marks direction and endpoint, &lsquo;to, toward&rsquo;, and with
		verbs of entering &lsquo;into&rsquo; <Ref k="chiri1942" p="§123(129)" />,
		<Ref k="murasaki2025" p="21" paren />:
	</p>
	<Ex
		m="taa monimahpo wahka onne ahun manu"
		g="EMPH girl water to enter.SG REP"
		tr="The girl fell into the water."
		cite="murasaki2001:text 25"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="ehopenpa kusu wahka onne repun manu"
		g="be.startled because water to go.seaward REP"
		tr="Startled, it plunged off into the water."
		cite="tamura2003"
		dial="SA"
		place="Yamada Hayo"
	/>
	<p>
		With verbs of perception the <i lang="ain">onne</i>-phrase names the place a
		stimulus comes from — directionality construed from the perceiver:
	</p>
	<Ex
		m="ne'an cise onne taa hemata yuukara hawe-he an manu"
		g="that house to EMPH what song voice-POSS exist.SG REP"
		tr="From inside the house there came the voice of some song."
		cite="murasaki2001:text 19"
		dial="WS"
		place="Odasu (Asai Take)"
		note="We analyse onne here as orientational ‘in the direction of’; the same frame recurs with humihi ‘sound’ and ene, cf. (18)."
	/>
	<p>
		The shorter allative <A w="ene" /> — Chiri's Sakhalin entry &lsquo;…へ&rsquo;
		<Ref k="chiri1942" p="§123(103)" paren /> — attaches in the corpus almost always
		to relational nouns (<i lang="ain">empoke-ene</i> &lsquo;to under&rsquo;,
		<i lang="ain">kaske-ene</i> &lsquo;onto&rsquo;, <i lang="ain">onnayke ene</i>
		&lsquo;to inside&rsquo;) and to deictics (<i lang="ain">hekimoh ene</i>
		&lsquo;toward the hills&rsquo;), not to plain nouns; examples follow in §11.8.
		The interrogatives pattern with the particles: <i lang="ain">nakene</i>
		&lsquo;whither&rsquo;, <i lang="ain">nahta</i> &lsquo;where&rsquo;,
		<i lang="ain">nahwa</i> &lsquo;whence&rsquo; <Ref k="murasaki2025" p="21" paren />.
	</p>
</S>

<S t="Ablative wa, orowa and terminative pahno" id="ablative">
	<p>
		The ablative proper is <A w="wa" gl="from" />, segmentally identical to the
		converb particle &lsquo;and&rsquo; (<Xr ch="clause-linking">Chapter 23</Xr>) but
		attached to noun phrases <Ref k="chiri1942" p="§123(157)" />. After a nasal it
		assimilates: <i lang="ain">kim-ma</i> &lsquo;from the mountains&rsquo;
		(<i lang="ain">kim wa</i>), a fusion frequent enough (53 corpus tokens) that we
		treat it as lexicalised:
	</p>
	<Ex
		m="turano taa unkayoh kim-ma san manu"
		g="at.the.same.time EMPH ogre mountain-from come.down.SG REP"
		tr="At that same moment the ogre came down from the mountains."
		cite="murasaki2001:text 2"
		dial="WS"
		place="Odasu (Asai Take)"
		note="Clause-initial turano is the independent use of the comitative, §11.6."
	/>
	<Ex
		m="muhru empoke wa tani neya kosonto soma-ha taa asinke manu"
		g="pillow underside from now that silk.robe bundle-POSS EMPH take.out REP"
		tr="Then he took the bundle in the silk robe out from under the pillow."
		cite="murasaki2001:text 52"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The expanded form <A w="orowa" /> (&lsquo;from the place of&rsquo;,
		<i lang="ain">oro-wa</i>) does the same work with concrete sources and is the
		regular marker of the agent in passive-like indefinite constructions
		(<Xr ch="person-and-alignment">Chapter 13</Xr>)
		<Ref k="chiri1942" p="§123(137)" />; in Sakhalin the bare relational noun
		<i lang="ain">oro</i> can stand for <i lang="ain">oro wa</i>
		<Ref k="chiri1942" p="§79" paren />.
	</p>
	<Ex
		m="monimahpo taa uhsoro orowa taa sehpa sineh asinke ike horokewpo koore"
		g="girl EMPH bosom from EMPH sword.guard one take.out and man give"
		tr="The girl took a sword-guard out of her bosom and gave it to the man."
		cite="murasaki2001:text 25"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The terminative <A w="pahno" gl="until, as far as" /> bounds a path, a time
		span, or a quantity: <i lang="ain">kunne pahno</i> &lsquo;until dark&rsquo;
		<Ref k="murasaki2001" p="text 19" paren />, <i lang="ain">tani pahno</i>
		&lsquo;until now&rsquo; <Ref k="murasaki2001" p="text 4" paren />, quantitative
		&lsquo;as much as&rsquo; in example (11) of <Xr ch="numerals">Chapter 10</Xr>.
		The East-coast letters write it <i lang="ain">pak no</i>:
	</p>
	<Ex
		m="israh kara wa cokay e=an toko pak no paye=an kusu iki"
		g="message make and 1PL 2SG=exist.SG place until ADV go.PL=INDEF.S PURP do"
		tr="I will send word, and we will travel as far as the place where you are."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		Path through or along something is marked by the prosecutives
		<A w="kaari" gl="through, via" /> and <A w="okakara" gl="along" />
		<Ref k="chiri1942" p="§123(109), (127)" paren />: <i lang="ain">apa uturu
		kaari</i> &lsquo;through the gap of the door&rsquo;
		<Ref k="murasaki2001" p="text 4" paren />, <i lang="ain">kina tun peka</i>
		&lsquo;through the grass&rsquo; with the areal <i lang="ain">peka</i>
		<Ref k="tamura2003" paren />, and:
	</p>
	<Ex
		m="kotan-uhu ruwe-he ohta oman teh tani taa ruu okakara oman ike taa ciseta oman"
		g="village-POSS road-POSS LOC go.SG and now EMPH road along go.SG and EMPH house-LOC go.SG"
		tr="He took the road to his village, went along the road, and came to the house."
		cite="murasaki2001:text 25"
		dial="WS"
		place="Odasu (Asai Take)"
		note="Three markers in one route description: ohta for the goal of the first leg, okakara for the path, fused -ta for the final goal."
	/>
</S>

<S t="Instrumental ani" id="instrumental">
	<p>
		<A w="ani" /> marks instruments and materials and, by extension, cause; it is
		the Sakhalin (and Hidaka) counterpart of <i lang="ain">ari</i> elsewhere
		<Ref k="chiri1942" p="§123(98)" />. Murasaki glosses it &lsquo;by means
		of&rsquo; and her dialogues use the formula <i lang="ain">aynu itah ani</i>
		&lsquo;in Ainu&rsquo; <Ref k="murasaki2025" p="13" /> — the same phrase with
		which Asai Take's interviewers begged her back from Japanese
		(<i lang="ain">aynu itah ani yee kanne</i> &lsquo;say it in Ainu&rsquo;,
		<Ref k="murasaki2001" p="text 37" paren />).
	</p>
	<Ex
		m="sine nii tah mukara ani humpa turano tah hemata hawe-he an manu"
		g="one tree that axe INS chop as.soon.as that what voice-POSS exist.SG REP"
		tr="The moment she chopped at a tree with the axe, there was some kind of voice."
		cite="murasaki2001:text 49"
		dial="WS"
		place="Odasu (Asai Take)"
		note="Here ani is the instrumental on the noun mukara ‘axe’; the immediate-sequence marker is turano after the verb humpa ‘chop’ — for turano on a verb, see §11.9 on category overlap."
	/>
	<p>
		Causal <i lang="ain">ani</i> — &lsquo;because of this&rsquo;
		(<i lang="ain">tampe ani</i>) — is recorded by Chiri from Piłsudski's texts
		<Ref k="chiri1942" p="§123(98)" paren />. In the Sentoku letters the instrument
		reading covers writing materials: <i lang="ain">pon cicay ani kanpi</i>
		&lsquo;a letter (written) on a small scrap&rsquo;
		<Ref k="tangiku2001" p="Letter 1" paren />.
	</p>
</S>

<S t="Comitative tura and turano" id="comitative">
	<p>
		<A w="tura" /> &lsquo;together with&rsquo; is at bottom a transitive verb
		&lsquo;accompany&rsquo;, and much of its corpus life is verbal
		(<i lang="ain">tura ahun</i> &lsquo;went in with (her)&rsquo;,
		<i lang="ain">tura makan</i> &lsquo;went up together&rsquo;); postposed to a
		noun phrase it is the comitative case marker, optionally extended with
		adverbial <i lang="ain">-no</i>, <i lang="ain">turano</i>
		<Ref k="chiri1942" p="§123(153–154)" />.
	</p>
	<Ex
		m="re horokewpo tura an manu"
		g="three man COMIT exist.SG REP"
		tr="She lived together with the three young men."
		cite="murasaki2001:text 51"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Like the other particles, it has an anaphoric use without a host — example (7)
		above, <i lang="ain">turano</i> &lsquo;simultaneously with that&rsquo; — and a
		use with verbs, &lsquo;while V-ing, as soon as V&rsquo;
		(<i lang="ain">cis turano</i> &lsquo;while crying&rsquo;,
		<i lang="ain">humpa turano</i> in (12)); Chiri registers both extensions
		<Ref k="chiri1942" p="§123(153)" paren />. In the letters,
		<i lang="ain">tura</i> coordinates noun phrases outright:
		<i lang="ain">Seraroka aynu Sakayhama aynu tura</i> &lsquo;the Seraroka people
		together with the Sakayhama people&rsquo; <Ref k="tangiku2001" p="Letter 1" paren />.
		The reciprocal-marked adverb <i lang="ain">uturano</i> &lsquo;all together&rsquo;
		belongs to the same family <Ref k="murasaki2025" p="21" paren />.
	</p>
</S>

<S t="Mutative ne" id="mutative">
	<p>
		The copula <A w="ne" gl="be" /> (<Xr ch="copula-and-existence">Chapter 18</Xr>),
		used without person marking after a noun phrase, functions as a case particle of
		state: &lsquo;as X&rsquo;, &lsquo;(turn) into X&rsquo;
		<Ref k="chiri1942" p="§123(121)" />. The commonest frames are with
		<i lang="ain">kara</i> &lsquo;make (into)&rsquo;, <i lang="ain">koro</i>
		&lsquo;take as&rsquo; (<i lang="ain">mah ne koro</i> &lsquo;take as wife&rsquo;,
		example (3) of <Xr ch="nouns-and-possession">Chapter 7</Xr>), and verbs of
		becoming:
	</p>
	<Ex
		m="seta haw ne kara teh taa hohpa teh oman manu"
		g="dog voice COP make and EMPH leave and go.SG REP"
		tr="He made his voice into a dog's voice and went off, leaving her."
		cite="murasaki2001:text 46"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Chiri further records for Sakhalin a directional use of <i lang="ain">ne</i>
		equivalent to <i lang="ain">ta</i>, as in <i lang="ain">soy ne e-yah</i>
		&lsquo;you threw it outside&rsquo;, and a temporal one
		(<i lang="ain">numan-ne</i> &lsquo;yesterday&rsquo;)
		<Ref k="chiri1942" p="§123(121)" />; in the corpus this survives in fossilised
		adverbs (<i lang="ain">hekimoh ne</i> ~ <i lang="ain">hekimoh ene</i>
		&lsquo;toward the hills&rsquo;), and we take Chiri's <i lang="ain">ne</i> here to
		be the reduced form of allative <i lang="ain">ene</i>.
	</p>
</S>

<S t="Relational nouns" id="relational-nouns">
	<p>
		Fine-grained spatial relations are encoded by a closed class of bound nouns that
		follow a reference-point noun phrase: the construction is [N (+POSS) +
		relational noun + case]. Chiri defines the class by its person marking: a
		relational noun cannot take the possessive suffix of
		<Xr ch="nouns-and-possession">Chapter 7</Xr> in its spatial use, and a pronominal
		reference point appears as an <em>object</em> prefix — <i lang="ain">en-ka</i>
		&lsquo;above me&rsquo;, <i lang="ain">i-ka</i> &lsquo;above us&rsquo;, never
		<i lang="ain">*an-kasi</i> &lsquo;my top&rsquo; <Ref k="chiri1942" p="§§78–79" />.
		Murasaki teaches the same pattern for Rayciska with the accusative person
		prefixes: <i lang="ain">en=empokehe</i> &lsquo;below me&rsquo;,
		<i lang="ain">en=oponi</i> &lsquo;after me&rsquo;
		<Ref k="murasaki2025" p="26" />; and the reciprocal prefix yields
		<i lang="ain">u-sam</i> &lsquo;next to each other&rsquo;
		<Ref k="dalcorso2024" p="74" paren /> — built on the relational noun
		<i lang="ain">sam</i> &lsquo;side&rsquo;, not the homophonous verb
		<i lang="ain">sam</i> &lsquo;marry&rsquo; whose reciprocal
		<i lang="ain">u-sam</i> means &lsquo;marry each other&rsquo;
		(<Xr ch="valency" s="reciprocal">Chapter 14</Xr>).
	</p>
	<p>
		The inventory for Rayciska, with the locative <i lang="ain">-ta</i> attached, is
		listed by Murasaki <Ref k="murasaki2025" p="17–18" />: <i lang="ain">kaske</i>
		&lsquo;top (in contact)&rsquo; and elders' <i lang="ain">kaa</i>;
		<i lang="ain">enkaske</i> &lsquo;above (detached)&rsquo; and elders'
		<i lang="ain">enkaa</i>; <i lang="ain">kitayke</i> &lsquo;summit, source&rsquo;;
		<i lang="ain">empoke</i> &lsquo;underside&rsquo;; <i lang="ain">sanke</i>
		&lsquo;vicinity&rsquo;; <i lang="ain">tunke</i> &lsquo;inside (a mass)&rsquo;;
		<i lang="ain">noske</i> &lsquo;middle&rsquo;; <i lang="ain">onnayke</i>
		&lsquo;inside (an enclosure)&rsquo;; <i lang="ain">soyke</i>
		&lsquo;outside&rsquo;. Chiri's island-wide list adds among others
		<i lang="ain">corpoke</i> &lsquo;under&rsquo;, <i lang="ain">etoko</i>
		&lsquo;tip, front, before&rsquo;, <i lang="ain">sam</i> &lsquo;beside&rsquo;,
		<i lang="ain">oka(ke)</i> &lsquo;behind, after&rsquo;, <i lang="ain">uturu</i>
		&lsquo;interval&rsquo;, <i lang="ain">caa</i> &lsquo;edge, bank&rsquo;
		<Ref k="chiri1942" p="§79" paren />. Most are built on monosyllabic roots
		(<i lang="ain">ka</i> &lsquo;up&rsquo;, <i lang="ain">pok</i>
		&lsquo;down&rsquo;, <i lang="ain">sam</i> &lsquo;side&rsquo;) extended by
		<i lang="ain">-ke</i>, which Chiri analyses as rhythmic rather than meaningful
		<Ref k="chiri1942" p="§79" paren />.
	</p>
	<p>
		With the locative the relational noun takes <i lang="ain">-ta</i> directly:
	</p>
	<Ex
		m="yan nii kasketa ama manu"
		g="come.ashore tree top-LOC put REP"
		tr="He put it on top of a driftwood log."
		cite="murasaki2001:text 5"
		dial="WS"
		place="Odasu (Asai Take)"
		note="The same passage has the elders' variant yan nii kaata ‘on the driftwood’, exactly the kaske ~ kaa doublet Murasaki reports."
	/>
	<Ex
		m="cise onnayke-ta sine monimahpo an teh …"
		g="house inside-LOC one girl exist.SG and …"
		tr="Inside the house there lived a girl, and…"
		cite="murasaki2001:text 41"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Direction takes <i lang="ain">ene</i>, and source takes <i lang="ain">wa</i>, as
		already seen in (8); the three cases line up on one and the same relational
		noun, e.g. <i lang="ain">empoke-ta</i> &lsquo;under&rsquo; (17),
		<i lang="ain">empoke ene</i> &lsquo;to under (the pillow)&rsquo;
		<Ref k="murasaki2001" p="text 52" paren />, <i lang="ain">empoke wa</i>
		&lsquo;from under&rsquo; (8):
	</p>
	<Ex
		m="e=hoku-hu sookuma empoke-ta an teh kaske-ene e=okoyse …"
		g="2SG=husband-POSS rock.island underside-LOC exist.SG and top-to 2SG=urinate …"
		tr="Your husband is under the rock island, and you urinate down on top of him…"
		cite="murasaki2001:text 28"
		dial="WS"
		place="Odasu (Asai Take)"
		note="kaske-ene with no overt host noun: the reference point (‘him’) is anaphoric, third person being zero-marked."
	/>
	<Ex
		m="cise onnayke ene hemata humi-hi an manu"
		g="house inside to what sound-POSS exist.SG REP"
		tr="From inside the house there was some kind of sound."
		cite="murasaki2001:text 4"
		dial="WS"
		place="Odasu (Asai Take)"
		note="The perceiver-oriented frame of (5) again, here with a relational noun."
	/>
	<p>
		Temporal uses follow the spatial ones: <i lang="ain">etoko ta</i>
		&lsquo;before&rsquo; (<i lang="ain">cep koyki etoko ta</i> &lsquo;before the
		fishing season&rsquo;, <Ref k="tangiku2001" p="Letter 1" paren />;
		<i lang="ain">iine too etoko ta</i> &lsquo;four days before&rsquo;,
		<Ref k="chiri1942" p="§79" paren />) and <i lang="ain">okaaketa</i>
		&lsquo;after that&rsquo;, ubiquitous in Asai Take's narration
		<Ref k="murasaki2001" p="text 52" paren />.
	</p>
	<p>
		When a relational noun is promoted to a referring noun — &lsquo;the top&rsquo;,
		&lsquo;the inside&rsquo;, &lsquo;the tip&rsquo; as things — it rejoins the
		ordinary noun class and takes possessive morphology after all: Chiri notes
		substantivised <i lang="ain">kasike</i> &lsquo;face&rsquo;,
		<i lang="ain">oske</i> &lsquo;heart&rsquo; <Ref k="chiri1942" p="§78" paren />,
		Murasaki gives <i lang="ain">cih onnaykehe poro</i> &lsquo;the inside of the
		boat is big&rsquo; <Ref k="murasaki2025" p="17" paren />, and the corpus has:
	</p>
	<Ex
		m="makiri asinke ike etoko-ho kayteh teh an manu"
		g="knife take.out and tip-POSS break and exist.SG REP"
		tr="He took out his knife, and its tip was broken off."
		cite="murasaki2001:text 52"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
</S>

<S t="Particle, relational noun, or clause linker?" id="boundaries">
	<p>
		The three categories of this chapter shade into one another, and several
		high-frequency items live on the boundary. The diagnostics we apply are host
		class (noun phrase vs verb/clause) and person marking (object prefixes mark
		relational nouns; particles take none).
	</p>
	<p>
		<A w="kusu" gl="because; in order to" /> is in origin one of Chiri's
		&lsquo;second-class formal nouns&rsquo; (<i lang="ain">kus ~ kusu</i>)
		<Ref k="chiri1942" p="§78" paren />, but synchronically it attaches to clauses,
		marking cause or purpose <Ref k="chiri1942" p="§121(67)" paren /> — as in (5),
		(10) — and to interrogatives (<i lang="ain">hemata kusu</i> &lsquo;why&rsquo;,
		<Ref k="murasaki2025" p="19" paren />); clause linking is treated in
		<Xr ch="clause-linking">Chapter 23</Xr>.
	</p>
	<p>
		<A w="renkayne" /> is listed by Chiri twice, as a clause-linking particle
		&lsquo;because, thanks to&rsquo; and as a case particle on nouns
		<Ref k="chiri1942" p="§121(79), §123(145)" />. The East-coast letters use the
		clausal value:
	</p>
	<Ex
		m="tani nuca isan renkayne"
		g="now Russian not.exist because"
		tr="because the Russians are gone now"
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		In Asai Take's West-coast tales, by contrast, <i lang="ain">renkayne</i> is a
		quantifier &lsquo;in numbers, plenty&rsquo; (<Xr ch="numerals">Chapter 10</Xr>),
		and the causal value is carried by <i lang="ain">kusu</i> and
		<i lang="ain">ani</i>. We analyse the two as one lexeme (ultimately
		<i lang="ain">renkay</i> &lsquo;will, consent&rsquo; plus <i lang="ain">ne</i>,
		cf. <i lang="ain">an-renkayne</i> &lsquo;according to our wish&rsquo; in
		Dobrotvorsky's texts, <Ref k="dobrotvorsky1875" paren />;
		<Ref k="sakaguchi2021" paren />) that grammaticalised along two routes —
		&lsquo;by the will of, thanks to&rsquo; in the east, &lsquo;to one's heart's
		content&rsquo; &gt; &lsquo;in plenty&rsquo; in the west. A dialect-split
		polysemy of this kind would be settled by causal tokens in West-coast narrative;
		we have found none in the corpus.
	</p>
	<p>
		Finally, the particles themselves recruit verbal hosts. Instrumental
		<i lang="ain">ani</i> on an infinitive verb yields &lsquo;by V-ing&rsquo;
		(Chiri's Sakhalin example <i lang="ain">kira ani eh</i> &lsquo;came fleeing&rsquo;,
		<Ref k="chiri1942" p="§123(98)" paren />), and comitative
		<i lang="ain">turano</i> on a verb means &lsquo;as soon as&rsquo;, (12). The
		converse also holds: ablative <i lang="ain">wa</i> and the converb
		<i lang="ain">wa</i> &lsquo;and&rsquo; <Ref k="chiri1942" p="§121(88)" paren />
		are segmentally one item distinguished only by host class. Sakhalin Ainu thus
		presents a single postposed relator slot whose exponents are distributed over
		nominal and verbal hosts, with category labels — case particle, relational
		noun, conjunctive particle — naming positions on a grammaticalisation path
		rather than watertight classes.
	</p>
</S>

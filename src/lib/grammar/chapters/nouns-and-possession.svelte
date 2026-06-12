<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	The Sakhalin Ainu noun inflects for neither gender nor case, and number marking is
	optional (<Ref k="chiri1942" p="§§66–68" />; <Xr ch="number">Chapter 8</Xr>). Its one
	pervasive inflectional category is possession: nearly every noun opposes a bare
	<em>conceptual form</em> to a <em>possessed form</em> in <i lang="ain">-hV/-VhV</i>,
	<A w="cise" gl="house" /> ~ <A w="cisehe" gl="his/her house" />. Kindaichi called the
	latter the &ldquo;belonging form&rdquo; (<span lang="ja">所属形</span>); Chiri
	Mashiho <span lang="ja">知里真志保</span>, whose
	1942 description remains the fullest, opposes the conceptual form
	(<span lang="ja">概念形</span>) to person-marked forms built on a possessed stem
	<Ref k="chiri1942" p="§§69–71" paren />. We write POSS for the suffix throughout. This
	chapter describes the formation and use of the possessed form, the syntax of
	possessor phrases, the inalienable–alienable divide, the locative noun subclass, and,
	in outline, derived nominals.
</p>

<S t="Conceptual and possessed form" id="possessed-form">
	<p>
		Chiri introduces the opposition with <A w="sik" gl="eye" /> (Chiri's morphophonemic
		citation; the West-coast isolation form is <i lang="ain">sis</i> by coda neutralisation,
		<Xr ch="phonology" s="coda-h">Chapter 4</Xr>): the conceptual form
		names the bare concept, while the possessed form anchors the referent to a
		possessor, third person being zero-marked
		<Ref k="chiri1942" p="§70" />.
	</p>
	<table>
		<caption>Conceptual and person-marked forms of <i lang="ain">sik</i> ‘eye’, after
			Chiri (1942: §70); his short <i lang="ain">siki</i> corresponds to
			<i lang="ain">siki-hi</i> in the corpus, cf. (1)</caption>
		<thead>
			<tr><th>form</th><th>gloss</th></tr>
		</thead>
		<tbody>
			<tr><td><i lang="ain">sik</i></td><td>eye (conceptual form)</td></tr>
			<tr><td><i lang="ain">siki(hi)</i></td><td>his/her/their eye(s)</td></tr>
			<tr><td><i lang="ain">e-siki</i></td><td>your (sg) eyes</td></tr>
			<tr><td><i lang="ain">eci-siki</i></td><td>your (pl) eyes</td></tr>
			<tr><td><i lang="ain">ku-siki</i></td><td>my eyes</td></tr>
			<tr><td><i lang="ain">ci-siki</i></td><td>our (excl) eyes</td></tr>
			<tr><td><i lang="ain">an-siki</i></td><td>our (incl/indef) eyes</td></tr>
		</tbody>
	</table>
	<Ex
		m="nah kii yayne tani taa siki-hi naske manu"
		g="QUOT do while now EMPH eye-POSS open REP"
		tr="As he kept doing so, his eyes opened."
		cite="murasaki2001:text 50"
		dial="WS"
		place="Odasu (Asai Take)"
		note="The discourse particle taa is glossed EMPH throughout; see Chapter 6."
	/>
	<S t="Formation">
		<p>
			Vowel-final stems copy their final vowel after an inserted <i lang="ain">h</i>:
			<A w="sapa" gl="head" /> ~ <i lang="ain">sapa-ha</i>, <A w="cise" /> ~
			<i lang="ain">cise-he</i>, <A w="poo" gl="child" /> ~ <i lang="ain">poo-ho</i>
			<Ref k="chiri1942" p="§72" paren />. Stems in long
			<i lang="ain">ii/uu</i> take <i lang="ain">-(y/w)ehe</i>,
			<A w="imii" gl="garment" /> ~ <i lang="ain">imi-yehe</i>
			<Ref k="chiri1942" p="§72" />, <Ref k="bugaeva2022" p="ch. 9, §4.1" paren />, and
			in the corpus <A w="etu" gl="beak" /> ~ <i lang="ain">etu-wehe</i> (example 5 of
			<Xr ch="word-classes">Chapter 6</Xr>); short <i lang="ain">-i</i>,
			<i lang="ain">-u</i> and the glide codas are the domain of a Sakhalin
			innovation, the generalized <i lang="ain">-he</i>, taken up in the next
			subsection. Unlike Hokkaidō, which opposes
			short <i lang="ain">tek-e</i> to long <i lang="ain">tek-e-he</i>, Sakhalin uses
			only the long shape <Ref k="bugaeva2022" p="ch. 9, §4.1" paren />.
		</p>
		<p>
			Consonant-final stems take <i lang="ain">-VhV</i>. The descriptive tradition
			leaves the choice of vowel to the lexicon, with only loose tendencies by final
			consonant <Ref k="chiri1942" p="§72" />, <Ref k="murasaki1979" paren />, but
			Chiri's later study of Ainu vowel harmony shows the choice to be largely
			rule-governed: tabulating some 160 noun stems, he found the suffix vowel
			agreeing in harmonic class with the last vowel of the stem, the classes being
			A (<i lang="ain">a</i>, <i lang="ain">u</i>), B (<i lang="ain">o</i>) and C
			(<i lang="ain">e</i>, <i lang="ain">i</i>), and A and B vowels never combining
			within the word <Ref k="chiri1952" p="463–464" paren />. On this analysis
			<A w="nan" gl="face" /> ~ <i lang="ain">nan-uhu</i>, <A w="ram" gl="heart" /> ~
			<i lang="ain">ram-uhu</i> and <A w="kotan" gl="village" /> ~
			<i lang="ain">kotan-uhu</i> select an A-class suffix vowel after A-class
			<i lang="ain">a/u</i>, and <A w="sik" gl="eye" /> ~ <i lang="ain">sik-ihi</i> a
			C-class vowel after C-class <i lang="ain">i</i> — predicted, not memorized.
			What is genuinely lexical is the residue where harmony licenses more than one
			vowel and a stem (or a sense) settles on one: <i lang="ain">sar-a</i>
			&lsquo;its tail&rsquo; beside <i lang="ain">sar-i</i> &lsquo;its
			reed-field&rsquo; <Ref k="chiri1952" p="463" paren />. We treat such pairs as a
			short list of inflection-class diacritics, comparable to thematic vowels in
			declension systems elsewhere: the harmony rule assigns the class, and only the
			harmony-internal choices need be listed per noun. Dal Corso takes the
			underlying suffix vowel to be <i lang="ain">i</i> and the first V of
			<i lang="ain">-VhV</i> to be an epenthetic repair, citing free variation of the
			type <i lang="ain">kotanuhu</i> ~ <i lang="ain">kotanhu</i> in Piłsudski's
			corpus <Ref k="dalcorso2024" p="65, fn. 9" paren />; on that view the harmonic
			agreement states which quality the repair copies in, and the two analyses
			compose rather than compete.
		</p>
		<p>
			Stems whose final stop has weakened to coda <i lang="ain">h</i> resurface it
			before the suffix: <A w="teh" gl="hand" /> ~ <i lang="ain">tek-ihi</i>,
			<A w="otoh" gl="hair" /> ~ <i lang="ain">otop-ihi</i>, and
			<A w="mah" gl="wife, woman" /> ~ <i lang="ain">maci-hi</i>, where restored
			<i lang="ain">t</i> palatalizes before <i lang="ain">i</i>
			(<i lang="ain">kuci</i> from <i lang="ain">kut-i</i> &lsquo;his belt&rsquo;,
			<Ref k="chiri1942" p="§16" paren />). The segmental alternations involved are
			treated in <Xr ch="morphophonology">Chapter 5</Xr> and not repeated here; (2)
			shows the alternation live in one clause.
		</p>
		<Ex
			m="orowa tani taa teh ani sitayki-hi neampe teki-hi kotahma"
			g="then now EMPH hand INS hit-NMLZ TOP hand-POSS stick"
			tr="Then, when she struck it with a hand, her hand stuck fast."
			cite="murasaki2001:text 43"
			dial="WS"
			place="Odasu (Asai Take)"
			note="Conceptual teh under the instrumental, possessed tekihi as subject; on V-hi neampe ‘when…’ see Chapter 20."
		/>
	</S>
	<S t="The generalized -he" id="he-generalisation">
		<p>
			Hokkaidō dialects treat nouns in final short <i lang="ain">-i</i> and
			<i lang="ain">-u</i> as special classes — <i lang="ain">ni-ye(he)</i>
			&lsquo;his tree&rsquo;, with periphrasis usual for many <i lang="ain">u</i>-stems
			— and give glide-coda nouns <i lang="ain">-e(he)</i>,
			<i lang="ain">haw-e(he)</i>. Sakhalin levels all of these under a single
			<i lang="ain">-he</i>. In monosyllables the levelling is complete:
			<A w="nii" gl="tree" /> ~ <i lang="ain">ni-he</i>, <A w="kuu" gl="bow" /> ~
			<i lang="ain">ku-he</i> <Ref k="chiri1952" p="463" />,
			<Ref k="chiri1942" p="§72" paren />, with the regular shortening of the
			lengthened monosyllable before the suffix
			(<Xr ch="morphophonology">Chapter 5</Xr>), and likewise for the glide codas,
			<A w="ay" gl="arrow" /> ~ <i lang="ain">ay-he</i>, <A w="haw" gl="voice" /> ~
			<i lang="ain">haw-he</i> <Ref k="chiri1942" p="§72" paren />. The corpus offers
			no counterexamples in these classes, and we state the rule as exceptionless
			there.
		</p>
		<p>
			Polysyllabic <i lang="ain">-i/-u</i> stems instead admit both shapes: Chiri
			records <i lang="ain">kampi-hi</i> beside <i lang="ain">kampi-he</i>
			&lsquo;his letter&rsquo; <Ref k="chiri1942" p="§72" paren />, and the
			conservative copying variant was still the form Murasaki's West-coast
			consultants produced, as (3) shows.
		</p>
		<Ex
			m="ku-itanki-hi isam"
			g="1SG.A-teacup-POSS not.exist"
			tr="My teacup is not here."
			cite="murasaki2025"
			dial="WS"
			place="Rayciska"
			note="The polysyllabic i-stem itanki keeps the copying -hi where generalized -he would also be licit."
		/>
		<p>
			The generalization has thus run to completion in just the short-stem classes
			— monosyllables and glide-finals — and remains variable in polysyllables: a
			lexically gradual, structurally bounded change rather than an across-the-board
			replacement. A prosodic signature travels with the morphology: where Hokkaidō
			shifts stress rightward onto the suffix, <i lang="ain">ru-é</i> &lsquo;its
			track&rsquo;, Sakhalin keeps it on the stem, <i lang="ain">rú-he</i>
			<Ref k="chiri1942" paren />.
		</p>
	</S>
	<S t="Choosing between the two forms">
		<p>
			The conceptual form is used when the noun names a kind rather than an anchored
			referent: in compounding and incorporation
			(<i lang="ain">teh-kotoro</i> &lsquo;palm&rsquo;, lit. hand-surface,
			<Ref k="bugaeva2022" p="ch. 9, §4.3" paren />;
			<Ref k="chiri1942" p="§76" paren />), in vocatives
			(<A w="kakapo" gl="elder sister!" />, <Ref k="chiri1942" p="§76" paren />), and
			in classifying predications such as (4), where &lsquo;wife&rsquo; denotes a role.
		</p>
		<Ex
			m="pirika mahnekuh mah ne koro-ci"
			g="be.good woman wife COP have-PL"
			orig="pirika maxnekux max ne koroči"
			tr="They took beautiful women as wives."
			cite="chiri1942:§76; pilsudski1912:69"
			dial="ES"
			note="Chiri remarks that possessed maci here would wreck the sentence: ‘they took his wife’."
		/>
		<p>
			Once a referent is anchored in discourse, the possessed form tracks it. In the
			tale of the sticking tree-root, the axe is introduced in the conceptual form
			under the instrumental and immediately resumed in the possessed form, now
			&lsquo;his axe&rsquo;:
		</p>
		<Ex
			m="mukara ani sitayki ike mukara-ha kotahma"
			g="axe INS hit and axe-POSS stick"
			tr="He struck it with an axe, and his axe stuck fast."
			cite="murasaki2001:text 35"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
		<p>
			Tangiku, comparing parallel passages across the Asai corpus, finds exactly this
			division: first mention of an instrument may be conceptual or possessed, but the
			second mention within the scene is reliably possessed
			<Ref k="bugaeva2022" p="ch. 9, §4.3" paren />. Where anchoring is irrelevant the
			conceptual form may stand even for owned items, so the choice is pragmatic, not
			automatic <Ref k="chiri1942" p="§76" paren />.
		</p>
	</S>
</S>

<S t="The syntax of possession" id="possession-syntax">
	<p>
		Adnominal possession is head-marking and strictly head-final: the possessor NP
		stands before the possessed-form head, with no linking element — the type
		<i lang="ain">aynu cise-he</i> &lsquo;the man's house&rsquo;. Pronominal possessor
		phrases are usually omitted, since the prefix identifies them
		<Ref k="bugaeva2016" p="104" paren />.
	</p>
	<Ex
		m="sine acahcipo cise-he kaskepoka horokewpo oman-i ike wente manu"
		g="one old.woman house-POSS onto.top.of man go.SG-NMLZ and destroy REP"
		tr="The man climbed on top of an old woman's house and wrecked it."
		cite="murasaki2001:text 46"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="horokewpo imi-yehe anihi mii"
		g="man garment-POSS herself wear"
		tr="The man's garment she put on herself."
		cite="murasaki2001:text 40"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		With no overt possessor and no prefix, the possessed form is third-person by
		default and is read from context, here &lsquo;her husband&rsquo;:
	</p>
	<Ex
		m="nah taa yee teh taa hoku-hu koore"
		g="QUOT EMPH say and EMPH husband-POSS give"
		tr="So saying, she gave it to her husband."
		cite="murasaki2001:text 41"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<S t="Person-marked possession" id="pronominal-possession">
		<p>
			First- and second-person possessors are indexed on the possessed form by the
			same prefix set that marks transitive subjects: <i lang="ain">ku-</i> 1SG,
			<i lang="ain">ci-</i> 1PL exclusive, <i lang="ain">e-</i> 2SG,
			<i lang="ain">eci-</i> 2PL, <i lang="ain">an-</i> indefinite
			<Ref k="chiri1942" p="§73" />, <Ref k="sakaguchi2024" p="19" paren />;
			<Xr ch="person-and-alignment">Chapter 13</Xr>. The corpus shows the set at work
			on nouns of every semantic type: <A w="cip">ku-cip-ihi</A> &lsquo;my
			boat&rsquo; (9), <A w="kema">ku-kema-ha</A> &lsquo;my legs&rsquo; (10),
			<A w="nan">ku-nan-uhu</A> &lsquo;my face&rsquo;
			<Ref k="sakaguchi2024" p="19" paren />, <A w="ona">eci-ona-ha</A> &lsquo;your
			father&rsquo; (11), <A w="ona">an-ona-ha</A> &lsquo;my father&rsquo; (12).
		</p>
		<Ex
			m="tan cis neampe kuani ku-cip-ihi nee"
			g="this boat TOP 1SG 1SG.A-boat-POSS COP"
			orig="tan ćíś ne ámpe kuáni ku-ćíphi nḗ"
			tr="This boat is my boat."
			cite="pilsudski1912:Nr. 16, lines 29–30; sakaguchi2024:19"
			dial="ES"
		/>
		<Ex
			m="iineahsuy ku-kema-ha ku-turi kusu e-aa ciki pirika-no aa waa"
			g="hey 1SG.A-leg-POSS 1SG.A-stretch because 2SG-sit if be.good-ADV sit FIN"
			tr="Say, I am going to stretch my legs, so if you are going to sit, sit carefully."
			cite="murasaki2001:text 41"
			dial="WS"
			place="Odasu (Asai Take)"
			note="The same prefix ku- marks the possessor on kema-ha and the subject on turi."
		/>
		<Ex
			m="eci-ona-ha sikewente kusu kayo kusu an"
			g="2PL-father-POSS carry.heavy.load because call PURP exist.SG"
			tr="Your father is calling because the load on his back is heavy."
			cite="murasaki2001:text 27"
			dial="WS"
			place="Odasu (Asai Take)"
			note="kayo kusu an, lit. ‘is at calling’, is the progressive periphrasis (Chapter 15)."
		/>
		<p>
			In first-person narration the indefinite set <i lang="ain">an-</i> serves as
			narrative first person, on nouns as on verbs
			(<Xr ch="person-and-alignment">Chapter 13</Xr>):
		</p>
		<Ex
			m="an-ona-ha ekantasa ona-ha-hcin sukup-ahci ohta an oruspe nee manu"
			g="INDEF.A-father-POSS previous father-POSS-PL grow-PL at exist.SG story COP REP"
			tr="It is a story from the time when my father's fathers were growing up."
			cite="murasaki1976:14"
			dial="WS"
			place="Rayciska (Fujiyama Haru)"
		/>
		<p>
			Example (12) also shows the plural <i lang="ain">-hcin</i> stacked outside the
			possessive suffix, a Sakhalin development without Hokkaidō counterpart: it
			pluralizes possessor or possessum according to context
			<Ref k="sakaguchi2024" p="110–115" paren />, <Ref k="sakaguchi2020ahcin" paren />;
			<Xr ch="number">Chapter 8</Xr>. In (13) it marks the several possessors of
			(severally possessed) heads.
		</p>
		<Ex
			m="okore sapahka-ha-hcin menke-hci omantene taa cis-ahci kusu okay-ahci manu"
			g="all head-POSS-PL shave-PL and.then EMPH cry-PL PURP exist.PL-PL REP"
			tr="They had all shaved their heads and were weeping."
			cite="murasaki2001:text 34"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
	</S>
</S>

<S t="Inalienable possession" id="inalienable">
	<p>
		Body parts, kin terms and part–whole nouns are the core of the possessive system:
		in connected speech they occur overwhelmingly in the possessed form, and a bare
		conceptual <i lang="ain">sapa</i> or <i lang="ain">ona</i> is largely confined to
		compounds, vocatives and kind-readings of the type in (4)
		<Ref k="chiri1942" p="§76" />, <Ref k="bugaeva2022" p="ch. 9, §4.2" paren />. The
		corpus matches this distribution: hands, legs, heads, eyes, beaks, names, voices,
		fathers, mothers, sisters, wives, husbands and children appear as
		<i lang="ain">teki-hi</i>, <i lang="ain">kema-ha</i>, <i lang="ain">sapa-ha</i>,
		<i lang="ain">siki-hi</i>, <i lang="ain">etu-wehe</i>, <i lang="ain">ree-he</i>,
		<i lang="ain">maci-hi</i>, <i lang="ain">hoku-hu</i>, <i lang="ain">poo-ho</i> in
		example after example above. At the other pole, nouns for natural phenomena —
		<A w="cuh" gl="sun" />, <A w="ahto" gl="rain" />, <A w="atuy" gl="sea" />,
		<A w="wahka" gl="water" /> — normally stay conceptual, there being no possessor to
		anchor; Chiri notes that even these can be coerced into a possessed form when a
		god speaks of <i lang="ain">an-kanto-ho</i> &lsquo;our own sky&rsquo;
		<Ref k="chiri1942" p="§76" paren />, and Murasaki's consultants allowed
		<i lang="ain">ku-atuy-ehe</i> &lsquo;my sea, the sea where I live&rsquo;
		<Ref k="bugaeva2022" p="introduction" paren />. Inalienability is thus a strong
		statistical norm rather than a formal class boundary.
	</p>
</S>

<S t="Alienable possession and the koro strategy" id="alienable">
	<p>
		Here Sakhalin Ainu departs sharply from Hokkaidō. In Hokkaidō the suffixal
		possessed form is restricted to inalienables, and alienable possession requires
		the relative-clause periphrasis with <A w="koro" gl="have" />:
		<i lang="ain">a-kor mosir</i> &lsquo;our land, lit. the land we have&rsquo;. In
		Sakhalin the suffixal construction has been generalized to nouns of all classes —
		houses (6), garments (7), boats (9), axes (5), villages and lands
		(<i lang="ain">an-mosiri-hi</i> &lsquo;our land&rsquo;,
		<Ref k="murasaki1979" p="5" paren />) — so that both inalienable and alienable
		relations are head-marked <Ref k="bugaeva2016" p="105" paren />; for the place of
		this appositive possessor-plus-possessed pattern within Ainu and the wider Pacific
		see <Ref k="bugaeva2021" paren />. Even animate
		property is possessed suffixally: the ogre's hunting dog is its
		<A w="seta">seta-ha</A> <Ref k="murasaki2001" p="text 35" paren />, an example
		Tangiku singles out as characteristically Sakhalin
		<Ref k="bugaeva2022" p="ch. 9, §4.2" paren />.
	</p>
	<p>
		The <A w="koro" /> periphrasis nonetheless survives beside the suffixal pattern.
		Chiri describes it for possessees with personhood:
		<i lang="ain">an-koro mah</i> &lsquo;my wife&rsquo;, <i lang="ain">nispa koro
		mah</i> &lsquo;the chief's wife&rsquo; <Ref k="chiri1942" p="§76" paren />. The
		Sentoku letters use it for social relations and places, <i lang="ain">an=koro
		nispa</i> &lsquo;my dear sir&rsquo;, <i lang="ain">e=koro kotan</i> &lsquo;your
		village&rsquo; <Ref k="tangiku2001" p="Letter 1" paren />, and in the Asai corpus
		it alternates with the suffixal form within a single sentence:
	</p>
	<Ex
		m="poo koro ike taa tani ohkayo poo-ho naa mahtekuh poo-ho naa koro"
		g="child have and EMPH now male child-POSS also female child-POSS also have"
		tr="They had children — they had both a boy and a girl."
		cite="murasaki2001:text 39"
		dial="WS"
		place="Odasu (Asai Take)"
		note="Conceptual poo under koro for ‘to get children’; possessed poo-ho once the children are referential."
	/>
	<p>
		Where both strategies are available the difference is one of construal. Murasaki's
		consultant contrasted <i lang="ain">ku-kotan-uhu</i> &lsquo;my village&rsquo;,
		said while in it, with <i lang="ain">ku-koro kotan</i>, said of one's own village
		from elsewhere — and put <i lang="ain">ku-koro kotan</i> in the mouth of a god
		<Ref k="murasaki1979" p="83–84" paren />, <Ref k="bugaeva2022" p="ch. 9, §4.2"
		paren />. We read the suffixal form as marking a referent anchored to its
		possessor in the speech situation, and <A w="koro" /> as predicating ownership or
		control; the corpus alternations in (14) and in the letters are consistent with
		this division.
	</p>
</S>

<S t="Locative nouns" id="locative-nouns">
	<p>
		Locative (relational) nouns — <A w="onnayke" gl="inside" />,
		<A w="kaske" gl="top" />, <A w="empoke" gl="underside" />,
		<A w="sanke" gl="vicinity" />, <A w="okaake" gl="place behind, aftermath" />,
		<A w="etoko" gl="place ahead" />, <A w="uturuke" gl="interval" />,
		<A w="soyke" gl="outside" /> — form a noun subclass with their own syntax: they
		follow an NP directly (<i lang="ain">cise onnayke</i> &lsquo;the inside of the
		house&rsquo;), and only they combine with the simple locative postpositions
		<A w="ta" />, <A w="wa" />, <A w="ene" />
		<Ref k="chiri1942" p="§79" />, <Ref k="bugaeva2022" p="ch. 9, §5.1" paren />. Their
		case syntax belongs to <Xr ch="postpositions">Chapter 11</Xr>; here we note only
		how they participate in the possessive opposition. Before a locative postposition
		the conceptual form appears, as in (15); as argument of an ordinary verb the
		possessed form is required, as in (16) and (17)
		<Ref k="bugaeva2022" p="ch. 9, §5.4" paren />.
	</p>
	<Ex
		m="cise onnayke poka hemata humi-hi an manu"
		g="house inside through what sound-POSS exist.SG REP"
		tr="From inside the house came the sound of something."
		cite="murasaki2001:text 4"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="cise onnayke-he ekuhteka-hci"
		g="house inside-POSS darken-PL"
		tr="They made the inside of the house dark."
		cite="murasaki2001:text 4"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="cise-he onnayke-he ka reekoh muni-hi ka isan teh an"
		g="house-POSS inside-POSS even very rubbish-POSS even not.exist and exist.SG"
		tr="Inside his house there was not even a speck of dust."
		cite="murasaki2001:text 25"
		dial="WS"
		place="Odasu (Asai Take)"
		note="Possessed cise-he as possessor of possessed onnayke-he: possession recurses."
	/>
	<p>
		When a locative noun takes a personal possessor it selects the object prefixes,
		not the possessor set used by common nouns: <i lang="ain">en-ka</i> &lsquo;above
		me&rsquo; <Ref k="chiri1942" p="§79" paren />, <i lang="ain">i-osmak-e</i>
		&lsquo;behind me&rsquo; in the narrative of Yamabe Yasunosuke
		<span lang="ja">山辺安之助</span> <Ref k="sakaguchi2024" p="20" paren />. This object-like marking aligns the
		landmark argument of a locative noun with the object of a transitive verb, and we
		take it as the synchronic trace of their verb-like relationality.
	</p>
</S>

<S t="Derived nominals" id="derived-nominals">
	<p>
		Nouns are derived from verbs chiefly with the formal nouns
		<A w="pe" gl="thing, one" /> / <i lang="ain">-p</i>
		(<i lang="ain">poro-p</i> &lsquo;a big one&rsquo;), <A w="hi" gl="place, time,
		fact" />, <A w="kur" gl="person" /> and <A w="usi" gl="place" />
		<Ref k="chiri1942" p="§§60–63" paren />; their syntax is treated with
		nominalization in <Xr ch="nominalization">Chapter 20</Xr>. Distinctively Sakhalin
		is the extension of the possessive suffix itself to verbs: a clause may be
		nominalized by <i lang="ain">-hV</i> on its predicate, as in
		<i lang="ain">sitayki-hi neampe</i> &lsquo;when (she) struck it&rsquo; in (2),
		<i lang="ain">e=ki-hi</i> &lsquo;how you are faring&rsquo; in the Sentoku letters
		<Ref k="tangiku2001" p="Letter 1" paren />, or main-clause
		<i lang="ain">an-koro-ho</i> &lsquo;I have (a grandchild)&rsquo; noted already by
		Chiri <Ref k="chiri1942" p="§77" paren />. Bugaeva analyses these V-POSS forms as
		genuine nominalizations and as the innovation that gave Sakhalin Ainu its
		distinctive non-finite clause types <Ref k="bugaeva2016" p="105–110" paren />.
		That they are nominal in syntax and not merely in shape is shown by their
		argument privileges: a V-POSS clause can stand as the subject of an evaluative
		or veridicality predicate, as in (18), where the nominalized clause is what is
		judged untrue.
	</p>
	<Ex
		m="ku-ye-he sunke"
		g="1SG.A-say-NMLZ be.untrue"
		tr="What I said is untrue."
		lit="my saying is a lie"
		cite="murasaki1979:95; bugaeva2016:108"
		dial="WS"
		place="Rayciska"
	/>
	<p>
		The V-POSS construction and its uses return in
		<Xr ch="nominalization">Chapter 20</Xr> and
		<Xr ch="evidentiality">Chapter 16</Xr>.
	</p>
</S>

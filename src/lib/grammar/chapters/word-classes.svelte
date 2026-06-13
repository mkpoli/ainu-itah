<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	Sakhalin Ainu has two large open classes, nouns and verbs, and a set of closed classes:
	postpositions, demonstratives and other adnominals, numerals, adverbs, conjunctive
	particles, sentence-final and discourse particles, and interjections. There is no
	separate class of adjectives: property concepts are intransitive verbs (§6.4). The
	first systematic classification along these lines is <Ref k="chiri1942" />, whose
	Sakhalin-centred grammar distinguishes predicators (his <span lang="ja">用詞</span>,
	covering both action and property words, and split by a single morphological
	diagnostic into complete and incomplete verbs, §6.3), nominals
	(<span lang="ja">体詞</span>),
	adverbs, adnominals, and seven classes of particles
	<Ref k="chiri1942" p="§§21, 65, 85, 92, 117" paren />; Murasaki's grammar of the
	Rayciska dialect operates with essentially the same inventory
	<Ref k="murasaki1976" paren />. This chapter states the criteria that separate the
	classes and illustrates each with corpus material; the morphology and syntax of each
	class are treated in the chapters that follow, above all
	<Xr ch="nouns-and-possession">Chapter 7</Xr> and <Xr ch="verb-structure">Chapter 12</Xr>.
</p>

<S t="Criteria" id="criteria">
	<p>
		Word-class membership in Sakhalin Ainu is established morphosyntactically, not
		notionally. The two tests with the sharpest results are person marking and case
		marking. A verb is a word that heads a predicate and is indexed for the person of
		its arguments by the prefixes <A w="ku">ku-</A>, <A w="e">e-</A>,
		<A w="eci">eci-</A>, <A w="an">an-</A> and their kin (<Xr
			ch="person-and-alignment">Chapter 13</Xr>); a noun is a word that heads a noun
		phrase, serves as argument of a verb, and combines with case postpositions
		<Ref k="chiri1942" p="§65" paren />. Person prefixes attach to nouns as well, but
		there they mark a possessor on the possessed (&ldquo;belonging&rdquo;) form in
		<i lang="ain">-hV/-VhV</i> (<Xr ch="nouns-and-possession" s="possessed-form">§7.1</Xr>),
		not a clause participant. The possessive suffix itself does not separate the two
		classes: Sakhalin Ainu attaches it to verbs too, as a nominalizing device
		<Ref k="chiri1942" p="§77" paren />, <Ref k="bugaeva2016" p="104–107" paren />. What
		does separate them is distribution: only nouns take case postpositions and head
		argument phrases, and only verbs take the full argument-indexing paradigm, number
		marking such as the plural <i lang="ain">-hci</i>, and the mood and aspect particles
		of Chiri's first particle class <Ref k="chiri1942" p="§§41, 117" paren />.
	</p>
	<table>
		<caption>Word classes and their leading criteria</caption>
		<thead>
			<tr><th>Class</th><th>Open?</th><th>Criteria</th></tr>
		</thead>
		<tbody>
			<tr>
				<td>noun</td>
				<td>open</td>
				<td>heads argument NPs; combines with case postpositions; possessed form in
					<i lang="ain">-hV/-VhV</i> with possessor prefixes</td>
			</tr>
			<tr>
				<td>verb</td>
				<td>open</td>
				<td>heads predicates; argument person prefixes/suffixes; strict lexical
					transitivity; verbal number (<i lang="ain">-hci</i>, stem suppletion)</td>
			</tr>
			<tr>
				<td>postposition</td>
				<td>closed</td>
				<td>follows an NP; assigns a case-like relation; uninflected</td>
			</tr>
			<tr>
				<td>demonstrative/adnominal</td>
				<td>closed</td>
				<td>precedes the noun; no person or number morphology; cannot be predicate</td>
			</tr>
			<tr>
				<td>numeral</td>
				<td>closed</td>
				<td>prenominal like adnominals; nominalized with classifiers
					(<i lang="ain">-p/-pe</i>, <i lang="ain">-n</i>, <i lang="ain">pis</i>)</td>
			</tr>
			<tr>
				<td>adverb</td>
				<td>closed (plus derivation)</td>
				<td>modifies predicates; no inflection; many derived in <i lang="ain">-no</i></td>
			</tr>
			<tr>
				<td>conjunctive particle</td>
				<td>closed</td>
				<td>clause-final; links the clause to a following clause</td>
			</tr>
			<tr>
				<td>final/discourse particle</td>
				<td>closed</td>
				<td>sentence-final or phrase-final; evidential, illocutionary or
					information-structural meaning</td>
			</tr>
			<tr>
				<td>interjection</td>
				<td>closed</td>
				<td>extra-syntactic; utterance-initial or free-standing</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Nouns" id="nouns">
	<p>
		Nouns show no gender, no case inflection, and no obligatory number inflection
		<Ref k="chiri1942" p="§§66–68" paren />; the plural markers
		<A w="utah" gl="people" /> and <i lang="ain">-ahcin</i> are optional and
		semantically restricted (<Xr ch="number">Chapter 8</Xr>;
		<Ref k="sakaguchi2020utara" paren />, <Ref k="sakaguchi2020ahcin" paren />). The one
		inflectional opposition every speaker commands is that between the conceptual form
		and the possessed form, <i lang="ain">cise</i> ~ <i lang="ain">cise-he</i>
		&lsquo;house&rsquo; ~ &lsquo;his/her house&rsquo;, treated in depth in
		<Xr ch="nouns-and-possession">Chapter 7</Xr>. A noun phrase is head-final: adnominal
		demonstratives, numerals, possessor nouns and modifying verbs all precede the head.
		In (1) the demonstrative <A w="tan" gl="this" /> introduces the NP, the head
		<A w="nay" gl="river" /> serves as possessor of the following possessed noun, and the
		whole stands as subject of a nominal question predicate.
	</p>
	<Ex
		m="tan nay ree-he temana an-pe"
		g="this river name-POSS what exist-NMLZ"
		tr="What is the name of this river?"
		cite="murasaki2001:text 38"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Within the class, four subclasses need to be distinguished. (i) Common nouns,
		as in (1). (ii) Locative (relational) nouns such as <A w="onnayke" gl="inside" />,
		<A w="kaske" gl="top" />, <A w="empoke" gl="underside" />,
		<A w="sanke" gl="vicinity" />: they follow an NP directly, they alone combine with
		the simple locative postpositions <A w="ta" />, <A w="wa" />, <A w="ene" />, and
		when person-marked they take the object prefixes rather than the possessor set
		<Ref k="chiri1942" p="§79" />, <Ref k="sakaguchi2024" p="20" paren />; see
		<Xr ch="nouns-and-possession" s="locative-nouns">§7.5</Xr> and
		<Xr ch="postpositions">Chapter 11</Xr>. (iii) Formal (bound) nouns such as
		<A w="pe" gl="thing" />, <A w="hi" gl="place, time" />, <A w="ruwe" gl="trace" />,
		<A w="kusu" />, which never head a free NP and have lost person marking
		<Ref k="chiri1942" p="§80" paren />; they supply the language's nominalizers and
		much of its clause-linking machinery (<Xr ch="nominalization">Chapter 20</Xr>,
		<Xr ch="clause-linking">Chapter 23</Xr>). (iv) Personal pronouns,
		<A w="kuani" gl="I" />, <A w="eani" gl="you" />, <A w="anoka" gl="we, I" />,
		<A w="cioka" gl="we" />: a small closed set, used only for emphasis or
		disambiguation, since the person affixes carry the functional load
		<Ref k="chiri1942" p="§§81, 90" paren />; see
		<Xr ch="pronouns-and-demonstratives">Chapter 9</Xr>. Proper names stand somewhat
		apart from common nouns in that they form no possessed form
		<Ref k="chiri1942" p="§77" paren />.
	</p>
</S>

<S t="Verbs" id="verbs">
	<p>
		The verb is the morphological centre of the language. Three properties define the
		class. First, person: a verb is indexed for its subject and object by affixes,
		third person being zero <Ref k="chiri1942" p="§§22–23, 37" paren />. Second, strict
		transitivity: every verb stem is lexically specified as intransitive or transitive,
		and valency is changed only by overt morphology — causative <i lang="ain">-te/-re</i>,
		applicative <i lang="ain">e-/ko-/o-</i>, antipassive <i lang="ain">i-</i> and the
		like (<Xr ch="valency">Chapter 14</Xr>). Pairs such as <A w="ahun" gl="enter" />
		versus <A w="ahunke" gl="put in" /> or <A w="maka" gl="open (something)" /> versus
		<A w="makke" gl="come open" /> show the opposition lexically
		<Ref k="chiri1942" p="§§28, 35" paren />. Third, number: a set of stems distinguishes
		singular and plural by suppletion or stem alternation
		(<A w="oman" gl="go (one)" /> ~ <A w="paye" gl="go (several)" />,
		<A w="an" gl="exist (one)" /> ~ <A w="okay" gl="exist (several)" />), and Sakhalin
		Ainu adds the plural suffix <i lang="ain">-hci</i> to verbs of either class
		<Ref k="chiri1942" p="§§35, 41" paren />; <Xr ch="number">Chapter 8</Xr>. Verbs have
		no tense inflection; temporal and aspectual meaning is carried by particles and
		periphrasis <Ref k="chiri1942" p="§47" paren /> (<Xr ch="tense-aspect-mood">Chapter
		15</Xr>). In (2) the letter-writer indexes the agent with the indefinite-person
		prefix <i lang="ain">an=</i> and pluralizes with <i lang="ain">=hci</i>.
	</p>
	<Ex
		m="ponno ponno cep ukoyki an=e=hci"
		g="little little fish catch INDEF.A=eat=PL"
		tr="We catch just a few fish and eat them."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		The second property carries more weight than the bare statement suggests, for Chiri
		made it the organising axis of his classification. Predicators divide into
		<em>complete</em> verbs (<span lang="ja">完用詞</span>), which make a clause without
		any object — the intransitives, including every property verb of §6.4 — and
		<em>incomplete</em> verbs (<span lang="ja">不完用詞</span>), which cannot
		<Ref k="chiri1942" p="§§27–28" paren />. Membership is read off a single
		morphological fact, not off translation: the marker Chiri treats as the first
		person singular — the AN-set, glossed INDEF in this grammar
		(<Xr ch="person-and-alignment">Chapter 13</Xr>) — is suffixed to a complete verb
		but prefixed to an incomplete one, <i lang="ain">ahun-an</i> &lsquo;I went
		in&rsquo; against <i lang="ain">an-ahunke</i> &lsquo;I put it in&rsquo; from the
		pair above <Ref k="chiri1942" p="§28" paren />. Example (2) shows the prefixal half
		of the diagnostic on the incomplete <A w="ee">e</A> &lsquo;eat&rsquo;; the suffixal
		half appears in Chiri's own minimal demonstration, where the antipassive has
		stripped the object from the incomplete <A w="ku" gl="drink" />:
	</p>
	<Ex
		m="i-ku-an"
		g="ANTIP-drink-INDEF.S"
		tr="I drank (something)."
		cite="chiri1942:§33"
		dial="SA"
		note="The derived stem is objectless, hence complete, and the person marker moves to the suffix slot; underived ku ‘drink (it)’ takes the prefix."
	/>
	<p>
		As the example shows, completeness is not frozen in the lexicon: it tracks every
		change of valency, and the person marking switches sides with it. Operations that
		add an object — the applicatives <i lang="ain">e-</i>, <i lang="ain">ko-</i>,
		<i lang="ain">o-</i> and the causatives — turn a complete verb into an incomplete
		one; operations that fill or suppress the object slot — antipassive
		<i lang="ain">i-</i>, reciprocal <i lang="ain">u-</i>, reflexive
		<i lang="ain">yay-</i> and <i lang="ain">si-</i> — turn an incomplete verb into a
		complete one <Ref k="chiri1942" p="§33" paren />. Each of these derivations is
		described in <Xr ch="valency">Chapter 14</Xr>, where the effect of every operation
		on completeness is noted; the diagnostic itself, with Chiri's homophonous-stem
		pairs, is taken up again in <Xr ch="verb-structure" s="transitivity">§12.2</Xr>.
	</p>
	<p>
		The copula <A w="ne" /> and the existentials <A w="an" /> and <A w="okay" /> are
		verbs by every test above, though of minimal valency. The copula even has a place
		of honour in the dichotomy: Chiri singles it out as the one underived verb whose
		obligatory second term is a complement rather than an object, so that it inflects
		with the prefixes of the incomplete class
		<Ref k="chiri1942" p="§32" paren />. These verbs are described with
		nominal predication in <Xr ch="copula-and-existence">Chapter 18</Xr>, and the
		negative existential <A w="isam" gl="not exist" /> with negation in
		<Xr ch="negation">Chapter 17</Xr>.
	</p>
	<Ex
		m="cis-ahci yayne tani taa reera yuhke ike poro ahto ran manu"
		g="cry-PL while now EMPH wind be.strong and be.big rain fall REP"
		tr="As they wept, the wind grew strong and a great rain fell."
		cite="murasaki2001:text 8"
		dial="WS"
		place="Odasu (Asai Take)"
		note="The particle taa, ubiquitous in Asai Take's narration, is glossed EMPH throughout this grammar, following Tangiku (2022). The clause is repeated with intensification in the original; we quote the first occurrence."
	/>
	<p>
		Example (4) already shows the central fact of the next section: the property words
		<A w="yuhke" gl="be strong" /> and <A w="poro" gl="be big" /> are verbs, the first
		used predicatively, the second prenominally.
	</p>
</S>

<S t="Property concepts are verbs" id="property-verbs">
	<p>
		There is no adjective class. <Ref k="chiri1942" p="§21" /> assembles the argument for
		Ainu generally, with Sakhalin material: property words take the same person
		marking as verbs (<A w="poro">ku-poro</A> &lsquo;I am/grow big&rsquo;,
		<A w="pirika">ku-pirika</A> &lsquo;I am well&rsquo;); they take the same supportive
		<A w="ki" gl="do" /> (<i lang="ain">poro ka ki</i> &lsquo;is indeed big&rsquo; like
		<i lang="ain">oman ka ki</i> &lsquo;does indeed go&rsquo;); they form imperatives
		(<i lang="ain">tunasno pirika!</i> &lsquo;get well quickly!&rsquo;); and they are
		aspectually verb-like, <A w="poro" /> meaning &lsquo;be big&rsquo; or &lsquo;become
		big&rsquo; according to context. The corpus bears this out. Predicative use with a
		possessed-form subject:
	</p>
	<Ex
		m="etu-wehe pirika teh taa orowa cise ohta makan manu"
		g="beak-POSS be.good and EMPH then house at go.up REP"
		tr="Its beak healed, and then it went back up to its house."
		cite="murasaki2001:text 13"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Attributive (prenominal) use, where the property verb precedes its head noun
		exactly as in (4) above:
	</p>
	<Ex
		m="tani pirika cise tah kara manu"
		g="now be.good house this make REP"
		tr="Now a fine house had been made of it."
		lit="now (it) made this (into) a fine house"
		cite="murasaki2001:text 46"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The prenominal use is not a special adjectival construction: any verb can stand
		before a noun under the same conditions, and the modification structure preserves
		the argument relations of the corresponding clause, as Kirikae shows for Hokkaidō
		noun phrases <Ref k="kirikae1984" p="105–110" paren />. <i lang="ain">Pirika
		cise</i> &lsquo;good house&rsquo; is thus structurally a minimal relative clause,
		&lsquo;a house that is good&rsquo; (<Xr ch="relative-clauses">Chapter 21</Xr>).
		Manner modification is derived: the adverbializer <i lang="ain">-no</i> turns a
		property verb into an adverb <Ref k="chiri1942" p="§64" paren />.
	</p>
	<Ex
		m="pirika-no reske"
		g="be.good-ADV raise"
		tr="(She) raised (the child) well."
		cite="murasaki2001:text 37"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
</S>

<S t="Closed classes" id="particles">
	<S t="Postpositions and case particles">
		<p>
			Grammatical relations of place, goal, source, instrument and company are marked
			by postpositions, Chiri's fourth particle class, which attach only to nouns
			<Ref k="chiri1942" p="§122" paren />: <A w="ta" /> and <A w="ohta" /> &lsquo;at,
			in&rsquo;, <A w="onne" gl="to" />, <A w="ene" gl="towards" />,
			<A w="orowa" gl="from; and then" />, <A w="ani" gl="with, by means of" />,
			<A w="tura" gl="together with" />, <A w="kaari" gl="along, through" />,
			<A w="poka" gl="through, by way of" />, <A w="pahno" gl="as far as" />. Common
			nouns require <A w="ohta" /> (historically <i lang="ain">oro-ta</i>) where
			locative nouns take bare <A w="ta" /> — the main distributional test separating
			the two noun subclasses (§6.2). The full inventory and its syntax are given in
			<Xr ch="postpositions">Chapter 11</Xr>.
		</p>
		<Ex
			m="neeteh tani taa caru-hu ohta taa oro-oo"
			g="and.then now EMPH mouth-POSS at EMPH there-put"
			tr="And then he put them into his mouth."
			cite="murasaki2001:text 30"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
	</S>
	<S t="Demonstratives and other adnominals">
		<p>
			Adnominals (Chiri's <span lang="ja">連体詞</span>) modify a noun and do nothing
			else: they head no phrase, take no person marking, and never serve as predicates
			<Ref k="chiri1942" p="§92" paren />. The Sakhalin demonstrative set is proximal
			<A w="tan" gl="this" />, distal <A w="tara" gl="that yonder" /> (also
			<i lang="ain">tara-an</i>), against Hokkaidō <i lang="ain">toan</i>; Chiri cites
			<i lang="ain">tara seta</i> &lsquo;that dog&rsquo; from Piłsudski
			<Ref k="chiri1942" p="§97" paren />. In the corpus of Asai Take
			<span lang="ja">浅井タケ</span> the anaphoric
			<A w="neya" gl="that aforementioned" /> picks up an established referent, the
			pronominal <A w="tah" gl="this one" /> refers to things, and <A w="taa" />
			serves chiefly as a discourse particle of staging (glossed EMPH). Demonstratives
			and numerals may stack, in that order, but two demonstratives may not
			<Ref k="chiri1942" p="§94" paren />. <A w="sine" gl="one" /> doubles as an
			indefinite article-like marker, &lsquo;a certain&rsquo;
			<Ref k="chiri1942" p="§115" paren />, as in (10) below. See further
			<Xr ch="pronouns-and-demonstratives">Chapter 9</Xr>.
		</p>
		<Ex
			m="neya cise taa onne taa neya tunkasapahka ahunu wa isam manu"
			g="that house EMPH to EMPH that skull enter and not.exist REP"
			tr="Into that house the skull went and disappeared."
			cite="murasaki2001:text 34"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
	</S>
	<S t="Numerals">
		<p>
			Numerals pattern with adnominals: <A w="sine" gl="one" />, <A w="tu" gl="two" />
			(<i lang="ain">tuh</i>), <A w="re" gl="three" /> (<i lang="ain">reh</i>) and so
			on stand before a counted noun and cannot stand alone; to count in isolation
			they must be nominalized by a classifier, <i lang="ain">-p/-pe</i> for things,
			<i lang="ain">-n</i> for people, <A w="pis" /> for &lsquo;pieces&rsquo;
			<Ref k="chiri1942" p="§113" paren />. The system is vigesimal
			(<A w="hoh" gl="twenty" />, <Ref k="chiri1942" p="§108" paren />), and Sakhalin
			speakers also used a decimal series borrowed through the Amur
			(&ldquo;Santan&rdquo;) trade, <i lang="ain">sine kunkutu</i> &lsquo;ten&rsquo;,
			<i lang="ain">sine tanku</i> &lsquo;hundred&rsquo;
			<Ref k="chiri1942" p="§112" />, <Ref k="murasaki2009" paren />,
			<Ref k="sakaguchi2022" paren />. <Xr ch="numerals">Chapter 10</Xr> gives the
			full system.
		</p>
		<Ex
			id="ex-sine-yeesu"
			m="sine yeesu maci-hi tura okay-ahci"
			g="one Yeesu wife-POSS with exist.PL-PL"
			tr="There once lived a Yeesu with his wife."
			cite="murasaki2001:text 52"
			dial="WS"
			place="Odasu (Asai Take)"
			note="Yeesu: a stock character of Sakhalin folktales."
		/>
		<Ex
			m="niinum tuh pis asin-i ike taa simah taa kosonto kocupu teh taa muhru empoke ene ahunke manu"
			g="wooden.ball two piece come.out-NMLZ and EMPH woman EMPH silk.robe wrap and EMPH pillow under to put.in REP"
			tr="When the two wooden balls came out, the woman wrapped them in a fine robe and put them under her pillow."
			cite="murasaki2001:text 52"
			dial="WS"
			place="Odasu (Asai Take)"
			note="muhru empoke ene ‘to under the pillow’: locative noun empoke with the allative ene (§6.2, §7.5)."
		/>
	</S>
	<S t="Adverbs" id="adverbs">
		<p>
			Adverbs modify a predicate or a whole clause and are themselves uninflected: they
			take no person, number, mood or case morphology, which is what separates them from
			verbs and nouns, and they precede the element they modify rather than following it,
			which separates them from the particles. Chiri sets the adverb
			(<span lang="ja">副詞</span>) up as a class of its own, distinct from both the
			nominals and the adnominals, and notes that the Sakhalin adverb lexicon diverges
			considerably from Hokkaidō <Ref k="chiri1942" p="§§64, 88" paren />. The class has
			three morphological sources. (i) A small closed set of <em>underived</em> adverbs,
			mostly temporal, aspectual and degree words: <A w="tani" gl="now" />,
			<A w="suy" gl="again" />, <A w="naa" gl="still, more" />,
			<A w="ramma" gl="always" />, <A w="reekoh" gl="very" />, <A w="ponno" gl="a little" />.
			(ii) A large open set of <em>manner</em> adverbs derived from property verbs by the
			adverbializer <i lang="ain">-no</i> (§6.4): <i lang="ain">pirika-no</i>
			&lsquo;well&rsquo; from <A w="pirika" gl="be good" />, <i lang="ain">monas-no</i>
			&lsquo;quickly, at once&rsquo; from <A w="monas" gl="be quick" />
			<Ref k="chiri1942" p="§64" paren />. Because any property verb can feed it, this is
			where the productivity of the class lies; the underived core stays small.
			(iii) <em>Reduplicated</em> and expressive adverbs, in which a base is doubled for
			intensity or distributed reading — <i lang="ain">ponno ponno</i> &lsquo;just a
			little, bit by bit&rsquo; (example 2 above, and the &lsquo;skip a little&rsquo; of
			Asai Take's <i lang="ain">ponno ponno&hellip;cooko</i>) — continuous with the lexical
			reduplication described in <Xr ch="morphophonology" s="plural-sandhi" />.
		</p>
		<p>
			By meaning the inventory falls into a handful of classes. <em>Temporal</em> adverbs
			locate the event in time: <A w="tani" gl="now" />, ubiquitous in the Asai corpus as
			a narrative &lsquo;now, at this point&rsquo;, <A w="tanto" gl="today" />,
			<A w="nuuman" gl="yesterday" />, <A w="simma" gl="tomorrow" />
			(<i lang="ain">simma e=oman</i> &lsquo;go tomorrow&rsquo;, Asai Take). Since the verb
			has no tense (<Xr ch="tense-aspect-mood" s="tenselessness">§15.1</Xr>), these words
			carry much of the temporal location that inflection does elsewhere.
			<em>Aspectual and frequency</em> adverbs quantify over occurrences:
			<A w="suy" gl="again" />, the commonest of all, which restarts an episode in
			narrative; <A w="naa" gl="still, yet" />, which in Sentoku Tarōji's letters marks a
			state as continuing (<i lang="ain">naa&hellip;e=an</i> &lsquo;you are still
			there&rsquo;); and <A w="ramma" gl="always, as ever" />, likewise from the Sentoku
			letters (<i lang="ain">ramma ka pirika</i> &lsquo;are well as ever&rsquo;). The
			completive notion &lsquo;finish doing&rsquo; is carried not by an adverb but by the
			verb <A w="hemaka" gl="finish" /> (<Xr ch="tense-aspect-mood" s="completive">Chapter 15</Xr>),
			the iterative-habitual by the conjunctive <A w="koh" />
			(<Xr ch="tense-aspect-mood" s="iterative">Chapter 15</Xr>). <em>Degree</em> adverbs scale
			the predicate: intensifying <A w="reekoh" gl="very" />, which the Karafuto wordlists
			label explicitly as an adverb &lsquo;very, exceedingly&rsquo;; diminishing
			<A w="ponno" gl="a little" />; and the quantifier-like <A w="okore" gl="all" />
			(<i lang="ain">okore oyra</i> &lsquo;forget all&rsquo;), the Sakhalin counterpart of
			Hokkaidō <i lang="ain">opitta</i>, whose own reflex <i lang="ain">opista</i> the corpus uses only in the Sentoku letters.
			<em>Manner</em> adverbs are chiefly the <i lang="ain">-no</i> class, joined by the
			demonstrative-based <A w="nah" gl="thus, so" /> &lsquo;in that way&rsquo;
			(<i lang="ain">nah kii</i> &lsquo;do so&rsquo;) and <A w="ene" gl="like this" />. The
			deictic and directional adverbs — <A w="teeta" gl="here" />, <A w="ene" /> and their
			kin — pattern with the demonstrative system and are treated under it
			(<Xr ch="pronouns-and-demonstratives" s="adverbs">Chapter 9</Xr>).
		</p>
		<Ex
			m="suy niina kusu makan manu"
			g="again gather.firewood PURP go.up REP"
			tr="Again she went up into the hills to gather firewood, it is said."
			cite="murasaki2001:text 12"
			dial="WS"
			place="Odasu (Asai Take)"
			note="suy ‘again’ stands clause-initially, scoping over the whole event; the purpose phrase niina kusu precedes the matrix verb makan."
		/>
		<Ex
			m="reekoh pirika haw nee manu"
			g="very be.good sound COP REP"
			tr="It was a very fine sound, it is said."
			cite="murasaki2001:text 51"
			dial="WS"
			place="Odasu (Asai Take)"
			note="The degree adverb reekoh modifies the property verb pirika directly, immediately to its left."
		/>
		<p>
			Syntactically, adverbs are not arguments and take no postposition; they attach to
			the predicate rather than to a noun. The default position is immediately before the
			constituent modified — degree adverbs hug the property verb, as
			<i lang="ain">reekoh pirika</i> in the second example, and manner
			<i lang="ain">-no</i> adverbs sit just before their verb, as
			<i lang="ain">pirika-no reske</i> &lsquo;raised (the child) well&rsquo; in (7) —
			while temporal and aspectual adverbs with clausal scope favour clause-initial
			position, as <i lang="ain">suy</i> and <i lang="ain">tani</i> repeatedly do in
			narrative. Two neighbouring devices are not part of this class. Negative polarity is
			not adverbial: it is built on the <i lang="ain">ham</i>-family negators
			(<A w="hannehka" />, <A w="hanki" />, the proclitic <i lang="ain">ham=</i>) and the
			negative existential <A w="isam" />, all treated in
			<Xr ch="negation" s="standard-negation">Chapter 17</Xr>.
			And the scalar-additive <A w="ka" />, <A w="kayki" /> and the restrictive
			<A w="pateh" gl="only" /> are clitic focus particles, placed after their host rather
			than before it (<Xr ch="information-structure" s="focus-particles">§24.2</Xr>). The
			interaction of adverb placement with the basic verb-final order of the clause is
			taken up in <Xr ch="clause-structure" s="word-order" />.
		</p>
	</S>
	<S t="Conjunctive particles">
		<p>
			Clause linkage is managed by clause-final conjunctive particles, Chiri's third
			particle class <Ref k="chiri1942" p="§120" paren />: sequential
			<A w="teh" gl="and" /> (the Sakhalin counterpart of Hokkaidō
			<i lang="ain">wa</i>, <Ref k="chiri1942" p="§121" paren />) and <A w="wa" />,
			both glossed &lsquo;and&rsquo; in this grammar; <A w="ike" gl="and, and then" />;
			causal <A w="kusu" gl="because" /> and <A w="renkayne" gl="because of" />;
			concessive <A w="yahka" /> and <A w="yahkayki" gl="although" />; conditional
			<A w="anah" gl="if" />, <A w="ciki" gl="if" />, <A w="cikin" gl="if" />;
			habitual-correlative <A w="koh" gl="whenever" />. <A w="kusu" /> also marks
			purpose, and with a following existential builds an incipient progressive
			(<i lang="ain">kayo kusu an</i> &lsquo;is calling&rsquo;,
			<Xr ch="tense-aspect-mood" >Chapter 15</Xr>). The division of labour among these
			linkers is the subject of <Xr ch="clause-linking">Chapter 23</Xr>. Example (14)
			shows <A w="anah" /> with the first person plural exclusive set; (15) shows
			<A w="yahkayki" /> and <A w="teh" />.
		</p>
		<Ex
			m="keh cioka ka ci-kii anah ci-ee"
			g="INTERJ 1PL.EXCL too 1PL.EXCL-do if 1PL.EXCL-eat"
			tr="Well then, if we do it too, we will eat."
			cite="murasaki2001:text 41"
			dial="WS"
			place="Odasu (Asai Take)"
			note="The exclusive plural forms here refer to the speaker alone, a use of the plural regular in quoted speech in the Asai corpus (Sakaguchi 2024: 18)."
		/>
	</S>
	<S t="Sentence-final and discourse particles">
		<p>
			The right edge of the Sakhalin sentence carries a rich set of particles. The
			reportative <A w="manu" /> closes nearly every narrative sentence of the Asai
			corpus and marks the content as transmitted knowledge; it belongs to the
			evidential system described in <Xr ch="evidentiality">Chapter 16</Xr>
			(<Ref k="dalcorso2018" paren />; <Ref k="chiri1942" p="§117" paren /> classes it
			among the mood particles). The quotative <A w="nah" /> closes direct speech
			before a verb of saying or thinking (<Xr ch="complementation">Chapter 22</Xr>).
			The additive-scalar <A w="ka" gl="even, too" /> follows nouns and converbal
			clauses; the topic particles <A w="anak" /> and <A w="anakne" />, prominent in
			Hokkaidō, are largely supplanted in the corpus by the construction with
			<A w="neampe" /> (<Xr ch="information-structure">Chapter 24</Xr>). Emotive and
			interactional particles include interrogative <A w="hee" />, softening
			<A w="waa" /> (example 10 of <Xr ch="nouns-and-possession">Chapter 7</Xr>), and
			<A w="na" /> of assertion; Chiri's minimal pair is <i lang="ain">seta he?</i>
			&lsquo;a dog?&rsquo; against <i lang="ain">seta un!</i> &lsquo;a dog!&rsquo;
			<Ref k="chiri1942" p="§128" paren />.
		</p>
		<Ex
			m="nah yee yahkayki taa seta haw ne kara teh taa oman manu"
			g="QUOT say although EMPH dog voice COP make and EMPH go.SG REP"
			tr="Though she said so, he made his voice like a dog's and went off."
			cite="murasaki2001:text 46"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
	</S>
	<S t="Interjections">
		<p>
			Interjections stand outside clause syntax: attention-calling
			<A w="iineahsuy" gl="say, hey" />, which opens requests and questions throughout
			the Asai corpus (so in example 10 of <Xr ch="nouns-and-possession">Chapter
			7</Xr>); <A w="keh" gl="well then" /> in (14) above; assenting
			<A w="ee" gl="yes" />. They take no morphology and combine with no particle,
			which is what distinguishes them from adverbs.
		</p>
	</S>
</S>

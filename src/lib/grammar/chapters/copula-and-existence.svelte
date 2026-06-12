<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	Two small verbs carry much of the weight of Sakhalin Ainu syntax: the copula
	<A w="ne" />, which builds equative and ascriptive clauses, and the existential
	<A w="an" /> with its plural partner <A w="okay" />, which build existence, location,
	and — together with <A w="koro" gl="have" /> — possession clauses. Both also live a
	second life inside grammar: <i lang="ain">ne</i> in the future construction
	<i lang="ain">kusu ne</i> and in the topic particle <i lang="ain">neampe</i>,
	<i lang="ain">an</i> in aspectual periphrases and in the evidential constructions. This
	chapter describes the clause types; the grammaticalized uses are treated in
	<Xr ch="tense-aspect-mood">Chapter 15</Xr> and <Xr ch="evidentiality">Chapter 16</Xr>.
</p>

<S t="Copular clauses" id="copula">
	<p>
		An equative clause has the syntax of a transitive clause: the copular object — the
		predicate nominal — stands immediately before <i lang="ain">ne</i> and is never
		case-marked, an overt subject precedes it, and a non-third-person subject is indexed
		on the copula itself with the transitive subject prefixes
		<Ref k="dalcorso2025neg" p="48" paren />. In the narrative corpus the copula
		typically appears with a long vowel, <i lang="ain">nee</i>, and is followed by the
		reportative <A w="manu" /> (<Xr ch="evidentiality">Chapter 16</Xr>); on vowel length
		see <Xr ch="phonology">Chapter 4</Xr>.
	</p>
	<Ex
		m="inkara-hci-hi neampe ota nee manu"
		g="look-PL-POSS TOP sand COP REP"
		tr="When they looked — it was sand."
		cite="murasaki2001:text 3"
		dial="WS"
		place="Odasu (Asai Take)"
		note="The possessive suffix here nominalizes the clause, ‘their looking’; see Chapter 20."
	/>
	<p>
		A first- or second-person subject is indexed on the copula itself, as the conversational
		record makes plain; the predicate nominal may identify the referent by name (an
		identificational clause) or assign it to a class (a classificatory one), a contrast
		Murasaki's conversation course draws in a single exchange:
	</p>
	<Ex
		m="Taroo ku=nee"
		g="Tarō 1SG=COP"
		tr="I am Tarō."
		cite="murasaki2025:lesson 2"
		dial="WS"
		note="The overt 1SG prefix ku= on the copula, in an identificational clause naming the referent."
	/>
	<Ex
		m="kuani neyke siisam mahtekuh ku=nee"
		g="1SG TOP Wajin woman 1SG=COP"
		tr="I am a Wajin woman."
		lit="as for me, I am a Wajin woman"
		cite="murasaki2025:lesson 3"
		dial="WS"
		note="The same speaker has just identified herself by name (kuani neyke Kiyoko ku=nee ‘I am Kiyoko’); here the predicate nominal siisam mahtekuh assigns her to a class. neyke is the conditional-based topic ‘as for’ (Chapter 23)."
	/>
	<p>
		The predicate nominal may itself be a noun phrase of any internal complexity,
		including one headed by a relative clause
		(<Xr ch="relative-clauses">Chapter 21</Xr>):
	</p>
	<Ex
		m="kimma tura san monimahpo nee manu"
		g="from.mountains together come.down.SG girl COP REP"
		tr="She was the girl who had come down with him from the mountains."
		cite="murasaki2001:text 43"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Negation of the copula differs by coast: East-coast <i lang="ain">ham=ne</i>, West-coast
		<i lang="ain">hannehka</i> as a suppletive negative copula
		(<Xr ch="negation" s="copula-negation">§17.3</Xr>).
	</p>
</S>

<S t="Existential clauses" id="existential">
	<p>
		Existence is predicated with the suppletive pair <A w="an" gl="exist" /> (singular)
		and <A w="okay" /> (plural) — the same verbs that underlie the aspectual periphrases
		of <Xr ch="tense-aspect-mood">Chapter 15</Xr>. Their suppletion is part of the wider
		system of verbal number described in <Xr ch="verb-structure">Chapter 12</Xr>; the
		plural stem may carry the plural suffix <i lang="ain">-hci</i> as well. A bare
		existential clause with an indefinite noun phrase is the standard way of introducing
		a new referent, and the formula <i lang="ain">N sineh an manu</i> ‘there was one N’
		opens tale after tale in the Asai Take corpus
		(<Xr ch="information-structure">Chapter 24</Xr>):
	</p>
	<Ex
		m="ahci sineh an manu"
		g="old.woman one exist.SG REP"
		tr="There was an old woman, it is said."
		cite="murasaki2001:text 1"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="Sannupis-ta re horokewpo okay-hci"
		g="Sannupis-LOC three young.man exist.PL-PL"
		tr="In Sannupis there lived three young men."
		cite="murasaki2001:text 5"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The negative counterpart is the lexical negative existential <A w="isam" />, never a
		negated <i lang="ain">an</i> (<Xr ch="negation" s="negative-existential">§17.4</Xr>).
	</p>
</S>

<S t="Location" id="locative">
	<p>
		A locative existential adds a place expression — a locative-marked noun or a
		relational noun phrase (<Xr ch="postpositions">Chapter 11</Xr>) — before the
		existential verb. With a definite subject the same frame reads as a locational
		statement, ‘X is in/at Y’:
	</p>
	<Ex
		m="niinum tuh pis ohta an manu"
		g="wooden.ball two piece in.it exist.SG REP"
		tr="Two wooden balls were in it."
		cite="murasaki2001:text 52"
		dial="WS"
		place="Odasu (Asai Take)"
		note="Singular an with a numeral-quantified subject; agreement with conjoined and quantified subjects is variable in the corpus."
	/>
	<p>
		Existential and locational clauses freely modify nouns, since any clause may stand
		before a head noun (<Xr ch="relative-clauses">Chapter 21</Xr>); the frame
		<i lang="ain">cise ohta an N</i> ‘the N who was in the house’ is among the most
		common relative patterns in the narrative corpus:
	</p>
	<Ex
		m="cise ohta an monimahpo nah kii manu"
		g="house in exist.SG girl QUOT do REP"
		tr="The girl who was in the house said this."
		cite="murasaki2001:text 52"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
</S>

<S t="Possession clauses" id="possession-clauses">
	<p>
		Predicative possession uses the transitive verb <A w="koro" gl="have" />, whose
		possessor is the A argument and possessee the O argument. With kin and offspring the
		verb also covers ‘get, come to have’:
	</p>
	<Ex
		m="ohkayo poo sineh mahtekuh poo reh pis ka koro manu"
		g="male child one female child three piece even have REP"
		tr="She had one boy and three girls."
		cite="murasaki2001:text 19"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The same verb supplies an adnominal possessive construction: a relative clause on
		<i lang="ain">koro</i>, as in Sentoku Tarōji's salutation
		<i lang="ain">an=koro nispa</i> ‘my master’, literally ‘the master whom we have’
		(<Ref k="tangiku2001" p="Letter 1" paren />), beside the morphological possessive of
		<Xr ch="nouns-and-possession">Chapter 7</Xr>. Negative possession is expressed by the
		lexical negatives <i lang="ain">sak</i> ‘not have’ or, with the possessee as subject,
		<A w="isam" /> ‘not exist’ (<Xr ch="negation" s="negative-existential">§17.4</Xr>;
		<Ref k="dalcorso2025neg" p="40" paren />).
	</p>
</S>

<S t="Grammaticalized offshoots" id="related">
	<p>
		Both core verbs feed grammar beyond the simple clause. The copula combines with the
		purposive <i lang="ain">kusu</i> in the intentional future <i lang="ain">kusu ne</i>
		(<Xr ch="tense-aspect-mood">Chapter 15</Xr>), and the ubiquitous topic particle
		<A w="neampe" /> is transparently <i lang="ain">ne-an-pe</i> ‘the thing which is’ —
		a frozen headless relative on the copula and existential
		(<Xr ch="information-structure">Chapter 24</Xr>;
		<Xr ch="nominalization">Chapter 20</Xr>). The existential <i lang="ain">an</i>
		closes the stative periphrases <i lang="ain">teh an</i> and
		<i lang="ain">kusu an</i> (<Xr ch="tense-aspect-mood">Chapter 15</Xr>) and the
		evidential constructions of the type <i lang="ain">ruwehe an</i>
		(<Xr ch="evidentiality">Chapter 16</Xr>). These uses are the synchronic face of a
		long history: the person marker <i lang="ain">-an</i> itself continues the verb
		<i lang="ain">an</i> (<Xr ch="person-and-alignment">Chapter 13</Xr>;
		<Ref k="dalcorso2025neg" p="44" paren />).
	</p>
</S>

<S t="Copula and existential inside the inferentials" id="inferential-alternation">
	<p>
		The evidential constructions of <Xr ch="evidentiality">Chapter 16</Xr> end in one of
		this chapter's two verbs: a possessed perception noun, preceded by its clausal
		possessor, is anchored either by <i lang="ain">an</i> or by the copula. The two anchors
		are not interchangeable. The first restriction is lexical: only
		<i lang="ain">ruwehe</i> ‘its trace’ admits both (<i lang="ain">ruwehe an</i> ~
		<i lang="ain">ruwehe ne(e)</i>), while <i lang="ain">sirihi</i>,
		<i lang="ain">humihi</i> and <i lang="ain">hawehe</i> take the existential only
		<Ref k="dalcorso2018" p="72" paren />.
	</p>
	<p>
		Where both anchors are available, the choice tracks the speaker's viewpoint on the
		inferred event. We analyse existential <i lang="ain">an</i> as the external construal:
		the situation is reconstructed from outside, as a closed whole read off its trace, and
		the form carries a mirative shading of the speaker's own prior unawareness. The copula
		construes the situation from inside, as content the speaker has processed and made her
		own. The distributional signature of the split is person: the copular tokens in Dal
		Corso's corpus overwhelmingly have a first- or second-person participant inside the
		scope of the inference, while the existential resists speech-act participants there
		<Ref k="dalcorso2018" p="§7.3.5" paren />. One infers with the copula about events one
		was part of; startled inference about wholly external events selects the existential.
		The opposition thus redeploys the internal/imperfective versus external/perfective
		contrast of viewpoint aspect, applied not to a lexical verb but to the speaker's stance
		on an inferred proposition. Its temporal corollary — the copula forces a present
		reading, the existential leaves telicity to decide between past and present — is set
		out in <Xr ch="evidentiality" s="relative-tense">§16.5</Xr>.
	</p>
	<p>
		The alternation is also dialect-diagnostic. <i lang="ain">ruwehe ne(e)</i> is confined
		to the east coast, which never developed the visual <i lang="ain">sirihi an</i>; the
		west coast has <i lang="ain">sirihi an</i> and lacks the copular form
		<Ref k="dalcorso2018" p="72, §7.3.4" paren />. The two are in near-complementary
		distribution across the dialect boundary and do comparable work: each coast opposes a
		processed, speaker-internal inference to a raw external one, but encodes the processed
		pole with the copula in the East and with a dedicated perception noun in the West.
	</p>
	<p>
		Finally, the two verbs can co-occur in one evidential predicate, each in its own slot.
		In the sentence below the copula equates a nominalized clause with the evidential noun,
		and the existential then anchors the whole as a present state — stacking, not
		redundancy:
	</p>
	<Ex
		m="itah ku=wante-he nee ruu-he an"
		g="speech 1SG.A=know-NMLZ COP trace-POSS exist.SG"
		tr="I do think I remember the language."
		lit="there is the trace of the speech being what I know"
		cite="bugaeva2016:29"
		dial="WS"
	/>
</S>

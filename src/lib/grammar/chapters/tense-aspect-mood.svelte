<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	The Sakhalin Ainu verb carries no tense morphology. Chiri stated the point twice in his
	Sakhalin-centred grammar: the absence of tense is one of the defining traits of the verb, and
	temporal relations are carried instead by aspect <Ref k="chiri1942" p="§26, §47" paren />.
	Murasaki's conversation course repeats it for the modern learner: the bare verb reports an
	actual event, present or past, and only unrealised events receive marking
	<Ref k="murasaki1979" paren />, <Ref k="murasaki2025" p="23" paren />. What the language
	lacks in tense it makes up for in periphrasis: a set of postverbal elements — converb plus
	existential, purposive plus existential, and a closed class of auxiliary-like particles —
	expresses progressive, resultative, completive, iterative, prospective and desiderative
	values, and shades over into mood. Murasaki catalogued eighteen such
	<i lang="ja">助動詞連語</i> ‘auxiliary constructions’ for Rayciska
	<Ref k="murasaki1976" p="53–64" paren />, and <Ref k="dalcorso2018" p="178–186" /> sorted
	them by syntactic behaviour into aspectual strategies, light verbs, auxiliaries and final
	particles. This chapter follows the same path: the tenseless core, the aspect periphrases,
	the perfect, future and intention, desire, ability, and finally commands and exhortations.
	One structural thread runs through the modal half of the field and is worth naming at the
	outset: the copula <i lang="ain">ne(e)</i>. Sakhalin habitually closes a finite clause with
	a nominalized verb plus the copula (<Xr ch="nominalization">Chapter 20</Xr>), and it is on
	that host that the future and dubitative markers grammaticalized — which is why several of
	them, unlike their Hokkaidō counterparts, carry <i lang="ain">nee</i> as their first
	element <Ref k="bugaeva2016" p="106–107" paren /> (§15.4).
	The evidential members of the same postverbal field — <A w="manu" /> and the possessed
	evidential nouns — have a chapter of their own (<Xr ch="evidentiality">Chapter 16</Xr>), and
	negation likewise (<Xr ch="negation">Chapter 17</Xr>).
</p>

<S t="The tenseless verb" id="tenselessness">
	<p>
		A bare finite verb is read as present or past according to its lexical aspect. Chiri's
		rule: verbs of durative meaning (<A w="an" gl="exist" />, <A w="koro" gl="have" />, the
		copula, and the property verbs) translate as presents — his examples are
		<i lang="ain">mici an-koro</i> ‘I have a grandchild’ and <i lang="ain">encu an-ne</i> ‘I am
		an Ainu’ — while non-durative verbs used alone are past: <i lang="ain">oman</i> is ‘he
		went’, not ‘he goes’, and Chiri took Batchelor to task for translating
		<i lang="ain">ku-kik</i> as ‘I strike’ <Ref k="chiri1942" p="§47" paren />. Temporal
		adverbs do the work that tense does elsewhere. Murasaki's minimal pair makes the point
		with one and the same verb form:
	</p>
	<Ex
		m="nuuman Kusiro onne ku=oman"
		g="yesterday Kushiro to 1SG.S=go.SG"
		tr="Yesterday I went to Kushiro."
		cite="murasaki2025:23"
		dial="WS"
	/>
	<Ex
		m="kestoasinkoh Kusiro onne ku=oman"
		g="every.day Kushiro to 1SG.S=go.SG"
		tr="Every day I go to Kushiro."
		note="Identical verb form; the adverb alone shifts the reading from past to habitual present. The third member of Murasaki's paradigm, simma suy Kusiro onne ku=oman kusu ‘tomorrow I will go to Kushiro again’, adds kusu for the unrealised event (§15.4)."
		cite="murasaki2025:23"
		dial="WS"
	/>
	<p>
		The attested time adverbs include <A w="tani" gl="now" /> (over a thousand tokens in our
		Sakhalin corpus; 1,016 in Asai Take's tales alone), <A w="tanto" gl="today" />,
		<A w="nuuman" gl="yesterday" />, <A w="simma" gl="tomorrow" />,
		<A w="nisahta" gl="in the morning" /> and <A w="kestoasinkoh" gl="every day" />; Murasaki's
		dialogues combine them freely with bare verbs, as in <i lang="ain">tanto nisahta ohorono
		ku=numa</i> ‘this morning I got up late’ <Ref k="murasaki2025" p="19, 23, 27" paren />.
		Narrative prose behaves the same way: in Asai Take's tales the chains of bare verbs are
		past by default, and present-time reference inside dialogue is carried by
		<i lang="ain">tani</i> or by the progressive periphrasis of §15.2.1. Where previous
		descriptions speak of a ‘future tense’ they mean the modal periphery of §15.4: the
		opposition is realis versus irrealis, not past versus non-past.
	</p>
</S>

<S t="Aspect periphrases" id="aspect">
	<p>
		The productive aspect markers are phrasal: a converb or purposive form of the lexical verb
		followed by <A w="an" gl="exist" />, <A w="kara" gl="make" />, <A w="isam" gl="not exist" />
		or <A w="hemaka" gl="finish" />. Although formally biclausal, these sequences behave as
		single predicates — they relativize and nominalize as a unit, unlike true purpose or
		reason clauses — which is why Dal Corso calls them aspectual strategies rather than
		clause chains <Ref k="dalcorso2018" p="184" paren />. In the interlinear glosses we keep
		the pieces literal (<i lang="ain">kusu</i> PURP, <i lang="ain">teh</i> ‘and’,
		<i lang="ain">an</i> ‘exist’); the aspectual reading belongs to the construction as a
		whole. Table 1 gives the inventory with the Hokkaidō counterparts that Chiri himself
		aligned <Ref k="chiri1942" p="§45–46" paren />.
	</p>
	<table>
		<caption>Sakhalin aspect periphrases</caption>
		<thead>
			<tr><th>Form</th><th>Literal source</th><th>Value</th><th>Hokkaidō counterpart</th></tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain">kusu an</i></td>
				<td>PURP + ‘exist’</td>
				<td>progressive/continuative</td>
				<td><i lang="ain">kor an</i></td>
			</tr>
			<tr>
				<td><i lang="ain">kusu kara</i></td>
				<td>PURP + ‘make’</td>
				<td>prospective/conative ‘be about to’</td>
				<td><i lang="ain">kus-ki</i>, <i lang="ain">kusu ne</i></td>
			</tr>
			<tr>
				<td><i lang="ain">teh an</i></td>
				<td>converb + ‘exist’</td>
				<td>resultative/stative</td>
				<td><i lang="ain">wa an</i></td>
			</tr>
			<tr>
				<td><i lang="ain">wa isam</i></td>
				<td>converb + ‘not exist’</td>
				<td>conclusive ‘end up, be gone’</td>
				<td><i lang="ain">wa isam</i></td>
			</tr>
			<tr>
				<td><i lang="ain">hemaka</i></td>
				<td>‘finish’</td>
				<td>completive</td>
				<td><i lang="ain">wa okere</i></td>
			</tr>
			<tr>
				<td><i lang="ain">an</i> ~ <i lang="ain">ea</i></td>
				<td>‘exist’ (~ ‘sit’?)</td>
				<td>perfect/imperfective (§15.3)</td>
				<td><i lang="ain">a</i>, <i lang="ain">wa an</i></td>
			</tr>
			<tr>
				<td><i lang="ain">ranke</i>; converb <i lang="ain">koh</i></td>
				<td>—</td>
				<td>iterative/habitual</td>
				<td><i lang="ain">ranke</i>; <i lang="ain">kor</i></td>
			</tr>
		</tbody>
	</table>
	<S t="Progressive kusu an and prospective kusu kara" id="progressive">
		<p>
			<i lang="ain">kusu an</i> presents an event as ongoing at the reference time. Chiri
			equated it explicitly with Hokkaidō <i lang="ain">kor an</i>: <i lang="ain">oman kusu
			an</i> = <i lang="ain">oman kor an</i> ‘he is going’ <Ref k="chiri1942" p="§46" paren />.
			Murasaki's textbook sentence shows the present-progressive use with
			<i lang="ain">tani</i>:
		</p>
		<Ex
			m="ahci tani suukawka kusu an"
			g="old.woman now sew PURP exist.SG"
			tr="The old woman is sewing now."
			cite="murasaki1976:53; dalcorso2018:181"
			dial="WS"
			place="Rayciska (Fujiyama Haru)"
		/>
		<Ex
			m="cis ani unkayoh taa pahkay teh oman kusu an manu"
			g="cry while Unkayoh EMPH carry.on.back and go.SG PURP exist.SG REP"
			tr="The Unkayoh ogre was making off with the crying child on its back."
			note="Past progressive: the scene is caught in mid-course at the narrative reference time. The reportative manu lies outside the aspect periphrasis (Chapter 16)."
			cite="murasaki2001:text 1"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
		<p>
			In conversation the same periphrasis supplies the everyday present progressive —
			Murasaki's lesson title <i lang="ain">hemata e=kii kusu an?</i> ‘what are you doing?’
			<Ref k="murasaki2025" p="29" paren />. Beside it stands <i lang="ain">kusu kara</i>,
			which Chiri identified as the Sakhalin prospective: <i lang="ain">ipe-an kusu an-kara
			ko</i> ‘when I was about to eat’ <Ref k="chiri1942" p="§46" paren />. With 79 tokens in
			Asai Take's tales (our count) it is fully productive, and under negation it yields a
			frustrated conative, ‘try to but fail’ (§15.6):
		</p>
		<Ex
			m="wahka an-tah kusu an-kara ike"
			g="water INDEF.A-draw PURP INDEF.A-make when"
			tr="when I was about to draw water"
			cite="chiri1942:§46"
			dial="SA"
		/>
		<p>
			A classificatory point needs settling here. <i lang="ain">kusu kara</i> and the
			particle <i lang="ain">ea</i> of §15.3 — the two markers in this domain that Sakhalin
			shares with no Hokkaidō variety — have sometimes been carried in the descriptive
			literature side by side as a pair of ‘duratives’, leaving the impression of two
			constructions competing for one value. The attestations sort them cleanly. Chiri
			himself ranges <i lang="ain">kusu kara</i> with the prospectives
			<i lang="ain">kus-ki</i> and <i lang="ain">kusu ne</i>, judging its use the same
			(<i lang="ja">やはり同様の用法</i>), and both of his examples are pre-event — the
			eating, the water-drawing have not yet begun
			<Ref k="chiri1942" p="§45–46" paren />. Connected prose confirms the value outside
			elicitation: in Sentoku Tarōji's letters <i lang="ain">oman kusu kara</i> is rendered
			‘intends to go’ and stands parallel to the plain future <i lang="ain">oman kusu ne</i>
			of §15.4 in the same correspondence:
		</p>
		<Ex
			m="oman kusu kara"
			g="go.SG PURP make"
			tr="He is going to go."
			note="Epistolary prose about real plans; the periphrasis is pre-event, not ongoing."
			cite="tangiku2001:Letter 2"
			dial="ES"
			place="Otasan (Sentoku Tarōji)"
		/>
		<p>
			<i lang="ain">ea</i>, by contrast, is what Chiri lists under the durative proper
			(<i lang="ja">持続態</i>), ‘be in the course of V-ing’ — an intra-event value
			<Ref k="chiri1942" p="§45" paren />. The two frames thus differ on both axes at once:
			in their second element, the full verb <A w="kara" gl="make" /> (a preparatory
			activity) against the bound <i lang="ain">ea</i>, and in their orientation to the
			event nucleus, before it (<i lang="ain">kusu kara</i>) against inside it
			(<i lang="ain">ea</i>). Classed this way — prospective against durative — the apparent
			overlap dissolves; <i lang="ain">ea</i> returns in §15.3, where its east-coast use as
			a perfect is treated.
		</p>
	</S>
	<S t="Resultative teh an and conclusive wa isam" id="resultative">
		<p>
			<i lang="ain">teh an</i> — converb <i lang="ain">teh</i> plus
			<i lang="ain">an</i> ‘exist’ — denotes the state resulting from a prior event.
			Murasaki labels it resultative <Ref k="murasaki1976" p="53" paren />,
			<Ref k="dalcorso2018" p="178" paren />; Dal Corso's re-edition of the Fujiyama texts
			glosses it as a perfect. It is the Sakhalin counterpart of Hokkaidō
			<i lang="ain">wa an</i>: Chiri lists <i lang="ain">wa an</i>, <i lang="ain">hine an</i>
			and <i lang="ain">kane an</i> as the Hokkaidō resultative set
			<Ref k="chiri1942" p="§46" paren />, the conjunctive <i lang="ain">teh</i> corresponds
			to Hokkaidō <i lang="ain">wa</i>/<i lang="ain">tek</i> as the general converb
			(<Xr ch="clause-linking">Chapter 23</Xr>), and Satō's study of Chitose
			<i lang="ain">wa an</i> (Satō 2006: 43–67) finds there the same stative-perfect value,
			centred on possession and existence, that <i lang="ain">teh an</i> shows in Sakhalin.
			The equation Sakhalin <i lang="ain">teh an</i> = Hokkaidō <i lang="ain">wa an</i> is
			thus a correspondence of both form and function. A <i lang="ain">kane an</i>
			resultative, by contrast, has no Sakhalin reflex: in our corpus
			<i lang="ain">kanne</i> survives only as a simultaneity converb ‘while’ and as the
			polite-imperative particle of §15.7 <Ref k="murasaki2025" p="27" paren />,
			<Ref k="chiri1942" p="§119" paren />. We count 37 tokens of <i lang="ain">teh an</i> in
			Asai Take's 54 tales.
		</p>
		<Ex
			m="nukara koh taa suu kaske ke-oo teh an manu"
			g="see ITR EMPH pot top fat-put.in and exist.SG REP"
			tr="When he looked, fatty meat had been put on top of the pot."
			note="The placing happened off-stage; teh an asserts the visible resultant state."
			cite="murasaki2001:96; tangiku2022:§5.1"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
		<p>
			The conclusive <i lang="ain">wa isam</i> ‘end up …-ing, … and be gone’ (41 tokens in
			the same tales) is the one periphrasis where Sakhalin keeps the converb
			<i lang="ain">wa</i>; it adds to the completed event the disappearance or
			irrecoverability of its theme <Ref k="murasaki1976" p="53" paren />:
		</p>
		<Ex
			m="orowa nakene ka oman-u wa isam manu"
			g="then where.to even go.SG-EP and not.exist REP"
			tr="Then he had gone off somewhere and was gone."
			cite="murasaki2001:text 6"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
	</S>
	<S t="Iterative and habitual" id="iterative">
		<p>
			Habitual situations are built with the iterative converb <A w="koh" gl="whenever" />
			(Hokkaidō <i lang="ain">kor</i>): chains of <i lang="ain">V koh V</i> clauses are the
			formula with which Asai Take sketches a protagonist's way of life at the opening of a
			tale.
		</p>
		<Ex
			m="niina koh kuru ceh-kii koh ee yuh-kii koh ee nah kii manu"
			g="gather.wood ITR burn fish-do ITR eat game-do ITR eat QUOT do REP"
			tr="He would gather firewood and burn it, catch fish and eat them, catch game and eat it — so he lived."
			cite="murasaki2001:text 19"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
		<p>
			The auxiliary <A w="ranke" /> marks repeated performance of the event, Chiri's
			<i lang="ja">反復態</i> ‘iterative aspect’ <Ref k="chiri1942" p="§118" paren />,
			<Ref k="murasaki1976" p="53" paren />. It follows the lexical verb:
		</p>
		<Ex
			m="omantene suke ranke taa eere nah kii manu"
			g="then cook ITR EMPH feed QUOT do REP"
			tr="Then she would cook it each time and feed it to him — so she did."
			note="ranke after a verb is the iterative auxiliary; the homophonous transitive verb ranke ‘take down’ also occurs in the corpus and must be kept apart."
			cite="murasaki2001:text 25"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
	</S>
	<S t="Completive hemaka" id="completive">
		<p>
			<A w="hemaka" gl="finish" /> is the completive, ‘do completely, finish doing’
			<Ref k="chiri1942" p="§118" paren />, <Ref k="murasaki1976" p="53" paren />. Unlike
			the converb periphrases it attaches directly, with no linker, and unlike most of the
			auxiliaries it survives as an independent verb: asked <i lang="ain">hemaka?</i> ‘is it
			finished?’, Asai Take answers <i lang="ain">hemakaa</i> ‘it is finished’ (text 2). We
			count 30 tokens across her tales (21 <i lang="ain">hemaka</i>, 7 plural
			<i lang="ain">hemakahci</i>, plus lengthened and nominalized forms) — frequent enough
			to be the default completive, typically closing an episode:
		</p>
		<Ex
			m="caru-hu ohta poro toomus an teh ray hemaka manu"
			g="mouth-POSS in be.big fly exist.SG and die finish REP"
			tr="There was a big fly in his mouth, and he had died."
			cite="murasaki2001:text 27"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
		<p>
			With second persons the completive readily combines with the interrogative
			nominalization of <Xr ch="evidentiality">Chapter 16</Xr>: <i lang="ain">tonnosiki ipe
			e-hemaka-ha?</i> ‘have you finished your midday meal?’
			<Ref k="chiri1942" p="§40" paren />.
		</p>
	</S>
</S>

<S t="The perfect: postverbal an and ea" id="perfect">
	<p>
		A bare <A w="an" gl="exist" /> directly after the verb — no converb — marks what Murasaki
		calls resultative-perfective <Ref k="murasaki1976" p="53" paren />: <i lang="ain">ahci
		suukawka an</i> ‘the old woman has sewn’ contrasts minimally with the progressive
		<i lang="ain">ahci tani suukawka kusu an</i> above <Ref k="dalcorso2018" p="181" paren />.
		Dal Corso's later work reads the same <i lang="ain">an</i> as an imperfective which
		yields a continuous interpretation with atelic predicates
		<Ref k="dalcorso2024" p="72–73" paren />; the two accounts agree on the surface fact that
		postverbal <i lang="ain">an</i> situates the reference time inside the post-event or
		ongoing state, and differ on which class of predicate is basic. The east coast has
		beside it a form <i lang="ain">ea</i>, unknown to the western corpora: Chiri records it
		as a durative particle, ‘be in the course of V-ing’ — the intra-event value that, as
		§15.2.1 showed, keeps it apart from the prospective <i lang="ain">kusu kara</i>
		<Ref k="chiri1942" p="§45, §118" paren /> — and in Piłsudski's texts it serves as a
		perfect, hosting the <i lang="ain">-hV</i> nominalization in questions — proof that verb
		plus <i lang="ain">ea</i> has fused into a single predicate
		<Ref k="dalcorso2018" p="182" paren />. The origin of <i lang="ain">ea</i> is the open
		question, and it bears directly on the Hokkaidō comparison. Hokkaidō builds its
		actional perfect on the particle <i lang="ain">a</i> (plural <i lang="ain">rok</i>),
		which continues the verb ‘sit’; if <i lang="ain">ea</i> contains the same verb, the two
		perfects are cognate. Dal Corso argues instead that <i lang="ain">ea</i> is
		<i lang="ain">e-an</i> with the nasal elided, pointing out that it co-occurs with the
		progressive <i lang="ain">kusu an</i> on atelic predicates
		<Ref k="dalcorso2024" p="71–73" paren /> — a distribution that sits more naturally with
		the existential than with a posture verb. On that analysis the east-coast perfect is a
		Sakhalin-internal creation from <i lang="ain">an</i>, the same building block as the
		postverbal <i lang="ain">an</i> just described, and its resemblance to the Hokkaidō
		<i lang="ain">a</i> perfect is convergence rather than common inheritance.
	</p>
	<Ex
		m="hemata aynu makan teh kuca ohta an ea-ha"
		g="what person go.up.SG and hut in exist.SG PRF-NMLZ"
		orig="Hemáta ájnu makánte kuća oxta án eáha."
		tr="What kind of person has come up and is in my hut?"
		note="The hunter returns to find smoke rising from his hut; ea bears the interrogative nominalization -ha."
		cite="pilsudski1912:134; dalcorso2018:182"
		dial="ES"
	/>
</S>

<S t="Future and intention" id="future">
	<p>
		Unrealised events are marked by <A w="kusu" /> and its compounds. The simplest pattern is
		predicate-final <i lang="ain">kusu</i>, the regular future-intentional of conversation:
		<i lang="ain">Kusiro onne ku=oman kusu</i> ‘I am going to Kushiro’
		<Ref k="murasaki2025" p="19, 23" paren />; Chiri classed this <i lang="ain">kusu</i> as
		the volitional mood of the formal noun <i lang="ain">kus(u)</i>
		<Ref k="chiri1942" p="§80" paren />, and Tangiku glosses it ‘intention’
		<Ref k="tangiku2022" p="§8.5" paren />.
	</p>
	<Ex
		m="simma suy Kusiro onne ku=oman kusu"
		g="tomorrow again Kushiro to 1SG.S=go.SG PURP"
		tr="Tomorrow I will go to Kushiro again."
		cite="murasaki2025:23"
		dial="WS"
	/>
	<p>
		Fuller periphrases add a verb to <i lang="ain">kusu</i>: <i lang="ain">kusu ne</i> with
		the copula and <i lang="ain">kusu iki</i> with <i lang="ain">iki</i> ‘do’. Both are the
		staple future of Sentoku Tarōji's letters, which, being real correspondence about plans,
		attest the intentional reading outside elicitation:
	</p>
	<Ex
		m="uma ihoku ciki nuca kotan oman kusu ne manuy"
		g="horse buy if Russian village go.SG PURP COP REP"
		tr="If he sells the horses, he will go to the Russian village, they say."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<Ex
		m="cokay e=an toko pak no paye=an kusu iki"
		g="1PL.EXCL 2SG.S=exist.SG place until ADV go.PL=INDEF.S PURP do"
		tr="I will go all the way to where you are."
		note="cokay is the CI-series pronoun with singular reference; the verb carries the indefinite suffix (Chapter 13)."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		The formal nouns <A w="kun" /> ~ <A w="kuni" /> build the expectative, Chiri's
		<i lang="ja">予期法</i> ‘what is bound or supposed to happen’
		<Ref k="chiri1942" p="§80" paren />: <i lang="ain">kun pe ne</i> ‘is going to, is supposed
		to’ (examples in <Xr ch="person-and-alignment">Chapter 13</Xr>) and the periphrasis
		<i lang="ain">kun ki</i>, attested already in Dobrotvorsky's nineteenth-century west-coast
		speeches:
	</p>
	<Ex
		m="maskin han neran itah ham an-ki kun ki kusu"
		g="too.much NEG what.kind word NEG INDEF.A-do going.to do PURP"
		orig="Маскинь ханъ неръ-анъ итах, хаманки кунь ги кусу."
		origLang="ain-Cyrl"
		tr="I will not say any word at all."
		note="Sakaguchi reads the sentence-final kusu as intentional ‘intend to’ and the first han as a broken-off repetition of the negator ham."
		cite="dobrotvorsky1875; sakaguchi2021:51"
		dial="WS"
		place="West coast, central (recorded 1867–1872)"
	/>
	<p>
		<i lang="ain">kuni</i> also serves as the complementizer of expected events
		(<Xr ch="complementation">Chapter 22</Xr>). Epistemic futures add the dubitative
		<A w="nanko" gl="probably" /> ~ <i lang="ain">nankoro</i>: <i lang="ain">ukoramupirika
		an-ki nanko</i> ‘I will (probably) make peace’ in the same Dobrotvorsky speech
		<Ref k="dobrotvorsky1875" paren />, <Ref k="sakaguchi2021" paren />; Chiri derives
		<i lang="ain">nankoro</i> from <i lang="ain">nan koro</i> ‘have the face of’
		<Ref k="chiri1942" p="§118" paren />.
	</p>
	<p>
		The shape of the dubitative differs tellingly between Sakhalin and Hokkaidō. Hokkaidō
		places bare <i lang="ain">nankor</i> after the finite verb; the Sakhalin corpora far
		more often show <i lang="ain">nee nanko(ro)</i>, copula first, with the lexical verb in
		the possessive nominalization of <Xr ch="nominalization" s="v-poss-hosts">§20.3</Xr>.
		Bugaeva reads the prefixed copula as the fingerprint of how the modal field arose: the
		Sakhalin finite clause is habitually a nominalization closed by
		<i lang="ain">ne(e)</i> — an originally equational, biclausal structure that has
		tightened into a single complex predicate
		(<Ref k="dalcorso2018" p="§5.2.2" />) — and the modal particles grammaticalized inside
		that frame, fusing with the copula they followed
		<Ref k="bugaeva2016" p="106–107, 113" paren />. The future
		<i lang="ain">kusu ne</i> above is the same recruitment of the copula at an earlier
		stage, and the family extends to the affirmative <i lang="ain">neeko</i> ‘surely’, the
		dubitative <i lang="ain">nean</i>, and the assertive
		<i lang="ain">nankoro pe ne</i> of <Xr ch="complementation">Chapter 22</Xr>. The host
		also lets mood stack transparently on aspect: in Fujiyama Haru's
		<i lang="ain">nuu-hci teh an-i-hi nee nanko</i> ‘she must have heard it’, the dubitative
		rides on the copula, which rides on the nominalized resultative
		<i lang="ain">teh an</i> of §15.2.2
		<Ref k="bugaeva2022" p="Sakhalin text (Dal Corso), ex. 25" paren />.
	</p>
	<Ex
		m="temana neeraan an-kara an-kii-hi nee nanko nah ramu"
		g="how what.kind INDEF.A-make INDEF.A-do-POSS COP probably QUOT think"
		tr="She thought: how should I do this?"
		note="The dubitative takes the whole nominalized clause an-kii-hi as its host, closed by the copula nee; nah ramu frames the inner speech (Chapter 22)."
		cite="dalcorso2018:25 (Murasaki MRA: 25)"
		dial="WS"
		place="Rayciska"
	/>
</S>

<S t="Desiderative" id="desiderative">
	<p>
		The desiderative is <A w="rusuy" />, in Sakhalin as in Hokkaidō
		<Ref k="chiri1942" p="§118" paren />, <Ref k="murasaki1976" p="53" paren />,
		<Ref k="murasaki2025" paren />. It follows the verb directly and is frequent: 92 tokens in
		Asai Take's tales (our count). With <i lang="ain">koro</i> ‘have’ it fuses to
		<i lang="ain">kon rusuy</i> ‘want (a thing)’ — <i lang="ain">eani hemata e-kon-rusuy?</i>
		‘what do you want?’ (text 35) — and Murasaki lists the negative counterpart
		<i lang="ain">etunne</i> ‘not want to’ among the auxiliaries
		<Ref k="murasaki1976" p="53" paren />.
	</p>
	<Ex
		m="ci-reske moromahpo kami-hi ci-ee rusuy kusu"
		g="1PL.EXCL.A-raise girl flesh-POSS 1PL.EXCL.A-eat DES because"
		tr="because we want to eat the flesh of the girl we raised"
		note="The ogress speaks of herself alone in the CI-series (Chapter 13)."
		cite="murasaki2001:text 36"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
</S>

<S t="Potential" id="potential">
	<p>
		Ability is expressed by <A w="easkay" gl="be able" /> and inability by
		<A w="koyaykus" gl="be unable" /> (east coast also <i lang="ain">eaykah</i>); all three
		descend from full verbs and may still take person prefixes, but normally follow the bare
		lexical verb as auxiliaries <Ref k="chiri1942" p="§118" paren />,
		<Ref k="murasaki1976" p="53" paren />. Syntactically they take a nominalized notional
		verb as complement — the notional verb can host nominal particles like
		<i lang="ain">ka</i> ‘even’ — so Dal Corso classes them with the light verbs
		<Ref k="dalcorso2018" p="185" paren />. In Asai Take's tales the negative is five times
		as frequent as the positive: we count 49 tokens of <i lang="ain">koyaykus(-ahci)</i>
		against 10 of <i lang="ain">easkay(-ahci)</i> — failure drives plots.
	</p>
	<Ex
		m="naa haciko yahkayki ceh-koyki ka easkay"
		g="still be.small although fish-catch even be.able"
		tr="Though he was still small, he could catch fish."
		note="The tale continues niina ka easkay manu ‘and he could gather firewood too’."
		cite="murasaki2001:text 23"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="neyke tani taa numa koyaykus manu"
		g="and.then now EMPH get.up be.unable REP"
		tr="And now it could not get up."
		cite="murasaki2001:text 39"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		With the prospective of §15.2.1 the negative potential yields the frustrated attempt:
		<i lang="ain">okoyse kusu kara koyaykus</i> ‘he tried to urinate but could not’ (text
		52). One further form deserves a note of caution: Dobrotvorsky's dialogues contain a
		single <i lang="ain">eska</i> (<i lang="ain">ene eska e-ki kusu ne yay</i>), formally
		reminiscent of <i lang="ain">easkay</i>, but Sakaguchi, whose edition we follow, leaves
		its meaning undetermined <Ref k="sakaguchi2021" p="50" paren />; we do not build on it.
	</p>
</S>

<S t="Imperative and hortative" id="imperative">
	<p>
		The imperative is the bare stem: <i lang="ain">oman!</i> ‘go!’
		<Ref k="chiri1942" p="§26" paren />. No suffix creates the command; the particles that
		accompany imperatives modulate number and politeness. For plural addressees the particle
		<A w="yan" /> is added — in Sakhalin, as Chiri stresses, <i lang="ain">yan</i> attaches
		to plural verb forms and marks plurality of the addressee rather than creating the
		imperative itself <Ref k="chiri1942" p="§119" paren />; the same <i lang="ain">-yan</i>
		reappears inside the first–second person interaction paradigm
		(<Xr ch="person-and-alignment">Chapter 13</Xr>).
	</p>
	<Ex
		m="tah kayki sohkara ne koro ike mokoro"
		g="this even mat COP have and sleep"
		tr="Make a mat of this and sleep."
		note="Two bare-stem imperatives, koro and mokoro."
		cite="murasaki2001:text 46"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="eci-sapahka kotahma-re-yan"
		g="2PL-head be.stuck-CAUS-IMP.PL"
		tr="Stick your heads back on, all of you!"
		note="Addressed to several brothers; the next clause, eci-macihihcin ahun kusu ikii ‘your wives are about to come in’, shows kusu iki in its prospective use (§15.4)."
		cite="murasaki2001:text 5"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Two final particles soften the command: <A w="waa" /> ‘do (please)’ and
		<A w="kanne" /> ‘please, kindly’ — <i lang="ain">en=oponi eh waa</i> ‘come along behind
		me’, <i lang="ain">ponno en=teere kanne</i> ‘please wait a little’
		<Ref k="murasaki2025" p="27" paren />. Chiri identifies <i lang="ain">kane</i> ~
		<i lang="ain">kanne</i> as the Sakhalin equivalent of Hokkaidō imperative
		<i lang="ain">hani</i> <Ref k="chiri1942" p="§119" paren />, and
		<i lang="ain">nankoro</i> supplies a still more ceremonious second-person command
		<Ref k="chiri1942" p="§118" paren />. The prohibitive is built with the preverbal
		negator <i lang="ain">hanka</i> (<Xr ch="negation">Chapter 17</Xr>).
	</p>
	<p>
		For the hortative ‘let us’ Sakhalin does not use Hokkaidō <i lang="ain">ro</i>: Chiri
		notes its absence and cites instead <i lang="ain">ke mosso paye-an-hcin!</i> ‘come, let
		us go quickly!’ <Ref k="chiri1942" p="§119" paren /> — the indefinite suffix
		<i lang="ain">-an</i> (<Xr ch="person-and-alignment">Chapter 13</Xr>) on a plural stem,
		optionally reinforced by <i lang="ain">-hci(n)</i>. Since the indefinite is the ordinary
		inclusive ‘we’, a first-person-plural command needs no further marking; interjections
		(<i lang="ain">ke(h)</i> ‘well then!’) and the particle <i lang="ain">anaa</i> supply the
		invitation: <i lang="ain">tani paye=an anaa</i> ‘come on, let us go now’
		<Ref k="murasaki2025" p="23" paren />.
	</p>
	<Ex
		m="keh anoka tu-aynu-ne sap-an"
		g="well INDEF two-person-COP go.down.PL-INDEF.S"
		tr="Well then, let the two of us go down."
		cite="murasaki2001:text 30"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
</S>

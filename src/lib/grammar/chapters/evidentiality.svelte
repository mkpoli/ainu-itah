<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	Sakhalin Ainu grammaticalizes the source of the speaker's information. The system has received one
	monographic treatment, Dal Corso's comparative study of Ainu evidentiality
	<Ref k="dalcorso2018" paren />, which this chapter follows for the Sakhalin analyses while
	grounding every form in the corpus. Three layers make up the system. At one end stands the
	personal-knowledge marking <i lang="ain">-hV</i> (with a zero alternant), a verbal use of the
	possessive suffix that arose from clause nominalization (<Xr ch="nominalization">Chapter 20</Xr>; <Ref
		k="bugaeva2016"
		p="104, 113"
		paren
	/>). In the middle sit the inferential and sensory constructions built on a possessed evidential
	noun plus <A w="an" gl="exist" /> —
	<i lang="ain">ruwehe an</i>, <i lang="ain">sirihi an</i>, <i lang="ain">humihi an</i>,
	<i lang="ain">hawehe an</i>. At the other end stands the reportative <A w="manu" />, an invariable
	particle at the very edge of the sentence. Dal Corso arranges the whole set on a single scale of
	source reliability, from <i lang="ain">-hV</i> (most reliable) through the inferentials down to
	<i lang="ain">manu</i>
	(least reliable)
	<Ref k="dalcorso2018" p="303" paren />. The reportative dwarfs everything else in text: of all
	evidential tokens in Dal Corso's Sakhalin corpora, <i lang="ain">manu</i> accounts for 4,998 of
	about 5,500, or 91% <Ref k="dalcorso2018" p="72" paren />. Table 1 gives the inventory.
</p>

<table>
	<caption
		>Sakhalin Ainu evidential forms (token counts from <Ref k="dalcorso2018" p="72" />)</caption
	>
	<thead>
		<tr><th>Form</th><th>Composition</th><th>Value</th><th>ES</th><th>WS</th></tr>
	</thead>
	<tbody>
		<tr>
			<td><i lang="ain">-hV</i> ~ <i lang="ain">-Ø</i></td>
			<td>possessive nominalization</td>
			<td>personal knowledge</td>
			<td>120</td>
			<td>201</td>
		</tr>
		<tr>
			<td><i lang="ain">ruwehe ne(e)</i></td>
			<td>trace-POSS + copula</td>
			<td>inferential (assimilated)</td>
			<td>11</td>
			<td>0</td>
		</tr>
		<tr>
			<td><i lang="ain">ruwehe an</i></td>
			<td>trace-POSS + ‘exist’</td>
			<td>inferential</td>
			<td>44</td>
			<td>34</td>
		</tr>
		<tr>
			<td><i lang="ain">sirihi an</i></td>
			<td>appearance-POSS + ‘exist’</td>
			<td>visual</td>
			<td>0</td>
			<td>17</td>
		</tr>
		<tr>
			<td><i lang="ain">humihi an</i></td>
			<td>sound-POSS + ‘exist’</td>
			<td>non-visual sensory</td>
			<td>22</td>
			<td>9</td>
		</tr>
		<tr>
			<td><i lang="ain">hawehe an</i></td>
			<td>voice-POSS + ‘exist’</td>
			<td>auditory</td>
			<td>13</td>
			<td>32</td>
		</tr>
		<tr>
			<td><i lang="ain">manu(u)</i> ~ <i lang="ain">manuy</i></td>
			<td>opaque</td>
			<td>reportative</td>
			<td>1,474</td>
			<td>3,524</td>
		</tr>
	</tbody>
</table>

<S t="The reportative manu" id="reportative">
	<p>
		<A w="manu" /> signals that the speaker holds the information through someone else's words. Its core
		uses are hearsay, where the verbal source is left unspecified, and quotative, where the original
		speaker is named or the report accompanies a quotation
		<Ref k="dalcorso2018" p="295–298" paren />. Both are at home in conversation:
	</p>
	<Ex
		m="koro kun mah isam manu"
		g="have going.to wife not.exist REP"
		tr="He does not yet have a wife, they say."
		note="Hearsay: the bride's family reports what is known of the suitor."
		cite="murasaki1976:84; dalcorso2018:296"
		dial="WS"
		place="Rayciska (Fujiyama Haru)"
	/>
	<Ex
		m="ee aynu an nah ye manu"
		g="yes person exist.SG QUOT say REP"
		orig="“Ē, ájnu án” náx jé manu."
		tr="“Yes, I am a human being,” it said."
		note="manu over a verb of saying that hosts a quotation; the quotative complementizer nah is doing separate work (Chapter 22)."
		cite="pilsudski1912:100; dalcorso2018:23"
		dial="ES"
	/>
	<p>
		In direct discourse the bare reportative is rare; speakers prefer to reinforce it lexically with <A
			w="nu"
			gl="hear"
		/> ‘so I heard’ or <i lang="ain">nah ye</i> ‘so they said’, which spell out the hearsay or
		quotative reading that <i lang="ain">manu</i> alone leaves implicit <Ref
			k="dalcorso2018"
			p="297–298"
			paren
		/>:
	</p>
	<Ex
		m="neya manka kiren tan pa ne pakhe ray manu nu manu"
		g="that be.rich Tungus this year COP spring die REP hear REP"
		orig="Neja mánka kíren tán pá né pákhe ráj manu, nú manu."
		tr="That rich Tungus died this spring, they said — so he heard."
		note="Double manu: the inner token reports the death, the outer one reports the hearing."
		cite="pilsudski1912:139; dalcorso2018:297"
		dial="ES"
	/>
	<p>
		The letters of Sentoku Tarōji show the reportative at work outside folklore, in the east-coast
		variant <i lang="ain">manuy</i>. We count seventeen tokens of
		<i lang="ain">manuy</i> (beside one <i lang="ain">manu</i>) across the three letters: writing
		real news, Sentoku systematically separates what he vouches for from what he passes on.
	</p>
	<Ex
		m="naa iani e=an manuy ci=nu renkayne"
		g="still 2SG 2SG.S=exist.SG REP 1PL.EXCL.A=hear because"
		tr="because we heard that you are still there (we rejoiced)"
		note="Reportative plus the lexical reinforcement ci=nu ‘we heard’, exactly the conversational pattern of the folklore corpora."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<Ex
		m="herohki kotan an manuy"
		g="herring village exist.SG REP"
		tr="there is a herring fishery, they say"
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		The third use is the one that floods the narrative corpus: <i lang="ain">manu</i> as a marker of
		traditional knowledge. In tales the original purveyor of the information is either irretrievable
		or irrelevant; the teller presents the content as community knowledge transmitted by word of
		mouth, and <i lang="ain">manu</i> in this function never takes a lexical reinforcement <Ref
			k="dalcorso2018"
			p="296–299"
			paren
		/>. The formula opens nearly every one of Asai Take's tales:
	</p>
	<Ex
		m="Sannupista sine horokewpo an manu"
		g="Sannupis.LOC one man exist.SG REP"
		tr="In Sannupis there lived a man, they say."
		cite="murasaki2001:text 19"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="an-kor henki-hi i-reske manu"
		g="INDEF.A-have grandfather-POSS INDEF.O-raise REP"
		orig="Án-kor hénkihi irésḱe manu"
		tr="My grandfather brought me up (the story goes)…"
		note="Tale incipit: the first-person protagonist is cross-referenced by the indefinite person (§16.7), and even his own upbringing is presented under the traditional-knowledge reportative."
		cite="pilsudski1912:149; dalcorso2018:296"
		dial="ES"
	/>
</S>

<S t="The grammar of manu" id="manu-grammar">
	<p>
		Murasaki listed <i lang="ain">manu</i> among her eighteen ‘auxiliary constructions’
		<Ref k="murasaki1976" p="53–64" paren />, but its syntax sets it apart from the aspectual
		periphrases and auxiliaries of <Xr ch="tense-aspect-mood">Chapter 15</Xr>. Dal Corso ran the
		whole class through five tests — relativization of the construction as one predicate,
		independent use of the second element, obligatoriness of a syntactic linker, nominal particles
		on the first element, and nominalization with <i lang="ain">-hV</i> — and
		<i lang="ain">manu</i> fails them all: a clause with <i lang="ain">manu</i> cannot be
		relativized or nominalized, <i lang="ain">manu</i> never predicates on its own, nothing links it
		to its host, and it carries no morphology whatsoever
		<Ref k="dalcorso2018" p="176–187" paren />. He concludes that it is a final particle, like the
		polite <i lang="ain">kanne</i> or emphatic <i lang="ain">naa</i>: an invariable word that closes
		the sentence and contributes only procedural meaning. It accordingly takes no person marking and
		co-occurs freely with every person, including the indefinite of narration, and it follows the
		entire aspectual complex — <i lang="ain">kusu an manu</i>,
		<i lang="ain">teh an manu</i>, <i lang="ain">wa isam manu</i> are the normal narrative cadences
		(<Xr ch="tense-aspect-mood">Chapter 15</Xr>). Its origin is opaque; the only published
		speculation derives it from <i lang="ain">hum an</i> ‘there is the sound’, which Dal Corso
		reports as unverifiable <Ref k="dalcorso2018" p="77" paren />. The east-coast variant
		<i lang="ain">manuy</i>
		and lengthened <i lang="ain">manuu</i> are phonological, not morphological.
	</p>
	<p>
		One extension is morphological in appearance only: <i lang="ain">manuyke</i>, the reportative
		fused with the converb <i lang="ain">ike</i> ‘and (then)’ (<Xr ch="clause-linking"
			>Chapter 23</Xr
		>). It keeps the narrative under report while linking the clause to what follows; with 260
		tokens in Asai Take's tales against 2,357 of plain <i lang="ain">manu(u)</i> (our count), it is the
		regular way to continue a reported chain without closing the sentence.
	</p>
	<Ex
		m="horokewpo utah situ us-ahci manuyke taa"
		g="man PL ski put.on-PL REP.and EMPH"
		tr="The men put on their skis, they say, and then…"
		cite="murasaki2001:text 51"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
</S>

<S t="The inferential ruwehe an" id="inferential">
	<p>
		The inferential is built on the possessed form of <A w="ruu" gl="trace" />: a clause followed by
		<i lang="ain">ruwehe</i>
		(reduced <i lang="ain">ruhe</i>,
		<i lang="ain">ruuhe</i>) plus <A w="an" gl="exist" />. The construction is an erstwhile
		possessive construction: the nominalized clause is the possessor and the sensory noun the
		possessee, so that <i lang="ain">re monimahpo an ruwehe an</i> below is literally ‘the trace of
		three girls being there existed’. Synchronically the possessed noun has been pseudo-incorporated
		into <i lang="ain">an</i> — the two form one phonological word, no modifier may intervene except
		the possessor clause, and neither piece can be displaced — while still bearing nominal
		morphology <Ref k="dalcorso2018" p="147–156" paren />. In the typology of Eurasian
		noun-modifying clauses the pattern is a gapless one: the scope clause relativizes no argument of
		its own but simply fills the possessor slot of a perception noun, on the template [possessor
		clause]–[possessed head]–predicate
		<Ref k="bugaeva2017" p="220–221" paren />, in contrast to the gapped relative clauses of
		<Xr ch="relative-clauses">Chapter 21</Xr>. The development presupposes the Sakhalin extension of
		possessive marking to clauses described in
		<Xr ch="nominalization">Chapter 20</Xr>
		<Ref k="bugaeva2016" p="104–113" paren />. The speaker asserts an event he did not witness, on
		the strength of its perceptible results:
	</p>
	<Ex
		m="re monimahpo an ruwehe an manu"
		g="three girl exist.SG trace-POSS exist.SG REP"
		tr="Evidently three girls lived there."
		note="The hero enters an empty house and reads the inhabitants off their belongings; the whole inference is then folded under the narrative reportative."
		cite="murasaki2001:text 5"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="unci okore us wa isam ruwe-he an manu"
		g="fire all go.out and not.exist trace-POSS exist.SG REP"
		tr="The fire had evidently gone out completely."
		note="The conclusive aspect periphrasis wa isam precedes the evidential and stays within its scope (Chapter 15)."
		cite="murasaki2001:30; dalcorso2018:152"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Beside <i lang="ain">ruwehe an</i> the east coast has <i lang="ain">ruwehe ne(e)</i> with the
		copula, unattested in the west <Ref k="dalcorso2018" p="72" paren />. The copular variant
		presents the inference as processed and certain — the content has been thought through and
		brought into the speaker's own dimension — and it is the only inferential that combines with the
		personal-knowledge forms (§16.6)
		<Ref k="dalcorso2018" p="300–301" paren />. What conditions the choice between the two anchors —
		viewpoint, person and dialect — is analysed from the copula's side in
		<Xr ch="copula-and-existence" s="inferential-alternation">§18.6</Xr>:
	</p>
	<Ex
		m="pon nay ohta i-huraye ruhe ne"
		g="be.small river in INDEF.O-wash trace.POSS COP"
		orig="Pon náj oxta ifuráje rúhe né."
		tr="It is clear that she washed me in a small river."
		note="ruhe is the reduced form of ruwehe. The narrator, a foundling, reconstructs his own infancy; i- is the indefinite object prefix referring to the narrator (Chapter 13)."
		cite="pilsudski1912:227; dalcorso2018:21"
		dial="ES"
	/>
	<p>
		Person interacts with the construction in a way that confirms the clausal-possessor analysis: a
		first- or second-person subject of the scope verb is never cross-referenced on the evidential
		noun (Piłsudski's <i lang="ain">otanuye e-kii ruwehe an</i> ‘you must have drawn on the sand’
		shows bare <i lang="ain">ruwehe</i>, not *<i lang="ain">e-ruwehe</i>), because the possessor is
		the whole nominalized clause and hence third person <Ref k="dalcorso2018" p="154–155" paren />.
		The one piece of agreement the noun does accept is the nominal plural <i lang="ain">-hcin</i>,
		optionally echoing a plural subject of the scope verb (§16.4).
	</p>
</S>

<S t="The sensory evidentials" id="sensory">
	<p>
		Three further nouns enter the same construction, each naming the channel of perception:
		<A w="siri" gl="appearance" /> for what is seen, <A w="hum" gl="sound" /> for what is felt or heard
		as noise, <A w="haw" gl="voice" /> for what is heard as speech or cry. The set matches the Hokkaidō
		indirect evidentials <i lang="ain">siran</i>,
		<i lang="ain">humas</i>, <i lang="ain">hawas</i>, with which it shares its origin in sensory
		nouns — Ainu being one of the typologically rare languages whose evidentials are noun-based <Ref
			k="dalcorso2018"
			p="73, 156"
			paren
		/>, <Ref k="bugaeva2016" paren />. The choice among the forms follows a sense hierarchy: vision
		outranks the other channels, so
		<i lang="ain">ruwehe an</i> (inference from visible traces) and
		<i lang="ain">sirihi an</i> (direct visual impression) encode more reliable access than
		<i lang="ain">humihi an</i> and <i lang="ain">hawehe an</i>
		<Ref k="dalcorso2018" p="272–295" paren />.
	</p>
	<Ex
		m="tuhso neeno an puy ahun sir-ihi an manu"
		g="cave as.if exist.SG hole enter.SG appearance-POSS exist.SG REP"
		tr="It looked as though a hole like a cave opened up."
		note="Visual appearance, with the proviso that looks may deceive."
		cite="murasaki1976:95; dalcorso2018:21"
		dial="WS"
		place="Rayciska (Fujiyama Haru)"
	/>
	<Ex
		m="asin-i-hi neampe okaaketa anayne taa cise onne hemata humi-hi an manu"
		g="go.out-EP-NMLZ TOP afterwards after.a.while EMPH house from what sound-POSS exist.SG REP"
		tr="After she had gone out, after a while there came some sound from inside the house."
		note="The interrogative hemata ‘what’ inside the construction (‘the sound of something’) is the regular formula for an unidentified stimulus: 31 tokens of hemata hawehe/humihi in Asai Take's tales (our count)."
		cite="murasaki2001:text 18"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="nean cise onne taa hemata yuukara hawe-he an manu"
		g="that house from EMPH what song voice-POSS exist.SG REP"
		tr="From inside that house came the sound of someone singing."
		cite="murasaki2001:text 19"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="ahkapo-ho-hcin cis hawe-he-hcin an kusu an manu"
		g="younger.brother-POSS-PL cry voice-POSS-PL exist.SG PURP exist.SG REP"
		tr="It sounded as though her younger brothers were crying."
		note="The plural -hcin on the evidential noun echoes the plural subject of cis; the progressive kusu an, though it follows the evidential, scopes over cis ‘cry’ (Chapter 15)."
		cite="murasaki2001:238; dalcorso2018:150"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The corpus distribution is sharply skewed. In Asai Take's 54 tales we count 53 tokens of
		<i lang="ain">hawehe an</i>, 15 of <i lang="ain">ruwehe an</i>, 10 of
		<i lang="ain">humihi an</i> and none of <i lang="ain">sirihi an</i>; the visual form is a
		Rayciska, west-coast resource (17 tokens in the Fujiyama Haru texts, none in Piłsudski's
		east-coast corpus by Dal Corso's count, where instead
		<i lang="ain">ruwehe ne</i> appears) <Ref k="dalcorso2018" p="72" paren />. The auditory form
		earns its frequency from narrative technique: scenes are routinely perceived through walls and
		doors, as in the last three examples. Beside its sensory use,
		<i lang="ain">hawehe an</i> shades into hearsay — ‘there is the voice (saying)’ — bridging
		towards the reportative; the corpus formula <i lang="ain">nah yee hawehe an manu</i> ‘a voice was
		heard saying so’ (text 19) stacks voice-perception, quotation and report in one sentence.
	</p>
	<p>
		Two evidentials may co-occur on one predicate. Personal knowledge <i lang="ain">-hV</i>
		combines only with <i lang="ain">ruwehe ne/an</i> and <i lang="ain">sirihi an</i>, the
		high-reliability inferentials, and there it retains only its epistemic force; and
		<i lang="ain">manu</i>, in its traditional-knowledge function, closes constructions of every
		type, always last <Ref k="dalcorso2018" p="300–302" paren />:
	</p>
	<Ex
		m="cise ohmahta sine hoynu i-ko-kayo-ho ne ruhe an"
		g="house behind one pine.marten INDEF.O-APPL-call-PERS COP trace.POSS exist.SG"
		orig="Ćiśe oxmaxta śine hójnu ikòkajohó né-ruhe an."
		tr="Clearly it was a pine marten that had called me from behind the house."
		note="Double evidentiality: the personal-knowledge nominalization -ho under the inferential ruhe an; the speaker has worked out whose the voice was."
		cite="pilsudski1912:115; dalcorso2018:301"
		dial="ES"
	/>
	<p>
		The reportative supplies a possible third layer, chaining onto the outside of whatever stack the
		sentence has built. In the following Piłsudski sentence a personal-knowledge nominalization sits
		under the copula and the whole assertion is then relayed by
		<i lang="ain">manu</i> — three evidential values in strict continuum order, the most reliable innermost:
	</p>
	<Ex
		m="an-ko-nupuru kusu tani pahno moyre-an-i-hi ne manu"
		g="INDEF.A-APPL-find.interesting because now until be.late-INDEF.S-EP-PERS COP REP"
		orig="Ànkonúpuru kusu, tani paxno mójre anhi né manu."
		tr="Because I found it absorbing, I was late until now (the story goes)."
		note="The narrating protagonist's lateness, known at first hand (-hi), is asserted with the copula and folded under the traditional-knowledge reportative of the tale."
		cite="pilsudski1912:16"
		dial="ES"
	/>
</S>

<S t="Evidentials as relative tense" id="relative-tense">
	<p>
		Sakhalin Ainu has no tense morphology (<Xr ch="tense-aspect-mood">Chapter 15</Xr>), and in
		narrative much of the temporal load falls on the evidentials. The mechanism is relative tense of
		the Reichenbachian kind. A sensorial construction asserts that the stimulus — trace, sight,
		sound, voice — is there for the speaker now, so it pins the reference time to speech time; where
		the event itself sits is then read off the aspectual class of the predicate in its scope <Ref
			k="dalcorso2018"
			p="§7.3.9"
			paren
		/>. Because a trace can outlast the event that left it, <i lang="ain">ruwehe an</i> is the one form
		that genuinely alternates: a telic scope predicate places the event before its still-perceptible
		result, yielding a past inference, while an atelic predicate lets event and trace run concurrently,
		yielding a present one.
	</p>
	<Ex
		m="hemata ka nii kayki kehke wa cokoko wa isam ruwehe an manu"
		g="what even tree even break and fell and not.exist trace.POSS exist.SG REP"
		tr="Evidently it had broken and felled every last tree, they say."
		note="Telic scope: the breaking and felling, sealed by conclusive wa isam (Chapter 15), is over by the time its results are inspected — a past inference."
		cite="murasaki1979:99"
		dial="WS"
		place="Rayciska (Fujiyama Haru)"
	/>
	<Ex
		m="neya i-reske cikah tani sirukunni kusu utohseka ruhe-hcin an"
		g="that INDEF.O-raise bird now be.dark because sleep trace.POSS-PL exist.SG"
		tr="Those birds that brought me up must be asleep, now that it has grown dark."
		note="Atelic scope: the sleeping still holds while its signs are perceived — a present inference. The plural -hcin echoes the plural subject (§16.3)."
		cite="pilsudski1912:21"
		dial="ES"
	/>
	<p>
		The rest of the set does not alternate. With <i lang="ain">ruwehe ne(e)</i> the copula draws the
		inferred content into the speaker's here and now, collapsing event, reference and speech time
		and fixing a present reading whatever the telicity of the scope predicate; and since the sight,
		sound or voice of <i lang="ain">sirihi an</i>,
		<i lang="ain">humihi an</i> and <i lang="ain">hawehe an</i> exists only while the event produces
		it, those three default to the present as well
		<Ref k="dalcorso2018" p="§7.3.9" paren /> (on the two anchors see
		<Xr ch="copula-and-existence" s="inferential-alternation">§18.6</Xr>).
	</p>
	<p>
		Dal Corso left one cell open: motion and possession verbs resist a lexical telicity value, so
		the past/present prediction for <i lang="ain">ruwehe an</i> appears undetermined over exactly
		the verbs it most often scopes. For motion the west-coast record decides. A
		<i lang="ain">ruu</i>
		is the paradigm of a resultant-state object — what a completed displacement leaves behind — and when
		a tracker reads a blood-trail in Fujiyama Haru's telling, <A w="oman" gl="go" /> under
		<i lang="ain">ruuhe an</i> can only mean that the going is over:
	</p>
	<Ex
		m="kemi-hi sayayse wa oman ruuhe an hi kusu"
		g="blood-POSS scatter and go.SG trace.POSS exist.SG NMLZ because"
		tr="because there was a trace that it had shed blood and gone off…"
		note="The trace persists into the inference time; the going that deposited it is necessarily complete — a past reading over the very motion verb whose lexical telicity is indeterminate."
		cite="tamura2003:tuytah 5"
		dial="WS"
		place="Rayciska (Fujiyama Haru)"
	/>
	<p>
		We do not take this as evidence that <i lang="ain">oman</i> is lexically telic. Rather the
		construction coerces its scope: only a bounded, completed motion can deposit a trace, so the
		trace-based inferential imposes a telic, result-leaving construal on whatever predicate it
		takes, and the past reading follows from the construction, not from the verb. Possession resists
		the same diagnostic for a principled reason — a having that has lapsed leaves nothing behind to
		read — and we find no token of
		<i lang="ain">ruwehe an</i> over <A w="koro" gl="have" />; that sub-case remains genuinely open.
	</p>
</S>

<S t="Personal knowledge, person, questions and negation" id="questions-negation">
	<p>
		The personal-knowledge evidential asserts that the information sits in someone's own knowledge,
		whatever the original channel of acquisition. Its exponent is the nominalizing <i lang="ain"
			>-hV</i
		>
		of <Xr ch="nominalization">Chapter 20</Xr> used sentence-finally, beside a zero alternant; Murasaki
		described the overt form as an assertive or ‘compassionate question’ ending <Ref
			k="murasaki1979"
			p="72"
			paren
		/>, and Bugaeva showed that all its uses share presupposed, given content
		<Ref k="bugaeva2016" p="110–113" paren />.
	</p>
	<Ex
		m="ku=yee-he sunke"
		g="1SG.A=say-PERS be.false"
		tr="What I say is a lie."
		cite="murasaki1979:95; dalcorso2018:73"
		dial="WS"
		place="Rayciska (Fujiyama Haru)"
	/>
	<p>
		Person constrains this evidential less than one might expect. Dal Corso's survey finds
		<i lang="ain">-hV</i> and <i lang="ain">-Ø</i> distributed almost evenly across first, second
		and third persons and across affirmative and negative sentences; what varies with person is the
		pragmatics <Ref k="dalcorso2018" p="238–241" paren />. In declaratives the source of the
		knowledge is the speaker. In questions it is the addressee: the speaker uses the
		personal-knowledge form to signal a presupposition that the hearer knows the answer at first
		hand <Ref k="dalcorso2018" p="237, 252–254" paren />. Hence the interrogative is this
		evidential's natural habitat — Chiri already noted that questions prefer the
		<i lang="ain">-hi</i>
		form <Ref k="chiri1942" p="§40" paren />:
	</p>
	<Ex
		m="esinnisah-ta e=numa ike hemata e=kii-hii"
		g="this.morning-LOC 2SG.S=get.up and what 2SG.A=do-PERS"
		tr="What did you do this morning?"
		cite="murasaki1976:3; bugaeva2016:110"
		dial="WS"
		place="Rayciska (Fujiyama Haru)"
	/>
	<Ex
		m="poro iso e=nukara ka hanki-hii"
		g="be.big bear 2SG.A=see even NEG.do-PERS"
		tr="Have you not seen the big bear?"
		note="Negation and personal knowledge stack in a question: the negative light verb hanki (Chapter 17) hosts the evidential nominalization."
		cite="murasaki1976:75; dalcorso2018:239"
		dial="WS"
		place="Rayciska (Fujiyama Haru)"
	/>
	<p>
		Where no answerer is present at all, the same form builds the rhetorical question with the final <i
			lang="ain">hetaneya</i
		>: <i lang="ain">hemata kusu enan si hura an-i-hi hetaneya?</i> ‘why on earth is there such a
		smell of dung?’
		<Ref k="pilsudski1912" p="160" paren />, <Ref k="dalcorso2018" p="252–253" paren />. The other
		evidentials behave asymmetrically here. The inferential and sensory constructions occur freely
		in content questions inside their scope clause but are not themselves questioned; and the
		reportative is barred from questions altogether — in Asai Take's 3,852 corpus sentences
		<i lang="ain">manu</i> never occurs in a genuine interrogative (our count), as expected of a final
		particle that marks the assertion as relayed.
	</p>
	<p>
		Under negation the ordering is rigid: negation is built inside the clause and the evidential
		closes over it, so the report or inference is about a negative state of affairs, never the
		reverse. The negators of <Xr ch="negation">Chapter 17</Xr> precede
		<i lang="ain">manu</i> (five corpus tokens of the type <i lang="ain">V ka hankii manu</i>, our
		count), and we find no token in which an evidential noun is negated by
		<i lang="ain">isam</i> or by a preverbal negator — ‘there is no trace that…’ is simply not how
		the system works. We analyse this as a scope fact: in the attested material evidentiality in
		Sakhalin Ainu consistently scopes outside polarity, attaching at the illocutionary level, and a
		counter-evidential reading would require the lexical strategy (e.g.
		<i lang="ain">nukara ka hankii</i> ‘did not see it’).
	</p>
	<Ex
		m="mokoro yahka ray ka hankii manu"
		g="sleep although die even NEG.do REP"
		tr="Though he lay down to sleep, he did not die, they say."
		cite="murasaki2001:text 21"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
</S>

<S t="Genre, narration and the reportative" id="genre">
	<p>
		Evidentiality is the grammatical backbone of Sakhalin narrative genre. In the
		<i lang="ain">tuytah</i> (folktales) of Asai Take, 1,848 of 3,852 corpus sentences — 48% — carry
		<i lang="ain">manu(u)</i>, 2,357 tokens in all, plus 260 of
		<i lang="ain">manuyke</i> (our counts, <Ref k="murasaki2001" paren />). Whole pages run with the
		particle closing every sentence: it is no longer reporting an utterance but framing the tale as
		traditional knowledge. Dal Corso tracks this shift from reportative proper to direct evidential
		of shared knowledge across dialects and finds it most advanced exactly in Rayciska and Ussoro,
		where <i lang="ain">manu</i> is hardly ever a plain hearsay marker any more, while east-coast
		dialects keep the reportative use alive and disambiguate it with lexical reinforcements; the
		geography of the shift suggests an areal diffusion through adjacent west-coast villages
		<Ref k="dalcorso2018" p="298–299" paren />. Throughout the shift the marker itself never
		changes: one invariable <i lang="ain">manu</i> covers both functions, and only distribution and
		reinforcement tell them apart. Hokkaidō Ainu makes the same move overtly, exchanging the hearsay
		predicate <i lang="ain">hawas</i> for
		<i lang="ain">ruwe ne</i> when narration presents settled knowledge, which throws the Sakhalin
		invariance into relief <Ref k="dalcorso2018" p="298–299" paren />. Whether the west-coast state
		continues an older east-coast one cannot at present be tested: Piłsudski's turn-of-the-century
		materials and Murasaki's of the 1970s were gathered from different speakers, genres and
		elicitation settings, and the apparent diachrony may be an artefact of the record.
	</p>
	<p>
		The reportative frame interlocks with a person convention. In folktales the narrator-protagonist
		is cross-referenced by the indefinite person <i lang="ain">an-</i>,
		<i lang="ain">-an</i>, <i lang="ain">i-</i> (<Xr ch="person-and-alignment">Chapter 13</Xr>): the
		‘I’ of the tale is not the teller, and the use of indefinite and first-person-plural marking for
		the speaker is a fixture of folklore
		<Ref k="dalcorso2024" p="68" paren />. Piłsudski's incipit above (§16.1) shows the pattern:
		<i lang="ain">an-kor henki-hi i-reske manu</i>, indefinite person under the
		traditional-knowledge reportative. The letters invert both settings at once: Sentoku writes of
		himself with <i lang="ain">an=</i> and <i lang="ain">ci=</i>, vouching for his news in unmarked
		clauses, and reserves <i lang="ain">manuy</i> for the items he has at second hand (§16.1).
		Genre, person marking and evidential choice are thus a single package: indefinite narration
		under <i lang="ain">manu</i> for inherited tales, first-person assertion with occasional reportatives
		for lived report. The same division explains why the inferential and sensory forms cluster inside
		tales at moments of restricted perception — the protagonist hears crying through a wall, finds a
		cold hearth — while the personal-knowledge forms cluster in dialogue, where speakers negotiate who
		knows what.
	</p>
</S>

<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	Sakhalin Ainu has no complementizer of the English <em>that</em> type. Clauses become
	arguments of predicates in four ways: as bare, zero-nominalized complements of modal
	and aspectual predicates; as irrealis complements built with <i lang="ain">kun(i)</i>
	and the bound nouns <i lang="ain">pe</i> and <i lang="ain">hi</i>; as direct
	quotations closed by the quotative <A w="nah" /> with a verb of saying; and — in the
	distinctively Sakhalin pattern — as possessive-nominalized clauses, which serve
	perception predicates as objects and evaluative predicates as subjects, shading into
	the evidential constructions of <Xr ch="evidentiality">Chapter 16</Xr>. Throughout,
	complementation leans on the nominalization machinery of
	<Xr ch="nominalization">Chapter 20</Xr>. In the terms of Noonan's typology of
	complementation, the language divides the labour between a paratactic direct-quote
	type, a reduced subject-sharing type, and nominalized complements, with no finite
	indicative complement clause at all <Ref k="noonan2007" paren />.
</p>

<table>
	<caption>Complementation strategies and the predicates that select them</caption>
	<thead>
		<tr><th>Strategy</th><th>Shape</th><th>Selecting predicates</th><th>Section</th></tr>
	</thead>
	<tbody>
		<tr>
			<td>Zero-nominalization</td>
			<td>bare [V]; person marking migrates to the matrix</td>
			<td><i lang="ain">rusuy</i> ‘want’, <i lang="ain">easkay</i> ‘be able’,
				<i lang="ain">koyaykus</i> ~ <i lang="ain">eaykah</i> ‘cannot’,
				<i lang="ain">hemaka</i> ‘finish’, <i lang="ain">etunne</i> ‘not want’,
				<i lang="ain">erameskari</i> ‘not know’</td>
			<td>§22.1</td>
		</tr>
		<tr>
			<td>Irrealis <i lang="ain">kun(i)</i></td>
			<td>[V <i lang="ain">kun-i</i>], [V <i lang="ain">kun pe</i>], purposive
				<i lang="ain">kuni no</i></td>
			<td><i lang="ain">ramu</i> ‘think, intend’; future and obligative periphrases</td>
			<td>§22.2</td>
		</tr>
		<tr>
			<td>Quotation</td>
			<td>[direct clause] <i lang="ain">nah</i> + framing verb</td>
			<td><i lang="ain">yee</i> ‘say’, <i lang="ain">kii</i> ‘go (of speech, sounds)’,
				<i lang="ain">ramu</i> ‘think’</td>
			<td>§22.3</td>
		</tr>
		<tr>
			<td>Possessive nominalization</td>
			<td><i>V</i>-POSS (± <i lang="ain">neampe</i>, ± <i lang="ain">nee</i>)</td>
			<td>perception verbs as object; evaluative <i lang="ain">pirka</i> ‘be good’,
				<i lang="ain">sunke</i> ‘be untrue’ as subject</td>
			<td>§§22.4–22.5</td>
		</tr>
	</tbody>
</table>

<p>
	The chapter takes the strategies in turn and closes with the selectional system that
	unites them (§22.6).
</p>

<S t="Bare complements of modal and aspectual predicates" id="bare-complements">
	<p>
		The desiderative <A w="rusuy" />, potential <A w="easkay" /> and its negatives
		<i lang="ain">koyaykus</i> and <i lang="ain">eaykah</i>, and completive
		<A w="hemaka" /> take a bare verb as their complement — a zero-nominalization, the
		oldest layer of the system <Ref k="bugaeva2016" p="99, 113" paren />
		(<Xr ch="tense-aspect-mood">Chapter 15</Xr> for their semantics). Furukawa's
		Rayciska data show the diagnostic property: the person marking of the whole
		sentence migrates to the modal predicate, leaving the notional verb bare —
		her transformational rule reorders <i lang="ain">ku-oman koyaykus</i> into the
		usual
	</p>
	<Ex
		m="oman ku-koyaykus"
		g="go.SG 1SG-cannot"
		tr="I cannot go."
		cite="furukawa1967:113"
		dial="WS"
		place="Rayciska (Fujiyama Haru)"
		note="Beside less common ku-oman koyaykus and doubly marked ku-oman ku-koyaykus (Furukawa 1967: 112 fn. 5)."
	/>
	<Ex
		m="ampene suukawka ku-koyaykus"
		g="at.all sew 1SG-cannot"
		tr="I cannot sew at all."
		cite="furukawa1967:106"
		dial="WS"
		place="Rayciska (Fujiyama Haru)"
		note="koyaykus ‘cannot (because of circumstances)’ contrasts with eaykah ‘cannot (by inability)’ (Furukawa 1967: 106)."
	/>
	<p>
		The complement may be flagged with the additive particle <i lang="ain">ka</i>
		‘even’, and with the lexically negative predicates of
		<Xr ch="negation" s="negative-existential">§17.4</Xr> this yields fixed
		constructions: <i>V</i> <i lang="ain">ka erameskari</i> ‘have never V-ed’
		(experiential), <i>V</i> <i lang="ain">ka etunne</i> ‘not want to V’, <i>V</i>
		<i lang="ain">ka koyaykus</i> ‘be unable to V’
		<Ref k="dalcorso2025neg" p="40–41" paren />. The negated light-verb construction
		of <Xr ch="negation" s="standard-negation">§17.2</Xr> — nominalized verb +
		<i lang="ain">ka</i> + <i lang="ain">hanki</i> — has exactly this complement
		syntax, with ‘do’ as the matrix predicate.
	</p>
</S>

<S t="Irrealis complements with kun(i)" id="kuni">
	<p>
		Unrealized, intended, or obligatory events are embedded with
		<i lang="ain">kun(i)</i>, which we gloss COND following its conditional-irrealis
		value; it combines with the nominalizers as <i lang="ain">kun-i</i> and
		<i lang="ain">kun pe</i> (<Xr ch="nominalization" s="pe">§20.1</Xr>). Under verbs
		of thinking and intending the <i lang="ain">kun-i</i> form supplies the complement:
	</p>
	<Ex
		m="ene an-ki-kun-i an-ramu"
		g="like.this INDEF.A-do-COND-NMLZ INDEF.A-think"
		tr="I intended to do so."
		cite="pilsudski1912:210; dalcorso2025neg:53"
		dial="ES"
	/>
	<p>
		With the adverbializer <i lang="ain">no</i>, the same form makes purposive
		complements and adjuncts, ‘so that, in order to’; the oldest West-coast texts show
		it under negation:
	</p>
	<Ex
		m="ukoramuwen ham an-ki kuni no"
		g="quarrel NEG INDEF.A-do COND ADV"
		tr="so that we do not quarrel (any more)…"
		cite="dobrotvorsky1875; sakaguchi2021"
		dial="WS"
		place="West coast, central (recorded 1867–1872)"
	/>
	<p>
		The same texts show the assertive future complex
		<i lang="ain">nankoro pe ne</i> ‘it will (probably) be the case that…’, where the
		dubitative, the bound noun <i lang="ain">pe</i>, and the copula stack over the
		clause — complementation grammaticalized into modality
		(<Xr ch="tense-aspect-mood">Chapter 15</Xr>):
	</p>
	<Ex
		m="irutaspano ukoramupirika an-ki ciki pirika nankoro pe ne"
		g="mutually reconcile INDEF.A-do if be.good probably NMLZ COP"
		tr="If we make peace with each other, it will be a good thing."
		cite="dobrotvorsky1875; sakaguchi2021"
		dial="WS"
		place="West coast, central (recorded 1867–1872)"
	/>
</S>

<S t="Quotation and reported speech" id="quotation">
	<p>
		Speech and thought are reported as direct quotation: the quoted clause stands first,
		the quotative particle <A w="nah" /> closes it, and a verb of saying or doing
		follows — <i lang="ain">nah yee</i> ‘say so’, <i lang="ain">nah kii</i> ‘go like
		this’ (of speech and sounds), <i lang="ain">nah ramu</i> ‘think so’. Inside
		quotations the deixis is that of the original speaker, and in folktales the
		quotative frame carries the logophoric use of the indefinite person
		(<Xr ch="person-and-alignment" s="indefinite">§13.2</Xr>;
		<Xr ch="evidentiality" s="genre">§16.7</Xr>):
	</p>
	<Ex
		m="yee wa an-nuu nah yehci yahka ampene mokoro manu"
		g="say and INDEF.A-hear QUOT say.PL although utterly sleep REP"
		tr="“Tell us, and we will listen,” they said — but he just slept on."
		cite="murasaki2001:text 5"
		dial="WS"
		place="Odasu (Asai Take)"
		note="yehci < yee + -hci with regular vowel shortening (§5.4); the quotation is a command with its own final particle omitted in the retelling."
	/>
	<p>
		That logophoric convention deserves spelling out, because it is the closest the
		language comes to a dedicated reported-speech grammar. When a character reports
		speech in which he or she figures, the quoted speaker is encoded with the
		indefinite (fourth-person) prefixes rather than with the first person: the “I”
		inside the quote is grammatically held apart from the “I” of the narrator. Chiri
		noticed the effect and remarked that the Sakhalin indefinite inside quotations
		comes close to a third-person value — so close that he was inclined to call it a
		third-person affix outright <Ref k="chiri1942" p="764" paren /> — citing a cry
		from Piłsudski's East-coast texts in which the quoted speaker's ‘me’ is the
		indefinite object prefix:
	</p>
	<Ex
		m="oha-cisuye i=nospa ike kira yan nah ye manu"
		g="empty-house.demon INDEF.O=chase and.so flee IMP.PL QUOT say REP"
		tr="“The demon of the empty house is chasing me — run!” he said."
		cite="pilsudski1912:100; chiri1942:764"
		dial="ES"
		note="The quoted speaker refers to himself with the indefinite object prefix i= ‘me’, where first-person en= might be expected; the quotative frame licenses the shift."
	/>
	<p>
		Sakhalin Ainu thus has no logophoric pronoun series of the West African type —
		no form reserved for the reported speaker and nothing else. What it has is the
		independent fourth-person category recruited for the logophoric function,
		disambiguating the speech-internal from the speech-external participant without
		new morphology. The recruitment is the diachronically expected one: indefinite
		and fourth-person categories are a recognized source of logophoric marking
		cross-linguistically, and the Sakhalin texts show the source construction still
		transparent, quasi-logophoric rather than grammaticalized
		(<Xr ch="person-and-alignment" s="indefinite">§13.2</Xr>).
	</p>
	<p>
		Indirect speech as a distinct construction is not attested: even reports embedded
		under <i lang="ain">nah ramu</i> ‘think’ keep direct-speech deixis. The reportative
		<A w="manu" /> that ends narrative sentences is the same strategy scaled up to the
		whole text — the tale is one long quotation (<Xr ch="evidentiality">Chapter 16</Xr>).
	</p>
</S>

<S t="Perception and knowledge complements" id="perception">
	<p>
		Perception verbs take a nominalized clause as object. The commonest frame in the
		narrative corpus is the possessive nominalization plus topic particle,
		<i>V</i>-POSS <i lang="ain">neampe</i>, literally ‘(as for) my seeing — …’, which
		serves at once as a perception report and a temporal pivot ‘when I looked’:
	</p>
	<Ex
		m="an-nukara-ha neampe suy hekimoh makanu wa isam manu"
		g="INDEF.A-see-POSS TOP again uphill go.up and not.exist REP"
		tr="When I looked — it had gone off uphill again."
		cite="murasaki2001:text 5"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		We analyse the construction as a nominalized complement that has been topicalized
		out of its matrix clause: the perceived content is then asserted as a fresh main
		clause, exactly parallel to the presuppositional main-clause nominalizations of
		<Xr ch="nominalization" s="main-clause">§20.5</Xr>. Where the perceived content is
		expressed with the evidential nouns — ‘hear the voice of X V-ing’, ‘see the sight
		of…’ — the complement structure and the evidential construction coincide
		(<Xr ch="evidentiality" s="sensory">§16.4</Xr>;
		<Ref k="bugaeva2016" p="101–102" paren />). Knowledge predicates pattern with the
		modals: <i lang="ain">wante</i> ‘know’ and its negative
		<i lang="ain">erameskari</i> take bare or <i lang="ain">ka</i>-marked
		zero-nominalized complements (§22.1), as in the experiential construction
		<i>V</i> <i lang="ain">ka erameskari</i> ‘have no experience of V-ing’
		<Ref k="dalcorso2025neg" p="40–41" paren />. The East-coast texts show that the
		cognition class also reaches the possessive nominalization: Piłsudski's
		<i lang="ain">yay-ikoramopi-hi kayki an-eramuskari</i> ‘I do not even know what
		(she) thinks of me’ embeds a <i>V</i>-POSS form as the object of the negative
		knowledge verb <Ref k="pilsudski1912" paren />, so the strategy is not confined
		to the innovating West coast in its embedded uses
		(<Xr ch="nominalization" s="main-clause">§20.5</Xr>).
	</p>
</S>

<S t="Evaluative predicates and clausal subjects" id="evaluative">
	<p>
		A clause can also be the <em>subject</em> of a higher predicate. The selecting
		class is the one-place evaluative and veridicality predicates —
		<A w="pirka" gl="be good" />, <A w="wen" gl="be bad" />,
		<i lang="ain">sunke</i> ‘be untrue, lie’ — which predicate something of a state
		of affairs rather than of a participant. On the West coast that state of affairs
		is packaged as the possessive nominalization: in
		<i lang="ain">ku=araka-ha pirika</i> ‘my being sick got better’, the clause
		<i lang="ain">ku=araka-ha</i> occupies the subject slot of
		<i lang="ain">pirika</i> (the example is given in full in
		<Xr ch="nominalization" s="possessive-nominalization">§20.2</Xr>), and in
		<i lang="ain">ku=ye-he sunke</i> ‘what I said is untrue’ the nominalized clause
		is what the veridicality predicate judges false
		(<Xr ch="nouns-and-possession" s="derived-nominals">Chapter 7</Xr>;
		<Ref k="murasaki1979" p="95, 141" />; <Ref k="bugaeva2016" p="108" />).
	</p>
	<p>
		The construction is the structural opposite of the modal class of §22.1. There
		the complement is stripped bare and the person marking migrates onto the matrix
		predicate; here the complement keeps its own person marking and carries full
		nominalizing morphology, while the matrix contributes nothing but a plain
		one-place predicate. The two classes show no attested overlap: no evaluative predicate is
		attested with a bare-verb complement, and no desiderative or potential with a
		<i>V</i>-POSS one. The attested evaluative class is admittedly small — only
		<i lang="ain">pirka</i> and <i lang="ain">sunke</i> are secure in the corpus as
		matrices of a nominalized subject clause. Its semantics, however, defines a
		natural class, and we predict that its remaining members, most obviously the
		antonym <i lang="ain">wen</i> ‘be bad’, select the same <i>V</i>-POSS subject
		clause; a larger conversational sample would test the prediction.
	</p>
</S>

<S t="The selectional system" id="selection">
	<p>
		Set side by side, the strategies of this chapter are not an arbitrary list:
		which one a matrix predicate selects follows from how tightly its meaning binds
		it to the complement event.
	</p>
	<table>
		<caption>Complement shape by matrix predicate class</caption>
		<thead>
			<tr>
				<th>Predicate class</th>
				<th>Predicates</th>
				<th>Complement shape</th>
				<th>Attested frame</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Desiderative, modal, ability</td>
				<td><i lang="ain">rusuy</i>, <i lang="ain">easkay</i>,
					<i lang="ain">koyaykus</i></td>
				<td>bare [V]</td>
				<td><i lang="ain">oman ku-koyaykus</i> (§22.1)</td>
			</tr>
			<tr>
				<td>Phasal</td>
				<td><i lang="ain">hemaka</i></td>
				<td>bare [V]</td>
				<td><i lang="ain">ray hemaka</i>
					(<Xr ch="tense-aspect-mood" s="completive">Chapter 15</Xr>)</td>
			</tr>
			<tr>
				<td>Evaluative, veridicality</td>
				<td><i lang="ain">pirka</i>, <i lang="ain">wen</i>,
					<i lang="ain">sunke</i></td>
				<td><i>V</i>-POSS subject clause</td>
				<td><i lang="ain">ku=araka-ha pirika</i> (§22.5)</td>
			</tr>
			<tr>
				<td>Evidential and modal noun heads</td>
				<td><i lang="ain">ruwehe an</i>, <i lang="ain">nee nankor</i></td>
				<td><i>V</i>-POSS + <i lang="ain">nee</i></td>
				<td><i lang="ain">pirika-ha nee nankor</i>
					(<Xr ch="nominalization" s="v-poss-hosts">§20.3</Xr>;
					<Xr ch="evidentiality">Chapter 16</Xr>)</td>
			</tr>
			<tr>
				<td>Utterance</td>
				<td><i lang="ain">yee</i>, <i lang="ain">kii</i></td>
				<td>direct clause + <i lang="ain">nah</i></td>
				<td><i lang="ain">… nah yee</i> (§22.3)</td>
			</tr>
			<tr>
				<td>Cognition, knowledge</td>
				<td><i lang="ain">ramu</i>, <i lang="ain">wante</i>,
					<i lang="ain">erameskari</i></td>
				<td><i lang="ain">nah</i>-clause, <i lang="ain">kun-i</i>, or
					nominalization</td>
				<td><i lang="ain">… kun-i an-ramu</i> (§22.2)</td>
			</tr>
		</tbody>
	</table>
	<p>
		The gradient is the iconic one of Givón's binding hierarchy
		<Ref k="givon1980" paren />: the tighter the semantic bond between matrix and
		complement, the less nominalizing morphology the complement carries. The
		subject-sharing desideratives and modals, whose two events are in effect one,
		take a stripped verb welded into a single complex predicate; the evaluatives,
		which assert something about an independent but presupposed event, take a fully
		nominalized clause; and the utterance verbs, whose complement is an autonomous
		speech act, take an unreduced direct clause merely flagged by
		<i lang="ain">nah</i>. The cognition verbs straddle the loose end of the scale,
		sharing the quotation frame with <i lang="ain">yee</i> and the nominalizations
		with the evaluatives — as expected of predicates whose semantics ranges from
		quoted inner speech to settled knowledge. Within Noonan's typology, Sakhalin
		Ainu thus runs its entire complementation on sentence-like (quoted) and reduced
		or nominalized complement types <Ref k="noonan2007" paren />; the finite
		indicative complement that English builds with <em>that</em> simply has no
		Sakhalin counterpart. The chief residual uncertainty is the size of the
		evaluative class (§22.5).
	</p>
</S>

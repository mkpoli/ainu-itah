<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	Grammatical relations in Sakhalin Ainu are carried by the verb (<Xr ch="person-and-alignment"
		>Chapter 13</Xr
	>); noun phrases bear no case marking, and the postpositions of <Xr ch="postpositions"
		>Chapter 11</Xr
	> mark only obliques. What a sentence is <em>about</em>, and which part of it is news, is
	therefore signalled by other means: a small set of particles placed after the phrase they scope
	over, departures from the verb-final default order of <Xr ch="clause-structure">Chapter 19</Xr>,
	and the final particles of dialogue. Chiri's classic description sorts the relevant particles into
	an adverbial class (<i lang="ain">ka</i>, <i lang="ain">kayki</i>, <i lang="ain">patek</i>…), a
	Japanese-style "binding" class that includes the topic markers, and an interjectional class that
	may close the sentence <Ref k="chiri1942" p="§124–§129" paren />. The data below come from Chiri's
	survey, Furukawa's Rayciska syntax <Ref k="furukawa1967" paren />, Murasaki's conversation course <Ref
		k="murasaki2025"
		paren
	/>, Piłsudski's east-coast texts (<Ref k="pilsudski1912" />, with the analyses of <Ref
		k="dalcorso2018"
	/> and
	<Ref k="dalcorso2024" />), the Sentoku Tarōji (<span lang="ja">千徳太郎治</span>) letters
	<Ref k="tangiku2001" paren />, and our own counts over the 3,852 corpus sentences of Asai Take's (<span
		lang="ja">浅井タケ</span
	>) west-coast tales <Ref k="murasaki2001" paren />.
</p>

<S t="Topic marking: neampe and anahne" id="topic">
	<p>
		The topic particle of Sakhalin Ainu is <A w="neampe" gl="as for" /> (east-coast sources
		<i lang="ain">neanpe</i>), placed after the phrase it marks. Chiri lists it as the Sakhalin
		equivalent of Hokkaidō <i lang="ain">anak</i>, <i lang="ain">anakne</i> and of Japanese
		<span lang="ja">は</span>
		<Ref k="chiri1942" p="§127" paren />, and Dal Corso calls it simply the topic marker <Ref
			k="dalcorso2024"
			p="61"
			paren
		/>. Formally it is the anaphoric pronoun <i lang="ain">neampe</i> ‘that thing’ —
		<i lang="ain">ne-an-pe</i>
		‘thing being that’ (<Xr ch="pronouns-and-demonstratives" s="anaphoric">Chapter 9</Xr>) — frozen
		into a particle, and the pronominal and particle uses still shade into one another. It is by far
		the commonest information-structure word of the corpus: 917 tokens in the Asai Take tales by our
		count, against 312 of <i lang="ain">ka</i> and 58 of
		<i lang="ain">kayki</i>.
	</p>
	<p>
		With a noun phrase host, <i lang="ain">neampe</i> typically marks a contrastive or switched
		topic rather than mere givenness. Subjects that simply continue the current topic go unmarked;
		<i lang="ain">neampe</i>
		appears where one referent is picked out against another, as when sisters divide their chores or
		pair off with husbands in sequence —
		<i lang="ain">inoskun monimahpo neampe inoskun horokewpo sam</i>
		‘the middle girl married the middle man’, and so on down the list (<Ref k="murasaki2001" /> text
		18). We analyse this as the particle's core function in the west-coast narrative corpus.
	</p>
	<Ex
		m="kiyanne monimahpo neampe unci-uwaare"
		g="be.eldest girl TOP fire-kindle"
		tr="The eldest girl, for her part, kept the fire going."
		note="The middle and youngest sisters have just been sent out for firewood; neampe sets the remaining sister against them."
		cite="murasaki2001:text 18"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="iineahsuy tan horokewpo neampe aynu ka hannehka"
		g="hey this man TOP person even NEG"
		tr="Listen — this man is not even a human!"
		note="The speech continues seta horokewpo nee manu ‘he is a dog-man’. Topic neampe and focus ka co-occur in one clause."
		cite="murasaki2001:text 25"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The same particle serves the east coast. In Yamabe Yasunosuke's (<span lang="ja"
			>山辺安之助</span
		>) autobiography <i lang="ain">neanpe</i> marks non-subject topics —
		<i lang="ain">urayki neanpe ham utara ki kun-pe ne</i>
		‘war is a thing one must not make’, with the object topicalised and the subject unmarked
		<Ref k="sakaguchi2020utara" p="190–191" paren /> — and it may be doubled over a contrastive list:
	</p>
	<Ex
		m="ikoro neanpe tomi neanpe an-i yahka nata koro kun-pe han ne"
		g="treasure TOP riches TOP exist.SG-NMLZ although who have should-NMLZ NEG COP"
		tr="Treasures, riches — though they exist, they are not things for anyone to own."
		note="The speech continues yaykota e-koro kun-pe ne ‘you must keep it yourself’ (Chapter 9, example (7) there)."
		cite="pilsudski1912:text 23, l. 201; sakaguchi2020utara:195"
		dial="ES"
	/>
	<p>
		Beside it the east coast keeps <A w="anahne" gl="as for" />, the formal match of Hokkaidō
		<i lang="ain">anakne</i>. Piłsudski glosses it ‘as regards’ in his interlinear English
		<Ref k="pilsudski1912" p="23" paren />; in his texts it favours scene-setting adverbs —
		<i lang="ain">tani anahne</i> ‘now, for its part’ is a recurrent narrative re-launcher (<Xr
			ch="pronouns-and-demonstratives"
			s="third-person">Chapter 9</Xr
		>, example (6) there; <Ref k="sakaguchi2020utara" p="194" />). The two markers stack in one
		sentence:
	</p>
	<Ex
		m="tani anahne anokay neanpe iwan pon sumari uriwahne sumari an-ne-si-te okay-an-ahci"
		g="now TOP INDEF TOP six small fox sibling fox INDEF.A-COP-PL-and exist.PL-INDEF.S-PL"
		tr="Now we, for our part — we are six little foxes, brother foxes, and we live together."
		note="A fox in human disguise introduces himself; -si is the east-coast shape of plural -hci."
		cite="pilsudski1912:text 21, ll. 23–25"
		dial="ES"
		place="Tunayci (Yasinoske)"
	/>
	<p>
		In the west-coast corpus <i lang="ain">anahne</i> is absent: Asai Take's
		<i lang="ain">anah</i> (17 tokens, all of them) is the conditional converb ‘if, when’ (<Ref
			k="murasaki2025"
			p="33"
		/>; <Xr ch="clause-linking">Chapter 23</Xr>; example (19) below), and its combination
		<i lang="ain">anahkayki</i>
		with the focus particle
		<i lang="ain">kayki</i> yields concessive ‘even if, although’. We take the division of labour to
		be dialectal: the east coast retains the inherited topic particle
		<i lang="ain">anahne</i> alongside innovating <i lang="ain">neanpe</i>, while the west coast has
		generalised <i lang="ain">neampe</i> and reserves bare <i lang="ain">anah</i>
		for the conditional.
	</p>
	<p>
		Outside the folktales, the expository prose of the Sentoku letters shows the unmarked side of
		the same system: a topical subject that continues or re-activates an already salient referent is
		simply placed first, with no particle. The Ainu community is one such standing topic of the
		third letter, and the clause reporting its response to official pressure fronts it bare:
	</p>
	<Ex
		m="aynu utara tani monasno nu etunne"
		g="Ainu PL now promptly hear refuse"
		tr="The Ainu now flatly refused to give their assent."
		lit="the Ainu people now promptly refuse to hear"
		note="The preceding clause is aynu okta sisan puri ko-nte rusuy yahka ‘though they want to impose Japanese ways on the Ainu’; aynu utara is the continuing topic and stands unmarked, where a switched topic would take neanpe."
		cite="tangiku2001:Letter 3"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<S t="Clause topics: -hi neampe" id="clause-topics">
		<p>
			The majority of <i lang="ain">neampe</i> tokens do not follow a noun at all. Of the 833 tokens
			in the Asai corpus whose host stands in the same line, 654 by our count follow a clause
			nominalized with the suffix <i lang="ain">-hV</i>
			(<Xr ch="nominalization">Chapter 20</Xr>), yielding a temporal-thematic frame ‘when X
			happened, …’ — Dal Corso identifies <i lang="ain">-hV</i> plus
			<i lang="ain">neampe</i> as a temporal subordinating expression
			<Ref k="dalcorso2018" p="375" paren />. We treat both uses as one construction: the particle
			sets up a frame — a referent or an event — within which the rest of the sentence is
			interpreted.
		</p>
		<Ex
			m="kinta makan-ihi neampe taa sine cise an manu"
			g="to.mountains go.uphill.SG-NMLZ TOP then one house exist.SG REP"
			tr="When he went up into the mountains, there was a house."
			cite="murasaki2001:text 19"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
		<p>
			Sentence-initially, with no host at all, <i lang="ain">neampe</i> resumes the previous
			discourse wholesale — ‘as for that, thereupon’ — and functions as a topic-switching
			connective; this absolute use accounts for most of the remaining tokens. Independent personal
			pronouns, themselves optional emphatic adjuncts, are the other main carriers of contrast:
			<i lang="ain">kuani</i>
			‘I (and not you)’, <i lang="ain">eani</i> ‘YOU’, frequently reinforced by
			<i lang="ain">neampe</i>
			as in <i lang="ain">ecokay neanpe cis ohta eci-okay</i> ‘as for you, you stay in the boat’ (<Xr
				ch="pronouns-and-demonstratives"
				s="personal">Chapter 9</Xr
			>).
		</p>
	</S>
</S>

<S t="Focus particles" id="focus-particles">
	<p>
		The additive and restrictive particles follow the phrase they scope over, after any
		postposition. Chiri's inventory for this class gives <i lang="ain">ka</i> ‘also’,
		<i lang="ain">kaiki</i> ‘also’, Sakhalin <i lang="ain">na</i> ‘also’,
		<i lang="ain">patek</i> ‘only’ and <i lang="ain">poka</i> ‘at least’
		<Ref k="chiri1942" p="§125" paren />; Furukawa's Rayciska grammar lists
		<i lang="ain">ka</i>, <i lang="ain">naa</i> ‘also’ and <i lang="ain">pateh</i> ‘only’ as the
		living members of the class <Ref k="furukawa1967" p="106" paren />.
	</p>
	<p>
		<A w="ka" gl="also, even" /> is the general additive ‘also, too’, and under negation a scalar ‘(not)
		even’, as in (2) above and in the negative indefinites
		<i lang="ain">neh ka</i> ‘nothing at all’, <i lang="ain">hemata ka</i> ‘something/ anything’
		built on interrogatives (<Xr ch="pronouns-and-demonstratives" s="indefinites">Chapter 9</Xr>;
		<Xr ch="negation">Chapter 17</Xr>). It attaches to nouns, adverbs and converb clauses alike:
	</p>
	<Ex
		m="anokay aynu utara ramma ka pirka ponno ponno cep ukoyki an=e=hci"
		g="INDEF person PL always also be.good a.little a.little fish catch INDEF.A=eat=PL"
		tr="We Ainu are, as ever, well; we catch and eat just a little fish."
		note="ka on the adverb ramma ‘always’: ‘now as always’."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		<A w="kayki" gl="even, also" /> is the emphatic counterpart, ‘even, indeed also’. The two alternate
		in the same frame within one tale: in text 28 a succession of slighted animals each complain
		<i lang="ain">taah ka ku-e-ocis</i> ‘this too I resent’, but at the climax the herring-girls say:
	</p>
	<Ex
		m="tah kayki ku-e-ocis kusu ku-an"
		g="this even 1SG.A-APPL-resent PURP 1SG.S-exist.SG"
		tr="This, of all things, is what I resent."
		note="kusu plus the existential is the progressive (Chapter 15): ‘I am resenting precisely this’."
		cite="murasaki2001:text 28"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		<i lang="ain">kayki</i> also welds onto subordinators — <i lang="ain">anahkayki</i>
		‘even if’, <i lang="ain">(ne)yahkayki</i> ‘although’ (<Xr ch="clause-linking">Chapter 23</Xr>) —
		and onto <i lang="ain">neewa</i> ‘and’ in
		<i lang="ain">neewa kayki</i> ‘but, and yet’. The plain additive of the east-coast letters is <A
			w="na"
			gl="also"
		/>, which Chiri records as a specifically Sakhalin particle ‘also’ <Ref
			k="chiri1942"
			p="§125"
			paren
		/>; Sentoku Tarōji uses it again and again where Asai Take has <i lang="ain">naa</i> (258
		tokens, including the correlative <i lang="ain">muysankeh ne naa sahka ne naa</i> ‘both into brooms
		and into chopsticks’, text 5):
	</p>
	<Ex
		m="cokay na hateki ponno ci=kara"
		g="1PL.EXCL also field a.little 1PL.EXCL.A=make"
		tr="I too have made a small field."
		note="cokay with singular reference, as regularly in the letters; hateki is Japanese hatake ‘field’."
		cite="tangiku2001:Letter 2"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		The restrictive particle is <A w="pateh" gl="only" />, underlyingly
		<i lang="ain">patek</i> with the regular debuccalization of the final stop; the east-coast texts
		show <i lang="ain">pate</i> ~ <i lang="ain">pateki</i> with the final consonant lost or
		supported by a vowel <Ref k="dalcorso2024" p="61" paren />,
		<Ref k="chiri1942" p="§125" paren />.
	</p>
	<Ex
		m="neeteh tani taa sineh pateh taa an manu"
		g="and.then now then one only then exist.SG REP"
		tr="And then only one was left."
		note="Of the dog-men, all the others have been slain."
		cite="murasaki2001:text 37"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="kesanto nispa pateki tere okay=ahci"
		g="every.day master only wait exist.PL=PL"
		tr="Every day they wait only for you, sir."
		note="Of the addressee's Sakhalin family; tere plus the plural existential is progressive."
		cite="tangiku2001:Letter 3"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		Two of Chiri's particles need comment. <i lang="ain">poka</i> ‘at least, even’ carries no
		Sakhalin tag in his list, and in our Sakhalin corpus every <i lang="ain">poka</i> is the
		locative postposition ‘over, along’ (<i lang="ain">rih poka ahkas cikah</i> ‘the birds that walk
		the sky’; <Xr ch="postpositions">Chapter 11</Xr>): we conclude that the scalar particle is a
		Hokkaidō item whose work falls in Sakhalin to
		<i lang="ain">kayki</i> and <i lang="ain">ka</i>. Finally, the pure emphasis particles
		<i lang="ain">asi(n)</i> and <i lang="ain">es</i> ~ <i lang="ain">eski</i> belong to the
		literary register of the east-coast tales; Piłsudski judged <i lang="ain">es</i>
		"an expletive, unmeaning…, used, it seems, only to give animation to the tale"
		<Ref k="pilsudski1912" p="167" paren />, and Chiri retained them as Sakhalin emphasis particles <Ref
			k="chiri1942"
			p="§127"
			paren
		/>.
	</p>
</S>

<S t="Word-order variation" id="word-order-variation">
	<p>
		The pragmatically neutral clause is verb-final, with topical material first (<Xr
			ch="clause-structure">Chapter 19</Xr
		>); interrogatives stand in situ (<Xr ch="pronouns-and-demonstratives" s="interrogatives"
			>Chapter 9</Xr
		>), so there is no dedicated preverbal focus slot to fill by movement. The living word-order
		resource of the spoken narrative is instead the postverbal afterthought: a constituent added
		after the sentence-final verb (usually after the reportative <i lang="ain">manu</i>,
		<Xr ch="evidentiality">Chapter 16</Xr>) to clarify a referent the speaker has left
		underspecified. In the Asai Take corpus we count 81 such right-dislocations after
		<i lang="ain">manu</i> alone, ranging from full noun phrases to place adverbs; the commonest is specification
		of the subject of a verb of saying.
	</p>
	<Ex
		m="nah taa yee manu acahcipo"
		g="QUOT then say REP old.woman"
		tr="So she said — the old woman."
		cite="murasaki2001:text 36"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="nah ahkapo ahkapo pisi kayki taa ampene taa mokoro-hci manu tu horokewpo"
		g="QUOT younger.brother younger.brother ask even then utterly then sleep-PL REP two man"
		tr="Even when their little brother asked, they slept right on — the two men."
		note="The dislocated tu horokewpo resolves the plural subject of mokoro-hci."
		cite="murasaki2001:text 54"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="amahka-ha-hcin sineh an manu monimahpoo"
		g="daughter-POSS-PL one exist.SG REP girl"
		tr="They had one daughter — a girl, that is."
		note="The preceding sentence is sine horokewpo macihi tura okayahci manu ‘a man lived with his wife’; the postposed bare noun glosses the kin term, with the lengthened final vowel of the afterthought contour."
		cite="murasaki2001:text 28"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		We analyse these as true afterthoughts rather than a focus position: the dislocated phrase is
		always discourse-old or inferable, never the answer to a question, and the clause is already
		complete without it. The same looseness lets a frame adverbial trail the verb (<i lang="ain"
			>sine cih yan manu, atuy kaawa</i
		>
		‘a boat came ashore — from the sea’, text 28). Fronting, by contrast, is the normal home of
		<i lang="ain">neampe</i>-marked topics (§24.1), which precede everything else in their clause.
	</p>
</S>

<S t="Presentational constructions" id="presentational">
	<p>
		New referents enter the discourse through an existential presentation: the numeral
		<A w="sine" gl="one, a certain" /> plus noun plus <i lang="ain">an</i> ‘exist.SG’ (or
		<i lang="ain">okay</i> ‘exist.PL’; <Xr ch="copula-and-existence">Chapter 18</Xr>). Chiri
		observed that <i lang="ain">sine</i> here does the work of an indefinite article and the
		anaphoric demonstratives that of the definite — his model sequence is
		<i lang="ain">sine aynu an. ne aynu ene itaki</i> ‘a man was. that man spoke thus’
		<Ref k="chiri1942" p="§100, §103" paren />. Forty of the fifty-four tales in the Asai Take
		corpus open with exactly this formula, usually anchored to the stock village name
		<i lang="ain">Sannupis</i>:
	</p>
	<Ex
		m="sannupis-ta sine horokewpo an manu"
		g="Sannupis-LOC one man exist.SG REP"
		tr="In Sannupis there lived a man."
		note="The tale-opening formula; the next sentences give his habitual life with koh ‘whenever’ clauses, and sine too ‘one day’ then launches the plot."
		cite="murasaki2001:text 19"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		A variant places the numeral after the noun in its nominalized form
		<i lang="ain">sineh</i> (<Xr ch="numerals">Chapter 10</Xr>):
		<i lang="ain">ahci sineh an manu</i>
		‘there was an old woman’ (text 1), and example (14) above. Inside a running narrative the presentation
		is typically framed by a
		<i lang="ain">-hi neampe</i> clause topic, as in (6): the protagonist's movement sets the scene,
		the existential introduces the new participant, and the anaphorics
		<i lang="ain">neya</i> and <i lang="ain">nean</i> ‘the aforementioned’ then track it for the
		rest of the tale (<Xr ch="pronouns-and-demonstratives" s="anaphoric">Chapter 9</Xr>).
	</p>
	<Ex
		m="otakaa-ta san-ihi neampe taa sine cih yan manu"
		g="beach-LOC go.down.SG-NMLZ TOP then one boat come.ashore REP"
		tr="When she went down to the beach, a boat came ashore."
		note="The girl is the established topic; the boat is presented with sine and at once becomes the topic of the next clause."
		cite="murasaki2001:text 28"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
</S>

<S t="Discourse particles in dialogue" id="discourse-particles">
	<p>
		Quoted dialogue and the conversational record show a compact system of sentence-final particles.
		Directives are graded by three request particles, in descending politeness
		<i lang="ain">kanne</i>, <i lang="ain">waa</i>, <i lang="ain">koh</i>
		<Ref k="murasaki2025" p="38" paren />: <i lang="ain">kanne</i> makes a courteous request (<i
			lang="ain">hanka cis kanne</i
		>
		‘don't cry, dear’, text 3),
		<i lang="ain">waa</i> a plain command, and <i lang="ain">koh</i> — Furukawa's
		<i lang="ain">kah</i> ‘rough command, used to one's own children’
		<Ref k="furukawa1967" p="107" paren /> — a curt one (<i lang="ain">tah ampa koh!</i> ‘take
		this!’). Plural addressees take the imperative suffix <i lang="ain">-yan</i>, combinable with
		<i lang="ain">kanne</i>:
	</p>
	<Ex
		m="pirikano paye-yan kanne"
		g="well go.PL-IMP.PL FIN"
		tr="Go carefully, all of you — do."
		cite="murasaki2025:38"
		dial="WS"
	/>
	<Ex
		m="ayroo ahun-u waa teeta ahun-u waa"
		g="come.on enter-EP FIN here enter-EP FIN"
		tr="Come now, come in! Come in here!"
		note="A woman takes in the weeping girl; -u is the epenthetic vowel before the final particle, and ayroo the inviting interjection."
		cite="murasaki2001:text 3"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The same <i lang="ain">wa</i> closes requests in the letters —
		<i lang="ain">hanka e=ranpotara wa</i>
		‘do not worry’ <Ref k="tangiku2001" p="Letter 3" paren /> — so the particle belonged to both coasts
		and to written as well as spoken usage. Invitations have polite <i lang="ain">anaa</i> ‘let us…’
		and familiar <i lang="ain">roo</i>
		(<i lang="ain">keh, paye-an roo</i> ‘come on, let's go!’); assertions directed at the hearer
		take <i lang="ain">naa</i> ‘you'll see’ and <i lang="ain">wanaa</i> ‘see, just as I said’; and
		an indignant refusal ends in <i lang="ain">nanko</i>
		<Ref k="furukawa1967" p="107–108" paren />:
	</p>
	<Ex
		m="nah e-kii anah ommo orowa an-ko-caaranke naa"
		g="thus 2SG.A-do if mother by INDEF.A-APPL-scold FIN"
		tr="If you do that, you'll get a scolding from your mother, mark my words."
		note="The indefinite-person verb with an orowa agent is the Sakhalin passive (Chapter 14); naa stakes the speaker's confidence on the prediction."
		cite="furukawa1967:108"
		dial="WS"
		place="Rayciska"
	/>
	<p>
		The remaining final particle, <i lang="ain">hVV</i> (<i lang="ain">hii</i>,
		<i lang="ain">hee</i>…, its vowel copied from the verb), strengthens statements and questions
		alike, the two distinguished only by intonation (<Ref k="murasaki2025" p="19" />;
		<Xr ch="pronouns-and-demonstratives" s="interrogatives">Chapter 9</Xr>); Chiri's bare question
		particle <i lang="ain">he</i> belongs to the same interjectional class
		<Ref k="chiri1942" p="§129" paren />. Dialogue turns themselves are managed by interjections,
		above all <A w="iineahsuy" gl="hey, say" />, which opens an appeal to the hearer many times over
		in the Asai Take corpus — example (2) — and shades from ‘hey!’ into ‘now listen, the fact is…’.
		Together with the topic chains of §24.1 and the presentational formula of §24.4, these little
		words are what give the spoken Sakhalin sentence its characteristic shape: frame first, verb
		last, and the speaker's stance hung on the end.
	</p>
</S>

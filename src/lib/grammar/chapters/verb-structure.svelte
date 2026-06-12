<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	The verb is the largest and most elaborated word class of Sakhalin Ainu
	(<Xr ch="word-classes">Chapter 6</Xr>) and the only obligatory constituent of the clause:
	<i lang="ain">oman</i> ‘he went’, <i lang="ain">pirika</i> ‘it is good’ are complete
	sentences <Ref k="chiri1942" p="§21–22" paren />. A finite verb indexes its core arguments
	(<Xr ch="person-and-alignment">Chapter 13</Xr>), registers their number partly in its own
	stem and partly by a suffix, and changes its valency only by overt derivation
	(<Xr ch="valency">Chapter 14</Xr>); it does not inflect for tense, temporal and modal
	meaning being carried by following auxiliaries and particles
	<Ref k="chiri1942" p="§26" paren /> (<Xr ch="tense-aspect-mood">Chapter 15</Xr>). This
	chapter describes the shape of the verbal word and the lexical classification that the
	rest of the verbal grammar presupposes: the template, the transitivity classes, verbal
	number, stem classes, and the light verb <A w="ki" gl="do" />.
</p>
<p>
	The descriptive foundation is <Ref k="chiri1942" />, whose Sakhalin-centred grammar
	classifies verbs by the arguments they require (his <em>complete</em> and
	<em>incomplete</em> predicates, §§27–33) and by their number behaviour (§§34–36);
	<Ref k="murasaki1979" /> covers the west-coast Rayciska variety, <Ref k="tangiku1998" />
	the morphology of stems in <i lang="ain">-rV</i>, and <Ref k="dalcorso2024" /> the
	east-coast verb as recorded by Piłsudski. A note on citation: verbs are cited in this
	grammar in their bare third-person form, which is also the stem — <A w="oman" gl="go" />,
	<A w="nukara" gl="see" /> — since the language has no infinitive; the bare form serves
	both as the third person and as the pure lexical concept
	<Ref k="chiri1942" p="§22" paren />.
</p>

<S t="The verbal word and its template" id="template">
	<p>
		The maximal verbal word of Sakhalin Ainu has the structure in (i): person prefixes or
		proclitics; one or more valency-changing prefixes (reciprocal <i lang="ain">u-</i>,
		reflexive <i lang="ain">yay-</i>/<i lang="ain">si-</i>, antipassive
		<i lang="ain">i-</i>, applicative <i lang="ain">e-</i>/<i lang="ain">ko-</i>/<i
		lang="ain">o-</i>); an incorporated noun; the root; valency-changing suffixes
		(causative <i lang="ain">-te</i>/<i lang="ain">-re</i>, <i lang="ain">-ke</i>,
		<i lang="ain">-ka</i>); the desiderative <i lang="ain">rusuy</i>; the person suffixes
		<i lang="ain">-an</i>, <i lang="ain">-as</i>, <i lang="ain">-yan</i>; and, outside them,
		the plural clitic <i lang="ain">=hci</i> (<Xr ch="number">Chapter 8</Xr>). Chiri demonstrated the prefixal
		expansion with built-up forms like <i lang="ain">u-ko-itak</i> ‘talk to each other’
		and <i lang="ain">usa-oruspe a-e-u-ko-itak</i> ‘we talk to each other about various
		news’, where the applicative <i lang="ain">ko-</i> licenses the reciprocal and
		<i lang="ain">e-</i> introduces the topic of conversation
		<Ref k="chiri1942" p="§25" paren />; the polysynthesis that made Ainu famous in
		typology is this machine at full stretch, though he is careful to note that such
		piling-up is rare outside epic diction <Ref k="chiri1942" p="§25" paren />.
	</p>
	<p>
		The suffixal field is rigidly ordered. Causative suffixes attach directly to the stem,
		before the echo vowel of <i lang="ain">-rV</i> stems is supplied
		(<i lang="ain">kor-te</i> → <i lang="ain">konte</i> ‘give’;
		<Xr ch="morphophonology" s="r-alternations">Chapter 5</Xr>); the desiderative
		<i lang="ain">rusuy</i> likewise reaches the bare stem
		(<i lang="ain">an-kon rusuy</i> ‘I want to have’), and the plural suffix
		<i lang="ain">-(a)hci</i> attaches outside it. Tangiku concludes from this ordering
		that <i lang="ain">rusuy</i> is a suffix rather than a free auxiliary in Sakhalin
		Ainu <Ref k="tangiku1998" p="231–232" paren />:
	</p>
	<Ex
		m="tura esine kotan ohta kayki reekoh an-kon rusuy-ahci yahka"
		g="with.it same village in even very INDEF.A-have DES-PL although"
		tr="Even from that same village many wanted to have her in marriage, but…"
		note="The stem kor- loses its echo vowel before rusuy (kon rusuy), and the plural -ahci follows rusuy: stem–causative–rusuy–plural is the fixed order of the suffixal field."
		cite="murasaki1976; tangiku1998:227"
		dial="WS"
		place="Rayciska"
	/>
	<p>
		Beyond the word so defined comes a short chain of postverbal auxiliaries and particles,
		unmarked for person, which carry aspect, modality and evidentiality. Table 1 gives the
		commonest ones with corpus attestations; their semantics is the business of
		<Xr ch="tense-aspect-mood">Chapter 15</Xr> and <Xr ch="evidentiality">Chapter 16</Xr>.
	</p>
	<table>
		<caption>Postverbal auxiliaries and particles (overview)</caption>
		<thead>
			<tr><th>form</th><th>meaning</th><th>corpus example</th><th>source</th></tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain">rusuy</i></td>
				<td>desiderative</td>
				<td><i lang="ain">an-kon rusuy-ahci</i> ‘they wanted to have’</td>
				<td><Ref k="tangiku1998" p="227" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">rayki</i></td>
				<td>‘long to’</td>
				<td><i lang="ain">mokon rayki</i> ‘be dying to sleep’</td>
				<td><Ref k="hattori1964" paren />; <Ref k="tangiku1998" p="228" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">kusu kara</i></td>
				<td>‘be about to’</td>
				<td><i lang="ain">mokoro kusu kara</i> ‘was about to sleep’</td>
				<td><Ref k="murasaki2001" p="text 46" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">kusu an</i></td>
				<td>progressive</td>
				<td><i lang="ain">hecirehci kusu an</i> ‘were dancing’</td>
				<td><Ref k="murasaki2001" p="text 46" paren />; <Ref k="dalcorso2024" p="72" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">kusu iki</i></td>
				<td>‘be going to’</td>
				<td><i lang="ain">rayki kusu iki</i> ‘will catch’</td>
				<td><Ref k="tangiku2001" p="Letter 1" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">hemaka</i></td>
				<td>completive ‘finish’</td>
				<td><i lang="ain">ray hemaka</i> ‘died (for good)’</td>
				<td><Ref k="murasaki2001" p="text 27" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">manu(u)</i></td>
				<td>reportative</td>
				<td><i lang="ain">san manu</i> ‘went down, they say’</td>
				<td><Ref k="murasaki2001" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">nanko(ro)</i></td>
				<td>‘probably; surely’</td>
				<td><i lang="ain">an-ki nanko</i> ‘we shall do it’</td>
				<td><Ref k="dobrotvorsky1875" paren />; <Ref k="sakaguchi2021" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">yan</i></td>
				<td>plural imperative</td>
				<td><i lang="ain">toh roski yan</i> ‘set up the bamboo!’</td>
				<td><Ref k="murasaki1979" p="30" paren />; <Ref k="murasaki2001" p="text 8" paren /></td>
			</tr>
		</tbody>
	</table>
	<p>
		The auxiliaries are person-blind: in the corpus only the plural
		<i lang="ain">-(a)hci</i> ever intervenes onto them (<i lang="ain">rusuy-ahci</i>
		above), and person markers stay on the lexical verb or on a supporting
		<A w="ki" gl="do" /> (§12.5). Where the literature is silent on
		<i lang="ain">kusu kara</i> and <i lang="ain">hemaka</i>, the statement above is our
		generalisation from Asai Take's tales, where both are frequent and never
		person-marked.
	</p>
</S>

<S t="Transitivity" id="transitivity">
	<p>
		Every verb stem of Sakhalin Ainu is lexically specified for its valency. Chiri's
		classification divides predicates into <em>complete</em> (requiring no complement:
		intransitives, including all property verbs) and <em>incomplete</em> (requiring one:
		transitives, plus the copula <A w="ne" />, the single underived verb that takes a
		complement rather than an object) <Ref k="chiri1942" p="§§27, 32" paren />. The
		diagnostic is morphological, and it is the pivot of the person system: a first-person
		or indefinite subject is suffixed to a complete verb but prefixed to an incomplete
		one — <i lang="ain">ahun-an</i> ‘I went in’ against <i lang="ain">an-ahunke</i> ‘I put
		it in’ <Ref k="chiri1942" p="§28" paren /> (<Xr ch="person-and-alignment">Chapter
		13</Xr>). Homophonous stems are kept apart by exactly this test
		<Ref k="chiri1942" p="§29" paren />:
	</p>
	<table>
		<caption>Homophonous intransitive–transitive pairs (Chiri 1942: §29)</caption>
		<thead>
			<tr><th>stem</th><th>intransitive</th><th>transitive</th></tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain">ma</i></td>
				<td><i lang="ain">ma-an</i> ‘I swam’</td>
				<td><i lang="ain">an-ma</i> ‘I roasted it’</td>
			</tr>
			<tr>
				<td><i lang="ain">kay</i></td>
				<td><i lang="ain">kay-an</i> ‘I broke (in two)’</td>
				<td><i lang="ain">an-kay</i> ‘I carried it on my back’</td>
			</tr>
		</tbody>
	</table>
	<p>
		There is no lability. A stem never alternates between transitive and intransitive use
		without overt marking; valency is adjusted only by the derivational morphology of
		<Xr ch="valency">Chapter 14</Xr> — compare <A w="asin" gl="go out" /> with
		<A w="asinke" gl="take out" />, <A w="ahun" gl="enter" /> with
		<A w="ahunke" gl="put in" /> <Ref k="chiri1942" p="§§33, 55" paren />. Where English
		uses one verb in ‘the door opened’ and ‘I opened the door’, Sakhalin Ainu pairs
		<i lang="ain">makke</i> with <i lang="ain">maka</i>, both derived from the bare root
		<i lang="ain">mak-</i> <Ref k="chiri1942" p="§55" paren /> (§12.4). Even lexical
		semantics that straddles the divide is split over two stems: ‘think’ is complete
		<A w="yaynu" /> with quoted thought but incomplete <A w="ramu" /> with a complement
		clause, as ‘say’ is <A w="itah" /> against <A w="ye" /> and ‘eat’ is <A w="ipe" />
		against <A w="ee" gl="eat" /> <Ref k="chiri1942" p="§30" paren />. Chiri knew only
		two verbs used in both classes, <A w="roski" gl="stand (pl)" /> and
		<A w="kari" gl="turn" /> <Ref k="chiri1942" p="§31" paren />.
	</p>
	<S t="Ditransitives">
		<p>
			Three-place predicates are derived, not basic: the recipient verbs are causatives
			of possession and ingestion. <A w="konte" gl="give" /> is
			<i lang="ain">kor-te</i> ‘cause to have’, and Chiri insists that in
			<i lang="ain">tampe huci ku-konte</i> ‘I give this to grandmother’ (his §68 example,
			cited in pan-Ainu shape as <i lang="ain">ku-kore</i>) the grandmother
			is the causee-object, not a dative <Ref k="chiri1942" p="§68" paren />. The
			recipient is the argument the verb indexes; the theme stays a bare unindexed
			noun:
		</p>
		<Ex
			m="sine kotan koro wa i=konte"
			g="one place have and INDEF.O=give"
			orig="сіне котан корова иконде"
			origLang="ain-Cyrl"
			tr="Grant me one fishing ground to hold."
			note="The recipient (‘me’) is indexed by i=; kotan ‘village, place’ here denotes a fishing station."
			cite="tangiku2001:Letter 1"
			dial="ES"
			place="Otasan (Sentoku Tarōji)"
		/>
		<Ex
			m="suke-hci ike taa tani tah horokeypo ee-re tura e-hci"
			g="cook-PL and EMPH now this man eat-CAUS together.with eat-PL"
			tr="They cooked them, served them to the man, and ate together with him."
			note="eere ‘feed’, from ee ‘eat’ with the causative -re, takes the fed person as its indexed object."
			cite="murasaki2001:text 5"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
	</S>
	<S t="Weather and ambient verbs" id="weather">
		<p>
			At the bottom of the valency scale stand zero-valent predicates of weather and
			ambience. The productive type incorporates <A w="sir" gl="ambient scene" /> —
			one of Chiri's desemanticised ‘formal nouns’ <Ref k="chiri1942" p="§78" paren /> —
			into a property verb: <i lang="ain">siripirika</i> ‘the weather is fine’,
			<i lang="ain">siriwen</i> ‘the weather is bad’, with the regular Sakhalin echo
			vowel on <i lang="ain">siri-</i>. In his survey of Ainu noun incorporation Satō
			counts such natural-force subject incorporation as the second commonest type
			after object incorporation (Satō 2022: ch. 16, in
			<Ref k="bugaeva2022" paren />), and Dal Corso identifies east-coast
			<i lang="ain">sistono</i> ‘day breaks’ as a zero-valency verb of natural
			conditions <Ref k="dalcorso2024" p="73" paren />.
		</p>
		<Ex
			m="tanto ampene siri-pirika"
			g="today completely weather-be.good"
			tr="Today the weather is thoroughly fine."
			cite="murasaki2025"
			dial="WS"
		/>
		<p>
			Beside the incorporated type stands an analytic pattern with a weather noun as
			ordinary subject of a motion or property verb: <i lang="ain">ahto ran</i> ‘rain
			falls’, <i lang="ain">reera yuhke</i> ‘the wind is strong’
			(<Xr ch="word-classes">Chapter 6</Xr>), <i lang="ain">onuman oman</i> ‘evening
			comes’. The two strategies coexist in the same texts; we find no meaning
			difference beyond the referentiality of the weather noun, which in the analytic
			type can be modified and quantified (<i lang="ain">poro ahto ran</i> ‘a great
			rain fell’).
		</p>
		<Ex
			m="onuman oman teh tani taa reekoh ahto ran manu"
			g="evening go.SG and now EMPH very rain descend.SG REP"
			tr="Evening came on, and it rained very hard."
			cite="murasaki2001:text 24"
			dial="WS"
			place="Odasu (Asai Take)"
		/>
	</S>
</S>

<S t="Verbal number" id="verbal-number">
	<p>
		A closed set of verbs distinguishes singular and plural stems. Number here is the
		number of the event's absolutive participant — the subject of an intransitive, the
		object of a transitive — and, more exactly, of the event itself: one entering against
		many enterings <Ref k="chiri1942" p="§§34–36" paren />,
		<Ref k="sakaguchi2024" p="124" paren />. Three formal types occur in Sakhalin
		<Ref k="chiri1942" p="§35" paren />, <Ref k="sakaguchi2024" p="122–123" paren />:
		suppletion (Table 3); the <i lang="ain">-n</i>/<i lang="ain">-p</i> alternation of
		seven motion verbs (Table 4); and a residual class with plural
		<i lang="ain">-pa</i> (<i lang="ain">tuye</i> ~ <i lang="ain">tuypa</i> ‘cut’,
		<i lang="ain">nasa</i> ~ <i lang="ain">naspa</i> ‘split’,
		<Ref k="murasaki1979" p="42" paren />), which is far less productive than in Hokkaidō
		— most Hokkaidō <i lang="ain">-pa</i> plurals have no Sakhalin counterpart, the
		plural suffix <i lang="ain">-hci</i> doing their work
		<Ref k="tangiku2022" paren />, <Ref k="sakaguchi2024" p="123" paren />.
	</p>
	<table>
		<caption>Suppletive stem pairs attested in Sakhalin Ainu</caption>
		<thead>
			<tr><th>SG</th><th>PL</th><th>meaning</th><th>attestation</th></tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain">an</i></td>
				<td><i lang="ain">okay</i></td>
				<td>‘exist, be at’</td>
				<td><Ref k="chiri1942" p="§35" paren />; <Ref k="sakaguchi2021" paren />; <Ref k="murasaki2001" p="text 4" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">oman</i></td>
				<td><i lang="ain">paye(h)</i></td>
				<td>‘go’</td>
				<td><Ref k="chiri1942" p="§35" paren />; <Ref k="murasaki2001" p="text 51" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">eh</i> (<i lang="ain">ek-</i>)</td>
				<td><i lang="ain">ariki(h)</i></td>
				<td>‘come’</td>
				<td><Ref k="sakaguchi2021" paren />; <Ref k="tangiku2001" p="Letter 3" paren />; <Ref k="sakaguchi2024" p="122" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">as</i>, <i lang="ain">hotari</i></td>
				<td><i lang="ain">roski</i></td>
				<td>‘stand (up)’</td>
				<td><Ref k="chiri1942" p="§§31, 35" paren />; <Ref k="sakaguchi2024" p="122" paren />; <Ref k="murasaki2001" p="text 8" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">numa</i></td>
				<td><i lang="ain">payke</i></td>
				<td>‘get up’</td>
				<td><Ref k="sakaguchi2024" p="122" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">uh</i> (<i lang="ain">uk-</i>)</td>
				<td><i lang="ain">uyna</i></td>
				<td>‘take’ (object number)</td>
				<td><Ref k="chiri1942" p="§36" paren />; <Ref k="tamura2003" paren />; <Ref k="murasaki2001" p="text 51" paren /></td>
			</tr>
		</tbody>
	</table>
	<p>
		Hokkaidō's pair <i lang="ain">rayke</i> ~ <i lang="ain">ronnu</i> ‘kill’ does not
		belong here: in Sakhalin <i lang="ain">rayki</i> ~ <i lang="ain">rayke</i> are
		regional variants, <i lang="ain">ronnu</i> is recorded only as a stylistic
		alternative, and the Sakhalin prose corpus has no number opposition between them
		<Ref k="hattori1964" p="29" paren />, <Ref k="sakaguchi2024" p="123" paren />. In the
		corpus we likewise find no token of <i lang="ain">ronnu</i>.
	</p>
	<table>
		<caption>The n/p motion verbs (Chiri 1942: §35; corpus forms)</caption>
		<thead>
			<tr><th>SG</th><th>PL stem</th><th>meaning</th><th>corpus</th></tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain">ahun</i></td>
				<td><i lang="ain">ahup-</i></td>
				<td>‘go in’</td>
				<td><i lang="ain">ahup-ahci</i> <Ref k="murasaki2001" p="text 5" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">asin</i></td>
				<td><i lang="ain">asip-</i></td>
				<td>‘go out’</td>
				<td><Ref k="chiri1942" p="§35" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">san</i></td>
				<td><i lang="ain">sap-</i></td>
				<td>‘go down’</td>
				<td><i lang="ain">sap-ahci</i> <Ref k="murasaki2001" p="text 19" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">makan</i></td>
				<td><i lang="ain">makap-</i></td>
				<td>‘go up(hill)’</td>
				<td><i lang="ain">makap-ahci</i> <Ref k="murasaki2001" p="text 37" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">rikin</i></td>
				<td><i lang="ain">rikip-</i></td>
				<td>‘climb’</td>
				<td><i lang="ain">rikip-ahci</i> <Ref k="murasaki2001" p="text 52" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">yan</i></td>
				<td><i lang="ain">yap-</i></td>
				<td>‘go ashore’</td>
				<td><i lang="ain">yah</i>, <i lang="ain">yap-an</i> <Ref k="tangiku1998" p="223" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain">ran</i></td>
				<td><i lang="ain">rap-</i></td>
				<td>‘come down’</td>
				<td><Ref k="chiri1942" p="§35" paren /></td>
			</tr>
		</tbody>
	</table>
	<p>
		The bare plural stems of Table 4 end in a stop and therefore surface with the coda
		<i lang="ain">h</i> when nothing follows (<i lang="ain">yah</i> ‘they went ashore’);
		before vowel-initial suffixes the stop reappears (<i lang="ain">yap-an</i>,
		<i lang="ain">makap-ahci</i>; <Xr ch="morphophonology" s="coda-alternations">Chapter
		5</Xr>). In the corpus the bare plurals are rare: they are almost always clothed in
		<i lang="ain">-ahci</i> or a person suffix, an observation we owe to our own counts.
	</p>
	<Ex
		m="ohorono okay=an renkayne tane tan kotan ta eh"
		g="long.time exist.PL=INDEF.S because now this village in come.SG"
		orig="Охгóроно окáй анъ тренькáйнэ, тáне танъ котàнъ та эх."
		origLang="ain-Cyrl"
		tr="Since I stayed on a long while, now you have come to this village."
		note="The indefinite person, grammatically plural, selects the plural stem okay for a single speaker; the third-person singular addressee takes singular eh."
		cite="dobrotvorsky1875; sakaguchi2021"
		dial="WS"
		place="West coast, central (recorded 1867–1872)"
	/>
	<p>
		Stem number and the plural suffix <i lang="ain">-hci</i> are independent systems that
		stack. <i lang="ain">-hci</i> marks plurality or collectivity of a core participant
		on any verb (<Xr ch="number">Chapter 8</Xr>; for its interaction with person,
		<Xr ch="person-and-alignment" s="number">Chapter 13</Xr>); on a verb with stem
		number it attaches to the appropriate stem, so plural reference is regularly marked
		twice:
	</p>
	<Ex
		m="monimahpo taa reh pis taa utura-hci ahup-ahci manu"
		g="girl EMPH three piece EMPH be.together-PL enter.PL-PL REP"
		tr="The three girls went in together."
		cite="murasaki2001:text 5"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		With transitive members of the set, stem number tracks the object while
		<i lang="ain">-hci</i> or <i lang="ain">yan</i> tracks the subject independently:
		<i lang="ain">uyna-hci</i> ‘they gathered them up’
		<Ref k="murasaki2001" p="text 51" paren />, and in the plural imperative:
	</p>
	<Ex
		m="toh roski-yan toh roski-yan"
		g="bamboo stand.PL-IMP.PL bamboo stand.PL-IMP.PL"
		tr="Set up the bamboo, set up the bamboo!"
		note="roski, the plural of asi ‘stand one thing up’, agrees with the many bamboos; -yan marks the plural addressees."
		cite="murasaki2001:text 8"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Sakaguchi notes a single east-coast singular ‘come’, <i lang="ain">eki</i> ~
		<i lang="ain">iki</i>, used in Yamabe's narrative for plural subjects as well, and
		even combined with the plural suffix (<i lang="ain">eki-hsi</i>)
		<Ref k="sakaguchi2024" p="122" paren /> — a hint that for ‘come’ the suppletion was
		already decaying in the early twentieth century, while the west-coast tales of Asai
		Take keep all the pairs of Tables 3–4 intact.
	</p>
</S>

<S t="Stem classes" id="stem-classes">
	<p>
		For the morphology of the preceding sections, four stem classes need to be
		distinguished. (i) Vowel-final stems: <A w="ee" gl="eat" />, <A w="tura" />,
		<A w="kira" gl="flee" />, <A w="tuuri" gl="stretch" />. They take post-vocalic
		allomorphs throughout: causative <i lang="ain">-re</i>, plural
		<i lang="ain">-hci</i>. (ii) Consonant-final stems whose final stop or
		<i lang="ain">m</i> is neutralised word-finally: <A w="itah" gl="speak" />
		(<i lang="ain">itak-</i>), <A w="ahkas" gl="walk" />, <A w="ahun" />. They take
		<i lang="ain">-te</i>, <i lang="ain">-ahci</i>, and their underlying coda reappears
		before vowels (<i lang="ain">itak-ahci</i>, <i lang="ain">yap-an</i>;
		<Xr ch="morphophonology" s="coda-alternations">Chapter 5</Xr>). (iii) Stems in
		<i lang="ain">-rV</i>, which split in two: underlying <i lang="ain">r</i>-final
		stems (<A w="koro" gl="have" />, <A w="nukara" gl="see" />,
		<A w="mokoro" gl="sleep" />) behave as consonant-final under suffixation —
		<i lang="ain">konte</i>, <i lang="ain">nukante</i>, <i lang="ain">kon rusuy</i>,
		<i lang="ain">nukan rusuy</i> — while true vowel-final ones
		(<i lang="ain">poro</i>, <i lang="ain">kira</i>, <i lang="ain">tuuri</i>) do not;
		this is Tangiku's demonstration, set out with the phonology in
		<Xr ch="morphophonology" s="r-alternations">Chapter 5</Xr>
		<Ref k="tangiku1998" p="225–230" paren />. The same <i lang="ain">r</i> may
		neutralise to coda <i lang="ain">h</i> instead of taking the echo vowel —
		<i lang="ain">utah</i> beside <i lang="ain">utara</i> ‘people’,
		<i lang="ain">mahnekuh</i> ‘woman’ <Ref k="chiri1942" p="§16" paren />,
		<Ref k="dalcorso2024" p="64" paren />. (iv) Bare roots of shape CVC that surface
		only with a derivational suffix: <i lang="ain">mak-</i> ‘open’ in
		<i lang="ain">mak-a</i> (transitive, thematic vowel) and <i lang="ain">mak-ke</i>
		(intransitive), <i lang="ain">per-e</i> ‘tear’ beside <i lang="ain">per-ke</i> ‘be
		torn’ <Ref k="chiri1942" p="§55" paren /> — the seedbed of the valency pairs of
		<Xr ch="valency">Chapter 14</Xr>.
	</p>
	<Ex
		m="otaka ene san inkan rusuy omantene tani"
		g="beach to go.down.SG ANTIP.see DES and.then now"
		tr="He went down to the beach and, wanting to take a look, then…"
		note="inkara ‘look’ (from i-nukar) is an underlying r-stem: inkan rusuy, like kon rusuy."
		cite="tangiku1998:227"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Citation forms in this grammar follow the surface word: <i lang="ain">-rV</i> verbs
		are cited with their echo vowel (<i lang="ain">nukara</i>, not
		<i lang="ain">nukar</i>), coda-neutralised verbs with <i lang="ain">h</i>
		(<i lang="ain">itah</i>, <i lang="ain">yah</i>), and suppletive verbs as a pair with
		the singular first (<i lang="ain">oman</i> ~ <i lang="ain">paye</i>). Where an
		underlying stem matters we add it in parentheses (<i lang="ain">itak-</i>,
		<i lang="ain">kor-</i>).
	</p>
</S>

<S t="The light verb ki" id="light-verbs">
	<p>
		The verb <A w="ki" gl="do" /> — Sakhalin <i lang="ain">kii</i> with the regular
		lengthening of monosyllables, shortened again under suffixation
		(<i lang="ain">ki-hci</i>) <Ref k="tangiku2022" paren /> — is the language's
		all-purpose support verb. Chiri's classic diagnostic for the unity of verbs and
		property words turns on it: focused predicates of either kind are resumed by
		<i lang="ain">ki</i>, as in <i lang="ain">oman ka ki</i> ‘he did go’ and
		<i lang="ain">an ka somo ki</i> ‘he is not there at all’
		<Ref k="chiri1942" p="§21" paren /> (<Xr ch="word-classes" s="property-verbs">Chapter
		6</Xr>); negation with a focus particle takes the same shape,
		<i lang="ain">hosipi kayki han ki</i> ‘he did not so much as return’
		<Ref k="pilsudski1912" p="13" paren />, <Ref k="chiri1942" p="§49" paren />
		(<Xr ch="negation">Chapter 17</Xr>).
	</p>
	<p>
		Beyond focus support, <i lang="ain">ki</i> is a dummy predicate over a lexical verb
		or verbal noun, which keeps its own internal morphology while
		<i lang="ain">ki</i> carries the clausal trappings. Dobrotvorsky's nineteenth-century
		conversations build whole exchanges on it:
	</p>
	<Ex
		m="orowano u-ko-ramu-pirika an-ki nanko"
		g="from.then RECP-APPL-mind-be.good INDEF.A-do probably"
		orig="оровано укораму пирика анъ ки нангò."
		origLang="ain-Cyrl"
		tr="From now on we shall make peace with each other."
		note="The complex predicate ukoramupirika stays bare; person and modality ride on an-ki nanko."
		cite="dobrotvorsky1875; sakaguchi2021"
		dial="WS"
		place="West coast, central (recorded 1867–1872)"
	/>
	<Ex
		m="nuca isam-ike tekoro ramisahse an=ki-hci"
		g="Russian not.exist-and very feel.lonely INDEF.A=do-PL"
		orig="нуця исамике текоро рамісахсе анкіхці"
		origLang="ain-Cyrl"
		tr="With the Russians gone, we are very lonely."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		The construction can even split the person marking of a single semantic predicate:
		in Yamabe's autobiography the object person sits on the lexical verb and the subject
		person on <i lang="ain">kii</i>, the lexical verb serving as the dummy's object
		<Ref k="sakaguchi2024" p="52" paren />:
	</p>
	<Ex
		m="anoka ne anahkayki eciokay eci-ueomante hane an-kii no"
		g="INDEF COP although 2PL 2PL.O-worry.about NEG INDEF.A-do and"
		tr="And I, for my part, (set out) without worrying about you either."
		cite="sakaguchi2024:52, ex. 3-48"
		dial="ES"
		place="Yamabe Yasunosuke"
	/>
	<p>
		Finally, <i lang="ain">ki</i> forms lexicalised activity predicates with a bare noun:
		<i lang="ain">ceh ki</i> ‘fish’ (literally ‘do fish’), <i lang="ain">yuh ki</i>
		‘hunt’ (‘do game’), beside the quotative pro-verb <i lang="ain">nah ki</i> ‘do
		thus’. Asai Take strings them into the formula that opens many of her tales:
	</p>
	<Ex
		m="ceh kii koh ee niina koh kuru ehah taa koh ee nah kii yayne"
		g="fish do whenever eat gather.firewood whenever burn lily.root dig whenever eat QUOT do while"
		tr="She would catch fish and eat, gather firewood and burn it, dig lily roots and eat — and as she lived on so…"
		cite="murasaki2001:text 39"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The same collocations occur univerbated, with the plural suffix treating noun plus
		verb as one word (<i lang="ain">cehki-hci</i> ‘they fished’,
		<Ref k="murasaki2001" p="text 4" paren />) — the bridge into noun incorporation,
		taken up in <Xr ch="valency" s="incorporation">Chapter 14</Xr>. The variant
		<i lang="ain">iki</i> appears in the future periphrasis <i lang="ain">kusu iki</i>
		(Table 1) and as a free variant of <i lang="ain">ki</i> in the east-coast letters
		(<Ref k="tangiku2001" p="Letter 1" paren />).
	</p>
</S>

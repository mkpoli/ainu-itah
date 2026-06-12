<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	Sakhalin Ainu is a head-marking language: a finite verb indexes the person of its core
	arguments by affixes, and independent pronouns (<Xr ch="pronouns-and-demonstratives"
	>Chapter 9</Xr>) appear only for emphasis or contrast. The inventory of person markers is
	small — five overt series and a zero third person — but their combinations in transitive
	verbs are intricate, and they have been a centre of discussion since the earliest
	descriptions. The foundations are <Ref k="chiri1942" p="§37" />, <Ref k="hattori1961" /> and
	<Ref k="murasaki1979" p="49–51" /> for the west-coast Rayciska variety, and
	<Ref k="sato1985" /> for the east coast; <Ref k="sakaguchi2024" /> gives the fullest
	philological account of the east-coast paradigm, and <Ref k="dalcorso2025align" /> the most
	recent analysis of its alignment and history. This chapter follows the same order: the basic
	paradigm, the indefinite set, object marking, the first–second person interaction forms, and
	the alignment they jointly define, with short sections on nouns and on verbal number.
</p>

<p>
	A word on terminology. Beside first and second person, Sakhalin Ainu has the set
	<A w="an">-an</A> / <i lang="ain">an-</i> / <i lang="ain">i-</i>, called the
	<em>fourth person</em> in Japanese-language scholarship, <em>indefinite person</em> since
	Tamura's work on Saru, <em>inclusive</em> by Bugaeva, and <em>participant referentiality
	mismatch marker</em> by Dal Corso <Ref k="dalcorso2025align" p="196–200" paren />. We gloss it
	INDEF throughout. Following <Ref k="sato1985" /> and <Ref k="sakaguchi2024" p="26–28" />, it
	is also convenient to speak of three first-person <em>series</em> named after their
	transitive subject form: the KU-series (<i lang="ain">ku-</i>, pronoun
	<A w="kuani" gl="I" />), the CI-series (<i lang="ain">ci-</i>/<i lang="ain">-as</i>, pronoun
	<A w="ciokay" gl="we" /> ~ <i lang="ain">cookay</i>), and the AN-series (the indefinite set,
	pronoun <A w="anoka" gl="I, we" /> ~ <i lang="ain">anokay</i>).
</p>

<S t="The person-marking paradigm" id="paradigm">
	<p>
		Table 1 sets out the person markers of the Sakhalin verb. It combines
		<Ref k="chiri1942" p="§37" />, <Ref k="murasaki1979" p="49–50" />,
		<Ref k="sato1985" />, <Ref k="sakaguchi2024" p="29–34" /> and
		<Ref k="dalcorso2025align" p="200–201" />; where the coasts diverge, the western form is
		marked W and the eastern E.
	</p>
	<table>
		<caption>Person markers on the Sakhalin Ainu verb</caption>
		<thead>
			<tr><th></th><th>S</th><th>A</th><th>O</th></tr>
		</thead>
		<tbody>
			<tr>
				<th>1SG</th>
				<td><i lang="ain">ku-</i></td>
				<td><i lang="ain">ku-</i></td>
				<td><i lang="ain">en-</i> (W) ~ <i lang="ain">in-</i> (E)</td>
			</tr>
			<tr>
				<th>1PL.EXCL</th>
				<td><i lang="ain">-as</i></td>
				<td><i lang="ain">ci-</i></td>
				<td><i lang="ain">un-</i> (W, rare) ~ <i lang="ain">in-</i> (E)</td>
			</tr>
			<tr>
				<th>2SG</th>
				<td><i lang="ain">e-</i></td>
				<td><i lang="ain">e-</i></td>
				<td><i lang="ain">e-</i></td>
			</tr>
			<tr>
				<th>2PL</th>
				<td><i lang="ain">eci-</i></td>
				<td><i lang="ain">eci-</i></td>
				<td><i lang="ain">eci-</i></td>
			</tr>
			<tr>
				<th>3</th>
				<td>—</td>
				<td>—</td>
				<td>—</td>
			</tr>
			<tr>
				<th>INDEF</th>
				<td><i lang="ain">-an</i></td>
				<td><i lang="ain">an-</i></td>
				<td><i lang="ain">i-</i></td>
			</tr>
		</tbody>
	</table>
	<p>
		First person singular <i lang="ain">ku-</i> prefixes to intransitive and transitive verbs
		alike. It is the everyday first person of conversation and of quoted dialogue in Asai
		Take's tales:
	</p>
	<Ex
		m="hemata ku-kara-ha kuani neyahka ku-inkara kusu otakaa-ta ku-san"
		g="what 1SG.A-do-POSS 1SG also 1SG.S-look PURP beach-LOC 1SG.S-go.down.SG"
		tr="I too came down to the beach to see what I should do."
		cite="murasaki2001:text 30"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Second person singular <i lang="ain">e-</i> and plural <i lang="ain">eci-</i> are invariant
		for role; Chiri records <i lang="ain">esi-</i> for 2PL at Tarantomari
		<Ref k="chiri1942" p="§37" paren />. Sentoku Tarōji (<span lang="ja">千徳太郎治</span>)
		writes <i lang="ain">e=</i> to Piłsudski:
	</p>
	<Ex
		m="e=koro kotan okta e=oman kusu nah e=ye renkayne"
		g="2SG.A=have village to 2SG.S=go.SG PURP QUOT 2SG.A=say because"
		tr="because you said that you would go back to your own village"
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		Third person is unmarked in all roles and numbers. With Chiri we take the absence of an
		affix on a finite verb to be itself interpretable — a zero exponent read as third person
		wherever no overt marker appears <Ref k="chiri1942" p="§23, §37" paren />; plurality of a
		third person argument may be signalled by <i lang="ain">-hci</i> (§13.7).
	</p>
	<p>
		The CI-series splits by transitivity: <i lang="ain">-as</i> suffixes to intransitives,
		<i lang="ain">ci-</i> prefixes to transitives and the copula. It is productive on the east
		coast, while in Rayciska it is marginal — Hattori's consultants knew
		<i lang="ain">cioka</i> as the speech of elders or of the southern west coast, and
		Murasaki's Rayciska corpus contains a single possessive token
		<Ref k="hattori1961" p="5" />, <Ref k="sakaguchi2024" p="27" paren />. In the east-coast
		folklore the CI-series regularly refers to a single speaker: it is grammatically plural
		(it selects plural verb stems) but semantically ‘I’ <Ref k="sato1985" paren />,
		<Ref k="sakaguchi2024" p="27" paren />. We keep the conventional gloss 1PL.EXCL while
		flagging this mismatch wherever it matters.
	</p>
	<Ex
		m="nahte asip-as cikin paye-as siri-hi eci-nukan-te"
		g="then go.out.PL-1PL.EXCL.S if go.PL-1PL.EXCL.S appearance-POSS 1PL.EXCL.A>2SG.O-see-CAUS"
		tr="Then, when I go out, I will show you how I go."
		note="The she-bear speaks of herself alone; the CI-series forms nonetheless take the plural stems asip and paye, and the 1→2 interaction surfaces as the portmanteau eci- (§13.4)."
		cite="pilsudski1912:text 13, ll. 24–25; sakaguchi2024:ex. 3-1"
		dial="ES"
	/>
	<Ex
		m="naa iani e=an manuy ci=nu renkayne"
		g="still 2SG 2SG.S=exist.SG REP 1PL.EXCL.A=hear because"
		tr="because we heard that you were still there"
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		The series do not mix freely. <Ref k="sato1985" /> formulated a <em>personal agreement
		rule</em>: within one clause (pronoun included), markers of the AN-series do not co-occur
		with markers of the KU- or CI-series, while KU- and CI-forms do co-occur with each other —
		Dobrotvorsky already records <i lang="ain">cookay ku-eraman</i> ‘I understand’ with the
		CI-pronoun and the KU-prefix <Ref k="dobrotvorsky1875" p="150" paren />,
		<Ref k="sakaguchi2024" p="30" paren />. The rule is what justifies sorting the markers into
		series in the first place, and §13.4 puts it to work.
	</p>
</S>

<S t="The indefinite person" id="indefinite">
	<p>
		The set <i lang="ain">-an</i> (S), <i lang="ain">an-</i> (A), <i lang="ain">i-</i> (O),
		with the pronoun <A w="anoka" gl="I, we" /> ~ <i lang="ain">anokay</i>, is the workhorse of
		Sakhalin first-person reference. Its attested functions are: a general first person plural
		‘we’, with no exclusive–inclusive opposition of the Hokkaidō colloquial kind; an ordinary
		first person singular ‘I’; an indefinite or unspecified agent; and the agent slot of the
		impersonal passive construction (<Ref k="chiri1942" p="§37" />;
		<Ref k="sakaguchi2024" p="27–28" />; <Ref k="dalcorso2025align" p="196–197" />). The
		honorific second-person use of Hokkaidō dialects is unattested in Sakhalin
		<Ref k="dalcorso2025align" p="196" paren />. Chiri observed that Sakhalin uses one and the
		same paradigm in literary and colloquial registers, essentially the epic paradigm of
		Hokkaidō <Ref k="chiri1942" p="§37" paren />.
	</p>
	<p>
		The indefinite is grammatically plural regardless of its reference: where a verb has
		suppletive number stems, the AN-series selects the plural stem even for a single referent
		(§13.7). In Sentoku's letters it is the unmarked way of saying both ‘I’ and ‘we’:
	</p>
	<Ex
		m="anokay aynu utara ramma ka pirka ponno ponno cep ukoyki an=e-hci"
		g="INDEF Ainu PL always too be.well little little fish catch INDEF.A=eat-PL"
		tr="We Ainu are well as ever; we catch a little fish and eat it."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		In the same letter Sentoku writes <A w="omante">an=omante</A> ‘I send (it)’ of himself
		alone and addresses Piłsudski as <i lang="ain">an=koro nispa</i> ‘my master’. The
		indefinite is also the classic narrative first person of folklore: the protagonist of a
		tale, often a god or hero, is cross-referenced by AN-forms throughout, a logophoric device
		that keeps the narrator formally distinct from the character whose words the whole tale
		constitutes <Ref k="dalcorso2025align" p="198–199" paren />. Piłsudski himself glossed such
		forms simply as first person singular in his notes (e.g. <i lang="ain">sapan</i> ‘I went
		down’, <Ref k="pilsudski1912" p="37–39" paren />):
	</p>
	<Ex
		m="an-koro nay-he or-ne kimoyki kusu makap-an"
		g="INDEF.A-have river-POSS place-to hunt PURP go.uphill.PL-INDEF.S"
		tr="I went up along the river I own to hunt."
		note="The hero of the tale narrates his own deeds in the indefinite person."
		cite="pilsudski1912:133; dalcorso2025align:196"
		dial="ES"
	/>
	<Ex
		m="tan kotan ohta utasa-an kusu ariki-an"
		g="this village in visit-INDEF.S PURP come.PL-INDEF.S"
		orig="Танъ котàнъ охтà утáса—анъ кусý áреги анъ."
		origLang="ain-Cyrl"
		tr="I have come to visit this village."
		note="A single speaker; ariki is the plural stem of eh ‘come’."
		cite="dobrotvorsky1875; sakaguchi2021"
		dial="WS"
		place="West coast, central (recorded 1867–1872)"
	/>
	<Ex
		m="kamuy oro-wa mat kayki an-e-kor-te-si kusu"
		g="god place-from wife even INDEF.A-2SG.O-have-CAUS-PL because"
		tr="since you have been given even a wife by the gods"
		note="Impersonal passive: an- indexes the backgrounded agent, the recipient ‘you’ is indexed by e-, and the demoted agent kamuy appears as an oblique."
		cite="pilsudski1912:23; dalcorso2025align:197"
		dial="ES"
	/>
	<Ex
		m="anoka kayki mawa-an kusu okay-an"
		g="INDEF even be.hungry-INDEF.S because exist.PL-INDEF.S"
		tr="I too am here because I am hungry."
		note="A monster speaks of itself in the indefinite; okay is the plural stem of an ‘exist’."
		cite="murasaki2001:text 4"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The indefinite dominates Sakhalin first-person text frequency. In the three Sentoku
		letters we count 23 tokens of <i lang="ain">an=</i> against 17 of <i lang="ain">ci=</i>,
		19 of <i lang="ain">e=</i>, and not a single <i lang="ain">ku=</i>; in Yamabe Yasunosuke's
		(<span lang="ja">山辺安之助</span>) book-length autobiography the AN-series carries the
		whole narration, the KU-series appearing once and the CI-series twice
		<Ref k="sakaguchi2024" p="46" paren />. The corpus texts recorded by Dobrotvorsky in
		1867–1872 use fourth-person narration as their convention, while Asai Take's twentieth-
		century <A w="tuytah" gl="folktale" /> are narrated in the third person with the
		reportative <A w="manu" /> and use <i lang="ain">ku-</i> freely in dialogue — so the choice
		between <i lang="ain">ku-</i> and the indefinite is a matter of register and genre, not of
		grammar. Within quoted speech both occur, subject to the personal agreement rule of §13.1.
	</p>
</S>

<S t="Object marking" id="object-marking">
	<p>
		Overt object prefixes exist only for first person and the indefinite; second person
		objects are indexed by the same <i lang="ain">e-</i>/<i lang="ain">eci-</i> as subjects,
		and third person objects are zero. The first person object form divides the island: the
		west coast has <i lang="ain">en-</i>, as in Hokkaidō, while the east coast generalises
		<i lang="ain">in-</i> for both the KU- and the CI-series
		(<Ref k="sato1985" />; <Ref k="sakaguchi2024" p="33–39" />). Earlier work treated
		<i lang="ain">i-</i> and <i lang="ain">in-</i> as free variants
		(<Ref k="chiri1942" p="§37" />), but Satō showed from the personal agreement rule that
		<i lang="ain">in-</i> belongs with the KU/CI-series and <i lang="ain">i-</i> with the
		AN-series <Ref k="sato1985" paren />. For the exclusive object, Hattori recorded west-coast
		<i lang="ain">un-</i>, cognate with Hokkaidō <i lang="ain">un-</i>, though even his
		Rayciska consultants used the CI-series only rarely <Ref k="hattori1961" p="16" paren />;
		Dal Corso notes that east-coast <i lang="ain">in-</i> cannot be derived from it by any
		regular correspondence, so its origin remains open
		<Ref k="dalcorso2025align" p="205" paren />.
	</p>
	<Ex
		m="nee kina e-taa ciki neh en-ee-re"
		g="some plant 2SG.A-pick if some 1SG.O-eat-CAUS"
		tr="If you pick some butterbur, give me some to eat."
		cite="murasaki2001:text 25"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="Sambaku kuani ohta tampaku in-konte"
		g="Sambaku 1SG at tobacco 1SG.O-give"
		orig="Самбаку квани охта тамбаку инь контэ."
		origLang="ain-Cyrl"
		tr="Sambaku gave me tobacco."
		note="The third-person subject is zero; in- co-occurs with the KU-series pronoun kuani."
		cite="dobrotvorsky1875:238; sakaguchi2024:ex. 3-8"
		dial="SA"
		place="recorded 1867–1872"
	/>
	<p>
		Sentoku likewise writes <i lang="ain">in=konte</i> ‘give me’ in his third letter
		<Ref k="tangiku2001" paren />. The indefinite object <i lang="ain">i-</i> appears wherever
		an AN-series referent is acted on, including the narrative first person:
	</p>
	<Ex
		m="ruype kuma ohta oman te ceh huymampa anokay i-ranke"
		g="frozen.fish pole to go.SG and fish inspect INDEF INDEF.O-take.down"
		tr="She went over to the frozen-fish pole, looked the fish over, and took me down."
		note="The narrator has been turned into a fish; the pronoun anokay confirms the AN-series."
		cite="pilsudski1912:text 17, ll. 18–20; sakaguchi2024:ex. 3-10"
		dial="ES"
	/>
	<p>
		This prefix is formally identical to the antipassive <i lang="ain">i-</i>
		(<Xr ch="valency">Chapter 14</Xr>), from which it historically derives
		<Ref k="dalcorso2025align" p="196" paren />; synchronically the two are kept apart by the
		referential (first-person or logophoric) reading of the agreement use. The east coast
		also has a dedicated first-person passive prefix <i lang="ain">inci-</i>, used when a
		definite agent acts on the speaker; it serves both the KU- and the CI-series, and
		corresponds to <i lang="ain">enci-</i>/<i lang="ain">unci-</i> of north-eastern Hokkaidō
		<Ref k="sakaguchi2024" p="35–37" paren />:
	</p>
	<Ex
		m="cookay inci-wenkara ciki hannahkusu pirika kumpe ka han nee nanko"
		g="1PL.EXCL 1.O.PASS-beat if never be.good NMLZ even NEG COP probably"
		tr="If I am beaten, nothing good will ever come of it."
		note="The bear god speaks of himself; cookay is the CI-series pronoun with singular reference."
		cite="pilsudski1912:text 19, ll. 23–24; sakaguchi2024:ex. 3-13"
		dial="ES"
	/>
</S>

<S t="First–second person interaction forms" id="portmanteau">
	<p>
		When first and second person meet on one transitive verb, the marking is not the simple
		sum of an A-prefix and an O-prefix: no Ainu variety allows the expected
		<i lang="ain">*ku-e-</i>, <i lang="ain">*ci-e-</i>, <i lang="ain">*ku-eci-</i> or
		<i lang="ain">*e-en-</i> <Ref k="sakaguchi2024" p="32" paren />. In Sakhalin the verb has
		in effect a single prefixal person slot; the object is what gets expressed there, and the
		subject is either recoverable from context or indexed by a suffix
		<Ref k="dalcorso2025align" p="207–208" paren />. Table 2 gives the attested forms; KU- and
		CI-series behave identically throughout and are collapsed as ‘1’
		(<Ref k="sakaguchi2024" p="53–55" />; <Ref k="murasaki1979" p="50" />;
		<Ref k="hattori1961" p="14–16" />).
	</p>
	<table>
		<caption>First–second person interaction marking</caption>
		<thead>
			<tr><th>A → O</th><th>2SG.O</th><th>2PL.O</th><th>1.O</th><th>INDEF.O</th></tr>
		</thead>
		<tbody>
			<tr>
				<th>1.A (KU/CI)</th>
				<td><i lang="ain">eci-</i></td>
				<td><i lang="ain">eci-…-yan</i></td>
				<td>—</td>
				<td>—</td>
			</tr>
			<tr>
				<th>INDEF.A (AN)</th>
				<td><i lang="ain">an-e-</i></td>
				<td><i lang="ain">eci-…-(y)an</i></td>
				<td>—</td>
				<td>—</td>
			</tr>
			<tr>
				<th>2SG.A</th>
				<td>—</td>
				<td>—</td>
				<td><i lang="ain">in-</i> (E) ~ <i lang="ain">en-</i> (W)</td>
				<td><i lang="ain">e-i-</i></td>
			</tr>
			<tr>
				<th>2PL.A</th>
				<td>—</td>
				<td>—</td>
				<td><i lang="ain">in-…-an</i> (E) ~ <i lang="ain">en-…-yan</i> (W)</td>
				<td><i lang="ain">eci-i-</i> (E) ~ <i lang="ain">i-…-yan</i> (W)</td>
			</tr>
		</tbody>
	</table>
	<p>
		The portmanteau prefixes are best seen in a minimal pair that Dobrotvorsky recorded from
		nineteenth-century speech — identical word order, the prefix alone carrying the
		directionality:
	</p>
	<Ex
		m="cookay eani eci-koyki"
		g="1PL.EXCL 2SG 1SG.A>2SG.O-beat"
		orig="Чокай эани-еци койки."
		origLang="ain-Cyrl"
		tr="I beat you."
		cite="dobrotvorsky1875:453; sakaguchi2024:ex. 3-31"
		dial="SA"
		place="recorded 1867–1872"
	/>
	<Ex
		m="cookay eani in-koyki"
		g="1PL.EXCL 2SG 2SG.A>1SG.O-beat"
		orig="Чокай эани-инь койки."
		origLang="ain-Cyrl"
		tr="You beat me."
		cite="dobrotvorsky1875:453; sakaguchi2024:ex. 3-19"
		dial="SA"
		place="recorded 1867–1872"
	/>
	<p>
		The 1→2SG form <i lang="ain">eci-</i> is segmentally identical to the 2PL marker but is a
		distinct portmanteau; Sentoku uses it to his single addressee:
	</p>
	<Ex
		m="suy yoponi uepekere an ciki eci=nu-re kusu iki"
		g="again later tale exist.SG if 1SG.A>2SG.O=hear-CAUS PURP do"
		tr="If later there is another tale, I will let you hear it."
		cite="tangiku2001:Letter 2"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		The AN-series, by contrast, combines its prefixes compositionally:
		<i lang="ain">an-e-</i> for INDEF→2SG and <i lang="ain">e-i-</i> for 2SG→INDEF. Kindaichi
		reported precisely this “strict” combinability as the hallmark of Sakhalin
		<Ref k="sakaguchi2024" p="32" paren />, though his tables also contain regularised forms
		(<i lang="ain">e-in-</i>, <i lang="ain">eci-in-</i>, <i lang="ain">an-eci-</i>) for which
		no textual attestation has been found <Ref k="sakaguchi2024" p="38, 51" paren /> — a
		caution against filling paradigms by analogy.
	</p>
	<Ex
		m="anoka orowano an-e-makan-ke"
		g="INDEF from INDEF.A-2SG.O-go.uphill.SG-CAUS"
		tr="It was I who sent you up into the hills."
		note="The famine god speaks; the pronoun anoka confirms the AN-series."
		cite="pilsudski1912:text 22, ll. 55–56; sakaguchi2024:ex. 3-33"
		dial="ES"
	/>
	<Ex
		m="sonno u-rayki-an kusuneyke eani e-ray anoka ne yahka e-i-rayki kun pe ne"
		g="truly RECP-kill-INDEF.S if 2SG 2SG.S-die INDEF COP although 2SG.A-INDEF.O-kill going.to NMLZ COP"
		tr="If we truly fight, you will die; and me too — you will kill me."
		cite="pilsudski1912:text 12, ll. 150–151; sakaguchi2024:ex. 3-20"
		dial="ES"
	/>
	<p>
		One tale recorded twice on the east coast supplies the same insult in both series, the
		neatest demonstration of the personal agreement rule: KU-series subject with
		<i lang="ain">in-</i>, AN-series subject with <i lang="ain">e-i-</i>, never crossed
		<Ref k="sakaguchi2024" p="38" paren />:
	</p>
	<Ex
		m="hosiki ku-ki kun pe in-etohparusi"
		g="first 1SG.A-do going.to NMLZ 2SG.A>1SG.O-forestall"
		orig="ホシキ コキクンペ イネトッパルシ"
		origLang="ain-Kana"
		tr="You jumped in ahead of what I was about to do!"
		cite="urata1998:118; sakaguchi2024:ex. 3-17"
		dial="ES"
	/>
	<Ex
		m="hosiki an-ki kun pe e-i-etohparusi"
		g="first INDEF.A-do going.to NMLZ 2SG.A-INDEF.O-forestall"
		orig="ポシキ アンキクンベ ヱエトッパルシ"
		origLang="ain-Kana"
		tr="You jumped in ahead of what I was about to do!"
		cite="urata1998:118–119; sakaguchi2024:ex. 3-18"
		dial="ES"
	/>
	<p>
		Where the second person is plural, the suffix <i lang="ain">-(y)an</i> is added to the
		portmanteau: <i lang="ain">eci-…-yan</i> for 1→2PL, <i lang="ain">in-…-an</i> (west coast
		<i lang="ain">en-…-yan</i>, <Ref k="hattori1961" p="16" />) for 2PL→1. Murasaki stated the
		generalisation for Rayciska — <i lang="ain">-yan</i> appears whenever a first person and a
		plural second person interact, in either direction <Ref k="murasaki1979" p="50" paren /> —
		and Sakaguchi confirms it for the east coast: the suffix marks the plurality of the second
		person, whatever its role <Ref k="sakaguchi2024" p="53–54" paren />, an analysis Tangiku
		also adopts for the contemporary description (Tangiku 2022: 358, in
		<Ref k="bugaeva2022" paren />). It is surely related to the plural imperative particle
		<A w="yan" /> (<Ref k="murasaki1979" p="30" />; <Xr ch="verb-structure">Chapter 12</Xr>).
	</p>
	<Ex
		m="nahte asip-as ciki ci-koro-cise-he kamuy cise eci-ko-urenka-re-yan"
		g="then go.out.PL-1PL.EXCL.S if 1PL.EXCL.A-have-house-POSS god house 2PL.O-APPL-be.arranged-CAUS-1.A"
		tr="Then, when I go out, I will make over to you all my house, a god's house."
		cite="pilsudski1912:text 25, l. 96; sakaguchi2024:ex. 3-38"
		dial="ES"
	/>
	<Ex
		m="aynu utara eci-nee kusu in-raanup-an kusuneyke yaykiste"
		g="human PL 2PL.A-COP because 1.O-love-2PL.A if be.dangerous"
		tr="Because you are humans, if you love me, it is dangerous."
		note="A woman warns several men at once; the same verb appears as in-raanup with a third-person subject earlier in the tale."
		cite="pilsudski1912:text 6, ll. 16–17; sakaguchi2024:ex. 3-22"
		dial="ES"
	/>
	<p>
		Piłsudski took <i lang="ain">inranupan</i> here to stand “instead of”
		<i lang="ain">inranu</i> <Ref k="pilsudski1912" p="92" paren />; the two tokens in the same
		tale show rather that the suffix tracks the number of the second-person subject
		<Ref k="sakaguchi2024" p="40–41" paren />. In the AN-series the same surface string
		<i lang="ain">eci-…-(y)an</i> is compositional — object <i lang="ain">eci-</i> plus the
		ordinary indefinite subject suffix <i lang="ain">-an</i> — as shown by tokens co-occurring
		with the pronoun <i lang="ain">anokay</i> and prefix <i lang="ain">an-</i> in Yamabe's
		narrative <Ref k="sakaguchi2024" p="49–51" paren />. In the corpus, Dobrotvorsky's
		conversational texts attest the AN-series 1→2SG combination directly:
		<i lang="ain">an=e=nukara</i> ‘I met you’ <Ref k="dobrotvorsky1875" paren />,
		<Ref k="sakaguchi2021" paren />.
	</p>
	<p>
		The empty cells of Table 2, finally, are not all gaps of the same standing. The
		configurations in which agent and object are the same speech-act participant — a first
		person acting on a first person, a second on a second — can never be filled. Such a
		clause is necessarily coreferential, and coreference between the two core slots is not
		built by stacking an A-prefix on an O-prefix: it is routed through the reflexive prefix
		<i lang="ain">yay-</i> (marginally <i lang="ain">si-</i>;
		<Xr ch="valency">Chapter 14</Xr>), which withdraws the object from the person paradigm,
		so that the derived verb carries a single person marker. East-coast
		<i lang="ain">yay-reske-an</i> ‘I brought myself up’ shows the reflexive stem taking
		plain intransitive agreement where <i lang="ain">reske</i> ‘raise’ takes prefixes
		<Ref k="dalcorso2024" p="73–74" paren />, and Dobrotvorsky's conversational texts
		attest the configuration with the lexicalised <i lang="ain">yayko-</i>:
	</p>
	<Ex
		m="sonnoka an-yayko-ramuosma"
		g="truly INDEF.A-REFL.APPL-be.convinced"
		orig="Соннока а яйкурамуосьма."
		origLang="ain-Cyrl"
		tr="Truly, we are persuaded."
		note="A notional ‘we convince ourselves (of it)’: the coreferential participant is absorbed by yay- (here within lexicalised yayko-), and the verb hosts only the single AN-series marker — no 1.A>1.O cell is assembled."
		cite="dobrotvorsky1875; sakaguchi2021:51"
		dial="WS"
		place="West coast, central (recorded 1867–1872)"
	/>
	<p>
		The 1→1 (and 2→2) dashes are thus theorems of the grammar, not accidents of the record,
		and no portmanteau should be reconstructed for them: reflexivisation empties this corner
		of the person paradigm in head-marking languages quite generally. The cells pairing the
		AN-series with the KU- or CI-series follow in turn from the personal agreement rule of
		§13.1, which bars the two series from a single clause; where a genuinely indefinite agent
		acts on the speaker — the one non-coreferential reading — the east coast resorts to the
		passive <i lang="ain">inci-</i> (§13.3). Only what remains once these principles have
		done their work counts as a documentary gap in the strict sense, and in a closed corpus
		it must stay one.
	</p>
</S>

<S t="Morphological alignment" id="alignment">
	<p>
		Read off the paradigm, the synchronic alignment of Sakhalin Ainu person marking is split
		by person, and we state it as follows. First person singular is
		nominative–accusative: one form for S and A (<i lang="ain">ku-</i>), another for O
		(<i lang="ain">en-</i>/<i lang="ain">in-</i>). The first person plural exclusive and the
		indefinite distinguish all three roles — <i lang="ain">-as</i>/<i lang="ain">ci-</i>/<i
		lang="ain">in-</i> and <i lang="ain">-an</i>/<i lang="ain">an-</i>/<i lang="ain">i-</i> —
		a tripartite arrangement, with the S-form suffixed and the A-form prefixed. Second persons
		are neutral (one invariant form each), and third person is neutral by zero. This is
		Sakaguchi's classification of the east-coast system <Ref k="sakaguchi2024" p="31" paren />,
		and it holds for the west coast with the lexical substitutions noted above.
	</p>
	<p>
		<Ref k="dalcorso2025align" /> frames the same facts differently. Treating
		<i lang="ain">-as</i>/<i lang="ain">ci-</i> and <i lang="ain">-an</i>/<i lang="ain">an-</i>
		each as a single marker whose suffixal and prefixal realisations continue one historical
		item — Tamura's old observation that <i lang="ain">-an</i> behaves prosodically like the
		verb <A w="an" gl="exist" /> it descends from, reported and extended at
		<Ref k="dalcorso2025align" p="190–191" /> — he dispenses with the tripartite component and
		describes the basic system as mixed nominative–neutral: nominative for first person and
		the indefinite, neutral for second and third. The difference is one of segmentation, not
		of substance: once the distribution (suffix on intransitives, prefix on transitives,
		distinct O-forms) is stated, nothing empirical hangs on whether S- and A-forms are one
		morpheme or two. We use the role-explicit glosses INDEF.S, INDEF.A, INDEF.O precisely so
		that the description does not prejudge this.
	</p>
	<p>
		The substantive part of Dal Corso's proposal concerns the interaction forms of §13.4 and
		their history. He reconstructs Proto Sakhalin Ainu with only <i lang="ain">ku-</i>,
		<i lang="ain">en-</i> and <i lang="ain">e-</i>, plus a collective verb
		<i lang="ain">*asti</i> that grammaticalised into the plural markers and, fused with the
		person prefixes, yielded <i lang="ain">ci-</i>, <i lang="ain">-as</i> and
		<i lang="ain">eci-</i> <Ref k="dalcorso2025align" p="203–205" paren />. A single prefix
		slot, accent shift and syllable weight then conspired against double prefixation in
		first–second person contexts, leaving object-only portmanteaux
		(<i lang="ain">eci-</i>, <i lang="ain">en-</i>/<i lang="ain">in-</i>) with subject
		syncretism <Ref k="dalcorso2025align" p="207–208" paren />. Finally, the indefinite —
		already used for a low-referentiality agent acting on a more specific patient, as in
		impersonal passives — was recruited to disambiguate subject number. The pivot of this
		last step lies outside the speech-act domain altogether, in 3→3 clauses whose agent is
		low in referentiality. There <i lang="ain">an-</i> already does inverse-like work: the
		patient outranks the unexpressed agent, and the clause hovers between an
		indefinite-agent and a passive reading:
	</p>
	<Ex
		m="ahci an-nukara"
		g="old.woman INDEF.A-see"
		tr="Someone sees the old woman; the old woman is seen."
		note="On Dal Corso's analysis an- is here an incipient inverse marker: it signals that the agent ranks below the patient, whichever way the clause is translated."
		cite="dalcorso2025align:210"
		dial="SA"
	/>
	<p>
		Extending this device into the first–second person domain gave the discontinuous
		<i lang="ain">eci-…-(y)an</i>, <i lang="ain">en-…-yan</i> and <i lang="ain">in-…-an</i>
		of §13.4: the prefix goes on indexing the object, while the suffix, in origin the mark
		of a backgrounded agent, comes to spell out the subject whose person the portmanteau
		leaves syncretic. Dal Corso reads the result as an emerging, non-prototypical
		<em>inverse</em> — special marking wherever the object outranks the subject in discourse
		salience — and draws a typological parallel with Algonquian and Athabaskan, where
		impersonal-agent forms (Meskwaki <i>-ekoː</i>, Potawatomi <i>-ikoː</i>) were likewise
		regrammaticalised as inverse markers <Ref k="dalcorso2025align" p="209–213" paren />. He
		is explicit that the system is not uniformly inverse — 1→2SG marking is hierarchical
		rather than inverse, and 2→1 forms encode object role transparently — and that most
		reconstructed stages are unattested <Ref k="dalcorso2025align" p="202, 212–213" paren />.
	</p>
	<p>
		As a diachronic account we find this persuasive: it derives the portmanteaux from
		independently motivated phonology, connects the interaction suffix to the indefinite, and
		explains why the object is always the overtly indexed argument. Synchronically, however,
		we do not describe Sakhalin Ainu as inverse-aligned. The decisive datum is Sakaguchi's
		demonstration that in the KU/CI-series the suffix <i lang="ain">-(y)an</i> co-varies with
		the <em>number of the second person</em> in both directions (1→2PL and 2PL→1), while in
		the AN-series the same string is the ordinary indefinite subject suffix
		<Ref k="sakaguchi2024" p="53–55" paren />. A marker whose function is second-person
		plurality is not an inverse marker. The two readings are nonetheless not flatly
		incompatible: they approach the same closed corpus from opposite ends, Sakaguchi from
		the synchronic distribution of the attested cells, Dal Corso from the trajectory that
		produced them, and the elicitation that would force a choice can no longer be carried
		out. Where the inverse analysis has genuine synchronic purchase is in the 3→3
		indefinite-agent clauses above — a live textual pattern, not a reconstruction — and a
		reader who follows <Ref k="dalcorso2025align" /> may prefer to gloss such tokens of
		<i lang="ain">an-</i> as inverse where we keep INDEF. Our synchronic statement is
		therefore: core alignment
		nominative–accusative for first person and the indefinite (with role-split tripartite
		exponence in the CI- and AN-series), neutral for second and third persons; and, overlaid
		on it, a closed set of portmanteau prefixes and circumfixes for first–second person
		interactions in which the object controls the prefix slot — a hierarchical trait whose
		inverse-like asymmetries are the fossil of the development Dal Corso reconstructs.
	</p>
</S>

<S t="Person marking on nouns" id="nouns">
	<p>
		The transitive A-prefixes double as possessor indexes on nouns, which then take the
		possessive (“belonging”) suffix — <i lang="ain">ku-matak-ihi</i> ‘my younger sister’ in
		the following, with the 1→2 portmanteau on the verbs beside it:
	</p>
	<Ex
		m="ku-matak-ihi eski eci-sam-te kusu eci-ko-ruura ruuhe nee"
		g="1SG.A-younger.sister-POSS um 1SG.A>2SG.O-marry-CAUS PURP 1SG.A>2SG.O-APPL-bring COMP COP"
		tr="It was in order to wed my younger sister to you that I brought her to you."
		cite="pilsudski1912:text 25, ll. 82–85; sakaguchi2024:ex. 3-28"
		dial="ES"
	/>
	<p>
		Alongside direct prefixation, possession is freely expressed by a relative construction
		with the verb <A w="koro" gl="have" />: Sentoku's <i lang="ain">an=koro nispa</i> ‘my
		master’ and <i lang="ain">e=koro kotan</i> ‘your village’, the hero's
		<i lang="ain">an-koro nay</i> ‘the river I own’ in §13.2, and the compounded
		<i lang="ain">ci-koro-cise-he</i> ‘the house I own’ in §13.4. Chiri adds that dative
		(recipient) persons are built on the object forms with an applicative:
		<i lang="ain">in-ko-</i> ‘to me/us’, <i lang="ain">e-ko-</i> ‘to you’
		<Ref k="chiri1942" p="§37" paren />. The morphology and semantics of possessive forms,
		including the nominal plural <i lang="ain">-ahcin</i>, are treated in
		<Xr ch="nouns-and-possession">Chapter 7</Xr>.
	</p>
</S>

<S t="Person and verbal number" id="number">
	<p>
		Person marking interlocks with verbal number at two points
		(<Xr ch="number">Chapter 8</Xr>, <Xr ch="verb-structure">Chapter 12</Xr>). First, the
		suffix <i lang="ain">-hci</i> (east-coast realisations also <i lang="ain">-(a)hci</i>,
		<i lang="ain">-si</i>, <Ref k="dalcorso2024" p="62–63" />) marks plurality or
		collectivity of a core argument. Murasaki listed it among the person affixes as an
		optional third person plural <Ref k="murasaki1979" p="49–51" paren />, but since it
		co-occurs with overt person markers of any person — Sentoku's
		<i lang="ain">an=e-hci</i> ‘we eat it’ above, Murasaki's own
		<i lang="ain">eci-itak-ahci</i> ‘you all speak’ — we treat it with
		<Ref k="dalcorso2025align" p="202" /> and <Ref k="sakaguchi2024" /> as a number marker,
		not person agreement. With unmarked third persons it is what signals plurality:
	</p>
	<Ex
		m="iineahsuy tan cise un monimahpo uta hemata e-hci wa okay-ahci hii"
		g="hey this house in girl PL what eat-PL and exist.PL-PL Q"
		tr="Say, what do the girls of this house eat?"
		cite="murasaki2001:text 4"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<Ex
		m="pomoshnik starosta 3 en ranke koro-hci manuy"
		g="assistant village.head 3 yen each have-PL REP"
		tr="The assistant village heads receive three yen each, they say."
		note="The first two words are Russian loans; -hci indexes the plural third-person subject."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		The controller need not be the subject: Piłsudski already noted of
		<i lang="ain">an-kuyra-si</i> ‘I stole up on them’ that the plural sign is there “not on
		account of the subject (‘I’) but because the object (the gods) is in the pl.”
		<Ref k="pilsudski1912" p="40–41" paren />. Second, suppletive stem pairs
		(<A w="oman" gl="go (sg)" /> ~ <A w="payeh" gl="go (pl)" />, <A w="an" gl="exist (sg)" />
		~ <A w="okay" gl="exist (pl)" />) agree with the grammatical number of the person series:
		the CI- and AN-series select plural stems even for a single referent —
		<i lang="ain">asip-as</i>, <i lang="ain">paye-as</i>, <i lang="ain">makap-an</i>,
		<i lang="ain">ariki-an</i>, <i lang="ain">okay-an</i> in the examples above — while the
		KU-series takes singular stems (<i lang="ain">ku-san</i>, <i lang="ain">e=oman</i>)
		<Ref k="sakaguchi2024" p="27–29" paren />. This grammatical plurality is the reason we
		segment the indefinite and the CI-series as plural categories whatever they refer to.
	</p>
</S>

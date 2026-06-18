<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	The coda restrictions of <Xr ch="phonology">Chapter 4</Xr> make Sakhalin Ainu morphology audibly alternating:
	a stem that ends in <i lang="ain">h</i> in isolation recovers its underlying stop before a
	vowel-initial suffix, a stem that ends in an echo-vowel <i lang="ain">-rV</i> sequence behaves as
	if it ended in
	<i lang="ain">r</i>, and the possessive suffix copies its vowel from the stem. This chapter
	describes these alternations and the sandhi of connected speech. The classic statement of the
	synchronic rules is the chapter on sound change in
	<Ref k="chiri1942" p="§§13–16" />; for the West coast the system is worked out by
	<Ref k="murasaki1979" /> and, for the verbs in <i lang="ain">-rV</i>, by
	<Ref k="tangiku1998" />; the East-coast counterparts are surveyed by
	<Ref k="dalcorso2024" p="65–66" />. A useful summary of the whole complex is
	<Ref k="tangiku2022" p="§§2.3–2.4" />.
</p>

<S t="Coda alternations: h with p, t, k" id="coda-alternations">
	<p>
		Stems whose final stop has been neutralised to <i lang="ain">h</i>
		(<Xr ch="phonology" s="coda-h">Chapter 4</Xr>) show the stop whenever a vowel follows within the
		word. The alternation runs through both nominal and verbal morphology. With the possessive
		suffix (<Xr ch="nouns-and-possession">Chapter 7</Xr>):
		<A w="teh" gl="hand" /> but <i lang="ain">tek-ihi</i> ‘his hand’,
		<A w="otoh" gl="hair" /> but <i lang="ain">otop-ihi</i>
		<Ref k="tangiku2022" p="§2.3" paren />. With person suffixes:
		<A w="itah" gl="speak" /> but <i lang="ain">itak-an</i> ‘we spoke’ and
		<i lang="ain">itak-ahci</i> ‘they spoke’ <Ref k="tangiku1998" p="§§2-2, 6" paren />. Before
		<i lang="ain">i</i>
		the recovered <i lang="ain">t</i> is regularly affricated (<Xr ch="phonology" s="obstruents"
			>Chapter 4</Xr
		>): <A w="mah" gl="wife" /> :
		<i lang="ain">mac-ihi</i> ‘his wife’, <i lang="ain">kuh</i> ‘belt’ :
		<i lang="ain">kuc-i</i> ‘his belt’ <Ref k="chiri1942" p="§16,6" paren />. And where the coda has
		shifted to <i lang="ain">s</i> after <i lang="ain">i</i>, the velar returns intact: <A
			w="sis"
			gl="eye"
		/> : <i lang="ain">sik-ihi</i> ‘her eyes’, the latter frequent in Asai Take's tales (<i
			lang="ain">sikihi masaha</i
		>
		‘her eyes opened’, <Ref k="murasaki2001" p="text 7" paren />). We therefore set up underlying
		stem-final /p t k/ and let the neutralisation rule of Chapter 4 apply in coda position, in line
		with Chiri's and Tangiku's analyses and with Dal Corso's notation
		<i lang="ain">itak*</i> for surface <i lang="ain">itah</i>
		<Ref k="dalcorso2024" p="61" paren />.
	</p>
	<table>
		<caption> Citation form and prevocalic (possessed) form of h-final nouns </caption>
		<thead>
			<tr>
				<th>citation</th>
				<th>possessed</th>
				<th></th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain">teh</i></td>
				<td><i lang="ain">tekihi</i></td>
				<td>‘hand’</td>
				<td>corpus; Tangiku 2022</td>
			</tr>
			<tr>
				<td><i lang="ain">otoh</i></td>
				<td><i lang="ain">otopihi</i></td>
				<td>‘hair’</td>
				<td>Tangiku 2022</td>
			</tr>
			<tr>
				<td><i lang="ain">sewreh</i></td>
				<td><i lang="ain">sewrepihi</i></td>
				<td>‘windpipe’</td>
				<td>Hattori 1964</td>
			</tr>
			<tr>
				<td><i lang="ain">sistoh</i></td>
				<td><i lang="ain">sistokihi</i></td>
				<td>‘elbow’</td>
				<td>Hattori 1964</td>
			</tr>
			<tr>
				<td><i lang="ain">nisah</i></td>
				<td><i lang="ain">nisapuhu</i></td>
				<td>‘shin’</td>
				<td>Hattori 1964; corpus</td>
			</tr>
			<tr>
				<td><i lang="ain">mah</i></td>
				<td><i lang="ain">macihi</i></td>
				<td>‘wife’</td>
				<td>corpus</td>
			</tr>
			<tr>
				<td><i lang="ain">kosmah</i></td>
				<td><i lang="ain">kosmacihi</i></td>
				<td>‘daughter-in-law’</td>
				<td>Hattori 1964</td>
			</tr>
			<tr>
				<td><i lang="ain">sis</i></td>
				<td><i lang="ain">sikihi</i></td>
				<td>‘eye’</td>
				<td>corpus</td>
			</tr>
		</tbody>
	</table>
	<Ex
		m="tani taa mukara ani humpa-ha neampe mukara kotahma orowa tani taa teh ani sitayki-hi neampe tek-ihi kotahma"
		g="now so axe with chop-NMLZ then axe stick then now so hand with strike-NMLZ then hand-POSS stick"
		tr="now when she chopped it with the axe, the axe stuck; then when she struck it with her hand, her hand stuck"
		cite="murasaki2001:text 43"
		dial="WS"
		place="Odasu (Asai Take)"
		note="Citation form teh before the vowel-initial word ani, possessed form tek-ihi before the vowel-initial suffix: the stop is recovered word-internally only."
	/>
	<Ex
		m="orowa taa toyaynu tek-ihi ehekempa-ha neampe nisapuaane nisapu-hu kayteh teh wahka onne ahun teh ray"
		g="then so Earth.Man hand-POSS pull-NMLZ then Spindleshanks shin-POSS break and water into enter.SG and die.SG"
		tr="then, when he pulled Earth-Man's hand, Spindleshanks broke his shin, fell into the water and died"
		cite="murasaki2001:text 10"
		dial="WS"
		place="Odasu (Asai Take)"
		note="nisapu-hu beside citation nisah ‘shin’ (Hattori 1964 nisah, -puhu): the recovered p brings its own lexical vowel u."
	/>
	<p>
		The same alternation underlies the basic numerals: <i lang="ain">sine-h</i>
		‘one (thing)’, <i lang="ain">tu-h</i> ‘two’, <i lang="ain">re-h</i> ‘three’ contain the
		nominaliser <i lang="ain">-h</i>, the Sakhalin outcome of <i lang="ain">*-p</i>
		(Hokkaidō <i lang="ain">sinep, tup, rep</i>); Chiri already used the suffix pair
		<i lang="ain">-pe</i> (post-consonantal) ~ <i lang="ain">-h</i> (post-vocalic) as a diagnostic
		of stem shape <Ref k="chiri1942" p="§2(5)" paren />
		(see <Xr ch="numerals">Chapter 10</Xr>).
	</p>
	<p>
		Across word boundaries usage differs by source. Chiri describes liaison: the stop surfaces
		before a vowel-initial word, as in <i lang="ain">tek ani</i> ‘with the hand’,
		<i lang="ain">ek-an</i>
		‘I came’, <i lang="ain">mat-ah</i> ‘younger sister’
		<Ref k="chiri1942" p="§16,1" paren />, and the letters of Sentoku Tarōji show spellings like
		<i lang="ain">cep ukoyki</i>
		‘fish-catching’
		<Ref k="tangiku2001" p="Letter 1" paren />. In Murasaki's West-coast transcriptions, by
		contrast, the neutralised form stands even before a vowel —
		<i lang="ain">teh ani</i> in the example above — which we attribute to the automatic glottal
		onset of the following word: liaison applies only where no glottal stop intervenes, hence within
		the word but not across it in these dialects. Between identical vowels and before stops the
		debuccalised segment may also surface between words in Piłsudski's texts (<i lang="ain"
			>nax an</i
		>
		‘being so’,
		<i lang="ain">itax ki</i> ‘make a speech’) <Ref k="dalcorso2024" p="62" paren />.
	</p>
</S>

<S t="The possessive suffix and vowel copying" id="poss-vowel-copy">
	<p>
		The possessed (“belonging”) form of the noun is built with a suffix of the shape
		<i lang="ain">-hV</i> on vowel-final stems and <i lang="ain">-VhV</i> on consonant-final stems (<Xr
			ch="nouns-and-possession">Chapter 7</Xr
		> treats its syntax). On vowel-final stems the suffix vowel copies the stem-final vowel:
		<A w="sapa" gl="head" /> → <i lang="ain">sapa-ha</i>, <A w="cise" gl="house" /> →
		<i lang="ain">cise-he</i>, <A w="mahpoo" gl="daughter" /> →
		<i lang="ain">mahpoo-ho</i>
		<Ref k="murasaki1979" paren />;
		<Ref k="tangiku2022" p="§4.1" paren />. On consonant-final stems the two vowels are identical to
		each other but lexically determined by the stem, with strong tendencies set by the final
		consonant — <i lang="ain">e</i> after <i lang="ain">y w</i>,
		<i lang="ain">i</i> or <i lang="ain">u</i> after nasals and stops:
		<i lang="ain">tek-ihi</i>, <i lang="ain">ram-uhu</i> ‘heart’,
		<i lang="ain">kam-ihi</i> ‘meat’, <i lang="ain">kotan-uhu</i> ‘village’ (<Ref
			k="murasaki1979"
			paren
		/>, as tabulated in
		<Ref k="tangiku2022" p="§4.1" paren />; <Ref k="hattori1964" paren />). Sakhalin has only the
		long form: Hokkaidō's short possessive (<i lang="ain">tek-e</i>) has no West-coast counterpart <Ref
			k="tangiku2022"
			p="§4.1"
			paren
		/>.
	</p>
	<p>
		Lengthened monosyllabic stems regularly shorten before <i lang="ain">-he</i>, since the suffixed
		word is already bimoraic and the lengthening that made the free form heavy is no longer needed: <A
			w="kuu"
			gl="bow"
		/> ~ <i lang="ain">ku-he</i>, <A w="nii" gl="tree" /> ~
		<i lang="ain">ni-he</i> (<Ref k="chiri1952" p="463" />, <Ref k="chiri1942" p="§72" paren />;
		<Xr ch="nouns-and-possession" s="he-generalisation">Chapter 7</Xr>). The shortening is not
		exceptionless, however: <A w="ree" gl="name" /> surfaces unshortened in the Yamada Hayo corpus (<i
			lang="ain">reehe tah nee manu</i
		>
		‘his name was this’,
		<Ref k="tamura2003" paren />). Polysyllabic stems in <i lang="ain">ii uu</i> shorten the vowel
		and surface a glide before <i lang="ain">-ehe</i>:
		<A w="imii" gl="garment" /> → <i lang="ain">imi-yehe</i>, and <A w="ruu" gl="road" />
		→ <i lang="ain">ruwe-he</i>
		<Ref k="tangiku2022" p="§4.1" paren />, the coda ban on long nuclei (<Xr
			ch="phonology"
			s="syllable">Chapter 4</Xr
		>) forcing the shortening.
	</p>
	<Ex
		m="kotanu-hu ruwe-he ohta oman teh tani taa ruu okakara oman ike taa ciseta oman"
		g="village-POSS road-POSS in go.SG and now so road along go.SG and so house.in go.SG"
		tr="she went on the road to her village, went along the road, and came to the house"
		cite="murasaki2001:text 25"
		dial="WS"
		place="Odasu (Asai Take)"
		note="Citation form ruu beside possessed ruwe-he in one sentence; kotan takes the lexical vowel u."
	/>
	<p>
		Two analyses of the suffix have been proposed. Chiri derives it historically from emphatic
		doubling of the final vowel with <i lang="ain">h</i> inserted to break the hiatus:
		<i lang="ain">ona</i>
		‘father’ → <i lang="ain">onaa</i> →
		<i lang="ain">onaha</i>, <i lang="ain">siki</i> → <i lang="ain">sikii</i> →
		<i lang="ain">sikihi</i>
		<Ref k="chiri1942" p="§18,2" paren />. Dal Corso, for the East coast, takes the underlying form
		to be <i lang="ain">-(i)hi</i>, with the first vowel of <i lang="ain">-VhV</i> an optional
		epenthesis resolving the consonant +
		<i lang="ain">h</i> cluster — supported by free variation of
		<i lang="ain">kotanuhu</i> and <i lang="ain">kotanhu</i> in Piłsudski's corpus — and with
		<i lang="ain">h</i>
		deletable after nasals, giving <i lang="ain">kotanu</i>
		<Ref k="dalcorso2024" p="66" paren />. The copy pattern of the West-coast data is stated most
		simply by Chiri's account, which we adopt for this grammar while noting that the East-coast
		variation favours Dal Corso's.
	</p>
</S>

<S t="Person prefixes and clitics before vowel-initial stems" id="prefix-sandhi">
	<p>
		The person markers (<Xr ch="person-and-alignment">Chapter 13</Xr>) end in a vowel (<i lang="ain"
			>ku= e= eci= i=</i
		>) or in <i lang="ain">n</i>
		(<i lang="ain">an=</i>), and their combination with vowel-initial stems is the main laboratory
		of hiatus resolution. Vowel-final markers simply stand before the stem vowel, which keeps its
		glottal onset: Chiri transcribes <i lang="ain">an-e</i> ‘we eat it’ as [aneː] and
		<i lang="ain">e-e</i>
		‘you eat it’ as [eeː], with the clitic vowel short and the accented stem vowel lengthened
		<Ref k="chiri1942" p="§1(2)" paren />; Murasaki's apostrophe spellings of the type
		<i lang="ain">'e'ani</i> ‘you’ make the same point for the 1960s data. In the nineteenth-century
		West-coast sentences recorded by Dobrotvorsky and in Sentoku Tarōji's letters the pattern is
		directly attested with <i lang="ain">an=</i> before vowel-initial stems.
	</p>
	<Ex
		m="ka ponno ponno cep ukoyki an=e=hci"
		g="even little little fish catch INDEF.A=eat=PL"
		tr="we catch and eat only a very little fish"
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
		note="an= stands directly before the vowel-initial stem e ‘eat’; no glide or elision applies."
	/>
	<Ex
		m="tan kotan ta eh renkayne an=e=nukara"
		g="this village in come.SG because INDEF.A=2SG.O=see"
		orig="Tan kotán ta eh renkáyne, an=è=núkara."
		tr="now that you have come to this village, I meet you"
		cite="dobrotvorsky1875; sakaguchi2021"
		dial="WS"
		place="West coast, central (recorded 1867–1872)"
		note="Two vowel-initial morphemes in sequence after an=; note also word-final eh ‘come’ (Hokkaidō ek)."
	/>
	<Ex
		m="e=i=ray-ki"
		g="2SG.A=INDEF.O=die-CAUS"
		orig="Eirájki."
		tr="you are killing me"
		cite="pilsudski1912:125; dalcorso2024:68"
		dial="ES"
		note="The 2SG marker e= before vowel-initial i=; in Piłsudski's connected transcription the three vowels run together."
	/>
	<p>
		Identical vowels at a marker boundary may coalesce: in Asai Take's tales
		<i lang="ain">eci=itak-ahci</i> ‘they call you’ is realised
		<i lang="ain">ecitakahci</i> (<Ref k="murasaki2001" p="text 14" paren />). We analyse this as
		the same-vowel contraction that Chiri documents inside compounds (<i lang="ain">keran</i>
		‘tasty’ from <i lang="ain">kera-an</i> ‘flavour-exist’,
		<i lang="ain">sinan</i> from <i lang="ain">sine-an</i> ‘a certain’;
		<Ref k="chiri1942" p="§14,1" paren />). Unlike vowels in derivation are instead separated by a
		glide that copies the frontness or rounding of the first vowel:
		<i lang="ain">i-uta</i> → <i lang="ain">iyuta</i> ‘pound (grain)’,
		<i lang="ain">u-osurpa</i> → <i lang="ain">uwosurpa</i> ‘throw one another away, divorce’ <Ref
			k="chiri1942"
			p="§15,1"
			paren
		/> — the same glide insertion seen in
		<i lang="ain">imi-yehe</i> and <i lang="ain">ruwe-he</i> above.
	</p>
	<p>
		The <i lang="ain">n</i>-final clitic <i lang="ain">an=</i> assimilates to a following sonorant:
		<i lang="ain">an=ye</i>
		‘we say’ is pronounced
		<i lang="ain">ayye</i>, <i lang="ain">an=wante</i> ‘we know’
		<i lang="ain">awwante</i>
		<Ref k="chiri1942" p="§16,3" paren />; before
		<i lang="ain">s</i> the nasal dissimilates to <i lang="ain">y</i>
		(<i lang="ain">ay-sike</i> from <i lang="ain">an=sike</i> ‘my load’), and before the
		desiderative the sequence <i lang="ain">an=kor rusuy</i> surfaces as
		<i lang="ain">an=kon rusuy</i> (§5.4). The corpus spelling
		<i lang="ain">an=yee</i> (<Ref k="tamura2003" paren />) is morphophonemic; we take the phonetic
		value to be [ayyee], following Chiri.
	</p>
</S>

<S t="r-alternations and the two kinds of -rV stems" id="r-alternations">
	<p>
		Since <i lang="ain">r</i> is banned from codas, a stem-final <i lang="ain">*r</i>
		surfaces with an echo of the preceding vowel: <i lang="ain">koro</i> ‘have’,
		<i lang="ain">nukara</i> ‘see’, <i lang="ain">mukara</i> ‘axe’,
		<i lang="ain">kisaru</i> ‘ear’ for Hokkaidō <i lang="ain">kor, nukar, mukar, kisar</i>; less
		commonly the <i lang="ain">r</i> joins the general coda neutralisation and yields
		<i lang="ain">h</i>, as in <i lang="ain">utah</i> beside
		<i lang="ain">utara</i> ‘people’ and <i lang="ain">mahnekuh</i> ‘woman’ (<Ref
			k="chiri1942"
			p="§16,4"
			paren
		/>; <Ref k="dalcorso2024" p="64" paren />). Word-internally the old clusters survive as
		<i lang="ain">h</i>
		+ stop:
		<i lang="ain">ohta</i> ‘at’ from <i lang="ain">or ta</i>,
		<i lang="ain">unahpe</i> ‘aunt’ <Ref k="tangiku1998" p="§3-2" paren />.
	</p>
	<p>
		Hattori took the echo vowel to be a real, historically added vowel, so that the Sakhalin verbs
		end in vowels and Hokkaidō preserves the older shape; Chiri treated it as an automatic
		repetition of the preceding vowel. <Ref k="tangiku1998" /> shows that for the West coast Chiri was
		right at the level of the underlying form: verbs in
		<i lang="ain">-rV</i> fall into two classes that behave differently under suffixation.
		<strong>Class I</strong>
		verbs are those whose Hokkaidō cognates end in coda <i lang="ain">r</i> — <A
			w="koro"
			gl="have"
		/> ~ <i lang="ain">kor</i>,
		<A w="nukara" gl="see" /> ~ <i lang="ain">nukar</i>, <i lang="ain">mokoro</i> ~
		<i lang="ain">mokor</i>: they are consonant-final at the deeper level, and their surface vowel
		is the epenthetic echo, inserted only to open the syllable.
		<strong>Class II</strong> verbs are vowel-final in Hokkaidō as well —
		<A w="tura" gl="accompany" />, <A w="poro" gl="be big" />,
		<A w="kira" gl="flee" /> — and their final vowel is lexical, part of the stem itself. Nothing in
		the citation forms tells the two apart; only their behaviour under suffixation does.
	</p>
	<table>
		<caption> Causative -te/-re with -rV verbs (Tangiku 1998: §4) </caption>
		<thead>
			<tr>
				<th colspan="2">Class I (underlying /‑r/): -te, with r → n</th>
				<th colspan="2">Class II (vowel-final): -re</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain">koro</i> ‘have’</td>
				<td><i lang="ain">konte</i> ‘give’</td>
				<td><i lang="ain">poro</i> ‘be big’</td>
				<td><i lang="ain">porore</i> ‘enlarge’</td>
			</tr>
			<tr>
				<td><i lang="ain">nukara</i> ‘see’</td>
				<td><i lang="ain">nukante</i> ‘show’</td>
				<td><i lang="ain">kira</i> ‘flee’</td>
				<td><i lang="ain">kirare</i> ‘let escape’</td>
			</tr>
			<tr>
				<td><i lang="ain">kara</i> ‘make’</td>
				<td><i lang="ain">kante</i> ‘have made’</td>
				<td><i lang="ain">tuuri</i> ‘stretch’</td>
				<td><i lang="ain">tuurire</i> ‘stretch (tr.)’</td>
			</tr>
			<tr>
				<td><i lang="ain">mokoro</i> ‘sleep’</td>
				<td><i lang="ain">mokonte</i> ‘put to sleep’</td>
				<td><i lang="ain">tura</i> ‘accompany’</td>
				<td><i lang="ain">turare</i> —</td>
			</tr>
		</tbody>
	</table>
	<p>
		The diagnostic environments are two. First, the causative: <i lang="ain">-te</i>
		attaches to consonant-final stems and <i lang="ain">-re</i> to vowel-final ones, and Class I
		<i lang="ain">koro, nukara, kara, mokoro</i>
		select <i lang="ain">-te</i>
		with the regular shift of <i lang="ain">r</i> to <i lang="ain">n</i> before it (<i lang="ain"
			>kor-te</i
		>
		→ <i lang="ain">konte</i>), while Class II
		<i lang="ain">poro, kira, tuuri</i> select <i lang="ain">-re</i> like any vowel-final stem <Ref
			k="tangiku1998"
			p="§4"
			paren
		/>. Lexicalised causatives preserve the same treatment: <i lang="ain">cinupunte</i> ‘ennoble’
		from
		<i lang="ain">ci-nupuru-te</i>
		<Ref k="tangiku1998" p="§4" paren />. Second, the desiderative <i lang="ain">rusuy</i> and
		<i lang="ain">rayki</i>
		‘long to’: after the same four verbs the two <i lang="ain">r</i>s dissimilate (<i lang="ain"
			>kon rusuy</i
		>, <i lang="ain">nukan rusuy</i>,
		<i lang="ain">mokon rayki</i>), whereas <i lang="ain">tura rusuy</i>,
		<i lang="ain">koore rusuy</i> keep their vowels <Ref k="tangiku1998" p="§3-4" paren />.
	</p>
	<Ex
		m="hemata e=kon rusuy hii"
		g="what 2SG.A=have DES Q"
		tr="what do you want?"
		cite="murasaki1979; tangiku1998:226"
		dial="WS"
		place="Rayciska"
	/>
	<Ex
		m="nean mahpoo-ho nukan rusuy kusu"
		g="that daughter-POSS see DES because"
		tr="because he wanted to see that daughter of theirs…"
		cite="murasaki1976; tangiku1998:226"
		dial="WS"
		place="Rayciska"
	/>
	<Ex
		m="tama in=konte"
		g="bead 1PL.EXCL.O=give"
		tr="you gave me a bead"
		cite="dobrotvorsky1875; sakaguchi2021"
		dial="WS"
		place="West coast, central (recorded 1867–1872)"
		note="konte from kor-te already in the 1860s data; in= is the exclusive object marker otherwise known from the East coast (Dal Corso 2024: 66–69)."
	/>
	<p>
		The shape of the alternation is itself a dialect diagnostic, perhaps the sharpest single one the
		verbal morphology offers. Hokkaidō causativises its
		<i lang="ain">r</i>-final stems with a third allomorph <i lang="ain">-e</i> —
		<i lang="ain">kor-e</i> ‘give’, <i lang="ain">nukar-e</i> ‘show’ — so the cognate verbs there
		never develop the nasal <Ref k="chiri1942" p="§55" paren />. Sakhalin lacks <i lang="ain">-e</i>
		entirely: a Class I stem takes <i lang="ain">-te</i>
		with <i lang="ain">r</i> → <i lang="ain">n</i> on both coasts, from Dobrotvorsky's 1860s
		sentences and Sentoku Tarōji's East-coast letters (<Ref k="tangiku2001" p="Letter 1" paren />)
		to Asai Take's tales a century later. A <i lang="ain">-rV</i> verb that yields a causative in
		<i lang="ain">-nte</i>
		or a desiderative in <i lang="ain">-n rusuy</i> is thereby identifiable as Sakhalin at a glance,
		and the pair <i lang="ain">konte</i> : <i lang="ain">kore</i> draws the isogloss between the two
		branches in a single word.
	</p>
	<p>
		The rules are ordered: suffixation of <i lang="ain">-te</i> and
		<i lang="ain">rusuy</i> applies to the consonant-final stem, then the echo vowel is inserted,
		and only then do the person-number suffixes attach
		<Ref k="tangiku1998" p="§7" paren />. Hence the plural of <i lang="ain">koro</i> is
		<i lang="ain">koro-hci</i>, with the post-vocalic allomorph <i lang="ain">-hci</i>
		rather than post-consonantal <i lang="ain">-ahci</i> (§5.5), and the desiderative likewise takes
		<i lang="ain">-ahci</i> outside it:
	</p>
	<Ex
		m="rayciska onne nean reekoh tumikoro e-ariki rusuy-ahci manuu"
		g="Rayciska to that very war.make APPL-come.PL DES-PL REP"
		tr="they say they very much wanted to come and make war on Rayciska"
		cite="murasaki1979; tangiku1998:231"
		dial="WS"
		place="Rayciska"
		note="The plural suffix attaches outside rusuy, which otherwise takes no person marking — evidence that rusuy is a suffix rather than an auxiliary (Tangiku 1998: §6)."
	/>
	<p>
		The deletion also has a sharp outer boundary. The causative and the desiderative belong to the
		verbal complex and reach the underlying stem, but the homophonous onset of the converb <i
			lang="ain">teh</i
		>
		‘and, having …-ed’ does not trigger the rule: <i lang="ain">koro teh</i> is never reduced to the
		expected sandhi outcome *<i lang="ain">koh teh</i>, although <i lang="ain">r</i> +
		<i lang="ain">t</i>
		yields <i lang="ain">ht</i> word-internally (§5.5)
		<Ref k="tangiku1998" p="225" paren />. In the ordering just given the echo vowel is in place
		before clause-level material attaches, and is then protected. The corpus bears the prediction
		out without exception: <i lang="ain">koro teh</i>,
		<i lang="ain">mokoro teh</i> and <i lang="ain">yaycisekoro teh</i> recur throughout the West-coast
		texts, and the reduced form never occurs — the affix/converb boundary is exactly where the rule stops.
	</p>
	<Ex
		m="neeteh taa rawpoka taa imii sohkara koro teh taa mokoro manu"
		g="and.then EMPH underneath EMPH garment bedding have and EMPH sleep REP"
		tr="and then she spread her garment underneath as bedding and slept"
		cite="murasaki2001:text 46"
		dial="WS"
		place="Odasu (Asai Take)"
		note="koro keeps its echo vowel before the converb teh (not *koh teh), though the same stem gives konte and kon rusuy; mokoro likewise stands in its full surface shape."
	/>
	<p>
		In Asai Take's Odasu tales the same morphology recurs (<i lang="ain">nukan rusuyahci</i> ‘they
		wanted to see’, <Ref k="murasaki2001" p="text 52" paren />), so the system holds across the
		West-coast dialects. A solitary counterexample is
		<i lang="ain">e-hecinte</i> ‘let play there’ from <i lang="ain">hecire</i> ‘dance, play’, the
		only verb in <i lang="ain">-V₁rV₂</i> with unlike vowels that takes
		<i lang="ain">-te</i>; Tangiku connects it with the East-coast and Hokkaidō variant
		<i lang="ain">heciri</i>
		<Ref k="tangiku1998" p="§5-2" paren />. The choice of echo vowel is occasionally lexical rather
		than copying — <i lang="ain">kisaru</i> ‘ear’ matches the Hokkaidō possessed stem
		<i lang="ain">kisar-u</i>
		<Ref k="tangiku2022" p="§2.4" paren />, and the possessed form
		<i lang="ain">kisaru-hu</i> appears in the Yamada Hayo corpus (<Ref k="tamura2003" paren />).
	</p>
</S>

<S t="Plural allomorphy and connected speech" id="plural-sandhi">
	<p>
		The verbal plural suffix has the shape <i lang="ain">-ahci</i> after consonants and
		<i lang="ain">-hci</i> after vowels, including inserted echo vowels:
		<i lang="ain">cis-ahci</i> ‘they wept’, <i lang="ain">itak-ahci</i> ‘they spoke’,
		<i lang="ain">tura-hci</i>, <i lang="ain">koro-hci</i>, <i lang="ain">ariki-hci</i>
		<Ref k="tangiku1998" p="§6" paren /> (see <Xr ch="number">Chapter 8</Xr>). Furukawa reports a
		Rayciska tendency for stems in <i lang="ain">u</i> to take
		<i lang="ain">-ahci</i> with vowel replacement (<i lang="ain">konupuru</i> →
		<i lang="ain">konupurahci</i> ‘they like it’), which the Odasu speaker does not share (<i
			lang="ain">yaykonopuru-hci</i
		>) — dialect or idiolect variation that the small corpus cannot resolve (<Ref
			k="furukawa1967"
			paren
		/>;
		<Ref k="tangiku1998" p="note" paren />).
	</p>
	<Ex
		m="husko ohta oyanrurukotan an manuyke sine horokewpo maci-hi tura eyaykotankoro-hci okay-ahci manu"
		g="old.time in Oyanruru.village exist.SG and one young.man wife-POSS with APPL.REFL.village.have-PL exist.PL-PL REP"
		tr="long ago there was the village of Oyanruru, and a man together with his wife had made it their home and lived there"
		cite="tamura2003"
		dial="SA"
		place="Yamada Hayo"
		note="Both allomorphs in one sentence: -hci after the echo vowel of koro, -ahci after consonant-final okay; maci-hi is the possessed form of mah ‘wife’ (§5.1)."
	/>
	<p>
		On the East coast the suffix shows further erosion: after monosyllabic open-syllable verbs the <i
			lang="ain">h</i
		>
		may drop (<i lang="ain">nu-ci</i> ‘they heard’ beside expected <i lang="ain">nu-hci</i>), a
		process never found in the West-coast sources
		<Ref k="dalcorso2024" p="65–66" paren />; Chiri had already noticed the conditioning, assigning
		<i lang="ain">-si -ci</i>
		to long-vowel stems and
		<i lang="ain">-hsi -hci</i> to short ones <Ref k="chiri1942" p="§41" paren />. The parallel
		deletion in the possessive (<i lang="ain">kotanu</i> for
		<i lang="ain">kotan-[h]u</i>) was noted in §5.2. Sentoku Tarōji writes
		<i lang="ain">itaku=hci</i> ‘they say’ with an East-coast support vowel where the West coast has
		<i lang="ain">itak-ahci</i>
		(<Ref k="tangiku2001" p="Letter 1" paren />) — we read his <i lang="ain">-u-</i> as the same
		cluster-resolving epenthesis that Dal Corso posits for <i lang="ain">-VhV</i>.
	</p>
	<p>
		Connected speech is governed by a small set of assimilations and dissimilations, most of them
		already catalogued by <Ref k="chiri1942" p="§§14–16" />:
		<i lang="ain">r</i> assimilates to a following <i lang="ain">n</i>
		(<i lang="ain">cise-kon-nispa</i> ‘master of the house’ from
		<i lang="ain">koro</i>), <i lang="ain">r</i> + <i lang="ain">t</i> gives
		<i lang="ain">tt</i> in Hokkaidō but <i lang="ain">ht</i> in Sakhalin (<i lang="ain"
			>kapah tuki</i
		>
		~ <i lang="ain">kapara tuki</i> ‘thin cup’),
		<i lang="ain">n</i> becomes <i lang="ain">m</i> before labials (<i lang="ain">pom mahpoo</i>
		‘little girl’), and <i lang="ain">n m</i> dissimilate to <i lang="ain">y</i> before
		<i lang="ain">s</i>
		(<i lang="ain">amay-su</i>
		‘rice pot’ from <i lang="ain">amam-su</i>; East-coast <i lang="ain">tuy śata</i>
		from <i lang="ain">tum sa ta</i> ‘in the middle’,
		<Ref k="dalcorso2024" p="65" paren />). Vowel contraction trims frequent collocations (<i
			lang="ain">setoko</i
		>
		from <i lang="ain">si-etoko</i> ‘ahead of oneself’), and <i lang="ain">h</i> flanked by a
		consonant and a vowel deletes (<i lang="ain">sinotoripi</i> from <i lang="ain">sinot-horipi</i>
		‘play-dance’)
		<Ref k="chiri1942" p="§§14–15" paren />.
	</p>
	<p>
		Reduplication, finally, is lexical rather than inflectional in the recorded material. Body-part
		and place nouns show fossilised doubling of a final root (<i lang="ain">etu-puy</i> ‘nose’ :
		<i lang="ain">etu-puy-puy</i>
		‘nostril’,
		<i lang="ain">supuy-puy</i> ‘anus’, <Ref k="chiri1942" p="§19,1" paren />), verb-stem
		reduplication marks plurality or iteration of the event (<Ref
			k="dalcorso2024"
			p="55–56"
			paren
		/>), and sound-symbolic doublets such as
		<i lang="ain">purupuru</i> carry the refrains of Asai Take's sung tales (<Ref
			k="murasaki2001"
			p="texts 34, 54"
			paren
		/>). We find no productive grammatical reduplication in the corpus: plurality is carried by
		<i lang="ain">-hci/-ahci</i>
		and suppletive stems (<Xr ch="number">Chapter 8</Xr>).
	</p>
</S>

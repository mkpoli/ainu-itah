<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	Sakhalin Ainu numerals fall into two formally distinct series: a bare
	<em>adnominal</em> series (<A w="sine" gl="one" />, <A w="tu" gl="two" />,
	<A w="re" gl="three" />…), which can only stand before a noun, and a
	<em>nominal</em> series derived from it (<A w="sineh" gl="one" />,
	<A w="tuh" gl="two" />, <A w="reh" gl="three" />…), which is used for counting and
	stands in the clause like any other noun. Chiri Mashiho
	<span lang="ja">知里真志保</span> built his classic account of Ainu numerals around
	exactly this opposition <Ref k="chiri1942" p="§§105–113" />, and the Sakhalin corpus
	bears it out throughout. On top of the inherited base-twenty arithmetic, the
	Sakhalin variety developed a productive decimal system around the borrowed base
	words <A w="kunkutu" gl="ten" /> and <A w="tanku" gl="hundred" /> — the fullest
	studies are Murasaki <Ref k="murasaki2009" paren /> and Sakaguchi
	<Ref k="sakaguchi2022" paren />. This chapter sets out the cardinal numerals
	(§10.1), the vigesimal system and the decimal innovation (§10.2), the counting of
	humans and other unit-noun constructions (§10.3), the general quantifiers (§10.4),
	numeral syntax and calculation practice (§10.5), and the expression of ordinal
	rank (§10.6).
</p>

<S t="Cardinal numerals one to ten" id="cardinals">
	<p>
		The basic numerals are adnominals: they modify a following noun and never stand
		alone as an argument <Ref k="chiri1942" p="§105" />. To count objects, or to use a
		numeral as a noun phrase by itself, the adnominal is nominalized with the
		&lsquo;thing&rsquo; suffix that appears as <i lang="ain">-h</i> after vowels and
		<i lang="ain">-pe</i> after consonants; the <i lang="ain">-h</i> of
		<i lang="ain">sineh</i>, <i lang="ain">tuh</i> corresponds to Hokkaidō
		<i lang="ain">-p</i> by the regular coda neutralisation described in
		<Xr ch="phonology">Chapter 4</Xr> <Ref k="chiri1942" p="§113" />,
		<Ref k="murasaki2009" p="74" paren />. Table 1 gives both series.
	</p>
	<table>
		<caption>
			The cardinal numerals 1–10. The Rayciska forms are those of Murasaki's course
			book and ultimately of Hattori's survey; divergent forms from other localities
			are noted. The adnominal series is identical across the island except for 4, 5,
			and 9.
		</caption>
		<thead>
			<tr><th></th><th>adnominal</th><th>nominal</th><th>sources</th></tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td><i lang="ain">sine</i></td>
				<td><i lang="ain">sineh</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; <Ref k="chiri1942" p="§106" paren />; both pervasive in the corpus, e.g. (1), (2)</td>
			</tr>
			<tr>
				<td>2</td>
				<td><i lang="ain">tu</i></td>
				<td><i lang="ain">tuh</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; corpus <i lang="ain">tuh pis</i>, see (3)</td>
			</tr>
			<tr>
				<td>3</td>
				<td><i lang="ain">re</i></td>
				<td><i lang="ain">reh</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; corpus <i lang="ain">re horokewpo</i> ‘three men’ <Ref k="murasaki2001" p="text 51" paren /></td>
			</tr>
			<tr>
				<td>4</td>
				<td><i lang="ain">iine</i></td>
				<td><i lang="ain">iineh</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; <Ref k="chiri1942" p="§106" paren /> (<i lang="ain">ine</i>)</td>
			</tr>
			<tr>
				<td>5</td>
				<td><i lang="ain">asne</i> ~ <i lang="ain">asisne</i></td>
				<td><i lang="ain">asneh</i> ~ <i lang="ain">asisneh</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; <i lang="ain">asisne</i> in the east and in Yamada Hayo's speech, cf. (12), <i lang="ain">asisneh</i> in Dobrotvorsky <Ref k="sakaguchi2022" p="69" paren /></td>
			</tr>
			<tr>
				<td>6</td>
				<td><i lang="ain">iwan</i></td>
				<td><i lang="ain">iwampe</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; corpus <i lang="ain">iwan monimahpo</i> ‘six girls’ <Ref k="murasaki2001" p="text 51" paren /></td>
			</tr>
			<tr>
				<td>7</td>
				<td><i lang="ain">arawan</i> ~ <i lang="ain">aruwan</i></td>
				<td><i lang="ain">arawampe</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; <i lang="ain">aruwan</i> in Yamabe's text, cf. <Ref k="sakaguchi2022" p="73" paren /></td>
			</tr>
			<tr>
				<td>8</td>
				<td><i lang="ain">tupesan</i></td>
				<td><i lang="ain">tupesampe</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; <Ref k="chiri1942" p="§112" paren /></td>
			</tr>
			<tr>
				<td>9</td>
				<td><i lang="ain">sinepisan</i> ~ <i lang="ain">sinepesan</i></td>
				<td><i lang="ain">sinepisampe</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; <i lang="ain">sinepesan</i> <Ref k="chiri1942" p="§112" paren /></td>
			</tr>
			<tr>
				<td>10</td>
				<td><i lang="ain">wan</i></td>
				<td><i lang="ain">wampe</i></td>
				<td><Ref k="murasaki2025" p="24–25" paren />; <Ref k="chiri1942" p="§106" paren /></td>
			</tr>
		</tbody>
	</table>
	<p>
		Murasaki records the nominal series as the counting chant itself:
		<i lang="ain">sineh, tuh, reh, iineh, asneh, iwampe, arawampe, tupesampe,
		sinepisampe, wampe</i> <Ref k="murasaki2025" p="24" />. Two points of variation
		cut across the table. First, &lsquo;five&rsquo;: the west-coast Rayciska form
		<A w="asneh" /> has simplified the cluster of expected
		<i lang="ain">*asisneh</i>, while Dobrotvorsky's mid-nineteenth-century west-coast
		records and east-Sakhalin speakers keep <i lang="ain">asisne(h)</i>
		<Ref k="murasaki2009" p="74" />, <Ref k="sakaguchi2022" p="69" paren />; both
		shapes occur in the corpus, cf. (12). Second, the final consonant: Naert's
		informants from Taraytomari and Nayro pronounced final <i lang="ain">-p</i>
		(<i lang="ain">sinep</i>), so the <i lang="ain">-h</i> shapes of Table 1 must not
		be projected onto every locality <Ref k="sakaguchi2022" p="69" />.
	</p>
	<p>
		The two series divide the labour cleanly in texts. The adnominal counts a
		following noun:
	</p>
	<Ex
		m="sine acahcipo taa mici-hi-hcin tura an manu"
		g="one old.woman EMPH grandchild-POSS-PL COMIT exist.SG REP"
		tr="An old woman lived there with her grandsons."
		cite="murasaki2001:text 51"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		The nominal form stands alone, as subject, object, or — very commonly —
		followed by the quantifier particles of <Xr ch="information-structure">Chapter
		24</Xr>:
	</p>
	<Ex
		m="neeteh tani taa sineh pateh taa an manu"
		g="and.then now EMPH one only EMPH exist.SG REP"
		tr="And then only one (of the dogs) was left."
		cite="murasaki2001:text 37"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		With &lsquo;two&rsquo; and &lsquo;three&rsquo; the West-coast narratives very
		often add the unit noun <A w="pis" gl="piece" /> — <i lang="ain">tuh pis</i>,
		<i lang="ain">reh pis</i> — whether the referents are objects or people; the
		combination is the default way Asai Take counts pairs (24 tokens of
		<i lang="ain">tuh pis</i> in her tales). Chiri records the same element for
		Hokkaidō as an optional extension <i lang="ain">tu-p(-pis)</i>
		<Ref k="chiri1942" p="§113" paren />.
	</p>
	<Ex
		m="neya monimahpo tuh pis taa ehahtaa-hci"
		g="that girl two piece EMPH dig.lily.roots-PL"
		tr="Those two girls went digging lily roots."
		cite="murasaki2001:text 19"
		dial="WS"
		place="Odasu (Asai Take)"
		note="tuh pis in apposition to the subject; for another example see (10) of Chapter 6."
	/>
	<p>
		<i lang="ain">sine</i> doubles as an indefinite article-like determiner
		&lsquo;a certain, one&rsquo; <Ref k="chiri1942" p="§115" />: story openings of the
		type <i lang="ain">sine horokewpo an manu</i> &lsquo;there was a man&rsquo; and
		the temporal formula <i lang="ain">sine too</i> &lsquo;one day&rsquo; (over a
		hundred tokens in the Asai corpus) are the normal way a new participant or scene
		is introduced. Beside <i lang="ain">sine</i>, the old proclitic
		<i lang="ain">ar-</i> &lsquo;one (of a pair)&rsquo; survives in fixed formations:
		&lsquo;once&rsquo; is <i lang="ain">ar-suy</i>, never
		<i lang="ain">*sine suy</i> <Ref k="chiri1942" p="§113" />.
	</p>
</S>

<S t="The vigesimal system and the decimal innovation" id="vigesimal">
	<p>
		From eleven to nineteen every recorded Sakhalin variety, from Dobrotvorsky's
		dictionary to Hattori's Rayciska survey, uses one and the same additive pattern:
		the unit numeral comes first, then <A w="ikasma" gl="to be left over" />, then
		<i lang="ain">wampe</i> &lsquo;ten&rsquo; — <i lang="ain">sineh ikasma
		wampe</i> &lsquo;eleven&rsquo;, <i lang="ain">tuh ikasma wampe</i>
		&lsquo;twelve&rsquo;, literally &lsquo;one left over, (and) ten&rsquo;
		<Ref k="chiri1942" p="§107" />, <Ref k="sakaguchi2022" p="70" />,
		<Ref k="murasaki2025" p="25" paren />. The element <i lang="ain">ikasma</i> is the
		ordinary verb &lsquo;be left over, remain&rsquo;, alive in the letters of Sentoku
		Tarōji <span lang="ja">千徳太郎治</span>:
	</p>
	<Ex
		m="kara ikasma ciki ihoku yahka pirika manuy"
		g="make be.left.over if sell though be.good REP"
		tr="If any are left over after making (them), they say it is fine to sell them."
		cite="tangiku2001:Letter 1"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<S t="The score hoh" id="score">
		<p>
			&lsquo;Twenty&rsquo; is <A w="hoh" gl="twenty" /> (Hokkaidō
			<i lang="ain">hot</i>), and unlike the numerals of Table 1 it is a noun; its
			adnominal is derived with <i lang="ain">-ne</i>, <i lang="ain">hohne</i>
			<Ref k="chiri1942" p="§108" />. The inherited system counts in scores:
			<i lang="ain">tu hoh</i> &lsquo;forty&rsquo;, <i lang="ain">asisne
			hoh</i> &lsquo;hundred&rsquo;, <i lang="ain">iwan hoh</i> &lsquo;hundred and
			twenty&rsquo; <Ref k="chiri1942" p="§109" />. The intervening tens are
			&lsquo;overcounted&rsquo; toward the next score with the applicative
			<i lang="ain">e-</i>: <i lang="ain">wan e-tu-hoh</i> &lsquo;thirty&rsquo;,
			literally &lsquo;ten (going) to forty&rsquo;
			<Ref k="chiri1942" p="§110" />, and units are undercounted with
			<i lang="ain">ikasma</i>, <i lang="ain">asisne ikasma hohne</i>
			&lsquo;twenty-five&rsquo; <Ref k="chiri1942" p="§111" paren />.
		</p>
		<p>
			The two devices are not in free variation: they divide each score at its
			midpoint. Below it, the count hangs from the score just passed — twenty-one to
			twenty-nine are <i lang="ain">ikasma</i>-forms on <i lang="ain">hohne</i>; above
			it, the count reaches for the score ahead — thirty-one is <i lang="ain">sine
			ikasma wan e-tu-hoh</i>, &lsquo;(one over ten) toward forty&rsquo;. Ochiai, who
			states the rule in these terms, observes that Hokkaidō and Sakhalin agree on the
			switch point in detail and therefore reconstructs the
			undercounting-to-overcounting alternation itself for late Proto-Ainu, rather
			than treating the <i lang="ain">e-</i> forms as a local elaboration; her closest
			typological parallels are the overcounted vigesimal systems of Tibeto-Burman
			languages <Ref k="ochiai2021" />.
		</p>
		<p>
			This machinery was fully productive in the west-coast speech that Dobrotvorsky
			recorded around Kusunnay in 1867–72 <Ref k="dobrotvorsky1875" paren />, and
			there it scales: <i lang="ain">hoh</i> serves as base only up to 199, and each
			higher base is the tenfold of the one below it
			<Ref k="sakaguchi2022" p="78–80" />.
		</p>
		<table>
			<caption>
				The scaling bases of Dobrotvorsky's vigesimal system (Kusunnay, 1867–72), as
				reconstructed by Sakaguchi (2022: 78–80). Each base is ten times the
				previous one, so the architecture is vigesimal in its bricks but decimal in
				its storeys; 400 and 8,000, the doubled values a pure score system would
				call for, are accordingly not bases at all.
			</caption>
			<thead>
				<tr><th>value</th><th>base</th><th>formation</th><th>serves as base for</th></tr>
			</thead>
			<tbody>
				<tr>
					<td>20</td>
					<td><i lang="ain">hoh</i></td>
					<td>inherited score</td>
					<td>20–199</td>
				</tr>
				<tr>
					<td>200</td>
					<td><i lang="ain">sinewano</i></td>
					<td>fused <i lang="ain">sine-wan-hoh</i> &lsquo;one ten of scores&rsquo;</td>
					<td>200–1,999</td>
				</tr>
				<tr>
					<td>2,000</td>
					<td><i lang="ain">waysinewano</i></td>
					<td>&lsquo;ten two-hundreds&rsquo;</td>
					<td>2,000 upward</td>
				</tr>
				<tr>
					<td>4,000,000</td>
					<td><i lang="ain">waysinewano waywanho</i></td>
					<td>2,000 × 2,000, multiplicative</td>
					<td>ceiling of the record</td>
				</tr>
			</tbody>
		</table>
		<p>
			At the top the dictionary simply multiplies the largest base into itself —
			<i lang="ain">waysinewano waywanho</i> &lsquo;four million&rsquo;, a figure far
			beyond anything recorded for Hokkaidō <Ref k="sakaguchi2022" p="79–80" />. Below
			the bases, units are slotted in with <i lang="ain">ikasma</i> at each level:
		</p>
		<Ex
			m="sineh ikasma sinehoh ikasma sinewano"
			g="one be.left.over one.score be.left.over two.hundred"
			tr="two hundred and twenty-one"
			cite="dobrotvorsky1875:305; sakaguchi2022:79"
			dial="WS"
			place="Kusunnay area"
			note="Dobrotvorsky writes ⟨sine⟩; the final -h is supplied by Sakaguchi."
		/>
	</S>
	<S t="The decimal bases kunkutu, tanku, wantanku" id="decimal">
		<p>
			Alongside this, every source from Dobrotvorsky onward attests a decimal system
			built on <A w="kunkutu" gl="ten" /> and <A w="tanku" gl="hundred" />, which are
			nouns usable directly as numerals. Their origin is partly clear:
			<i lang="ain">tanku</i> matches Manchu–Tungusic words for
			&lsquo;hundred&rsquo; (Manchu <i lang="ain">tanggū</i>) and Piłsudski was told
			it came from the &lsquo;Olcha&rsquo; with the marten-trapping trade
			<Ref k="pilsudski1912" p="141" />, <Ref k="murasaki2009" p="75" paren />, while
			<i lang="ain">kunkutu</i> has no good Tungusic match and may be an internal
			Ainu word pressed into service for trade counting
			<Ref k="sakaguchi2022" p="66" />. By the twentieth century the decimal forms
			had displaced the scores everywhere: Naert's mid-century informants from
			Taraytomari and Nayro knew only <i lang="ain">kunkutu</i> forms for
			&lsquo;thirty&rsquo;, and his Rayciska informant offered <i lang="ain">wanpe
			ikasma sine hoh</i> only as an archaism <Ref k="sakaguchi2022" p="71" />.
			Hattori's dictionary likewise lists <i lang="ain">hohne</i> &lsquo;twenty&rsquo;
			as &lsquo;elders' speech&rsquo; (<i lang="ain">onne itah</i>)
			<Ref k="hattori1964" p="262" />, <Ref k="murasaki2009" p="74" paren />.
		</p>
		<table>
			<caption>
				The decimal series (Rayciska), after Hattori's survey as tabulated by
				Murasaki; the same forms recur in Laufer's 1899 east-coast list and
				Kindaichi's 1907 records as reviewed by Sakaguchi.
			</caption>
			<thead>
				<tr><th></th><th>form</th><th>sources</th></tr>
			</thead>
			<tbody>
				<tr>
					<td>10</td>
					<td><i lang="ain">wampe</i></td>
					<td><Ref k="murasaki2025" p="25" paren />; <Ref k="hattori1964" p="262" paren />; never <i lang="ain">*sine kunkutu</i> <Ref k="murasaki2009" p="74" paren /></td>
				</tr>
				<tr>
					<td>20</td>
					<td><i lang="ain">tu kunkutu</i> (elders <i lang="ain">hohne</i>)</td>
					<td><Ref k="murasaki2025" p="25" paren />; <Ref k="hattori1964" p="262" paren /></td>
				</tr>
				<tr>
					<td>30</td>
					<td><i lang="ain">re kunkutu</i></td>
					<td><Ref k="murasaki2025" p="25" paren />; <Ref k="sakaguchi2022" p="71" paren /></td>
				</tr>
				<tr>
					<td>50</td>
					<td><i lang="ain">asne kunkutu</i></td>
					<td><Ref k="murasaki2025" p="25" paren /></td>
				</tr>
				<tr>
					<td>100</td>
					<td><i lang="ain">sine tanku</i></td>
					<td><Ref k="murasaki2025" p="25" paren />; <Ref k="chiri1942" p="§112" paren /></td>
				</tr>
				<tr>
					<td>110</td>
					<td><i lang="ain">sine tanku orowa wampe</i></td>
					<td><Ref k="hattori1964" p="264" paren />; <Ref k="sakaguchi2022" p="76" paren /></td>
				</tr>
				<tr>
					<td>200</td>
					<td><i lang="ain">tu tanku</i></td>
					<td><Ref k="murasaki2025" p="25" paren /></td>
				</tr>
				<tr>
					<td>1,000</td>
					<td><i lang="ain">sine wantanku</i></td>
					<td><Ref k="murasaki2025" p="25" paren />; <Ref k="sakaguchi2022" p="72–73" paren /></td>
				</tr>
				<tr>
					<td>2,000</td>
					<td><i lang="ain">tu wantanku</i></td>
					<td><Ref k="murasaki2025" p="25" paren />; also from an Odasan speaker in 1967 <Ref k="sakaguchi2022" p="73" paren /></td>
				</tr>
			</tbody>
		</table>
		<p>
			Note the asymmetry preserved at &lsquo;ten&rsquo;: the bare decade is the
			native <i lang="ain">wampe</i>, never <i lang="ain">*sine kunkutu</i>; the
			borrowed base begins at twenty <Ref k="murasaki2009" p="74" />,
			<Ref k="sakaguchi2022" p="71–72" paren />. &lsquo;Thousand&rsquo; is the
			transparent compound <i lang="ain">wantanku</i> &lsquo;ten hundreds&rsquo;, so
			Murasaki could elicit the year 2008 as <i lang="ain">tu wantanku orowa tupesan
			paa</i> &lsquo;two thousand and then eight years&rsquo;
			<Ref k="murasaki2009" p="75" paren />.
		</p>
		<p>
			The decimal system in running text is best observed in the autobiography that
			Yamabe Yasunosuke <span lang="ja">山辺安之助</span> dictated in 1912
			(<span lang="ja">あいぬ物語</span>), analysed in detail by Sakaguchi. Score
			forms do occur there, mostly with years and days:
		</p>
		<Ex
			m="meiji iwan paa ikasma hohne paa nee paakehe"
			g="Meiji six year be.left.over twenty year COP year.POSS"
			tr="the year Meiji 26 (= 1893)"
			cite="sakaguchi2022:73"
			dial="ES"
			place="Yamabeci (Yamabe Yasunosuke)"
			note="From Yamabe's あいぬ物語 (1913: 5); hohne too ‘twenty days’ recurs there twice. Only six hoh-forms occur in the whole book, against sixteen with tu kunkutu."
		/>
		<p>
			But the workaday counting is decimal, and the same value can be assembled in
			two ways — by bare juxtaposition on the Sino-Japanese model, or with native
			<i lang="ain">ikasma</i>:
		</p>
		<Ex
			m="tu kunkuto asisne aynu"
			g="two ten five person"
			tr="twenty-five men"
			cite="sakaguchi2022:75"
			dial="ES"
			place="Yamabeci (Yamabe Yasunosuke)"
			note="あいぬ物語 p. 114."
		/>
		<Ex
			m="tu kunkutu ikasma asisne aynu"
			g="two ten be.left.over five person"
			tr="twenty-five men"
			cite="sakaguchi2022:75"
			dial="ES"
			place="Yamabeci (Yamabe Yasunosuke)"
			note="あいぬ物語 p. 18 — the same value as (7), built with ikasma; Murasaki (1979: 88) records the mirror order sineh ikasma tu kunkutu ‘21’ from Rayciska, so the decade constructions wavered even within one speaker's usage."
		/>
		<Ex
			m="tupesan tanku asisne kunkutu aynu"
			g="eight hundred five ten person"
			tr="eight hundred and fifty people"
			cite="chiri1942:§112; sakaguchi2022:77"
			dial="ES"
			place="Yamabeci (Yamabe Yasunosuke)"
		/>
		<p>
			Large sums show the two systems interleaved. In Chiri's example of current
			usage the hundreds are counted by a score:
		</p>
		<Ex
			m="tu ikasma hoh tanku sinepesan kunkutu iine komaska"
			g="two be.left.over twenty hundred nine ten four money"
			tr="2,294 yen"
			cite="chiri1942:§112"
			dial="SA"
			note="The first three words form a unit: [tu ikasma hoh] ‘22’ multiplies tanku — ‘22 hundreds, 9 tens, 4’ (Sakaguchi 2022: 80–81)."
		/>
		<p>
			No base for &lsquo;ten thousand&rsquo; is recorded anywhere
			<Ref k="hattori1964" p="265" paren />, <Ref k="sakaguchi2022" p="64" paren />;
			beyond a thousand, speakers either stretch the multiplier — adnominal
			<i lang="ain">hohne</i> &lsquo;twenty-fold&rsquo; on
			<i lang="ain">wantanku</i> — or juxtapose number nouns as an outright
			multiplication:
		</p>
		<Ex
			m="hohne wantanku re kunkutu wantanku pahno an ikoro"
			g="twenty.times thousand three ten thousand as.much.as exist.SG money"
			tr="money amounting to twenty or thirty thousand yen"
			cite="sakaguchi2022:74"
			dial="ES"
			place="Yamabeci (Yamabe Yasunosuke)"
			note="hohne wantanku ‘20×1000’ uses the adnominal of hoh as a coefficient; re kunkutu wantanku ‘30×1000’ juxtaposes the number noun ‘thirty’ with ‘thousand’ — Sakaguchi's ‘multiplicative’ type."
		/>
	</S>
</S>

<S t="Counting humans and other unit nouns" id="classifiers">
	<p>
		Hokkaidō Ainu counts humans with a dedicated series in <i lang="ain">-n</i> (after
		vowels) and <i lang="ain">-iw</i> (after consonants): <i lang="ain">sinen</i>,
		<i lang="ain">tun</i>, <i lang="ain">iwaniw</i> <Ref k="chiri1942" p="§113" />.
		For Sakhalin, Murasaki states that this series is absent and that humans are
		counted with adnominal numeral plus <A w="aynu" gl="person" /> —
		<i lang="ain">sine aynu</i> &lsquo;one person&rsquo;, <i lang="ain">iwan
		aynu</i> &lsquo;six people&rsquo; <Ref k="murasaki2009" p="75" />,
		<Ref k="murasaki2025" p="25" paren />. The corpus does confirm the
		<i lang="ain">aynu</i> pattern as the productive one:
	</p>
	<Ex
		m="asisne aynu ka iwan aynu ka an"
		g="five person even six person even exist.SG"
		tr="There were as many as five or six people."
		cite="tamura2003"
		dial="SA"
		place="Yamada Hayo"
	/>
	<p>
		The statement of absence does not survive the record, however. Sentoku's
		east-coast letters use <i lang="ain">sinen</i> in a negative-polarity idiom:
	</p>
	<Ex
		m="sinen ka isan"
		g="one.person even not.exist"
		tr="There is not even a single person (left)."
		cite="tangiku2001:Letter 2"
		dial="ES"
		place="Otasan (Sentoku Tarōji)"
	/>
	<p>
		More decisively, Chiri — whose grammar describes Sakhalin, not Hokkaidō — sets
		the bound series out as a complete paradigm: <i lang="ain">sinen</i>,
		<i lang="ain">tun</i>, <i lang="ain">ren</i>, <i lang="ain">inen</i>,
		<i lang="ain">asiknen</i> with <i lang="ain">-n</i> after vowels, then
		<i lang="ain">iwaniw</i>, <i lang="ain">arawaniw</i>, <i lang="ain">tupesaniw</i>,
		<i lang="ain">sinepesaniw</i>, <i lang="ain">waniw</i> with <i lang="ain">-iw</i>
		after consonants, closed by the interrogative <i lang="ain">hempakiw</i>
		&lsquo;how many people&rsquo; <Ref k="chiri1942" p="§113" />. These are his stated
		Sakhalin forms, and they do duty in his plain prose examples:
	</p>
	<Ex
		m="menoko sine-n ek"
		g="woman one-CL.HUM come"
		tr="One woman came."
		cite="chiri1942:§113"
		dial="SA"
	/>
	<p>
		The bound counter even supplies the unit half of the additive teen frame, where
		the counted noun is named only once:
	</p>
	<Ex
		m="tu-n ikasma wan ci-yupi"
		g="two-CL.HUM be.left.over ten 1PL-elder.brother"
		tr="my twelve elder brothers"
		cite="chiri1942:§114"
		dial="SA"
		note="The unit slot holds the bound form tun, not tu aynu; the head noun yupi appears once, on the ten."
	/>
	<p>
		The narrative corpus agrees with Chiri rather than with the claim of absence. In
		Asai Take's tale of the boat-builders, the flying chips are counted off in a
		chant <i lang="ain">sinen kuh ray, tunne kuh ray, renne kuh ray</i> &lsquo;one man
		dead, two men dead, three men dead&rsquo; <Ref k="murasaki2001" p="text 32" paren />,
		preserving <i lang="ain">sinen</i> and, we take it, <i lang="ain">tun</i> and
		<i lang="ain">ren</i> extended by <i lang="ain">-ne</i>; and Piłsudski's
		east-coast corpus has <i lang="ain">iwan-niw</i> &lsquo;six (rowers)&rsquo; in a
		clause that also shows <i lang="ain">aynu enko</i> &lsquo;half of the men&rsquo;
		with <A w="enko" gl="half" /> <Ref k="pilsudski1998" p="287" />,
		<Ref k="dalcorso2024" p="75" paren />. Sakhalin therefore kept <em>both</em>
		strategies side by side: the inherited, phonologically conditioned
		<i lang="ain">-n/-iw</i> counter — complete in Chiri, persisting in chants,
		formulae, and the low numerals — and the transparent innovation with
		<i lang="ain">aynu</i>, which had become the default by the last-recorded
		generation. Murasaki's &lsquo;absent&rsquo; captures the end state of that
		competition among her Rayciska informants, not a gap in the variety; the pairing
		of an opaque inherited counter with a semantically transparent renewal is a
		familiar one cross-linguistically, and here the renewal won.
	</p>
	<p>
		Other unit nouns combine with the adnominal series in the same way as
		<i lang="ain">pis</i> and <i lang="ain">aynu</i>. Days: <i lang="ain">sine
		too</i> &lsquo;one day&rsquo;, <i lang="ain">iwan too</i> &lsquo;six days&rsquo;,
		with suppletive <i lang="ain">tutko</i>, <i lang="ain">rerko</i> &lsquo;two,
		three days&rsquo; <Ref k="chiri1942" p="§113" paren />. Years and months:
		<i lang="ain">paa</i> and <i lang="ain">cuh</i>, as in (7) and in Sentoku's
		<i lang="ain">sine cup okta</i> &lsquo;per month&rsquo;
		<Ref k="tangiku2001" p="Letter 1" paren />. Times: <i lang="ain">suy</i>, with
		<i lang="ain">ar-suy</i> &lsquo;once&rsquo; (§10.1). Fathoms:
		<i lang="ain">tem</i>, in the corpus fused in <i lang="ain">iwanten
		kosonto</i> &lsquo;a six-fathom robe&rsquo; <Ref k="murasaki2001" p="text 51" paren />.
		Chiri further records a Sakhalin-only collective <A w="atuyta" gl="ten head of game" />
		for counting catch <Ref k="chiri1942" p="§113" paren />.
	</p>
</S>

<S t="Quantifiers" id="quantifiers">
	<p>
		The general quantifiers are adverb-like words that stand before the verb or
		before the noun phrase they measure. &lsquo;Many, in numbers&rsquo; is
		<A w="poronno" gl="many" /> (from <i lang="ain">poro</i> &lsquo;big&rsquo;) and,
		in the West-coast narratives, above all <A w="renkayne" gl="plenty" />, which in
		Asai Take's tales is the routine word for &lsquo;in great numbers&rsquo; (64
		corpus tokens) and which Murasaki's course book likewise uses for
		&lsquo;a lot&rsquo; <Ref k="murasaki2025" p="22" paren />; its other, clause-linking
		life (&lsquo;because of&rsquo;) is taken up in
		<Xr ch="postpositions">Chapter 11</Xr>.
	</p>
	<Ex
		m="teki-hi-cin ohta neya ay ne kun-pe poronno uyna"
		g="hand-POSS-PL LOC that arrow COP should-NMLZ many take.PL"
		tr="In his hands he grabbed up many of the things that were to be those arrows."
		cite="pilsudski1912:70; chiri1942:§67"
		dial="ES"
	/>
	<Ex
		m="neya kamuy utah renkayne wahka ohta hecire-hci wa okay-ahci manu"
		g="that god PL plenty water LOC dance-PL and exist.PL-PL REP"
		tr="Those gods were dancing in crowds in the water."
		cite="murasaki2001:text 46"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		&lsquo;A little&rsquo; is <A w="ponno" gl="a little" /> (from
		<i lang="ain">pon</i> &lsquo;small&rsquo;), often reduplicated
		<i lang="ain">ponno ponno</i> &lsquo;just a little&rsquo;
		<Ref k="murasaki2001" p="text 39" paren />:
	</p>
	<Ex
		m="naa ponno naycaata sanke kusu"
		g="more a.little riverbank-LOC move.shoreward PURP"
		tr="I will bring it a little closer to the bank."
		cite="murasaki2001:text 25"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		&lsquo;All&rsquo; is expressed by <A w="okore" gl="all" /> — the high-frequency
		exhaustive of the West-coast corpus, &lsquo;all of them, completely&rsquo;
		(<Xr ch="number">Chapter 8</Xr>) — and by <A w="emuyke" gl="all" />, which
		quantifies over a preceding noun phrase:
	</p>
	<Ex
		m="kawre nii emuyke ci-kehke wa …"
		g="wither tree all RES-break and …"
		tr="the withered trees all snapped, and …"
		cite="tamura2003"
		dial="SA"
		place="Yamada Hayo"
	/>
	<p>
		Hokkaidō-type <i lang="ain">opitta</i> &lsquo;all&rsquo; is absent from the
		Sakhalin corpus; Chiri cites it only from Hokkaidō sources, distinguishing it from
		<i lang="ain">epitta</i> &lsquo;all over&rsquo;
		<Ref k="chiri1942" p="§123(104), (131)" paren />. Negative quantification uses
		<i lang="ain">ka</i> &lsquo;even&rsquo; with the negative existential, as in (13)
		and <i lang="ain">nee aynu ka isam</i> &lsquo;there is nobody&rsquo;
		<Ref k="murasaki2025" p="17" paren />; see <Xr ch="negation">Chapter 17</Xr>. The
		interrogative quantifier is <A w="hempah" gl="how many" /> (adverbial
		<i lang="ain">hempahno</i> &lsquo;how much&rsquo;,
		<Ref k="murasaki2025" p="24" paren />), which with following
		<i lang="ain">ka</i> yields an indefinite plural: <i lang="ain">hempah too ka</i>
		&lsquo;for some days&rsquo;, <i lang="ain">hempah poo ka korohci</i>
		&lsquo;they had several children&rsquo; <Ref k="murasaki2001" p="texts 48, 12" paren />.
	</p>
</S>

<S t="Numeral syntax and calculation" id="syntax">
	<p>
		Within the noun phrase the adnominal numeral immediately precedes its noun
		(<i lang="ain">re horokewpo</i> &lsquo;three men&rsquo;), like any other
		adnominal of <Xr ch="word-classes">Chapter 6</Xr>. When a counted noun phrase is
		built additively, the classical pattern repeats the noun or replaces its first
		occurrence with a nominal numeral: <i lang="ain">sine-p ikasma wan suma</i>
		&lsquo;eleven stones&rsquo;, literally &lsquo;one (thing) left over, ten
		stones&rsquo; <Ref k="chiri1942" p="§114" />. With the borrowed bases this
		constraint lapses — <i lang="ain">kunkutu</i> and <i lang="ain">tanku</i> are
		themselves nouns, so the counted noun follows the whole numeral phrase without
		being repeated, as in (7)–(9) <Ref k="sakaguchi2022" p="75–76" />.
	</p>
	<p>
		Used without a noun, the nominal numerals function as floating quantifiers in
		apposition to an argument, as in (3) and (4); the distributive particle
		<i lang="ain">ranke</i> &lsquo;each&rsquo; <Ref k="chiri1942" p="§125(172)" paren />
		combines with them:
	</p>
	<Ex
		m="re horokewpo sineh ranke sam"
		g="three man one each marry"
		tr="The three men each took one (of the girls) as wife."
		cite="murasaki2001:text 51"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		As for calculation practice, Sakaguchi's survey shows a system that could be
		operated at scale. Addition within a base is handled by
		<i lang="ain">ikasma</i> and, between bases, by <i lang="ain">orowa</i>
		&lsquo;and then&rsquo; — <i lang="ain">sine tanku orowa sineh ikasma wampe</i>
		&lsquo;111&rsquo; <Ref k="hattori1964" p="264" paren />,
		<Ref k="sakaguchi2022" p="76" paren />: <i lang="ain">orowa</i> marks the point
		where the otherwise descending sequence of values gives way to the fixed
		ascending unit-<i lang="ain">ikasma</i>-ten block. Multiplication is expressed
		either by an adnominal coefficient (<i lang="ain">hohne wantanku</i>
		&lsquo;20,000&rsquo;) or by juxtaposing number nouns
		(<i lang="ain">re kunkutu wantanku</i> &lsquo;30,000&rsquo;, (11));
		Dobrotvorsky's dictionary runs the same devices up to
		<i lang="ain">waysinewano waywanho</i> &lsquo;4,000,000&rsquo;
		<Ref k="sakaguchi2022" p="79–80" />. The trade context that drove this — counting
		marten pelts and cash — is visible in the dictionary's own glosses, where
		<i lang="ain">kunkutu</i> and <i lang="ain">tanku</i> first appear as tallies of
		marten snares <Ref k="sakaguchi2022" p="66" />, and in the money counting of
		Murasaki's conversation course, <i lang="ain">sine wantanku en</i>
		&lsquo;a thousand yen&rsquo; <Ref k="murasaki2025" p="24" paren />.
	</p>
</S>

<S t="Ordinals" id="ordinals">
	<p>
		There is no ordinal affix. The Hokkaidō pattern with <i lang="ain">ikin
		ne</i> (<i lang="ain">iwan ikin ne</i> &lsquo;sixth&rsquo;) has no Sakhalin
		counterpart: the cognate <i lang="ain">ikinne</i> survives only in its older
		adverbial sense &lsquo;in a row, all together&rsquo; (<i lang="ain">sine
		ikinne</i> &lsquo;all as one&rsquo;), never as an ordinal former
		<Ref k="chiri1942" paren />. The previous descriptions give no Sakhalin ordinal
		paradigm, and the texts show why none was there to elicit: ranking is handled by
		two lexical items at the salient low end and by nothing at all above them. This
		section is our generalisation from the corpus.
	</p>
	<p>
		&lsquo;First&rsquo; is suppletive. It is carried by the positional
		<A w="hoski" gl="first" /> &lsquo;first, earlier&rsquo; (adverbial
		<i lang="ain">hoskino</i>), with no formal connection to <i lang="ain">sine</i>
		&lsquo;one&rsquo; — the same dissociation of &lsquo;first&rsquo; from
		&lsquo;one&rsquo; seen in English <em>first</em> or Latin <em>prīmus</em>. Its
		standing narrative opposite is <i lang="ain">yooponi</i> &lsquo;later,
		after&rsquo;:
	</p>
	<Ex
		m="hoski tah-ci nii ka an yooponi tah-ci-pe ka an"
		g="first cut-PL tree even exist.SG later cut-PL-NMLZ even exist.SG"
		tr="There was wood they had cut earlier, and wood they had cut later."
		cite="murasaki2001:text 34"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		&lsquo;Second, the next&rsquo; is the single derived form,
		<i lang="ain">(i)otutanu</i>, built on <i lang="ain">tu</i> &lsquo;two&rsquo;
		(cf. Hokkaidō <i lang="ain">(o)tutanu</i>); in the Asai corpus it names the
		second-eldest of a set of siblings. For sets, the lexical series
		<i lang="ain">kiyanne</i> &lsquo;eldest&rsquo;, <i lang="ain">inoskun</i>
		&lsquo;middle&rsquo;, <i lang="ain">poniwne</i> &lsquo;youngest&rsquo; does the
		same work — the standard framing of the three-brother tales
		<Ref k="murasaki2001" p="text 5" paren />.
	</p>
	<p>
		From &lsquo;third&rsquo; on, the bare adnominal cardinal stands before the noun
		and the ordinal reading comes from the narrative sequence alone. In Asai's tale
		the hero works through the corners of a house one by one, and the third is simply
		<i lang="ain">re</i> &lsquo;three&rsquo;:
	</p>
	<Ex
		m="re cise-he sihkew kaari iciw"
		g="three house-POSS corner via stab"
		tr="He stabbed through the third corner of the house."
		cite="murasaki2001:text 92"
		dial="WS"
		place="Odasu (Asai Take)"
		note="Bare adnominal re read as ‘third’ from the running count of corners in the tale."
	/>
	<p>
		The Sakhalin ordinal system is thus suppletive at the bottom and zero-marked
		above: <i lang="ain">hoski(no)</i> &lsquo;first&rsquo;,
		<i lang="ain">(i)otutanu</i> &lsquo;second, next&rsquo;, and thereafter the plain
		cardinal disambiguated by the order in which the referents were introduced —
		typologically the commonest of ordinal systems, since &lsquo;first&rsquo; (and
		often &lsquo;second&rsquo;) are cross-linguistically the positions most prone to
		suppletion while the rest of the series goes unmarked.
	</p>
</S>

<script lang="ts">
	import { S, Ex, Ref, A, Xr } from '$lib/grammar/components';
</script>

<p>
	This book is a reference grammar of Sakhalin Ainu, the branch of the Ainu language family
	spoken on the southern half of Sakhalin until the late twentieth century and documented in
	a record that runs from the 1860s to the 1990s. It is organised to be consulted rather
	than read straight through: six parts lead from the speakers and their history through
	phonology and morphology to the syntax of the complex clause, and every numbered example
	is glossed, sourced, and tagged for dialect. This chapter explains how the book works —
	what it sets out to do (<a href="#aims">§0.1</a>), what data it admits and under what
	conventions (<a href="#commitments">§0.2</a>), how a numbered example is put together
	(<a href="#examples">§0.3</a>), what the dialect labels mean and which variety is the
	default (<a href="#dialect-labels">§0.4</a>), and whose scholarship the description rests
	on (<a href="#scholarship">§0.5</a>).
</p>

<S t="Aims and scope" id="aims">
	<p>
		Sakhalin Ainu has been described in parts, but never whole. Chiri planned a complete
		grammar and finished only the phonology and a portion of the morphology
		<Ref k="chiri1942" paren />; Murasaki described the sound system and morphology of a
		single west-coast variety, Rayciska <Ref k="murasaki1979" paren />; the recent
		literature treats individual subsystems — evidentiality, negation, person marking,
		number — one article or dissertation at a time. The aim of this book is the obvious
		missing item: a single, systematically organised description of the language from
		phoneme to discourse, written in English, in which each statement can be traced to the
		evidence for it.
	</p>
	<p>
		Two consequences of that aim shape the text. First, the grammar is a synthesis where a
		synthesis is possible: points established by earlier scholars are credited to them by
		name and page, and the reader should be able to move from any paragraph here to the
		passage of Chiri, Murasaki, Piłsudski, or Dal Corso that stands behind it. Second,
		where the literature is silent — and for much of the syntax it is — the grammar does
		not merely record the silence. It analyses the texts directly and states its own
		conclusion, marked as such, so that a gap in previous research becomes a description
		that later work can confirm or correct. The data underneath such analyses remain
		attested; only the analysis is new.
	</p>
	<p>
		The grammar treats Sakhalin Ainu as a system in its own right, not as a divergent
		dialect of the better-described Hokkaidō varieties. No knowledge of Hokkaidō Ainu is
		assumed, and Hokkaidō forms appear only where an explicit comparison sharpens the
		Sakhalin picture — most often in phonology (<Xr ch="phonology">Chapter 4</Xr>), where
		the correspondences are systematic, and in the verb, where the two branches have
		grammaticalised differently (<Xr ch="person-and-alignment">Chapter 13</Xr>,
		<Xr ch="evidentiality">Chapter 16</Xr>).
	</p>
</S>

<S t="Data and conventions" id="commitments">
	<p>
		Every numbered example in this grammar is attested unless it carries the explicit label
		<em>constructed example</em>. Constructed material is used sparingly — to complete a
		paradigm table or to spell out the prediction of an analysis first made here — and is
		never the sole support for a descriptive claim. The attested examples come from the
		published record of the language: Piłsudski’s <em>Materials</em>
		<Ref k="pilsudski1912" paren />, the texts embedded in Dobrotvorsky’s dictionary
		<Ref k="dobrotvorsky1875" paren /> in Sakaguchi’s edition <Ref k="sakaguchi2021" paren />,
		the letters of Sentoku Tarōji <Ref k="tangiku2001" paren />, the folktales of Asai Take
		<Ref k="murasaki2001" paren />, the post-war recordings and elicited sentences of
		Hattori and Murasaki, and the examples of the grammatical literature itself. The full
		inventory, with an assessment of what each source can and cannot show, is given in
		<Xr ch="dialects-and-sources" s="corpus">Chapter 2</Xr>.
	</p>
	<p>
		Examples are glossed morpheme by morpheme after the Leipzig Glossing Rules
		<Ref k="comrie2015" paren />. Each grammatical gloss is set in small capitals and
		expands on hover; the complete list, with the handful of additions this grammar makes
		for Sakhalin-specific categories, is kept on the
		<a href="/grammar/abbreviations">abbreviations page</a>, and the build of this site
		checks every gloss in every example against that list, so the two cannot drift apart.
	</p>
	<p>
		Citation runs in an unbroken chain. A statement in the prose is supported by a numbered
		example; the example cites its source down to the page, text, or letter; author–year
		citations such as <Ref k="chiri1942" p="§76" /> link to the
		<a href="/grammar/references">references</a>, where works that could only be consulted
		second-hand are flagged as reported. In the other direction, every morpheme in an
		example, and every italicised Ainu form in the prose such as
		<A w="cise" gl="house" />, links to its entry in the dictionary of this site, which in
		turn indexes the corpus attestations of the word. The reader who distrusts a claim is
		meant to be able to reach the primary record without leaving the page’s links.
	</p>
</S>

<S t="How to read an example" id="examples">
	<p>The following, from a Tarayka tale in Piłsudski’s collection, shows all the parts.</p>
	<Ex
		m="emuyke ray-ahci"
		g="all die-PL"
		ain="Emújke rajaxći."
		tr="They all died."
		cite="pilsudski1912:text 2, l. 4"
		dial="ES"
		place="Tarayka (Sisratoka)"
	/>
	<p>
		The number in parentheses counts examples within the chapter; cross-references in the
		prose use it. The first line, in italics, is the sentence as the source prints it —
		here Piłsudski’s own transcription, with his accent marks and his <i lang="ain">x</i>
		for the velar realisation of the coda we write <i lang="ain">h</i>. When source
		spelling and our romanisation coincide, this line is omitted. The second line is the
		morphemic segmentation in the romanisation of this grammar
		(<Xr ch="orthography" s="romanisation">Chapter 3</Xr>): a hyphen separates affixes, as
		in <i lang="ain">ray-ahci</i> ‘die’ plus the plural suffix, and an equals sign marks
		clitics. Each piece links to its dictionary entry.
	</p>
	<p>
		Beneath it, the gloss line gives one gloss per word: lexical glosses in lower case
		(‘all’, ‘die’), grammatical categories in small capitals (PL), each of the latter
		expandable by hovering. Then comes the free translation in single quotes, sometimes
		followed by a literal rendering marked <em>lit.</em> where the idiom and the
		morphology pull apart. The last line is the source: the citation
		(Piłsudski 1912, text 2, line 4), the dialect tag (<a href="#dialect-labels">§0.4</a>),
		and, where known, the locality and the speaker — here Sisratoka of Tarayka. Some
		examples close with a small-print note on points the gloss cannot carry, such as the
		note on <i lang="ain">-ahci</i> spelt <i lang="ain">-axći</i> in
		<Xr ch="texts">Chapter 26</Xr>, where this tale is glossed in full.
	</p>
</S>

<S t="Dialect labels and the West-coast baseline" id="dialect-labels">
	<p>
		Sakhalin Ainu was not uniform: the record splits, broadly, into a west-coast and an
		east-coast dialect group, surveyed in
		<Xr ch="dialects-and-sources" s="dialect-division">Chapter 2</Xr>. Every example in
		this grammar carries one of three tags.
	</p>
	<table>
		<caption>Dialect tags used on examples</caption>
		<thead>
			<tr>
				<th>Tag</th>
				<th>Variety</th>
				<th>Chief sources</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>WS</td>
				<td>West Sakhalin: Rayciska, Odasu, Maoka, Tarantomari, and neighbours</td>
				<td>Murasaki’s and Hattori’s recordings; the Asai Take folktales</td>
			</tr>
			<tr>
				<td>ES</td>
				<td>East Sakhalin: Tarayka, Otasan, Ay, Tunayci, and neighbours</td>
				<td>Piłsudski’s <em>Materials</em>; the Sentoku letters</td>
			</tr>
			<tr>
				<td>SA</td>
				<td>Sakhalin, not further localisable</td>
				<td>early wordlists; generalising statements in the literature</td>
			</tr>
		</tbody>
	</table>
	<p>
		Unmarked descriptive statements in the prose describe the west-coast varieties. This is
		a policy, not a judgement of importance: the west coast is where the twentieth-century
		record is deepest, with sound recordings, elicitation, and a described phonology, so it
		is the only variety for which negative evidence — the claim that something does
		<em>not</em> occur — carries weight. East-coast data are flagged ES wherever they
		diverge from the baseline or supply what the west-coast record lacks; since no
		descriptive grammar of any east-coast dialect exists, Piłsudski’s texts and Sentoku’s
		letters must serve there in place of recordings. A WS example for comparison with the
		ES example above:
	</p>
	<Ex
		m="mukara ani sitayki ike mukara-ha kotahma"
		g="axe INS hit and axe-POSS stick"
		tr="He struck it with an axe, and his axe stuck fast."
		cite="murasaki2001:text 35"
		dial="WS"
		place="Odasu (Asai Take)"
	/>
	<p>
		Hokkaidō Ainu is not a dialect of this grammar’s object language and receives no tag;
		where a Hokkaidō form is cited for contrast, the prose says so explicitly, and the
		references page marks Hokkaidō-centred works as such. Nothing from Hokkaidō is ever
		silently folded into the description of Sakhalin.
	</p>
</S>

<S t="The scholarship behind this grammar" id="scholarship">
	<p>
		The documentation of Sakhalin Ainu is the work of a short and traceable line of
		scholars, and this grammar is best read as the latest link in it. The first substantial
		record is Dobrotvorsky’s dictionary of 1875, compiled on the west coast while Sakhalin
		was a Russian penal colony <Ref k="dobrotvorsky1875" paren />. The largest body of
		connected text is owed to Bronisław Piłsudski, whose <em>Materials</em> of 1912
		transcribe and translate east-coast narratives collected in 1902–1905
		<Ref k="pilsudski1912" paren />. Chiri Mashiho then gave the language its first
		linguistic grammar, the 1942 <i lang="ja">アイヌ語法研究</i>, written with the Sakhalin
		dialect at its centre though never carried as far as syntax
		<Ref k="chiri1942" paren />.
	</p>
	<p>
		After the war, Hattori Shirō brought the methods of structural phonology and dialect
		geography to the surviving speakers, producing the comparative dialect dictionary and
		the first systematic account of Sakhalin person marking
		<Ref k="hattori1964" paren />, <Ref k="hattori1961" paren />. From the 1960s Murasaki
		Kyōko recorded the last fluent generation on the west coast — above all Asai Take, the
		final native speaker, who died in 1994 — and published the materials, the grammar, and
		the folktale corpus that anchor the modern study of the language
		<Ref k="murasaki1976" paren />, <Ref k="murasaki1979" paren />,
		<Ref k="murasaki2001" paren />.
	</p>
	<p>
		The present generation has re-edited the old records and pushed the analysis into
		territory the documenters never treated: Anna Bugaeva on nominalisation and Ainu
		typology at large <Ref k="bugaeva2016" paren />, <Ref k="bugaeva2022" paren />, Elia
		Dal Corso on evidentiality, alignment, and the Piłsudski and Murasaki corpora
		<Ref k="dalcorso2018" paren />, <Ref k="dalcorso2024" paren />, Sakaguchi Ryō on
		number, numerals, and the philology of the early sources
		<Ref k="sakaguchi2021" paren />, <Ref k="sakaguchi2024" paren />, and Tangiku Itsuji on
		the Sentoku letters and the Sakhalin–Hokkaidō divide <Ref k="tangiku2001" paren />,
		<Ref k="tangiku2022" paren />. The full history of this research, source by source, is
		the subject of <Xr ch="dialects-and-sources" s="previous-research">Chapter 2</Xr>.
	</p>
</S>

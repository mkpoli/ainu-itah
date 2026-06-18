<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>About · Aynu Itah</title>
	<meta
		name="description"
		content="About Aynu Itah — a dictionary and reference grammar of Sakhalin (Karafuto) Ainu: what it is, its sources and method, how to cite it, and its licence."
	/>
	<meta property="og:title" content="About · Aynu Itah" />
	<meta property="og:type" content="website" />
</svelte:head>

<article class="prose prose-stone mx-auto max-w-screen-md px-4 py-8">
	<h1>About Aynu Itah</h1>

	<p>
		<strong>Aynu Itah</strong> (<i lang="ain">aynu itah</i>, “the Ainu language”) is a free, open
		resource for <strong>Sakhalin Ainu</strong> — the variety of Ainu once spoken across the
		southern half of Sakhalin island (<span lang="ja">樺太</span> <i>Karafuto</i>,
		<span lang="ru">Сахалин</span>), which its speakers called <i lang="ain">enciw itah</i>. It has
		two halves: a searchable <a href="/">dictionary</a> and a modern
		<a href="/grammar">reference grammar</a>.
	</p>

	<h2>The dictionary</h2>
	<p>
		The dictionary collects Sakhalin Ainu words with their Japanese, English, and Russian glosses.
		Each headword is shown in three scripts (Latin, kana, and Cyrillic), with its part of speech,
		corpus frequency, demoted word-forms (possessed, plural, valency-changed, and so on), and —
		where they exist — its same-etymon correspondences in Hokkaidō Ainu. Every entry has its own
		page (for example <a href="/w/cise">cise</a>) that you can link to and cite, and links out to
		the <a href="https://kampisos.aynu.io/" target="_blank" rel="noopener">Kampisos</a> corpus, where
		each word can be seen in attested sentences.
	</p>
	<p>
		Frequencies are counted over the digitised text corpus; the headword list is compiled from the
		published lexicographic record (below) and reconciled against that corpus. Forms and Hokkaidō
		correspondences are added by analysis and are marked as attested or reconstructed.
	</p>

	<h2>The reference grammar</h2>
	<p>
		The <a href="/grammar">grammar</a> is a full-length English-language reference description of
		Sakhalin Ainu — phonology, morphology, and syntax — with interlinear examples drawn from
		attested texts, glossed by the Leipzig rules, and linked back to this dictionary. See its
		<a href="/grammar">preface</a> and <a href="/grammar/references">references</a> for sources and method.
	</p>

	<h2>Sources</h2>
	<p>The dictionary draws on, among others:</p>
	<ul>
		<li>
			公益財団法人アイヌ民族文化財団「単語リスト（アイヌ語・日本語）：カラフト」 (the FF-Ainu
			Karafuto word list)
		</li>
		<li>日本語ウィクショナリー「カテゴリ:アイヌ語」 (Japanese Wiktionary)</li>
		<li>富田隆『アイヌ語電子辞書』 (Tomita Takashi, <i>Ainu electronic dictionary</i>)</li>
		<li>
			村崎恭子 編訳『浅井タケ昔話全集 I, II』 (Murasaki Kyōko, ed., <i>Asai Take folktales</i>)
		</li>
		<li>
			the <a href="https://kampisos.aynu.io/" target="_blank" rel="noopener">Kampisos</a> text corpus,
			for frequencies and attestations
		</li>
	</ul>

	<h2>How to cite</h2>
	<p>
		Aynu Itah. 2026. <cite>A dictionary of Sakhalin Ainu</cite>. Online:
		<a href="https://itah.aynu.org/">https://itah.aynu.org/</a> (accessed [date]).
	</p>

	<h2>Licence</h2>
	<p>
		The site’s content and dictionary data are released under
		<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener"
			>Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)</a
		>: you may share and adapt them, including commercially, provided you give attribution and
		release any derivative under the same licence. The underlying source materials remain the
		property of their respective authors and publishers; please also credit the sources listed above
		where relevant.
	</p>

	<h2>Contributing &amp; contact</h2>
	<p>
		Corrections and additions are welcome. Join the
		<a href="https://discord.gg/sJRXq3Gspm" target="_blank" rel="noopener">{m.discord()}</a>, or
		find more Ainu-language projects at
		<a href="https://aynu.org/" target="_blank" rel="noopener">Aynu.org</a>.
	</p>
</article>

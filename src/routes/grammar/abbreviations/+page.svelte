<script lang="ts">
	import { abbreviations, dialectLabels } from '$lib/grammar/abbreviations';

	const entries = Object.entries(abbreviations).sort(([a], [b]) => a.localeCompare(b));
</script>

<svelte:head>
	<title>Abbreviations and conventions — A Grammar of Sakhalin Ainu</title>
	<meta
		name="description"
		content="Gloss abbreviations, transcription conventions, and dialect tags used in the grammar of Sakhalin Ainu."
	/>
</svelte:head>

<article class="grammar-chapter">
	<h1><span class="ch-num">Back matter</span>Abbreviations and conventions</h1>

	<h2>Interlinear glossing</h2>
	<p>
		Interlinear examples follow the Leipzig Glossing Rules. In the morphemic line, a hyphen
		<i>-</i> separates affixes from stems and an equals sign <i>=</i> marks clitic boundaries.
		In the gloss line, grammatical categories appear in small capitals and lexical glosses in
		lower case; a period joins several gloss elements that correspond to a single unsegmentable
		morpheme (as in <i>an</i> ‘exist.<abbr title="singular">SG</abbr>’). Every Ainu word and
		morpheme in an example is linked to the dictionary of this site, and every example carries
		its source and a dialect tag.
	</p>
	<p>
		An asterisk <i>*</i> marks an ungrammatical form; a preceding question mark marks a form of
		doubtful acceptability. Examples labelled <em>constructed example</em> are illustrations
		assembled for expository purposes and are not attested utterances; all other examples are
		attested in the cited source.
	</p>

	<h2>Gloss abbreviations</h2>
	<table>
		<thead>
			<tr><th>Abbreviation</th><th>Meaning</th></tr>
		</thead>
		<tbody>
			{#each entries as [tag, def]}
				<tr id={`abbr-${tag}`}>
					<td><span class="tag">{tag}</span></td>
					<td>{def}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<h2>Dialect tags</h2>
	<table>
		<thead>
			<tr><th>Tag</th><th>Meaning</th></tr>
		</thead>
		<tbody>
			{#each Object.entries(dialectLabels) as [tag, def]}
				<tr>
					<td>{def.split(' (')[0]}</td>
					<td
						>{tag === 'WS'
							? 'Examples from West-coast varieties (Rayciska, Esutoru, Otasu, Odasu and neighbouring settlements).'
							: tag === 'ES'
								? 'Examples from East-coast varieties (Ay, Otasan, Tunayci, Ociho, Tarayka and neighbouring settlements).'
								: 'Examples whose locality is not recorded or which hold across Sakhalin varieties.'}</td
					>
				</tr>
			{/each}
		</tbody>
	</table>

	<h2>Other conventions</h2>
	<ul>
		<li>
			Ainu forms are cited in the romanisation set out in the chapter on orthography; phonemic
			representations appear between slashes and phonetic ones in square brackets.
		</li>
		<li>
			Japanese and Russian names and titles are given in the original script at first mention,
			e.g. <span lang="ja">樺太</span> <i>Karafuto</i>, <span lang="ru">Сахалин</span>
			<i>Sakhalin</i>.
		</li>
		<li>
			Section references of the form §4.3 point within the present grammar; chapter titles are
			linked in the running text.
		</li>
	</ul>

	<nav class="ch-nav" aria-label="Chapter navigation">
		<span><a href="/grammar/texts">← 25. Glossed texts</a></span>
		<span><a href="/grammar/references">References →</a></span>
	</nav>
</article>

<style>
	.tag {
		font-variant-caps: all-small-caps;
		letter-spacing: 0.04em;
	}
</style>

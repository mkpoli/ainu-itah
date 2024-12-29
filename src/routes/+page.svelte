<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import DictionaryTable from '$lib/components/DictionaryTable.svelte';
	import { CANONICAL_HOSTNAME } from '$lib/consts';
	import Footer from '$lib/components/Footer.svelte';
	import { languageTag, type AvailableLanguageTag } from '$lib/paraglide/runtime';

	let wikipediaLink: Record<AvailableLanguageTag, string> = {
		ja: 'https://ja.wikipedia.org/wiki/%E6%A8%BA%E5%A4%AA%E3%82%A2%E3%82%A4%E3%83%8C%E8%AA%9E',
		en: 'https://en.wikipedia.org/wiki/Sakhalin_Ainu_language',
		ru: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B9%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA', // TODO: Add Sakhalin Ainu to Russian Wikipedia
		'ain-Cyrl': 'https://wiki.aynu.org/ain/Karapto_Aynuitak', // TODO: Add Cyrillic conversion to Aynuwiki
		'ain-Latn': 'https://wiki.aynu.org/ain/Karapto_Aynuitak',
		'ain-Kana': 'https://wiki.aynu.org/ain-kana/Karapto_Aynuitak'
	};
</script>

<svelte:head>
	<title>{m.aynu_itah()}</title>
	<meta name="description" content={m.aynu_itah_description()} />
	<meta
		name="keywords"
		content="アイヌ語, 樺太アイヌ語, サハリンアイヌ語, 辞典, 言語復興, 辞書, Ainu, Sakhalin Ainu, Ainu Language, Language Revitalization, Dictionary, Ainu Dictionary, Словарь, Соловарь, Айну, Сахалинский айнский язык, Сахалин"
	/>
	<meta property="og:title" content={m.aynu_itah()} />
	<meta property="og:description" content={m.aynu_itah_description()} />
	<meta property="og:image" content={new URL('/og.png', CANONICAL_HOSTNAME).toString()} />
	<meta property="og:url" content={CANONICAL_HOSTNAME} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Aynu Itah" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.aynu_itah()} />
	<meta name="twitter:description" content={m.aynu_itah_description()} />
	<meta name="twitter:creator" content="@mkpoli" />
	<meta name="twitter:image" content={new URL('/og.png', CANONICAL_HOSTNAME).toString()} />
</svelte:head>

<LanguageSwitcher />

<h1 class="my-10 text-center text-3xl font-bold">{m.aynu_itah()}</h1>

<p class="text-center">
	<a href={wikipediaLink[languageTag()]} target="_blank" class="text-blue-500 hover:underline">
		{#if languageTag() === 'ja'}
			ウィキペディア - 樺太アイヌ語
		{:else if languageTag() === 'en'}
			Wikipedia - Sakhalin Ainu language
		{:else if languageTag() === 'ru'}
			Википедия - Айнский язык
		{:else if languageTag() === 'ain-Latn'}
			Aynuwiki - Karapto Aynuitak
		{:else if languageTag() === 'ain-Kana'}
			Aynuwiki - カラㇷ゚ト・アイヌイタㇵ
		{:else if languageTag() === 'ain-Cyrl'}
			Айнувики - Карапто Айнуитак
		{/if}
	</a>
</p>

<h2 class="my-6 text-center text-2xl font-bold">{m.dictionaries()}</h2>

<DictionaryTable />

<h3 class="my-4 text-center text-xl font-bold">{m.kanpi()}</h3>

<ul class="mx-auto my-4 max-w-screen-md list-inside list-disc">
	<li>
		<a
			class="text-blue-500 hover:underline"
			href="https://www.ff-ainu.or.jp/web/potal_site/files/karahuto_tango.pdf"
			target="_blank"
		>
			公益財団法人アイヌ文化振興・研究推進機構「単語リスト（アイヌ語・日本語）：カラフト」
		</a>
	</li>
	<li>
		<a
			class="text-blue-500 hover:underline"
			href="https://ja.wiktionary.org/wiki/%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA:%E3%82%A2%E3%82%A4%E3%83%8C%E8%AA%9E"
		>
			日本語ウィクショナリー「カテゴリ:アイヌ語」
		</a>
	</li>
	<li>
		<a
			class="text-blue-500 hover:underline"
			href="http://tommy1949.world.coocan.jp/aynudictionary.htm"
		>
			富田隆 - アイヌ語電子辞書
		</a>
	</li>
</ul>

<Footer />

<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import DictionaryTable from '$lib/components/DictionaryTable.svelte';
	import { CANONICAL_HOSTNAME } from '$lib/consts';
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
<h2 class="my-10 text-center text-xl font-bold">{m.dictionaries()}</h2>

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
</ul>

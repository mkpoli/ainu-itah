<script lang="ts">
	import { languageTag, type AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	const LANGUAGE_LABELS = {
		'ain-Cyrl': 'Айну',
		'ain-Latn': 'Aynu',
		'ain-Kana': 'アイヌ',
		ru: 'Русский',
		ja: '日本語',
		en: 'English'
	};
</script>

<nav class="mx-auto my-4 flex w-auto justify-center gap-2 text-xs">
	{#each Object.keys(LANGUAGE_LABELS) as language}
		<button
			class="border border-gray-300 px-2 py-1 data-[active=true]:bg-gray-300"
			data-active={languageTag() === language}
			onclick={() => switchToLanguage(language as AvailableLanguageTag)}
		>
			{LANGUAGE_LABELS[language as keyof typeof LANGUAGE_LABELS]}
		</button>
	{/each}
</nav>

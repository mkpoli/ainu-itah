<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n';
	import {
		availableLanguageTags,
		languageTag,
		type AvailableLanguageTag
	} from '$lib/paraglide/runtime';
	import { goto } from '$app/navigation';

	// Same labels/order as the old standalone LanguageSwitcher, now in the shared header.
	const LANGUAGE_LABELS: Record<AvailableLanguageTag, string> = {
		'ain-Cyrl': 'Айну',
		'ain-Latn': 'Aynu',
		'ain-Kana': 'アイヌ',
		ru: 'Русский',
		ja: '日本語',
		en: 'English'
	};

	// Nav <a href> values are CANONICAL (unprefixed): ParaglideJS rewrites them to
	// the current locale at render, so they keep the user in their language.
	// Switching to a DIFFERENT locale can't go through an href (Paraglide would
	// re-localize it to the current one), so the switcher navigates with goto(),
	// resolving the target route at click time where i18n.route() strips correctly.
	function switchTo(lang: AvailableLanguageTag) {
		goto(i18n.resolveRoute(i18n.route($page.url.pathname), lang));
	}

	// Detection only (reading the path is fine; it's emitting hrefs that double-prefixes).
	function delocalize(pathname: string): string {
		const seg = pathname.split('/')[1];
		return (availableLanguageTags as readonly string[]).includes(seg)
			? pathname.slice(seg.length + 1) || '/'
			: pathname || '/';
	}
	const inGrammar = $derived(delocalize($page.url.pathname).startsWith('/grammar'));
</script>

<header class="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
	<div class="mx-auto flex max-w-screen-lg flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5">
		<a href="/" class="text-sm font-bold tracking-wide text-gray-900 dark:text-gray-100"
			>Aynu Itah</a
		>
		<nav class="flex items-center gap-4 text-sm" aria-label="Aynu Itah">
			<a
				href="/"
				class="hover:text-blue-800 hover:underline dark:hover:text-blue-300 {!inGrammar
					? 'font-semibold text-blue-900 dark:text-blue-300'
					: 'text-gray-600 dark:text-gray-400'}"
				aria-current={!inGrammar ? 'page' : undefined}>{m.dictionaries()}</a
			>
			<a
				href="/grammar"
				class="hover:text-blue-800 hover:underline dark:hover:text-blue-300 {inGrammar
					? 'font-semibold text-blue-900 dark:text-blue-300'
					: 'text-gray-600 dark:text-gray-400'}"
				aria-current={inGrammar ? 'page' : undefined}>{m.reference_grammar()}</a
			>
		</nav>
		<div class="ml-auto flex flex-wrap gap-1 text-xs" role="group" aria-label="Language">
			{#each Object.keys(LANGUAGE_LABELS) as lang}
				<button
					type="button"
					class=" border border-gray-300 px-1.5 py-0.5 hover:bg-gray-100 data-[active=true]:bg-gray-800 data-[active=true]:text-white dark:border-gray-700 dark:hover:bg-gray-800 dark:data-[active=true]:bg-gray-200 dark:data-[active=true]:text-gray-900"
					data-active={languageTag() === lang}
					aria-current={languageTag() === lang ? 'true' : undefined}
					onclick={() => switchTo(lang as AvailableLanguageTag)}
					>{LANGUAGE_LABELS[lang as keyof typeof LANGUAGE_LABELS]}</button
				>
			{/each}
		</div>
	</div>
</header>

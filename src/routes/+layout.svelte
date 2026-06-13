<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { page } from '$app/stores';
	import { availableLanguageTags, sourceLanguageTag } from '$lib/paraglide/runtime';
	import { CANONICAL_HOSTNAME } from '$lib/consts';
	import '../app.css';
	let { children } = $props();

	const OG_IMAGE = new URL('/og.png', CANONICAL_HOSTNAME).toString();

	// Self-referencing canonical and the hreflang cluster for the current page.
	const canonicalPath = $derived(i18n.route($page.url.pathname));
	const canonicalUrl = $derived(new URL($page.url.pathname, CANONICAL_HOSTNAME).toString());
	const alternates = $derived(
		availableLanguageTags.map((tag) => ({
			tag,
			href: new URL(i18n.resolveRoute(canonicalPath, tag), CANONICAL_HOSTNAME).toString()
		}))
	);
	const xDefaultUrl = $derived(
		new URL(i18n.resolveRoute(canonicalPath, sourceLanguageTag), CANONICAL_HOSTNAME).toString()
	);

	const websiteJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'A Grammar of Sakhalin Ainu',
		alternateName: 'Aynu Itah',
		url: CANONICAL_HOSTNAME,
		description:
			'A modern reference grammar of Sakhalin (Karafuto) Ainu — Enciw itah — with corpus-attested, glossed examples.',
		inLanguage: 'en',
		publisher: { '@type': 'Organization', name: 'Aynu Itah', url: CANONICAL_HOSTNAME }
	};
	const websiteJsonLdScript =
		'<' + 'script type="application/ld+json">' + JSON.stringify(websiteJsonLd) + '<\/script>';
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	{#each alternates as alt}
		<link rel="alternate" hreflang={alt.tag} href={alt.href} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={xDefaultUrl} />
	<meta property="og:site_name" content="A Grammar of Sakhalin Ainu" />
	<meta property="og:image" content={OG_IMAGE} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={OG_IMAGE} />
	{@html websiteJsonLdScript}
</svelte:head>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>

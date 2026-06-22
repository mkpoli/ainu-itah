// Shared sitemap building blocks. The site uses a sitemap *index*
// (/sitemap.xml) that points at two child sitemaps: content pages
// (/sitemap-pages.xml, with per-locale hreflang clusters) and the ~2.5k
// dictionary entry pages (/sitemap-words.xml). Splitting keeps each file small
// and lets crawlers fetch the rarely-changing word list independently.

import { CANONICAL_HOSTNAME } from '$lib/consts';
import { availableLanguageTags } from '$lib/paraglide/runtime';
import { parts, appendices } from '$lib/grammar/toc';
import data from '$lib/data.json';

export function href(tag: string, path: string): string {
	return new URL(`/${tag}${path}`, CANONICAL_HOSTNAME).toString();
}

export function absolute(path: string): string {
	return new URL(path, CANONICAL_HOSTNAME).toString();
}

/** Language-prefixed content paths (one per locale gets its own <url>). */
export function contentPaths(): { path: string; priority: string }[] {
	const grammarPages = parts.flatMap((p) =>
		p.chapters.map((c) => ({ path: `/grammar/${c.slug}`, priority: '0.8' }))
	);
	const appendixPages = appendices.map((a) => ({ path: `/grammar/${a.slug}`, priority: '0.5' }));
	return [
		{ path: '', priority: '1.0' },
		{ path: '/grammar', priority: '0.9' },
		...grammarPages,
		...appendixPages
	];
}

/** hreflang alternates for one content path, across every language + x-default. */
export function alternates(path: string): string {
	const links = availableLanguageTags.map(
		(tag) => `<xhtml:link rel="alternate" hreflang="${tag}" href="${href(tag, path)}"/>`
	);
	links.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${href('en', path)}"/>`);
	return links.join('');
}

/** Entry-page slugs: the homograph id when present, else the bare lemma. */
export function wordSlugs(): string[] {
	return (data as { lemma: string; id?: string }[]).map((e) => e.id ?? e.lemma);
}

export function urlset(body: string): string {
	return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>`;
}

export const xml = (s: string) =>
	new Response(s, { headers: { 'Content-Type': 'application/xml' } });

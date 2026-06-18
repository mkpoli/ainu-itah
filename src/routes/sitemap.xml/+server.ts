import { CANONICAL_HOSTNAME } from '$lib/consts';
import { availableLanguageTags } from '$lib/paraglide/runtime';
import { parts, appendices } from '$lib/grammar/toc';
import data from '$lib/data.json';

/**
 * Content page paths without a language prefix. Every path is served under each
 * language tag (prefixDefaultLanguage: 'always'), so the sitemap lists each
 * path once per language with a full set of hreflang alternates.
 */
function contentPaths(): { path: string; priority: string }[] {
	const grammarPages = parts.flatMap((p) =>
		p.chapters.map((c) => ({ path: `/grammar/${c.slug}`, priority: '0.8' }))
	);
	const appendixPages = appendices.map((a) => ({
		path: `/grammar/${a.slug}`,
		priority: '0.5'
	}));
	return [
		{ path: '', priority: '1.0' },
		{ path: '/grammar', priority: '0.9' },
		...grammarPages,
		...appendixPages
	];
}

function href(tag: string, path: string): string {
	return new URL(`/${tag}${path}`, CANONICAL_HOSTNAME).toString();
}

/** hreflang alternates for one content path, across every language + x-default. */
function alternates(path: string): string {
	const links = availableLanguageTags.map(
		(tag) => `<xhtml:link rel="alternate" hreflang="${tag}" href="${href(tag, path)}"/>`
	);
	links.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${href('en', path)}"/>`);
	return links.join('');
}

function generateSitemap(): string {
	const lastmod = new Date().toISOString().slice(0, 10);
	const urls = contentPaths().flatMap(({ path, priority }) =>
		availableLanguageTags.map(
			(tag) =>
				`<url><loc>${href(tag, path)}</loc>${alternates(path)}<lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`
		)
	);
	// Each dictionary entry's /w/[lemma] page, listed once at the English locale
	// (the per-page hreflang cluster from the root layout links the other locales).
	const wordUrls = (data as { lemma: string }[]).map((e) => {
		const loc = new URL(`/en/w/${encodeURIComponent(e.lemma)}`, CANONICAL_HOSTNAME).toString();
		return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`;
	});
	return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${[...urls, ...wordUrls].join('\n')}
</urlset>`;
}

export const prerender = true;

export async function GET() {
	return new Response(generateSitemap(), {
		headers: { 'Content-Type': 'application/xml' }
	});
}

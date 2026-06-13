import { CANONICAL_HOSTNAME } from '$lib/consts';
import { availableLanguageTags, sourceLanguageTag } from '$lib/paraglide/runtime';
import { parts, appendices } from '$lib/grammar/toc';

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
	links.push(
		`<xhtml:link rel="alternate" hreflang="x-default" href="${href(sourceLanguageTag, path)}"/>`
	);
	return links.join('');
}

function generateSitemap(): string {
	const urls = contentPaths().flatMap(({ path, priority }) =>
		availableLanguageTags.map(
			(tag) =>
				`<url><loc>${href(tag, path)}</loc>${alternates(path)}<changefreq>weekly</changefreq><priority>${priority}</priority></url>`
		)
	);
	return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls.join('\n')}
</urlset>`;
}

export const prerender = true;

export async function GET() {
	return new Response(generateSitemap(), {
		headers: { 'Content-Type': 'application/xml' }
	});
}

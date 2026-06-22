import { CANONICAL_HOSTNAME } from '$lib/consts';
import { wordSlugs, urlset, xml } from '$lib/sitemap';

// Every dictionary entry's /w/[slug] page, listed once at the English locale
// (the per-page hreflang cluster from the root layout links the other locales).
export const prerender = true;

export function GET() {
	const lastmod = new Date().toISOString().slice(0, 10);
	const urls = wordSlugs().map((slug) => {
		const loc = new URL(`/en/w/${encodeURIComponent(slug)}`, CANONICAL_HOSTNAME).toString();
		return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`;
	});
	return xml(urlset(urls.join('\n')));
}

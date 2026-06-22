import { availableLanguageTags } from '$lib/paraglide/runtime';
import { contentPaths, href, alternates, urlset, xml } from '$lib/sitemap';

// Content pages (home + grammar), one <url> per locale with a full hreflang cluster.
export const prerender = true;

export function GET() {
	const lastmod = new Date().toISOString().slice(0, 10);
	const urls = contentPaths().flatMap(({ path, priority }) =>
		availableLanguageTags.map(
			(tag) =>
				`<url><loc>${href(tag, path)}</loc>${alternates(path)}<lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`
		)
	);
	return xml(urlset(urls.join('\n')));
}

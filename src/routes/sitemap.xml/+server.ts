import { absolute, xml } from '$lib/sitemap';

// Sitemap index: points crawlers at the per-section child sitemaps.
export const prerender = true;

export function GET() {
	const lastmod = new Date().toISOString().slice(0, 10);
	const children = ['/sitemap-pages.xml', '/sitemap-words.xml'];
	const body = children
		.map((p) => `<sitemap><loc>${absolute(p)}</loc><lastmod>${lastmod}</lastmod></sitemap>`)
		.join('\n');
	return xml(`<?xml version="1.0" encoding="UTF-8" ?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>`);
}

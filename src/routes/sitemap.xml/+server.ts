import { CANONICAL_HOSTNAME } from '$lib/consts';
import { availableLanguageTags } from '$lib/paraglide/runtime';

function generateSitemap(hostname: string, urls: string[]) {
	return `<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
      <url>
        <loc>${hostname}</loc>
        <changefreq>daily</changefreq>
      </url>
      ${urls
				.map(
					(url) =>
						`<url><loc>${new URL(url, hostname).toString()}</loc><changefreq>daily</changefreq></url>`
				)
				.join('\n')}
		</urlset>`;
}

export async function GET() {
	return new Response(
		generateSitemap(
			CANONICAL_HOSTNAME,
			availableLanguageTags.map((tag) => `/${tag}`)
		),
		{
			headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'max-age=0' }
		}
	);
}

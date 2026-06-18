import data from '$lib/data.json';
import { json } from '@sveltejs/kit';

// The full dictionary served as a standalone static asset, fetched by the homepage
// table on mount instead of being imported into the client JS bundle (where it was
// ~89% of the homepage payload). Prerendered to a static /dictionary.json so the CDN
// serves it gzipped/brotlied and cached, fully off the critical JS path.
export const prerender = true;

export function GET() {
	return json(data);
}

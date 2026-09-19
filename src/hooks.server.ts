import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';

// paraglide's handle always redirects with 302; the root path is permanently
// aliased to the default locale, so tell search engines with a 301 instead.
const handleRootRedirect: Handle = ({ event, resolve }) => {
	if (event.url.pathname === '/') {
		const to = new URL(`/${i18n.config.defaultLanguageTag}`, event.url);
		return new Response(undefined, {
			status: 301,
			headers: { Location: to.pathname + to.search }
		});
	}
	return resolve(event);
};

const handleParaglide: Handle = i18n.handle();
export const handle: Handle = sequence(handleRootRedirect, handleParaglide);

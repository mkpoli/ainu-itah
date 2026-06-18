/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />
import { build, files, version, prerendered } from '$service-worker';

const sw = self as unknown as ServiceWorkerGlobalScope;
const CACHE = `aynu-itah-${version}`;

// App shell (hashed build assets), static files, prerendered pages, and the full
// dictionary (/dictionary.json) — so search works offline once the data is cached.
const PRECACHE = [...build, ...files, ...prerendered];
const PRECACHED = new Set(PRECACHE);

sw.addEventListener('install', (event) => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(CACHE);
			await cache.addAll(PRECACHE);
			await sw.skipWaiting();
		})()
	);
});

sw.addEventListener('activate', (event) => {
	event.waitUntil(
		(async () => {
			for (const key of await caches.keys()) {
				if (key !== CACHE) await caches.delete(key);
			}
			await sw.clients.claim();
		})()
	);
});

sw.addEventListener('fetch', (event) => {
	const { request } = event;
	if (request.method !== 'GET') return;
	const url = new URL(request.url);
	if (url.origin !== location.origin) return;

	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE);

			// Immutable build/static/prerendered assets (incl. /dictionary.json): cache-first.
			if (PRECACHED.has(url.pathname)) {
				const cached = await cache.match(url.pathname);
				if (cached) return cached;
			}

			// Everything else (SSR navigations): network-first, fall back to cache offline.
			try {
				const response = await fetch(request);
				if (response.ok && response.type === 'basic') {
					cache.put(request, response.clone());
				}
				return response;
			} catch {
				const cached = await cache.match(request);
				if (cached) return cached;
				throw new Error('offline and not in cache');
			}
		})()
	);
});

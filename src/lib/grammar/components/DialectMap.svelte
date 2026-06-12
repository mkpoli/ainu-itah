<script lang="ts">
	import { onMount } from 'svelte';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { OSM_STYLE } from '$lib/grammar/mapStyle';
	import { DIALECT_POINTS, COAST_COLOR, COAST_LABEL, type Place } from '$lib/grammar/places';

	let { height = '460px', caption = '' }: { height?: string; caption?: string } = $props();

	let el = $state<HTMLDivElement>();
	const legendCoasts: Array<'west' | 'east'> = ['west', 'east'];

	// #rrggbb → rgba(): transparency must live in the fill color, not element
	// opacity, which MapLibre's Marker rewrites to 1 on every render.
	function rgba(hex: string, a: number): string {
		const n = parseInt(hex.replace('#', ''), 16);
		return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
	}

	function dot(color: string): HTMLDivElement {
		const d = document.createElement('div');
		d.style.width = '14px';
		d.style.height = '14px';
		d.style.borderRadius = '50%';
		d.style.background = rgba(color, 0.45);
		d.style.border = `2px solid ${color}`;
		d.style.boxSizing = 'border-box';
		d.style.cursor = 'pointer';
		return d;
	}

	// Popup built from DOM nodes (never an HTML string) — names are user-facing text.
	function popupNode(p: Place, color: string): HTMLElement {
		const div = document.createElement('div');
		div.style.fontFamily = 'var(--font-sans, system-ui)';
		div.style.lineHeight = '1.35';
		div.style.maxWidth = '15rem';

		const head = document.createElement('div');
		head.style.fontWeight = '600';
		head.style.color = color;
		head.textContent = p.ainu ?? p.en;
		div.appendChild(head);

		// secondary name forms: kanji (kana) · Russian
		const forms: string[] = [];
		if (p.kanji) forms.push(p.kana ? `${p.kanji}（${p.kana}）` : p.kanji);
		if (p.ru) forms.push(p.ru);
		if (forms.length) {
			const sub = document.createElement('div');
			sub.style.fontSize = '0.8rem';
			sub.style.color = '#57534e';
			sub.textContent = forms.join(' · ');
			div.appendChild(sub);
		}
		if (p.note) {
			const note = document.createElement('div');
			note.style.fontSize = '0.8rem';
			note.style.color = '#78716c';
			note.style.marginTop = '0.25rem';
			note.textContent = p.note;
			div.appendChild(note);
		}
		return div;
	}

	onMount(() => {
		let map: import('maplibre-gl').Map | undefined;
		let cancelled = false;
		(async () => {
			let maplibre: typeof import('maplibre-gl');
			try {
				maplibre = await import('maplibre-gl');
			} catch (e) {
				console.error('DialectMap: failed to load maplibre-gl', e);
				return;
			}
			if (cancelled || !el) return;
			map = new maplibre.Map({
				container: el,
				style: OSM_STYLE,
				center: [142.6, 47.8],
				zoom: 5,
				maxZoom: 11,
				minZoom: 3,
				cooperativeGestures: true,
				attributionControl: { compact: true }
			});
			map.dragRotate.disable();
			map.touchZoomRotate.disableRotation();
			map.addControl(new maplibre.NavigationControl({ showCompass: false }), 'top-right');

			const bounds = new maplibre.LngLatBounds();
			for (const p of DIALECT_POINTS) {
				const color = COAST_COLOR[p.coast];
				const mk = new maplibre.Marker({ element: dot(color) })
					.setLngLat([p.lng, p.lat])
					.setPopup(new maplibre.Popup({ offset: 12, closeButton: false }).setDOMContent(popupNode(p, color)))
					.addTo(map);
				void mk;
				bounds.extend([p.lng, p.lat]);
			}
			map.fitBounds(bounds, { padding: 50, maxZoom: 7, duration: 0 });
		})();

		return () => {
			cancelled = true;
			map?.remove();
		};
	});
</script>

<figure class="my-6">
	<div
		bind:this={el}
		class="z-0 w-full overflow-hidden rounded-xl border border-gray-300"
		style="height:{height}"
	></div>
	<div class="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
		{#each legendCoasts as c (c)}
			<span class="flex items-center gap-1.5 text-xs text-gray-500">
				<span class="inline-block size-2.5 rounded-full" style="background:{COAST_COLOR[c]}"></span>
				{COAST_LABEL[c]}
			</span>
		{/each}
		<span class="text-xs text-gray-400">· tap a marker for its names; ⌘/Ctrl-scroll to zoom</span>
	</div>
	{#if caption}
		<figcaption class="mt-2 text-sm text-gray-500">{caption}</figcaption>
	{/if}
</figure>

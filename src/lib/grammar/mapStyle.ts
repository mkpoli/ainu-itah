import type { StyleSpecification } from 'maplibre-gl';

// Free OpenStreetMap raster basemap — no API key, low-volume scholarly use within
// OSM's tile policy. A parchment backdrop shows through while tiles load. A
// type-only import of maplibre-gl keeps it out of this module's SSR graph.
export const OSM_STYLE: StyleSpecification = {
	version: 8,
	sources: {
		osm: {
			type: 'raster',
			tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
			tileSize: 256,
			attribution: '&copy; OpenStreetMap contributors',
			maxzoom: 19
		}
	},
	layers: [
		{ id: 'bg', type: 'background', paint: { 'background-color': '#e6ddc6' } },
		{ id: 'osm', type: 'raster', source: 'osm' }
	]
};

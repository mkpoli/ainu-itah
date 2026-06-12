<script lang="ts">
	// A locator map of the Sakhalin Ainu settlement world. The island outline is
	// the real coastline of southern Sakhalin (OpenStreetMap, simplified and
	// clipped at ~51.2°N); settlements are placed from their true coordinates in
	// the gazetteer via the same affine projection, so dots sit where the towns
	// actually are. It renders and prints as a static SVG, complementing the
	// interactive tile map.
	import { PLACES, COAST_COLOR, type Place } from '../places';

	let { caption = '' }: { caption?: string } = $props();

	// Affine projection (must match project_sakhalin.py that baked the path):
	//   x = 180 + (lng - 143.0) * 47.4 ; y = 20 + (51.0 - lat) * 70.9
	const proj = (lng: number, lat: number): [number, number] => [
		180 + (lng - 143.0) * 47.4,
		20 + (51.0 - lat) * 70.9
	];

	// Real southern-Sakhalin coastline (OSM relation 'Сахалин', simplified).
	const COAST =
		'M142.8,5.8 L144.6,16.2 L141.9,23.6 L138.1,27.6 L134.7,51.9 L140.1,68.1 L138.7,69.8 L140.8,87.5 L138.8,94.4 L140.5,104.8 L139.4,125.1 L136.0,136.8 L137.0,146.0 L134.1,151.4 L132.8,165.6 L130.6,167.4 L131.6,170.6 L125.4,178.3 L127.5,187.1 L139.4,209.8 L142.2,234.0 L136.8,242.5 L130.8,259.7 L132.6,277.4 L131.0,282.3 L134.6,288.6 L135.6,296.0 L132.1,310.8 L123.6,332.0 L129.4,367.2 L128.5,371.1 L136.4,382.1 L137.2,375.6 L141.2,372.5 L144.5,354.7 L152.2,332.3 L159.5,323.8 L166.3,321.3 L169.1,331.4 L174.6,330.0 L183.1,332.3 L186.6,331.4 L192.9,336.5 L196.1,341.6 L195.8,346.1 L200.0,359.3 L199.6,373.1 L202.1,367.3 L201.9,361.4 L204.8,354.2 L207.0,353.5 L206.8,349.9 L209.2,348.2 L205.6,340.4 L202.6,315.9 L200.4,314.3 L199.6,317.8 L194.2,317.9 L184.6,310.1 L180.9,298.1 L180.9,285.8 L177.0,278.3 L168.5,272.2 L164.7,267.1 L157.6,248.8 L158.5,227.4 L170.8,185.5 L179.0,169.0 L177.3,159.5 L178.8,153.4 L189.8,142.2 L199.1,140.1 L209.3,139.3 L229.4,143.7 L234.5,146.7 L243.5,159.4 L252.2,167.0 L258.4,177.7 L259.1,187.4 L262.8,187.0 L259.3,181.3 L260.1,171.6 L246.0,159.2 L240.6,144.2 L237.8,131.2 L238.6,125.8 L233.8,118.2 L233.4,109.1 L227.4,94.3 L227.3,89.5 L215.9,62.8 L205.4,5.8 Z';

	const LAND = '#e6ddc6';
	const LAND2 = '#dcd2b6';

	const byId = (id: string) => PLACES.find((p) => p.id === id);
	const dot = (id: string, anchor: 'start' | 'end') => {
		const p = byId(id) as Place;
		const [x, y] = proj(p.lng, p.lat);
		const label = `${p.ainu ?? p.en}${p.kanji ? ' ' + p.kanji : ''}`;
		return { x, y, c: COAST_COLOR[p.coast], label, anchor };
	};

	// Representative settlements, spread along each coast (true positions).
	const marks = [
		...['esutoru', 'usoro', 'rayciska', 'tomarioru', 'maoka', 'tarantomari'].map((id) =>
			dot(id, 'end')
		),
		...['taraika', 'shisuka', 'siraroko', 'tunayci', 'otomari'].map((id) => dot(id, 'start'))
	];

	const toyohara = byId('toyohara') as Place;
	const [tx, ty] = proj(toyohara.lng, toyohara.lat);
</script>

<figure class="my-6 mx-auto" style="max-width:440px">
	<svg
		viewBox="0 0 360 430"
		class="w-full"
		role="img"
		aria-label="Locator map of the Sakhalin Ainu settlement world"
	>
		<rect x="0" y="0" width="360" height="430" fill="#f4efe1" />

		<!-- Asian mainland at the far west, across the Tatar (Mamiya) Strait -->
		<path d="M0,0 L30,0 Q40,150 30,300 Q24,370 30,430 L0,430 Z" fill={LAND2} />
		<text
			x="11"
			y="220"
			font-size="9"
			fill="#8a7f63"
			transform="rotate(-90 11 220)"
			letter-spacing="0.5">Asian mainland · Tatar Strait 間宮海峡</text
		>

		<!-- Hokkaidō, across La Pérouse Strait at the far south -->
		<path d="M150,430 Q210,418 280,430 Z" fill={LAND2} />

		<!-- Southern Sakhalin: real coastline -->
		<path d={COAST} fill={LAND} stroke="#c9bd99" stroke-width="1.5" stroke-linejoin="round" />

		<!-- coast labels -->
		<text
			x="150"
			y="210"
			font-size="9"
			fill={COAST_COLOR.west}
			transform="rotate(-90 150 210)"
			letter-spacing="1">WEST COAST</text
		>
		<text
			x="232"
			y="215"
			font-size="9"
			fill={COAST_COLOR.east}
			transform="rotate(-90 232 215)"
			letter-spacing="1">EAST COAST</text
		>

		<!-- Aniva Bay notch + La Pérouse Strait -->
		<text x="176" y="400" font-size="8.5" fill="#8a7f63" text-anchor="middle">Aniva Bay 亜庭湾</text>
		<text x="210" y="424" font-size="8.5" fill="#6b6450" text-anchor="middle"
			>La Pérouse (Sōya) Strait 宗谷海峡 · to Hokkaidō</text
		>

		<!-- Toyohara (administrative seat), inland -->
		<rect
			x={tx - 2.5}
			y={ty - 2.5}
			width="5"
			height="5"
			fill="none"
			stroke="#78716c"
			stroke-width="1.3"
		/>
		<text x={tx + 7} y={ty + 3} font-size="9" fill="#78716c">Toyohara 豊原</text>

		<!-- settlement dots + labels -->
		{#each marks as p (p.label)}
			<circle
				cx={p.x}
				cy={p.y}
				r="3.5"
				fill={p.c}
				fill-opacity="0.55"
				stroke={p.c}
				stroke-width="1.5"
			/>
			<text
				x={p.anchor === 'end' ? p.x - 7 : p.x + 7}
				y={p.y + 3}
				font-size="9.5"
				fill="#44403c"
				text-anchor={p.anchor}>{p.label}</text
			>
		{/each}

		<!-- north arrow -->
		<g transform="translate(335 34)">
			<line x1="0" y1="14" x2="0" y2="-6" stroke="#8a7f63" stroke-width="1.5" />
			<path d="M0,-12 L4,-2 L-4,-2 Z" fill="#8a7f63" />
			<text x="0" y="26" font-size="8" fill="#8a7f63" text-anchor="middle">N</text>
		</g>
	</svg>
	{#if caption}
		<figcaption class="mt-2 text-sm text-stone-500">{caption}</figcaption>
	{/if}
</figure>

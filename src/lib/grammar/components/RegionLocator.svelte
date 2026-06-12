<script lang="ts">
	// A deliberately schematic locator (not a survey map): southern Sakhalin with
	// its two Ainu coasts, set against Hokkaidō and the Asian mainland. It always
	// renders and prints, complementing the interactive tile map.
	let { caption = '' }: { caption?: string } = $props();

	const WEST = '#059669';
	const EAST = '#d97706';
	const LAND = '#e6ddc6';
	const LAND2 = '#dcd2b6';

	// A handful of representative settlements, placed by eye on the schematic.
	const pts = [
		{ x: 120, y: 70, c: WEST, label: 'Esutoru 恵須取', anchor: 'end' },
		{ x: 128, y: 120, c: WEST, label: 'Usoro 鵜城', anchor: 'end' },
		{ x: 134, y: 170, c: WEST, label: 'Rayciska 来知志', anchor: 'end' },
		{ x: 140, y: 250, c: WEST, label: 'Maoka 真岡', anchor: 'end' },
		{ x: 232, y: 96, c: EAST, label: 'Taraika 多来加', anchor: 'start' },
		{ x: 214, y: 138, c: EAST, label: 'Shisuka 敷香', anchor: 'start' },
		{ x: 206, y: 250, c: EAST, label: 'Siraroko 白浦', anchor: 'start' },
		{ x: 198, y: 300, c: EAST, label: 'Tunayci 富内', anchor: 'start' }
	] as const;
</script>

<figure class="my-6 mx-auto" style="max-width:440px">
	<svg viewBox="0 0 360 430" class="w-full" role="img" aria-label="Locator map of the Sakhalin Ainu area">
		<rect x="0" y="0" width="360" height="430" fill="#f4efe1" />

		<!-- Asian mainland at the far west, across the Tatar (Mamiya) Strait -->
		<path d="M0,0 L34,0 Q40,120 30,250 Q24,330 34,430 L0,430 Z" fill={LAND2} />
		<text x="8" y="210" font-size="9" fill="#8a7f63" transform="rotate(-90 8 210)" letter-spacing="0.5"
			>Asian mainland · Tatar Strait 間宮海峡</text
		>

		<!-- Southern Sakhalin: stylized tapering island -->
		<path
			d="M150,28 Q210,26 250,52 Q262,78 258,104 L238,150 Q228,196 224,232
			   Q222,300 206,344 Q236,348 244,372 Q232,392 210,392 Q200,372 196,358
			   Q186,376 176,392 Q166,372 162,344 Q150,300 150,236
			   Q146,150 132,104 Q124,72 132,48 Q138,32 150,28 Z"
			fill={LAND}
			stroke="#c9bd99"
			stroke-width="1.5"
		/>
		<!-- faint coast divide -->
		<path d="M178,40 Q176,180 180,330" fill="none" stroke="#c9bd99" stroke-width="1" stroke-dasharray="3 4" />

		<!-- coast labels -->
		<text x="150" y="206" font-size="9" fill={WEST} transform="rotate(-90 150 206)" letter-spacing="1"
			>WEST COAST</text
		>
		<text x="214" y="210" font-size="9" fill={EAST} transform="rotate(-90 214 210)" letter-spacing="1"
			>EAST COAST</text
		>

		<!-- Aniva Bay notch label -->
		<text x="186" y="408" font-size="8.5" fill="#8a7f63" text-anchor="middle">Aniva Bay 亜庭湾</text>

		<!-- La Pérouse / Sōya Strait gap -->
		<text x="186" y="421" font-size="8.5" fill="#6b6450" text-anchor="middle"
			>La Pérouse (Sōya) Strait 宗谷海峡</text
		>

		<!-- settlement dots + labels -->
		{#each pts as p (p.label)}
			<circle cx={p.x} cy={p.y} r="4" fill={p.c} fill-opacity="0.5" stroke={p.c} stroke-width="1.5" />
			<text
				x={p.anchor === 'end' ? p.x - 8 : p.x + 8}
				y={p.y + 3}
				font-size="9.5"
				fill="#44403c"
				text-anchor={p.anchor}>{p.label}</text
			>
		{/each}

		<!-- north arrow -->
		<g transform="translate(330 36)">
			<line x1="0" y1="14" x2="0" y2="-6" stroke="#8a7f63" stroke-width="1.5" />
			<path d="M0,-12 L4,-2 L-4,-2 Z" fill="#8a7f63" />
			<text x="0" y="26" font-size="8" fill="#8a7f63" text-anchor="middle">N</text>
		</g>
	</svg>
	{#if caption}
		<figcaption class="mt-2 text-sm text-gray-500">{caption}</figcaption>
	{/if}
</figure>

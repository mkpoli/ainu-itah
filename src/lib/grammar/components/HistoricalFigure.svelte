<script lang="ts">
	// A captioned historical illustration. `credit` names the author/holder and
	// the public-domain basis; `href` links the figure to its Wikimedia Commons
	// file page so the licence is one click away.
	let {
		src,
		alt,
		caption,
		credit,
		href = '',
		width = '420px',
		align = 'center'
	}: {
		src: string;
		alt: string;
		caption: string;
		credit: string;
		href?: string;
		width?: string;
		align?: 'center' | 'left' | 'right';
	} = $props();

	const floatClass =
		align === 'left'
			? 'sm:float-left sm:mr-6 sm:mb-3'
			: align === 'right'
				? 'sm:float-right sm:ml-6 sm:mb-3'
				: 'mx-auto';
</script>

<figure class="my-6 {floatClass}" style="max-width:{width}">
	<img {src} {alt} loading="lazy" class="w-full border border-gray-300 bg-gray-100 shadow-sm" />
	<figcaption class="mt-2 text-sm leading-snug text-gray-600">
		{caption}
		<span class="mt-0.5 block text-xs text-gray-400">
			{credit}{#if href}
				· <a
					class="underline underline-offset-2 hover:text-gray-600"
					{href}
					target="_blank"
					rel="noopener">Wikimedia Commons</a
				>{/if}
		</span>
	</figcaption>
</figure>

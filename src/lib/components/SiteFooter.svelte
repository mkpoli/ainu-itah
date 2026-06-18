<script lang="ts">
	import Discord from '~icons/simple-icons/discord';
	import * as m from '$lib/paraglide/messages.js';
</script>

<footer class="mt-16 border-t border-gray-200">
	<div
		class="mx-auto flex max-w-screen-lg flex-col items-center gap-2 px-4 py-6 text-center text-sm text-gray-500"
	>
		<nav class="flex gap-3" aria-label="Aynu Itah">
			<a href="/" class="hover:text-blue-800 hover:underline">{m.dictionaries()}</a>
			<span aria-hidden="true">·</span>
			<a href="/grammar" class="hover:text-blue-800 hover:underline">{m.reference_grammar()}</a>
		</nav>
		<p class="flex items-center justify-center gap-2 text-xs">
			© 2024—2026
			<a href="https://aynu.org/" target="_blank" class="hover:underline">Aynu.org</a>
			<a
				href="https://discord.gg/sJRXq3Gspm"
				target="_blank"
				title={m.discord()}
				class="hover:text-blue-800"><Discord class="h-5 w-5" /></a
			>
		</p>
	</div>
</footer>

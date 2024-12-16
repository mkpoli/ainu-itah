<script lang="ts">
	import Discord from '~icons/simple-icons/discord';
	import * as m from '$lib/paraglide/messages.js';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<hr />
<footer class="m-2 p-4 text-center">
	<p class="flex items-center justify-center gap-2">
		© 2024 <a href="https://aynu.org/" target="_blank">Aynu.org</a>
		<a href="https://discord.gg/sJRXq3Gspm" target="_blank" title={m.discord()}
			><Discord class="h-6 w-6" /></a
		>
	</p>
</footer>

<LanguageSwitcher />

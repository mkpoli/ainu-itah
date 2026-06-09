import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,svx,ts}'],

	theme: {
		extend: {}
	},

	plugins: [forms, containerQueries, typography]
} satisfies Config;

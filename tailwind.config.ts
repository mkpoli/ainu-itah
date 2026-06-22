import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,svx,ts}'],

	theme: {
		// House style: no rounded corners anywhere (see DESIGN.md). Every border-radius
		// utility is forced to 0 so a stray `rounded-*` can never reintroduce one.
		extend: {
			borderRadius: {
				none: '0',
				sm: '0',
				DEFAULT: '0',
				md: '0',
				lg: '0',
				xl: '0',
				'2xl': '0',
				'3xl': '0',
				full: '0'
			}
		}
	},

	plugins: [forms, containerQueries, typography]
} satisfies Config;

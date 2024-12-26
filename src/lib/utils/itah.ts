import { separate } from 'ainconv';

export function extrapolateSakhalinFromHokkaido(word: string): string {
	const syllables = separate(word);

	function processSyllable(syllable: string): string {
		if (!syllable) {
			return syllable;
		}
		if (!/[a-zA-Z]+/.test(syllable)) {
			return syllable;
		}
		if (syllable.length <= 1) {
			return syllable;
		}

		const lastChar = syllable.slice(-1);
		const secondToLastChar = syllable.slice(-2, -1);

		if (['p', 't', 'k'].includes(lastChar)) {
			return secondToLastChar === 'i' ? syllable.slice(0, -1) + 's' : syllable.slice(0, -1) + 'h';
		} else if (lastChar === 'r') {
			return syllable + secondToLastChar;
		} else if (lastChar === 'm') {
			return syllable.slice(0, -1) + 'n';
		}
		return syllable;
	}

	return syllables.map(processSyllable).join('');
}

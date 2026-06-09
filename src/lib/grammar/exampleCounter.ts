import { getContext, setContext } from 'svelte';

// Per-chapter sequential numbering for interlinear examples. ChapterLayout
// installs a counter into context; each <Example> pulls the next number during
// component initialisation, which runs in document order under SSR and on
// hydration, so examples are numbered (1), (2), (3), … down the page.

const KEY = Symbol('igt-counter');

interface Counter {
	count: number;
}

export function createExampleCounter(): Counter {
	const counter: Counter = { count: 0 };
	setContext(KEY, counter);
	return counter;
}

export function nextExampleNumber(): number {
	const counter = getContext<Counter | undefined>(KEY);
	if (!counter) return 0;
	return ++counter.count;
}

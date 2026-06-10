// URL-fragment id for a gloss tag, e.g. `INDEF` → `indef`, `1SG.A` → `1sg-a`.
// Used to link <Gl> and example glosses to their entry on the abbreviations page.
export function tagId(tag: string): string {
	return tag
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

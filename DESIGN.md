# Design language — Aynu Itah

This document records the visual and editorial principles for `itah.aynu.org`
(the Sakhalin Ainu dictionary + reference grammar). It is the reference for any
change that touches presentation. When in doubt, favour the quiet, document-like
end of the spectrum: this is a scholarly resource, not a consumer app.

## Hard rules

### No rounded corners

We do not use rounded corners. Anywhere. Buttons, inputs, cards, badges, the
language switcher, map frames, avatars — all square.

This is enforced at the system level, not left to discipline: in
`tailwind.config.ts` every `borderRadius` scale value (`none`, `sm`, `DEFAULT`,
`md`, `lg`, `xl`, `2xl`, `3xl`, `full`) is set to `0`. So even if a `rounded-*`
class is written, it renders square. **Do not** add raw `border-radius` in
scoped CSS — that bypasses the safeguard.

If you ever genuinely need a radius (you almost certainly don't), change the
config deliberately and update this document; don't sneak it into a component.

## Typography & language

- **Three scripts, one lemma.** Ainu headwords are stored romanised; the UI
  renders the Latin, Katakana (`ain-Kana`), and Cyrillic (`ain-Cyrl`) forms.
  Always tag spans with the correct `lang` so script/font selection and
  screen-readers behave.
- **Gloss languages: ja / en / ru.** Under a Japanese/English/Russian UI the
  matching language is primary (full size) and the other two are demoted to a
  small, muted secondary line; under an Ainu UI all three are shown equally.
- **Reference-grammar prose is English** (UI chrome stays multilingual via
  Paraglide). Citations follow the grammar book's style.

## Colour & dark mode

- Neutral, paper-like palette (Tailwind `gray`/`stone`). Blue (`blue-800`,
  `blue-300` in dark) is the single accent, used for links and selection.
- **Dark mode is first-class.** Every surface needs an explicit `dark:` variant;
  never rely on the default. Test every change in both schemes. Dark mode uses
  Tailwind's `media` strategy (`prefers-color-scheme`), and scoped CSS mirrors it
  with `@media (prefers-color-scheme: dark)`.

## Components & layout

- **Form controls share one look:** square, `border border-gray-300 bg-white
px-3 py-1 text-sm` (+ the dark variants). The search box, sort `<select>`, and
  the POS filter all match.
- Headless, accessible primitives (e.g. `bits-ui` for the POS listbox) over
  hand-rolled widgets; keep ARIA roles and keyboard navigation intact.
- Respect `prefers-reduced-motion`; gate non-essential animation.
- Content is centred in a readable measure; the dictionary table scrolls
  horizontally on small screens rather than cramming.

## Identity

- Homographs are addressed by a stable `id` (e.g. `pa-1`), never the surface
  string. Sense pages show a superscript (`pa¹`) and cross-link sibling senses.
- The dictionary `data.json` is the single source of truth (the old generator is
  retired); it is hand-curated. Only _internal, productive_ generation that runs
  on our own data is kept.

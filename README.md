# Poli Plot Labs Front-End Notes

This project now has a single styling entry point at `css/style.css`. The sheet is organized into clearly marked sections:

- **Brand Tokens & Legacy Layout** – top of the file keeps the original selectors used by `index.html` and other legacy templates so nothing breaks.
- **Modern Site Header & Shell Helpers** – shared header, navigation, container, and footer rules for the refreshed pages.
- **Shared Modern Components** – reusable tokens for eyebrows, section titles, CTAs, topic chips, feature meta text, etc.
- **Page Sections** – dedicated blocks for `Home (Professional Overview)`, `Contact (Modern)`, `Blog (Modern)`, and `About (Modern)` so page-specific tweaks stay in one place.

## Page Conventions

- All modern pages use `<main class="page-shell …">`; content starts just below the header divider thanks to consistent top padding and first-child margin resets.
- Page containers clamp to `min(1120px, 92vw)` so margins line up across home, about, blog, and contact.
- Section eyebrows share the same clamp sizing and spacing, so cues like "Data forward storytelling" read consistently.
- Header typography is normalized by keeping page-level root font sizes at 100%, so nav items render the same on every template.

## New Interactions

- The home hero title now renders on a single line with a trendline spark that animates on hover to reinforce the data storytelling theme.
- Featured insight cards elevate with a gradient wash and arrow when hovered to signal they are clickable.
- Blog hero spacing was tightened so the "Stories that turn data into direction" panel sits closer to the following content.

## Updating Styles

1. Place any shared utility or token in the "Shared Modern Components" block.
2. Add page-specific overrides inside the relevant section; keep comments short so the hierarchy stays scannable.
3. If you need to extend the design to another page, copy the page-shell pattern and reuse eyebrows/section titles rather than re-defining inline styles.

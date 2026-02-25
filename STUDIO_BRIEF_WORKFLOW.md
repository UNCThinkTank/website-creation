# Studio Brief Workflow (Poli Plot Labs)

Use this checklist to draft, format, and publish a studio brief.

## 1) Create the brief file
- File location: `collections/_studio_briefs/YYYY-MM-DD-brief-slug.md`
- Layout is set automatically by collection defaults.
- Avoid editing anything inside `_site/` (generated output).

## 1a) Create an image folder (recommended)
- Folder: `assets/images/studio-briefs/brief-slug/`
- Use concise, descriptive names: `brief-slug-feature.jpeg`, `admin-cost-share.png`, etc.

## 2) Required front matter (baseline)
```yaml
title: "Brief Title"
subtitle: "One-line subhead that frames the policy moment."
author: "Poli Plot Labs"
date: 2025-11-05
feature_image: "/assets/images/ppl-preview.png"
feature_image_alt: "Short descriptive alt text"
feature_image_caption: "Optional caption"
summary: >
  2-3 sentences that explain why the brief matters.
key_points:
  - "**Signal one** that frames the decision or risk."
  - "**Signal two** that ties to data or timing."
  - "**Signal three** that clarifies who is affected."
call_to_action:
  heading: "Next steps"
  body: "One sentence describing how PPL can help."
  link:
    url: "/contact.html"
    label: "Partner with Poli Plot Labs"
```

## 3) Content structure (suggested)
```md
## Context
Brief setup paragraph with one or two sources.

## What Is Changing
Explain the policy shift and when it takes effect.

## Implications
Lay out fiscal, operational, and human impact.

## What We Are Watching
Bullets or a short list of upcoming decision points.

## Timeline
Key dates in bullets.
```

## 4) Links & sources
- Use inline Markdown links for citations.
- Keep URLs descriptive (avoid raw URLs in the text).

## 4c) Citation index (recommended)
Add a citations list in front matter so the layout can render the styled Source Index automatically.
```yaml
citations: |
  1. Organization. [Title of source.](https://example.com)
  2. Organization. [Title of source.](https://example.com)
```
- Keep the list in alphabetical order by organization/title.
- Use a numbered list for consistent ordering.

## 4a) Figures with captions
Use HTML `<figure>` blocks so captions render in the studio brief styling:
```html
<figure>
  <img src="/assets/images/studio-briefs/brief-slug/your-chart.png" alt="Short description">
  <figcaption>One-sentence caption that explains what the figure shows.</figcaption>
</figure>
```

## 4b) Styled tables (for numeric tiers or lists)
For compact policy tables, use the brief table card pattern:
```html
<div class="brief-table-grid">
  <article class="brief-table-card">
    <header>
      <p class="brief-table-eyebrow">Tier label</p>
      <h3>Tier headline</h3>
    </header>
    <div class="brief-table-body">
      <table class="brief-table">
        <thead>
          <tr>
            <th>State</th>
            <th>PER (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Example</td><td>7.91</td></tr>
        </tbody>
      </table>
    </div>
    <p class="brief-table-caption">Short caption explaining the tier.</p>
  </article>
</div>
```

## 5) Add a card to the Stories page
- File: `blog.html`
- Use a card with:
  - `data-type="studio_brief"`
  - `data-topic="public_health"` (or another topic filter)
  - CTA link to `/studio-briefs/your-brief-slug.html`

## 6) Update the homepage featured insight (optional)
- File: `index.html`
- Replace the feature link/title/dek with the new brief.

## 7) Preview locally
```powershell
bundle exec jekyll serve --livereload --force_polling
```
- Hard refresh (Ctrl+F5) if CSS looks stale.

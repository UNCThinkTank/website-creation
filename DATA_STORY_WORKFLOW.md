# Data Story Workflow (Poli Plot Labs)

Use this checklist to add or update a data story quickly and consistently.

## 1) Create or update the story markdown
- File location: `collections/_data_stories/YYYY-MM-DD-story-slug.md`
- Layout must be: `layout: data_story`
- Avoid editing anything inside `_site/` (that folder is generated).

## 2) Required front matter fields (baseline)
```yaml
layout: data_story
title: "Story Title"
author: "Name, Name"
date: 2026-01-28
summary: "One sentence summary."
keywords:
  - Topic A
  - Topic B
permalink: "/data-stories/2026-01-28-story-slug.html"
```

## 3) Story content structure
```yaml
story_intro:
  paragraphs:
    - >-
      Intro paragraph.
story_sections:
  -
    paragraphs:
      - >-
        Section paragraph.
    figures:
      - src: "/assets/images/Blog X_Story/image-1.png"
        alt: "Alt text"
        caption: "Optional inline caption"
        popup_caption: "Popup caption for the lightbox"
        # Optional: use a higher-res file for the popup view
        popup_src: "/assets/images/Blog X_Story/image-1@2x.png"
        # Optional: responsive sources
        srcset: "/assets/images/Blog X_Story/image-1.png 600w, /assets/images/Blog X_Story/image-1@2x.png 1200w"
        sizes: "(max-width: 768px) 100vw, 700px"
```

## 4) Methodology (Q&A accordion)
```yaml
methodology:
  title: "Methodology"
  qa:
    - question: "Which dataset(s) were used?"
      answer: |-
        Answer text here.
```

## 5) Research question + datasets (header block)
```yaml
research_question:
  title: "Research Question"
  prompt: "What is your primary research question?"
  body: |-
    Research question text here.
datasets:
  title: "Dataset(s)"
  label: "Dataset List"
  description: |-
    Short description of datasets and source site.
  links:
    - label: "Dataset name"
      url: "https://example.com/file"
```

## 6) Reproducibility download block (post-methodology)
```yaml
analysis_download:
  eyebrow: "Recreate the Analysis"
  title: "Download the Data & RMD"
  description: |-
    One sentence explaining what the files are for.
  files:
    - label: "Story Analysis (RMD)"
      url: "/assets/downloads/story-analysis.Rmd"
    - label: "Cleaned Dataset"
      url: "/assets/downloads/story-data.csv"
```

## 7) Where to store files
- Images: `assets/images/Blog X_Story/`
- Downloads (RMD/data): `assets/downloads/`
- Suggested naming: `story-slug-analysis.Rmd`, `story-slug-data.csv`

## 8) Image quality guidelines
- Current images are ~550-650px wide and can look soft when scaled.
- Export visuals at 2x size (1200-1600px wide) for crisp inline display.
- If you only have higher-res files for popup, set `popup_src` to the @2x image.
- Avoid upscaling low-res images; the layout now defaults to showing images at their native size.

## 9) Preview locally
```powershell
bundle exec jekyll serve --livereload --force_polling
```
- Hard refresh (Ctrl+F5) if CSS looks stale.

---
layout: data_story
title: "Tristen's upcoming story"
author: "Tristen Best"
author_link: "/about.html#tristen"   # optional
date: 2025-10-16
summary: "One-sentence dek that appears under the title."
keywords:
  - Keyword One
  - Keyword Two
dataset_link: "https://example.com/data.csv"   # optional
dataset_label: "Explore the dataset"

permalink: "/data-stories/2025-11-01-example.html"

story_intro:
  paragraphs:
    - >-
      Opening paragraph of the story written in plain markdown. Links like
      [this](https://example.com) are OK.
    - >-
      Add as many paragraphs as you need; each string is processed with
      `markdownify`.
  figures:
    - src: "/assets/images/example/hero-chart.png"
      alt: "Concise alt text for screen readers"
      caption: "Optional caption text."
      img_class: "img-responsive large-img"     # optional
      wrapper_class: "story-figure"             # optional
      enable_popup: true                        # default
      popup_caption: "Text shown in the lightbox"  # optional

story_sections:
  -
    paragraphs:
      - >-
        Body paragraph (markdown supported).
      - >-
        Another paragraph in the same section.
    figures:
      - src: "/assets/images/example/chart-1.png"
        alt: "Description of the data viz"
        caption: "What readers should notice."
  -
    paragraphs:
      - >-
        Second section’s copy.
    figures:
      - src: "/assets/images/example/chart-2.png"
        caption: "Caption text here."
        enable_popup: false  # suppresses the onclick lightbox if you prefer

methodology:
  title: "Methodology"          # optional; defaults to bold text if omitted
  paragraphs:
    - >-
      Describe the data source, filters, and other notes. You can include
      markdown links, e.g. [link](https://example.com).
  dataset: >-
    Dataset: [Full Title](https://example.com/download.zip)
---
---
layout: toolkit
title: "Q-Methodology"
subtitle: "A mixed-method approach to systematically study subjectivity"
permalink: "/toolkits/q-methodology.html"
author: "Tristen Best"
author_link: "/about.html#tristen"
sidebar_links:
  - title: Overview
    url: "#overview"
  - title: When To Use
    url: "#when-to-use"
  - title: Data
    url: "#data"
  - title: Steps
    url: "#steps"
  - title: Analysis
    url: "#analysis"
  - title: Example Outputs
    url: "#example-outputs"
  - title: Pitfalls
    url: "#pitfalls"
  - title: Tools & Resources
    url: "#tools-resources"
tips:
  - title: "Keep the concourse diverse"
    body: "Source statements from interviews, literature, media, and stakeholders to cover the full range of viewpoints."
  - title: "Pilot your Q-set"
    body: "Pretest the statements for clarity and redundancy; refine to ~30-45 items that balance breadth and respondent burden."
  - title: "Write factor narratives"
    body: "Use distinguishing/consensus statements and exemplar sorts to craft clear, human-readable descriptions of each viewpoint."
---

## Overview {#overview}

Q-Methodology is a mixed-method research approach used to systematically study subjectivity—people's viewpoints, beliefs, and preferences. Participants sort a curated set of statements (the Q-set) along a forced distribution from “most agree” to “most disagree.” The by-person factor analysis then groups participants with similar sorts to reveal shared perspectives. Results are interpreted qualitatively using the ranked patterns of agreement/disagreement for each factor.

## When To Use {#when-to-use}

- Exploring contested topics with multiple plausible viewpoints.
- Mapping stakeholder perspectives to inform policy or program design.
- Complementing surveys or interviews with a structured, comparative lens.
- Sample sizes of tens (not hundreds); the goal is depth in viewpoints, not population estimates.

## Data {#data}

- **Concourse**: the raw universe of statements on the topic (interviews, media, literature, workshops).
- **Q-set**: refined, balanced subset of statements (typically 30–45) representing the concourse.
- **Q-sort grid**: forced quasi-normal distribution (e.g., –4 to +4) defining how many cards can be placed at each rank.
- **Participants**: purposive sample capturing diversity of stakeholders and experiences.

Example data structure (tidy format):

```
participant_id,statement_id,statement_text,rank
P01,S07,"Public health messaging must be localized",+3
P01,S12,"Mandates undermine trust",-2
P02,S07,"Public health messaging must be localized",+1
...
```

## Steps {#steps}

1. Define the topic and scope: clarify the domain of discourse and stakeholder groups.
2. Build the concourse: gather statements from interviews, documents, media, workshops.
3. Construct the Q-set: de-duplicate, balance themes, ensure clarity; pilot and refine.
4. Design the Q-sort grid: choose the ranking range and distribution (e.g., –4 to +4).
5. Recruit participants: use purposive sampling to capture viewpoint diversity.
6. Administer Q-sorts: have participants rank statements along the grid; capture brief rationales for extremes.
7. Prepare the data: encode ranks numerically and assemble a participants x statements matrix.
8. Analyze by-person factors: extract, rotate, and interpret factors (viewpoints).
9. Write factor narratives: synthesize distinguishing and consensus statements with exemplar quotes.
10. Communicate results: share factor arrays, profiles, and implications for decisions.

## Analysis {#analysis}

- Correlate Q-sorts: compute participant-participant correlations on ranked data.
- Factor extraction: use centroid or principal components to extract factors.
- Rotation: use varimax or manual rotation to maximize interpretability.
- Factor arrays: compute the idealized rank for each statement within each factor.
- Interpretation: identify distinguishing statements (between factors) and consensus statements (shared across factors) and draft narratives.

**Notes on decisions**

- Number of factors: choose based on eigenvalues, scree, percent variance, significance of loadings, and interpretability.
- Significance of loadings: often |loading| >= 0.40 or p < 0.01 (depends on the number of statements and participants).
- Robustness: test stability by alternative rotations or sensitivity checks on statement sets.

## Example Outputs {#example-outputs}

- Factor profiles (Factor A, B, C) with short narrative names.
- Factor arrays: ranked lists of statements from most agree to most disagree per factor.
- Distinguishing vs. consensus statements tables.
- Heatmaps of statement ranks by factor; loading plots for participants.
- Participant exemplars: selected high-loading Q-sorts with brief rationale quotes.

## Common Pitfalls {#pitfalls}

- Overly narrow concourse leading to missing viewpoints.
- Redundant or ambiguous statements that confuse participants.
- Too many statements or an extreme grid that increases respondent fatigue.
- Treating Q as a survey for population inference; Q maps viewpoints, not prevalence.
- Underreporting rotation decisions or criteria for factor retention.

## Tools & Resources {#tools-resources}

- Software: R packages (qmethod, qmethodology), PQMethod, Ken-Q Analysis (web-based).
- Data capture: paper cards + grid, or digital tools (e.g., Ken-Q, custom apps).
- Reporting: factor arrays, distinguishing/consensus tables, and narrative briefs.
- References: Stephenson (1935), Brown (1980), Watts & Stenner (2012).

Next steps: Pair this toolkit with a short case example (admin notes, participant quotes) and a simple visualization (heatmap of ranks by factor) to make the results concrete for non-technical audiences.

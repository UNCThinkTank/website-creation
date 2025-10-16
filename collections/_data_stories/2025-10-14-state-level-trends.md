---
layout: data_story
title: "State-Level Trends in Shingles Vaccination"
author: "Bhairavi Jayaraman"
author_link: "/about.html#bhairavi"
date: 2025-10-14
summary: "What were the state-level trends in adult vaccination coverage leading up to recent CDC/ACIP leadership changes, and which states may be most vulnerable to future declines?"
keywords:
  - Public Health
  - Vaccination
  - Preventive Care
dataset_link: "https://github.com/UNCThinkTank/data"
dataset_label: "Download the data on GitHub"
permalink: "/data-stories/2025-10-14-state-level-trends.html"
---

<section class="story-intro">
  <p>
    Shingles, or herpes zoster, affects about <a href="https://www.cdc.gov/shingles/data-research/index.html" target="_blank" rel="noopener">1 in 3 Americans</a> over their lifetime. Though it results in fewer than 100 deaths per year, the disease can cause severe pain and long-term nerve complications, particularly among older adults. The <a href="https://www.factcheck.org/2025/05/rfk-jr-s-misleading-line-on-the-chickenpox-vaccine/" target="_blank" rel="noopener">CDC</a> recommends that adults aged 50 and older receive two doses of the Shingrix vaccine, administered two to six months apart. Uptake of this vaccine can also serve as an indicator of how well preventive care is reaching older populations.
  </p>

  <p>
    This issue has growing relevance in 2025, as the U.S. population ages and cost pressures increase within the healthcare system. Adults aged 65 and older are projected to <a href="https://www.urban.org/policy-centers/cross-center-initiatives/program-retirement-policy/projects/data-warehouse/what-future-holds/us-population-aging#:~:text=The%20number%20of%20Americans%20ages,down%20from%203.7%20in%201970" target="_blank" rel="noopener">double in number</a> by 2040. At the same time, insurers may be re-evaluating coverage of certain adult vaccines amid shifting demand and rising skepticism. Share prices of companies with large vaccine portfolios have already <a href="https://www.npr.org/sections/shots-health-news/2024/12/06/nx-s1-5218574/rfk-vaccines-anti-vaccine-infectious-disease" target="_blank" rel="noopener">declined</a>, in part due to softening uptake of vaccines like shingles and RSV.
  </p>

  <div class="work-images grid"></div>
</section>

<section class="story-body-content">
  <p>
    Between 2020 and 2023, shingles vaccination coverage increased in every state. This reflects a broader recovery in preventive care following disruptions caused by the COVID-19 pandemic. Most states gained several percentage points in coverage, with national rates clustering around 45% to 50% by 2023. A few states—Vermont, North Dakota, and South Dakota—stood out with rates exceeding 60%. At the other end of the spectrum, Mississippi remained below 40% in both years.
  </p>

  <figure class="story-figure">
    <img src="{{ '/assets/images/Blog 1_ShinglesVax/Navy.orangeviz1.png' | relative_url }}" alt="Shingles vaccination rates by state" class="img-responsive large-img" onclick="openPopup('{{ '/assets/images/Blog 1_ShinglesVax/Navy.orangeviz1.png' | relative_url }}', 'Shingles vaccination rates by state')">
    <figcaption>Coverage climbed across every state, with standouts in the Upper Midwest and Mountain West.</figcaption>
  </figure>

  <p>
    These shifts are not evenly distributed. States in the Northeastern, Upper Midwest, and Mountain West experienced the largest absolute increases. States in the South and rural West saw more limited gains. These regional patterns reflect long-standing disparities in provider access, insurance coverage, and the strength of local public health systems.
  </p>

  <figure class="story-figure">
    <img src="{{ '/assets/images/Blog 1_ShinglesVax/Navy.orangeviz2.png' | relative_url }}" alt="States with the largest and smallest improvements in shingles vaccination rates" class="img-responsive large-img" onclick="openPopup('{{ '/assets/images/Blog 1_ShinglesVax/Navy.orangeviz2.png' | relative_url }}', 'States with the largest and smallest improvements in shingles vaccination rates')">
    <figcaption>Northern states made the fastest progress, while the Deep South and Appalachia lagged.</figcaption>
  </figure>

  <p>
    Looking at the states with the largest and smallest improvements reinforces this pattern. Vermont, Massachusetts, Illinois, and Alaska posted the most significant gains—suggesting stronger infrastructure for reaching older adults and perhaps better alignment between insurers and preventive care delivery. Meanwhile, states like Mississippi and West Virginia continue to trail, likely due to a combination of structural underinvestment and limited access to regular primary care.
  </p>

  <figure class="story-figure">
    <img src="{{ '/assets/images/Blog 1_ShinglesVax/Navy.orangeviz3.png' | relative_url }}" alt="Shingles vaccination trends over time" class="img-responsive large-img" onclick="openPopup('{{ '/assets/images/Blog 1_ShinglesVax/Navy.orangeviz3.png' | relative_url }}', 'Shingles vaccination trends over time')">
    <figcaption>Most states posted steady gains year over year, even as national debates around vaccines intensified.</figcaption>
  </figure>

  <figure class="story-figure">
    <img src="{{ '/assets/images/Blog 1_ShinglesVax/Navy.orangeviz4.png' | relative_url }}" alt="Demographic breakdown of shingles vaccination rates" class="img-responsive large-img" onclick="openPopup('{{ '/assets/images/Blog 1_ShinglesVax/Navy.orangeviz4.png' | relative_url }}', 'Demographic breakdown of shingles vaccination rates')">
    <figcaption>Coverage gaps remain across demographic groups, underscoring the need for targeted outreach.</figcaption>
  </figure>

  <p>
    While national debates around vaccine mandates and agency authority persist, the more immediate threat to shingles coverage may come from market dynamics. If insurers reduce coverage for adult vaccines—especially those perceived as low-profile—the burden will likely fall hardest on states already facing gaps in access. <a href="https://www.ssph-journal.org/journals/public-health-reviews/articles/10.3389/phrs.2024.1606679/full" target="_blank" rel="noopener">Shingles vaccination patterns</a> thus serve as a useful measure of where preventive care is working and where it may be vulnerable to retrenchment.
  </p>

  <p>
    Understanding these patterns is essential. Progress from 2020 to 2023 shows what's possible, but also highlights which states may struggle to maintain coverage if the financial or political scaffolding of adult immunization erodes.
  </p>
</section>

<hr class="story-divider">

<section class="methodology-block">
  <p class="methodology-title"><strong>Methodology</strong><br/></p>
  <p class="footnote-text">
    This analysis draws on publicly available data from the CDC's Behavioral Risk Factor Surveillance System (BRFSS), focusing on state-level adult vaccination coverage for the Zoster (Shingles) vaccine between 2020 and 2023. The dataset includes annual estimates of percent vaccinated, disaggregated by geography, age group, and race/ethnicity. The analysis was restricted to individuals aged 60 and older (including the 60–64 and 65+ age bands) and filtered to include only responses tagged as "Overall" for race/ethnicity and "States/Local Areas" for geography. Coverage estimates were averaged across respondents within each state-year. To visualize change over time, the analysis compared percent coverage in 2020 and 2023. States missing 2023 values (e.g., Pennsylvania and Kentucky) were retained for 2020 but excluded from year-over-year comparison visuals, with footnotes denoting their omission. The analysis is descriptive in nature and does not make causal claims, but it establishes a baseline to assess future changes in vaccine uptake as national policy and leadership evolve.
  </p>
  <p class="footnote-text">
    Dataset: <a class="work-dataset" href="https://data.cdc.gov/api/views/aetd-68ew/rows.csv?accessType=DOWNLOAD" target="_blank" rel="noopener">CDC BRFSS - Zoster Vaccination Coverage</a>
  </p>
</section>

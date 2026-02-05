---
layout: data_story
title: "When Insurance Expands but Mortality Rises: What North Carolina's County Data Says About the ACA and Diabetes (2010-2016)"
author: "Neil Sharma, Donovan Gaul, Natalie Perez, and Savanna Ray"
date: 2026-01-30
summary: "County-level data from North Carolina show diabetes-related mortality continued to rise after ACA marketplace expansion, with modest relative gains for working-age adults and stronger protection in counties with more primary care."
keywords:
  - Public Health
  - ACA
  - Diabetes
  - Health Insurance
  - North Carolina
  - Mortality
permalink: "/data-stories/2026-01-30-nc-aca-diabetes-mortality.html"
story_intro:
  paragraphs:
    - >-
      The Affordable Care Act (ACA) dramatically expanded access to health
      insurance across the United States. In North Carolina, even without
      Medicaid expansion during this period, more than one million residents
      gained coverage through the ACA Marketplace from 2013 to 2016. A core
      promise of the law was that better insurance coverage would improve
      health outcomes, especially for people with chronic conditions like
      diabetes and related comorbidities.
    - >-
      We built a county-level dataset covering all 100 North Carolina counties
      from 2010 to 2016, focusing on working-age adults (18-64) and tracking
      diabetes-related deaths per 100,000 residents. We compared trends before
      the ACA (2010-2013) to the years after initial implementation (2014-2016),
      using adults ages 65-99 as a comparison group since they were already
      covered by Medicare.
story_sections:
  -
    paragraphs:
      - >-
        At first glance, the results are surprising. Diabetes-associated death
        rates increased after 2014, even as insurance coverage expanded. This
        does not mean the ACA caused deaths to rise, but it does challenge the
        assumption that insurance expansion alone quickly translates into
        better health outcomes.
    figures:
      - src: "/assets/images/Blog 3_ACA_Diabetes/figure-1-diabetes-mortality.png"
        alt: "Diabetes-associated deaths per 100,000 before and after ACA rollout"
        popup_caption: "Diabetes-related deaths per 100,000 rose before and after ACA rollout, with no immediate decline after 2014."
  -
    paragraphs:
      - >-
        Counties with more primary care providers saw smaller increases in
        mortality after 2014. After the ACA, higher primary care availability
        became more protective, especially in counties with stronger health
        care infrastructure. This suggests that insurance works best when
        people can actually access care, not just coverage on paper.
    figures:
      - src: "/assets/images/Blog 3_ACA_Diabetes/figure-2-primary-care-protection.png"
        alt: "Primary care providers and post-ACA mortality changes by county"
        popup_caption: "After 2014, counties with more primary care providers saw stronger protection and smaller mortality increases."
  -
    paragraphs:
      - >-
        A difference-in-differences comparison shows that while overall
        mortality rose, working-age adults experienced a modest relative
        improvement compared to seniors after 2014. This suggests the ACA may
        have helped the treated group somewhat, even as broader mortality
        trends remained unfavorable.
    figures:
      - src: "/assets/images/Blog 3_ACA_Diabetes/figure-3-diff-in-diff.png"
        alt: "Difference-in-differences comparison of mortality trends by age group"
        popup_caption: "Working-age adults saw modest relative improvement compared with seniors after 2014, despite rising overall mortality."
  -
    paragraphs:
      - >-
        So why might deaths rise even as coverage improves? One explanation is
        detection and timing. More people may have entered the health system
        after years without care, leading to increased diagnosis and more
        accurate recording of diabetes-related deaths. Another possibility is
        capacity strain, especially in rural counties. Insurance expansion
        increases demand, but without enough clinics and providers, care may be
        delayed or fragmented.
      - >-
        The takeaway is not that the ACA failed, but that insurance is
        necessary and not sufficient on its own. Expanding coverage without
        expanding primary care capacity may limit health gains, especially for
        chronic diseases like diabetes. Coverage works best when the health
        care system is equipped to support it.
methodology:
  title: "Methodology"
  qa:
    - question: "Which dataset(s) were used?"
      answer: |-
        To evaluate ACA effectiveness, we merged county-level data from several sources to connect insurance, access, and diabetes outcomes.

        - North Carolina Department of Health and Human Services (NC DHHS)
        - North Carolina Health Department
        - North Carolina Office of State Budget and Management (NC OSBM)
        - UNC Sheps Health Center (health care supply and primary care availability)
        - Census Bureau
        - American Community Survey (ACS 1-year and ACS 5-year)

        State agency data provided annual county counts on mortality by disease type, population, uninsurance, and labor market conditions such as unemployment. Census and ACS data supplied demographic and socioeconomic measures, with 1-year estimates for larger counties and 5-year estimates for smaller counties.
    - question: "What is the time period for analysis?"
      answer: |-
        - 2010-2013 (pre-ACA rollout period)
        - 2013-2014 (lag year to allow ACA policy to take effect in North Carolina)
        - 2014-2016 (post-ACA rollout period)
    - question: "How was the data cleaned, and how were missing values handled?"
      answer: |-
        A key challenge was missing ACS 1-year estimates for smaller rural counties under 65,000 residents. Anti-join checks showed systematic gaps by county-year, so we used linear interpolation within counties across time, with forward and backward fills at panel edges. Interpolated values were flagged for transparency.

        Additional steps included replacing missing disease death observations with zeroes when NCDHHS did not report a county-year value, normalizing rates per 100,000 residents and provider supply per 10,000 residents, and excluding variables with excessive missingness that could not be reliably imputed. The outcome variable was logged to reduce outlier influence, and correlation and F-tests were used to finalize covariates.
    - question: "What visuals were created?"
      answer: |-
        - Visual 1: Interaction between primary care facilitator density and the ACA period to measure changing protective effects.
        - Visual 2: Difference-in-differences comparison of diabetes and related mortalities for ages 18-64 versus ages 65+.
        - Visual 3: Descriptive trends in diabetes and associated mortality before and after ACA rollout (lag year not charted).
    - question: "Is the analysis descriptive or causal?"
      answer: "Both descriptive and causal estimation via difference-in-differences and TWFE approaches."
---

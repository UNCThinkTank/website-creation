---
layout: data_story
title: "What Really Helps Youth Transitioning Out of Foster Care?"
author: "Erica James, Catherine Kunz, Kierra Wright, Chase Pierce"
date: 2026-01-28
summary: "An NYTD analysis finds most transition services show little measurable impact by age 19, while budgeting and financial management training stands out as a practical lever for better early-adulthood outcomes."
keywords:
  - Foster Care
  - Youth Transitions
  - Housing Stability
  - Employment
  - Financial Skills
permalink: "/data-stories/2026-01-28-foster-care-transition-supports.html"
story_intro:
  paragraphs:
    - >-
      Each year, approximately 20,000 children and youth age out of foster care
      and are expected to suddenly live on their own ([U.S. Department of
      Education](https://www.ed.gov/teaching-and-administration/supporting-students/special-populations/students-foster-care/students-in-foster-care)).
      Without consistent family or community support, these youth face a
      heightened risk of significant challenges in achieving stable adulthood,
      including unemployment, homelessness, and interrupted education
      ([Lansing et al., 2021](https://acf.gov/opre/report/how-employment-programs-can-support-young-people-transitioning-out-foster-care)).
      To test whether transition services help, we analyzed national data from
      the National Youth in Transition Database (NYTD), tracking more than 8,400
      foster youth across multiple states. We focused on whether receiving
      services before age 19 was associated with employment, school enrollment,
      or stable housing at age 19.
story_sections:
  -
    paragraphs:
      - >-
        Overall, the results were discouraging. Most services showed little to
        no measurable impact on employment or school enrollment, and any
        differences were too small to be meaningful. Average effects clustered
        around zero, with housing outcomes trending negative for youth who
        received services, signaling that current supports may not be strong or
        durable enough.
    figures:
      - src: "/assets/images/Blog 2_FosterCare/ames-services-youth-outcomes.png"
        srcset: "/assets/images/Blog 2_FosterCare/ames-services-youth-outcomes.png 602w, /assets/images/Blog 2_FosterCare/ames-services-youth-outcomes@2x.png 1200w"
        sizes: "(max-width: 900px) 100vw, 900px"
        popup_src: "/assets/images/Blog 2_FosterCare/ames-services-youth-outcomes@2x.png"
        alt: "Average marginal effects of transition services on education, employment, and housing outcomes"
        popup_caption: "The AME boxes (in blue) represent the average estimated change in predicted probability (via percentage points) of the outcomes occurring upon receiving services. Boxes underneath 0 on the y-axis represent a decrease in the likelihood of the outcome occurring, while boxes above 0 on the y-axis represent an increase in the likelihood of the outcome occurring. The error boxes (vertical black lines with defined endpoints) represent the confidence intervals for each outcome. If the error box does not overlap with 0 on the y-axis, the estimated effect is statistically significant (see the housing outcome box above). If the error box does overlap with 0 on the y-axis, the estimated effect is not statistically significant (see the education and employment outcome boxes above). Longer error boxes represent more uncertainty in the estimate. A possible explanation for housing being the only statistically significant outcome in this case is the lower variability from outside factors of the outcome compared to education and employment outcomes."
  -
    paragraphs:
      - >-
        One service stood out: budgeting and financial management training.
        Youth who received this support were about six percentage points more
        likely to be employed at age 19, the only clear positive effect in the
        analysis. Housing outcomes were especially concerning. Youth who
        received services before age 19 were less likely to report stable
        housing at 19. This does not mean services caused housing instability,
        but it suggests broader service access alone is not enough to prevent
        homelessness.
    figures:
      - src: "/assets/images/Blog 2_FosterCare/service-access-homelessness.png"
        srcset: "/assets/images/Blog 2_FosterCare/service-access-homelessness.png 624w, /assets/images/Blog 2_FosterCare/service-access-homelessness@2x.png 1250w"
        sizes: "(max-width: 900px) 100vw, 900px"
        popup_src: "/assets/images/Blog 2_FosterCare/service-access-homelessness@2x.png"
        alt: "Service access and homelessness among former foster youth by state"
        popup_caption: "This figure illustrates the relationship between the average number of transition services provided per youth and the share of young people who experienced homelessness after exiting foster care. Each point represents a state, restricted to those with at least 30 survey respondents to ensure a minimum level of reliability. The dashed red line depicts the overall trend, indicating that states offering a greater number of services per youth tend to exhibit slightly lower rates of post-care homelessness. While the association is modest, estimates from larger states such as California and Texas are likely more stable, whereas smaller states with limited sample sizes may contribute disproportionately to the observed variability."
  -
    paragraphs:
      - >-
        The data also revealed persistent racial disparities. Black youth and
        American Indian or Alaska Native youth were significantly less likely
        to be employed or stably housed than White youth, regardless of service
        receipt. Enrollment rates show uneven access to educational stability
        across groups, reinforcing the need for targeted, equity-focused
        supports.
    figures:
      - src: "/assets/images/Blog 2_FosterCare/enrollment-rate-by-race.png"
        srcset: "/assets/images/Blog 2_FosterCare/enrollment-rate-by-race.png 548w, /assets/images/Blog 2_FosterCare/enrollment-rate-by-race@2x.png 1100w"
        sizes: "(max-width: 900px) 100vw, 900px"
        popup_src: "/assets/images/Blog 2_FosterCare/enrollment-rate-by-race@2x.png"
        alt: "Enrollment rate by race for former foster youth"
        popup_caption: "This bar chart illustrates the enrollment rates of youth who were either enrolled in post-secondary education or had completed high school on time by age 19. Asian youth were notably more likely to be enrolled in school than their peers from other racial groups, with 46.2% enrolled. In contrast, American Indian/Alaska Native youth had the lowest enrollment rates, at only 19.9%. These patterns suggest that race is a strong and consistent predictor of youth enrollment rates."
  -
    paragraphs:
      - >-
        The policy takeaway is clear: expanding one-size-fits-all services is
        unlikely to move outcomes. Instead, policymakers should prioritize
        targeted skill-building programs, especially financial management,
        employment readiness, and independent living supports. These are
        low-cost, scalable, and tied to the only service with a measurable
        payoff. If we want better outcomes for youth leaving foster care, we
        need to invest in what actually helps them build stable, independent
        lives.
methodology:
  title: "Methodology"
  qa:
    - question: "Which dataset(s) were used?"
      answer: |-
        Data were drawn from Waves 2 and 3 of the National Youth in Transition Database merged with the Adoption and Foster Care Analysis and Reporting System, resulting in a sample of 8,464 youth observed at age 19 and a longitudinal subsample observed again at age 21 across multiple states. The dataset contains 61 variables on service receipt, demographics, foster care history, and outcomes. Service indicators include independent living skills training, budgeting and financial management, housing education, supervised independent living, rental assistance, and educational financial aid.
    - question: "What is the time period for analysis?"
      answer: |-
        The time period for analysis is years.
    - question: "How was the data cleaned (filtering, sorting, grouping, etc.)?"
      answer: |-
        The clean_names() function was used in the janitor package to standardize variable column names. The any_service variable was created to represent if youth received any 1 service out of all service variables, for analysis purposes (any_service is the service variables grouped together and coded 0/1 with 0/1 binary values). The employed_any variable was created to represent if youth had either full time or part time employment as an outcome, since these were originally two separate variables. The housed_19 variable was created to represent if youth were stably housed by mutating the homeless binary variable and only using "0" values (indicating youth was not homeless). For analysis purposes, outcomes (employed_any, enrolled_19, and housed_19) were converted to numeric data variables. The sex, race, and foster_status variables were converted to factors using factor() function for analysis purposes. Outcome variables and factors were also filtered to exclude "0" values for logistic regression analysis.
    - question: "How were missing values handled?"
      answer: |-
        11,569 duplicates were created during the data merge process that were then dropped from the dataset. 2,581 observations were dropped due to incompatibility with research question (no service records were available for these observations) NYTD/AFCARS nonresponse codes (2, 3, 77, 88, 99 - these were originally coded as "Not Applicable", "Legitimately Skipped" or "No Response") were converted to "N/A" for standardization since they were essentially missing values. Additionally, the main binary variables in the dataset were all recoded to 0/1 to drop invalid codes. The missingness in key outcome variables (homeless, employment indicators, educational enrollment, substance abuse, incarceration) is likely non-ignorable since youth experiencing homelessness, unemployment, or instability may be systematically harder to reach for follow-up surveys, creating potential bias in our estimates. The service exposure variables show minimal missingness (<0.2%), these are our primary independent variables. For data measuring and analysis purposes, the sample was restricted to complete cases while acknowledging potential selection bias.
    - question: "What visuals were created?"
      answer: |-
        The visuals created included box plots for average marginal effects (AMEs) by outcomes, bar charts showing enrollment rates by race, and state-level housing effects line plots for interaction models.
    - question: "Is the analysis descriptive or causal?"
      answer: |-
        This analysis is quasi-causal, because it uses a difference-in-differences (DiD) design to estimate the associations between receiving transition services before age 19 and outcomes at age 19. While DiD strengthens causal interpretation by comparing treated and untreated youth over time, the findings should still be interpreted cautiously due to limitations in the observational NYTD-AFCARS data, including nonrandom selection into services and coarse measurement of service intensity. Thus, the study provides evidence of estimated treatment effects under DiD assumptions, but the conclusions are not fully causal in the same way as a randomized experiment; instead, they represent credible but qualified causal estimates dependent on the validity of parallel trends and other DiD assumptions.
research_question:
  title: "Research Question"
  prompt: "What is your primary research question?"
  body: |-
    For youth exiting foster care, does receiving transition services before age 19 (e.g., job training, housing assistance, school financial aid) increase the likelihood at age 19 of (a) full-time employment, (b) postsecondary enrollment or on-time high school completion, and (c) stable housing?
datasets:
  title: "Dataset(s)"
  label: "Dataset List"
  description: |-
    For our project we used data from the National Youth in Transition Database (NYTD) and the Adoption and Foster Care Analysis and Reporting System (AFCARS). We chose these two databases because the NYTD is the best national, youth-level longitudinal source that follows cohorts of youth (surveyed at ~17, 19, 21) and includes self-reported housing outcomes and program participation - ideal for prevalence and cohort analyses of aged-out youth, and AFCARS provides administrative counts and placement/exit records (entries, exits, age at exit) for all children in foster care.

    All of these data sets were requested online here: [NDA-CAN datasets list](https://www.ndacan.acf.hhs.gov/datasets/datasets-list.cfm)
  links:
    - label: "Adoption and Foster Care Analysis and Reporting System (AFCARS), Foster Care File FY2013"
      url: "https://drive.google.com/file/d/1EkVR-AVYewFDM5F2AF7Mj95YjWF9fbmq/view?usp=drive_link"
    - label: "Adoption and Foster Care Analysis and Reporting System (AFCARS), Foster Care AB File FY2023"
      url: "https://drive.google.com/file/d/1RcAKQ55qORBaqYDjCI22epEa5ty5jg4G/view?usp=drive_link"
    - label: "AFCARS FY2013 and FY2023 combined"
      url: "https://drive.google.com/file/d/17YZMynmDiblqnt8Qd4ckag8-nV8aFzB5/view?usp=drive_link"
    - label: "National Youth in Transition Database (NYTD) - Outcomes File, Cohort Age 17 in FY2011, Waves 1-3 (Complete)"
      url: "https://drive.google.com/file/d/1DyWZ6-IYZj43vErJYQdjXrKDu0I6Tzoe/view?usp=drive_link"
    - label: "Outcomes File, FY2020"
      url: "https://drive.google.com/file/d/1jAUrWn8xM7bjca62-YT6780_seFc1fE7/view?usp=drive_link"
    - label: "Services FY2011-2023"
      url: "https://drive.google.com/file/d/1Sl6Ey2wUegA37AP5MloFiiCO-ao7Y2Xi/view?usp=drive_link"
analysis_download:
  eyebrow: "Recreate the Analysis"
  title: "Download the Data & RMD"
  description: |-
    Use these files to reproduce the foster care analysis and figures.
  files:
    - label: "Foster Care Analysis (RMD)"
      url: "/assets/downloads/foster-care-analysis.Rmd"
---

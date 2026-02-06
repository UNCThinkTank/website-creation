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
    - >-
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
        differences were too small to be meaningful.
      - >-
        Average effects clustered around zero, with housing outcomes trending
        negative for youth who received services, signaling that current
        supports may not be strong or durable enough.
    figures:
      - src: "/assets/images/Blog 2_FosterCare/ames-services-youth-outcomes.png"
        alt: "Average marginal effects of transition services on education, employment, and housing outcomes"
        popup_caption: "Average marginal effects show most transition services yield minimal change in education, employment, or housing by age 19."
  -
    paragraphs:
      - >-
        One service stood out: budgeting and financial management training.
        Youth who received this support were about six percentage points more
        likely to be employed at age 19, the only clear positive effect in the
        analysis.
      - >-
        Housing outcomes were especially concerning. Youth who received
        services before age 19 were less likely to report stable housing at 19.
        This does not mean services caused housing instability, but it suggests
        broader service access alone is not enough to prevent homelessness.
    figures:
      - src: "/assets/images/Blog 2_FosterCare/service-access-homelessness.png"
        alt: "Service access and homelessness among former foster youth by state"
        popup_caption: "States offering more services per youth do not necessarily see lower homelessness rates, underscoring limits of broad service expansion."
  -
    paragraphs:
      - >-
        The data also revealed persistent racial disparities. Black youth and
        American Indian or Alaska Native youth were significantly less likely
        to be employed or stably housed than White youth, regardless of service
        receipt.
      - >-
        Enrollment rates show uneven access to educational stability across
        groups, reinforcing the need for targeted, equity-focused supports.
    figures:
      - src: "/assets/images/Blog 2_FosterCare/enrollment-rate-by-race.png"
        alt: "Enrollment rate by race for former foster youth"
        popup_caption: "Enrollment at age 19 varies sharply by race, with Black and AI/AN youth trailing the national pattern."
  -
    paragraphs:
      - >-
        The policy takeaway is clear: expanding one-size-fits-all services is
        unlikely to move outcomes. Instead, policymakers should prioritize
        targeted skill-building programs, especially financial management,
        employment readiness, and independent living supports. These are
        low-cost, scalable, and tied to the only service with a measurable
        payoff.
      - >-
        If we want better outcomes for youth leaving foster care, we need to
        invest in what actually helps them build stable, independent lives.
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
        The clean_names() function in the janitor package was used to standardize variable column names. The any_service variable was created to represent whether youth received any one service (grouping all service variables into a 0/1 indicator). The employed_any variable was created to represent full-time or part-time employment as a single outcome. The housed_19 variable was created by mutating the homeless binary variable and only using "0" values (indicating not homeless). Outcomes (employed_any, enrolled_19, housed_19) were converted to numeric variables. The sex, race, and foster_status variables were converted to factors using factor(). Outcome variables and factors were also filtered to exclude "0" values for logistic regression analysis.
    - question: "How were missing values handled?"
      answer: |-
        11,569 duplicates created during the data merge were dropped. 2,581 observations were dropped due to incompatibility with the research question (no service records available). NYTD/AFCARS nonresponse codes (2, 3, 77, 88, 99) were converted to "N/A" for standardization since they represent missing values. Main binary variables were recoded to 0/1 to drop invalid codes. Missingness in key outcome variables (homeless, employment indicators, educational enrollment, substance abuse, incarceration) is likely non-ignorable because youth facing instability can be harder to reach for follow-up surveys, creating potential bias. Service exposure variables show minimal missingness (<0.2%) and serve as primary independent variables. The sample was restricted to complete cases while acknowledging potential selection bias.
    - question: "What visuals were created?"
      answer: |-
        The visuals included box plots for average marginal effects (AMEs) by outcomes, bar charts showing enrollment rates by race, and state-level housing effects line plots for interaction models.
    - question: "Is the analysis descriptive or causal?"
      answer: |-
        This analysis is quasi-causal because it uses a difference-in-differences design to estimate associations between receiving transition services before age 19 and outcomes at age 19. While DiD strengthens causal interpretation by comparing treated and untreated youth over time, findings should be interpreted cautiously due to limitations in the observational NYTD-AFCARS data, including nonrandom selection into services and coarse measurement of service intensity. The study provides qualified causal estimates that depend on DiD assumptions such as parallel trends.
---

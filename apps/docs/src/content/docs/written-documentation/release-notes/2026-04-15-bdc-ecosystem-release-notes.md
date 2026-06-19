---
title: "2026-04-15 BDC Ecosystem Release Notes"
---

# 2026-04-15 BDC Ecosystem Release Notes

### Introduction

The 2026-04-15 release marks the 25th update to the BDC ecosystem. This release introduces several new features, including expanded data access, new interoperability tools, enhanced compute capabilities, and new bioinformatics workflows.

The 2026-04-15 data releases include the addition of 90 new datasets. See the Data Releases section below for more information.

### Significant new features&#x20;

The following new features were released this quarter to improve the researcher experience:

#### BDC Powered by Seven Bridges (BDC-Seven Bridges)

* Enhanced File Browser Improvements: Improvements have been made to the new File Browser to increase the limit to 1,000 items when selecting items for download. Navigation has been updated to provide a smoother and more consistent experience by returning the user to the new File Browser after adding files from the data menu, faceted search, and DRS manifest instead of directing to the old Files tab.
* Dynamic Portable Format for Bioinformatics (PFB) Importer Introduced: This new release enables end-to-end seamless BDC-Gen3 to BDC-Seven Bridges data imports with reliable schema expansion (the ability to accommodate new or unexpected types of data) and preserved source study folder structures.
* Graphical User Interface (GUI)-Based Imaging Workflows: Data Studio now supports OHIF Viewer, 3D Slicer, and ImageJ allowing users to select and open image files directly from the Files tab in a Data Studio session. These applications are also available when creating a new analysis directly through Data Studio. This represents a significant added feature as users now have access to advanced visualization and annotation workflows for imaging data and custom extension and plugins can be installed and persist upon session restart. Annotated outputs and results files from these imaging tools can be exported back to a user’s project and used in downstream analysis applications.

#### BDC Powered by PIC-SURE (BDC-PIC-SURE)&#x20;

* No significant new features this quarter.

#### BDC Powered by Terra (BDC-Terra)&#x20;

* Interactive Analysis: BDC-Terra has published a new lean base docker image for cloud environments. This image also grants sudo permission when used as a base for custom Docker environments. See article for more details: [Easily build, customize, and reuse compute environments (Jupyter Notebooks) - Launching 1/16/26](https://support.terra.bio/hc/en-us/articles/31191625622811)
* Workflows: BDC-Terra has made the following updates to workflows:
* Users can now use WDL 1.1.
* Fixed an issue that could cause workflows to run slowly or not complete when utilizing Terra's lifecycle rules to move files to submissions/final-outputs.
* When running a workflow against a set of entities in a data table and generating an array value for WDL input, elements of that array now respect the order in which they were entered in the data table set.

#### BDC Powered by Gen3 (BDC-Gen3)&#x20;

* No significant new features this quarter.

#### Data Releases

The table below highlights which studies were included in the data releases in the months of February, March, and April 2026.

February 2026

| Study Name                                                                                                                                                   | phs I.D. #      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| STAMPEED: Northern Finland Birth Cohort 1966 (NFBC1966)                                                                                                      | phs000276.v2.p1 |
| NHLBI GO-ESP: Lung Cohorts Exome Sequencing Project (COPDGene)                                                                                               | phs000296.v6.p2 |
| Genome Wide Association for Asthma and Lung Function                                                                                                         | phs000355.v1.p1 |
| Determining Genetic Role in Treatment Response to Anti-Platelet Interventions (The PAPI Study)                                                               | phs000391.v1.p1 |
| National Heart Lung and Blood Institute (NHLBI) GO-ESP: Heart Cohorts Component of the Exome Sequencing Project (ARIC)                                       | phs000398.v9.p3 |
| Building on GWAS: the U.S. CHARGE consortium - Sequencing (CHARGE-S): ARIC                                                                                   | phs000668.v7.p3 |
| National Heart, Lung, and Blood Institute (NHLBI) Data Coordinating Center, Microbiome of the Lung and Respiratory Track, Lung HIV Microbiome Project (LHMP) | phs000769.v1.p1 |
| DNA Methylation age and mortality in the Lothian Birth Cohorts of 1921 and 1936                                                                              | phs000821.v1.p1 |
| MIchigan-CORnell-TEXas (MICORTEX) - Estimating the Contribution of the Network of DNA Sequence Variations to the Prediction of CHD and Diabetes              | phs000860.v7.p3 |
| NHLBI TOPMed: The Cleveland Family Study (CFS)                                                                                                               | phs000954.v5.p2 |
| Subpopulations and Intermediate Outcome Measures in COPD Study (SPIROMICS)                                                                                   | phs001119.v1.p1 |
| Metabolomics of Coronary Heart Disease (CHD) in the WHI                                                                                                      | phs001334.v2.p3 |
| Action to Control Cardiovascular Risk in Diabetes (ACCORD) Clinical Trial                                                                                    | phs001411.v1.p1 |
| NHLBI TOPMed: Boston-Brazil Sickle Cell Disease (SCD) Cohort                                                                                                 | phs001599.v2.p1 |
| NHLBI TOPMed - NHGRI CCDG: Early-onset Atrial Fibrillation in the CATHeterization GENetics (CATHGEN) Cohort                                                  | phs001600.v3.p2 |
| NHLBI TOPMed - NHGRI CCDG: Penn Medicine BioBank Early Onset Atrial Fibrillation Study                                                                       | phs001601.v3.p2 |
| NHLBI TOPMed: Children's Health Study (CHS) Integrative Genetic Approaches to Gene-Air Pollution Interactions in Asthma (GAP)                                | phs001602.v3.p1 |
| NHLBI TOPMed: Children's Health Study (CHS) Integrative Genomics and Environmental Research of Asthma (IGERA)                                                | phs001603.v3.p1 |
| Single Cell Analysis of Pulmonary Fibrosis                                                                                                                   | phs001750.v1.p1 |
| Pediatric Cardiac Genomics Consortium (PCGC) Study - Centers for Mendelian Genomics Collaboration                                                            | phs001843.v2.p3 |
| A Polygenic Score for Acute Vaso-Occlusive Pain in Pediatric Sickle Cell Disease                                                                             | phs002470.v1.p1 |
| RNA-Seq of Whole Blood from Pediatric Sickle Cell Anemia (SCA) Patients                                                                                      | phs002687.v1.p1 |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Hispanic Community Health Study/Study of Latinos (HCHS/SOL)                                     | phs002908.v2.p1 |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Genetic Epidemiology of COPD Study (COPDGene)                                                   | phs002910.v2.p2 |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Framingham Heart Study (FHS)                                                                    | phs002911.v2.p2 |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Severe Asthma Research Program (SARP)                                                           | phs002913.v2.p2 |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Multi-Ethnic Study of Atherosclerosis (MESA)                                                    | phs003017.v2.p1 |
| eIMPACT Trial: Modernized Collaborative Care to Reduce the Excess CVD Risk of Older Depressed Patients                                                       | phs003283.v1.p1 |
| Genomic and Phenotypic Profile of Sickle Cell Disease in Human Population in Cameroon                                                                        | phs003748.v1.p1 |
| COVID-19 Neuro Databank (NeuroCOVID)                                                                                                                         | phs004278.v1.p1 |
| Multicenter Hemophilia Cohort Studies (MHCS-BioLINCC)                                                                                                        | phs004485.v1.p1 |

March 2026

| Study Name                                                                                                                                 | phs I.D. #      |
| ------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| NHLBI GO-ESP: Heart Cohorts Exome Sequencing Project (CARDIA)                                                                              | phs000399.v1.p2 |
| WHIMS+ GWAS: GWAS on Selected WHI Hormone Trial European Americans                                                                         | phs000675.v4.p3 |
| NHLBI's BA23 in WHI                                                                                                                        | phs001335.v2.p3 |
| NHLBI TOPMed: Whole Genome Sequencing of Venous Thromboembolism (WGS of VTE)                                                               | phs001402.v4.p1 |
| NHLBI TOPMed: Australian Familial Atrial Fibrillation Study                                                                                | phs001435.v3.p1 |
| NHLBI TOPMed: Walk-PHaSST Sickle Cell Disease (SCD)                                                                                        | phs001514.v3.p1 |
| NHLBI TOPMed: Outcome Modifying Genes in Sickle Cell Disease (OMG)                                                                         | phs001608.v3.p1 |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): REasons for Geographic and Racial Differences in Stroke (REGARDS)             | phs002919.v2.p1 |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Prevent Pulmonary Fibrosis (PrePF)                                            | phs002975.v2.p1 |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Mediators of Atherosclerosis in South Asians Living in America Study (MASALA) | phs002980.v2.p1 |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Atherosclerosis Risk in Communities Study (ARIC)                              | phs002988.v3.p1 |
| Sickle Cell Disease Natural History Data Resource (SCD NHDR)                                                                               | phs003529.v3.p2 |
| REGARDS ECG                                                                                                                                | phs004265.v1.p1 |
| Interagency Registry for Mechanically Assisted Circulatory Support (Intermacs-BioLINCC)                                                    | phs004343.v2.p1 |
| The National Myelodysplastic Syndromes (MDS) Study- Digital Histopathological Slide Images                                                 | phs004357.v1.p1 |
| NHLBI Growth and Health Study (NGHS-BioLINCC)                                                                                              | phs004467.v1.p1 |
| Hemochromatosis and Iron Overload Screening Study (HEIRS-BioLINCC)                                                                         | phs004477.v1.p1 |
| Healthy Communities Study (HCS-BioLINCC)                                                                                                   | phs004494.v1.p1 |
| Dietary Intervention Study in Children (DISC-BioLINCC)                                                                                     | phs004495.v1.p1 |
| Retrovirus Epidemiology Donor Study (REDS) HTLV Cohort (REDS-HTLV-BioLINCC)                                                                | phs004496.v1.p1 |
| A Randomized Controlled Study of Adenotonsillectomy for Children with Obstructive Sleep Apnea Syndrome (CHAT-BioLINCC)                     | phs004498.v1.p1 |
| Retrovirus Epidemiology Donor Study-II (REDS II) Leukocyte Antibodies Prevalence Study (LAPS) (REDS-II-LAPS-BioLINCC)                      | phs004502.v1.p1 |
| Pulmonary Complications of HIV Infection Study (PACS-BioLINCC)                                                                             | phs004513.v1.p1 |

April 2026

| Study Name                                                                                                                                                                                              | phs I.D. #      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| NHLBI TOPMed: Determining the Association of Chromosomal Variants with Non-PV Triggers and Ablation-Outcome in AF (DECAF)                                                                               | phs001546.v3.p1 |
| NHLBI TOPMed: Children's Health Study (CHS) Effects of Air Pollution on the Development of Obesity in Children (Meta-AIR)                                                                               | phs001604.v3.p1 |
| NHLBI TOPMed: The Genetic Causes of Unexplained Cardiomyopathies (UNID\_CM)                                                                                                                             | phs002382.v1.p1 |
| NIH RECOVER-Pediatric: Understanding the Long-Term Impact of COVID on Children and Families                                                                                                             | phs003461.v4.p4 |
| NIH RECOVER: A Multi-Site Observational Study of Post-Acute Sequelae of SARS-CoV-2 Infection in Adults                                                                                                  | phs003463.v6.p4 |
| Studies of Left Ventricular Dysfunction (SOLVD-BioLINCC)                                                                                                                                                | phs003668.v2.p1 |
| NIH RECOVER: A Multi-Site Pathology Study of Post-Acute Sequelae of SARS-CoV-2 Infection                                                                                                                | phs003768.v4.p2 |
| Hemochromatosis and Iron Overload Screening Study (HEIRS-BioLINCC)                                                                                                                                      | phs004477.v1.p1 |
| Dietary Intervention Study in Children (DISC-BioLINCC)                                                                                                                                                  | phs004495.v1.p1 |
| Retrovirus Epidemiology Donor Study-II (REDS II) Donor Iron Status Evaluation Study (RISE) (REDS\_II\_RISE -BioLINCC)                                                                                   | phs004507.v1.p1 |
| Retrovirus Epidemiology Donor Study-II (REDS II) Molecular Surveillance (MS) - (REDS\_II\_MS\_BioLINCC)                                                                                                 | phs004524.v1.p1 |
| Retrovirus Epidemiology Donor Study-II (REDS II) Natural History of Disease and Laboratory Findings in Trypanosoma Cruzi Antibody-Positive Brazilian Blood Donors (CHAGAS) (REDS\_II\_CHAGAS\_BioLINCC) | phs004528.v1.p1 |
| Natural History Study of Non-A, Non-B Post-Transfusion Hepatitis (NANB-TAH\_BioLINCC)                                                                                                                   | phs004538.v1.p1 |
| Novel Influenza A Surveillance Registry (H1N1\_BioLINCC)                                                                                                                                                | phs004540.v1.p1 |
| New Data Analysis Methods for Actigraphy in Sleep Medicine (MASM\_BioLINCC)                                                                                                                             | phs004541.v1.p1 |
| Stroke Hyperglycemia Insulin Network Effort (SHINE) Trial (NINDS-SHINE)                                                                                                                                 | phs004544.v1.p1 |
| Heparin-Induced Thrombocytopenia - Retrospective Analysis of Data on Incidence and Outcomes Study (HIT\_RADIO\_BioLINCC)                                                                                | phs004545.v1.p1 |
| Myocardial Ischemia and Transfusion (MINT) Trial                                                                                                                                                        | phs004546.v1.p1 |
| Thrombolysis in Myocardial Infarction (TIMI) (TIMI\_II\_BioLINCC)                                                                                                                                       | phs004550.v1.p1 |
| Dietary Approaches to Stop Hypertension (DASH) (DASH\_BioLINCC)                                                                                                                                         | phs004553.v1.p1 |
| Systolic Hypertension in the Elderly Program (SHEP\_BioLINCC)                                                                                                                                           | phs004555.v1.p1 |
| Trials of Hypertension Prevention (TOHP\_BioLINCC)                                                                                                                                                      | phs004556.v1.p1 |
| Viral Activation Transfusion Study (VATS-BioLINCC)                                                                                                                                                      | phs004557.v1.p1 |
| Trial to Reduce Alloimmunization to Platelets (TRAP\_BioLINCC)                                                                                                                                          | phs004558.v1.p1 |
| Practice Based Opportunities for Weight Reduction Trial at the University of Pennsylvania (POWER\_UP\_BioLINCC)                                                                                         | phs004559.v1.p1 |
| ToRsemide compArisoN With furoSemide FOR Management of Heart Failure (TRANSFORM-HF-BioLINCC)                                                                                                            | phs004560.v1.p1 |
| AsthmaNet Proof of Concept Study of Alendronate for Asthma (ALFA\_BioLINCC)                                                                                                                             | phs004561.v1.p1 |
| Prevention of Events with Angiotensin-Converting Enzyme Inhibitor Therapy (PEACE\_BioLINCC)                                                                                                             | phs004562.v1.p1 |
| Anti-HIV Immunoglobulin in Prevention of Maternal-Fetal HIV Transmission: Pediatric AIDS Clinical Trials Group protocol 185 (PACTGP-BioLINCC)                                                           | phs004581.v1.p1 |
| AsthmaNet -APRIL and Oral Corticosteroids for Treating Episodes of Significant Lower Respiratory Tract Symptoms in Children (OCELOT)                                                                    | phs004582.v1.p1 |
| AsthmaNet Individualized Therapy for Asthma in Toddlers (INFANT) and Acetaminophen versus Ibuprofen in Children with Asthma (AVICA-BioLINCC)                                                            | phs004584.v1.p1 |
| AsthmaNet Best African American Response to Asthma Drugs (BARD-BioLINCC)                                                                                                                                | phs004585.v1.p1 |
| AsthmaNet Vitamin D Add-on Therapy Enhances Corticosteroid Responsiveness in Asthma (VIDA-BioLINCC)                                                                                                     | phs004587.v1.p1 |
| Lipid Research Clinics (LRC) Coronary Primary Prevention Trial (CPPT-BioLINCC)                                                                                                                          | phs004589.v1.p1 |
| Prospective Multi-Center Evaluation of the Duration of Therapy for Thrombosis in Children (Kids-DOTT-BioLINCC)                                                                                          | phs004590.v1.p1 |

#### Upcoming Data Releases

The DMC is currently working on releasing 56 studies in May. More details to follow.&#x20;

For detailed platform release notes please consult the following resources:

* Gen3 release notes
* [Terra release notes](https://support.terra.bio/hc/en-us/sections/4414878945819-Release-Notes)
* [Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/changelog/)
* [PIC-SURE release notes](https://pic-sure.gitbook.io/nhlbi-biodata-catalyst-powered-by-pic-sure/release-notes/release-notes)

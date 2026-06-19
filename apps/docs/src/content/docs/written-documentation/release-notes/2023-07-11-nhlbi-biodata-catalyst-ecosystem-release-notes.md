---
title: "2023-07-11 NHLBI BioData Catalyst Ecosystem Release Notes"
---

# 2023-07-11 NHLBI BioData Catalyst Ecosystem Release Notes

### **Introduction**

The 2023-07-11 release marks the fourteenth release for the NHLBI BioData Catalyst® (BDC) ecosystem. This release includes several new features, e.g., Faceted Search in _BDC Powered by Seven Bridges (BDC-Seven Bridges),_ along with documentation to help new users get started on the ecosystem, e.g., updated WDL documentation in _BDC Powered by Terra (BDC-Terra)_. This release also includes enhanced support for discovering what datasets are available via _BDC Powered by Gen3_. Please find more detail on the new features and user support materials in the sections below.

The 2023-07-11 data releases include the addition of various research projects related to COVID-19, lung development, platelet transfusion refractoriness, sickle cell anemia, asthma, pregnancy outcomes, and family health studies. Please refer to the Data Releases section below for information on upcoming data releases. A list of currently available data can be viewed on the [Data page](https://biodatacatalyst.nhlbi.nih.gov/resources/data) of the BDC website.

### **Significant new features**

**Faceted Search in&#x20;**_**BDC-Seven Bridges**_**:** Version 1 of Faceted Search has been deployed for all users on _BDC-Seven Bridges_. This feature enables users to query or filter any BDC ingested data in a faceted way to find files and form groups of files by searching characteristics such as authorization status, study accession number, type of data, etc. With the release of v1 Faceted Search, users can now more easily find data that is relevant to their research. Faceted Search is currently available for 10 datasets and will be expanded to all hosted datasets in the following quarter. The Faceted Search feature can be found under the Data drop-down menu.

_**BDC-Gen3**_**&#x20;Metadata Being Updated to bring data from dbGaP FHIR database:** _BDC-Gen3’s_ Discovery Page (and underlying _BDC-Gen3_ Source of Truth Metadata API) allows unauthenticated users to discover what datasets are available in BDC. Fast Health Interoperability Resources (FHIR) is an Health Level Seven International (HL7) specification for Healthcare Interoperability. Last quarter, _BDC-Gen3_ worked to consume the new metadata from the dbGaP FHIR Server (as part of the officially defined data ingestion process). This quarter, _BDC-Gen3’s_ Data Ingestion Pipeline has been updated to load FHIR metadata every new data release. The loaded metadata is available to all clients/users through _BDC-Gen3’s_ Metadata API, and loaded metadata is viewable in _BDC-Gen3’s_ Discovery Page.

**New and Improved Genomic Filtering on&#x20;**_**BDC Powered by PIC-SURE (BDC-PIC-SURE)**_**:** The Genomic Filtering modal on _BDC-PIC-SURE_ has been updated to more accurately represent the relatedness between the various filtering fields. This includes the revamped “Variant consequence calculated” field, which includes different levels of severity and their associated consequences. Additionally, the “Selected Genomic Filters” section now more explicitly summarizes the filter criteria being applied.

**Edit Queries Built in&#x20;**_**BDC-PIC-SURE**_**&#x20;Using the API:** Researchers that created a cohort on _BDC-PIC-SURE’s_ user interface can now edit that query’s parameters using Python or R code via the _BDC-PIC-SURE API_. This provides more flexibility for researchers wanting to refine or change their cohort after export and eliminates the need to return to the user interface.<br>

### **New user support materials and documentation**

**Updated WDL documentation in&#x20;**_**BDC-Terra**_**:** Based on user feedback, Terra documentation has been expanded and updated to include: A new [wdl-docs GitHub repository](https://github.com/openwdl/wdl) with a section dedicated to resources created by the WDL community, a new wdl-docs website to host the documentation from the new wdl-docs GitHub repository, updates to all existing WDL syntax documentation to match the WDL 1.0 spec, 17 new articles, 11 cookbook-style documents to teach users about specific use cases and provide example workflows, and 6 best practices documents to help users understand some of the grayer areas of coding in WDL. The documents are now available on the new wdl-docs GitHub repository.

**New Code in “0\_Export\_from\_UI”&#x20;**_**BDC-PIC-SURE API**_**&#x20;Examples:** The example code has been updated to include new coding examples on how to use the _BDC-PIC-SURE_ API to edit query parameters of a cohort built in the _BDC-PIC-SURE_ user interface. These examples are available in both Python and R in both Jupyter and RStudio.

### **Data Releases**

The table below highlights which studies were included in the 2023-07-11 data release. The Q2 data release included various research projects related to COVID-19, lung development, platelet transfusion refractoriness, sickle cell anemia, asthma, pregnancy outcomes, and family health studies. These include two studies from the COVID-19 Therapeutic Interventions and Vaccines initiative (ACTIV4a and ACTIV4c). There is a study on lung development (LungMAP) and another tackling platelet transfusion refractoriness in patients with severe thrombocytopenia using Eculizumab (DIR-Eculizumab). Other studies revolve around the use of hydroxyurea in children with sickle cell anemia (BABYHUG), the genetic epidemiology of asthma in Costa Rica (CRA), nulliparous pregnancy outcomes (nuMoM2b), multicenter study of hydroxyurea (MSH), and the Cleveland Family Study (CFS). The data is now available for access across the entire ecosystem.

| Study Name                                                                                                                                       | phs I.D. #         | Acronym                          | New to BioData Catalyst | New study version |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | -------------------------------- | ----------------------- | ----------------- |
| Accelerating COVID-19 Therapeutic Interventions and Vaccines 4 ACUTE (ACTIV4a) v1.0, v1.1                                                        | phs002694.v3.p1.c1 | COVID19-ACTIV4A\_GRU             | No                      | Yes               |
| COVID-19 Post-hospital Thrombosis Prevention Study (ACTIV4c)                                                                                     | phs003063.v1.p1.c1 | COVID19-ACTIV4C\_GRU             | No                      | Yes               |
| Molecular Atlas of Lung Development (LungMAP)                                                                                                    | phs001961.v2.p1.c1 | LungMAP-MALD\_GRU                | Yes                     | Yes               |
| Complement Inhibition Using Eculizumab to Overcome Platelet Transfusion Refractoriness in Patients with Severe Thrombocytopenia (DIR-Eculizumab) | phs003212.v1.p1.c1 | DIR-Eculizumab\_GRU              | Yes                     | Yes               |
| Hydroxyurea to Prevent Organ Damage in Children with Sickle Cell Anemia (BABYHUG)                                                                | phs002415.v1.p1.c1 | BioLINCC-BabyHug\_DS-SCD-IRB-RD  | No                      | No                |
| The Genetic Epidemiology of Asthma in Costa Rica (CRA)                                                                                           | phs000988.v4.p1.c1 | topmed-CRA\_DS-ASTHMA-IRB-MDS-RD | No                      | Yes               |
| Nulliparous Pregnancy Outcomes Study: Monitoring Mothers-to-Be (nuMoM2b)                                                                         | phs002808.v1.p1.c1 | topmed-NuMom2B\_GRU-IRB          | Yes                     | Yes               |
| Multicenter Study of Hydroxyurea (MSH)                                                                                                           | phs002348.v1.p1.c1 | BioLINCC-MSH\_GRU                | No                      | No                |
| The Cleveland Family Study (NSRR-CFS)                                                                                                            | phs002715.v1.p1.c1 | NSRR-NSRR-CFS\_DS-HLBS-IRB-NPU   | No                      | No                |

### **Planned Upcoming Data Releases**

| Study Name                                                                                                    | phs I.D. #         | Acronym                           | New to BioData Catalyst | New study version |
| ------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------------------- | ----------------------- | ----------------- |
| NHLBI TOPMed: Boston Early-Onset COPD Study in the TOPMed Program (EOCOPD)                                    | phs000946.v5.p1.c1 | topmed-EOCOPD\_DS-CS-RD           | No                      | Yes               |
| NHLBI TOPMed: The Cleveland Family Study (CFS)                                                                | phs000954.v4.p2.c1 | topmed-CFS\_DS-HLBS-IRB-NPU       | No                      | Yes               |
| NHLBI TOPMed: The Jackson Heart Study (JHS)                                                                   | phs000964.v5.p1.c1 | topmed-JHS\_HMB-IRB-NPU           | No                      | Yes               |
| NHLBI TOPMed: The Jackson Heart Study (JHS)                                                                   | phs000964.v5.p1.c2 | topmed-JHS\_DS-FDO-IRB-NPU        | No                      | Yes               |
| NHLBI TOPMed: The Jackson Heart Study (JHS)                                                                   | phs000964.v5.p1.c3 | topmed-JHS\_HMB-IRB               | No                      | Yes               |
| NHLBI TOPMed: The Jackson Heart Study (JHS)                                                                   | phs000964.v5.p1.c4 | topmed-JHS\_DS-FDO-IRB            | No                      | Yes               |
| NHLBI TOPMed: Whole Genome Sequencing and Related Phenotypes in the Framingham Heart Study (FHS)              | phs000974.v5.p3.c1 | topmed-FHS\_HMB-IRB-MDS           | No                      | Yes               |
| NHLBI TOPMed: Whole Genome Sequencing and Related Phenotypes in the Framingham Heart Study (FHS)              | phs000974.v5.p3.c2 | topmed-FHS\_HMB-IRB-NPU-MDS       | No                      | Yes               |
| NHLBI TOPMed: Heart and Vascular Health Study (HVH)                                                           | phs000993.v5.p2.c1 | topmed-HVH\_HMB-IRB-MDS           | No                      | Yes               |
| NHLBI TOPMed: Heart and Vascular Health Study (HVH)                                                           | phs000993.v5.p2.c2 | topmed-HVH\_DS-CVD-IRB-MDS        | No                      | Yes               |
| NHLBI TOPMed: The Vanderbilt AF Ablation Registry (VAFAR)                                                     | phs000997.v5.p2.c1 | topmed-VAFAR\_HMB-IRB             | No                      | Yes               |
| NHLBI TOPMed: The Vanderbilt Atrial Fibrillation Registry (VU)                                                | phs001032.v6.p2.c1 | topmed-VU\_AF\_GRU-IRB            | No                      | Yes               |
| NHLBI TOPMed: The Genetics and Epidemiology of Asthma in Barbados (BAGS)                                      | phs001143.v4.p1.c1 | topmed-BAGS\_GRU-IRB              | No                      | Yes               |
| NHLBI TOPMed: Cleveland Clinic Atrial Fibrillation Study (CCAF)                                               | phs001189.v4.p1.c1 | topmed-CCAF\_AF\_GRU-IRB          | No                      | Yes               |
| NHLBI TOPMed: Cardiovascular Health Study (CHS)                                                               | phs001368.v3.p2.c1 | topmed-CHS\_HMB-MDS               | No                      | Yes               |
| NHLBI TOPMed: Cardiovascular Health Study (CHS)                                                               | phs001368.v3.p2.c2 | topmed-CHS\_HMB-NPU-MDS           | No                      | Yes               |
| NHLBI TOPMed: Cardiovascular Health Study (CHS)                                                               | phs001368.v3.p2.c3 | topmed-CHS\_DS-CVD-MDS            | Yes                     | Yes               |
| NHLBI TOPMed: Cardiovascular Health Study (CHS)                                                               | phs001368.v3.p2.c4 | topmed-CHS\_DS-CVD-NPU-MDS        | No                      | Yes               |
| NHLBI TOPMed: Diabetes Heart Study (DHS) African American Coronary Artery Calcification (AACAC)               | phs001412.v3.p1.c1 | topmed-AACAC\_HMB-IRB-COL-NPU     | No                      | Yes               |
| NHLBI TOPMed: Diabetes Heart Study (DHS) African American Coronary Artery Calcification (AACAC)               | phs001412.v3.p1.c2 | topmed-AACAC\_DS-DHD-IRB-COL-NPU  | No                      | Yes               |
| NHLBI TOPMed: MESA and MESA Family AA-CAC (MESA)                                                              | phs001416.v2.p1.c1 | topmed-MESA\_HMB                  | No                      | Yes               |
| NHLBI TOPMed: MESA and MESA Family AA-CAC (MESA)                                                              | phs001416.v2.p1.c2 | topmed-MESA\_HMB-NPU              | No                      | Yes               |
| Clinical-trial of COVID-19 Convalescent Plasma in Outpatients (C3PO)                                          | phs002752.v1.p1.c1 | COVID19-C3PO\_GRU                 | No                      | Yes               |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Genetic Epidemiology of COPD Study (COPDGene)    | phs002910.v1.p1.c1 | COVID19-C4R\_COPDGene\_HMB        | Yes                     | Yes               |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Genetic Epidemiology of COPD Study (COPDGene)    | phs002910.v1.p1.c2 | COVID19-C4R\_COPDGene\_DS-CS      | Yes                     | Yes               |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Atherosclerosis Risk in Communities Study (ARIC) | phs002988.v1.p1.c1 | COVID19-C4R\_ARIC\_HMB-IRB        | Yes                     | Yes               |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Framingham Heart Study (FHS)                     | phs002911.v1.p1.c1 | COVID19-C4R\_FHS\_HMB-IRB-MDS     | Yes                     | Yes               |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Framingham Heart Study (FHS)                     | phs002911.v1.p1.c2 | COVID19-C4R\_FHS\_HMB-IRB-NPU-MDS | Yes                     | Yes               |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Severe Asthma Research Program (SARP)            | phs002913.v1.p1.c1 | COVID19-C4R\_GRU-PUB-NPU          | Yes                     | Yes               |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Severe Asthma Research Program (SARP)            | phs002913.v1.p1.c2 | COVID19-C4R\_GRU-PUB              | Yes                     | Yes               |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Severe Asthma Research Program (SARP)            | phs002913.v1.p1.c3 | COVID19-C4R\_DS-AAI-PUB-NPU       | Yes                     | Yes               |
| Collaborative Cohort of Cohorts for COVID-19 Research (C4R): Severe Asthma Research Program (SARP)            | phs002913.v1.p1.c4 | COVID19-C4R\_DS-AAI-PUB           | Yes                     | Yes               |
| Multi-Ethnic Study of Atherosclerosis (BioLINCC)                                                              | phs003288.v1.p1.c1 | BioLINCC-MESA\_HMB                | Yes                     | Yes               |
| Multi-Ethnic Study of Atherosclerosis (BioLINCC)                                                              | phs003288.v1.p1.c2 | BioLINCC-MESA\_HMB-NPU            | Yes                     | Yes               |

### **For detailed platform release notes please consult the following resources:**

_BDC-Gen3_ release notes\
[_BDC-Terra_ release notes](https://support.terra.bio/hc/en-us/categories/360000693572)\
[_BDC-Seven Bridges_ release notes](https://sb-biodatacatalyst.readme.io/blog)\
[_BDC-PIC-SURE_ release notes](https://pic-sure.gitbook.io/nhlbi-biodata-catalyst-r-powered-by-pic-sure/release-notes/release-notes)\
[_BDC-Dockstore_ release notes](https://docs.dockstore.org/en/develop/changelog.html)

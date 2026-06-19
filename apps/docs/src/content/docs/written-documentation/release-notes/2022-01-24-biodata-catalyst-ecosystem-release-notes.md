---
title: "2022-01-24 BioData Catalyst Ecosystem Release Notes"
---

# 2022-01-24 BioData Catalyst Ecosystem Release Notes

### **Introduction**

The 2022-01-24 release marks the eighth release for the NHLBI BioData Catalyst ecosystem. This release includes several new features (e.g., the LocusZoom interactive app) along with documentation and tutorials (e.g., a guide for consortia using Seven Bridges) to help new users get started on the system. Please find more detail on the new features and user support materials in the sections below.

The 2022-01-24 data release includes the addition of TOPMed Freeze 9 batch 1 & 2, CATHGEN and PETAL RED CORAL datasets. Please refer to the Data Release section below for more information as well as the[ Data page](https://biodatacatalyst.nhlbi.nih.gov/resources/data) on the BioData Catalyst website.<br>

### **Significant new features**

**LocusZoom Interactive App on Seven Bridges:** LocusZoom, part of the GENESIS pipeline, enables users to interactively visualize and explore results of single variant association tests. The tool also provides a User Guide on the front page that walks users through inputs, outputs, and functionality of the app with the ability to practice on open access data from the University of Michigan. To access the app, please email [support@sevenbridges.com](mailto:support@sevenbridges.com).

**GENESIS Model Explorer Interactive App on Seven Bridges:** The Model Explorer app was developed by our collaborators at the University of Washington and then handed off to the Seven Bridges team for hosting. Through the app, users can visualize and explore the results of the GENESIS Null Model workflow including phenotype variables, genotypes, and GENESIS model results without prior R programming knowledge. To access the app, please email [support@sevenbridges.com](mailto:support@sevenbridges.com).

**Phenome-Wide analysis examples on BioData Catalyst studies using PIC-SURE:** New  example [notebooks](https://github.com/hms-dbmi/Access-to-Data-using-PIC-SURE-API/tree/master/NHLBI_BioData_Catalyst) are available on Terra (Python and R) and Seven Bridges (RStudio and Python) illustrating how to query data using the PIC-SURE API. It takes a simple PheWAS analysis as a use case. This PheWAS example analysis focuses on the TOPMed DCC Harmonized Variables. The harmonized variables are leveraged to provide an example PheWAS focused on total cholesterol in two studies: ARIC and FHS. This example shows how the PIC-SURE API is helpful in wrangling phenotypic data.<br>

### **New user support materials and documentation**

**Guide for Consortia using Seven Bridges:** [Collaborating on the NHLBI BioData Catalyst: A Guide for Consortia](https://sb-biodatacatalyst.readme.io/docs/collaborating-on-the-nhlbi-biodata-catalyst-a-guide-for-consortia). This guide describes how consortia can use platform projects to selectively share, harmonize, and distribute data. This guide was inspired by conversations with the C4R consortia which revealed the type of guidance and information data that coordinating centers and consortia members need in order to get set up on BioData Catalyst as quickly as possible. In the outlined example, multiple study centers can bring their data to BioData Catalyst and the Data Coordinating Center (DCC) can then link that data to a centralized project to perform harmonization. The DCC can then distribute select harmonized datasets to analysis working groups that applied for permission to study the harmonized data. Future consortia can use the architecture illustrated in this guide to quickly onboard and begin coordination.

**Guide for Workshops and Courses on Seven Bridges:** [Using NHLBI BioData Catalyst for Workshops and Courses](https://sb-biodatacatalyst.readme.io/docs/using-nhlbi-biodata-catalyst-for-workshops-and-courses). This guide was developed after Seven Bridges worked with the University of Washington Summer Institute in Statistical Genetics and the American Thoracic Society to develop a summer workshop and a course, respectively. The guide describes the UW Summer Institute and ATS course case studies and step-by-step considerations including a timetable for future educators that could use BioData Catalyst for their classrooms.<br>

### **Data Releases**

The table below highlights which studies were included in the data releases done in Q4 2021.\
TOPMed Freeze 9 datasets were ingested as the data became available. 37 datasets were ingested and released in 2 batches. TOPMed CATHGEN study was released. Of the COVID 19 datasets, PETAL RED CORAL data was released on December 1st after receiving the official publication date. The data is now available for access across the entire ecosystem.

| **Study Name**                                                | **phs I.D. #** | **Acronym** | **New to BioData Catalyst** | **New study version** |
| ------------------------------------------------------------- | -------------- | ----------- | --------------------------- | --------------------- |
| <p>TOPMed Freeze 9 - Batch 1</p><p>(22 datasets included)</p> | Various        | Various     | false                       | NA                    |
| <p>TOPMed Freeze 9 - Batch 2</p><p>(15 datasets included)</p> | Various        | Various     | false                       | NA                    |
| topmed-CATHGEN\_DS-CVD-IRB                                    | phs001600      | CATHGEN     | True                        | 6                     |
| PETAL - RED CORAL (COVID-19)                                  | phs002363      | RED\_CORAL  | True                        | 1                     |

### **Planned upcoming Data Releases**

| **Study Name**                                                | **phs I.D. #** | **Acronym** | **New to BioData Catalyst** | **New study version** |
| ------------------------------------------------------------- | -------------- | ----------- | --------------------------- | --------------------- |
| PCGC SRA Data                                                 | phs000571      |             | True                        | 5                     |
| <p>TOPMed Freeze 9 - Batch 3</p><p>(20 datasets included)</p> | Various        | Various     | false                       | NA                    |
| <p>TOPMed Freeze 9 - Batch 4</p><p>(20 datasets included)</p> | Various        | Various     | false                       | NA                    |
| ACTIV-4A                                                      | phs002694      | ACTIV4A     | True                        | 1                     |
| ACTIV-4B                                                      | phs002710      | ACTIV4B     | True                        | 1                     |

### **For detailed platform release notes please consult the following resources:**

* Gen3 release notes
* [Terra release notes](https://support.terra.bio/hc/en-us/categories/360000693572)
* [Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/blog)
* PIC-SURE release notes
* [Dockstore release notes](https://docs.dockstore.org/en/develop/changelog.html)

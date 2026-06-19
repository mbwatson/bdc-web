---
title: "2021-07-09 BioData Catalyst Ecosystem Release Notes"
---

# 2021-07-09 BioData Catalyst Ecosystem Release Notes

### **Introduction**

The 2021-07-09 release marks the sixth release for the NHLBI BioData Catalyst ecosystem. This release includes several new features (e.g., SAS on Seven Bridges and Galaxy’s integration with Terra) along with documentation and tutorials to help new users get started on the system (e.g., PIC-SURE Open Access). This release also includes enhanced support for maintaining and versioning CWL on external tool repositories. Please find more details on the new features and user support materials in the sections below.

The 2021-07-09 data release includes the addition of CRAMs and unharmonized clinical files for the parent project CARDIA and 3 other TOPMed programs. The TOPMed program REDS-III received a version update. The unharmonized clinical files were uploaded for the 5 BioLINCC projects and the 2 open tutorial projects. Please refer to the Data Release section below for more information as well as the[ Data](https://biodatacatalyst.nhlbi.nih.gov/resources/data) page on the BioData Catalyst website.



### **Significant new features**

**Authentication through the NIH Researcher Authentication Service:** The BioData Catalyst ecosystem updated the authentication mechanism to use the NIH Researcher Authentication Service. Researchers will now be redirected to the NIH RAS page to enter their eRA Commons credentials when logging into one of the platforms within the ecosystem.

**New Jupyter notebook** [**Sample and Variant quality control methods with Hail**](https://app.terra.bio/#workspaces/biodata-catalyst/BioData%20Catalyst%20Collection/notebooks/launch/Sample%20and%20variant%20Quality%20Control%20using%20Hail.ipynb) published in the BioData Catalyst Collection Featured Workspace on Terra.

**Galaxy has integrated with Terra:** Galaxy is now available through the other “faces” of Terra, including the [NHLBI BioData Catalyst](https://terra.biodatacatalyst.nhlbi.nih.gov/). You can launch your very own Galaxy server without having to do any configuration yourself, right from the Terra web interface. This marks a transition from alpha to beta development status of Galaxy on Terra, meaning that the software is more mature and considered reliable enough for regular work, with the caveat that minor changes may occur over time as we smooth out any remaining rough edges and improve user experience in the application. Learn more about how to use Galaxy in Terra [here](https://support.terra.bio/hc/en-us/articles/360050566271). Features of Galaxy and its use within Terra are also featured in our blog post [here](https://terra.bio/a-galaxy-of-tools-at-your-fingertips/). You can also import Dockstore workflows into Galaxy when it's launched in Terra. Speaking of workflows, Cromwell 64 is now live on Terra.

[**Seurat package now included by default in R-based cloud environments**](https://terra.bio/seurat-package-now-included-in-r-based-cloud-environments/)**:** The RStudio image now has [Seurat](https://satijalab.org/seurat/), a tool for single-cell transcriptomics, as well as [crcmod](https://pypi.org/project/crcmod/), a package for verifying the integrity of an object in Google Cloud Storage.

**Interactive Analysis:** Jupyter Notebook images have been updated with Bioconductor 3.13.0. See the Bioconductor release notes [here](http://bioconductor.org/news/bioc_3_13_release/).

**SAS:** Users on Seven Bridges can now launch SAS for interactive analysis from the Data Cruncher feature. All project files are available within SAS. Users can select from three SAS offerings built on top of SAS Studio: 1) SAS Business Intelligence enables users to utilize SAS code to manage data, create, modify and compare descriptive and predictive models. Capabilities include clustering, decision trees, linear and logistic regression. 2) SAS Analytics adds the power of SAS Viya’s Data Mining and Machine Learning algorithms such as neural networks, gradient boosting, and random forest. 3) SAS Data Science provides access to text analysis, time series models, advanced forecasting and model governance.

**LocusZoom Interactive Application:** Users on Seven Bridges can now launch an R Shiny application that enables users to select, visualize and interactively explore single variant association test results data, with no prior R programming knowledge. Researchers can explore existing analyses available in the [University of Michigan](https://portaldev.sph.umich.edu/docs/api/v1/#introduction) database, generate LocusZoom plots for example data, or provide their own association .RData files. The app also provides the JSONizer tool, which enables researchers to subset their association test results (.RData) files and to convert them into the appropriate JSON files required by LocusZoom. Users can launch the application from the [Public project “LocusZoom Shiny App”](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/u/biodatacatalyst/locuszoom-shiny-app/) in the top navigation bar.

**Example notebook for data import with DRS:** These example notebooks on Seven Bridges provide users with the code and steps for importing data from CAVATICA (Kids First data) as well as importing GTEx data from the NHGRI AnVIL system. The import utilizes the DRS functionality to access files that are stored on other NIH cloud systems. Users can find notebooks from the [Public Project “Data Interoperability”](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/u/biodatacatalyst/data-interoperability/) in the top navigation bar.&#x20;

**CWL v1.2 available:** BioData Catalyst Powered by Seven Bridges now supports Common Workflow Language (CWL) version 1.2. The new version of CWL brings a major new functionality - [conditional execution of workflow steps](https://docs.sevenbridges.com/docs/cwl-v12-conditional-execution), as well as several minor features and improvements. For the detailed change log please see the [CWL CommandLineTool specification](https://www.commonwl.org/v1.2/CommandLineTool.html#Changelog) and the [CWL Workflow specification](https://www.commonwl.org/v1.2/Workflow.html#Changelog).

**New CWL tools and workflows on BioData Catalyst Powered by Seven Bridges:** Users can find all these tools and more in the [Public Apps Gallery](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps):

* [Regenie 2.0.1](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#admin/sbg-public-data/regenie-2-0-1-cwl1-1/) - This is a tool for whole genome regression analysis.
* [GENESIS Association results plotting](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#admin/sbg-public-data/assoc-plots-r/) - This UW-GAC tool is a standalone app for creating Manhattan and QQ plots from the GENESIS association test results with additional filtering and stratification options available.&#x20;
* [WGSA 0.9](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#admin/sbg-public-data/wgsa-0-9/) - This is a scalable SNV and INDEL annotation pipeline, performing a spectrum of annotations in a single tool. It integrates annotations from dozens of databases and annotation tools.&#x20;
* [GENESIS Update Null Model for Fast Score Test](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#admin/sbg-public-data/genesis-null-model-update-for-fast-score-test/) - This updates the null model file obtained with the GENESIS Null model workflow so that it can be used in the GENESIS Single Variant Association Testing workflow in fast score mode.&#x20;
* [Missing rate by sample](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#smgogarten/uw-gac-commit/missing-rate-by-sample/) - This UW-GAC tool was created for QC in GWAS. The tool calculates missing rate by sample. A subset of variants may be specified.&#x20;
* [Missing rate by variant](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#smgogarten/uw-gac-commit/missing-rate-by-variant/) - This UW-GAC tool was created for QC in GAWS. The tool calculates missing rate by variant. A subset of samples and/or variants may be specified.
* [Allele frequency](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#smgogarten/uw-gac-commit/allele-frequency/) - This UW-GAC tool was created for QC in GAWS. The tool calculates allele frequency and counts. Values for both the alternate allele (count, frequency) and the minor allele (MAC, MAF) are returned. A subset of samples and/or variants may be specified.
* [Id-index](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#smgogarten/uw-gac-commit/ld-index/) - This UW-GAC tool calculates the LD among an index variant and each variant in a set of other variants stored in a GDS file using the snpgdsLDMat function in the [SNPRelate R package](https://bioconductor.org/packages/release/bioc/html/SNPRelate.html) and a wrapper [LDcompute R package](https://github.com/UW-GAC/ld-compute).
* [Id-pair](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#smgogarten/uw-gac-commit/ld-pair/) - This UW-GAC tool calculates the LD between a pair of variants stored in a GDS file using the snpgdsLDMat function in the [SNPRelate R package](https://bioconductor.org/packages/release/bioc/html/SNPRelate.html) and a wrapper [LDcompute R package](https://github.com/UW-GAC/ld-compute).&#x20;
* [Id-set](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#smgogarten/uw-gac-commit/ld-set/) - This UW-GAC tool calculates the LD between all pairs in a user-specified set of variants stored in a GDS file using the snpgdsLDMat function in the [SNPRelate R package](https://bioconductor.org/packages/release/bioc/html/SNPRelate.html) and a wrapper [LDcompute R package](https://github.com/UW-GAC/ld-compute).&#x20;

**PIC-SURE Data Access Dashboard Updates:** PIC-SURE’s Data Access Dashboard has been updated to include the number of studies and participants the user has access to based on their authorization.&#x20;

**New PIC-SURE Open Access:** [PIC-SURE Open Access](https://picsure.biodatacatalyst.nhlbi.nih.gov/picsureui/openAccess) is now available in BioData Catalyst! PIC-SURE Open Access is available to users who have an eRA Commons account, including those who are not authorized to access any studies. The Open Access feature allows users to explore de-stigmatized, phenotypic data available in PIC-SURE prior to requesting access to data. For more information check out the [user guide](https://docs.google.com/document/d/1oVmdBSETxHNpB2DIWAh05TH_uUMPeJQKgyFsAGXpQVU/edit#heading=h.nohmcs2v8hsa) and [tutorial](https://youtu.be/8zETBHL50oE).

**New PIC-SURE** [**Jupyter notebook examples**](https://github.com/hms-dbmi/Access-to-Data-using-PIC-SURE-API/tree/master/NHLBI_BioData_Catalyst) are available as public projects in Seven Bridges and Terra as follows:

* Example showing the users how to access lipid measurements across harmonized variables and multiple visits using the PIC-SURE API in R, RStudio, and Python.
* All previous notebooks examples are now available in RStudio on Seven Bridges.

**New** [**UWGAC Ancestry and Relatedness analysis collection**](https://dockstore.org/organizations/bdcatalyst/collections/UWGACAncestryRelatedness) **on Dockstore under the BioData Catalyst organization:** This collection includes two WDL workflows to help users prepare their data for association testing: one for converting VCF files to GDS and one for linkage disequilibrium pruning. Stay tuned as more workflows are released.

**New** [**Large-scale Gene by Environment collection**](https://dockstore.org/organizations/bdcatalyst/collections/BDCGxE) **on Dockstore under the BioData Catalyst organization:** The WDL workflows in this collection enable scalable, efficient, and flexible genome-wide gene-environment interaction analysis. GEM conducts single-variant analysis for common variants (currently in unrelated individuals only) and MAGEE conducts single-variant and variant set-based analysis for common or rare variants while allowing for relatedness. The collection also includes examples of cloud costs in the README.



### **Known issues and workarounds**

**BioLINCC Phase 2 data dictionaries:** These data dictionaries were submitted in PDF format which required additional intervention and delayed general release to the platform. These data dictionaries will be released as soon as is feasible for use across the platform.



### **New user support materials and documentation**

**Maintaining and Versioning CWL on External Tool Repositories:** [This tutorial](https://sb-biodatacatalyst.readme.io/docs/maintaining-and-versioning-cwl-on-external-tool-repositories) presents best practices for writing and maintaining CWL tools/workflows in an external tool repository, such as GitHub, so that users can better manage versions of their tools. Users should follow these best practices if they would like to publish and share their CWL tools and workflows in the [Dockstore repository](https://dockstore.org/) since Dockstore has the ability to automatically pull changes from GitHub. These best practices will ensure that the CWL is fully portable and can run successfully not only on Seven Bridges Platforms, but also on other CWL executors such as cwltool and Toil.

**Transferring Files Between Seven Bridges and Terra:** [This tutorial](https://bdcatalyst.gitbook.io/biodata-catalyst-documentation/written-documentation/getting-started/analyze-data-1/transferring-files-between-seven-bridges-and-terra) guides users through the process of transferring files between the two workspace environments Seven Bridges and Terra.

**Accessing Egress-Free GTEx Data From AnVIL:** A new data interoperability page that includes linked instructions for how to access egress-free GTEx data from NHGRI’s AnVIL cloud ecosystem is [here](https://bdcatalyst.gitbook.io/biodata-catalyst-documentation/written-documentation/getting-started/data-access/data-interoperability).

**PIC-SURE Documentation Updates:** New [PIC-SURE documentation](https://docs.google.com/document/d/1oVmdBSETxHNpB2DIWAh05TH_uUMPeJQKgyFsAGXpQVU/edit#heading=h.nohmcs2v8hsa) provides new information on the Data Access Dashboard, PIC-SURE Open Access, and a new table for understanding study-specific subject identifiers.

**PIC-SURE Video Tutorials:** [PIC-SURE Video tutorials](https://www.youtube.com/channel/UCIfahDUjW4A4B1KyIek4YJA/videos) are now available for the following topics:

* Introduction to PIC-SURE
* Introduction to PIC-SURE Open Access: Harmonized&#x20;
* Introduction to PIC-SURE Open Access: One Criterion Search
* Introduction to PIC-SURE Open Access
* Introduction to PIC-SURE Open Access: Multiple search criteria
* Introduction to PIC-SURE Authorized Access
* Introduction to PIC-SURE Authorized Access: Data Export

**Published a** [**blog post**](https://terra.bio/from-infrastructure-projects-to-connected-communities/) on the role of a secure cloud ecosystem for supporting infrastructure projects and creating connected communities, highlighting BioData Catalyst as one of several NIH-commissioned infrastructure development projects that involve not just putting data on the cloud but also building the additional layers of services that are necessary to deliver on the extraordinary promise of this new model for data sharing and analysis.<br>

### **Data Releases**

The table below highligts which studies were included in the 2021-07-09 data release. CRAMs and unharmonized clinical files were uploaded for the parent project CARDIA and 3 other TOPMed programs. The TOPMed program REDS-III received a version update. The unharmonized clinical files were uploaded for the 5 BioLINCC projects and the 2 open tutorial projects. The data is now available for access across the entire ecosystem.

| **Study Name**                                                                                                                                                                    | **phs I.D. #** | **Acronym**    | **New to BioData Catalyst** | **New study version** |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------------- | --------------------------- | --------------------- |
| **Treatment of Pulmonary Hypertension and Sickle Cell Disease with Sildenafil Therapy**                                                                                           | **phs002383**  | **WalkPHaSST** | **true**                    | **1**                 |
| **CARDIA Cohort**                                                                                                                                                                 | **phs000285**  | **CARDIA**     | **false**                   | **3**                 |
| [**NHLBI TOPMed - NHGRI CCDG: Penn Medicine BioBank Early Onset Atrial Fibrillation Study**](http://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001601.v1.p1) | **phs001601**  | **CCDG-PMBB**  | **true**                    | **1**                 |
| [**Hematopoietic Cell Transplant for Sickle Cell Disease (HCT for SCD)**](http://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs002385.v1.p1)                    | **phs002385**  | **CIBMTR**     | **true**                    | **1**                 |
| [**Cooperative Study of Sickle Cell Disease (CSSCD)**](http://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs002362.v1.p1)                                       | **phs002362**  | **CSSCD**      | **true**                    | **1**                 |
| [**Multicenter Study of Hydroxyurea (MSH)**](http://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs002348.v1.p1)                                                 | **phs002348**  | **MSH**        | **true**                    | **1**                 |
| [**Optimizing Primary Stroke Prevention in Children with Sickle Cell Anemia (STOP II)**](http://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs002386.v1.p1)     | **phs002386**  | **STOPII**     | **true**                    | **1**                 |
| [**NHLBI TOPMed: Genetics of Asthma in Latino Americans (GALA)**](http://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001542.v1.p1)                            | **phs001542**  | **GALA**       | **true**                    | **1**                 |
| [**NHLBI TOPMed: Genetic Causes of Complex Pediatric Disorders - Asthma (GCPD-A)**](http://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001661.v2.p1)          | **phs001661**  | **GCPD-A**     | **true**                    | **2**                 |
| [**NHLBI TOPMed: REDS-III Brazil Sickle Cell Disease Cohort (REDS-BSCDC)**](http://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001468.v2.p1)                  | **phs001468**  | **REDS-III**   | **false**                   | **2**                 |
| **Tutorial-biolincc\_camp**                                                                                                                                                       | **open**       |                | **true**                    |                       |
| **tutorial-biolincc\_framingham**                                                                                                                                                 | **open**       |                | **true**                    |                       |

####

### **Planned upcoming Data Releases**

| **Study Name**                              | **phs I.D. #** | **Acronym** | **New to BioData Catalyst** | **New study version** |
| ------------------------------------------- | -------------- | ----------- | --------------------------- | --------------------- |
| **Combined Exchange Area new data**         |                |             | **false**                   |                       |
| **BioLINCC – Training Dataset – Digitalis** |                |             |                             |                       |
| **BioLINCC – BabyHug**                      | **phs002415**  |             | **true**                    |                       |

####

### **For detailed platform release notes please consult the following resources:**

* [**Terra release notes**](https://support.terra.bio/hc/en-us/categories/360000693572)
* [**Seven Bridges release notes**](https://sb-biodatacatalyst.readme.io/blog)
* **Gen3 release notes**
* **PIC-SURE release notes**
* [**Dockstore release notes**](https://docs.dockstore.org/en/develop/changelog.html)

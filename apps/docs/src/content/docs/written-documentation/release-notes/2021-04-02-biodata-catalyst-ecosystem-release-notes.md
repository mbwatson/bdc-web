---
title: "2021-04-02 BioData Catalyst Ecosystem Release Notes"
---

# 2021-04-02 BioData Catalyst Ecosystem Release Notes

### **Introduction**

The 2021-04-02 release marks the fifth release for the NHLBI BioData Catalyst ecosystem. This release includes several new features (e.g., CWL tools for QC pipelines) along with documentation and tutorials to help new users get started on the system. This release also includes enhanced support for searching across documentation. Please find more detail on the new features and user support materials in the sections below.

The 2021-04-02 data release includes updates of CRAMs and unharmonized clinical files for 6 TOPMed studies previously hosted on BioData Catalyst. For each study and consent group, VCF files are available on a per chromosome basis and in an un-tarred format.

Please refer to the Data Release section below for more information as well as the[ Data page](https://biodatacatalyst.nhlbi.nih.gov/resources/data) on the BioData Catalyst website.<br>

### **Significant new features**

Documentation Search: BioData Catalyst users can now use [Documentation Search](https://biodatacatalyst.nhlbi.nih.gov/docs) to search across various types of documentation over the entire ecosystem. Favorite results can be saved in a folder and revisited later.

CWL tools for QC pipelines: Users can now find the following CWL tools for quality control of GWAS data in the[ Seven Bridges Public Apps Gallery](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps):

* [Heterozygosity by sample](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#smgogarten/uw-gac-commit/heterozygosity-by-sample/) - This UW-GAC tool calculates heterozygosity by sample.
* [Pedigree Check](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps#smgogarten/uw-gac-commit/pedigree-check/) - This UW-GAC workflow checks expected relationships specified in a pedigree file against empirical kinship values from KING or PC-Relate.&#x20;

Import files from Kids First Data Resource Center: Users can now access datasets from the Kids First Data Resource portal directly from BioData Catalyst Powered by Seven Bridges using DRS links. Users must have dbGaP approvals for the Kids First datasets in order to access the dataset on BioData Catalyst. In addition, users can import DRS links from open access datasets available via DRS servers.

PIC-SURE Data Access Dashboard: Users on PIC-SURE can now see a list of studies with data available in PIC-SURE. The Data Access Dashboard will show the study name, identifier, and the number of variables/samples present. Additionally the user can see if they have access to the study or click to a link where they can learn more about the study and request access to studies they are not yet authorized to use.

Query annotations for all SNVs and dbSNP INDELS in the Annotation Explorer: Users on Seven Bridges can now use the Annotation Explorer to interactively aggregate and filter all SNVs (over 8 billion variants) and publicly available INDELs from dbSNP using \~700 annotations. Variant grouping files can be created from the results and exported to a workspace for use in rare variant association testing. This database is available to all authenticated users of BioData Catalyst. [See here](https://sb-biodatacatalyst.readme.io/docs/topmed-annotation-explorer) for more information about how to use the Annotation Explorer.<br>

### **New user support materials and documentation**

[Best Practices for Secure and FAIR workflows](https://docs.dockstore.org/en/develop/advanced-topics/best-practices/best-practices-secure-fair-workflows.html) were published on Dockstore to help users developing containers and descriptor files for their bioinformatics pipelines.

The [Gitbook guide to self-service onboarding to Terra](https://bdcatalyst.gitbook.io/biodata-catalyst-documentation/analyze-data/terra/) has been revamped.

Created and published all materials from the Fellows [Webinar 1](https://support.terra.bio/hc/en-us/articles/360058701831) onboarding session including a recording of the session, all materials used, instructions, etc. Additional webinars will be posted in the coming weeks.

Launched a 3-part video tutorial series on workflows, which helps users, particularly Fellows that are new to the platform, gain more insight into how to best utilize workflows for their data analysis.

* [Part 1](https://www.youtube.com/watch?v=rUBrJNqLyfU\&list=PLh_zJaZ9uQ7P0w6bMLWgL8oDul2EiNlv6\&index=9) - How to run a pre-configured workflow
* [Part 2](https://www.youtube.com/watch?v=k5aGvKljgTk\&list=PLh_zJaZ9uQ7P0w6bMLWgL8oDul2EiNlv6\&index=11) - How to configure and run a workflow from scratch
* [Part 3](https://www.youtube.com/watch?v=xOHUeXfMpEU\&list=PLh_zJaZ9uQ7P0w6bMLWgL8oDul2EiNlv6\&index=12) - How to run downstream analysis (on the data that resulted from your workflow)

Published a [blog post](https://terra.bio/get-started-with-free-cloud-credits/) clearly walking researchers through how they can leverage free cloud credits from Google Cloud in Terra. Published a related [blog post](https://terra.bio/funding-opportunities-to-cover-cloud-costs/) to the aforementioned one on free cloud credits through GCP. This post covers additional funding sources for covering researchers’ cloud costs, highlighting Google EDU providing up to $10,000 in coupons for supported research projects and the NIH STRIDES initiative. Further, Terra added a [new support documentation article](https://support.terra.bio/hc/en-us/articles/360047664872-Call-caching-how-it-works-and-when-to-use-it) covering how the call caching feature in Cromwell can help users save time and money.

Started a new blog post series focused on highlighting papers that may be of interest to the BDCatalyst community. [This first post](https://terra.bio/review-paper-getting-started-with-workflows/) covers a [review paper](https://academic.oup.com/gigascience/article/10/1/giaa140/6092773) about workflow systems from C. Titus Brown’s lab at UC Davis.

Published a [blog post](https://terra.bio/try-rstudio-in-terra/) officially announcing that RStudio is available in Terra, and this includes a [new video tutorial](https://www.youtube.com/watch?v=JAcCtTkkvJw\&feature=emb_logo) for getting up and running.

Uploaded a [new video tutorial](https://www.youtube.com/watch?v=3CVXNygHliM\&t=1s) demonstrating the use of Terra for viral genomics by guiding the user through the COVID-19 workspace.

Published a [blog post](https://terra.bio/task-level-checkpointing/) introducing a new feature for task-level checkpointing in workflows. This makes it possible to save intermediate outputs for a task and resume work from that point if the task gets interrupted. Full documentation of this checkpoint feature can be found [here](https://cromwell.readthedocs.io/en/develop/optimizations/CheckpointFiles/).

Uploaded a [video on Broad’s BioIT 2020 Talk](https://www.youtube.com/watch?v=FRGc0vAWCao) proposing a cross-domain, common data model built specifically to facilitate search and reuse.<br>

### **Data Releases**

The table below highlights which studies were included in the 2021-04-02 data release. CRAMs and unharmonized clinical files were updated for 6 TOPMed studies previously hosted on BioData Catalyst. For each study and consent group, VCF files are available on a per chromosome basis and in an un-tarred format. The data is now available for access across the entire ecosystem.

| Study Name                                                            | phs I.D. # | Acronym | New to BioData Catalyst | New study version |
| --------------------------------------------------------------------- | ---------- | ------- | ----------------------- | ----------------- |
| Framingham Cohort                                                     | phs000007  | FHS     | False                   | 30                |
| Genetic Epidemiology Network of Salt Sensitivity (GenSalt)            | phs000784  | GenSalt | False                   | 3                 |
| Atherosclerosis Risk in Communities (ARIC) Cohort                     | phs000280  | ARIC    | False                   | 7                 |
| Genes-Environments and Admixture in Latino Asthmatics (GALA II) Study | phs001180  | GALAII  | False                   | 2                 |
| Cardiovascular Health Study (CHS) Cohort                              | phs000287  | CHS     | False                   | 7                 |
| Women's Health Initiative Clinical Trial and Observational Study      | phs000200  | WHI     | False                   | 12                |

#### &#x20;For detailed platform release notes please consult the following resources:

* Gen3 release notes
* [Terra release notes](https://support.terra.bio/hc/en-us/categories/360000693572)
* [Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/blog)
* PIC-SURE release notes
* [Dockstore release notes](https://docs.dockstore.org/en/develop/changelog.html)


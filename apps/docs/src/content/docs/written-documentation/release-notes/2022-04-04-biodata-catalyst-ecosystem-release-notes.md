---
title: "2022-04-04 BioData Catalyst Ecosystem Release Notes"
---

# 2022-04-04 BioData Catalyst Ecosystem Release Notes

### **Introduction**

The 2022-04-04 release marks the ninth release for the NHLBI BioData Catalyst ecosystem. This release includes several new features (e.g., machine learning tools for chest CT imaging) along with documentation and tutorials (e.g., a new guide to sharing content) to help new users get started on the system. This release also includes enhanced support for synchronizing tools and workflows between Dockstore and GitHub. Please find more detail on the new features and user support materials in the sections below.

The 2022-04-04 data release includes the addition of COVID-19 datasets ACTIV4a and ACTIV4b. Please refer to the Data Release section below for more information as well as the [Data](https://biodatacatalyst.nhlbi.nih.gov/resources/data/) page on the BioData Catalyst website.

### **Significant new features**

**Machine learning tools for chest CT imaging:** Seven Bridges and Harvard Medical School have collaborated to release a Public Project of machine learning tools titled: Automated Chest Imaging Platform (CIP) CT Phenotyping and Machine Learning Discovery in COPD. The Public Project includes a detailed guide for other researchers to use the tools and notebooks on COPD datasets or modify the tools for their own lung CT data.

**Storage optimized instances on Seven Bridges:** Users can now access i3 and i3en AWS instances for Interactive Analysis (R Studio, JupyterLabs, SAS Studio) on Seven Bridges. These storage optimized instances provide access to between 5 TB and 60 TB of storage for interactive environments which enables researchers to harmonize larger datasets.

**New CWL tools and workflows on Seven Bridges:**

* [GATK RNAseq](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps/q?search=gatk%20rnaseq) short variant discovery 4.2.0.0
* [GRIDSS](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps/q?search=gridss) toolkit
* [scVelo](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps/q?search=scvelo) 0.2.4
* [Velocyto.py](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps/q?search=velocyto)
* [Samplot Plot](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps/q?search=samplot)
* [Samplot Vcf](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps/q?search=samplot)
* [Smoove](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps/q?search=smoove) toolkit
* [Sambamba](https://platform.sb.biodatacatalyst.nhlbi.nih.gov/public/apps/q?search=sambamba) tools 0.8.1

### **New user support materials and documentation**

**Share content through Public Projects:** Seven Bridges has published [a new guide](https://sb-biodatacatalyst.readme.io/docs/share-content-through-public-projects) in the knowledge center offering an alternative way to share new workflows, notebooks, and open access data with the BDCatalyst community. Public Projects provide a space for researchers to publish their analyses with open access sample data, detailed walkthroughs, and contact information for feedback and improvements. Both researchers developing new tools and researchers using preconfigured pipelines benefit from published Public Projects.

**Dockstore synchronization with GitHub:** Dockstore has simplified its tool and workflow registration process to automatically synchronize with GitHub. Dockstore released several [example templates](https://docs.dockstore.org/en/stable/assets/templates/template.html) for how you can set up your GitHub repo with another file (.dockstore.yml) needed to kick off this process. Check out this [overview of the process](https://docs.dockstore.org/en/stable/getting-started/github-apps/github-apps.html) for an introduction, and visit the updated Getting Started tutorials for registering [tools](https://docs.dockstore.org/en/stable/getting-started/dockstore-tools.html) and [workflows](https://docs.dockstore.org/en/stable/getting-started/dockstore-workflows.html) on Dockstore to learn more.

### **Data Releases**

The table below highlights which studies were included in the Q1 2022 data releases. COVID-19 datasets ACTIV4a and ACTIV4b were released to production. Most of the work for ingestion of COVID19-C3PO dataset has been done and will be released in early April. TOPMed Freeze 9 datasets were ingested as the data became available. Twenty datasets were ingested and will be released as part of the fourth batch in early April as well. The data is now available for access across the entire ecosystem.

| Study Name                                      | phs I.D. #   | Acronym      | New to BioData Catalyst | New study version |
| ----------------------------------------------- | ------------ | ------------ | ----------------------- | ----------------- |
| COVID-19 ACTIV-4 ACUTE                          | phs002694.c1 | ACTIV4A\_GRU | Yes                     | Yes               |
| COVID-19 Outpatient Thrombosis Prevention Trial | phs002710.c1 | ACTIV4B\_GRU | Yes                     | Yes               |

### **Planned upcoming Data Releases**

| Study Name                | phs I.D. #   | Acronym   | New to BioData Catalyst  | New study version |
| ------------------------- | ------------ | --------- | ------------------------ | ----------------- |
| Freeze 9b batch 4 studies | various      | various   | No                       | No                |
| COVID-19-C3PO             | phs002752.c1 | C3PO\_GRU | Yes                      | Yes               |

### **For detailed platform release notes please consult the following resources:**

* [Dockstore release notes](https://docs.dockstore.org/en/develop/changelog.html)
* PIC-SURE release notes
* [Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/blog)
* [Terra release notes](https://support.terra.bio/hc/en-us/categories/360000693572)
* Gen3 release notes

<br>

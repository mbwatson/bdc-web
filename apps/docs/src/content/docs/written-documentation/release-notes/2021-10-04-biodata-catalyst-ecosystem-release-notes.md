---
title: "2021-10-04 BioData Catalyst Ecosystem Release Notes"
---

# 2021-10-04 BioData Catalyst Ecosystem Release Notes

### **Introduction**

The 2021-10-04 release marks the seventh release for the NHLBI BioData Catalyst ecosystem. This release includes several new features (e.g., project cost reporting on Terra and archiving files on AWS) along with documentation and tutorials (e.g., estimating and managing cloud costs) to help new users get started on the system. This release also includes enhanced support for semantic search and R Shiny apps. Please find more detail on the new features and user support materials in the sections below.

The 2021-10-04 data release includes the addition of the final BioLINCC training dataset plus another BioLINCC study, BabyHug. The TOPMed Combined Exchange Area buckets were updated with more datasets from multiple new freezes. The last dataset ingested was PCGC’s CMG. Please refer to the Data Release section below for more information as well as the [Data page](https://biodatacatalyst.nhlbi.nih.gov/resources/data) on the BioData Catalyst website.<br>

### **Significant new features**

**Updated Semantic Search UI:** Dug, the BioData Catalyst's Semantic Search, has an updated user interface. The new interface makes it easy to see more results on one page. A zoom feature lets users expand individual results to explore in greater detail. Provenance in knowledge graphs and links to published literature are presented where available.

**Archive files on AWS:** Users on _BioData Catalyst Powered by Seven Bridges_ can now select files to move from AWS S3 storage to AWS Glacier (archival storage). Moving files to archival storage can result in an \~80% cost reduction. It’s recommended that users move files to archival storage if the files will not be used for three or more months.&#x20;

**Project Per Work Space Cost Reporting on Terra:** Users on _BioData Catalyst Powered by Terra_ will now have more transparency and access to cost information with the [rollout of PPWS](https://terra.bio/moving-to-a-project-per-workspace-model-for-improved-resource-management/). This update associates each Terra workspace with its own Google Project, created by Terra on behalf of users when workspaces are created. Switching to this “project-per-workspace” model enables added functionality for displaying a breakdown of costs per workspace in the Terra user interface, and allows Terra users to [set up and use GCP budget alerts](https://support.terra.bio/hc/en-us/articles/360057589931-How-to-set-up-and-use-GCP-budget-alerts) to be notified of cloud spending. This change will only apply to new workspaces created, with plans to migrate existing workspaces over to this model in the future.

**Try out R Shiny apps in Terra:** Since the rollout of [Rstudio and Bioconductor](https://terra.bio/try-rstudio-in-terra/) last quarter, Terra’s Interactive Analysis team has expanded the capabilities of the cloud environments framework that supports running RStudio, Jupyter Notebook and [Galaxy](https://terra.bio/a-galaxy-of-tools-at-your-fingertips/) in Terra. Most recently, Terra users now have the ability to [launch R Shiny apps from Terra’s built-in RStudio environment](https://terra.bio/try-out-r-shiny-apps-in-terra/). Check out an example of an [open-source R Shiny app](https://github.com/manning-lab/WGSAssociationVisualization) developed by the Manning Lab to visualize whole-genome association data.

**Save data from an IA environment:** With the new R Shiny apps in Terra, users can [save data from an IA environment](https://support.terra.bio/hc/en-us/articles/4406582822299). Saving data from an interactive cloud environment (such as an instance of RStudio or a Jupyter notebook) is a useful trick in some situations. Users worried about losing work done in an interactive environment because they need to delete or modify the persistent disk can use "gsutil" to copy it to the workspace bucket.

**Speed up machine learning work with GPUs on Terra:** Terra’s Interactive Analysis team has released an upgrade that enables [adding Graphical Processor Units (GPUs) to Notebook cloud environments in Terra](https://terra.bio/speed-up-your-machine-learning-work-with-gpus/). Terra already offered the [ability to use GPUs in workflows](https://support.terra.bio/hc/en-us/articles/360055066731-Why-and-how-to-use-GPUs-when-running-a-workflow), and are now responding to user requests to run GPU-enabled computations interactively with GPU support for Jupyter Notebooks.

**Speed up workflows and save costs using N2 instances sporting Intel’s 2nd Generation Xeon CPUs on Terra:** Terra users will now have the option to use new-generation N2 instances, which have demonstrated faster performance and reduced cost. Read more about these updates and how to request N2 instances for workflows [here](https://terra.bio/speed-up-your-workflows-with-n2-instances-sporting-intels-2nd-generation-xeon-cpus/).<br>

### **New user support materials and documentation**

**Cross-study harmonization example notebook:** [This tutorial notebook](https://github.com/hms-dbmi/Access-to-Data-using-PIC-SURE-API/tree/master/NHLBI_BioData_Catalyst) will demonstrate how to query and work with the BioData Catalyst studies, particularly cross-study harmonization using the PIC-SURE API.&#x20;

**Estimate and Manage Cloud Costs on Seven Bridges:** [This tutorial](https://sb-biodatacatalyst.readme.io/docs/estimate-and-manage-your-cloud-costs) describes how to estimate costs associated with using Seven Bridges. The tutorial includes an overview of both cloud storage costs and cloud computation costs and the primary drivers of those costs. The tutorial also provides guidance on how to approach estimating cloud storage and computation costs so that researchers can budget for cloud costs in their grants, request cloud credits, and plan their work on BioData Catalyst.

**Public project for TOPMed Freeze8 variant calling pipelines:** Users on Seven Bridges can now access a public project that walks through how to use the CWL tools and workflows that were used to perform variant calling of TOPMed Freeze8. The public project provides explanations of the purpose of all of the tools and workflows and how they are used together, along with examples of completed analyses. All of the CWL tools and workflows in the project are available in the Public Apps Gallery.

**Need an easy way to explain Terra to your colleagues or collaborators?** Try this [quick (2-min.) overview of Terra.](https://terra.bio/terra-in-a-nutshell-2-minute-video-for-newcomers/)

**Estimate Workflow Costs on Terra:** Terra users can also follow [this documentation to estimate costs of workflows](https://support.terra.bio/hc/en-us/articles/360037862771-How-much-did-a-workflow-analysis-cost-#h_01F9F5M9M83QTN1R341P3XY5GT). This is the original document describing the steps summarized in this blog post.

**Understanding and controlling cloud costs on Terra:** [This article](https://support.terra.bio/hc/en-us/articles/360029748111) includes a detailed breakdown of the types of costs that you may incur when working on Google Cloud, plus some advice on how to reduce costs.

**Understanding costs and billing on Terra:** [This article](https://support.terra.bio/hc/en-us/articles/360048632271-Understanding-Terra-costs-and-billing) includes an overview of how billing works, including how billing accounts, projects and workspaces relate to each other, and the difference between workspace permissions and billing permissions.

**Controlling cloud costs on Terra – sample use cases:** [This article](https://support.terra.bio/hc/en-us/articles/360029772212) includes a selection of typical analysis use cases, for which the costs are broken down in several scenarios in order to illustrate the effect of cost control strategies.

**New tools and workflows released to** [**Dockstore’s NHLBI BioData Catalyst Organization**](https://dockstore.org/organizations/bdcatalyst)**:**

* Three additional WDL workflows have been released in the [UWGAC Ancestry, Relatedness, and Association Testing Collection](https://dockstore.org/organizations/bdcatalyst/collections/UWGACAncestryRelatedness), including KING, PC-Relate, and PC-AIR.&#x20;
* [xvcfView](https://dockstore.org/workflows/github.com/DataBiosphere/xvcfview:v0.0.1?tab=info) WDL was released to the Utilities collection. This workflow provides the full power of [bcftools view](http://samtools.github.io/bcftools/bcftools.html#view) to subset, subsample, and filter VCF files.
* New [PrediXcan collection](https://dockstore.org/organizations/bdcatalyst/collections/PrediXcan) with CWL workflows can predict gene expression (or whatever biology the models predict) in a cohort with available genotypes and run associations to a trait measured in the cohort.

[**Launch Galaxy workflows from Dockstore into multiple Galaxy instances**](https://docs.dockstore.org/en/stable/launch-with/galaxy-launch-with.html#while-browsing-dockstore)**, including Terra:**

* New to Galaxy? The Galaxy Training Network is continuing to add training material in their [Organization](https://dockstore.org/organizations/gtn) on Dockstore.&#x20;
* Additionally, users can explore some of the Galaxy community’s best practices workflows in their [IWC Organization](https://dockstore.org/organizations/iwc) on Dockstore.

**Ready to publish and share the tool or workflow you developed with the research community?** Dockstore users can link their accounts to their ORCID and Zenodo accounts, [mint DOIs for their workflows hosted on Dockstore](https://docs.dockstore.org/en/stable/advanced-topics/snapshot-and-doi.html), and now can [export their workflows directly to their ORCID profile](https://docs.dockstore.org/en/stable/end-user-topics/ORCID.html#export-your-dockstore-workflow-to-your-orcid-account).

**New video tutorials** demonstrate exporting data from PIC-SURE to [Terra](https://tinyurl.com/export-data-terra) and [<mark style="color:blue;">Seven Bridges</mark> u](https://www.youtube.com/watch?v=nrHYcZw_rmo)sing BioLINCC/Sickle Cell related data.<br>

### **Data Releases**

The table below highlights which studies were included in the 2021-10-04 data release. The final BioLINCC training dataset was uploaded, plus another BioLINCC study, BabyHug. The ORCHID dataset was re-ingested after the data owners found they had provided incorrect versions of the files at the time of initial ingestion. The TOPMed Combined Exchange Area buckets were updated with more datasets from multiple new freezes. The last dataset ingested was PCGC’s CMG. The data is now available for access across the entire ecosystem.

| **Study Name**                                                                                                  | **phs I.D. #**                                                                                    | **Acronym**                                     | **New to BioData Catalyst** | **New study version** |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------- | --------------------- |
| BioLINCC (Phase 1) - Training Data (Digitalis)                                                                  | open                                                                                              |                                                 | true                        | NA                    |
| Additional TOPMed combined EA                                                                                   | c999                                                                                              | <p>Freeze1/</p><p>Freeze9b/</p><p>Freeze10a</p> | true                        | NA                    |
| PETAL - ORCHID (data re-ingested since files initially provided by data submitters were not the final version ) | phs002299                                                                                         | ORCHID                                          | false                       | 1                     |
| PCGC (CMG/Wagner)                                                                                               | [phs001194](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001194.v2.p2) | CMG                                             | true                        | 1                     |
| CureSCi - BabyHug (via BioLINCC)                                                                                | phs002415                                                                                         | BabyHug                                         | true                        | 1                     |

###

### **Planned upcoming Data Releases**

| **Study Name**                                                          | **phs I.D. #** | **Acronym** | **New to BioData Catalyst** | **New study version** |
| ----------------------------------------------------------------------- | -------------- | ----------- | --------------------------- | --------------------- |
| <p>TOPMed Freeze 9 - Batch 1</p><p>(22 datasets included)</p>           | Various        | Various     | false                       | NA                    |
| <p>PCGC SRA Data</p><p>Additional TOPMed Freeze 8 Studies (CATHGen)</p> | phs000571      |             | true                        | 6                     |

###

### **For detailed platform release notes please consult the following resources:**

* Gen3 release notes
* [Terra release notes](https://support.terra.bio/hc/en-us/categories/360000693572)
* [Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/blog)
* PIC-SURE release notes
* [Dockstore release notes](https://docs.dockstore.org/en/develop/changelog.html)

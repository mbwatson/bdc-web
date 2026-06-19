---
title: "2022-10-03 BioData Catalyst Ecosystem Release Notes"
---

# 2022-10-03 BioData Catalyst Ecosystem Release Notes

### **Introduction**

The 2022-10-03 release marks the eleventh release for the NHLBI BioData Catalyst ecosystem. This release includes several new features (e.g., PIC-SURE's new search interface) along with updated documentation. This release also includes updated versions of the Study Variable Explorer and the Annotation Explorer. Please find more detail on the new features and user support materials in the sections below.

The 2022-10-03 data releases include the addition of TOPMed Boston-Brazil SCD and PCGC datasets. Please refer to the Data Releases section below for more information as well as the[ Data page](https://biodatacatalyst.nhlbi.nih.gov/resources/data) on the BioData Catalyst website.

### **Significant new features**

**Now export with Study Variable Explorer on BioData Catalyst Powered by Seven Bridges:** The [Study Variable Explorer](https://sb-biodatacatalyst.readme.io/docs/study-variable-explorer) on _BioData Catalyst Powered by Seven Bridges_ allows researchers to explore phenotypic variables from the TOPMed data dictionaries in an open access manner. Seven Bridges released Study Variable Explorer version 2 which expands on version 1 by adding tag search, notes, and data export. The latest update enables researchers to track their variable selection process through notes tied to study and variable information which can be shared with collaborators through .json export. This gives analysts tractable information for reproducing decision-making during the harmonization process.

**New Interactive Web Apps Gallery:** Under the “Public Gallery” dropdown on _BioData Catalyst Powered by Seven Bridges_, a new display for “Interactive Web Apps” provides access to the LocusZoom and Model Explorer R Shiny applications.

**Annotation Explorer Version 2:** The Annotation Explorer enables users to interactively explore, query, and study characteristics of an inventory of annotations for the variants across the genome. This application can be used pre-association testing to interactively explore variant aggregation, filtering strategies, and generate input files for multiple-variant association testing, or post-association testing to explore annotations associated with a set of significant variants or variants of interest. Seven Bridges previously released the Annotation Explorer R Shiny application through a Public Project. Now, Annotation Explorer is integrated with _BioData Catalyst Powered by Seven Bridges_ through the “Data” dropdown. The new integration enables querying genome wide annotations and variants (including the TOPMed Freeze5 and Freeze8 datasets) in a more user-friendly interface without running an R Studio notebook. This release is integrated into the billing system so a user can select their compute needs based on price and monitor Annotation Explorer-specific costs through their billing group.

**New CWL Tools and Workflows on&#x20;**_**BioData Catalyst Powered by Seven Bridges**_**:**

* **GATK VariantEval BETA 4.2.5.0** tool which is used for evaluating variant calls.
* **GATK FilterMutectCalls 4.2.5.0** tool which is used to filter somatic SNVs and indels called by Mutect2.
* **Picard CreateSequenceDictionary 2.25.7** tool for creating a DICT index file for a sequence.
* **WARP ExomeGermlineSingleSample 2.4.4** pipeline for data pre-processing and variant calling in human WES data.
* **BCFtools 1.15.1 toolkit - CWL1.2**
* **Kraken2 2.1.2 toolkit**
* **SRA (v3.0.0, CWL1.2)**
  * **SRA sam-dump** that converts SRA data into SAM format. With aligned data, NCBI uses Compression by Reference, which only stores the differences in base pairs between sequence data and the segment it aligns to. The process to restore original data, for example as FASTQ, requires fast access to the reference sequences that the original data was aligned to.
  * **SRA fasterq-dump** tool that converts SRA data into FASTQ format while using temporary files and multi-threading to speed up the extraction.
  * **SRA fastq-dump** tool that converts SRA data into FASTQ format.
* **Salmon (v1.5.2, CWL1.2)**
  * **Salmon Alevin** tool that introduces a family of algorithms for quantification and analysis of 3’ tagged-end single-cell sequencing data.
  * **Salmon Index** tool that builds an index necessary for the Salmon Quant and Salmon Alevin tools. To create an index, it uses a transcriptome reference file in FASTA format. Additionally, one can provide a genome reference along with transcriptome to create a hybrid index compatible with the improved mapping algorithm named Selective Alignment.

**Updated Interactive Analysis interface on Terra:** Under the new design, the “Notebooks” tab is transformed into the more general “Analyses” tab, from where you can access the multiple applications available for Interactive Analysis in Terra. Accordingly, the list of Notebook files (.ipynb) becomes the list of “Your Analyses”, which now supports including R Markdown files (.Rmd). Just like Notebook files, any R Markdown files created in or added to the Analyses tab will be automatically stored in the workspace bucket and synced between the bucket and your persistent disk.

**PIC-SURE's new search interface:** PIC-SURE has released an improved dynamic data exploration experience, allowing users to easily search and query at the variable value and genomic variant level. The streamlined search experience enables users to search variables and view associated information, such as decoded variable level information, details about the dataset, and study information - all without opening any data files. Updates to the interface include filtering search results by variable and study tags, a new genomic filtering model, adding variables to export without filtering, a simpler select and package data process, and visualizing single variable distributions.

**Dedicated PIC-SURE images within Seven Bridges analysis workspaces:** The Seven Bridges and PIC-SURE teams have collaborated to provide users with dedicated workspace images that contain all the pre-installed packages necessary to run the PIC-SURE example notebooks. PIC-SURE API users in Seven Bridges will not have to worry about changes to package dependencies and/or versions, and R users in particular will notice a significantly faster start-up time during environment set-up. The PIC-SURE images are available in both the JupyterLab and RStudio Seven Bridges environments. Users can find this feature by specifying the Environment setup of any Data Cruncher analysis.

**Cure Sickle Cell Metadata Catalog integration:** PIC-SURE has updated the Data Access Table to integrate information about sickle cell disease (SCD) studies from the [Cure Sickle Cell Metadata Catalog](https://curesicklecell.rti.org/) (MDC). The “Additional Information” column includes a link to that SCD study’s page on the MDC. The Data Access Table also includes other new information, such as study design and study focus.

### **New user support materials and documentation**

**New&#x20;**_**BioData Catalyst Powered by PIC-SURE**_**&#x20;search interface:** The documentation associated with PIC-SURE has been updated to reflect the recent release of the new search interface. This includes the [BioData Catalyst Powered by PIC-SURE User Guide](https://tinyurl.com/PIC-SURE-User-Guide) and the tutorial videos on the [BioData Catalyst Powered by PIC-SURE YouTube playlist](https://www.youtube.com/playlist?list=PLJ6YccH8TEufZ5L-ctxzFF7vuZRLVacKw).

**Updated documentation on new Terra Interface:** The documentation associated with Terra has been updated to reflect the recent release of the new analysis interface. This includes the Terra [Workspace Quickstart Guide](https://app.terra.bio/#workspaces/fc-product-demo/Terra-Notebooks-Quickstart) and the tutorial videos on the [Terra YouTube channel](https://www.youtube.com/c/TerraBioApp).

### **Data Releases**

The table below highlights which studies were included in the Q3 2022 data releases. The data is now available for access across the entire ecosystem.

| Study Name                              | phs I.D. #   | Acronym                               | New to BioData Catalyst  | New study version |
| --------------------------------------- | ------------ | ------------------------------------- | ------------------------ | ----------------- |
| BostonBrazil\_SCD                       | phs001599    | topmed-BostonBrazil\_SCD\_HMB-IRB-COL | Yes                      |                   |
| PCGC                                    | phs001735.c1 | topmed-PCGC\_CHD\_HMB                 | No                       | Yes               |
| PCGC                                    | phs001735.c2 | topmed-PCGC\_CHD\_DS-CHD              | No                       | Yes               |
| National Sleep Research Resource (NSRR) | phs002715-c1 | NSRR-CFS\_DS-HLBS-IRB-NPU             | Yes                      |                   |
| FHS\_phs000974\_TOPMed\_WGS\_freeze.9b  | phs000974    | TOPMed\_FHS                           | No                       | Yes               |

### **Planned Upcoming Data Releases**

| Study Name                                                                                                                                                   | phs I.D. #      | Acronym                   | New to BioData Catalyst | New study version |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ------------------------- | ----------------------- | ----------------- |
| PCGC SRA                                                                                                                                                     | phs000571.v6.p2 | PCGC-CHD-GENES\_HMB       | Yes                     |                   |
| <p>National Sleep Research Resource (NSRR)</p><ul><li>This dataset had to be ingested again to accommodate additional data provided by data owners</li></ul> | phs002715-c1    | NSRR-CFS\_DS-HLBS-IRB-NPU | No                      | No                |

### **For detailed platform release notes please consult the following resources:**

Gen3 release notes\
[Terra release notes](https://support.terra.bio/hc/en-us/categories/360000693572)\
[Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/blog)\
PIC-SURE release notes\
[Dockstore release notes](https://docs.dockstore.org/en/develop/changelog.html)

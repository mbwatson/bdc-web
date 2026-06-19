---
title: "2022-07-11 BioData Catalyst Ecosystem Release Notes"
---

# 2022-07-11 BioData Catalyst Ecosystem Release Notes

### **Introduction**

The 2022-07-11 release marks the tenth release for the NHLBI BioData Catalyst ecosystem. This release includes several new features (e.g., importing files from AnVIL via DRS and creating multi-sample VCFs). This release also includes enhanced support for CWL tools on GitHub. Please find more detail on the new features in the sections below.

The 2022-07-11 data release includes the addition of COVID-19 dataset C3PO and TOPMed Freeze 9 batch 3 and 4. Please refer to the Data Release section below for more information as well as the Data page on the BioData Catalyst website.

### **Significant new features**

**Import files from AnVIL to&#x20;**_**BioData Catalyst Powered by Seven Bridges**_**&#x20;via DRS**

Seven Bridges released an interoperability feature enabling [import of data from AnVIL to _BioData Catalyst Powered by Seven Bridges_](https://sb-biodatacatalyst.readme.io/docs/import-data-from-gen3-bdc-or-gen3-anvil). A TOPMed researcher working in BioData Catalyst who identifies a causal variant through association testing might want to next investigate how that variant affects gene expression. The AnVIL ecosystem hosts the Genotype-Tissue Expression (GTEx) datasets which can be used to understand which tissues are affected by novel variants. Seven Bridges’ latest release allows a TOPMed researcher to go to AnVIL and push data they have permissions for to _BioData Catalyst Powered by Seven Bridges_, thus allowing the researcher to run the variant association test on TOPMed data and identify how that variant changes tissue expression with GTEx data in one workspace.

**Create multi-sample VCFs with the Variant Store**

Researchers who have access to many TOPMed studies will want to mix and combine VCF files into a multi-sample VCF. Additionally, researchers might want to subset samples based on genomic regions. Using standard bioinformatics tools, this process involves many manual steps and can be time intensive and cost prohibitive. The [Variant Store](https://sb-biodatacatalyst.readme.io/docs/create-a-multisample-vcf-from-variant-store) on _BioData Catalyst Powered by Seven Bridges_ uses a series of API calls to combine VCFs from studies of interest and subset the multi-sample VCF based on the selected genomic region. The latest release allows researchers to track the costs associated with generating multi-sample VCFs via the Variant Store as a dedicated line item in their billing group separate from analysis and storage costs.

**Explore, tag, and annotate phenotypes in the Study Variable Explorer**

The [Study Variable Explorer](https://sb-biodatacatalyst.readme.io/docs/study-variable-explorer) on _BioData Catalyst Powered by Seven Bridges_ allows researchers to explore phenotypic variables from the TOPMed data dictionaries in an open access manner. Previously, researchers were limited to searching data dictionary information on dbGaP and making comparisons between different study variables was cumbersome with poor UX. Study Variable Explorer enables researchers to select phenotypic variables from across TOPMed studies and view detailed information and distributions of the variable data. By searching keywords, such as obesity, a researcher can compare like variables within and across hosted datasets including the number of subjects and descriptions of the variables. Additionally, users can create custom searchable tags and notes for each variable to track their variable selection and pre-harmonization process.

**New CWL Tools and Workflows on&#x20;**_**BioData Catalyst Powered by Seven Bridges**_

* An updated version of the **SRA Download and Set Metadata** workflow (SRA Toolkit 3.0.0) that downloads metadata associated with SRA accession via SRA Run Info CGI, (on-demand instance) FASTQ files and sets corresponding metadata.
* **fastENLOC** (v1.0, CWL1.2), a tool that enables integrative genetic association analysis of molecular QTL data and GWAS data. It performs integration of the results from molecular quantitative trait loci (QTL) mapping into genome-wide genetic association analysis of complex traits, with the primary objective of quantitatively assessing the enrichment of the molecular QTLs in complex trait-associated genetic variants and the colocalizations of the two types of association signals.
* **GATK Somatic SNVs and INDELs (Mutect2) 4.2.5.0**, a workflow used for somatic short variant calling. It runs on a single tumor-normal pair or on a single tumor sample, and performs additional filtering and functional annotation tasks, and
* **GATK Create Mutect2 Panel of Normals 4.2.5.0** that creates a panel of normals for use in other GATK workflows. The workflow takes multiple normal sample callsets and passes them to **GATK Somatic SNVs and INDELs (Mutect2) 4.2.5.0** with tumor-only mode (although it is called tumor-only, normal samples are given as the input) and additionally collates sites present in two or more samples into a sites-only VCF.
* Three apps from the **MetaXcan** toolkit:
  * **S-PrediXcan** for computing associations between omic features and a complex trait starting from GWAS summary statistics.
  * **S-MultiXcan** for computing association from predicted gene expression to a trait, using multiple studies for each gene.
  * **MetaMany** for serially performing multiple MetaXcan runs on a GWAS study from summary statistics using multiple tissues.
* The **MetaXcan Workflow** for computing associations between omic features and complex traits across multiple tissues. The workflow includes two tools from the MetaXcan framework - **MetaMany** and **S-MultiXcan** and it uses summary statistics from a GWAS study and multiple models that predict the expression or splicing quantification.
* **MaxQuant** (v2.0.3.0, CWL1.2), a quantitative proteomics tool designed for analyzing large mass-spectrometric data. It uses a target-decoy search strategy to estimate and control the extent of false positives. Within the target-decoy strategy, **MaxQuant** applies the concept of posterior error probability (PEP) to integrate multiple peptide properties (e.g., length, charge, number of modifications) together with Andromeda score into a single quantity, reflecting the quality of a peptide spectrum match (PSM).

**Dockstore GitHub app support expanded to CWL tools**

Researchers can now register your tool to automatically sync with GitHub. Using GitHub Apps, Dockstore can react to changes on GitHub as they are made, keeping Dockstore synced with GitHub automatically. Additional details are available [here](https://docs.dockstore.org/en/stable/getting-started/dockstore-tools.html#register-your-tool-to-automatically-sync-with-github-recommended).

### **Data Releases**

The table below highlights which studies were included in the Q2 2022 data releases. The data is now available for access across the entire ecosystem.

| Study Name                              | phs I.D. # | Acronym   | New to BioData Catalyst  | New study version |
| --------------------------------------- | ---------- | --------- | ------------------------ | ----------------- |
| C3PO (COVID-19)                         | phs002752  | C3PO      | true                     | 1                 |
| TOPMed Freeze 9 - Batch 3               | various    | various   | false                    | NA                |
| TOPMed Freeze 9 - Batch 4               | various    | various   | false                    | NA                |
| National Sleep Research Resource (NSRR) | phs002715  | NSRR-CFS  | true                     | 1                 |
| SPIROMICS (topmed: phs001927)           | phs001927  | SPIROMICS | true                     | 1                 |

### **Planned Upcoming Data Releases**

| Study Name                             | phs I.D. # | Acronym           | New to BioData Catalyst | New study version |
| -------------------------------------- | ---------- | ----------------- | ----------------------- | ----------------- |
| BostonBrazil\_SCD (TOPMed - phs001599) | phs001599  | BostonBrazil\_SCD | true                    | 1                 |
| TOPMed - PCGC (Version update)         | phs001735  | PCGC              | false                   | 2                 |
| PCGC SRA Data                          | phs000571  |                   | true                    | 5                 |
| TOPMed Freeze 9 - WHI                  | various    | various           | false                   | NA                |
| MUSIC/CARING (COVID-19)                | phs002770  | MUSIC/CARING      | true                    | 1                 |

### **For detailed platform release notes please consult the following resources:**

Gen3 release notes\
[Terra release notes](https://support.terra.bio/hc/en-us/categories/360000693572)\
[Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/blog)\
PIC-SURE release notes\
[Dockstore release notes](https://docs.dockstore.org/en/develop/changelog.html)

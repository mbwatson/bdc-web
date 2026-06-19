---
title: "2023-04-04 BioData Catalyst Ecosystem Release Notes"
---

# 2023-04-04 BioData Catalyst Ecosystem Release Notes

### **Introduction**

The 2023-04-04 release marks the thirteenth release for the NHLBI BioData Catalyst® (BDC) ecosystem. This release includes several new features, e.g., a new gallery for Public Projects and new project-based download restrictions on _BDC Powered by Seven Bridges (BDC-Seven Bridges)_. It also includes documentation and tutorials to help new users get started on the system, e.g., how to start using the _BDC Powered by PIC-SURE (BDC-PIC-SURE)_ API. Please find more details on the new features and user support materials in the sections below.

Please refer to the Data Releases section below for information on upcoming data releases. A list of currently available data can be viewed on the [Data page](https://biodatacatalyst.nhlbi.nih.gov/resources/data) of the BDC website.

### **Significant new features**

**New gallery for Public Projects on&#x20;**_**BDC-Seven Bridges**_**:** _BDC-Seven Bridges_ has released a new user interface to make browsing and selecting public projects easier. Previously, Public Projects were found as a list under a dropdown menu. The interface has been updated where the Public Resources > Projects dropdown displays a gallery of project cards with summaries and easily clickable “Copy Project” buttons.

**Project-based download restrictions on&#x20;**_**BDC-Seven Bridges**_**:** Many consortia have found value in using the _BDC-Seven Bridges_ project member permissions to collaborate and distribute data prior to public release. However, the ability to add new files to a project also allows a user to download files to their local environment. _BDC-Seven Bridges_ released a new feature providing project-based download restrictions to the owner of the project. When creating a project, a user can turn on Download Restrictions and select to either allow analysis (CWL tools/workflows or Data Studio) but no download to a local environment, or no analysis and no download to the local environment. To request access to the new feature, email [support@sevenbridges.com](mailto:support@sevenbridges.com).

**New CWL tools and workflows on&#x20;**_**BDC-Seven Bridges**_**:**

* **Minimac 4 4.1.2:** a tool for imputing genotypes.
* **GATK 4.4.0.0**
  * _GATK IndexFeatureFile_ for indexing of provided feature files.
  * _GATK MergeVcfs_ for combining multiple variant files.
  * _GATK VariantEval BETA_ for evaluating variant calls.
  * _GATK FilterMutectCalls_ filter somatic SNVs and indels called by Mutect2.
* **HTSeq-count 2.0.2:** HTSeq-count is a Python tool for counting how many reads map to each feature.
* **GraphicsMagick 1.3.38**
  * _GraphicsMagick compare_ compares two images using statistics and/or visual differencing. The tool compares two images and reports difference statistics according to specified metrics, and/or outputs an image with a visual representation of the differences.
  * _GraphicsMagick composite_ composites (combines) images to create a new image.
  * _GraphicsMagick conjure_ interprets and executes scripts in the Magick Scripting Language (MSL). The Magick scripting language (MSL) will primarily benefit those that want to accomplish custom image processing tasks but do not wish to program.
  * _GraphicsMagick convert_ is used to convert an input image file using one image format to an output file with the same or different image format while applying an arbitrary number of image transformations.
  * _GraphicsMagick montage_ creates a composite image by combining several separate images.
* **MHC-I Binding Prediction tool (MHC I 3.1.2 toolkit)** - which is used for prediction of peptides that bind to MHC I molecules.
* **MHC-II Binding Prediction tool (MHC II 3.1.6 toolkit)** - which is used for prediction of peptides that bind to MHC II molecules.
* **MHCflurry Predict tool (MHCflurry 2.0.4 toolkit)** - which is used for peptide/MHC I binding affinity prediction.
* **MHCflurry Scan tool (MHCflurry 2.0.4 toolkit)** - which is designed to scan protein sequences and predict MHC-I ligands.
* **AXEL-F:** Antigen eXpression based Epitope Likelihood-Function tool (AXEL-F 1.0.0 toolkit) - which is used for MHC-I epitope prediction.
* **NetChop tool (NetChop 3.0 toolkit)** - which is a predictor of proteasomal processing based upon a neural network.
* **NetCTL tool (NetCTL 3.0 toolkit)** - which is a T cell epitopes predictor.
* **NetCTLpan tool (NetCTLpan 3.0 toolkit)** - which is a T cell epitopes predictor.
* **Class I Immunogenicity tool (Class I Immunogenicity 3.0 toolkit**) - which predicts the immunogenicity of a peptide MHC (pMHC) complex.
* **TCRMatch tool (TCRMatch 1.0.2 toolkit)** - which predicts T-Cell receptor specificity based on sequence similarity to characterized receptors.
* **BCell tool (BCell 3.1 toolkit)** - which predicts linear B cell epitopes based on the antigen characteristics.
* **ElliPro tool (ElliPro 1.0 toolkit)** - which predicts antibody epitopes based upon solvent-accessibility and flexibility.
* **Population Coverage tool (Population Coverage 3.0 toolkit)** - which calculates the fraction of individuals predicted to respond to a given set of epitopes.
* **Epitope Cluster Analysis tool (Epitope Cluster Analysis 1.0 toolkit)** - which groups epitopes into clusters based on sequence identity.
* **Picard 3.0.0 toolkit:**
  * _Picard CollectMultipleMetrics_ collects BAM statistics by running multiple Picard modules at once.
  * _Picard ValidateSamFile_ validates an alignments file against the SAM specification.
  * _Picard SortSam_ sorts alignment files (BAM or SAM).
  * _Picard RevertSam_ reverts a BAM/SAM file to a previous state.
  * _Picard MarkDuplicates_ marks duplicate reads in alignment files.
  * _Picard GenotypeConcordance_ calculates genotype concordance between two VCF files.
  * _Picard GatherBamFiles_ merges BAM files after a scattered analysis.
  * _Picard FixMateInformation_ verifies and fixes mate-pair information.
  * _Picard FastqToSam_ converts FASTQ files to an unaligned SAM or BAM file.
  * _Picard CrosscheckFingerprints_ checks a set of data files for sample identity.
  * _Picard CreateSequenceDictionary_ creates a DICT index file for a sequence.
  * _Picard CollectWgsMetricsWithNonZeroCoverage_ evaluates the coverage and performance of WGS experiments.
  * _Picard CollectVariantCallingMetrics_ can be used to collect variant call statistics after variant calling.
  * _Picard CollectSequencingArtifactMetrics_ collects metrics to quantify single-base sequencing artifacts.
  * _Picard CollectHsMetrics_ collects hybrid-selection metrics for alignments in SAM or BAM format.
  * _Picard CollectAlignmentSummaryMetrics_ produces a summary of alignment metrics from a SAM or BAM file.
  * _Picard CheckFingerprint_ checks sample identity of provided data against known genotypes.
  * _Picard BedToIntervalList_ converts a BED file to a Picard INTERVAL\_LIST format.
  * _Picard AddOrReplaceReadGroups_ assigns all reads to the specified read group.
* **MetaCyto workflow (1.16.0 in CWL 1.2):** based on R package MetaCyto that performs meta-analysis of both flow cytometry and mass cytometry (CyTOF) data. It is able to jointly analyze cytometry data from different studies with diverse sets of markers.

**New and improved R adapter for&#x20;**_**BDC-PIC-SURE**_**&#x20;API:** The R adapter for the _BDC-PIC-SURE_ API has been completely revamped to improve performance, address known bugs, and make the API easier to use for R coders. All example code, in both Jupyter and RStudio, has been updated to show these code improvements in practice. Note: The old version of the R API will be available for use until August 31st, 2023. It is recommended that you update your code with the new changes.

_**BDC Powered by Gen3 (BDC-Gen3)**_**&#x20;Metadata Being Updated to bring data from dbGaP FHIR database:** _BDC-Gen3’s_ Discovery Page (and underlying _BDC-Gen3_ Source of Truth Metadata API) allows unauthenticated users to discover what datasets are available in BDC. Fast Health Interoperability Resources (FHIR) is an Health Level Seven International (HL7) specification for Healthcare Interoperability. The database of Genotypes and Phenotypes (dbGaP) has recently exposed a [FHIR server](https://dbgap-api.ncbi.nlm.nih.gov/fhir/x1). _BDC-Gen3_ has worked to consume the new metadata from the dbGaP FHIR Server (as part of the officially defined data ingestion process). _BDC-Gen3’s_ Python-based Software Development Kit (SDK) and Command Line Interface (CLI) now has:

* A FHIR client
* Direct interaction with dbGaP’s FHIR API
* Extract, Transform, Load (ETL) logic to parse the content from dbGaP’s FHIR and load into _BDC-Gen3’s_ Metadata API

_BDC-Gen3’s_ Data Ingestion Pipeline will be updated to use the above tool to load FHIR metadata every new data release. In April 2023, loaded metadata will be available to all clients/users through _BDC-Gen3’s_ Metadata API, and loaded metadata will be viewable in _BDC-Gen3’s_ Discovery Page.<br>

### **New user support materials and documentation**

**Learn about and start using the&#x20;**_**BDC-PIC-SURE**_**&#x20;API on the new “API” page:** The “API” page on the _BDC-PIC-SURE_ website provides everything you need to get started with the _BDC-PIC-SURE_ API. This includes the personalized access token, links to publicly available R and Python code on both _BDC Powered by Seven Bridges and Powered by Terra_, and links to additional documentation.

### **Data Releases**

In Q1 2023, progress was made in establishing procedures, clarifying data submission, and reworking screening protocols for multiple datasets for use with upcoming dataset ingestion. This included collaborative efforts with NHLBI to support pre-ingestion quality assurance, as well as data support for screening and assisting data submitters in preparing their data for future ingestion into BDC. Key datasets that underwent these processes include nuMoM2b (phs002808.v1.p1.c1), BABY HUG (phs002415.v1.p1.c1), MSH (phs002348.v1.p1.c1), NSRR-CFS (phs002715.v1.p1.c1), and CRA (phs000988.v4.p1.c1).

### **Planned Upcoming Data Releases**

| Study Name                                                                                | phs I.D. #         | Acronym                          | New to BioData Catalyst | New study version |
| ----------------------------------------------------------------------------------------- | ------------------ | -------------------------------- | ----------------------- | ----------------- |
| Nulliparous Pregnancy Outcomes Study: Monitoring Mothers-to-Be (nuMoM2b)                  | phs002808.v1.p1.c1 | topmed-NuMom2B\_GRU-IRB          | Yes                     | Yes               |
| Hydroxyurea to Prevent Organ Damage in Children with Sickle Cell Anemia (BABY HUG)        | phs002415.v1.p1.c1 | BioLINCC-BabyHug\_DS-SCD-IRB-RD  | No                      | No                |
| Multicenter Study of Hydroxyurea (MSH)                                                    | phs002348.v1.p1.c1 | BioLINCC-MSH\_GRU                | No                      | No                |
| The Cleveland Family Study (NSRR-CFS)                                                     | phs002715.v1.p1.c1 | NSRR-NSRR-CFS\_DS-HLBS-IRB-NPU   | No                      | No                |
| The Genetic Epidemiology of Asthma in Costa Rica (CRA)                                    | phs000988.v4.p1.c1 | topmed-CRA\_DS-ASTHMA-IRB-MDS-RD | No                      | Yes               |
| Long-Term Outcomes after the Multisystem Inflammatory Syndrome In Children (MUSIC)        | phs002770          | -                                | Yes                     | Yes               |
| Accelerating COVID-19 Therapeutic Interventions and Vaccines 4 ACUTE (ACTIV4a) v1.0, v1.1 | phs002694.v1.p1.c1 | COVID19-ACTIV4A\_GRU             | No                      | Yes               |
| Molecular Atlas of Lung Development (LungMAP)                                             | phs001961.v2.p1.c1 | -                                | Yes                     | Yes               |
| Freeze 9 version Updates: Batch 1                                                         | -                  | -                                | No                      | Yes               |

### **For detailed platform release notes please consult the following resources:**

Gen3 release notes\
[Terra release notes](https://support.terra.bio/hc/en-us/categories/360000693572)\
[Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/blog)\
[PIC-SURE release notes](https://pic-sure.gitbook.io/nhlbi-biodata-catalyst-r-powered-by-pic-sure/release-notes/release-notes)\
[Dockstore release notes](https://docs.dockstore.org/en/develop/changelog.html)

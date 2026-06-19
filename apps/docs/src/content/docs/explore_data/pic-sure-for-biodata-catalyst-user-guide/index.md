---
title: "NHLBI BioData Catalyst® Powered by PIC-SURE User Guide"
---

# NHLBI BioData Catalyst® Powered by PIC-SURE User Guide

The **Patient Information Commons: Standard Unification of Research Elements (PIC-SURE)** integrates clinical and genomic data to allow users to search, query, and export data at the variable and variant levels. This allows users to create analysis-ready data frames without manually mapping and merging files.&#x20;

_NHLBI BioData Catalyst® (BDC)_ is a cloud-based ecosystem providing tools, applications, and workflows in secure workspaces. _BDC Powered by PIC-SURE (BDC-PIC-SURE)_ is a platform that allows researchers to explore studies funded by the National Heart, Lung, and Blood Institute, whether the researchers have been granted access to the participant-level data or not.



## Frequently Asked Questions

<details>

<summary>What data is available on BDC-PIC-SURE?</summary>

To check which studies are available, you can visit the Data Dashboard on the BDC-PIC-SURE website: [https://picsure.biodatacatalyst.nhlbi.nih.gov/dashboard](https://picsure.biodatacatalyst.nhlbi.nih.gov/dashboard)

BDC continually ingests new datasets and updated versions of studies. If you don't see a dataset that you'd like to use for research, you can submit a [BDC HelpDesk ticket](https://biodatacatalyst.nhlbi.nih.gov/help-and-support/contact-us/).

</details>

<details>

<summary>How is the data organized in BDC-PIC-SURE?</summary>

Each variable from each study is associated with a specific concept path. To learn more about how these concepts paths are created, please refer to the Data Organization in BDC-PIC-SURE page.

</details>

<details>

<summary>How do I get access to data?</summary>

BioData Catalyst uses the Database of Genotypes and Phenotypes, or dbGaP, to manage data access. This means that to access a controlled dataset on BDC, you must have an active dbGaP Data Access Request, or DAR.

Note that BDC has publicly available studies, such as 1000 Genomes and BioLINCC training datasets, available to all researchers.

You can check out the [BDC Documentation for Data Access](https://bdcatalyst.gitbook.io/biodata-catalyst-documentation/written-documentation/data-access) for more information about data access on BDC.

For information from dbGaP on submitting a data access request, refer to [Tips for Preparing a Successful Data Access Request documentation](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/GetPdf.cgi?document_name=GeneralAAInstructions.pdf).

</details>

<details>

<summary>What can I do if I don't have authorization to access any datasets?</summary>

You can still browse all studies available in BDC using BDC-PIC-SURE. With this tool, you can search for variables, apply filters, and conduct feasibility studies to determine which datasets work for your research. Please refer to the Discover section for more information.

Additionally, you can use one of the publicly available datasets on BDC. All investigators have access to these studies. These can be great for understanding BDC-PIC-SURE exports and setting up your analysis tools and workflows, especially while waiting for data access. To learn more about the publicly available datasets in BDC-PIC-SURE, please go to the Publicly Available Datasets page.

</details>

<details>

<summary>What does the data look like when I export the cohort?</summary>

There are several ways that the data can be exported.

The first is a Dataframe or CSV file where each column is a variable, and each row is a participant. Variables that were either filtered on or added for analysis will be displayed in the table's columns. Note that a few PIC-SURE-generated variables are automatically included with each export.

The second is a Timeseries CSV, where there are consistent columns for participant ID, concept path or variable, value, and timestamp. Each row describes a unique participant and variable value.

The third is a Portable Format for Biomedical Data, or PFB file. This includes two tables: one is the Dataframe table described above, and the other is a data dictionary table with more information about the variables added. This is exported as an avro file.

For more detailed information, please refer to the Prepare for Analysis section.

</details>

<details>

<summary>How can I analyze my results in an analysis platform in BioData Catalyst?</summary>

There are a few ways to bring the selected participant-level data from BDC-PIC-SURE into one of the BDC analysis platforms, BDC-Seven Bridges or BDC-Terra. To learn more about this, please refer to the Analysis in the BioData Catalyst Ecosystem page.

</details>

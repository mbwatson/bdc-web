---
title: "BDC-PIC-SURE Data Format"
---

# BDC-PIC-SURE Data Format

## _BDC-PIC-SURE_ Data Ingestion

The study data files are opened to generate a full data dictionary for the dataset. dbGaP has registered some studies with table (pht) and variable (phv) accessions, which provide a hierarchy to the dataset. Datasets that do not have dbGaP registered tables or variables utilize the form and variable name assigned by the data submitter.

<table><thead><tr><th width="159">Dataset Types</th><th width="157">Study Accession</th><th width="135">Form Group*</th><th width="160">Table Accession</th><th width="155">Variable Group*</th><th width="181">Variable Accession</th><th width="152">Variable Name</th><th width="136">Variable ID</th><th width="228">Concept Path Example</th><th data-hidden>Study Accession</th><th data-hidden>Form Group*</th><th data-hidden>Table Accession</th><th data-hidden>Variable Group*</th><th data-hidden>Variable Accession</th><th data-hidden>Variable ID</th><th data-hidden>Concept Path Example</th></tr></thead><tbody><tr><td>dbGaP format</td><td>phsXXXXXX</td><td>N/A</td><td>phtXXXXXX</td><td>N/A</td><td>phvXXXXXXXX</td><td>Variable Name</td><td>N/A</td><td>\phs\pht\phv\variable name</td><td>phsXXXXXX</td><td>N/A</td><td>phtXXXXXX</td><td>N/A</td><td>phvXXXXXXXX</td><td>N/A</td><td>\phs\pht\phv\variable name</td></tr><tr><td>Example: FHS</td><td>phs000007</td><td>N/A</td><td>pht003094</td><td>N/A</td><td>phv00177292</td><td>g3b0073</td><td>N/A</td><td>\phs000007\pht003094\phv00177292\g3b0073</td><td>phs000007</td><td>N/A</td><td>pht003094</td><td>N/A</td><td>phv00177292</td><td>N/A</td><td>\phs000007\pht003094\phv00177292\g3b0073</td></tr><tr><td>non-dbGaP format</td><td>phsXXXXXX</td><td>Form Group Name (if included)</td><td>Form Name</td><td>Variable Group Name (if included)</td><td>N/A</td><td>Variable ID</td><td>Variable ID</td><td>\phs\variable name</td><td>phsXXXXXX</td><td>Form Group Name (if included)</td><td>Form Name</td><td>Variable Group Name (if included)</td><td>N/A</td><td>Variable ID</td><td>\phs\variable name</td></tr><tr><td>Example: ACTIV-4a</td><td>phs002694</td><td>Adjudication Forms - Hematological event</td><td>ADJ PE: Pulmonary embolism</td><td>N/A</td><td>N/A</td><td>CEC_ID</td><td>CEC_ID</td><td>\phs002694\CEC_ID</td><td>phs002694</td><td>Adjudication Forms - Hematological event</td><td>ADJ PE: Pulmonary embolism</td><td>N/A</td><td>N/A</td><td>CEC_ID</td><td>\phs002694\CEC_ID\<br><br>Hierarchy: ACTIV-4a/Adjudication Forms - Hematological event/ADJ_PE: Pulmonary embolism/Episode ID</td></tr><tr><td>Example: RECOVER Pediatric</td><td>phs003461</td><td>recover_pediatric_congenital</td><td>enrollment</td><td>demographics</td><td>N/A</td><td>biosex</td><td>biosex</td><td>\phs003461\recover_pediatric_congenital\enrollment\demographics\biosex\</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

\*indicates information for non-dbGaP format studies only

## BDC Full Data Dictionary

PIC-SURE allows robust searching of variables via their metadata. _BDC-PIC-SURE_ metadata includes file-level data, data dictionaries, variable-level data, variables, and data values. To support this broad range of search capabilities, data dictionaries are assembled. The dataset with registered dbGaP tables and variables contains decoded data dictionaries. An example of a decoded data dictionary would be if 1 is the assigned value for Male and 2 for Female, and the researcher could search for Male or Female.

For some studies, the data dictionaries are submitted in a programmatically readable format. For other studies, the data dictionaries are assembled into programmatically readable decoded data dictionaries, which are documented here: [https://github.com/hms-dbmi/pic-sure-metadata-curation](https://github.com/hms-dbmi/pic-sure-metadata-curation)

Discover is a publicly available tool with no login that displays aggregate counts. While the data dictionary includes information about stigmatizing variables, the participant-level data excludes information from these variables, which are associated with the following categories:

* Mental health diagnoses/history/treatment
* Illicit drug use history
* Sexually transmitted disease diagnoses/history/treatment
* Sexual history
* Intellectual Achievement/Ability/Educational Attainment
* Direct or surrogate identifiers of legal status

The PIC-SURE team has built a [pipeline](https://github.com/hms-dbmi/biodata_catalyst_stigmatizing_variables) to identify stigmatizing variables to ensure reproducibility and scalability. This process requires human decision-making; for example, “sex” could be associated with the patient’s gender or sexual history. The list of variables that have been deemed not stigmatizing: [https://github.com/hms-dbmi/biodata\_catalyst\_stigmatizing\_variables/blob/new\_search\_conversion/stigmatizing\_terms/terms\_excluded.tsv](https://github.com/hms-dbmi/biodata_catalyst_stigmatizing_variables/blob/new_search_conversion/stigmatizing_terms/terms_excluded.tsv)

The list of stigmatizing variables has been documented here: [https://github.com/hms-dbmi/biodata\_catalyst\_stigmatizing\_variables/blob/new\_search\_conversion/stigmatizing\_terms/stigmatizing\_keywords.tsv](https://github.com/hms-dbmi/biodata_catalyst_stigmatizing_variables/blob/new_search_conversion/stigmatizing_terms/stigmatizing_keywords.tsv)

The data dictionary is stored in a Postgres database and information from that database is available via the PIC-SURE API. Below is a high-level diagram of the table structure of the database and how it relates to different elements of study and/or variable metadata.

<figure><img src="https://lh7-rt.googleusercontent.com/slidesz/AGV_vUdtvadcd2WFHwYhl4DVucun-WymnQ-Xk0_tstpX3V4vSPX4XmLR9xj0TOb93ia9pwwFhRqH_a2iVqAcyyNe-q6S0YctnSC21GMbDWpeSZNCczZj9xq1LKoRtrwnE-wxj3r5yeDSVf-D_objpjYcv02rv9t0ksoR=s2048?key=um1XQd9tflGSN4nKFMG-0Q" alt=""><figcaption></figcaption></figure>

### PIC-SURE High Performance Data Store (HPDS)

HPDS is a wide-column store, or a column-oriented DBM, [NoSQL](https://en.wikipedia.org/wiki/NoSQL) [database](https://en.wikipedia.org/wiki/Database). HPDS was built to support biomedical informatics use cases without requiring massive clustering as the datasets increase in scale; therefore it can manage arbitrarily large datasets with very little computing. By utilizing a flexible data model, HPDS can support different ontologies and data types, such as phenotypic (ie, eCRF, EHR), genomic, biosample metadata, imaging metadata, etc. The flexible data model allows researchers to search and query across different data types at the variable value and genomic variant level to retrieve participant-level information, rather than the file-level.

For clinical data, datasets are stored as two files: metadata and data. The metadata file contains the internal data dictionary, high-level dataset-specific information, and file offsets for each variable's data within the data file. The data file contains data for three concepts: patient index, numerical index, and categorical index.

The table below displays the format of the variable-level data:

| PATIENT\_NUM                                                     | CONCEPT\_PATH                                                                                                                                                                   | NVAL\_NUM      | TVAL\_CHAR         | TIMESTAMP                           |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------ | ----------------------------------- |
| Integer value used to identify the participant across data types | [Flexible path](https://pic-sure.gitbook.io/nhlbi-biodata-catalyst-powered-by-pic-sure/data-in-pic-sure/data-organization-in-bdc-pic-sure) of the concept based on the ontology | Numeric values | Categorical values | Timestamp associated with a concept |

For genomic data, variants that are not represented in the database are not stored. Genomic sample data is stored separately from variant annotations in HPDS. Variant annotations are stored using the same Numerical Index, and Categorical Index described above, indexing variant IDs instead of patient IDs.

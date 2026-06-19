---
title: "dbGaP Study Configuration Process for Submission of Data to BDC"
---

# dbGaP Study Configuration Process for Submission of Data to BDC

## Introduction

To submit data to BDC, the data must be registered in dbGaP. BDC has worked with dbGaP to modify and streamline the dbGaP registration process for BDC data submission. The dbGaP data registration process for data submission to BDC is detailed below. If you have questions or concerns regarding the BDC Data registration and submission process, contact [bdcatalystdatasharing@nih.gov](mailto:bdcatalystdatasharing@nih.gov).

## Process

1. Prepare the dbGaP-required files (2a-b, 3a-b) for data registration and submission in the dbGaP Submission Portal, as follows:
   * **File 2b: Subject Consent Data Dictionary**\
     Create a Microsoft Excel file with the following four column headers: `VARNAME`, `VARDESC`, `TYPE`, and `VALUES`. As this file defines the contents of `file 2a`, it is necessary for dbGaP programming and telemetry.
     1. `VARNAME` contains the names of the variables used for Subject ID and Consent, generally indicated as `SUBJECT_ID` and `CONSENT`, respectively.
     2. `VARDESC` describes the variables (e.g., `CONSENT`= _Consent group as determined by NHLBI's DAC from the Institutional Certification's Data Use Limitations_).
     3. `TYPE` is the type of value where `SUBJECT_ID` will generally be indicated as `string` and `CONSENT` will generally be indicated as `encoded value`.
     4. `VALUES` contains the allowable values for each `VARNAME` attribute. If there is only one consent code for all subject IDs within a data file, the value will always be `1`. (e.g., if `CONSENT` is deemed `General Research Use` for a study, then the encoded value for `CONSENT` will be `1=General Research Use (GRU)`)
     5. Save this file as `2b_SubjectConsent_DD.xlsx`. You can optionally append the filename with a study name after `DD` if you prefer.
   * **File 2a: Subject Consent Data Set**\
     Create a text or Microsoft Excel file with two columns with the following headers: `SUBJECT_ID` and `CONSENT`.
     1. Populate the `SUBJECT_ID` column with only all unique, distinct subject IDs from the study.
     2. Populate the `CONSENT` column with the mapped consent values from the Subject Consent Data Dictionary (e.g. - 1, 2, etc.). If there's only one consent group for the entire study, you can indicate `1` for all Subject IDs in the file.
     3. Save the file as `2a_SubjectConsent_DS.txt`. You can optionally append the filename with a study name after `DS` if you prefer.
   * **File 3b: Subject-Sample Mapping Data Dictionary**\
     Create a Microsoft Excel file containing four columns with headers titled: `VARNAME`, `VARDESC`, `TYPE`, and `VALUES`.
     1. `VARNAME` contains the names of the variables used for Subject ID and Sample ID, generally indicated as, `SUBJECT_ID` and `SAMPLE_ID`, respectively.
     2. `VARDESC` describes the variables (e.g., `SAMPLE_ID`= Individual sample ID)
     3. `TYPE` is the type of value where both `SUBJECT_ID` and `SAMPLE_ID` will generally be indicated as `string`.
     4. `VALUES` will remain blank as the variable type is `string` and as such will not contain any encoded or other allowable values.
     5. Save this file as `3b_SSM_DD.xlsx`. You can optionally append the filename with a study name after `DD` if you'd like.
   * **File 3a: Subject Sample Mapping Data Set**\
     Create a Microsoft Excel file containing two columns with the values, `SUBJECT_ID` and `SAMPLE_ID`.
     1. The contents of these columns are the mapped sample IDs for each individual ID within a study. There may be multiple samples per subject/individual, thus the total count of subject IDs will likely be greater than the number of individuals in the study.
     2. Note that if no sample exists for a subject, you must duplicate the subject ID in the sample ID column, as the sample ID column cannot have any null values. Additionally, the IDs must be concatenated to remove any spaces within an ID, as spaces are not allowable.
     3. Save this file as `3a_SSM_DS.xlsx`. You can optionally append the filename with a study name after `DS` if you'd like.
2. The data submitter will receive an auto-generated dbGaP email from the NHLBI Genomic Program Administrator (GPA). The data submitter will need to click a link in the email to accept the invitation for study registration which will take them to the Initial Submission Questionnaire.
3. In the Initial Submission Questionnaire, for Question 1 - "Will individual-level phenotype (demographic, clinical or exposure) data be submitted?", select "Yes" then enter total distinct subject count when prompted to indicate "How many subject IDs (one subject ID per individual person) will be submitted?".
4. Select "No" for remaining questions on the Initial Submission Questionnaire and submit the questionnaire.
5. On the next page, the accession ID will be generated and provided to you to take note of. Generally the accession ID will appear as `phs` followed by 6 numeric digits followed by the version and the participant set version. After the submission is curated by a dbGaP curator, the consent group value will be added to the accession ID (e.g., `phs000000.v1.p1.c1`, where only `phs000000.v1.p1` will be generated at the time of initial questionnaire submission.
   * This complete accession ID is used by BDC to name the cloud buckets in which data is stored for access by the BDC ecosystem. If there are multiple consent groups for a study, data for one consent group will be uploaded to one cloud bucket, where multiple cloud buckets may contain data for a single study with multiple consent groups.
6. Complete the Study Config page with the study description, inclusion and exclusion criteria, study history, study design, study type, relevant web links, clinical trials ID, [MeSH terms](https://www.ncbi.nlm.nih.gov/mesh/), relevant gene names, PubMed references, and attribution information.
   * In the _Study Description_ section, be sure to include a note regarding data access via BDCat, "Instructions for requesting individual-level data are available on BDC at [https://biodatacatalyst.nhlbi.nih.gov/resources/data/](https://biodatacatalyst.nhlbi.nih.gov/resources/data/). Apply for data access in dbGaP. Upon approval, users may begin accessing requested data in BDC. For questions about availability, you may contact the BDC team at [https://biodatacatalyst.nhlbi.nih.gov/contact](https://biodatacatalyst.nhlbi.nih.gov/contact)."
   * You are able to preview the _Study Report Page_ by clicking the link under the _Edit_ button for the _Study config_ section and share this link with PIs or other study personnel for review and feedback prior to the study page going live on dbGaP, usually within 1-2 weeks of submission. This information can be edited at any time.
7. Upload files 2a (Subject Consent Data), 2b (Subject Consent Data Dictionary), 3a (Subject Sample Mapping Data), 3b (Subject Sample Mapping Data Dictionary) in the dbGaP Submission Portal.
8. Create a text file called `blank.txt`.
   * Upload text file `blank.txt` for Sample Attributes Data and DD (6a and 6b), as no data for BDC ingest will be uploaded to dbGaP.
9. No further information is required to be provided.
10. Click **Submit** at the bottom of the page.
    * The study will be submitted to dbGaP curators who will review the entire submission and correspond with any modifications required before the study page is live for data access requests (DARs) on the dbGaP system.

For clarification on any of the points above, refer to the comprehensive [dbGaP Study Submission Guide](https://www.ncbi.nlm.nih.gov/gap/docs/submissionguide/).

## Notes

### Subject Sample Mapping File

* There can be multiple samples per subject.
* If there are no samples, copy subject ID to sample ID column, as there can be no blanks in the `sample_ID` column.
* Remove any spaces in the subject or sample IDs as dbGaP cannot process spaces.

### Subject Consent File

* Remove duplicate IDs to ensure distinct subject IDs for consent mapping.

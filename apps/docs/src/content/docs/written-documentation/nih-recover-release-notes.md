---
description: 'Adult Observational Cohort Study: Dataset Release Notes'
title: "NIH RECOVER Release Notes"
---

# NIH RECOVER Release Notes

## November 2024

### RECOVER Adult and Pregnancy Observational Cohort Studies

**Release file: phs003463.v3.p2**

This release contains data collected from the [NIH RECOVER Adult Cohort Observational Study](https://pubmed.ncbi.nlm.nih.gov/37352211/) (RECOVER-Adult) between October 29, 2021 and June 15, 2024. These data were obtained from 15,183 adult participants (Including a sub-cohort of 2,332 pregnant women) attending 135,791 study interactions across 83 geographically dispersed enrolling sites.  The dataset also includes  an inventory of biospecimen samples (935,596 aliquots) collected during baseline and follow-up visits, plus wearable sensor metadata from 2,932 participants in the Digital Health Program. Overall this release comprises approximately 5,386 data elements and 37 million datapoints.  Please refer to the  [REDCap Codebook](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?study_id=phs003463.v2.p2\&phv=534450\&phd=8758\&pha=\&pht=14060\&phvf=\&phdf=\&phaf=\&phtf=\&dssp=1\&consent=\&temp=1) for a Data Dictionary organized as a list of all surveys/forms and their respective data fields.

RECOVER-Adult is a combined retrospective and prospective, longitudinal, observational meta-cohort study of individuals aged ≥ 18 who enter the cohort with and without SARS-CoV-2. Individuals with a prior SARS-CoV-2 infection enter the study at varying times after their infection. Individuals with and without SARS-CoV2 infection, and with or without PASC symptoms, are followed to identify risk factors and occurrence of PASC. This study is being conducted in the United States, with subjects recruited through inpatient, outpatient, and community-based settings. Study data including age, demographics, social determinants of health, medical history, vaccination history, details of acute SARS-CoV-2 infection, overall health and physical function, and PASC symptoms are reported at quarterly intervals. Biologic specimens also are collected at specified intervals, with some tests performed in local clinical laboratories and others performed by centralized research centers or banked in the Biospecimen Repository. Advanced clinical examinations and radiologic examinations are performed at local study sites with cross-site standardization. Please refer to this [link](https://pubmed.ncbi.nlm.nih.gov/37352211/) for details on the RECOVER-Adult study rationale, design and objectives, and to this [link](https://pubmed.ncbi.nlm.nih.gov/38128008/) for more on the design of the RECOVER-Pregnancy study.

Importantly, this release includes data underlying the first publication of primary results from the RECOVER-Adult study: Thaweethai et al., Development of a definition of post-acute sequelae of SARS-CoV-2 Infection. [JAMA. 2023](https://pubmed.ncbi.nlm.nih.gov/37278994/) Jun 13;329(22):1934-1946.

Please note that this release does not contain any genomic or metabolomic data.

### RELEASE NOTES FOR THE RECOVER Adult and Pregnancy Observational Cohort Studies

#### Data Quality

The RECOVER-Adult and RECOVER-Pregnancy Observational Cohort Studies consist of approximately 37 million datapoints (31 million Adult Study datapoints and 6 million Pregnancy Study datapoints) that were generated from surveys and laboratory tests, biospecimens, and metadata from diagnostic studies such as electrocardiograms, cardiac MRIs and other imaging modalities. Data quality management processes (automated queries and periodic reviews with study staff) have been employed throughout data collection, ingestion, deidentification and preparation for release to the public.

These processes have focused on evaluating data completeness and validity. Source data may contain legitimate “missing” variables due to branching logic or participants opting to not answer, and missing dates will propagate to the date-shifted variables as null entries. Invalid data may be due to manual entry errors (including incorrect formatting) or flawed data checks. Central to the data quality management effort has been a validation querying process that is run against all ingested data, and which triggers automated alerts to study sites if a datapoint is missing, out of range, inconsistent, or potentially erroneous.

Due to the volume of data and complexity of data types, it is difficult to assess the overall completeness and validity of RECOVER datasets. Based on various analytics and observations, we estimate the overall rate of data missingness to be less than 5%, and the rate of data validation issues to be less than 0.01%. Users are encouraged to contact [BioData Catalyst Support](mailto:biodatacatalyst@nhlbi.nih.gov) with any questions or concerns regarding this release of RECOVER data.

#### De-Identification Process

Masking of PARTICIPANT\_IDs was performed according to the following protocol:

1. Maintain PARTICIPANT\_IDs assigned in the previous data release (202403.1).
2. Extract PARTICIPANT\_IDs from each table within the Pediatric cohort (currently Answerdata, Biospecimens, Concepts, Demographics, Visits, and Fitbit) and perform de-duplication to ensure uniqueness.
3. Randomly reorder PARTICIPANT\_IDs.
4. Create a sequential list of numbers from 1 to the total number of unique PARTICIPANT\_IDs (14097) and join that list to the list of randomly reordered unique PARTICIPANT\_IDs, creating the ID lookup table.
   1. Note: From the 202309.1 release, participant IDs were assigned to 14,662 individuals in a random and not contiguous fashion from integers between 1 – 14702, including an excess of 40 integers left unassigned at random. From the 202403.1 release, additional IDs were assigned at random from integers between 14703 – 15211.
   2. For this release, no new IDs were assigned.
5. Add protocol codes as the prefix for randomly assigned Participant IDs.
   1. Adult (RA1), Pediatric (RP2), Autopsy (RD3), Congenital (RG4), Caregiver (RC5)
   2. Where R=Recover, A and 1 = Adult, P and 2 = Pediatric, D and 3 = Autopsy, G and 4 = Congenital, C and 5 = Caregiver.
6. Merge the ID lookup table with each of the tables in the Pediatric cohort by PARTICIPANT\_ID to attach the masked IDs.
7. Drop the column of original PARTICIPANT\_IDs from the merged tables, leaving just the masked ID to uniquely identify participants.
8. VISIT\_ID on the Answerdata and Visits tables also contains PARTICIPANT\_ID. Drop that portion of the VISIT\_ID within the de-identified data, retaining the rest of the VISIT\_ID.

#### ZIP Codes

ZIP Codes were truncated to 3 digits according to the following protocol:

1. Keep a substring of ZIP codes from the first to the third characters.

#### Dates of Birth and Ages

Date of birth and deceased dates were truncated according to the following protocol:

1. Keep a substring of date of birth and deceased date from the first to the fourth characters, corresponding to the year portion of the date.
2. Top capping age at enrollment at 89
3. Bottom capping date of birth at 1933 or 1934 (based on enrollment date)&#x20;

#### Remaining Dates

Date shifting of all other dates was performed according to the following protocol:

1. Select ENROLL\_DATE as the anchor date for each participant.
2. For participants who do not have an ENROLL\_DATE, we generate random anchor date within the year of 2023 (2023/01/01 to 2023/12/31).
3. Shift the anchor date to the first day of the year, i.e., 2023/01/01.
4. Calculate the difference in days from the original to the shifted anchor date.
5. Recalculate all other dates by adding that date difference to those dates.
6. Shift all date values within ANSWER\_TEXT\_VAL on the Answerdata table according to this protocol. Provide the concepts that correspond to date values within the Answerdata table in the file “RECOVERAdult\_BDC\_202406\_concepts\_deID.csv”

#### Summary

The following table lists the variables that were de-identified, along with the de-identification protocol that was applied.

| Data Table   | Variable               | De-Identification Protocol                          |
| ------------ | ---------------------- | --------------------------------------------------- |
| Demographics | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Demographics | ENROLL\_DATE           | Date shifting                                       |
| Demographics | ENROLL\_INDEX\_DATE    | Date shifting                                       |
| Demographics | CROSSOVER\_INDEX\_DATE | Date shifting                                       |
| Demographics | DOB                    | Truncation to year                                  |
| Demographics | WITHDRAW\_DATE         | Date shifting                                       |
| Demographics | DECEASED\_DATE         | Truncation to year                                  |
| Demographics | ENROLL\_ZIP\_CODE      | Truncation to 3 digits                              |
| Answerdata   | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Answerdata   | VISIT\_ID              | Removal of PARTICIPANT\_ID portion of VISIT\_ID     |
| Answerdata   | ANSWER\_TEXT\_VAL      | Date shifting                                       |
| Answerdata   | DATA\_ENTRY\_DATE      | Date shifting                                       |
| Biospecimens | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Biospecimens | COLLECTION\_DATE       | Date shifting                                       |
| Visits       | VISIT\_ID              | Removal of PARTICIPANT\_ID portion of VISIT\_ID     |
| Visits       | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Visits       | VISIT\_START\_DATE     | Date shifting                                       |
| Fitbit       | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Fitbit       | SUMMARY\_DATE          | Date shifting                                       |

The following table provides a brief description of the 6 BDC files in this release.

| Filename                                                            | Rows                              | Columns                   | File Size (MB)               | Participants                  |
| ------------------------------------------------------------------- | --------------------------------- | ------------------------- | ---------------------------- | ----------------------------- |
| <p> </p><p>RECOVERAdult_BDC_202406_answerdata_BDC.tsv</p><p> </p>   | <p> </p><p>28,979,068</p><p> </p> | <p> </p><p>14</p><p> </p> | <p> </p><p>7,629</p><p> </p> | <p> </p><p>15,177</p><p> </p> |
| <p> </p><p>RECOVERAdult_BDC_202406_biospecimens_BDC.tsv</p><p> </p> | <p> </p><p>935,596</p><p> </p>    | <p> </p><p>13</p><p> </p> | <p> </p><p>104</p><p> </p>   | <p> </p><p>13,503</p><p> </p> |
| <p> </p><p>RECOVERAdult_BDC_202406_concepts_BDC.tsv</p><p> </p>     | <p> </p><p>191,528</p><p> </p>    | <p> </p><p>6</p><p> </p>  | <p> </p><p>91</p><p> </p>    | <p> </p><p> </p><p> </p>      |
| <p> </p><p>RECOVERAdult_BDC_202406_demographics_BDC.tsv</p><p> </p> | <p> </p><p>15,183</p><p> </p>     | <p> </p><p>20</p><p> </p> | <p> </p><p>3</p><p> </p>     | <p> </p><p>15,183</p><p> </p> |
| <p> </p><p>RECOVERAdult_BDC_202406_fitbit_BDC.tsv</p><p> </p>       | <p> </p><p>6,415,774</p><p> </p>  | <p> </p><p>6</p><p> </p>  | <p> </p><p>704</p><p> </p>   | <p> </p><p>2,932</p><p> </p>  |
| <p> </p><p>RECOVERAdult_BDC_202406_visits_BDC.tsv</p><p> </p>       | <p> </p><p>135,791</p><p> </p>    | <p> </p><p>7</p><p> </p>  | <p> </p><p>11</p><p> </p>    | <p> </p><p>15,182</p><p> </p> |
| <p> </p><p>Total</p><p> </p>                                        | <p> </p><p>36,672,940</p><p> </p> | <p> </p><p>66</p><p> </p> | <p> </p><p>8,542</p><p> </p> |                               |

The following table provides a brief description of the biospecimens included in this release.

| Collected Biospecimens                     | Stored Biospecimens                          |
| ------------------------------------------ | -------------------------------------------- |
| Stool                                      | Stool                                        |
| Urine                                      | Urine                                        |
| Nasal/NP swab                              | Nasal or NP Cells                            |
| Oragene 600 – Saliva                       | Saliva                                       |
| Serum Separator Tube (SST) – Whole Blood   | Serum                                        |
| Sodium Citrate – Whole Blood               | Plasma                                       |
| PAXgene RNA – Whole Blood                  | Whole Blood                                  |
| Cell Preservation Tube (CPT) – Whole Blood | Peripheral Blood Mononuclear Cells (PBMCs)   |
| EDTA – Whole Blood                         | <p>Plasma</p><p>White Blood Cells (WBCs)</p> |

The following table lists all 86 REDCap forms in the dataset, and the corresponding number of variables/rows of data associated with each form.

| Form name                                      | Total Variables per Form |
| ---------------------------------------------- | ------------------------ |
|  acth\_and\_cortisol\_test                     | 7264                     |
| adult\_delivery\_and\_outcome\_form            | 341                      |
| alcohol\_and\_tobacco                          | 14025                    |
| alcohol\_and\_tobacco\_followup                | 13460                    |
|  assessment\_scores                            | 14967                    |
| audiometry\_survey                             |  421                     |
|  biospecimens                                  | 13792                    |
| brain\_mri\_quality\_confirmation              | 723                      |
| brain\_mri\_with\_gadolinium                   | 6057                     |
| cardiac\_mri                                   | 601                      |
| cardiac\_mri\_reading\_center                  | 29                       |
| cardiopulmonary\_exercise\_testing             | 1588                     |
| cardiovagal\_innervation\_testing              | 310                      |
| change\_in\_symptoms\_since\_infection         | 5044                     |
| chest\_ct                                      | 6759                     |
| chest\_ct\_reading\_center                     | 29                       |
| clinical\_labs                                 | 1808                     |
| colonoscopy                                    | 31                       |
| comorbidities                                  | 14427                    |
| comprehensive\_audiometry                      | 4431                     |
| covid\_treatment                               | 11554                    |
| cpet\_reading\_center                          | 2                        |
| demographics                                   | 14668                    |
| disability                                     | 14034                    |
| drc\_data                                      | 7868                     |
| echocardiogram\_with\_strain                   | 5692                     |
| electrocardiogram                              | 7389                     |
| electromyography                               | 75                       |
| end\_of\_participation                         | 1737                     |
| endopat\_testing                               | 1336                     |
| enrollment                                     | 15177                    |
| facility\_sleep\_questionnaire\_morning\_after | 131                      |
| facility\_sleep\_questionnaire\_night\_before  | 140                      |
| facility\_sleep\_study                         | 1696                     |
| fibroscan                                      | 3742                     |
| formal\_neuropsychological\_testing            | 1421                     |
| full\_ent\_examination                         | 373                      |
| gastric\_emptying\_study                       | 51                       |
| hepatitis\_tests                               | 4475                     |
| home\_polysomnography\_with\_ess\_and\_isi     | 4621                     |
| home\_sleep\_assessment                        | 1456                     |
| long\_covid\_treatment\_trial                  | 11554                    |
| lumbar\_puncture                               | 27                       |
| medication\_changes                            | 13464                    |
| medications                                    | 8573                     |
| mhp\_data                                      | 14828                    |
| mini                                           | 5518                     |
| mini\_prequestionnaire                         | 1720                     |
| neonatal\_delivery\_and\_outcome\_form         | 333                      |
| nerve\_conduction\_study                       | 104                      |
| neuropathy\_examination                        | 4387                     |
| new\_covid\_infection                          | 9994                     |
| nih\_toolbox                                   | 5366                     |
| oral\_glucose\_test                            | 5155                     |
| pasc\_symptoms                                 | 14535                    |
| pcl5                                           | 1418                     |
| pft\_reading\_center                           | 249                      |
| pg13r                                          | 148                      |
| plasma\_catecholamine\_testing                 | 307                      |
| pregnancy                                      | 10256                    |
| pregnancy\_followup                            | 9568                     |
| psg\_data                                      | 109                      |
| psg\_quality\_summary\_form                    | 134                      |
| pulmonary\_function\_tests                     | 6601                     |
| recent\_covid\_treatment                       | 4111                     |
| rehabilitation\_testing                        | 6782                     |
| renal\_ultrasound                              | 2755                     |
| research\_labs                                 | 14147                    |
| serum\_b12\_and\_methylmalonic\_acid           | 4006                     |
| six\_minute\_walk\_test                        | 7184                     |
| skin\_biopsy                                   | 57                       |
| sleep\_reading\_center                         | 1265                     |
| social\_determinants\_of\_health               | 14113                    |
| social\_determinants\_of\_health\_followup     | 13470                    |
| study\_termination                             | 57                       |
| tier\_12\_consent\_tracking                    | 13417                    |
| tier\_1\_consent\_tracking                     | 2537                     |
| tier\_1\_office\_visit                         | 14464                    |
| tier\_2\_consent\_tracking                     | 1068                     |
| tilt\_table\_test                              | 307                      |
| upsit\_smell\_test                             | 5264                     |
| vaccine\_status                                | 14490                    |
| vision\_testing                                | 6775                     |
| visit\_form                                    | 14968                    |
| wearable\_data                                 | 978                      |
| withdrawal                                     | 603                      |

### Information for Authors

#### Protocol Complexity

The RECOVER protocol underlying this dataset is complex. It employs a tiered approach to administer certain tests, evaluations, and data collection procedures to specific subsets of participants. The criteria for triggering these tests and other important information are described in the Adult Cohort Study [protocol](https://studies.recovercovid.org/pdf/RECOVER-i21-01226-Adult-Protocol-v9.0.pdf) and [design publication](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0286297); these should be considered when analyzing and interpreting the data.

#### Author Acknowledgements

RECOVER investigators request that publications based on the information in this dataset include the following acknowledgement:

_The authors of this publication wish to acknowledge that the data utilized in this study were obtained from RECOVER Adult Cohort_ _dataset version_ phs003463.v2.p&#x32;_, supported by_ 1OT2HL156812-0&#x31;_,_ OT2HL161847-0&#x31;_, and_ 1OT2HL161841-01 _awards from the NIH. This research was conducted independently of RECOVER, and the authors did not collaborate with RECOVER investigators, patient community or caregiver representatives during the course of this study._

## October 2024

### RECOVER Pediatric Observational Cohort Study

**Release file: phs003461.v1.p1**

This release contains data collected between March 17, 2022 and June 15, 2024 from the [Pediatric Observational Cohort Study](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0285635) (“RECOVER-Pediatrics”) of the NIH Researching COVID to Enhance Recovery ([RECOVER](https://recovercovid.org/)) Initiative. These data were obtained from 24,621 participants attending 62,921 study visits across 105 geographically dispersed enrolling sites. The dataset includes descriptions of 85,858 biospecimens collected during baseline and follow-up visits, plus wearable sensor metadata from approximately 400 participants in the RECOVER Digital Health Program. Taken together, this release consists of 8,604 data elements (variables) and approximately 13.6 million datapoints.

RECOVER-Pediatrics is an observational meta-cohort study of caregiver-child pairs (Birth through 17 years) and young adults (18 through 25 years). As described in the [study protocol](https://studies.recovercovid.org/pdf/RECOVER-Pediatric-Protocol-V4.0.pdf), the pediatric meta-cohort consists of four distinct cohorts: (1) A _de novo_ RECOVER prospective cohort including children and young adults ages birth through 25 years, with or without a known history of SARS-CoV-2 infection, and their respective caregivers; (2) An extant cohort from the [Adolescent Brain Cognitive Development (ABCD) study](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5934320/), the largest long-term US study of brain development in adolescence; (3) An _in utero_ exposure cohort, including children less than 3 years old born to individuals with and without a SARS-CoV-2 infection during pregnancy; and (4) An extant cohort from the NHLBI Study on [Long-terM OUtcomes after the Multisystem Inflammatory Syndrome In Children (MUSIC)](https://pubmed.ncbi.nlm.nih.gov/34418362/).

Importantly, this release includes data underlying the first publication of primary results from the RECOVER-Pediatrics study: Gross et al., Characterizing Long COVID in Children and Adolescents. [_JAMA_ 2024.12747](https://jamanetwork.com/journals/jama/fullarticle/2822770), August 21, 2024.

Detailed descriptions of the data elements used in RECOVER-Pediatrics will be found in three separate data dictionaries:

* REDCap Codebook for the Age 13-17 and 18-25 sub-studies (Including ABCD and MUSIC extant cohorts) - due to the number of pages, this document has been divided into two files:
  * [Part 1](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LwOmaDlbanAQ-7fhd89%2Fuploads%2FjfxVCjxOUydFrAm92WPF%2Fdata_dictionary_codebook_Pediatric_MainCohort_Part%201.pdf?alt=media\&token=85368f6e-652d-4944-9a9a-a63afa51c414)
  * [Part 2](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LwOmaDlbanAQ-7fhd89%2Fuploads%2FfZ95VXHqHHajl7in1YiH%2Fdata_dictionary_codebook_Pediatric_MainCohort_Part2.pdf?alt=media\&token=bbcd9949-6bb9-42d4-a282-3739268e91d1)
* [REDCap Codebook for the Caregiver sub-study](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LwOmaDlbanAQ-7fhd89%2Fuploads%2FJcD1C4vBeKcLcRJkrprS%2Fdata_dictionary_codebook_Pediatric_Caregiver.pdf?alt=media\&token=d950a516-338c-495d-ab8f-f8f855c9dc1b)
* [REDCap Codebook for the Congenital sub-study](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LwOmaDlbanAQ-7fhd89%2Fuploads%2FlQY6JvwAlV74St3P2L8f%2Fdata_dictionary_codebook_Pediatric_Congenital.pdf?alt=media\&token=884d5cfe-c92e-4e54-a4e1-0bd22bff098c)

These codebooks are organized as a list of all surveys/forms with their respective data elements. Also available is a [listing of all surveys and questions ](https://studies.recovercovid.org/pdf/RECOVER-pediatric-survey-questions.pdf)in RECOVER-Pediatrics.

Please note that this release does not contain any genomic or metabolomic data.

### **RELEASE NOTES FOR THE “PEDIATRIC-MAIN” STUDY (Includes Age 13-17 and 18-25 sub-studies, plus data from the ABCD and MUSIC extant cohorts)**

#### Data Quality

The Pediatric-Main study consists of approximately 9.9 million datapoints that were generated from surveys and laboratory tests, biospecimens, and metadata from diagnostic studies such as electrocardiograms, cardiac MRIs and other imaging modalities. Data quality management processes (automated queries and periodic reviews with study staff) have been employed throughout data collection, ingestion, deidentification and preparation for release to the public.

These processes have focused on evaluating data completeness and validity. Source data may contain legitimate “missing” variables due to branching logic or participants opting to not answer, and missing dates will propagate to the date-shifted variables as null entries. Invalid data may be due to manual entry errors (including incorrect formatting) or flawed data checks. Central to the data quality management effort has been a validation querying process that is run against all ingested data, and which triggers automated alerts to study sites if a datapoint is missing, out of range, inconsistent, or potentially erroneous.

Due to that volume of data and complexity of data types, it is difficult to assess the overall completeness and validity of RECOVER datasets. Based on various analytics and observations, we estimate the overall rate of data missingness to be less than 5%, and the rate of data validation issues to be less than 0.01%. Users are encouraged to contact [BioData Catalyst Support](mailto:biodatacatalyst@nhlbi.nih.gov) with any questions or concerns regarding this release of RECOVER data.

#### De-Identification Process

The following steps were taken to de-identify the RECOVER Pediatric-Main observational cohort data:

* Masking of IDs using a randomly assigned number between 1 and 14097 (number of unique PARTICIPANT\_IDs within the Pediatric cohort data)
* Truncation of ZIP codes to 3 digits
* Truncation of participant date of birth and deceased date to the year
* Date shifting of all other dates within the data within a range of 1 year
* Winsorization of date of birth and age at enrollment
* Masking of Pediatric Caregiver IDs on the Answerdata table according to corresponding masked IDs from the Pediatric Caregiver cohort

**Participant IDs**

Masking of PARTICIPANT\_IDs was performed according to the following protocol:

1. Participant IDs assigned in the previous data release (202309.1) are maintained.
2. Extract PARTICIPANT\_IDs from each table within the Pediatric cohort (currently Answerdata, Biospecimens, Concepts, Demographics, Visits, and Fitbit) and perform de-duplication to ensure uniqueness.
3. Randomly reorder PARTICIPANT\_IDs.
4. Create a sequential list of numbers from 1 to the total number of unique PARTICIPANT\_IDs (14097) and join that list to the list of randomly reordered unique PARTICIPANT\_IDs, creating the ID lookup table.
   * Note: From the previous release, participant IDs were assigned to 10549 individuals in a random fashion from integers between 1 – 10549. 16 individuals were dropped from that release, so there are 16 random integers that are unassigned in the lookup table for this release.
   * For this release, new IDs were assigned to participants covering 10550 - 14097.
5. Add protocol codes as the prefix for randomly assigned Participant IDs.
   * Adult (RA1), Pediatric (RP2), Autopsy (RD3), Congenital (RG4), Caregiver (RC5)
   * Where R=Recover, A and 1 = Adult, P and 2 = Pediatric, D and 3 = Autopsy, G and 4 = Congenital, C and 5 = Caregiver.
6. Merge the ID lookup table with each of the tables in the Pediatric cohort by PARTICIPANT\_ID to attach the masked IDs.
7. Drop the column of original PARTICIPANT\_IDs from the merged tables, leaving just the masked ID to uniquely identify participants.
8. VISIT\_ID on the Answerdata and Visits tables also contains PARTICIPANT\_ID. Drop that portion of the VISIT\_ID within the de-identified data, retaining the rest of the VISIT\_ID.
9. VISIT\_TYPE on the Visits table contains dates. Those dates have been removed in the de-identified data, with the rest of VISIT\_TYPE retained.

**ZIP Codes**

ZIP Codes were truncated to 3 digits according to the following protocol:

1. Keep a substring of ZIP codes from the first to the third characters.

**Dates of Birth and Ages**

Date of birth and deceased dates were truncated according to the following protocol:

1. Keep a substring of date of birth and deceased date from the first to the fourth characters, corresponding to the year portion of the date.
2. Top capping age at enrollment at 89
3. Bottom capping date of birth at 1933 or 1934 (based on enrollment date)

**Remaining Dates**

Date shifting of all other dates was performed according to the following protocol:

1. Select ENROLL\_DATE as the anchor date for each participant.
2. For participants who do not have an ENROLL\_DATE, we generate random anchor date within the year of 2023 (2023/01/01 to 2023/12/31).
3. Shift the anchor date to the first day of the year, i.e., 2023/01/01.
4. Calculate the difference in days from the original to the shifted anchor date.
5. Recalculate all other dates by adding that date difference to those dates.
6. Shift all date values within ANSWER\_TEXT\_VAL on the Answerdata table according to this protocol. Provide the concepts that correspond to date values within the Answerdata table in the file “RECOVERPediatric\_BDC\_202406\_concepts\_deID.csv”

#### **Summary**

The following table lists the variables that are de-identified, along with the de-identification protocol that was applied.

| Table        | Variable            | De-Identification Protocol                                                                    |
| ------------ | ------------------- | --------------------------------------------------------------------------------------------- |
| Demographics | PARTICIPANT\_ID     | ID masking with a random number between 1 and 14097                                           |
| Demographics | ENROLL\_DATE        | Date shifting                                                                                 |
| Demographics | ENROLL\_INDEX\_DATE | Date shifting                                                                                 |
| Demographics | DOB                 | Truncation to year                                                                            |
| Demographics | WITHDRAW\_DATE      | Date shifting                                                                                 |
| Demographics | DECEASED\_DATE      | Truncation to year                                                                            |
| Demographics | ENROLL\_ZIP\_CODE   | Truncation to 3 digits                                                                        |
| Answerdata   | PARTICIPANT\_ID     | ID masking with a random number between 1 and 14097                                           |
| Answerdata   | VISIT\_ID           | Removal of PARTICIPANT\_ID portion of VISIT\_ID                                               |
| Answerdata   | ANSWER\_TEXT\_VAL   | <p>Date shifting</p><p>ID masking for values that correspond with Pediatric Caregiver IDs</p> |
| Answerdata   | DATA\_ENTRY\_DATE   | Date shifting                                                                                 |
| Biospecimens | PARTICIPANT\_ID     | ID masking with a random number between 1 and 14097                                           |
| Biospecimens | COLLECTION\_DATE    | Date shifting                                                                                 |
| Visits       | VISIT\_ID           | Removal of PARTICIPANT\_ID portion of VISIT\_ID                                               |
| Visits       | VISIT\_TYPE         | Removal of dates                                                                              |
| Visits       | PARTICIPANT\_ID     | ID masking with a random number between 1 and 14097                                           |
| Visits       | VISIT\_START\_DATE  | Date shifting                                                                                 |
| Fitbit       | PARTICIPANT\_ID     | ID masking with a random number between 1 and 14097                                           |
| Fitbit       | SUMMARY\_DATE       | Date shifting                                                                                 |

#### Information for Authors

**Protocol Complexity**

The RECOVER protocol underlying this dataset is complex. It employs a tiered approach to administer certain tests, evaluations, and data collection procedures to specific subsets of participants. The criteria for triggering these tests and other important information are described in the Pediatric Observational Cohort Study [protocol](https://studies.recovercovid.org/pdf/RECOVER-Pediatric-Protocol-V4.0.pdf), [design publication](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0286297), and [participant surveys](https://studies.recovercovid.org/pdf/RECOVER-pediatric-survey-questions.pdf); these should be considered when analyzing and interpreting the data. &#x20;

**Author Acknowledgements**

RECOVER investigators request that publications based on the information in this dataset include the following acknowledgement:

_The authors of this publication wish to acknowledge that the data utilized in this study were obtained from RECOVER Pediatric Observational Cohort_ _dataset version phs003461.v1.p1, supported by_ 1OT2HL15681&#x32;_,_ OT2HL16184&#x37;_, and_ 1OT2HL161841 _awards from the NIH._ \[If applicable:] _This research was conducted independently of RECOVER, and the authors did not collaborate with RECOVER investigators, patient community or caregiver representatives during the course of this study._

### RELEASE NOTES FOR THE “PEDIATRIC-CAREGIVER” STUDY

#### Data Quality

The Pediatric-Caregiver study consists of approximately 2.8 million datapoints that were generated from surveys and biospecimen collections (Saliva and Tasso blood spot). Data quality management processes (automated queries and periodic reviews with study staff) have been employed throughout data collection, ingestion, deidentification and preparation for release to the public.

These processes have focused on evaluating data completeness and validity. Source data may contain legitimate “missing” variables due to branching logic or participants opting to not answer, and missing dates will propagate to the date-shifted variables as null entries. Invalid data may be due to manual entry errors (including incorrect formatting) or flawed data checks. Central to the data quality management effort has been a validation querying process that is run against all ingested data, and which triggers automated alerts to study sites if a datapoint is missing, out of range, inconsistent, or potentially erroneous.

Due to that volume of data and complexity of data types, it is difficult to assess the overall completeness and validity of RECOVER datasets. Based on various analytics and observations, we estimate the overall rate of data missingness to be less than 5%, and the rate of data validation issues to be less than 0.01%. Users are encouraged to contact [BioData Catalyst Support](mailto:biodatacatalyst@nhlbi.nih.gov) with any questions or concerns regarding this release of RECOVER data.

#### **De-Identification Process**

The following steps were taken to de-identify the RECOVER Pediatric Caregiver cohort data:

* Masking of IDs using a randomly assigned number between 1 and 8820 (number of unique PARTICIPANT\_IDs within the Pediatric Caregiver cohort data)
* Truncation of ZIP codes to 3 digits
* Truncation of participant date of birth and deceased date to the year
* Date shifting of all other dates within the data within a range of 1 year
* Winsorization of date of birth and age at enrollment

**Participant IDs**

Masking of PARTICIPANT\_IDs was performed according to the following protocol:

1. Participant IDs assigned in the previous data release (202309.1) are maintained.
2. Extract PARTICIPANT\_IDs from each table within the Pediatric Caregiver cohort (currently Answerdata, Biospecimens, Concepts, Demographics, and Visits) and perform de-duplication to ensure uniqueness.
3. Randomly reorder PARTICIPANT\_IDs.
4. Create a sequential list of numbers from 1 to the total number of unique PARTICIPANT\_IDs (8820) and join that list to the list of randomly reordered unique PARTICIPANT\_IDs, creating the ID lookup table.
   * Note: From the previous release, participant IDs were assigned to 6714 individuals in a random fashion from integers between 1 – 6714. 6 individuals were dropped from that release, so there are 6 random integers that are unassigned in the lookup table for this release.
   * For this release, new IDs were assigned to participants covering 6715 - 8820.
5. Add protocol codes as the prefix for randomly assigned Participant IDs.
   * Adult (RA1), Pediatric (RP2), Autopsy (RD3), Congenital (RG4), Caregiver (RC5)
   * Where R=Recover, A and 1 = Adult, P and 2 = Pediatric, D and 3 = Autopsy, G and 4 = Congenital, C and 5 = Caregiver.
6. Merge the ID lookup table with each of the tables in the Pediatric Caregiver cohort by PARTICIPANT\_ID to attach the masked IDs.
7. Drop the column of original PARTICIPANT\_IDs from the merged tables, leaving just the masked ID to uniquely identify participants.
8. VISIT\_ID on the Answerdata and Visits tables also contains PARTICIPANT\_ID. Drop that portion of the VISIT\_ID within the de-identified data, retaining the rest of the VISIT\_ID.

**ZIP Codes**

ZIP codes were truncated to 3 digits according to the following protocol:

1. Keep a substring of ZIP codes from the first to the third characters.

**Dates of Birth and Ages**

Participant date of birth and deceased date were truncated according to the following protocol:

1. Keep a substring of date of birth and deceased date from the first to the fourth characters, corresponding to the year portion of the date.
2. Top capping age at enrollment at 89
3. Bottom capping date of birth at 1933 or 1934 (based on enrollment date)

**Remaining Dates**

Date shifting of all other dates was performed according to the following protocol:

1. Select ENROLL\_DATE as the anchor date for each participant.
2. For participants who do not have an ENROLL\_DATE, generate random anchor date within the year of 2023 (2023/01/01 to 2023/12/31).
3. Shift the anchor date to the first day of the year, i.e., 2023/01/01.
4. Calculate the difference in days from the original to the shifted anchor date.
5. Recalculate all other dates by adding that date difference to those dates.
6. All date values within ANSWER\_TEXT\_VAL on the Answerdata table are shifted according to this protocol. We provide the concepts that correspond to date values within the Answerdata table in the file “RECOVERPediatricCaregiver\_BDC\_202406\_concepts\_deID.csv”

#### Summary

The following table lists the variables that are de-identified, along with the deidentification protocol that was applied.

| Table        | Variable            | De-Identification Protocol                         |
| ------------ | ------------------- | -------------------------------------------------- |
| Demographics | PARTICIPANT\_ID     | ID masking with a random number between 1 and 8820 |
| Demographics | ENROLL\_DATE        | Date shifting                                      |
| Demographics | ENROLL\_INDEX\_DATE | Date shifting                                      |
| Demographics | DOB                 | Truncation to year                                 |
| Demographics | WITHDRAW\_DATE      | Date shifting                                      |
| Demographics | DECEASED\_DATE      | Truncation to year                                 |
| Demographics | ENROLL\_ZIP\_CODE   | Truncation to 3 digits                             |
| Answerdata   | PARTICIPANT\_ID     | ID masking with a random number between 1 and 8820 |
| Answerdata   | VISIT\_ID           | Removal of PARTICIPANT\_ID portion of VISIT\_ID    |
| Answerdata   | ANSWER\_TEXT\_VAL   | Date shifting                                      |
| Answerdata   | DATA\_ENTRY\_DATE   | Date shifting                                      |
| Biospecimens | PARTICIPANT\_ID     | ID masking with a random number between 1 and 8820 |
| Biospecimens | COLLECTION\_DATE    | Date shifting                                      |
| Visits       | VISIT\_ID           | Removal of PARTICIPANT\_ID portion of VISIT\_ID    |
| Visits       | PARTICIPANT\_ID     | ID masking with a random number between 1 and 8820 |
| Visits       | VISIT\_START\_DATE  | Date shifting                                      |

#### Information for Authors

**Protocol Complexity**

The RECOVER protocol underlying this dataset is complex. It employs a tiered approach to administer certain tests, evaluations, and data collection procedures to specific subsets of participants. The criteria for triggering these tests and other important information are described in the Pediatric Observational Cohort Study [protocol](https://studies.recovercovid.org/pdf/RECOVER-Pediatric-Protocol-V4.0.pdf), [design publication](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0286297), and [participant surveys](https://studies.recovercovid.org/pdf/RECOVER-pediatric-survey-questions.pdf); these should be considered when analyzing and interpreting the data.&#x20;

**Author Acknowledgements**

RECOVER investigators request that publications based on the information in this dataset include the following acknowledgement:

_The authors of this publication wish to acknowledge that the data utilized in this study were obtained from RECOVER Pediatric Observational Cohort_ _dataset version phs003461.v1.p1, supported by_ 1OT2HL15681&#x32;_,_ OT2HL16184&#x37;_, and_ 1OT2HL161841 _awards from the NIH._ \[If applicable:] _This research was conducted independently of RECOVER, and the authors did not collaborate with RECOVER investigators, patient community or caregiver representatives during the course of this study._

### RELEASE NOTES FOR THE “PEDIATRIC-CONGENITAL” STUDY

#### Data Quality

The Pediatric-Congenital study consists of approximately 0.9 million datapoints that were generated from surveys and laboratory tests, biospecimens, and metadata from diagnostic studies such as electrocardiograms, cardiac MRIs and other imaging modalities. Data quality management processes (automated queries and periodic reviews with study staff) have been employed throughout data collection, ingestion, deidentification and preparation for release to the public.

These processes have focused on evaluating data completeness and validity. Source data may contain legitimate “missing” variables due to branching logic or participants opting to not answer, and missing dates will propagate to the date-shifted variables as null entries. Invalid data may be due to manual entry errors (including incorrect formatting) or flawed data checks. Central to the data quality management effort has been a validation querying process that is run against all ingested data, and which triggers automated alerts to study sites if a datapoint is missing, out of range, inconsistent, or potentially erroneous.

Due to that volume of data and complexity of data types, it is difficult to assess the overall completeness and validity of RECOVER datasets. Based on various analytics and observations, we estimate the overall rate of data missingness to be less than 5%, and the rate of data validation issues to be less than 0.01%. Users are encouraged to contact [BioData Catalyst Support](mailto:biodatacatalyst@nhlbi.nih.gov) with any questions or concerns regarding this release of RECOVER data.

#### De-Identification Process

The following steps were taken to de-identify the RECOVER Pediatric Congenital cohort data:

* Masking of IDs using a randomly assigned number between 1 and 1702 (number of unique PARTICIPANT\_IDs within the Pediatric cohort data)
* Truncation of ZIP codes to 3 digits
* Truncation of participant date of birth and deceased date to the year
* Date shifting of all other dates within the data within a range of 1 year
* Winsorization of date of birth and age at enrollment
* Masking of Adult IDs on the Answerdata table according to corresponding masked IDs from the Adult cohort

**Participant IDs**

We perform masking of PARTICIPANT\_IDs according to the following protocol:

1. Participant IDs assigned in the previous data release (202309.1) are maintained.
2. Extract PARTICIPANT\_IDs from each table within the Pediatric Congenital cohort (currently Answerdata, Biospecimens, Concepts, Demographics, and Visits) and perform de-duplication to ensure uniqueness.
3. Randomly reorder PARTICIPANT\_IDs.
4. Create a sequential list of numbers from 1 to the total number of unique PARTICIPANT\_IDs (1702) and join that list to the list of randomly reordered unique PARTICIPANT\_IDs, creating the ID lookup table.
   * Note: From the previous release, participant IDs were assigned to 995 individuals in a random fashion from integers between 1 – 995.
   * For this release, new IDs were assigned to participants covering 996 - 1702.
5. Add protocol codes as the prefix for randomly assigned Participant IDs.
   * Adult (RA1), Pediatric (RP2), Autopsy (RD3), Congenital (RG4), Caregiver (RC5)
   * Where R=Recover, A and 1 = Adult, P and 2 = Pediatric, D and 3 = Autopsy, G and 4 = Congenital, C and 5 = Caregiver.
6. Merge the ID lookup table with each of the tables in the Pediatric cohort by PARTICIPANT\_ID to attach the masked IDs.
7. Drop the column of original PARTICIPANT\_IDs from the merged tables, leaving just the masked ID to uniquely identify participants.
8. VISIT\_ID on the Answerdata and Visits tables also contains PARTICIPANT\_ID. Drop that portion of the VISIT\_ID within the de-identified data, retaining the rest of the VISIT\_ID.

**ZIP Codes**

Truncation of ZIP codes to 3 digits was performed according to the following protocol:

1. Keep a substring of ZIP codes from the first to the third characters.

**Dates of Birth and Ages**

We perform truncation of participant date of birth and deceased date according to the following protocol:

1. Keep a substring of date of birth and deceased date from the first to the fourth characters, corresponding to the year portion of the date.
2. Top capping age at enrollment at 89
3. Bottom capping date of birth at 1933 or 1934 (based on enrollment date)

**Remaining Dates**

We perform date shifting of all other dates according to the following protocol:

1. We select ENROLL\_DATE as the anchor date for each participant.
2. For participants who do not have an ENROLL\_DATE, we generate random anchor date within the year of 2023 (2023/01/01 to 2023/12/31).
3. We shift the anchor date to the first day of the year, i.e., 2023/01/01.
4. We calculate the difference in days from the original to the shifted anchor date.
5. We recalculate all other dates by adding that date difference to those dates.
6. All date values within ANSWER\_TEXT\_VAL on the Answerdata table are shifted according to this protocol. We provide the concepts that correspond to date values within the Answerdata table in the file “RECOVERPediatricCongential\_BDC\_202406\_concepts\_deID.csv”

#### Summary

The following table lists the variables that are de-identified, along with the de-identification protocol that was applied.

| Table        | Variable            | De-Identification Protocol                                                              |
| ------------ | ------------------- | --------------------------------------------------------------------------------------- |
| Demographics | PARTICIPANT\_ID     | ID masking with a random number between 1 and 1702                                      |
| Demographics | ENROLL\_DATE        | Date shifting                                                                           |
| Demographics | ENROLL\_INDEX\_DATE | Date shifting                                                                           |
| Demographics | DOB                 | Truncation to year                                                                      |
| Demographics | WITHDRAW\_DATE      | Date shifting                                                                           |
| Demographics | DECEASED\_DATE      | Truncation to year                                                                      |
| Demographics | ENROLL\_ZIP\_CODE   | Truncation to 3 digits                                                                  |
| Answerdata   | PARTICIPANT\_ID     | ID masking with a random number between 1 and 1702                                      |
| Answerdata   | VISIT\_ID           | Removal of PARTICIPANT\_ID portion of VISIT\_ID                                         |
| Answerdata   | ANSWER\_TEXT\_VAL   | <p>Date shifting</p><p> </p><p>ID masking for values that correspond with Adult IDs</p> |
| Answerdata   | DATA\_ENTRY\_DATE   | Date shifting                                                                           |
| Biospecimens | PARTICIPANT\_ID     | ID masking with a random number between 1 and 1702                                      |
| Biospecimens | COLLECTION\_DATE    | Date shifting                                                                           |
| Visits       | VISIT\_ID           | Removal of PARTICIPANT\_ID portion of VISIT\_ID                                         |
| Visits       | PARTICIPANT\_ID     | ID masking with a random number between 1 and 1702                                      |
| Visits       | VISIT\_START\_DATE  | Date shifting                                                                           |

#### Information for Authors

**Protocol Complexity**

The RECOVER protocol underlying this dataset is complex. It employs a tiered approach to administer certain tests, evaluations, and data collection procedures to specific subsets of participants. The criteria for triggering these tests and other important information are described in the Pediatric Observational Cohort Study [protocol](https://studies.recovercovid.org/pdf/RECOVER-Pediatric-Protocol-V4.0.pdf), [design publication](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0286297), and [participant surveys](https://studies.recovercovid.org/pdf/RECOVER-pediatric-survey-questions.pdf); these should be considered when analyzing and interpreting the data.&#x20;

**Author Acknowledgements**

RECOVER investigators request that publications based on the information in this dataset include the following acknowledgement:

_The authors of this publication wish to acknowledge that the data utilized in this study were obtained from RECOVER Pediatric Observational Cohort_ _dataset version phs003461.v1.p1, supported by_ 1OT2HL15681&#x32;_,_ OT2HL16184&#x37;_, and_ 1OT2HL161841 _awards from the NIH._ \[If applicable:] _This research was conducted independently of RECOVER, and the authors did not collaborate with RECOVER investigators, patient community or caregiver representatives during the course of this study._

## June 2024

### Adult Observational Cohort Study: Release Notes

**Release file: phs003463.v2.p2**

This release contains data collected from the [NIH RECOVER Adult Cohort Observational Study](https://pubmed.ncbi.nlm.nih.gov/37352211/) between October 29, 2021 and March 15, 2024. These data were obtained from 15,204 adult participants (including a sub-cohort of 2,192 pregnant women) attending 122,029 study visits across 79 geographically dispersed enrolling sites.  The dataset also includes a description of 822,310 biospecimens collected during baseline and follow-up visits, plus wearable sensor metadata from 2,602 participants in the Digital Health Program. Overall this release comprises approximately 35 million rows of data and a total of 5,278 data elements.  Please refer to the accompanying [REDCap Codebook](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LwOmaDlbanAQ-7fhd89%2Fuploads%2Fl5J7CXByFTAMDvGBiVqd%2FREDCap%20Codebook%20Adult%20Cohort%202024-06%20Release.pdf?alt=media\&token=2f131d0f-6c83-4a69-886f-35fc6dfe8ab5) for a Data Dictionary organized as a list of all surveys/forms and their respective data fields. Also, please note that this release does not contain any genomic or metabolomic data.

### Data De-identification Protocols

The following steps were undertaken to de-identify the dataset:

* Masking of IDs using a randomly assigned number between 1 and 15,204 (number of unique PARTICIPANT\_IDs within the Adult cohort data); NOTE: Participant IDs assigned to the previous data release (202309.1) were maintained in the current release.
* Truncation of ZIP codes to 3 digits.
* Truncation of participant date of birth and deceased date to the year.
* Date shifting of all other dates within the data within a range of 1 year.
* Winsorization of Adult Cohort age at enrollment and date of birth information.
* Removal of free text fields that did not have data entry validation in REDCap.

These steps are described in more detail below.

**Participant\_ID masking**

1. Extract PARTICIPANT\_IDs from each table within the Adult cohort (currently Answerdata, Biospecimens, Concepts, Demographics, Visits, and Fitbit) and perform de-duplication to ensure uniqueness.
2. Randomly reorder PARTICIPANT\_IDs.
3. Create a sequential list of numbers from 1 to the total number of unique PARTICIPANT\_IDs (15204) and join that list to the list of randomly reordered unique PARTICIPANT\_IDs, creating the ID lookup table.
   * Note: From the previous release, participant IDs were assigned to 14,662 individuals in a random and not contiguous fashion from integers between 1 – 14702, including an excess of 40 integers left unassigned at random. Of those 14,662 individuals, 7 have withdrawn from the study since the previous release and left their previously assigned integers vacant, for a final tally of 14,655 individuals with randomly assigned integers between 1 – 14702 continuing into the current release.
   * For the current release, 549 new participants were added to the study with randomly assigned integers between 14703 – 15251.
4. Add protocol codes as the prefix for randomly assigned Participant IDs.
   * Adult (RA1), Pediatric (RP2), Autopsy (RD3), Congenital (RG4), Caregiver (RC5)
   * Where R=Recover, A and 1 = Adult, P and 2 = Pediatric, D and 3 = Autopsy, G and 4 = Congenital, C and 5 = Caregiver.
5. Merge the ID lookup table with each of the tables in the Adult cohort by PARTICIPANT\_ID to attach the masked IDs.
6. Drop the column of original PARTICIPANT\_IDs from the merged tables, leaving just the masked ID to uniquely identify participants.
7. VISIT\_ID on the Answerdata and Visits tables also contains PARTICIPANT\_ID. Drop that portion of the VISIT\_ID within the de-identified data, retaining the rest of the VISIT\_ID.

**Truncation of ZIP Codes**

1. Retain a substring of ZIP codes from the first to the third numbers (removing the fourth and fifth numbers).

**Truncation of participant date of birth and deceased date**

1. Keep a substring of date of birth and deceased date from the first to the fourth characters, corresponding to the year portion of the date.
2. Top capping age at enrollment at 89.
3. Bottom capping date of birth at 1933 or 1934 (based on enrollment date).&#x20;

{% hint style="info" %}
**NOTE**: To maintain compliance with HIPAA Safe Harbor requirements, participant age at enrollment was top-capped at 89 years old, and participant date of birth was bottom capped at either 1933 or 1934, depending on year of enrollment (2022 or 2023). An additional column containing a flag for whether participants had an age over 89 was added to distinguish them from participants whose age is 89. Data from seven participants were affected by this de-identification protocol.
{% endhint %}

**Date shifting (All other dates)**

Date shifting of all other dates was performed as follows:

1. Select ENROLL\_DATE as the anchor date for each participant.
2. For participants who do not have an ENROLL\_DATE, generate a random anchor date within the year of 2023 (2023/01/01 to 2023/12/31).
3. Shift the anchor date to the first day of the year, i.e., 2023/01/01.
4. Calculate the difference in days from the original to the shifted anchor date.
5. Recalculate all other dates by adding that date difference to those dates.
6. Shift all date values within ANSWER\_TEXT\_VAL on the Answerdata table according to this protocol.

**The following table lists specific variables requiring de-identification, and the de-identification protocol that was applied.**

| Data Table   | Variable               | De-identification Protocol                          |
| ------------ | ---------------------- | --------------------------------------------------- |
| Demographics | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Demographics | ENROLL\_DATE           | Date shifting                                       |
| Demographics | ENROLL\_INDEX\_DATE    | Date shifting                                       |
| Demographics | CROSSOVER\_INDEX\_DATE | Date shifting                                       |
| Demographics | DOB                    | Truncation to year                                  |
| Demographics | WITHDRAW\_DATE         | Date shifting                                       |
| Demographics | DECEASED\_DATE         | Truncation to year                                  |
| Demographics | ENROLL\_ZIP\_CODE      | Truncation to 3 digits                              |
| Answerdata   | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Answerdata   | VISIT\_ID              | Removal of PARTICIPANT\_ID portion of VISIT\_ID     |
| Answerdata   | ANSWER\_TEXT\_VAL      | Date shifting                                       |
| Answerdata   | DATA\_ENTRY\_DATE      | Date shifting                                       |
| Biospecimens | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Biospecimens | COLLECTION\_DATE       | Date shifting                                       |
| Visits       | VISIT\_ID              | Removal of PARTICIPANT\_ID portion of VISIT\_ID     |
| Visits       | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Visits       | VISIT\_START\_DATE     | Date shifting                                       |
| Fitbit       | PARTICIPANT\_ID        | ID masking with a random number between 1 and 15251 |
| Fitbit       | SUMMARY\_DATE          | Date shifting                                       |

**The following table provides a brief description of the 6 BDC files in this release.**

| Filename                                                             | Rows                                               | Columns                                    | File Size (MB)                                | Participants                  |
| -------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------ | --------------------------------------------- | ----------------------------- |
| <p> </p><p>RECOVERAdult_BDC_202403_answerdata_deid.tsv</p><p> </p>   | <p> </p><p>24,043,845</p><p> </p>                  | <p> </p><p>14</p><p> </p>                  | <p> </p><p>5,887</p><p> </p>                  | <p> </p><p>15,176</p><p> </p> |
| <p> </p><p>RECOVERAdult_BDC_202403_biospecimens_deid.tsv</p><p> </p> | <p> </p><p>822,310</p><p> </p>                     | <p> </p><p>12</p><p> </p>                  | <p> </p><p>77</p><p> </p>                     | <p> </p><p>13,460</p><p> </p> |
| <p> </p><p>RECOVERAdult_BDC_202403_concepts_deid.tsv</p><p> </p>     | <p> </p><p>173,835</p><p> </p>                     | <p> </p><p>8</p><p> </p>                   | <p> </p><p>106</p><p> </p>                    | <p> </p><p>---</p><p> </p>    |
| <p> </p><p>RECOVERAdult_BDC_202403_demographics_deid.tsv</p><p> </p> | <p> </p><p>15,204</p><p> </p>                      | <p> </p><p>20</p><p> </p>                  | <p> </p><p>3</p><p> </p>                      | <p> </p><p>15,204</p><p> </p> |
| <p> </p><p>RECOVERAdult_BDC_202403_fitbit_deid.tsv</p><p> </p>       | <p> </p><p>9,889,039</p><p> </p>                   | <p> </p><p>6</p><p> </p>                   | <p> </p><p>1,030</p><p> </p>                  | <p> </p><p>2,602</p><p> </p>  |
| <p> </p><p>RECOVERAdult_BDC_202403_visits_deid.tsv</p><p> </p>       | <p> </p><p>122,029</p><p> </p>                     | <p> </p><p>7</p><p> </p>                   | <p> </p><p>8</p><p> </p>                      | <p> </p><p>15,185</p><p> </p> |
| <p> </p><p><strong>Total</strong></p><p> </p>                        | <p> </p><p><strong>35,066,262</strong></p><p> </p> | <p> </p><p><strong>67</strong></p><p> </p> | <p> </p><p><strong>7,112</strong></p><p> </p> | <p> </p><p> </p><p> </p>      |

**The following table provides a brief description of the biospecimens included in this release.**

| Collected Biospecimens                     | Stored Biospecimens                          |
| ------------------------------------------ | -------------------------------------------- |
| Stool                                      | Stool                                        |
| Urine                                      | Urine                                        |
| Nasal/NP swab                              | Nasal or NP Cells                            |
| Oragene 600 – Saliva                       | Saliva                                       |
| Serum Separator Tube (SST) – Whole Blood   | Serum                                        |
| Sodium Citrate – Whole Blood               | Plasma                                       |
| PAXgene RNA – Whole Blood                  | Whole Blood                                  |
| Cell Preservation Tube (CPT) – Whole Blood | Peripheral Blood Mononuclear Cells (PBMCs)   |
| EDTA – Whole Blood                         | <p>Plasma</p><p>White Blood Cells (WBCs)</p> |

**The following table lists all 85 REDCap forms in the dataset, and the corresponding number of variables/rows of data associated with each form.**

| FORM\_NAME                                     | Total Variables per Form |
| ---------------------------------------------- | ------------------------ |
| acth\_and\_cortisol\_test                      | 70,243                   |
| adult\_delivery\_and\_outcome\_form            | 5,749                    |
| adult\_echo\_data                              | 6,173                    |
| alcohol\_and\_tobacco                          | 162,890                  |
| alcohol\_and\_tobacco\_followup                | 381,796                  |
| assessment\_scores                             | 1,866,843                |
| audiometry\_survey                             | 1,188                    |
| Biospecimens                                   | 485,333                  |
| bmri\_import                                   | 39,678                   |
| brain\_mri\_quality\_confirmation              | 2,703                    |
| brain\_mri\_with\_gadolinium                   | 23,510                   |
| cardiac\_mri                                   | 789                      |
| cardiac\_mri\_reading\_center                  | 51                       |
| cardiopulmonary\_exercise\_testing             | 3,283                    |
| cardiovagal\_innervation\_testing              | 638                      |
| change\_in\_symptoms\_since\_infection         | 21,439                   |
| chest\_ct                                      | 47,387                   |
| chest\_ct\_reading\_center                     | 185                      |
| clinical\_labs                                 | 92,771                   |
| Colonoscopy                                    | 90                       |
| Comorbidities                                  | 1,923,579                |
| comprehensive\_audiometry                      | 51,936                   |
| covid\_treatment                               | 191,414                  |
| cpet\_reading\_center                          | 4                        |
| Demographics                                   | 115,510                  |
| Disability                                     | 97,810                   |
| drc\_data                                      | 9,909                    |
| echocardiogram\_with\_strain                   | 73,980                   |
| electrocardiogram                              | 91,215                   |
| electromyography                               | 112                      |
| end\_of\_participation                         | 5,862                    |
| endopat\_testing                               | 8,164                    |
| Enrollment                                     | 160,289                  |
| facility\_sleep\_questionnaire\_morning\_after | 416                      |
| facility\_sleep\_questionnaire\_night\_before  | 1,640                    |
| facility\_sleep\_study                         | 2,152                    |
| Fibroscan                                      | 17,927                   |
| formal\_neuropsychological\_testing            | 12,294                   |
| full\_ent\_examination                         | 1,253                    |
| gastric\_emptying\_study                       | 115                      |
| hepatitis\_tests                               | 37,936                   |
| home\_polysomnography\_with\_ess\_and\_isi     | 22,170                   |
| home\_sleep\_assessment                        | 32,266                   |
| hsat\_data                                     | 85,222                   |
| long\_covid\_treatment\_trial                  | 90,359                   |
| medication\_changes                            | 122,181                  |
| Medications                                    | 64,630                   |
| mhp\_data                                      | 60,104                   |
| Mini                                           | 83,729                   |
| mini\_prequestionnaire                         | 4,447                    |
| neonatal\_delivery\_and\_outcome\_form         | 3,754                    |
| nerve\_conduction\_study                       | 157                      |
| neuropathy\_examination                        | 130,245                  |
| new\_covid\_infection                          | 41,621                   |
| nih\_toolbox                                   | 59,473                   |
| oral\_glucose\_test                            | 36,264                   |
| pasc\_symptoms                                 | 7,714,508                |
| pcl5                                           | 21,548                   |
| pft\_reading\_center                           | 6,768                    |
| pg13r                                          | 1,084                    |
| plasma\_catecholamine\_testing                 | 630                      |
| Pregnancy                                      | 109,716                  |
| pregnancy\_followup                            | 86,875                   |
| psg\_data                                      | 6,474                    |
| psg\_quality\_summary\_form                    | 2,164                    |
| pulmonary\_function\_tests                     | 85,186                   |
| recent\_covid\_treatment                       | 60,207                   |
| rehabilitation\_testing                        | 82,645                   |
| renal\_ultrasound                              | 19,464                   |
| research\_labs                                 | 4,012,350                |
| serum\_b12\_and\_methylmalonic\_acid           | 31,639                   |
| six\_minute\_walk\_test                        | 101,931                  |
| skin\_biopsy                                   | 131                      |
| sleep\_reading\_center                         | 25,471                   |
| social\_determinants\_of\_health               | 801,331                  |
| social\_determinants\_of\_health\_followup     | 678,872                  |
| study\_termination                             | 96                       |
| tier\_12\_consent\_tracking                    | 113,913                  |
| tier\_1\_office\_visit                         | 1,719,894                |
| tilt\_table\_test                              | 636                      |
| upsit\_smell\_test                             | 184,618                  |
| vaccine\_status                                | 276,537                  |
| vision\_testing                                | 64,756                   |
| visit\_form                                    | 978,660                  |
| wearable\_data                                 | 1,910                    |
| Withdrawal                                     | 953                      |
| **Total Variables**                            | **24,043,845**           |

### Data Quality

A detailed list of data quality issues found in this dataset is summarized below.

| File                                          | Error Type                                                                                                    | N Rows |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------ |
| RECOVERAdult\_BDC\_202403\_demographics\_deID | 1. Missing enroll\_date                                                                                       | 39     |
| RECOVERAdult\_BDC\_202403\_demographics\_deID | 2. Missing DOB                                                                                                | 82     |
| RECOVERAdult\_BDC\_202403\_biospecimens\_deID | 3. Data entry error in collection\_date, reported as a future event                                           | 7      |
| RECOVERAdult\_BDC\_202403\_visits\_deID       | 4. Data entry error in visit\_start\_date, reported as a future event                                         | 17     |
| RECOVERAdult\_BDC\_202403\_fitbit\_deID       | 5. Data entry error in summary\_date, reported as a future event                                              | 6      |
| RECOVERAdult\_BDC\_202403\_answerdata\_deID   | 6. Data entry error in data\_entry\_date, reported as a future event                                          | 870    |
| RECOVERAdult\_BDC\_202403\_answerdata\_deID   | 7. Tab characters present in CONCEPT\_NAME variable, causing issues when reading file as tab-separated values | 53     |
| RECOVERAdult\_BDC\_202403\_concepts           | 8. Concept codes repeated across multiple entries                                                             | 4      |

### Information for Authors

The RECOVER Initiative is committed to sharing data with the broader research community in a manner that is both timely and transparent. Because the processing required to make the data useful is complex, the following information is offered to inform responsible use of this dataset:

**Protocol Complexity**

The RECOVER protocol underlying this dataset is complex. It employs a tiered approach to administer certain tests, evaluations, and data collection procedures to specific subsets of participants. The criteria for triggering these tests and other important information are described in the Adult Cohort Study [protocol](https://studies.recovercovid.org/pdf/RECOVER-i21-01226-Adult-Protocol-v9.0.pdf) and [design publication](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0286297); these should be considered when analyzing and interpreting the data.

**Author Acknowledgements**

RECOVER investigators request that publications based on the information in this dataset include the following acknowledgement:

_The authors of this publication wish to acknowledge that the data utilized in this study were obtained from RECOVER Adult Cohort_ _dataset version_ phs003463.v2.p&#x32;_, supported by_ 1OT2HL156812-0&#x31;_,_ OT2HL161847-0&#x31;_, and_ 1OT2HL161841-01 _awards from the NIH. This research was conducted independently of RECOVER, and the authors did not collaborate with RECOVER investigators, patient community or caregiver representatives during the course of this study._

## **April 2024**

### Adult Observational Cohort Study: Dataset Release Notes

**Release file: phs003463.v1.p1**

This release contains subsets of data collected from the [NIH RECOVER Adult Cohort Observational Study](https://pubmed.ncbi.nlm.nih.gov/37352211/) between October 29, 2021 and September 15, 2023. These data were obtained from 14,662 participants attending 92,355 study visits across 79 geographically dispersed enrolling sites.  The dataset also includes an inventory of 611,882 biospecimens collected at various timepoints, wearable sensor data from the digital health program for 195 participants, and a total of 3,175 data elements.  Please refer to the [RECOVER Data Dictionary/REDCap Codebook](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LwOmaDlbanAQ-7fhd89%2Fuploads%2FCAj3DIBHpa0ajhwzFekh%2FRECOVERAdultREDCapCodebook_092923Release.pdf?alt=media\&token=17243c5d-9656-4973-9638-f682cf264347) for this release for a list of all surveys/forms and their respective data fields.

### Data De-identification Protocols

The following steps were undertaken to de-identify the dataset:

* Masking of IDs using a randomly assigned number between 1 and 14702 (number of unique PARTICIPANT\_IDs within the Adult cohort data)
* Truncation of ZIP codes to 3 digits
* Truncation of participant date of birth and deceased date to the year
* Date shifting of all other dates within the data within a range of 1 year
* Winsorization of Adult Cohort age at enrollment and date of birth information
* Removal of free text fields that did not have data entry validation in REDCap&#x20;

These steps are discussed in more detail below.

**Participant\_ID masking**

1. Extract PARTICIPANT\_IDs from each table within the Adult cohort (currently Answerdata, Biospecimens, Concepts, Demographics, Visits, and Fitbit) and perform deduplication to ensure uniqueness.
2. Randomly reorder PARTICIPANT\_IDs.
3. Create a sequential list of numbers from 1 to the total number of unique PARTICIPANT\_IDs (14702) and join that list to the list of randomly reordered unique PARTICIPANT\_IDs, creating the ID lookup table.
4. Merge the ID lookup table with each of the tables in the Adult cohort by PARTICIPANT\_ID to attach the masked IDs.
5. Drop the column of original PARTICIPANT\_IDs from the merged tables, leaving just the masked ID to uniquely identify participants.
6. VISIT\_ID on the Answerdata and Visits tables also contains PARTICIPANT\_ID. Drop that portion of the VISIT\_ID within the de-identified data, retaining the rest of the VISIT\_ID.

**Truncation of ZIP Codes**

1. Retain a substring of ZIP codes from the first to the third numbers (removing the fourth and fifth numbers).

**Truncation of participant date of birth and deceased date**

1. Keep a substring of date of birth and deceased date from the first to the fourth characters, corresponding to the year portion of the date.

**Date shifting (All other dates)**

1. Select ENROLL\_DATE as the anchor date for each participant.
2. For participants who do not have an ENROLL\_DATE, generate random anchor date within the year of 2023 (2023/01/01 to 2023/12/31).
3. Shift the anchor date to the first day of the year, i.e., 2023/01/01.
4. Calculate the difference in days from the original to the shifted anchor date.
5. Recalculate all other dates by adding that date difference to those dates.
6. All date values within ANSWER\_TEXT\_VAL on the Answerdata table were shifted according to this protocol. The concepts that correspond to date values within the Answerdata table are provided in the file “RECOVERAdult\_i2b2\_concepts\_BDC\_dateshift.xlsx”.

**Winsorization of participant ages**

To maintain compliance with HIPAA Safe Harbor requirements, participant age at enrollment was top-capped at 89 years old, and participant date of birth was bottom capped at either 1933 or 1934, depending on year of enrollment (2022 or 2023). An additional column containing a flag for whether participants had an age over 89 was added to distinguish them from participants whose age is 89. Data from seven participants were affected by this de-identification protocol.

**The following table details the variables that were de-identified, and the de-identification protocol that was applied.**

| Data Table   | Variable               | De-Identification Protocol                          |
| ------------ | ---------------------- | --------------------------------------------------- |
| Demographics | PARTICIPANT\_ID        | ID masking with a random number between 1 and 14702 |
| Demographics | ENROLL\_DATE           | Date shifting                                       |
| Demographics | ENROLL\_INDEX\_DATE    | Date shifting                                       |
| Demographics | CROSSOVER\_INDEX\_DATE | Date shifting                                       |
| Demographics | DOB                    | Truncation to year; bottom capping at 1933 or 1934  |
| Demographics | AGE\_AT\_ENROLLMENT    | Top capping at 89                                   |
| Demographics | WITHDRAW\_DATE         | Date shifting                                       |
| Demographics | DECEASED\_DATE         | Truncation to year                                  |
| Demographics | ENROLL\_ZIP\_CODE      | Truncation to 3 digits                              |
| Answerdata   | PARTICIPANT\_ID        | ID masking with a random number between 1 and 14702 |
| Answerdata   | VISIT\_ID              | Removal of PARTICIPANT\_ID portion of VISIT\_ID     |
| Answerdata   | ANSWER\_TEXT\_VAL      | Date shifting                                       |
| Answerdata   | DATA\_ENTRY\_DATE      | Date shifting                                       |
| Biospecimens | PARTICIPANT\_ID        | ID masking with a random number between 1 and 14702 |
| Biospecimens | COLLECTION\_DATE       | Date shifting                                       |
| Visits       | VISIT\_ID              | Removal of PARTICIPANT\_ID portion of VISIT\_ID     |
| Visits       | PARTICIPANT\_ID        | ID masking with a random number between 1 and 14702 |
| Visits       | VISIT\_START\_DATE     | Date shifting                                       |
| Fitbit       | PARTICIPANT\_ID        | ID masking with a random number between 1 and 14702 |
| Fitbit       | SUMMARY\_DATE          | Date shifting                                       |

&#x20;**Included Data**

The forms in this release are inclusive of baseline (first) enrollment visits and all subsequent follow-up visits through September 15, 2023. Collectively they represent 8.9 million rows of data (54% of the REDCap data) and were selected as they have a limited number of outstanding data queries (outside of missingness). When combined with the wearable sensor data and biospecimen inventory data, the release includes 10.1 million rows of data.

| FORM\_NAME                                 | n         |
| ------------------------------------------ | --------- |
| alcohol\_and\_tobacco                      | 156,454   |
| alcohol\_and\_tobacco\_followup            | 251,039   |
| assessment\_scores                         | 1,281,009 |
| covid\_treatment                           | 183,355   |
| demographics                               | 110,778   |
| disability                                 | 93,956    |
| end\_of\_participation                     | 3,771     |
| enrollment                                 | 154,305   |
| long\_covid\_treatment\_trial              | 38,801    |
| new\_covid\_infection                      | 26,366    |
| pasc\_symptoms                             | 5,081,366 |
| pregnancy                                  | 103,109   |
| pregnancy\_followup                        | 54,437    |
| recent\_covid\_treatment                   | 41,019    |
| social\_determinants\_of\_health           | 769,434   |
| social\_determinants\_of\_health\_followup | 445,687   |
| study\_termination                         | 96        |
| tier\_12\_consent\_tracking                | 97,222    |
| visit\_form                                | 749       |
| withdrawal                                 | 961       |

### Important Information for Authors&#x20;

The RECOVER Initiative is committed to sharing data with the broader research community in a manner that is both timely and transparent. Because the processing required to make the data useful is complex, the following information is offered to inform responsible use of this dataset:

#### Data Completeness

This is a partial dataset that includes information on adult cohort participants for whom data were collected on or before September 15, 2023.  Additionally, some variables with a high degree of missingness or requiring further quality control have been removed. Future releases will restore these redactions.

#### Protocol Complexity

The RECOVER protocol underlying this dataset is complex. It employs a tiered approach to administer certain tests, evaluations, and data collection procedures to specific subsets of participants. The criteria for triggering these tests and other important information are described in the Adult Cohort Study [protocol](https://studies.recovercovid.org/pdf/RECOVER-i21-01226-Adult-Protocol-v9.0.pdf) and [design publication](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0286297); these should be considered when analyzing and interpreting the data.

#### Author Acknowledgements

RECOVER investigators request that publications based on the information in this dataset include the following acknowledgement:

_The authors of this publication wish to acknowledge that the data utilized in this study were obtained from RECOVER Adult Cohort_ _dataset version phs003463.v1.p1, supported by_ 1OT2HL156812-0&#x31;_,_ OT2HL161847-0&#x31;_, and_ 1OT2HL161841-01 _awards from the NIH. This research was conducted independently of RECOVER, and the authors did not collaborate with RECOVER investigators, patient community or caregiver representatives during the course of this study._

&#x20;

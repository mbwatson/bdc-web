---
description: >-
  Guidance on how to prepare a Readme describing data de-identification steps
  performed on datasets ahead of submission
title: "De-identification Readme"
---

# De-identification Readme

## Purpose

The purpose of this document is to provide guidance to data contributors on how to prepare a Readme describing data de-identification steps performed on the data sets ahead of submission in [BDC](https://biodatacatalyst.nhlbi.nih.gov/). Clear documentation describing the de-identification methods is required for submission to help BDC and future data re-use to understand the data elements and de-identification applied to the data sets being shared.&#x20;

## Readme on De-identification Requirements

Researchers are expected to describe the de-identification methods used on the data in sufficient detail for an external party to be able to understand and replicate. Documentation of the approach for all 18 De-identifying Elements is required.&#x20;

Section 3 is an example checklist used by BDC to perform checking on data de-identification to demonstrate that data has been reviewed and to note if the particular PHI/PII was found in the dataset and how it was resolved.&#x20;

Section 4 is an example Readme, adapted from the NHLBI [Collaborating Network of Networks for Evaluating COVID-19 and Therapeutic Strategies (CONNECTS) De-Identification Guidance](https://nhlbi-connects.org/common_data_elements).

## BDC De-identification QC

De-identification QC by BDC includes the data elements in the table below.

| Data Element                                                                             | Process for anonymization/de-identification                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Names of patients, relatives, employers or household members                             | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| All geographic subdivisions smaller than a state                                         | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| All elements of dates (except year) for dates that are directly related to an individual | <p>Dates were addressed as follows:</p><ul><li>Ages were reported as bins spanning 10 years: 40-49, 50-59, 60-69, 70-79, 80-89 and ≥90</li><li>Dates of events, such as treatment, visit, birth, and death, are given as year only</li></ul> |
| Telephone numbers                                                                        | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| Vehicle identifiers and serial numbers, including license plate numbers                  | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| Fax numbers                                                                              | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| Device identifiers and serial numbers                                                    | Data not included or data are masked using a method that renders it unreadable or unlinkable to original values                                                                                                                              |
| Email addresses                                                                          | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| Web Universal Resource Locators (URLs)                                                   | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| Social security numbers                                                                  | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| Internet Protocol (IP) addresses                                                         | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| Medical record numbers                                                                   | Data not included or data are masked using a method that renders it unreadable or unlinkable to original values                                                                                                                              |
| Biometric identifiers, including finger and voice prints                                 | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| Health plan beneficiary numbers                                                          | Data not included or data are masked using a method that renders it unreadable or unlinkable to original values                                                                                                                              |
| Full-face photographs and any comparable images                                          | Data not included or data are masked using a method that renders it unreadable                                                                                                                                                               |
| Account numbers                                                                          | Data not included or data are masked using a method that renders it unreadable or unlinkable to original values                                                                                                                              |
| Any other unique identifying number, characteristic, or code                             | Data not included or data are masked using a method that renders it unreadable or unlinkable to original values                                                                                                                              |
| Certificate/license numbers                                                              | Data not included or data are masked using a method that renders it unreadable or unlinkable to original values                                                                                                                              |

## Example README file

As studies begin to prepare to upload data to BDC, it is required that studies describe the de-identification approach applied to the study datasets. The study team is responsible for the de-identification of all data uploaded to BDC in accordance with [NIH Data Sharing Policy](https://osp.od.nih.gov/scientific-sharing/genomic-data-sharing/), as outlined in the [BDC Data Protection Guidance](https://biodatacatalyst.nhlbi.nih.gov/data-protection/) and [Data Generator Guidance](https://bdcatalyst.gitbook.io/biodata-catalyst-documentation/data-management/biodata-catalyst-data-generator-guidance).&#x20;

Below is an example de-identification readme file describing the de-identification of different data elements.&#x20;

### Date De-identification

The study should perform date shifting instead of using a reference date (e.g., days from randomization or consent) when de-identifying dates. Because the goal of the study is standardization across studies to the greatest extent possible, date shifting is preferred to reference dates to avoid any confusion in interpretation of Day 0 vs. Day 1 (and therefore all subsequent days) across studies. Additionally, not all studies include the same data collected in clinical trials (e.g., randomization date); use of date shifting instead of reference date will allow broad applicability and linkage to different types of studies in the future, including observational and non-randomized studies.&#x20;

Dates should be shifted by a consistent length of time for each record by a random integer from 0-364 days subtracted from the true date, thus preserving the interval between dates. For example, if a subject had three sequential appointments with dates of April 2, April 15, and April 26, when the dates are shifted, each appointment will remain in order sequentially with the same interval between appointments for November 16, November 29, and December 10. For dates where only a month and year is available, the day of the month should be imputed to the 15th for date shifting purposes only. After a date using the 15th of the month is created, the same date shifting method outlined above should be employed. The dummy day of month should then be returned to missing status and only the shifted month and year should be uploaded as the actual date. If only a year is available, no date shifting should occur, and day and month should be marked as missing.

Follow the above guidance as illustrated in the examples below:

| Date Elements Present (DD-MON-YEAR) | Date Shifting Approach                                  |
| ----------------------------------- | ------------------------------------------------------- |
| \*\*-MON-YEAR                       | Impute DD as 15, date shift, return dummy DD to missing |
| \*\*-\*\*\*-YEAR                    | Do not date shift, retain YEAR as is                    |
| DD-\*\*\*-YEAR                      | Remove DD, do not date shift, retain YEAR as is         |
| \*\*-MON-\*\*\*\*                   | Mark entire date as missing                             |
| DD-\*\*\*-\*\*\*\*                  | Mark entire date as missing                             |
| DD-MON-\*\*\*\*                     | Mark entire date as missing                             |

\* Indicates missing

### Use of Free Text Fields

Study personnel should review data to ensure no identifying data is included.&#x20;

### Individuals Aged 90 or Older

For individuals aged 90 or above, ages should be aggregated into a single age grouping (“90”).

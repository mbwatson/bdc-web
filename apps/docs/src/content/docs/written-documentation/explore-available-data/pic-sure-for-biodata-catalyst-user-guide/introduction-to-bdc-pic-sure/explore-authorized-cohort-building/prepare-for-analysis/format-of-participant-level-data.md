---
title: "Format of Participant-Level Data"
---

# Format of Participant-Level Data

There are three options of participant-level data format from _BDC-PIC-SURE_: Dataframe or CSV, Timeseries, and PFB.

## Dataframe or CSV Format

Participant-level data brought into an analysis platform in the Dataframe or CSV format will be returned as a single table. In this table, each row represents a participant, and each column represents a variable. The variables in the table are those added as filters to the query and included in the export via the "Add Variable" action.

### Example Table: Dataframe Format

| patient\_id | \example\_study\demographics\sex\\ | \example\_study\demographics\age\\ | \example\_study\exam1\asthma\\ |
| ----------- | ---------------------------------- | ---------------------------------- | ------------------------------ |
| 1001        | Male                               | 31                                 | Never had asthma               |
| 1003        | Male                               | 56                                 | Currently has asthma           |
| 1004        | Female                             | 83                                 |                                |
| 1005        | Female                             | 26                                 | Currently has asthma           |

* `patient_id` is a PIC-SURE-generated participant identifier.
* Each column is labeled with the variable's concept path. For many BDC studies, this is formatted as `\phs (study accession number)\pht (dataset accession number)\phv (variable accession number)\variable name\`. For more information, please refer to Data Organization in BDC-PIC-SURE.

{% hint style="info" %}
**A tip with Data "Missing-ness":**

In PIC-SURE output, an empty cell indicates that there is no data available for that variable and participant. This is demonstrated with participant 1004 above; there is an empty cell in the `asthma` column. This means that there is no information available for that participant for asthma status.

This is different than cells with `NA` values. If a cell contains `NA`, this was recorded by the study submitters. Depending on the context of the `NA` value, this could be useful information for analysis.
{% endhint %}

## Timeseries

Participant-level data brought into an analysis platform in the Timeseries format will be returned as a single table. This table has fixed columns, and each row describes a unique instance of the participant, variable, and value at a given time. Note that if no timestamp information is associated with the data you selected, you can still use this export format, but the timestamp column will be empty.

### Example Table: Timeseries Format

| PATIENT\_NUM | CONCEPT\_PATH                      | NVAL\_NUM | TVAL\_CHAR         | TIMESTAMP            |
| ------------ | ---------------------------------- | --------- | ------------------ | -------------------- |
| 1001         | \example\_study\demographics\sex\\ |           | Male               | 2025-04-29T04:20:40Z |
| 1001         | \example\_study\demographics\age\\ | 31        |                    | 2025-04-29T04:20:40Z |
| 1001         | \example\_study\diagnosis\asthma\\ |           | Unspecified asthma | 2025-04-29T04:20:40Z |
| 1004         | \example\_study\demographics\sex\\ |           | Female             | 2006-10-27T12:57:56Z |

* `PATIENT_NUM`: A unique participant identifier
* `CONCEPT_PATH`: The concept path of the variable. For more information about concept paths in _BDC-PIC-SURE,_ please refer to the Data Organization section.
* `NVAL_NUM`: If the concept path describes a numeric variable, the variable value will be shown here.
* `TVAL_CHAR`: If the concept path describes a categorical variable, the variable value will be shown here.
* `TIMESTAMP`: The timestamp associated with the data. Note that if the data does not contain timestamps, this column will be empty.

## Portable Format for Biomedical Data (PFB)

Participant-level data brought to an analysis platform using the PFB format will be handed off in a single file with two tables: the data and data dictionary tables.

The **data** will be labeled as `pic_sure_patients_[dataset ID]` and show the participant-level data from PIC-SURE. The columns of this table are the variables, which are labeled as the PIC-SURE concept paths.

The **data dictionary** will be labeled as "pic\_sure\_data\_dicitonary\_\[dataset ID]" and will contain information about the variables that have been exported. This includes information about each variable, such as the concept path, description, and display name. The data dictionary also includes DRS URIs, or links to the original data file, which can be used to access the files for further analysis in BDC analysis platforms.

### Example Table: Data Table of PFB

| patient\_id | \example\_study\demographics\sex\\ | \example\_study\demographics\age\\ | \example\_study\exam1\asthma\\ |
| ----------- | ---------------------------------- | ---------------------------------- | ------------------------------ |
| 1001        | Male                               | 31                                 | Never had asthma               |
| 1003        | Male                               | 56                                 | Currently has asthma           |
| 1004        | Female                             | 83                                 |                                |
| 1005        | Female                             | 26                                 | Currently has asthma           |

* `patient_id` is a PIC-SURE-generated participant identifier.
* Each column is labeled with the variable's concept path. For many BDC studies, this is formatted as `\phs (study accession number)\pht (dataset accession number)\phv (variable accession number)\variable name\`. For more information, please refer to Data Organization in BDC-PIC-SURE.

{% hint style="info" %}
**A tip with Data "Missing-ness":**

In PIC-SURE output, an empty cell indicates that there is no data available for that variable and participant. This is demonstrated with participant 1004 above; there is an empty cell in the `asthma` column. This means that there is no information available for that participant for asthma status.

This is different than cells with `NA` values. If a cell contains `NA`, this was recorded by the study submitters. Depending on the context of the `NA` value, this could be useful information for analysis.
{% endhint %}

### Example Table: Data Dictionary Table of PFB

| concept\_path                      | dataset        | description                                 | display\_name | DRS\_URI                      |
| ---------------------------------- | -------------- | ------------------------------------------- | ------------- | ----------------------------- |
| \example\_study\demographics\sex\\ | example\_study | Participant sex recorded by the study       | Sex           | drs://example.com/unqiueID123 |
| \example\_study\demographics\age\\ | example\_study | Participant age recorded by the study       | Age           | drs://example.com/uniqueID123 |
| \example\_study\exam1\asthma\\     | example\_study | Exam 1: What is your current asthma status? | Asthma status | drs://example.com/uniqueID456 |

* Each row of the data dictionary table corresponds to a column in the data table.
* DRS URIs link to the study files from which the variable originated.

---
title: "Data Dictionaries via PIC-SURE API"
---

# Data Dictionaries via PIC-SURE API

The PIC-SURE API can be used to extract the data dictionary. This can be done regardless of authorization to access data and can be done with one, multiple, or all studies.

## Descriptions of Fields in PIC-SURE Data Dictionary

Note that there are several types of studies available in PIC-SURE:

1. dbGaP format compliant: ingested by dbGaP in the dbGaP recommended format ([https://www.ncbi.nlm.nih.gov/gap/docs/submissionguide/](https://www.ncbi.nlm.nih.gov/gap/docs/submissionguide/))
2. dbGaP ingested, but not format-compliant
3. Not ingested by dbGaP: are not format-compliant and do not have a study accession (phs number)

### PIC-SURE Data Dictionary Fields

{% hint style="info" %}
There are some fields included that may not be relevant. Some fields are generated during the PIC-SURE data curation process that are duplicates of other fields listed, as well as others that are stored specifically for internal use; these have been identified below.
{% endhint %}

* **values**: An array of all unique values included for the variable.
* **studyId**: ID associated with a study. For dbGaP-assosciated studies this is in the format phsxxxxxx. Non-dbGaP studies can be in other formats. The field is consistent with the DBGAP ACCESSION NUMBER in BDC Powered by Gen3.
* **dtId**: ID associated with the table the variable is stored in within the study. For studies in dbGaP format, this is provided as “phtXXXXXXX”. Non-compliant studies can instead be names of the table or form, listed as "All Variables" if the variables were not grouped in a table or form.
* **varId**: ID associated with the variable. For studies in dbGaP format, this is provided as “phvXXXXXXXX”. Non-compliant studies instead have a short text ID provided that can be a duplicate of the columnmeta\_name field.
* **is\_categorical**: boolean True/False values that describe whether a variable is filtered in PIC-SURE as a set of discrete values (categorical).
* **is\_continuous**: boolean True/False values that describe whether a variable is filtered in PIC-SURE as a numerical range (continuous).
* **columnmeta\_is\_stigmatized** - boolean True/False value that determines whether a variable is shown in Open PIC-SURE. A value of True means that the variable is not shown in Open PIC-SURE. For further information about stigmatizing variables, please refer to this documentation: [https://github.com/hms-dbmi/biodata\_catalyst\_stigmatizing\_variables/tree/main](https://github.com/hms-dbmi/biodata_catalyst_stigmatizing_variables/tree/main)
* **columnmeta\_name**: A short text ID associated with a variable. These are often not human-readable as they are mostly derived from the column names in datasets. For non-compliant studies, this can be a duplicate of the varID field.
* **description**: A text field with a human-readable description of the variable. When not provided by the study submitters, this field will be a duplicate of the columnmeta\_name field.
* **HPDS\_PATH**: The concept path used to uniquely identify a variable when exported to users. For more information about concept paths and data organization, please refer to the [Data Organization in BDC-PIC-SURE page](https://pic-sure.gitbook.io/nhlbi-biodata-catalyst-powered-by-pic-sure/data-in-pic-sure/data-organization-in-bdc-pic-sure).
* **derived\_group\_id**: The table ID and version number, when applicable.
* **columnmeta\_var\_group\_description**: If provided by the study submitters, this field contains a long text description of variable groupings. Variables are not always grouped together in studies.
* **derived\_variable\_level\_data**: An array of additional information that is study- and variable-specific. An example would be units of measurement. This is only available for some of the studies.
* **data\_hierarchy**: A text field displaying a human-readable path that is used in the PIC-SURE user interface. This is only available for some of the studies.
* **columnmeta\_data\_type**: Text field containing "categorical" or "continuous", based on the is\_categorical and is\_continuous fields.
* **derived\_var\_id**: Variable ID with version number, when applicable.
* **derived\_study\_abv\_name**: Short text abbreviation used to refer to a study and shown in the PIC-SURE user interface.
* **derived\_study\_description**: Description of the study, consistent with the “Full Name” field i BDC Powered by Gen3.
* **columnmeta\_min**: Field generated internally for use in the PIC-SURE user interface elements for specific studies. Describes the minimum associated with continuous variables.
* **columneta\_max**: Fields generated internally for use in the PIC-SURE user interface elements for specific studies. Describes the maximum associated with continuous variables.
* **hashed\_var\_id**: Hashed variable ID for internal use.

**The following are fields that are duplicated data:**

* **columnmeta\_hpds\_path**: duplicate of HPDS\_PATH
* **columnmeta\_var\_id**: duplicate of varId
* **derived\_var\_description**: duplicate of description
* **derived\_group\_description**: duplicate of columnmeta\_var\_group\_description
* **columnmeta\_description**: duplicate of description
* **derived\_study\_id**: duplicate of studyId
* **columnmeta\_study\_id**: duplicate of studyId
* **is\_stigmatized**: duplicate of columnmeta\_is\_stigmatized
* **derived\_var\_name**: duplicate of columnmeta\_name
* **columnmeta\_var\_group\_id**: duplicate of dtId
* **columnmeta\_HPDS\_PATH**: duplicate of HPDS\_PATH
* **min,** **max**: duplicates of columnmeta\_min, columneta\_max

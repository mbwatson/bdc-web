---
title: "NHLBI DICOM Medical Image De-Identification Baseline Protocol"
---

# NHLBI DICOM Medical Image De-Identification Baseline Protocol

BDC-RFC-#: 28\
Title: DICOM Medical Image De-Identification Baseline Protocol\
Type: Process\
Contact Name and Email: Keyvan Farahani, [farahank@mail.nih.gov](mailto:farahank@mail.nih.gov)\
Submitting Teams: NHLBI, DMC\
Date Sent to Consortium: Oct. 11, 2023\
Status: Closed for comment\
URL Link to this Google Document: [https://docs.google.com/document/d/14-WfeMqgZz115DbBnFs-8AvcdRY1oIjCgi0K33pwMjE/edit?usp=sharing](https://docs.google.com/document/d/14-WfeMqgZz115DbBnFs-8AvcdRY1oIjCgi0K33pwMjE/edit?usp=sharing)\
License: This work is licensed under a CC-BY-4.0 license.

## Medical Image De-Identification: BDC Baseline Protocol

Contributors:

* Zixin Nie (BDC Data Management Core)
* Keyvan Farahani (NHLBI)
* David Clunie (PixelMed Publishing)

## Why image de-identification?

De-identification of protected health information (PHI) is often a necessary procedure to undertake in order to share potentially sensitive information, such as health data.  Many data repositories that allow human data to be deposited and shared require the data to be de-identified.  Medical images and their associated metadata (i.e., DICOM headers) often contain PHI, such as patient names, dates of birth, or medical record numbers. The de-identification of these images is essential to minimize privacy risk and comply with regulations and standards that require the protection of PHI. The overarching goal in medical image de-identification is to reduce the risk of identification as much as possible. &#x20;

De-identification facilitates the sharing of medical imaging data, enabling greater access by researchers and the public and allowing for secondary research to be conducted. Several standards exist for de-identification of medical images, including the confidentiality profile detailed in the DICOM Part 15 standard, HIPAA Safe Harbor and Expert Determination. The BioData Catalyst Data Management Core (BDC DMC) performed an evaluation of these standards and used them to create the protocol detailed in this document. This document describes the de-identification processes and technical considerations for de-identifying medical images as they are being added to BDC and made available to researchers using the BDC platform. The protocol, referred to as the “BDC Baseline Protocol for Image De-identification,” takes into account the data use cases for researchers accessing the BDC platform by defining a de-identification profile that strikes a balance between privacy protection and preserving utility.

The Baseline protocol only applies to the metadata in radiologic (DICOM) images (see table below).  It does not apply to image pixel information, other imaging formats, or other types of data that may be imported into BDC, such as clinical and omics data.  It reflects the understanding of the de-identification needs of BDC as of October 2023. Future RFCs are planned that will address masking of unique identifiers, the details of how imaging pixel data will be de-identified, the de-identification process workflow, and quality management.

### Major medical imaging modalities&#x20;

| Imaging Data Type                           | Conventional formats                                  |
| ------------------------------------------- | ----------------------------------------------------- |
| Radiologic (X-ray, PET/CT, MRI, ultrasound) | DICOM (Digital Imaging and Communication in Medicine) |
| Cardiac ECG                                 | XML                                                   |
| Digital Pathology                           | Proprietary TIFF and DICOM Pathology                  |

The focus of this RFC is on de-identification of DICOM images.

## The Baseline De-Identification Protocol

The de-identification protocol described in this section is intended to be a baseline for de-identification within BDC. The protocol is compliant with regulations such as the HIPAA Privacy Rule and the Common Rule, while retaining the maximal amount of research utility possible. It is designed based on the experiences from the HeartShare imaging pilot project. The protocol will evolve over time, with future iterations to address new issues as they arise, and customizations to address specific research use cases. These may involve Expert Determinations, which can both increase privacy protections and improve research utility.   This protocol is to be used for all medical imaging data to be submitted to the BDC.  The protocol may be implemented in an image de-identification tool at the submitter’s site, or in a central BDC-related data curation service.  Any deviation from this protocol must be discussed with and approved by the BDC/DMC. The baseline de-identification protocol can be found at this link: [DICOM\_deid\_part\_15\_classified\_09\_26\_2024\_Baseline.xlsx](https://docs.google.com/spreadsheets/d/1unIqzIks0XlH9ECwVOlRyTDoTHB7PHsn/edit?gid=1385559595#gid=1385559595).

Introduction to HIPAA Safe Harbor and DICOM Part 15

De-identification of DICOM data can be performed according to different standards. Two commonly accepted standards are HIPAA Safe Harbor and [Normative E Attribute Confidentiality Profiles defined in part 15 of the DICOM standard](https://dicom.nema.org/medical/dicom/current/output/chtml/part15/chapter_E.html#table_E.1-1) (referred to in the rest of this document as the DICOM Part 15 Standard).&#x20;

HIPAA Safe Harbor de-identification calls for the removal of 18 types of identifiers (detailed here: [https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html#standard](https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html#standard)). The standard legally applies to PHI handled by HIPAA Covered Entities, however as it has been in use for over 20 years it is generally accepted as a standard for de-identification for other types of data as well.

The DICOM Part 15 Standard was developed through a careful review of all DICOM attributes, identifying any that had the possibility of containing identifying information and creating a mitigation strategy. It is more extensive than HIPAA Safe Harbor, covering attributes that are not part of the 18 prescribed types of identifiers such as ethnicity and biological sex. Various mitigation strategies are presented to treat the attributes detailed as part of the standard, with the Basic DICOM Part 15 Confidentiality Profile being the most conservative, calling for suppression of most of the attributes.

### De-Identification of DICOM Header Data

In order to have de-identified data that still possesses analytic utility for BDC researchers, while also being a standardized implementation of de-identification that can be applied across most data to be ingested by BDC, an evaluation was performed to produce a set of de-identification rules that can be applied to DICOM header attributes. The evaluation leveraged the de-identification profiles detailed in the DICOM Part 15 standard by evaluating its contents and aligning with the minimum requirements to comply with HIPAA Safe Harbor. The resulting de-identification strategy should be sufficient to construct a de-identification profile that can be applied across all DICOM headers.

The steps for performing this evaluation were as follows:

1. Attributes from each profile were classified into the following categories: Direct Identifier (DI), Quasi-Identifier (QI), and Non-Identifier (NI), according to the classification framework detailed in the following diagram:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf93hHSvMKswfN2oKbZeSj3JUlkuN-nMZfXjw0WybtDQy15JiqHBdiHWXqCz6pzZyyM6zUK8sMP6HqrRYaxxPYs6bFJsbb4MHfzrp15FxqyFm_bsnWy_pisN8BuXDwcCj519-v5nQ?key=DdrgxU9xIo2TJ9QkYkRNTmJL)

2. After classification, DIs and QIs were then aligned with the 18 types of identifiers specified for removal within the HIPAA Safe Harbor provision.&#x20;
3. Each of the attributes that aligns with one of the HIPAA Safe Harbor identifiers was then assigned a mitigation technique to remove the identifying information that could appear in the field.

Of the attributes within the DICOM Part 15 standard that must be removed for compliance with HIPAA Safe Harbor, there are:

* 4 name attributes
* 4 patient address attributes
* 122 date attributes
* 5 telephone number attributes
* 91 other unique ID attributes

Names, addresses, and telephone numbers should be suppressed from the data. Dates can be kept accurate to the year (a future BDC medical image de-identification RFC will address improving this approach for longitudinally acquired imaging studies). The other unique IDs can either be suppressed or they can be masked in a way so that their original values cannot be re-obtained. The specifics of how the other unique IDs will be masked will come in a separate RFC that describes the masking procedures. Additionally, there are 26 attributes that contain various forms of free text, such as comments, notes, labels, and text strings. Identifying information may be written in these attributes. As such, they should be suppressed to prevent the leakage of identifying information.

The other attributes detailed in the DICOM Part 15 standard do not necessarily require mitigation for compliance with HIPAA Safe Harbor. However, if they do not have analytic usage, it is recommended to mitigate them according to the specifications detailed in the DICOM Part 15 standard in order to decrease the risk of re-identification represented by indirectly identifying fields not mentioned in HIPAA Safe Harbor.

### De-Identification of Image Pixel Data

Image pixel data, often encountered in ultrasound (echo) imaging, can contain PHI, such as patient names, dates of birth, and the hospital or imaging center names. This information can be shown either in labels on images, which usually have pre-specified areas, or in the form of burned-in text, which can appear anywhere on the image. Any identifying information contained within pixel data should be removed before it is made available to researchers.&#x20;

Methods for removal of image pixel data include the following:

* Masking through opaque boxes over parts of the image
* AI assisted removal of identifying information, deploying optical character recognition (OCR)
* Deletion of images from the dataset that contain identifying information

Image pixel de-identification will be performed as a service by tools provided by existing third party tool provided by DMC contractors. After de-identification, images will still require review to ensure that the process was able to capture and remove all identifying information on the images. This is a necessary quality control to ensure that there is no leakage of identifying information.

### De-Identification of Filenames and File Paths

Metadata associated with images, such as filenames and file paths, can often include unique IDs and dates of medical events. This information is important to associate imaging data correctly with other types of data for linkage, processing, and analysis, however it can also present a risk of leakage of identifying information on de-identified data files. To prevent that from happening, the following rules should be followed:

1. Folder names should only include the study name and associated visit number, and no further information
   1. e.g., for the first visit of the MESA study, the folder name should be called MESA\_V1
2. Image filenames are to be set to the following format: STUDYNAME\_TYPE\_VISITNN\_ YYYYMMDD\_SEQ
   1. VISITNN: ”VISIT”+VisitNumber (specifically include the label “VISIT” to inform investigator what the number is referring
   2. YYYYMMDD: AcquisitionDate set to set to 01-01-YYYY, where YYYY is the year of acquisition
   3. SEQ: sequence number to ensure filename is unique
   4. e.g., MESA\_ECG\_VISIT05\_20220101\_999.xml

## Risk Mitigation

The risks presented by using the de-identification methods detailed in this RFC are as follows:

1. HIPAA Safe Harbor, while being an accepted standard for de-identification, does not cover all potential identifiers (leaving out potentially attributes such as race, employment, diagnoses, procedures, and treatments). Data de-identified under HIPAA Safe Harbor holds a residual risk of re-identification.
2. Automated imaging de-identification solutions are not 100% accurate, leaving the potential for small amounts of identifying information to be retained.

Data made available through BDC is provided for research purposes to investigators who should not have ulterior motives to perform re-identification. HIPAA Safe Harbor represents a standard that has been in use for over 20 years, so the risks presented from using that standard are well understood and acceptable by BDC. The risk presented by leakage of identifying information from imaging data can be mitigated through human review of de-identified images to ensure that all identifying information has been removed.

In the event that PHI is discovered in de-identified imaging data in BDC, such data shall be pulled off-line, checked for removal of offending PHI, before being posted again on BDC.  In such cases, the data submitter shall be informed of the incident.

**Local vs. Cloud-based Image De-Identification**

Depending on the capabilities of the de-identification tool and the legal and logistic requirements for access to original identifiable images, de-identification may be done locally on the data-generating site or through a central cloud-based service.  Although the latter is often more efficient (semi-automated and scalable), the transfer of identifiable (PHI-containing) images to a central cloud may require agreements between the data provider (submitter) and the de-identification service provider, stipulated through execution of Data Transfer Agreement (DTA). Details as to the image de-identification process that will be used will be provided in a future RFC.

\
<br>


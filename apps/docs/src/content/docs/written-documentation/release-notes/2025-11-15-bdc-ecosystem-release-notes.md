---
description: This is the 23rd update to the BDC ecosystem.
title: "2025-11-15 BDC Ecosystem Release Notes"
---

# 2025-11-15 BDC Ecosystem Release Notes

## Introduction

The 2025-11-15 release introduces several [new features](2025-11-15-bdc-ecosystem-release-notes.md#significant-new-features), including expanded data access, new interoperability tools, enhanced compute capabilities, and new bioinformatics workflows.

The 2025-11-15 data releases include the addition of 109 new datasets. See the [Data Releases](2025-11-15-bdc-ecosystem-release-notes.md#data-releases) section for more information.

## Significant New Features&#x20;

The following new features this were released this quarter to improve the researcher experience.

### _BDC Powered by Seven Bridges_ (_BDC-Seven Bridges_)

* SlicerJupyter, a new Data Studio environment for python-based interaction with 3D Slicer. The environment comes with several example notebooks explaining how to use the functionality for working with volumetric imaging data (for example, MRI, CT).&#x20;
* Expanded Data Access: We enabled full Sequence Read Archive (SRA) access via RAS Passport. This integration unlocks petabytes of controlled SRA data for researchers with valid Data Access Requests (DARs), improving data interoperability and access.
* New Interoperability Tools: We published the PFB Unwrapper app, a new CWL tool that accepts .avro PFB files from Gen3, PIC-SURE, or AnVIL and creates a DRS manifest for streamlined import into BDC-Seven Bridges projects. This is a significant step in developing the PFB Importer v2 functionality to seamlessly execute the BDC Handoff Standard.
* Enhanced Compute Capabilities: We deployed AWS 6th and 7th generation compute instance types, along with G5 and G6 GPU-enabled instance types for use in Data Studio sessions. These new instances offer researchers faster networking, better processing power, and improved hardware acceleration for machine learning applications.
* New bioinformatics workflows: CellTypist, CellPhoneDB Toolkit, Nextflow-scRNA-Seq, and Nextflow-RNAvar.

### _BDC Powered by Terra_ (_BDC-Terra_)&#x20;

* New workspaces now use a more optimized format for data tables to increase performance and scalability.&#x20;
* Locking a workspace now makes the underlying bucket read-only while the workspace is locked.&#x20;
* More information about new features can be found in the [Terra roadmap](https://support.terra.bio/hc/en-us/sections/30968105851931-Terra-Roadmap).

## Data Releases

The table below highlights which studies were included in the data releases in the months of August, September, and October 2025.

| Study Name                                        | phs I.D. #            |
| ------------------------------------------------- | --------------------- |
| BioLINCC-BL\_ARIC\_HMB-NPU-MDS                    | phs003738.v1.p1.c1    |
| BioLINCC-BL\_BEST\_COPD\_GRU                      | phs004022.v1.p1.c1    |
| BioLINCC-BL\_ROC\_PRIMED\_GRU                     | phs003825.v2.p2.c1    |
| heartfailure-PGRN\_Afib\_HMB                      | phs000439.v1.p1.c1    |
| imaging-img\_ARIC\_HMB-IRB-NPU-MDS                | phs003946.v1.p3.c1    |
| Individual\_Study-PATH\_HHT\_DS-HHT-IRB-PUB-COL   | phs003948.v1.p1.c1    |
| BioLINCC-BL\_LRC\_PS\_GRU                         | phs003995.v1.p1.c1    |
| BioLINCC-BL\_SHHS\_NSRR\_HMB-MDS                  | phs003637.v1.p1.c1    |
| COVID19-ACTIV4A\_GRU                              | phs002694.v4.p1.c1    |
| RECOVER-RC\_Autopsy\_GRU                          | phs003768.v2.p2.c1    |
| parent-FHS\_HMB-IRB-MDS\_                         | phs000007.v34.p15.c1  |
| parent-FHS\_HMB-IRB-NPU-MDS\_                     | phs000007.v34.p15.c2  |
| heartfailure-STAMPEED\_MIGen\_GRU                 | phs000294.v1.p1.c1    |
| parent-PCGC\_HMB\_                                | phs001194.v4.p3.c1    |
| parent-PCGC\_DS-CHD\_                             | phs001194.v4.p3.c2    |
| topmed-PUSH\_SCD\_DS-SCD-IRB-PUB-COL              | phs001682.v3.p1.c1    |
| BioLINCC-BL\_ROC\_CPR\_GRU                        | phs003818.v1.p1.c1    |
| BioLINCC-BL\_PRHHP\_GRU                           | phs003930.v1.p1.c1    |
| imaging-img\_HCSC-SOL\_HMB-NPU                    | phs003963.v1.p1.c1    |
| imaging-img\_HCSC-SOL\_HMB                        | phs003963.v1.p1.c2    |
| BioLINCC-BL\_IPPB\_GRU                            | phs004010.v1.p1.c1    |
| Individual\_Study-INVESTED\_GRU                   | phs004011.v1.p1.c1    |
| BioLINCC-BL\_LHS\_GRU                             | phs004013.v1.p1.c1    |
| DIR-Stressors\_and\_Health\_Study\_HMB-PUB-COL    | phs004019.v1.p1.c1    |
| BioLINCC-BL\_PIOPED\_GRU                          | phs004020.v1.p1.c1    |
| BioLINCC-BL\_ALLHAT\_GRU                          | phs004021.v1.p1.c1    |
| BioLINCC-BL\_CONCERT\_HF\_GRU                     | phs004055.v1.p1.c1    |
| heartfailure-BroadEOMI\_DS-CVD                    | phs000279.v2.p1.c1    |
| parent-ARIC\_HMB-IRB\_                            | phs000280.v8.p2.c1    |
| parent-ARIC\_DS-CVD-IRB\_                         | phs000280.v8.p2.c2    |
| parent-CARDIA\_HMB-IRB\_                          | phs000285.v3.p2.c1    |
| parent-CARDIA\_HMB-IRB-NPU\_                      | phs000285.v3.p2.c2    |
| parent-JHS\_HMB-IRB-NPU\_                         | phs000286.v7.p2.c1    |
| parent-JHS\_DS-FDO-IRB-NPU\_                      | phs000286.v7.p2.c2    |
| parent-JHS\_HMB-IRB\_                             | phs000286.v7.p2.c3    |
| parent-JHS\_DS-FDO-IRB\_                          | phs000286.v7.p2.c4    |
| heartfailure-LungExome\_PAH\_GRU                  | phs000290.v1.p1.c1    |
| heartfailure-LHS-COPD\_GRU                        | phs000291.v2.p1.c1    |
| heartfailure-Fam\_PAH\_GRU                        | phs000354.v1.p1.c1    |
| heartfailure-Fam\_FAF\_HMB                        | phs000362.v1.p1.c1    |
| heartfailure-GENOA\_GRU                           | phs000379.v1.p1.c1    |
| heartfailure-PGRN\_ACE\_HMB                       | phs000438.v1.p1.c1    |
| heartfailure-DrugRes\_HTN\_GRU                    | phs000442.v1.p1.c1    |
| heartfailure-CAP\_GRU                             | phs000481.v3.p2.c1    |
| heartfailure-BEN\_HMB                             | phs000507.v2.p2.c1    |
| heartfailure-Fam\_IB\_GRU                         | phs000518.v1.p1.c1    |
| heartfailure-Fam\_DC\_DS-FDC                      | phs000581.v1.p1.c1    |
| heartfailure-KCNE1\_TDP\_HMB                      | phs000617.v1.p1.c1    |
| heartfailure-Hypox\_Ethiopia\_GRU                 | phs000647.v1.p1.c1    |
| heartfailure-Fam\_CHD\_HMB                        | phs000758.v1.p1.c1    |
| heartfailure-MiGen\_EXS\_Ottawa\_GRU              | phs000806.v1.p1.c1    |
| heartfailure-PGRN\_DILQTS\_GRU                    | phs000808.v1.p1.c1    |
| parent-HCHS-SOL\_HMB-NPU\_                        | phs000810.v2.p2.c1    |
| parent-HCHS-SOL\_HMB\_                            | phs000810.v2.p2.c2    |
| heartfailure-MiGen\_EXS\_ItalAmer\_GRU            | phs000814.v1.p1.c1    |
| heartfailure-Exome\_Thrombo-Leuk\_GRU             | phs000873.v1.p1.c1    |
| heartfailure-Twins\_Asthma\_GRU                   | phs000886.v1.p1.c1    |
| heartfailure-MiGen\_EXS\_REGICOR\_DS-CVD          | phs000902.v1.p1.c1    |
| heartfailure-MiGEN\_EXS\_PROMIS\_GRU              | phs000917.v1.p1.c1    |
| heartfailure-BroadEOMI\_exome\_GRU                | phs000936.v1.p1.c1    |
| heartfailure-BroadEOMI\_exome\_DS-MI              | phs000936.v1.p1.c2    |
| heartfailure-BroadEOMI\_exome\_DS-CVD             | phs000936.v1.p1.c3    |
| heartfailure-PGRN\_Cardio-Stat\_HMB               | phs000963.v1.p1.c1    |
| heartfailure-MiGEN\_EX\_UL\_DS-CVD                | phs000990.v1.p1.c1    |
| heartfailure-Endothelial\_PAH\_GRU                | phs000998.v2.p1.c1    |
| heartfailure-MiGEN\_EXS\_MDC\_HMB-MDS             | phs001101.v1.p1.c1    |
| heartfailure-Globin\_iPS\_GRU                     | phs001212.v1.p1.c1    |
| heartfailure-exRNA\_healthy\_HMB                  | phs001258.v2.p1.c1    |
| topmed-CHIRAH\_DS-ASTHMA-IRB-COL                  | phs001605.v3.p1.c2    |
| topmed-CARDIA\_HMB-IRB                            | phs001612.v3.p3.c1    |
| topmed-CARDIA\_HMB-IRB-NPU                        | phs001612.v3.p3.c2    |
| topmed-GCPD-A\_DS-ASTHMA-GSO                      | phs001661.v4.p1.c1    |
| topmed-LTRC\_HMB-MDS                              | phs001662.v3.p1.c2    |
| topmed-sumstats\_GRU                              | phs001974.v8.p1.c1    |
| heartfailure-REGARDS\_GWAS\_HMB-IRB               | phs002719.v1.p1.c1    |
| COVID19-C4R\_CARDIA\_HMB-IRB                      | phs003045.v2.p2.c1    |
| COVID19-C4R\_CARDIA\_HMB-IRB-NPU                  | phs003045.v2.p2.c2    |
| imaging-img\_ACCORD\_GRU                          | phs003562.v1.p1.c1    |
| imaging-img\_SPRINT\_GRU                          | phs003566.v1.p1.c1    |
| BioLINCC-BL\_SHHS\_NSRR\_HMB-MDS                  | phs003637.v2.p1.c1    |
| imaging-img\_MESA\_ECG\_HMB                       | phs003703.v1.p1.c1    |
| imaging-img\_MESA\_ECG\_HMB-NPU                   | phs003703.v1.p1.c2    |
| BioLINCC-BL\_HPP\_GRU                             | phs003907.v1.p1.c1    |
| Individual\_Study-PRIME\_AIR\_HMB-MDS             | phs003926.v1.p1.c1    |
| Individual\_Study-PETAL\_ROSE\_ARDS\_RNASeq\_HMB  | phs003929.v1.p1.c1    |
| BioLINCC-BL\_LOTT\_GRU                            | phs003933.v1.p1.c1    |
| BioLINCC-BL\_WRAP\_IPF\_GRU                       | phs003968.v1.p1.c1    |
| imaging-img\_dMRI\_VGC\_GRU                       | phs004002.v1.p1.c1    |
| imaging-img\_COPDGene\_HMB                        | phs004023.v1.p1.c1    |
| imaging-img\_COPDGene\_DS-CS                      | phs004023.v1.p1.c2    |
| BioLINCC-BL\_HIFI\_GRU                            | phs004032.v1.p1.c1    |
| Individual\_Study-VDKA\_DS-ASTHMA                 | phs004051.v1.p1.c1    |
| Individual\_Study-STAR\_DS-ASTHMA                 | phs004052.v1.p1.c1    |
| BioLINCC-BL\_EPIC\_GRU                            | phs004067.v1.p1.c1    |
| BioLINCC-BL\_ACE\_IPF\_GRU                        | phs004070.v1.p1.c1    |
| BioLINCC-BL\_Panther\_IPF\_GRU                    | phs004071.v1.p1.c1    |
| BioLINCC-BL\_NETT\_GRU                            | phs004077.v1.p1.c1    |
| BioLINCC-BL\_PETAL\_CLOVERS\_HMB-MDS              | phs004080.v1.p1.c1    |
| BioLINCC-BL\_STEP\_IPF\_GRU                       | phs004085.v1.p1.c1    |
| BioLINCC-BL\_PROP\_GRU                            | phs004117.v1.p1.c1    |
| BioLINCC-BL\_FIRE\_CORAL\_HMB-MDS                 | phs004130.v1.p1.c1    |
| BioLINCC-BL\_ARDSNet\_FACTT\_HMB-MDS              | phs004165.v1.p1.c1    |
| BioLINCC-BL\_ARDSNet\_EDEN\_HMB-MDS               | phs004168.v1.p1.c1    |
| BioLINCC-BL\_HFN\_LIFE\_GRU                       | phs004171.v1.p1.c1    |
| BioLINCC-BL\_BHS\_HMB-MDS                         | phs004173.v1.p1.c1    |
| BioLINCC-BL\_WHI\_LILAC\_GRU                      | phs004174.v1.p1.c1    |

### Upcoming Data Releases

The table below highlights studies that are planned for release in November and December.

| Study Name                    | phs I.D. #        |
| ----------------------------- | ----------------- |
| CONNECTS\_ACTIV4A\_v4\_r3     | phs002694.v4.p1   |
| dbGaP\_MVP                    | phs001672.v13.p1  |
| dbgap\_CCF\_AFIB              | phs000820.v2.p1   |
| dbGaP\_FHS\_parent            | phs000007.v35.p16 |
| TOPMed\_Freeze10\_LTRC        | phs001662.v4.p2   |
| Imaging-COPDGene-r2           | phs004023.v1.p1   |
| Imaging\_MESA\_ECG-r3         | phs003703.v1.p1   |
| Imaging\_SPRINT-r3            | phs003566.v1.p1   |
| Imaging\_ACCORD-r3            | phs003562.v1.p1   |
| dbGaP\_COPDGene\_Geno         | phs000765.v3.p2   |
| dbGaP\_FHS\_CHARGE-S          | phs000651.v15.p16 |
| dbgap\_FHS\_RNA\_Brain        | phs002611.v3.p16  |
| dbGaP\_FHS\_GutMicro          | phs002560.v3.p16  |
| dbGaP\_BRIDGET\_FHS           | phs002559.v3.p16  |
| dbGap\_ADSP\_FHS              | phs002558.v3.p16  |
| dbGaP\_T2D-GENES\_FHS         | phs001610.v6.p16  |
| dbGaP\_FHS\_SHARe             | phs000342.v23.p16 |
| dbGaP\_CCDG-ARIC              | phs001536.v3.p2   |
| dbGaP\_ARIC\_CARe             | phs000557.v7.p2   |
| TOPMed\_Freeze10\_HCHS\_SOL   | phs001395.v3.p2   |
| TOPMed\_Freeze10\_CARE\_TREXA | phs001732.v3.p1   |

For detailed platform release notes please consult the following resources:

* Gen3 release notes
* [Terra release notes](https://support.terra.bio/hc/en-us/sections/4414878945819-Release-Notes)
* [Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/changelog/)
* [PIC-SURE release notes](https://pic-sure.gitbook.io/nhlbi-biodata-catalyst-powered-by-pic-sure/release-notes/release-notes)


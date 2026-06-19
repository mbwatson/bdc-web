---
title: "2026-01-15 BDC Ecosystem Release Notes"
---

# 2026-01-15 BDC Ecosystem Release Notes

2026-01-15 BDC Ecosystem Release Notes

### Introduction

The 2026-01-15 release marks the 24th update to the BDC ecosystem. This release introduces several new features, including expanded data access, new interoperability tools, enhanced compute capabilities, and new bioinformatics workflows.

The 2026-01-15 data releases include the addition of 51 new datasets. See the Data Releases section below for more information.

### Significant new features&#x20;

The following new features were released this quarter to improve the researcher experience:

#### BDC Powered by Seven Bridges (BDC-Seven Bridges)

* Expanded Multi-Cloud Data Access via SRA & RAS Integration: The integration of RAS Passport authorization with SRA DRS links now enables researchers with valid Data Access Requests (DARs) to access petabytes of controlled-access sequence data directly from the NCBI Sequence Read Archive (SRA). This milestone significantly expands the available data universe for HLBS researchers beyond BDC-hosted sets, operationalizing full DRS-enabled interoperability.
* Enterprise-Scale Infrastructure for High-Volume Data & Imaging: Significant engineering benchmarks were met to support large-scale cohort studies, including a file browser system now capable of managing up to 1 million files per project. This infrastructure work, coupled with improved interactive session stability, provides the necessary foundation for future work that will let researchers handle hundreds of high-resolution images and complex annotation files simultaneously.

#### BDC Powered by PIC-SURE (BDC-PIC-SURE)&#x20;

* Advanced Filtering (Beta) is here! On the Discover page, users can now enable Advanced Filtering to modify the way filters are combined. Users can select "AND" or "OR" from the dropdown in the Results Panel to build complex queries.&#x20;
* Consortium Curated Facets: Users of BDC-PIC-SURE can now utilize the consortium-curated facets to narrow down their search results. These facets are created in collaboration with the data submitters to improve data searchability and exploration. Currently, these facets are available for the RECOVER Adult and Pediatric datasets.

#### BDC Powered by Terra (BDC-Terra)&#x20;

* All workspaces have been upgraded to use a more optimized format for data tables for increased performance and scalability.
* A new “Quota” section is now available on workspace dashboards. Expanding the section shows static links to where users can view and adjust quotas.

#### Data Releases

The table below highlights which studies were included in the data releases in the months of November, December, and January 2026.

Nov/Dec 2025

| Study Name             | phs I.D. #         |
| ---------------------- | ------------------ |
| dbGaP-CARe\_ARIC       | phs000557.v7.p2    |
| dbGaP-CHARGE\_S\_FHS   | phs000651.v15.p16  |
| dbGaP-CCDG\_ARIC       | phs001536.v3.p2    |
| dbGaP-T2D\_GENES\_FHS  | phs001610.v6.p16   |
| dbGaP-ADSP\_FHS        | phs002558.v3.p16   |
| dbGaP-BRIDGET\_FHS     | phs002559.v3.p16   |
| dbGaP-FHS\_GutMicro    | phs002560.v3.p16   |
| dbGaP-FHS\_RNA\_Brain  | phs002611.v3.p16   |
| heartfailure-CHARGE    | phs000930.v11.p1   |
| COVID19-ACTIV4A        | phs002694.v4.p1    |
| imaging-img\_ACCORD    | phs003562.v1.p1    |
| imaging-img\_SPRINT    | phs003566.v1.p1    |
| imaging-img\_MESA\_ECG | phs003703.v1.p1    |
| imaging-img\_dMRI\_VGC | phs004002.v1.p1    |
| imaging-img\_COPDGene  | phs004023.v1.p2    |
| PCGC-CHD-GENES         | phs000571.v7.p3    |
| parent-FHS             | phs000007.v35.p16  |
| parent-CCAF            | phs000820.v2.p1    |
| topmed-HCHS-SOL        | phs001395.v3.p2    |
| topmed-LTRC            | phs001662.v4.p2.c2 |
| dbGaP-MVP              | phs001672.v13.p1   |
| topmed-CARE\_TREXA     | phs001732.v3.p1.c2 |
| RECOVER-RC\_Adult      | phs003463.v5.p4    |
| RECOVER-RC\_Autopsy    | phs003768.v3.p3    |

Jan 2026

| Study Name                      | phs I.D. #         |
| ------------------------------- | ------------------ |
| dbGaP-CHS\_STAMPEED             | phs000226.v7.p1    |
| dbGaP-CARDIA\_PAGE\_CALiCo      | phs000236.v2.p2    |
| dbGaP-WHISP\_GO\_ESP            | phs000281.v8.p3    |
| dbGaP-ALI\_LungGO               | phs000334.v1.p1    |
| dbGaP-FHS\_SHARe                | phs000342.v23.p16  |
| dbGaP-CHS\_HeartGO              | phs000400.v6.p1    |
| dbGaP-MESA\_HeartGO             | phs000403.v3.p3    |
| dbGaP-WHI\_WHISE                | phs000503.v6.p3    |
| dbGaP-CHS\_CHARGE\_S            | phs000667.v4.p1    |
| dbGaP-ARDSNet\_ALI\_GeneticRisk | phs000686.v1.p1    |
| dbGaP-CATHGEN\_phenotypes       | phs000704.v1.p1    |
| dbGaP-CATHGEN\_risk             | phs000705.v1.p1    |
| dbGaP-WHI\_GWAS                 | phs000746.v3.p3    |
| dbGaP-MGH\_AF\_CHARGE           | phs001116.v1.p1    |
| dbGaP-MGH\_AF\_ES               | phs001117.v1.p1    |
| dbGaP-MGH\_AF\_RS               | phs001118.v1.p1    |
| dbGaP-GENOA\_GWAS               | phs001401.v2.p1    |
| dbGaP-WHI\_LLS                  | phs001614.v1.p3    |
| topmed-TOPCHeF                  | phs002038.v1.p1    |
| BioLINCC-BL\_LHMP               | phs004323.v1.p1    |
| BioLINCC-BL\_GenTAC             | phs004340.v1.p1    |
| COVID19-C4R\_REGARDS            | phs002919.v1.p1    |
| topmed-VAFAR                    | phs000997.v6.p2    |
| topmed-miRhythm                 | phs001434.v3.p1    |
| topmed-INSPIRE\_AF              | phs001545.v3.p1    |
| BioLINCC-BL\_MESA               | phs003288.v2.p1    |
| BioLINCC-BL\_PETAL\_ROSE        | phs003878.v2.p1    |

#### Upcoming Data Releases

The table below highlights studies that are planned for release in February

| Study Name                   | phs I.D. #        |
| ---------------------------- | ----------------- |
| heartfailure-NFBC1966        | phs000276.v2.p1   |
| heartfailure-PAPI            | phs000391.v1.p1   |
| dbGaP-LHMP                   | phs000769.v1.p1   |
| heartfailure-Methyl\_Lothian | phs000821.v1.p1   |
| parent-SPIROMICS             | phs001119.v1.p1   |
| dbGaP-WHI\_CHD               | phs001334.v2.p3   |
| dbGaP-ACCORD\_clinical       | phs001411.v1.p1   |
| heartfailure-scRNA\_PF       | phs001750.v1.p1   |
| dbGaP-SCD\_VOP\_PRS          | phs002470.v1.p1   |
| dbGaP-SCA\_RNA\_Seq          | phs002687.v1.p1   |
| Individual\_Study-eIMPACT    | phs003283.v1.p1   |
| dbGaP-SCD\_Cameroon          | phs003748.v1.p1   |
| Individual\_Study-NeuroCOVID | phs004278.v1.p1   |
| BioLINCC-MHCS                | phs004485.v1.p1   |
| dbGaP-GO\_ESP\_COPDGene      | phs000296.v6.p2   |
| dbGaP-GO\_ESP\_ARIC          | phs000398.v9.p3   |
| dbGaP-charge\_s\_aric        | phs000668.v7.p3   |
| dbGaP-micortex\_aric         | phs000860.v7.p3   |
| topmed-CFS                   | phs000954.v5.p2   |
| topmed-BostonBrazil\_SCD     | phs001599.v2.p1   |
| topmed-CATHGEN               | phs001600.v3.p2   |
| topmed-CCDG\_PMBB\_AF        | phs001601.v3.p2   |
| topmed-ChildrensHS\_GAP      | phs001602.v3.p1   |
| topmed-ChildrensHS\_IGERA    | phs001603.v3.p1   |
| PCGC-CMG\_WGS                | phs001843.v2.p3   |
| COVID19-C4R\_HCHS\_SOL       | phs002908.v2.p1   |
| COVID19-C4R\_COPDGene        | phs002910.v2.p2   |
| COVID19-C4R\_FHS             | phs002911.v2.p2   |
| COVID19-C4R\_SARP            | phs002913.v2.p2   |
| COVID19-C4R\_MESA            | phs003017.v2.p1   |

For detailed platform release notes please consult the following resources:

* Gen3 release notes
* [Terra release notes](https://support.terra.bio/hc/en-us/sections/4414878945819-Release-Notes)
* [Seven Bridges release notes](https://sb-biodatacatalyst.readme.io/changelog/)
* [PIC-SURE release notes](https://pic-sure.gitbook.io/nhlbi-biodata-catalyst-powered-by-pic-sure/release-notes/release-notes)

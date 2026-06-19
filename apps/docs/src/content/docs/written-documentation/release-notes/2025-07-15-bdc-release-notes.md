---
title: "2025-07-15 BDC Release Notes"
---

# 2025-07-15 BDC Release Notes

2025-07-15 BDC Ecosystem Release Notes

**Introduction**

The 2025-07-15 release marks the 22nd update to the BDC ecosystem. This release introduces several new features, including CellTypist, an upgraded GATK Variant, new training videos, support for PFB handoffs, and enhancements that enable workflows to run on the GCP Batch API. Additional details on these features and related user support materials are provided below.&#x20;

The 2025-07-15 data releases include the addition of 63 new datasets. See the Data Releases section below for more information.

### Significant new features

**Velsera** included CellTypist workflows and updated the GATK Variants to _BDC Powered by Seven Bridges (BDC-Seven Bridges)_. CellTypist is an open-source tool developed for automated cell type annotation using single-cell RNA sequencing (scRNA-seq) data. The upgraded GATK Variants extracts specific fields from VCF or GVCF files and converts them into a tab-delimited table format, facilitating downstream analysis, visualization, and integration with spreadsheets and statistical tools. Both tools are available in the Public Apps Gallery to all _BDC-Seven Bridges_ users. Additionally, Velsera has released a training video on using the new external connections panel on their YouTube channel. This feature makes it easier for users to connect to external data repositories like Synapse and CAVATICA, as well as linking to DRS servers to access data for analysis on _BDC-Seven Bridges_. YouTube Video linked here:  [BDC - Seven Bridges: Seamlessly Import External Datasets from Cavatica, Synapse & CGC](https://www.youtube.com/watch?v=Sm-zkXQ6N_g)

**PIC-SURE** enabled the handoff of PFBs to _BDC-Seven Bridges_. After creating a cohort of participants by selecting and filtering variables, investigators can now click the “Export to Seven Bridges” button to bring the participant-level data and associated data dictionary to a _BDC-Seven Bridges_ project for analysis (see image below).

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-12 at 3.00.46 PM.png" alt=""><figcaption></figcaption></figure>

**Terra** has [released upgrades](https://support.terra.bio/hc/en-us/articles/31190930435483-Cromwell-on-Google-Batch-API-released-May-19-Generally-Available-as-of-June-23) so that all workflows will now run on GCP Batch API to address Google’s deprecation of the Life Science API. In addition, Terra has also released two new features to address cost management in the cloud: 1) Users now have the ability to [set a cost threshold for a workflow](https://support.terra.bio/hc/en-us/articles/31269696049307-Set-workflow-cost-thresholds-Released-5-7-25) to stop runaway costs from occurring, and 2) billing project owners now have the ability to enable GCP Quota Adjuster, which automatically raises quotas based on usage. Quota Adjuster is highly recommended for GCP Batch, as it supports most Compute Engine quotas, including Managed Instance Groups ("MIG").

**Data Releases**

The table below highlights which studies were included in the data releases in the months of May, June, and July 2025.

<table><thead><tr><th width="209">Study Name</th><th width="144">phs I.D. #</th><th>New to BDC</th></tr></thead><tbody><tr><td>BioLINCC-BL_ARIC_HMB-NPU-MDS</td><td>phs003738.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_BEST_COPD_GRU</td><td>phs004022.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_ROC_PRIMED_GRU</td><td>phs003825.v2.p2.c1</td><td>New</td></tr><tr><td>heartfailure-PGRN_Afib_HMB</td><td>phs000439.v1.p1.c1</td><td>New</td></tr><tr><td>imaging-img_ARIC_HMB-IRB-NPU-MDS</td><td>phs003946.v1.p3.c1</td><td>New</td></tr><tr><td>Individual_Study-PATH_HHT_DS-HHT-IRB-PUB-COL</td><td>phs003948.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_LRC_PS_GRU</td><td>phs003995.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_SHHS_NSRR_HMB-MDS</td><td>phs003637.v1.p1.c1</td><td>Update (Other)</td></tr><tr><td>COVID19-ACTIV4A_GRU</td><td>phs002694.v4.p1.c1</td><td>Update (Other)</td></tr><tr><td>RECOVER-RC_Autopsy_GRU</td><td>phs003768.v2.p2.c1</td><td>Update (Version)</td></tr><tr><td>parent-FHS_HMB-IRB-MDS_</td><td>phs000007.v34.p15.c1</td><td>Update (Version)</td></tr><tr><td>parent-FHS_HMB-IRB-NPU-MDS_</td><td>phs000007.v34.p15.c2</td><td>Update (Version)</td></tr><tr><td>heartfailure-STAMPEED_MIGen_GRU</td><td>phs000294.v1.p1.c1</td><td>New</td></tr><tr><td>parent-PCGC_HMB_</td><td>phs001194.v4.p3.c1</td><td>Update (Version)</td></tr><tr><td>parent-PCGC_DS-CHD_</td><td>phs001194.v4.p3.c2</td><td>Update (Version)</td></tr><tr><td>topmed-PUSH_SCD_DS-SCD-IRB-PUB-COL</td><td>phs001682.v3.p1.c1</td><td>Update (Version)</td></tr><tr><td>BioLINCC-BL_ROC_CPR_GRU</td><td>phs003818.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_PRHHP_GRU</td><td>phs003930.v1.p1.c1</td><td>New</td></tr><tr><td>imaging-img_HCSC-SOL_HMB-NPU</td><td>phs003963.v1.p1.c1</td><td>New</td></tr><tr><td>imaging-img_HCSC-SOL_HMB</td><td>phs003963.v1.p1.c2</td><td>New</td></tr><tr><td>BioLINCC-BL_IPPB_GRU</td><td>phs004010.v1.p1.c1</td><td>New</td></tr><tr><td>Individual_Study-INVESTED_GRU</td><td>phs004011.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_LHS_GRU</td><td>phs004013.v1.p1.c1</td><td>New</td></tr><tr><td>DIR-Stressors_and_Health_Study_HMB-PUB-COL</td><td>phs004019.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_PIOPED_GRU</td><td>phs004020.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_ALLHAT_GRU</td><td>phs004021.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_CONCERT_HF_GRU</td><td>phs004055.v1.p1.c1</td><td>New</td></tr><tr><td>parent-ARIC_HMB-IRB_</td><td>phs000280.v8.p2.c1</td><td>New</td></tr><tr><td>parent-ARIC_DS-CVD-IRB_</td><td>phs000280.v8.p2.c2</td><td>New</td></tr><tr><td>parent-CARDIA_HMB-IRB_</td><td>phs000285.v3.p2.c1</td><td>New</td></tr><tr><td>parent-CARDIA_HMB-IRB-NPU_</td><td>phs000285.v3.p2.c2</td><td>New</td></tr><tr><td>parent-JHS_HMB-IRB-NPU_</td><td>phs000286.v7.p2.c1</td><td>New</td></tr><tr><td>parent-JHS_DS-FDO-IRB-NPU_</td><td>phs000286.v7.p2.c2</td><td>New</td></tr><tr><td>parent-JHS_HMB-IRB_</td><td>phs000286.v7.p2.c3</td><td>New</td></tr><tr><td>parent-JHS_DS-FDO-IRB_</td><td>phs000286.v7.p2.c4</td><td>New</td></tr><tr><td>heartfailure-Fam_PAH_GRU</td><td>phs000354.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-Fam_FAF_HMB</td><td>phs000362.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-GENOA_GRU</td><td>phs000379.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-PGRN_ACE_HMB</td><td>phs000438.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-DrugRes_HTN_GRU</td><td>phs000442.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-CAP_GRU</td><td>phs000481.v3.p2.c1</td><td>New</td></tr><tr><td>heartfailure-BEN_HMB</td><td>phs000507.v2.p2.c1</td><td>New</td></tr><tr><td>heartfailure-Fam_IB_GRU</td><td>phs000518.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-Fam_DC_DS-FDC</td><td>phs000581.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-KCNE1_TDP_HMB</td><td>phs000617.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-Fam_CHD_HMB</td><td>phs000758.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-MiGen_EXS_Ottawa_GRU</td><td>phs000806.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-PGRN_DILQTS_GRU</td><td>phs000808.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-MiGen_EXS_ItalAmer_GRU</td><td>phs000814.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-Exome_Thrombo-Leuk_GRU</td><td>phs000873.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-Twins_Asthma_GRU</td><td>phs000886.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-MiGen_EXS_REGICOR_DS-CVD</td><td>phs000902.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-MiGEN_EXS_PROMIS_GRU</td><td>phs000917.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-BroadEOMI_exome_GRU</td><td>phs000936.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-BroadEOMI_exome_DS-MI</td><td>phs000936.v1.p1.c2</td><td>New</td></tr><tr><td>heartfailure-BroadEOMI_exome_DS-CVD</td><td>phs000936.v1.p1.c3</td><td>New</td></tr><tr><td>heartfailure-PGRN_Cardio-Stat_HMB</td><td>phs000963.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-MiGEN_EX_UL_DS-CVD</td><td>phs000990.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-Endothelial_PAH_GRU</td><td>phs000998.v2.p1.c1</td><td>New</td></tr><tr><td>heartfailure-MiGEN_EXS_MDC_HMB-MDS</td><td>phs001101.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-Globin_iPS_GRU</td><td>phs001212.v1.p1.c1</td><td>New</td></tr><tr><td>heartfailure-exRNA_healthy_HMB</td><td>phs001258.v2.p1.c1</td><td>New</td></tr><tr><td>topmed-CHIRAH_DS-ASTHMA-IRB-COL</td><td>phs001605.v3.p1.c2</td><td>Update (Version)</td></tr><tr><td>topmed-GCPD-A_DS-ASTHMA-GSO</td><td>phs001661.v4.p1.c1</td><td>Update (Version)</td></tr><tr><td>topmed-sumstats_GRU</td><td>phs001974.v8.p1.c1</td><td>New</td></tr><tr><td>heartfailure-REGARDS_GWAS_HMB-IRB</td><td>phs002719.v1.p1.c1</td><td>New</td></tr><tr><td>COVID19-C4R_CARDIA_HMB-IRB</td><td>phs003045.v2.p2.c1</td><td>New</td></tr><tr><td>COVID19-C4R_CARDIA_HMB-IRB-NPU</td><td>phs003045.v2.p2.c2</td><td>New</td></tr><tr><td>Individual_Study-PETAL_ROSE_ARDS_RNASeq_HMB</td><td>phs003929.v1.p1.c1</td><td>New</td></tr><tr><td>imaging-img_dMRI_VGC_GRU</td><td>phs004002.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_NETT_GRU</td><td>phs004077.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_PETAL_CLOVERS_HMB-MDS</td><td>phs004080.v1.p1.c1</td><td>New</td></tr><tr><td>BioLINCC-BL_STEP_IPF_GRU</td><td>phs004085.v1.p1.c1</td><td>New</td></tr></tbody></table>

**Planned upcoming Data Releases For Q3**

| Study Name                            | phs I.D. #         | New to BDC       |
| ------------------------------------- | ------------------ | ---------------- |
| heartfailure-BroadEOMI\_DS-CVD        | phs000279.v2.p1.c1 | New              |
| heartfailure-LungExome\_PAH\_GRU      | phs000290.v1.p1.c1 | New              |
| heartfailure-LHS-COPD\_GRU            | phs000291.v2.p1.c1 | New              |
| heartfailure-LHS\_DS-HLB              | phs000335.v3.p2.c1 | New              |
| heartfailure-Hypox\_Ethiopia\_GRU     | phs000647.v1.p1.c1 | New              |
| BioLINCC-BL\_HPP\_GRU                 | phs003907.v1.p1.c1 | New              |
| Individual\_Study-PRIME\_AIR\_HMB-MDS | phs003926.v1.p1.c1 | New              |
| BioLINCC-BL\_LOTT\_GRU                | phs003933.v1.p1.c1 | New              |
| COVID19-ACTIV6\_GRU                   | phs003941.v1.p1.c1 | New              |
| BioLINCC-BL\_WRAP\_IPF\_GRU           | phs003968.v1.p1.c1 | New              |
| imaging-img\_dMRI\_VGC\_GRU           | phs004002.v1.p1.c1 | New              |
| imaging-img\_COPDGene\_HMB            | phs004023.v1.p1.c1 | New              |
| imaging-img\_COPDGene\_DS-CS          | phs004023.v1.p1.c2 | New              |
| BioLINCC-BL\_HIFI\_GRU                | phs004032.v1.p1.c1 | New              |
| Individual\_Study-VDKA\_DS-ASTHMA     | phs004051.v1.p1.c1 | New              |
| Individual\_Study-STAR\_DS-ASTHMA     | phs004052.v1.p1.c1 | New              |
| BioLINCC-BL\_EPIC\_GRU                | phs004067.v1.p1.c1 | New              |
| BioLINCC-BL\_ACE\_IPF\_GRU            | phs004070.v1.p1.c1 | New              |
| BioLINCC-BL\_Panther\_IPF\_GRU        | phs004071.v1.p1.c1 | New              |
| BioLINCC-BL\_PROP\_GRU                | phs004117.v1.p1.c1 | New              |
| BioLINCC-BL\_FIRE\_CORAL\_HMB-MDS     | phs004130.v1.p1.c1 | New              |
| BioLINCC-BL\_ARDSNet\_FACTT\_HMB-MDS  | phs004165.v1.p1.c1 | New              |
| BioLINCC-BL\_ARDSNet\_EDEN\_HMB-MDS   | phs004168.v1.p1.c1 | New              |
| BioLINCC-BL\_HFN\_LIFE\_GRU           | phs004171.v1.p1.c1 | New              |
| BioLINCC-BL\_BHS\_HMB-MDS             | phs004173.v1.p1.c1 | New              |
| BioLINCC-BL\_WHI\_LILAC\_GRU          | phs004174.v1.p1.c1 | New              |
| imaging-img\_ACCORD\_GRU              | phs003562.v1.p1.c1 | Update (Other)   |
| imaging-img\_SPRINT\_GRU              | phs003566.v1.p1.c1 | Update (Other)   |
| imaging-img\_MESA\_ECG\_HMB           | phs003703.v1.p1.c1 | Update (Other)   |
| imaging-img\_MESA\_ECG\_HMB-NPU       | phs003703.v1.p1.c2 | Update (Other)   |
| dbGaP-PCGC\_DS-CHD                    | phs000571.v7.p3.c2 | <p><br></p>      |
| parent-HCHS-SOL\_HMB-NPU\_            | phs000810.v2.p2.c1 | Update (Version) |
| parent-HCHS-SOL\_HMB\_                | phs000810.v2.p2.c2 | Update (Version) |
| topmed-CARDIA\_HMB-IRB                | phs001612.v3.p3.c1 | Update (Version) |
| topmed-CARDIA\_HMB-IRB-NPU            | phs001612.v3.p3.c2 | Update (Version) |
| topmed-LTRC\_HMB-MDS                  | phs001662.v3.p1.c2 | Update (Version) |
| BioLINCC-BL\_SHHS\_NSRR\_HMB-MDS      | phs003637.v2.p1.c1 | Update (Version) |

For detailed platform release notes please consult the following resources:

* Gen3 release notes
* [Terra release notes](https://support.terra.bio/hc/en-us/sections/4414878945819-Release-Notes)
* Seven Bridges release notes
* PIC-SURE release notes


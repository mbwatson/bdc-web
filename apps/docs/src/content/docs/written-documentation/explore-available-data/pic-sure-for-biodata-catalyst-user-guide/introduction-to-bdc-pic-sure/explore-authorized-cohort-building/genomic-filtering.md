---
title: "Genomic Filtering"
---

# Genomic Filtering

## Genomic Filtering

_BDC-PIC-SURE_ can be used to combine phenotypic and genomic filters to create a cohort of participants.

Using the "Genomic Filtering" button to the right of the search bar, you can add genomic filters using various fields:

* **Gene with Variant:** Search and select the gene name(s) using the official gene symbol that contains the variant of interest.
* **Calculated Consequence:** Select the desired calculated consequences based on VEP annotation. The consequences are organized by high, medium, and low severity. The listed consequences are standardized terms from the Sequence Ontology (http://www.sequenceontology.org) that describe the calculated consequence of a variant. The severity for the calculated consequence of a variant on a gene has possible values HIGH (frameshift, splice disrupting, or truncating variants), MEDIUM (non-frameshift insertions or deletions, variants altering protein sequencing without affecting its length) or LOW (other coding variants including synonymous variants).
* **Variant Frequency:** Displayed variant frequencies are based on the gnomAD combined population as discrete text categories. Possible values: Novel (variant not in gnomAD database), Rare (variant frequency less than 1%), Common (variant frequency greater than or equal to 1%).

<figure><img src="../../../../../.gitbook/assets/image (8) (1).png" alt=""><figcaption><p>Genomic filter options selecting BRCA1 rare variants with stop gained, frameshift, stop lost, and start lost consequences.</p></figcaption></figure>

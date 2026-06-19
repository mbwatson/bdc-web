---
title: "Version Control, Publishing & Validation of Workflows"
---

# Version Control, Publishing & Validation of Workflows

### Version Control

Version control is vital in reproducibility since it helps track changes you or contributors make to your code and documentation. We suggest using GitHub to host your workflows in an open access repository so that the research community can benefit from your work, and your work can benefit from feedback from the research community.  Below, find steps for getting started with GitHub :&#x20;

* [Create a GitHub account](https://www.github.com/join)
* [A primer on GitHub](https://lab.github.com/githubtraining/introduction-to-github)
* Upload your descriptor file (workflow), parameter files, and source code to a GitHub repository (see an [example](https://github.com/sevenbridges-openworkflows/uw-genesis-topmed-cwl))

### Publish your workflow in Dockstore

We encourage users to publish their tools and workflows on Dockstore so that they can be used by the greater scientific community.  Dockstore features allow users to build their pipelines to be open, reusable, and interoperable. Publishing your work in this way will enhance the value of your work and the resources available to the scientific community.

Here is how to get started sharing your work on Dockstore:

* [Create a Dockstore Account](https://docs.dockstore.org/en/develop/getting-started/register-on-dockstore.html?highlight=register) and link your account to external services, such as GitHub
* Link your Dockstore account to your [ORCID](https://docs.dockstore.org/en/develop/end-user-topics/ORCID.html?highlight=orcid) to display your scientific identity.
* [Register your tool on Dockstore](https://docs.dockstore.org/en/develop/getting-started/dockstore-tools.html)
* [Automatically sync updates between GitHub and Dockstore with GitHub Apps](https://docs.dockstore.org/en/develop/getting-started/github-apps/github-apps-landing-page.html)
* Create an [Organization](https://docs.dockstore.org/en/develop/advanced-topics/organizations-and-collections.html), invite your collaborators, and promote your work in collections
* [Request a DOI for your Dockstore workflow](https://docs.dockstore.org/en/develop/advanced-topics/snapshot-and-doi.html?highlight=doi)

### Best Practices for Secure and FAIR tools and workflows

We believe we can enhance the security and reusability of tools and workflows we share through open, community-driven best practices that exemplify the FAIR (Findable, Accessible, Interoperable, Reusable) guiding principles. We have established [best practices for secure and FAIR workflows](https://docs.dockstore.org/en/develop/advanced-topics/best-practices/best-practices-secure-fair-workflows.html) published in Dockstore. We ask that users try to implement these practices in the workflows that they share with the community.

### Findable, Accessible, Interoperable, and Reusable (FAIR) examples from the community

Dockstore can help you create more accessible and transparent data science methods in your scientific publications. In this section, we want to provide some examples of FAIR workflows the community has shared.

In this [2020 Science paper by Lemieux, et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7857412/), the researchers provided transparent methods by citing immutable DOI archives of their container-based workflows, and also shared a [Viral Genomics ](https://dockstore.org/organizations/BroadInstitute/collections/pgs)collection in the Broad Institute's organization on Dockstore. This collection includes several workflows, a README, and a link to a public workspace tutorial in the Terra cloud environment where users can learn exactly how to recreate their methods.&#x20;

In this [2020 Nature paper by Li, et al. ](https://www.nature.com/articles/s41592-020-0905-x)the authors shared their pipelines written in the Workflow Description Language in this [Cumulus](https://dockstore.org/organizations/BroadInstitute/collections/Cumulus) collection on Dockstore, and created a [public Terra workspace](https://app.terra.bio/#workspaces/kco-tech/Cumulus) where the community can recreate an exact analysis and figure from their publication.&#x20;

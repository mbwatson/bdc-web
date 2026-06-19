---
description: Instructions on transferring files between BDC-Seven Bridges and BDC-Terra
title: "Transferring Files Between Seven Bridges and Terra"
---

# Transferring Files Between Seven Bridges and Terra

## **Introduction**

This tutorial guides users through the process of transferring files between the two workspace environments of BDC: _**BDC-Seven Bridges**_ and _**BDC-Terra**_.&#x20;

Most researchers select one of the BDC workspaces as their primary analysis environment and their labmates and collaborators typically work with them on the same workspace environment. However, there are cases where some collaborators work on _BDC-Seven Bridges_ and others work on _BDC-Terra_. In this case, researchers need to share data files between the two workspaces to facilitate collaboration. When researchers run analyses on Seven Bridges, the results, or derived data, is only available on Seven Bridges. Likewise, when researchers run analyses on Terra, the results are only available on Terra. This tutorial provides step-by-step guidance on how to share derived data between the workspace environments. These instructions can also be used to share private data that has been uploaded to Seven Bridges or Terra.&#x20;

Both open access data and controlled access data can be shared across workspace environments. Importantly, if a researcher intends to share controlled access data, they must ensure that all recipients have the necessary dbGaP permissions for those files. In some cases, this may mean the researchers must be listed as collaborators on their respective dbGaP applications.

These instructions are intended for sharing files under 1 terabyte (TB) in size. If you want to share data larger than 1 TB, contact the [BDC Help Desk](https://biodatacatalyst.nhlbi.nih.gov/contact) to discuss your use case.

{% hint style="warning" %}
It is not recommended to transfer large amounts of data between cloud providers or regions; for example, AWS --> Google costs approximately $100/TB.
{% endhint %}

## **Initial Considerations**

### Platform Accounts

Moving data between Seven Bridges and Terra is currently a manual process and requires that one of the researchers involved in sharing has an account on both platforms. It is recommended that the recipient of the shared data is the person to have accounts on both Seven Bridges and Terra.

* To create a Terra account, refer to the [Terra documentation](https://support.terra.bio/hc/en-us/articles/360028235911).
* To create a Seven Bridges account, refer to the [Seven Bridges documentation](https://sb-biodatacatalyst.readme.io/docs/sign-up-biodata-catalyst-powered-by-seven-bridges). If you are new to Seven Bridges, you may find this [Getting Started Guide](https://bdcatalyst.gitbook.io/biodata-catalyst-documentation/written-documentation/getting-started/analyze-data-1/seven-bridges/getting-started-guide) helpful.&#x20;

Let’s consider an example case:&#x20;

* **Sebastian** is working on **Seven Bridges** and **Teresa** is working on **Terra**.&#x20;
* If Sebastian wants to share data with Teresa so that she can use the data on Terra, Teresa first needs to set up an account on Seven Bridges.&#x20;
* Now, Teresa has an account on Terra and an account on Seven Bridges.&#x20;
* Sebastian will share the data with Teresa on Seven Bridges by adding her as a member of the project with the data he wants to share, with Copy permissions. For information on permissions, refer to the Seven Bridges [Set permissions](https://sb-biodatacatalyst.readme.io/docs/set-permissions) documentation.&#x20;
* Once Teresa is added as a member of the project, she can move the data from the Seven Bridges project to a workspace on the Terra platform, following the instructions in the section titled "Moving Data From Seven Bridges to Terra" later on this page.

Let's consider a second case:

* If **Teresa (Terra)** wants to share data with **Sebastian (Seven Bridges)** so that he can use the data on Seven Bridges, Sebastian first needs to create an account on Terra.&#x20;
* Now Sebastian has an account on Seven Bridges and an account on Terra.&#x20;
* Teresa can share the data with Sebastian on Terra by sharing the workspace with the data she wants to share with Sebastian. For information on sharing workspaces, refer to the Terra [How to share a workspace](https://support.terra.bio/hc/en-us/articles/360034540171) documentation.&#x20;

### Billing

The second consideration is making sure the researcher moving data between the two workspaces has billing groups set up on both workspaces to cover cloud costs, if necessary. Contact the [BDC Help Desk](https://biodatacatalyst.nhlbi.nih.gov/contact) if you have questions about how to get a billing group on Seven Bridges or Terra.

## **Moving Files From Terra to Seven Bridges**

The following steps describe how to use the Seven Bridges platform to pull data securely from a Terra workspace into a Seven Bridges project.

Refer to the [Terra documentation for Moving data to/from a Google bucket (workspace or external)](https://support.terra.bio/hc/en-us/articles/360024056512-Moving-data-to-from-a-workspace-Google-bucket), specifically the section [Upload and download data files in a terminal using gsutil](https://support.terra.bio/hc/en-us/articles/360024056512-Moving-data-to-from-a-workspace-Google-bucket#h_01EGP8GR3G10SKRXAC7H1ENXQ3). This method:

* Works well for all size transfers.
* Ideal for large file sizes or 1000s of files.
* Can be used for transfers between local storage and a bucket, workspace VM or persistent disk and a Google bucket, as well as between Google buckets (external and workspace).

You will use the terminal in JupyterLab on the Seven Bridges workspace environment. The reason for this is that although Seven Bridges can run on the Google Cloud Platform, the Google bucket API is not exposed in the same manner as it is on Terra. Therefore you will start a JupyterLab notebook on Seven Bridges, using  the project you would like to be the destination for the copied data. Refer to the Seven Bridges documentation for launching [Jupyter Lab notebooks on Seven Bridges](https://sb-biodatacatalyst.readme.io/docs/run-an-analysis-using-data-cruncher) and accessing the terminal in a [JupyterLab environment](https://sb-biodatacatalyst.readme.io/docs/editor-quick-reference).

After launching the notebook, the next step is to open the terminal and install the program `gsutil` which is a python program that lets end users add data to or copy data from a Google Cloud bucket. After opening the terminal, run the following commands:

```
pip install gsutil
gsutil config
```

![](https://lh5.googleusercontent.com/-NY3t-E-DHNLPYlfgxUTw4DboMAxb_GvBIPlk6kvTO2DSLTb_gtuV9__I4YOtEND0ZZCaDTwjMY7wT00_j9gGjmWx6dg4jN87pJ8t9lRf1wQ3azJnV4yuBA8lMaknmjnAaLGA4jO)

Installing `gsutil` takes only a few seconds. &#x20;

![](https://lh3.googleusercontent.com/0HoKg4B2Y0eWuql05OaK_JjV7gIr8O7TEdgayV_XZIrcUESn9VYRZqFc9rFZJFwIzu5gb6BbrVMNS3v1HkKrDLRHgCbUIwc-WX6DxnAc0jd-1nel6mLMJO39y8FHiNU07UkJ4jA8)

The `config` command provides a secure URL for you to navigate to in the browser. You will authenticate with the same credentials that were used to login to Terra. The shortcut to access the printed URL in the JupyterLab terminal is to press shift and right click, which will display options to copy the URL. Copy and then navigate to the URL in a new browser tab, which will direct you to Google authentication:

![](https://lh4.googleusercontent.com/rIXnmeIeqCDpbtnSgALZ9mxJOuHT-1oUVxme115OJmE70GvifRz-VPtBNGIlfUVFaorLzak4jxBWeqO9VHcHSTQAGXx0y05IzWDpOHtLQFvdh4MdEx1vfhQkViRIWGGFrtRwF_kK)

Google will provide an authentication code that you will copy and paste into the terminal.

Next, you will type in the Google Project id. This is found on the right side of the Terra Workspace Dashboard.<br>

![](https://lh4.googleusercontent.com/kb2ZkyNDg9dxD42IaJcoPn5rW8Dg0Bw-UhaM-MLAE7HDdkGXBVvRVd4PHQcAOHmljKnDhBC56XHFPbz2h7DhQp6R96Ntdrk3Qu0NXLuPnhOZiqxiy6uKkJn0BFX9nTG56al5vvAC)

![](https://lh4.googleusercontent.com/BWhvaDVw67fqGWJcLwUZ7FUkxm8TV4rBxtuGsch3qUYiRlXmr4YmzwfvdxKOhZX2EzxQVfyGJChZvSbGvvP5HbsesUxm5wYjxoB1I88CeKTSVoinhJrsU-KYS5INmcwLNR2k7O_N)

Next, run the command below to display the different Google buckets that are attached to the project id.

```
gsutil ls
```

![](https://lh5.googleusercontent.com/yE7JrLLwvjfblYlsiSFWhYr_c2merM5oAySVmFVazm82HTbQY3a6J74YZjFfZbW4a1OSFnsmFYa22V8ahRake64V1Ort1qCNNnzFZsISE77NrZROtqrmcfn0s_jUSE4FN1hIAZfJ)

The Google bucket name for the Terra project can be found in the lower right corner of the Terra Workspace.

![](https://lh4.googleusercontent.com/x-H7cp7jRKrZX33915-Mc4tmRULk96j7XbupzSy0Sx4wPQIGBJo5RUrcqfnvzy9ATFPYr1_L15MfSmxn5V5wm6SmmXLGUWYnotJacMMYQQFXVojgjGl5JpwBYzweRSteCTtea8ki)

Running `gsutil ls` on the Google bucket name will display the folders and files from the Terra workspace.&#x20;

![](https://lh4.googleusercontent.com/rwBxgMk4tJdATORuTqbC8Su6W5F539fUDcReeMC6eo9oi8Y-sn8outLIceWQ2SJa0F70edT6St3nUS2hggj2DgilCW5nRmPgbMUUb_xj1q9AcnULDmRvSMiQc64XeQlvfYqLD0W4)

To copy a folder to the Seven Bridges workspace environment, run the following command:

```
gsutil cp -R gs://[Google-Bucket-Name] /sbgenomics/output-files/
```

![](https://lh5.googleusercontent.com/Bj2hkfxJ7m6SDFuS_te8l5TaSXHh4rzC3Jk_876v99map2Cq7PZMlysDeZ3bX1sOtNwLIV12Pd9m5TxlcMv6XHfboWZ2JhJL-4ZCZsU_7lsr6fPUx0f6WDqZfXW_3_NibwM3rGPF)

There are a couple important things to mention about the `gsutil cp` command. First, the `-R` flag for `gsutil cp` is used to recursively copy a folder and all of its subfolders and files. Most users will likely want to use the -R flag. This flag should be omitted  if copying individual files or if using a wild card such as “\*.vcf”. &#x20;

Additionally, `/sbgenomics/output-files` should be the destination folder when bringing in data from Terra, as this will ensure the files or folders get populated back to the Seven Bridges project. Refer to the [Save analysis outputs](https://sb-biodatacatalyst.readme.io/docs/about-files-in-a-data-cruncher-analysis#save-analysis-outputs-output-files) documentation for information about working with files in Data Cruncher environments. After the JupyterLab instance is shut down, your files will automatically be populated in your project-files tab on Seven Bridges. &#x20;

## **Moving Data From Seven Bridges to Terra**

In this section we will discuss pushing data from a Seven Bridges project to a Terra workspace.

The process of moving data from Seven Bridges to Terra is the same setup as the previous section with some modifications to the `gsutil` copy command. Instead, we reverse the arguments.

```
gsutil cp -R /sbgenomics/output-files/vcfs_to_transfer \ gs://[Google-Bucket-Name]
```

![](https://lh4.googleusercontent.com/CWn5QXI6HCpIhRBVviERJysiit-ntf0xWrVo17ceU7wCK7AvWJShMoWtzkpRa5kyr2haR3rbcsxeWfCAR7C8pdUX1IOCfZw3-1gegS1ZPr7JSoOw15MQ9CswP7phXIG-h1JwRlSz)

You will still use the `-R` flag but the destination is a Terra bucket. The Terra workspace’s Google bucket name/id can be found on the Terra workspace **Dashboard** tab. You can verify that the folder has been copied by navigating to the **Files** section of the **Data** tab in your Terra workspace.

![](https://lh5.googleusercontent.com/FbY78qQglTQR7NJLjNrSSeQ7fVo1EHq7zopJ5Z48DrnZes4OY810sURCLluEcSmAS8BNZaw2qtD3wHsOhiMZ9Fa3ZW39ZEv6-5VECgc3QvwMBkHsSBFNxN61SjkINtkdrh-8szA5)

Clicking on the folder, you will see that all three files have been copied.

![](https://lh6.googleusercontent.com/iSrXUw5F3nRRaAhLiy-kwN5SkEUWfYLAxCCBgCjdMWmUkDJDyuUSSd_PKkxck044297mqBL_Sz6x5ISEsqHNekdYndCQylV2PiGm_1mNd4VZWdmRhtiBel005-N7cekQ87Uwdaop)

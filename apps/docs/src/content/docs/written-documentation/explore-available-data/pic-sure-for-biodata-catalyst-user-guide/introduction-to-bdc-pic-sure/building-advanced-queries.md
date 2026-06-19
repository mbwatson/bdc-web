---
title: "Building Advanced Queries"
---

# Building Advanced Queries

Researchers can now build advanced queries in _BDC-PIC-SURE_ to specify logical operators and group related filters.

{% hint style="info" %}
**The Advanced Query Builder is a new feature on&#x20;**_**BDC-PIC-SURE.**_

Do you have feedback? [Let us know](https://hms-dbmi.atlassian.net/servicedesk/customer/portal/5/group/6/create/362)!
{% endhint %}

## Advanced Query Builder Layout

Once at least two phenotypic filters are applied to the query, you will have the option to build an advanced query. Selecting this will take you to the Advanced Query Builder page. Here, there are several options to adjust your query.

<figure><img src="../../../../.gitbook/assets/image (10) (1).png" alt=""><figcaption><p>Advanced Query Builder page.</p></figcaption></figure>

**A: Query Summary.** This provides an equation-like summary of the query that you have built.

**B: Query Builder section.** Below the Query Summary is the area where complex queries can be constructed, including changing logical operators and adding subqueries.

**C: Selecting Logical Operators.** In the top-left corner, there is an option to select the logical operator. Options are currently `AND` and `OR`. Note that changing the selection in the top corner will change all logical operators between the filters.

**D: Add Subquery.** Selecting this button will add a group where related filters can be added. In other words, this will add a set of parentheses in the query equation.

**E: Draggable filters.** Each filter shown in the Query Builder section has a six-dot icon on the left-hand side. This indicator can be used to click and drag filters to be reordered or dragged to a subquery.

**F: Apply Changes.** Use this button to apply changes made to the query.

## Creating Subqueries

To create a subquery or a new group of filters, click "Add Subquery." This will add a new group towards the bottom of the Query Builder section. To start, this will be an empty group.

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-05-05 at 12.08.15 PM (1).png" alt=""><figcaption><p>Clicking "Add Subquery" adds an empty group towards the bottom. </p></figcaption></figure>

To add filters to the group, click and drag the filters of interest into the group using the six-dot indicator on the left. As shown in the image below, the variables `F106Q14A` and `ZGENDER` have been moved to the new group.

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-05-05 at 12.08.36 PM.png" alt=""><figcaption><p>Filters can be clicked and dragged into a group.</p></figcaption></figure>

## Changing Logical Operators

To change the logical operators within the query, select either `AND` or `OR` from the top left corner of the query builder section or the added subqueries.

Changing a selection affects all logical operators at that level. For example, selecting `OR` at the top left corner will only change the logical operator between `SCANEMIA` and the subquery with `ZGENDER` and `F106Q14A`, not the logical operator within the subquery.

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-05-05 at 3.03.50 PM.png" alt=""><figcaption><p>Changing the AND or OR selection changes the operator at that level.</p></figcaption></figure>

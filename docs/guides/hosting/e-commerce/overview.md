---
title: Guides - e-Commerce - Overview
hide_title: true
sidebar_label: Overview
pagination_label: Guides - Deploying - e-Commerce
keywords:
    - websites
    - applications
    - azure
    - micro frontends
    - e-commerce
hide_table_of_contents: true
---

# e-Commerce in the Wild

There are off-the-shelf e-Commerce tools to choose from, WooComerce, Shopify, and others, but these solutions aren't for everyone.  The reality is, there are 100s of different combinations of technology that can be used to achieve an e-Commerce store.  The following guides will take you through some of the common configurations we have come across in the wild, and will also talk about how different solutions can be swapped in as needed.

## Forestry, 11ty, JamCart

### The Frontend - 11ty

A common approach to modern frontend development is to use static generated sites.  11ty (Eleventy) is a simple static site generator based on JavaScript, that is zero-config by default and allows you to transform a directory of templates into HTML. 

### The Data - Forestry CMS

For our data management needs, we will use Forestry CMS. Forestry gives editors the power of Git; to create, edit, and instant preview Markdown-based sites.

### The Commerce - JamCart

We need to allow our users to add items to a shopping cart and eventually checkout.  JamCart provides a simple approach to carts and checkout.

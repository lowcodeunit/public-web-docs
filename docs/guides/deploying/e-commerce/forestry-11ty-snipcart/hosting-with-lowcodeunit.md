---
title: Guides - e-Commerce - Forestry, 11ty, Snipcart - Hosting with Fathym
hide_title: true
sidebar_label: Hosting with Fathym
pagination_label: Guides - Deploying - e-Commerce - Forestry, 11ty, Snipcart - Hosting with LCU
keywords:
    - websites
    - applications
    - azure
    - micro frontends
    - e-commerce
hide_table_of_contents: true
---

# Hosting with Fathym

Back at the beginning, when [setting up](../../../../getting-started/create-first-project) our project, we did most of what is required for Fathym to host your site. Right now, go ahead and check in your latest code from previous steps, and a new build will automatically start inside of your Fathym dashboard.  After the build completes, you can press `Deploy Latest`, and if all went according to plan... voila! e-Commerce in action.  Take note of and copy the URL Fathym is using to host your project.

There are only a few tasks left to complete the configuration of Snipcart.  For starters, jump back in the Snipcart dashboard and navigate to your account in the top right corner. From there scroll down to `Domains and URLs` and under domain make sure you add the domain from Fathym (if you ever decide to use a custom url, you must update the domain here).  Finally, navigate to `Shipping` and scroll down to USPS and toggle it to `On`.

Snipcart supports many credit card processing gateways, so before your store is fully functional you will need to configure one from their list by navigating to `Account -> Payment Gateway`. However, for testing purposes this step can be skipped.

Now you've got a working e-commerce store from which to start selling your products.

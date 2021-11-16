---
title: Guides - e-Commerce - Forestry, 11ty, JamCart - Hosting with LowCodeUnit
hide_title: true
sidebar_label: Hosting with LowCodeUnit
keywords:
    - websites
    - applications
    - azure
    - micro frontends
    - e-commerce
hide_table_of_contents: true
---

# Hosting with LowCodeUnit

Back at the beginning, when [setting up](../../../getting-started/create-first-project) our project, we did most of what is required for LowCodeUnit to host your site. Right now, go ahead and check in your latest code from previous steps, and a new build will automatically start inside of your LowCodeUnit dashboard.  After the build completes, you can press `Deploy Latest`, and if all went according to plan... voila! e-Commerce in action.  Take note of and copy the URL LowCodeUnit is using to host your project.

There are only a few tasks left to complete the configuration of JamCart.  For starters, jump back in the JamCart dashboard and navigate to `Security` and under domain whitelist make sure you add the domain from LowCodeUnit.  Finally, navigate to `Shipping` then press `Create`.  Create whatever shipping options you need, in our case we opted for a free ground shipping option.

Now you've got a working e-commerce store from which to start selling your products.

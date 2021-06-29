---
title: Guides - e-Commerce - Forestry, 11ty, JamCart - Hosting with LowCodeUnit
hide_title: true
sidebar_label: Hosting with LowCodeUnit
keywords:
    - websites
    - applications
    - azure
    - micro-frontends
    - e-commerce
hide_table_of_contents: true
---

# Hosting with LowCodeUnit

Our code so far

We have a working shopping cart now, but checkout won't work. JamCart needs to be able to crawl our website to verify the price of items and that requires getting our code hosted. We'll be using Netlify to fix that.

Getting our code hosted is really simple. If you haven't already, remember to commit and push your code. Then login to Netlify and, from your Dashboard, hit "New site from Git".

Create Site Form

Select GitHub and follow the prompts to connect your repository. Once the repository is connected, double check the "Basic build settings". Netlify automatically filled these out for me correctly in our tutorial example:

Build Settings

The very last thing we need to do is authorize this domain with JamCart. Returning to your dashboard, fill out "Domain Whitelist" with the domain your website is hosted on.

---
title: Application Routes
hide_title: true
sidebar_label: Routes
keywords:
    - applications
    - routes
    - website
hide_table_of_contents: true
---

# Application Routes

Routes are used to determine which applications are used to handle a request to your project.  

## Route Filters

Filters are applied during routing to further determine which routes are used to handle a request.

### Query String Filters

Query string filters allow you to target specific query string attributes, and are often best used with APIs, redirects and OAuth processors.  When using query filters with view package processors, make sure to keep in mind that the query string will not be added to child requests (scripts, css, images).

### Header Filters

Header filters work great with all the different types of processors, but do require a bit of extra configuration.  You'll need to add some sort of extension to your browser (like [ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=en) for Chrome).  This works great for view packages, as all child requests (except for a limited set) do receive the header, allowing for [dynamic testing scenarios](testing-use-cases). 

### Security Filters

Coming soon when the Krakyn unleashes.

#### Authentication Filters

#### Authorization Filters

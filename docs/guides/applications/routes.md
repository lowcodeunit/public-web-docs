---
title: Application Routes
hide_title: true
sidebar_label: Routes
pagination_label: Guides - Applications - Routes
keywords:
    - applications
    - routes
    - website
hide_table_of_contents: true
---

# Application Routes

Routes are used to determine which applications are used to handle a request to your project.  

## Route Filters

Filters are applied during routing to further determine which routes are used to handle a request.  Filter values can be any valid RegEx.  A route filter must define a path filter, and additionally the other filter types to route the request at an application.

### Path Filters

Path filters allow you to target the incoming path of a request, and are used with all types of processors.  A path filter is required for every route filter definition.

### Query String Filters

Query string filters allow you to target specific query string attributes, and are often best used with APIs, redirects and OAuth processors.  When using query filters with view package processors, make sure to keep in mind that the query string will not be added to child requests (scripts, css, images).

### Header Filters

Header filters work great with all the different types of processors, but do require a bit of extra configuration.  You'll need to add some sort of extension to your browser (like [ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=en) for Chrome) to use these while browsing your site.  This works great for view packages, as all child requests (except for a limited types like web socket connection) do receive the header, allowing for [dynamic testing scenarios](testing-use-cases). 

### Security Filters

Coming soon when the Krakyn unleashes.

#### Authentication Filters

#### Authorization Filters

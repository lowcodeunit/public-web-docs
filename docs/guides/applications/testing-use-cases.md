---
title: Testing Use Cases
hide_title: true
sidebar_label: Testing Use Cases
pagination_label: Guides - Applications - Testing Use Cases
keywords:
    - applications
    - routes
    - website
    - testing
hide_table_of_contents: true
---

# Testing Use Cases

When working with Fathym, there are many different approaches to take when testing new application versions.  Depending on your needs, team size, and application footprint you may find that you need a combination of these or that one approach may work.  We'll use the rest of this guide to explore how Fathym's micro frontend capabilities can be used to orchestrate testing.

## Testing Routes

One approach that can be used is to create a set of dedicated routes for testing.  This most often includes some sort of shared base route, an individual or team identifier, and an application identifier: `/{root}/{individual_or_team}/{app}`.  

:::note

This approach won't always work as not all applications can easily be run on paths that aren't defined at build time.  While this can be overcome in the build process, it becomes a cumbersome approach due to the cuztomizations needed in DevOps.  No worries, if this is your issue, header filters can help with testing scenarios on a shared path.

:::

### Individual Testing Routes

Let's say that Matt is a QA resource assigned to test a story from one of the developers on the public web application.  In order to setup a route to execute his testing, that won't impact the production site, he creates a new testing route for `/qa/matt/public-web` and configures the application to point at the version of the public web application the developer completed and needs tested. 

### Team Testing Routes

Once Matt completes testing of the individual development branch, that code is then merged into an integration branch.  Using a team testing route like `/qa/int/public-web`, the team can ensure anyone can take a look at the current integration release before being pushed to master/main.  Someone would simply go unpack the latest integration version of the application anytime changes were made.

## Testing with Header Filters

This works much the same way as the other testing routes, but allow for the use of the same path usage in production and testing configurations.  Let's say there is a Docusaurus app built to run on the `/docs` path.  We want to achieve individual and team testing scenarios here as well.  To do this, a header filter can be configured that will use the development or integration versions of the app based on a user defined header value. 

<!-- 
## Virtual Integration Environment

Using headers so that not just frontend changes, but also which Proxies are used -->

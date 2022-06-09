---
title: Guides - e-Commerce - Forestry, 11ty, Snipcart - Overview
hide_title: true
sidebar_label: Overview
pagination_label: Guides - Deploying - e-Commerce - Forestry, 11ty, Snipcart
keywords:
    - websites
    - applications
    - azure
    - micro frontends
    - e-commerce
hide_table_of_contents: true
---

# e-Commerce with Forestry, 11ty, and Snipcart

In this guide, we'll create an e-commerce site from scratch using 11ty for static website building, Forestry as the CMS, Snipcart for the shopping cart and checkout, and Fathym to bring it all together for your users.  This may seem like a daunting challenge, but the simplicity and specialty each tool brings makes this an easy way to get started with your next e-commerce project.

If you'd like to take a look at the finished project before we kick things off, visit [acme-shop.fathym.com](https://acme.fathym.com).  

## The Set Up

For this guide, you'll need some basic level of knowledge with a few different tools, though extensive knowledge is not required:

- Using Node in your local development environment
- Basic workflows with git
- Hosting repositories on GitHub
- HTML, CSS, and JavaScript

## Creating a Project

We'll start by creating a project inside Fathym.  This will help set up our GitHub repository, our hosting, and our DevOps pipeline so that we can just check in our code and deploy it.  Before continuing, please [create a project](../../../../getting-started/create-first-project) following our getting started guide.  For the build command you will want to use `build` and Output Directory set to `_site`.

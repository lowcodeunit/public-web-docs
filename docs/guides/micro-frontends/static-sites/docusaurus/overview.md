---
title: Introduction - Overview - Docusaurus on Fathym
hide_title: true
sidebar_label: Overview
keywords:
    - websites
    - applications
    - docusaurus
    - micro-frontends
hide_table_of_contents: true
---

# Docusaurus on Fathym

## Initializing Docusaurus

A complete guide to setting up and working with Docusaurus is outside the scope of this guide, so you'll probably find [this](https://docusaurus.io/docs/) useful in expanding on our initial static website.  Here, we'll focus on what it takes to get your Docusaurus site up and running with LowCodeUnit.  Start out by deleting the contents of your repository, making sure to keep the `.github/workflows/lcu-build-github-artifact.yml` for use in our automated DevOps.  The Docusaurus project can be initialized with the following command.

```console
npx @docusaurus/init@latest init my-first-website classic
```

Once this command is complete, the docusaurus site will be initialized in a subfolder `my-first-website`.  Our preference is these projects existing at the root of the repository, so cut the contents of my-first-website and move them to the root of the repository.

![Docusaurus Project Structure](/img/screenshots/docusaurus-project-structure.png)

## Deploying Docusaurus

Now you can run it locally by executing an `npm start` command from the root of the repository.  We've already configured the build script and output folder that will work for docusaurus, so check in and push your code to start a build.  From the dashboard, wait for the build to complete successfully, then click the <img src={deploylatestBtn} class="text-image" /> button to deploy your code to your site.  Once the deploy is complete, select <img src={launchBtn} class="text-image" /> button for your project to test it out.

:::note

Due to the caching used to deliver your site, it may take a moment for latest code to show on your endpoint.  Hard reload the cookies and cache for your site to see Docusaurus immediately.

:::

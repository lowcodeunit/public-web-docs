---
title: Getting Started - Javascript Framework
hide_title: true
sidebar_label: Javascript Framework
keywords:
    - applications
    - azure
    - deployment
    - micro-frontends
hide_table_of_contents: true
---

# Javascript Framework

While some static html can be valuable, the end goal of most applications is far more complex and requires the help of javascript frameworks.  Any framework will do (vue, react, angular, svelte, and the list goes on...), so bring your favorite to the table to get started.  For the rest of this walkthrough we are going to utilize a react based, static website generator known as [Docusaurus](https://docusaurus.io/docs/).  Information on using other frameworks can be found further in the documentation.

## Initializing Docusaurus

A complete guide to setting up and working with Docusaurus is outside the scope of this guide, so you'll probably find [this](https://docusaurus.io/docs/) useful in expanding on our initial static website.  Here, we'll focus on what it takes to get your Docusaurus site up and running with LowCodeUnit.  Start out by deleting the contents of your repository, making sure to keep the `.github/workflows/lcu-build-github-artifact.yml` for use in our automated DevOps.  The docusaurus project can be initialized with the following command.

```console
npx @docusaurus/init@latest init my-first-website classic
```

Once this command is complete, the docusaurus site will be initialized in a subfolder `my-first-website`.  Our preference is these projects existing at the root of the repository, so cut the contents of my-first-website and move them to the root of the repository.

![Docusaurus Project Structure](/img/screenshots/docusaurus-project-structure.png)

## Deploying Docusaurus

Now you can run it locally by executing an `npm start` command from the root of the repository.  We've already configured the build script and output folder that will work for docusaurus, so checkin and push your code to start a build.  From the dashboard, wait for the build to complete successfully, then click the <img src="/img/screenshots/deploy-latest-button.png" class="text-image" /> button to deploy your code to your site.  Once the deploy is complete, select <img src="/img/screenshots/launch-button.png" class="text-image" /> for your project to test it out.

:::note

Due to the caching used to deliver your site, it may take a moment for latest code to show on your endpoint.  Hard reload the cookies and cache for your site to see Docusaurus immediately.

:::

## Next Steps

you've seen how in a few steps, your able to create an enterprise scalable DevOps process for manaing the deployment of your products and applications.  Next we'll dig into how you can bring a custom domain and SSL certificate to your application.

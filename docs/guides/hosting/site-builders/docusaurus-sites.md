---
title: Hosting Docusaurus Sites
hide_title: true
sidebar_label: Docusaurus Sites
pagination_label: Guides - Hosting - Site Builders - Docusaurus Sites
keywords:
    - docusaurus
    - app
    - website
    - hosting
    - easy
hide_table_of_contents: true
---
import devOpsTab from '../../../../static/img/screenshots/devops-tab.png';


# Hosting Docusaurus Sites

Getting your next site up and running with Docusaurus is a breeze with LowCodeUnit.  Here, we'll quickly look at setting up the basics: a generic Docusaurus site and the LowCodeUnit setup (to power DevOps and deployment) so that you can focus on customizing your user experience.

## Setting up the code

The first step for this guide is going to be setting up our source code and initial Docusaurus project.

### Source Control

We strongly believe in the use of source code, and so should you.  So let's get started setting up our GitHub repository.  Choose the organization (or your individual account) in GitHub, select the repositories tab and then new repo.  Give the repo a unique name and description, select public, and I like to seed the repo with a license file (generally an MIT license for something like this).  Now that we have a repository setup, let's clone it to our local system and open the folder with VS Code.  

### Docusaurus Project

Generally you'll want to follow along with the [latest docusaurus docs](https://docusaurus.io/docs) when creating a new project.  Sometimes things change over there, but in general you'll want to run the following commands from within your new project to get it setup (replace `my-website` with a name of your choosing).

```console
npx create-docusaurus@latest my-website classic
```

Next, we like to move the contents of the `my-website` (or whatever you may have named your project) directory up to the root of the project.  This will leave a starting point that looks something like the following:

![docusaurus raw project](/img/screenshots/docusaurus-raw-project.png)

Now start and run the site locally using the following command:

```console
npm start
```

With the site up and running, go ahead and commit the changes back into your repository so that our working (albeit basic) docusaurus site is up and ready for deployment.

## Deploying the Code

Now we'll need to setup a couple of things to get our project DevOps and deployments working.  You'll need to setup your free account at [www.lowcodeunit.com](https://www.lowcodeunit.com/dashboard) to get started.  Once in the dashboard, authorize with GitHub if you haven't already, and then select an existing project or create a new one.

:::note

For an in-depth look at some of the configurations we use here, check out the [getting started guide](../../../getting-started/setup).

:::

### DevOps Setup

Now that we are in a project, let's start by setting up the DevOps from the <img src={devOpsTab} class="text-image" /> tab.  Once there, setup a new source control like the following (replacing the organization and repository with your own).  The only major change from the defaults is to make sure the Output Folder is set to `./build`.

![docusaurus source control config](/img/screenshots/docusaurus-source-control-config.png)

Save the configuration and a new GitHub action will be created, and a new build will have automatically kicked off for your repository.  Once this is complete, we'll be able to setup the application.

### LowCodeUnit Application

With our DevOps pipeline in place and a build completed, we can now use the GitHub artifact to deploy our code.  From the Applications Flow tab, you should already be on the create application screen.  Fill out the information for your repository, and select the correct GitHub view package settings.  Your configuration should look like the following:

![docusaurus application config](/img/screenshots/docusaurus-application-config.png)

Save this form and your GitHub artifacts will be unpacked in the DFS for delivery to your users.

### Custom Domains

As a bonus last step, you can follow our [custom domain guide](../../../getting-started/global-edge-network) from the getting started to get your site up and running on your own domain.

<!-- ## Docs only mode

Talk through shifting to docs only mode, and configuring to run on a base path like `/docs` -->

## Next Steps

Now your all setup with a functioning development through deployment workflow for your Docusaurus project.  Make changes and commit them to your repository, then follow our [updating views guide](../../applications/updating) to learn more on updating your builds, and use our [testing use cases](../../applications/testing-use-cases) to learn how you can test new builds before releasing them to your users.  Happy coding!

LowCodeUnit is an all-in-one platform for running web projects. This means you can use LowCodeUnit for hosting most, if not all, of your web projects. LowCodeUnit is simple to use and setup which works perfectly when you have a basic website you want to get up and open for the world to use quickly – like this Plasmic site. Sign up at [www.lowcodeunit.com](https://www.lowcodeunit.com)

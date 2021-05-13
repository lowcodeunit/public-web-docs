---
title: Getting Started - Create First Project
hide_title: true
sidebar_label: Create Project
keywords:
    - applications
    - azure
    - deployment
    - micro-frontends
hide_table_of_contents: true
---

# Creating your First Project 

At its simplest, Low Code Unit will allow you to host any web application that loads from an **index.html** file (and other default files like index.htm).  For this first step, we'll start with something simple, and then start adding to our application.

## Connect Git Provider

The first step is to click the <img src="/img/screenshots/connect-with-github-button.png" class="text-image" /> button, then select the organizations that you would like to allow Fathym LCU to have access to by clicking <img src="/img/screenshots/github-grant-button.png" class="text-image" />.  When ready, select the green authorize button to continue back to Low Code Unit.

![Connect with GitHub](/img/screenshots/connect-with-github.png)

:::note

If you don't have any organizations to authorize, you can easily create your first GitHub organization [here](https://github.com/organizations/plan) (for no cost).  Choose the Free plan, give your organization a unique name, enter your contact email, choose who the organization belongs to and then click `next`.  You can optionally choose to to add additional organization memebers or skip this step.  Submit the quick on boarding survey (it is not required, so you can just click submit), and your organization will be created.  Now restart the instructions on this page and an organization will show up for you to grant access to.

:::

## Setup Repository

Once the GitHub authorization is completed, head back to the Fathym LCU dashboard, where you will find a drop down with your organization options.  Select an organization, then a repository, and finally the branch you want the initial build/deployment setup against.

![Setup Repository](/img/screenshots/setup-repository.png)

:::note

If you don't have any existing repositories, or would like to create a new one you can do that from the LCU Dashboard during setup with the <img src="/img/screenshots/add-button.png" class="text-image" /> button.  Enter the name of the repository, click <img src="/img/screenshots/save-button.png" class="text-image" /> and once complete it should reload with your new repository selected.  At this point, a `main` branch is all you'll have.

:::

## Configure Project

The final step is to to configure the build information for the application.  For the purposes of this walkthrough you'll set the build script to `npm run build` and the output folder to `build`.  After this is all filled in, select the <img src="/img/screenshots/create-new-project-button.png" class="text-image" /> button to create the first project.

![Configure Project](/img/screenshots/configure-project.png)

## Next Steps

With your first project created, you'll now be able to simply check code into repository in order to view it on your new domain.  As a next step, we'll add some code to the repository and deploy it to your new endpoint.

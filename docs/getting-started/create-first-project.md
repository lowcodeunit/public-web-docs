---
title: Getting Started - Create First Project
hide_title: true
sidebar_label: Create Project
pagination_label: Getting Started - Create Project
keywords:
  - applications
  - azure
  - deployment
  - micro frontends
hide_table_of_contents: true
---

import connectWithGitHubBtn from '../../static/img/screenshots/connect-with-github-button.png';
import gitHubGrantBtn from '../../static/img/screenshots/github-grant-button.png';
import saveBtn from '../../static/img/screenshots/save-button.png';
import addBtn from '../../static/img/screenshots/add-button.png';
import launchBtn from '../../static/img/screenshots/launch-button.png';
import createNewProjectBtn from '../../static/img/screenshots/create-new-project-button.png';
import deployOpenSourceBtn from '../../static/img/screenshots/deploy-from-open-source-button.png';
import continueToDashboardBtn from '../../static/img/screenshots/continue-to-dashboard-button.png';
import forkRecipeBtn from '../../static/img/screenshots/fork-recipe-button.png';

# Creating your First Project

At its simplest, Fathym will host static sites and frontend frameworks of your choosing. In this step, we'll start simple, and then work on adding some other features to our project.

A project is used to organize your applications and other configurations. Internally at Fathym, we use projects to organize our different domains/products (that's right, we use all of this great tech to deliver all the Fathym experiences that you... well, experience).

Get started with the [create project wizard](https://www.fathym.com/dashboard/create-project), a streamlined way of configuring and setting up your project's applications, [routing](https://www.fathym.com/docs/guides/applications/routes), [processors](https://www.fathym.com/docs/guides/applications/processors) and automated build pipelines (DevOps).

![Create Project Wizard Select Recipe](/img/screenshots/create-project-wizard-select-recipe.png)

## Select Recipe

There are a few different ways to jump in with our recipes. Start with a custom project to bring your own code, automate builds, and easily deploy and deliver to your users. Looking for a pre-baked starting point? Select a recipe and choose an open source deployment to see the system in action. Choose to fork the recipe and generate your own source code to update and deploy for your users.

We'll take the open source deployment path using the Docusaurus recipe to start (though you should be able to follow along no matter which recipe you choose). Select the Docusaurus icon and you will land on the [Docusaurus recipe page](https://www.fathym.com/dashboard/create-project?recipeId=00000000-0000-0000-0000-000000000005).

![Create Project Wizard Docusaurus Recipe](/img/screenshots/create-project-wizard-docusaurus-recipe.png)

Now we can start with the <img src={deployOpenSourceBtn} class="text-image" /> button to get our recipe deployed.

![Create Project Wizard Deploying](/img/screenshots/create-project-wizard-deploying.png)

Once the loading screen is complete, select the <img src={continueToDashboardBtn} class="text-image" /> button and you'll be directed into the dashboard to check out what's been deployed.

![Dashboard Docusaurus Open Source](/img/screenshots/dashboard-docusaurus-open-source.png)

## The Project and Application

On the dashboard you'll see the project, where right away you can click the <img src={launchBtn} class="text-image" /> button to see the open source Docusaurus site deployed live. This showcases how Fathym can be used quickly for hosting NPM packages (as you can see if you dig into the application's processor settings).

![Processor Details NPM Docusaurus Latest](/img/screenshots/processor-details-npm-docusaurus-latest.png)

While this view into hosting is good, we want a way to explore the more in depth features of Fathym like automated build pipelines and deployments. We need to be able to make code changes, check them in and easily see our hard work in action. So we'll get back to the NPM package based deployments and when to use them later in the documentation.

:::note

An application is used to process a request made to your domains. Routes are defined for your projects and target requests to applications. There are several types of application processors (view package, redirect, proxy, oauth), each with their own unique way of processing a request to an application. You can read more about this in our [applications guide](../guides/applications/overview).

:::

## Forking a Recipe

Now let's use the same Docusaurus recipe to create a fork in our own organization that we can work with. Click on create new project to jump back into the wizard.

![Create New Project](/img/screenshots/create-new-project.png)

Once back on the [Docusaurus recipe](https://www.fathym.com/dashboard/create-project?recipeId=00000000-0000-0000-0000-000000000005), select the <img src={forkRecipeBtn} class="text-image" /> button to launch that flow. First you'll need to connect your GitHub account so we can fork the repo and setup the initial build pipeline.

![Create Project Wizard GitHub Auth](/img/screenshots/create-project-wizard-github-auth.png)

Once authorized, you'll land back in the recipe flow, ready to select the organization that you would like to fork the recipe into.

![Create Project Wizard Fork Organization](/img/screenshots/create-project-wizard-fork-org.png)

Select the organization, and when ready click deploy project. Like before, the loading screen will show, and once complete you can continue to the dashboard.  On the dashboard, you will now see both of your deployed projects and should be able to launch both (though they will be similar).

![Create Project Wizard Fork Organization](/img/screenshots/dashboard-docusaurus-open-source-and-fork.png)

:::note

If the fork version of the site does not display right away, you may be waiting on the build in GitHub to complete.  Wait a minute or two and try again and your site should show.

:::

### Updating the Site

Before heading further into what Fathym offers, let's try out a quick change to our newly forked repository.  Navigate GitHub to the organization you selected during the forking process.  Select the forked repo (public-web-docusaurus if you are following along with us) and clone it to your local environment.  We like to use VS Code to open our projects, but there other ways to update the file like the GitHub UI.

Once you have the project open, we can make a simple update to the `docusaurus.config.js` file.  Update the title, currrently set to 'My Site', to anything of your choosing.  Now save, commit, and push your changes.  A build is automatically kicked off in GitHub after pushing and once complete, you can launch your site again and see your new title on the page.

## Next Steps

That's it, you've deployed your first (and second) application with Fathym. Now it's time to roll up our sleeves, break out our coding sweatpants, and explore how Fathym will help automate DevOps, enable A/B testing, support QA efforts, and turn those coding sweatpants back into couch loungers.

![Couch Lounger](https://media.istockphoto.com/photos/retro-computer-office-nerd-at-home-office-picture-id617888054?k=20&m=617888054&s=612x612&w=0&h=mqzkJH9n_rSWtfYYFhb8blMFm53BJdxC2yy8J323RyA=)

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

import connectWithGitHubBtn from '../../static/img/screenshots/connect-with-github-button.png';
import gitHubGrantBtn from '../../static/img/screenshots/github-grant-button.png';
import saveBtn from '../../static/img/screenshots/save-button.png';
import addBtn from '../../static/img/screenshots/add-button.png';
import launchBtn from '../../static/img/screenshots/launch-button.png';
import createNewProjectBtn from '../../static/img/screenshots/create-new-project-button.png';

# Creating your First Project 

At its simplest, LowCodeUnit will host static sites and frontend frameworks of your choosing.  In this step, we'll start simple, and then work on adding some other features to our project.

## Connect Git Provider

The first step is to click the <img src={connectWithGitHubBtn} class="text-image" /> button, then select the organizations that you would like to allow Fathym LCU to have access to by clicking <img src={gitHubGrantBtn} class="text-image" />.  When ready, select the green authorize button to continue back to LowCodeUnit.

![Connect with GitHub](/img/screenshots/connect-with-github.png)

## Create Project

A project is used to organize your applications and other configurations.  Internally at Fathym, we use projects to organize our different domains/products (that's right, we use all of this great tech to deliver all the Fathym experiences that you... well, experience).  For this guide, let's create a project `My New Project`.

![Configure Project](/img/screenshots/create-project.png)

## Create Application

An application is used to process a request made to your domains.  Routes are defined for your projects and target requests to applications.  There are several types of application processors (view package, redirect, proxy, oauth), each with their own unique way of processing a request to an application.  Here, we'll work with a view package.  Let's start by creating a home page route, and to keep it simple we'll host the Fathym IoT Ensemble home page (a static site built with plain JS, HTML, and CSS).  Let's start by filling out the details where name and description are for your internal use, and the route is the path that, when matched, will handle the request. 

![Create Application - Details](/img/screenshots/create-application-details.png)

Next select the processor type `View Package`, leave the default file as `index.html` and select NPM for the type (currently NPM packages and GitHub action build artifacts are supported).  Now fill in the NPM package information for the IoT Ensemble Public Web, `@iot-ensemble/public-web` and for the version, let's set it to `latest` for now.  Here we are using the tags of the NPM packages to help us identify which version we want released.

![Create Application - Processor](/img/screenshots/create-application-processor.png)

We can see there is a lot more to look at with security and builds/source control, but we'll circle back to that in a bit.  For now, click save application and wait while the application is installed into your DFS (Distributed File System).  Now use the <img src={launchBtn} class="text-image" /> in the '/' project route card, and you'll see the IoT Ensemble public web on the developer domain provided.

:::note

**A note on routes** - Routes are prioritized by the complexity of their configuration.  As a simple example, say we have two routes defined, one for `/` and another for `/admin`.  A request to /admin would select the application with the same path route, all other requests would go to the application with path / (this would include other routes not defined like /products, /another/something, etc).

:::

## Next Steps

That's it, you've deployed your first application with Fathym's LowCodeUnit.  Now it's time to roll up our sleeves, break out our coding sweatpants, and explore how Fathym will help automate DevOps, enable A/B testing, support QA efforts, and turn those coding sweatpants back into couch loungers.

![Couch Lounger](https://media.istockphoto.com/photos/retro-computer-office-nerd-at-home-office-picture-id617888054?k=20&m=617888054&s=612x612&w=0&h=mqzkJH9n_rSWtfYYFhb8blMFm53BJdxC2yy8J323RyA=)

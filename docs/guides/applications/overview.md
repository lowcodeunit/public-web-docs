---
title: Application Overview
hide_title: true
sidebar_label: Overview
keywords:
    - applications
    - routes
    - processors
    - website
hide_table_of_contents: true
---

import launchBtn from '../../../static/img/screenshots/launch-button.png';

# Applications Overview

  Here, we'll work with a view package.  Let's start by creating a home page route, and to keep it simple we'll host the Fathym IoT Ensemble home page (a static site built with plain JS, HTML, and CSS).  Let's start by filling out the details where name and description are for your internal use, and the route is the path that, when matched, will handle the request. 

![Create Application - Details](/img/screenshots/create-application-details.png)

Next select the processor type `View Package`, leave the default file as `index.html` and select NPM for the type (currently NPM packages and GitHub action build artifacts are supported).  Now fill in the NPM package information for the IoT Ensemble Public Web, `@iot-ensemble/public-web` and for the version, let's set it to `latest` for now.  Here we are using the tags of the NPM packages to help us identify which version we want released.

![Create Application - Processor](/img/screenshots/create-application-processor.png)

We can see there is a lot more to look at with security and builds/source control, but we'll circle back to that in a bit.  For now, click save application and wait while the application is installed into your DFS (Distributed File System).  Now use the <img src={launchBtn} class="text-image" /> in the '/' project route card, and you'll see the IoT Ensemble public web on the developer domain provided.

:::note

**A note on routes** - Routes are prioritized by the complexity of their configuration.  As a simple example, say we have two routes defined, one for `/` and another for `/admin`.  A request to /admin would select the application with the same path route, all other requests would go to the application with path / (this would include other routes not defined like /products, /another/something, etc).

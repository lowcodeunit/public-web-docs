---
title: Getting Started - Global Edge Network
hide_title: true
sidebar_label: Global Edge Network
keywords:
    - applications
    - azure
    - deployment
    - micro frontends
hide_table_of_contents: true
---

import deployLatestBtn from '../../static/img/screenshots/deploy-latest-button.png';

# Global Edge Nework (GEN)

It's nice to have a project up and running in minutes, but simple hosting isn't everything.  We want to reliably deliver our project in a secure, and scalable way.  The LowCodeUnit Global Edge Network (GEN) will provide your projects with custom domains, free and automatic SSL certificates, as well as a globally scaled content delivery network.

## Custom Domains

Most likely you're not trying to host your project on flippity-floppity-floop.lowcodeunit.com, but rather you're looking to host on your own custom domain.  Custom domains provide your users with a more comfortable browsing experience for your project.  While you could use the provided domain we gave you to get started, most likely you are wanting to bring your own domain.  There are many places to get a domain, one of the easiest is at [GoDaddy](https://www.godaddy.com).

### Bring Your Own Domain

Getting your project running on a custom domain is straight-forward.  You will need access to your domain's DNS management system (in our example here, GoDaddy) and then you'll be ready to go.

Click the <img src={deployLatestBtn} class="text-image" /> button to open the settings page for the project.

![Configure project settings](/img/screenshots/configure-project-settings.png)

We'll need to create a CNAME record that maps our preferred subdomain (apex domains are not currently supported for projects) to the appropriate Global Edge Network (GEN) endpoint for your project.  You can grab your GEN endpoint from the UI just under the host input.

![Configure project host input](/img/screenshots/configure-project-host-input.png)

Use this information to complete your DNS management form for a CNAME record where the **Host** is your subdomain (`www` in our example), the **Point To** value is the GEN endpoint from the LowCodeUnit UI (should start with `fathym-cloud-prd-lcu-customers-`), and the **TTL** is a value of your choosing.  Here is an example setup in GoDaddy.

![GoDaddy CNAME Add](/img/screenshots/godaddy-cname-add.png)

Click save to capture the changes in the DNS management system, then come back to the LowCodeUnit UI and save the project settings.  Once saved, the custom domain will be registered with the GEN, and your project will be up and running on it, instead of the LowCodeUnit provided domain.

:::note

If your subdomain is already running a site and you need a no downtime migration, please contact support so we can help you out.  We will be bringing no downtime custom domain setup to the UI in a future release.  

:::

<!-- ### Purchase Domains

Purchase domains with GoDaddy

### Managed Domains 

Connect with our provided DNS servers, and let fathym's DNS VirtDev control your DNS in a streamlined fashion-->

## Managed SSL Certificates

As a part of the custom domain setup, LowCodeUnit also manages your SSL certificates from creation through renewal.  No longer worry about keeping your SSL certificates up to date, and let us handle it for you.

### Trusted SSL Partners

When leveraging LowCodeUnit for your SSL certificates, you can rest easy knowing that our trusted SSL partners are ensuring the integrity and security of your certificates.

#### Microsoft Azure

Leveraged for SSL certificates for many of our different deployment scenarios, Microsoft Azure is a world-class leader for many development needs.  [Learn more about SSL with Azure](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-certificate).

<!-- #### Let's Encrypt -->

## Content Delivery

The final piece of the Fathym GEN is our content delivery system.  While the full set of features is outside the scope of this document, the Fathym Distributed File System (DFS) is a cutting-edge system for delivering content and micro frontends at scale.  

### Fathym Distributed File System (DFS)

Built to deliver your content at global points of access closest to your users, while also adding dynamic file processing capabilities through file modifiers.  File modifiers allow you to do things like add 3rd party software libraries at runtime, support pre-rendering workflows for your dynamic content and single-page applications, and can support different types of content manipulation like minification, compression and content inlining.

To power the GEN, we need a system to store and process the files, this is where the DFS comes in.  Different than your standard file system, the DFS provides an easy way to share enterprise content across projects and is the backbone of Fathym's micro-frontend architecture.

## Next Steps

This concludes our getting started journey and gives you what you need to bring your complete applications to bear.  

In this form, you have to bring your own Authentication/Authorization strategies, and the complete application in as a single project.  In our next section, we will dive into LowCodeUnit's Micro-frontend capabilities, and how you can leverage more from the LCU Runtime to accelerate your path to complete projects.

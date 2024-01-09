---
slug: /
title: Introduction - Overview
hide_title: true
sidebar_label: Introduction
keywords:
    - websites
    - applications
    - azure
    - micro frontends
hide_table_of_contents: true
---

# Overview

Fathym Platform is an out-of-the-box application deployment platform and Fathym’s central hub for assembling, integrating and launching cloud-based applications. The platform makes it easy for users to deploy applications and integrate with APIs: Whether APIs for databases, content management systems, or native integration with Fathym’s IoT Ensemble and Habistack APIs.

The platform has three interfaces: a web application, CLI and the new Thinky AI bot.

Fathym gives you a complete DevOps (CI/CD) workflow, pre-configured automations and open-source templates for assembling data-driven and cloud-based web applications, without needing any cloud or web development expertise. Get started with out-of-the box launch pads and easily fork templates to GitHub and make them your own or import custom code with GitHub or NPM.

Here we will provide a quick overview of Fathym’s default application architecture and hierarchy.

## Default Fathym Structure

Fathym’s default structure enables you to assemble, deploy and host web applications in a highly modular fashion.

![Baserow API App](https://www.fathym.com/img/fathym_application_structure.png)

Let’s quickly go through the primary elements of this architecture. 

**Enterprise:** An Enterprise is what makes up your digital organization in Fathym. It is the default structure and all the projects, apps, configs and pipelines that can populate that structure. All the components and relationships that make up your enterprise are represented as code in a graph database. This is referred to as **Enterprise as Code (EaC)** – more on that later. 

**Projects:** A project is a web application or website that consists of one or a series of routes. Projects are assigned a domain and additional routes deployed to a project are hosted as sub directories of that domain. Users can register a custom domain for their project.

**Routes:** A route is a path that handles requests to a defined part of a web project and delivers it to end users. Different GitHub repositories or NPM packages can be deployed as routes (or sub directories) in a web project, facilitating a modular application architecture. In Fathym’s default architecture, each route has its own individual source control and build pipeline.

**Child Applications:** Under each route or sub directory that is deployed in a project, many child applications can be deployed. Each child application can have its own individual source control and build pipeline. For example, under the route example.com/blog, you can host blog pages under that route as example.com/blog/blog1 and example.com/blog/blog2 etc.

## Enterprise as Code and Low Code Units

There are two fundamental elements that underpin Fathym’s architecture: Enterprise as Code (EaC) and Low Code Units (LCUs).

### EaC

Enterprise as Code (EaC) is a directed graph database and command structure that defines and stores everything that makes up your Fathym enterprise.

A Fathym enterprise is essentially a user’s Fathym account. It is the default structure and system that greets new users and the portfolio of any projects and applications that are deployed, hosted and stored in this structure. 

Enterprise as Code is the all-in-one map and data and configuration store of the resources, services and workflows that make up your Fathym enterprise – the command structure that defines all the components and relationships that make up your software delivery system, such as cloud infrastructure configurations, DevOps workflows and identity management. 

### LCU

Low Code Units (LCUs) are essentially curated code packages that can be deployed to your enterprise, composable automations of all sorts of software components, configurations and services. These flexible packages are versatile and can range from instructions for creating repositories and scaffolding code, to installing API configurations or deploying cloud resources or app templates. They are building blocks for efficiently assembling and deploying applications in the cloud.

For example, there are LCUs for launching SPA starter apps, for setting up, scaffolding and deploying new repositories, for installing Google Tag Manager to an app, and for deploying containerized applications, CMS or databases on Azure. Individual LCU components are also combined to create launch pads – comprehensive and often full stack automations that drastically simplify the process of assembling and launching cloud-based applications for various application use cases. When LCUs are invoked, they are committed to the EaC.

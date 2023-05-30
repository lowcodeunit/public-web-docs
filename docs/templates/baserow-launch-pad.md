---
title: Getting Started - Baserow Launch Pad
hide_title: true
sidebar_label: Baserow Launch Pad
keywords:
    - websites
    - applications
    - azure
    - cli
hide_table_of_contents: true
---

# Baserow Launch Pad Tutorial 

![Baserow Starter](https://www.fathym.com/img/fathym-baserow-starter.png)

[Baserow](https://baserow.io/) is an open-source no-code database tool and Airtable alternative that allows users to create their own PostreSQL database without technical expertise. If you can use a spreadsheet, you can use Baserow.

Baserow offers the flexibility to self-host your database, giving you autonomy and control over your data. As an alternative to spreadsheets, the real value in databases is in how they can power fully functional web applications. This is where Fathym comes in.

Fathym offers an automated launch pad that consists of a frontend starting point for a Material UI React site that can be connected via a pre-configured API proxy to a self-hosted instance of Baserow. Fathym gives users a streamlined development and CI/CD workflow to accelerate custom development and automate the deployment of frontends.

You can use either the platform user interface or CLI. We’ll guide you through both options.

:::info

**Prerequisite:** You have a self-hosted baserow. 

:::

## User Interface

[Sign up](https://www.fathym.com/dashboard/) for a free Fathym account on our website or [sign in](https://www.fathym.com/dashboard/) if you already have one. In the main dashboard click 'Add Project' and you will be navigated to Fathym’s templates. You should see the Fathym Baserow Starter. Click ‘Launch.’

![Baserow Starter](https://www.fathym.com/img/fathym-baserow-launcher-ui.png)

You will be prompted to connect to your GitHub account if you haven’t already. You will then be asked to select one of your available GitHub organisations and ‘Deploy Project.’ This will fork a repository to your GitHub organization, set up GitHub Actions for source control, build pipelines and release management and deploy the launch pad to your Fathym enterprise. 

Once you have completed this step, you will be directed to the main dashboard. It usually takes a couple of minutes for the build to complete, you can see its progress in the activity feed of your dashboard. You can also click ‘Open Repository’ to open the forked repository in your browser or click ‘Build Details’ to view the GitHub Actions running the build.

## CLI

If you wish you can also deploy the launch pad through the Fathym CLI. There are 3 steps involved:

1.	Install Fathym CLI
2.	Authorize GitHub
3.	Deploy launch pad 

:::note

If you already have a Fathym CLI set up and connected to GitHub, skip to step 3

:::

## Step 1 – Install Fathym CLI

To install the CLI, in your IDE of choice open a new terminal and run the following command:

```cli
npm install @fathym/cli@latest –g
```

This runs an NPM global install of the Fathym CLI. 

To authenticate the Fathym connection for the CLI give the command:

```cli
fathym auth
```

This will open your browser and prompt you to sign in. This will allow you to connect to your Fathym enterprise.

To view a list of your available enterprises, run:

```cli
fathym enterprises list
```

Then set the active enterprise by selecting your enterprise from the list and using the following command (if you have just created an account, there will only be one option):

```cli
fathym enterprises set
```

This will set the enterprise that you will work with and manage. If you are just starting with Fathym, this will be the lookup for your personal enterprise.

:::note

The previous Fathym commands will only need to be run again if you lose your authentication or want to change the enterprise you are managing. Otherwise, they do not need to be repeated

:::

## Step 2 – Authorize GitHub

Now you need to connect Fathym to your GitHub organization of choice. The launch pad for Alfresco Community will fork a repository to your organization and set up GitHub Actions for source control, build pipelines and release management. 

To connect Fathym to GitHub, run this command.

```cli
fathym git auth
```

This will open a new window for GitHub authorization where you can determine which organizations Fathym has access to (you may have to sign up if you have not before). Grant access to the organizations you would like us to help you manage and automate.

:::note

You can run this command anytime you want to adjust the authorizations in GitHub for new or existing organizations.

:::

## Step 3 – Deploy launch pad

Now it’s time to install the launch pad for Baserow. Run the following command:

```cli
fathym lcu @fathym-it/lcu-baserow-starter
```

This will fork a repository to your GitHub organization, set up GitHub Actions for source control, build pipelines and release management and deploy the launch pad to your Fathym enterprise.

To view the project in your Fathym enterprise, open the Fathym dashboard and navigate to the project that was created for Baserow:

```cli
fathym enterprises dashboard
```

## Assess what’s been deployed

In your dashboard you will see a list of any projects deployed to your Fathym enterprise.

Click the edit button beside the Baserow project.

![Baserow Project Routes](https://www.fathym.com/img/baserow-project-routes.png)

You can click the edit buttons on each route to see what’s going on behind the scenes or the launch buttons to open a route on your browser.

The following modular routes have been deployed to a domain that was automatically generated:

A simple landing page (on route /) with information about this launch pad. This was deployed from the [repository](https://github.com/fathym-it/lcu-baserow-starter) that was forked to your GitHub organization. Any time you commit changes to your code in this repository it will trigger a GitHub Actions build and will update the project hosted on Fathym.

An API proxy is configured (on route /api) to securely connect your Fathym enterprise to your self-hosted Baserow instance. We will do some additional configuration in the next step.

A Material UI React site (on route /baserow) that is a starting point for custom development powered by Baserow. This was deployed from an NPM Package.

## Integrate Fathym and Baserow

Now it’s time to connect your Fathym enterprise to your self-hosted Baserow database.

As we just saw, included in the project is an API proxy that is already partially configured to connect Fathym hosted frontends with a Baserow backend, whether it’s hosted on Heroku, Docker, AWS, Azure or any other platform. 

To complete configuration of the API proxy, you must obtain your Baserow authorization API token.

When you have this, click the edit button for the API proxy on the /api route.

![Baserow API App](https://www.fathym.com/img/baserow-api-app.png)

Input the Baserow authorization API token in the API Root field and click save.

Your Fathym enterprise and Baserow instance are now integrated. Now you can develop and deploy Baserow powered applications that pull in and display content that is managed in your Baserow database.

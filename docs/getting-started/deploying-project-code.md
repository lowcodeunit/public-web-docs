---
title: Getting Started - Deploy Project Code
hide_title: true
sidebar_label: Deploy Code
keywords:
  - applications
  - azure
  - deployment
  - micro-frontends
hide_table_of_contents: true
---

import saveBtn from '../../static/img/screenshots/save-button.png';
import addBtn from '../../static/img/screenshots/add-button.png';

# Deploying Code

With the initial project created, and an application in place, let's swap out the IoT Ensemble site for a public web page of your own. Keeping with the theme, we'll start with a simple JS, HTML, CSS site, though any modern static site (Docusaurus, eleventy...) or frontend framework (Angular, React, Vue...) approach will work.

## Automated DevOps

To build modern web projects, we'll need modern DevOps workflows. This means source control & builds & deployments, oh my. Let's setup the DevOps for our project now.

## Source Control

Head back in to edit the application under the '/' route and enable the `Build & Source` toggle. Here you will find a drop-down with GitHub organization options. Select any organization you want, we are going to use our user organization to get started. If the organization you selected already has a repository, you can select it or create a new one. We created a new repository named `my-first-project-public-web`. Finally, select the branch you want the initial build/deployment setup against (`main` if your following along with us).

![Setup Repository](/img/screenshots/setup-repository.png)

:::note

If you don't have any existing repositories, or would like to create a new one you can do that from the LCU Dashboard during setup with the <img src={addBtn} class="text-image" /> button. Enter the name of the repository, click <img src={saveBtn} class="text-image" /> and once complete it will reload with your new repository selected. At this point, a `main` branch is all you'll have.

:::

## Configure NPM

In order for your application to be deployable, you need to own the organization used in the package.json name (milehighjackal in my case) at npmjs.com too.  It is good practice that any organization created in GitHub also be created in npmjs and that you create an npmjs organization with the same name as your GitHub user.  To do this, navigate to [npmjs.com](npmjs.com) and signup.  You can use any username you prefer, we recommend using the same username as GitHub plus '-dev'.  This ensures you can create an organization equal to your username from GitHub for use in deploying packages scoped to your user.  Navigate to [create an organization](https://www.npmjs.com/org/create) and create an organization with the same name used in the first part of the package.json name (without the @ symbol).

![NPMJS Create Organization](/img/screenshots/npmjs-create-organization.png)

:::note

If you used the same username in GitHub and npmjs, then you can click the **Convert** button in npmjs while creating a new organization to change your username to an organization and update your username (add '-dev').

:::

While we are in npmjs, let's go ahead and create and make note of a personal access token (PAT) for use in publishing your NPM packages.  In the top right of npmjs.com, while logged in, click on your profile icon and then Access Tokens.

![NPMJS Account Popout Access Tokens](/img/screenshots/npmjs-account-popout-access-tokens.png)

Now choose to **Generate New Token**, on the next screen make sure to select `Publish` as the type.  After it has been generated, make sure to copy the token and save it temporarily on your computer.  We'll use this key in the next step to configure our build pipeline. 

<!-- TODO:  Move to its own article...  Working with organnizations...    
:::note

If you don't have any organizations to authorize, your default user based organization will be available or you can easily create your first GitHub organization [here](https://github.com/organizations/plan) (for no cost).  Choose the Free plan, give your organization a unique name, enter your contact email, choose who the organization belongs to and then click `next`.  You can optionally choose to add additional organization members or skip this step.  Submit the quick onboarding survey (it is not required, so you can just click submit), and your organization will be created.  Now restart the instructions on this page and an organization will show up for you to grant access to.

::: -->

## Build Pipeline

Now we can configure the build pipeline for our repository. In order to match the NPM view package we already configured, let's choose `NPM - Release` here as well, so that our build is setup to publish an NPM package with our application contents. Then we can enter `npm run deploy` for our deploy command, `npm ci` for the install command, leave output empty, and then grab your NPM personal access token that we copied in the last step and drop it in the appropriate field.  Click `Save Application` and behind the scenes your DevOps workflows will be setup to automate builds.

![Setup Build Pipeline](/img/screenshots/setup-build-pipeline.png)

## Setup Application

Go ahead and clone your git repository to your local environment so that you can edit it. While you can use any text editor to make changes, we recommend using an Integrated Development Environment (IDE) to make edits. A great option, available across platforms, is [VS Code](https://code.visualstudio.com/download). Once you have your repository cloned you can start to make edits. First, we need to get our package.json created by running `npm init -y` ([see here](/blog/node-blog) for information on installing node so you can use the npm command).

Let's clean up the package.json file that was generated so that it is ready to publish. Update the name to include the organization from above (I'm using MileHighJackal, you should replace that with your username or organization), change the version to `0.0.0`, and we'll update the main file to `index.html`.  We can also add a starting point `deploy` script for the build pipeline as shown below.

```json
{
    "name": "@milehighjackal-dev/my-first-project-public-web",
    "version": "0.0.0",
    "description": "",
    "main": "index.html",
    "scripts": {
        ...
        "deploy": "npm version patch && npm publish --access public",
        ...
    }
}
```

Open up the terminal now in the root folder of your application and run the following command:

```

npm install

```

## Code Application

Create a new index.html file at the root alongside the package.json file. Fill the contents of the index.html file with something like the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My First LCU Application</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <h1>My First LCU Application</h1>
  </body>
</html>
```

Finally add a .gitignore file at the root with a single line of content to ignore any node modules you may add in the future.

```console
/node_modules
```

Your finished package.json file and repository should look something like this:

![First Project Package JSON](/img/screenshots/first-project-package-json.png)

## Deploy Application

Check in and push the changes to your repository, and a new build will kick off that will complete successfully. Once successful, we'll need to jump back into the LowCodeUnit Dashboard, and adjust our Public Web application's procesor details to leverage the new package.  Update the NPM Package with the value from package.json name, and then press save.  After save is complete, you can go back in and see that the current version was updated to the latest version from your new automated DevOps.

![Update Application Processor](/img/screenshots/update-application-processor.png)

Now that we have our application configured and deployed (deploy occurred on save after editing an application), click on <img src="/static/img/screenshots/launch-button.png" class="text-image" /> for your project, route or application to test it out.

![My First Project Running](/img/screenshots/my-first-project-running.png)

---
title: Introduction - Overview
hide_title: true
sidebar_label: Overview
keywords:
    - websites
    - applications
    - azure
    - micro frontends
hide_table_of_contents: true
---

# Welcome to Fathym LowCodeUnit



### Configure NPM

In order for your application to be deployable, you need to own the organization used in the package.json name (milehighjackal in my case) at npmjs.com too.  It is good practice that any organization created in GitHub also be created in npmjs and that you create an npmjs organization with the same name as your GitHub user.  To do this, navigate to [npmjs.com](https://npmjs.com) and signup.  You can use any username you prefer, we recommend using the same username as GitHub plus '-dev'.  This ensures you can create an organization equal to your username from GitHub for use in deploying packages scoped to your user.  Navigate to [create an organization](https://www.npmjs.com/org/create) and create an organization with the same name used in the first part of the package.json name (without the @ symbol).

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

## Setup Application

Go ahead and clone your git repository to your local environment so that you can edit it. While you can use any text editor to make changes, we recommend using an Integrated Development Environment (IDE) to make edits. A great option, available across platforms, is [VS Code](https://code.visualstudio.com/download). Once you have your repository cloned you can start to make edits. First, we need to get our package.json created by running `npm init -y` (<a href="https://www.lowcodeunit.com/blog/node-blog" target="_blank">see here</a> for information on installing node so you can use the npm command).

Let's clean up the package.json file that was generated so that it is ready to publish. Update the name to include the organization from above (I'm using milehighjackal, you should replace that with your username or organization), change the version to `0.0.0`, and we'll update the main file to `index.html`. We can also add a starting point `build` and `deploy` script for the build pipeline as shown below.

```json
{
    "name": "@milehighjackal/my-first-project-public-web",
    "version": "0.0.0",
    "description": "",
    "main": "index.html",
    "scripts": {
        ...
        "deploy": "npm run build && npm publish --access public",
        "build": "npm version patch",
        ...
    }
}
```

Open up the terminal now in the root folder of your application and run the following command:

```

npm install

```

Next add a .gitignore file at the root with a single line of content to ignore any node modules you may add in the future.

```
/node_modules
```

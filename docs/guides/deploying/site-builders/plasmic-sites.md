---
title: Hosting Plasmic Sites
hide_title: true
sidebar_label: Plasmic Sites
pagination_label: Guides - Deploying - Site Builders - Plasmic Sites
keywords:
    - plasmic
    - app
    - website
    - hosting
    - easy
hide_table_of_contents: true
---

import launchBtn from '../../../../static/img/screenshots/launch-button.png';

# Hosting Plasmic Sites

You’ve built a new Plasmic website and now you need to get it online. Where do you host it? What's the easiest? This is where Fathym saves the day! Follow these steps to get your Plasmic site up and running in minutes. 

![plasmic preview](https://www.fathym.com/img/screenshots/designs-that-adapt-preview.png)

:::note Prerequisites
- When publishing your site from Plasmic Studio, use the CodeGen mode and publish to GitHub. 
:::

You have two options when hosting with Fathym: GitHub and NPM.

1. [Host your site from GitHub.](./plasmic-sites#host-github)
2. [Host your site from NPM.](./plasmic-sites#host-npm)

## Host your site from GitHub {#host-github}

## Step 1: Update YML file

:::info Update the plasmic-push.yml file
- When viewing your repo in GitHub, click on the `.github/workflows` folder and then select the `plasmic-push.yml` file.
- At the bottom of the file, add the following lines, and then commit the file:

 ```jsx
 # publish github artifacts
      - name: Archive production artifacts
        uses: actions/upload-artifact@v2
        with:
          name: jeremytomlinson-designsthatadapt
          path: ${{ steps.build.outputs.publish_dir }}

- Replace `jeremytomlinson-designsthatadapt` with your project settings. Use your `githubUsername-nameOfgithubRepo` 
:::

## Step 2: Fathym Hosting with GitHub

1. Create a Fathym Account. Sign up at https://www.fathym.com.  

2. After signup, authorize with GitHub and select which organization(s) to make available inside of Fathym.

3. On the Projects page, select `Add Project`. 

4. In Fathym, select your application and fill out the `Add App` form. Note: the route is the path your app will be served on. For example, https://shared.fathym.com/plasmicsite. In this case, the **/plasmicsite** is the route. You can choose any route for your web project. In addition, the same web project can be hosted multiple times on different routes if desired. This is especially useful for QA and Testing.

6. In the `Processor Details` section, select the type of project. In this case we're using a `View Package`. 

7. Use "index.html" as the Default file.

8. For the second Type field, select `GitHub`.  

9. Select your Organization, Repository, Build Path, and Build Number and click `Save Application`. 
    - Build Path: Select `plasmic-push.yml`
    - Build Number: You can select any build of your repository. It doesn't have to be the latest build. If you're not sure what build to use, enter `latest`.

10. Your Plasmic site is now ready to rock! Click the Launch icon <img src={launchBtn} class="text-image" /> to view your site hosted on fathym.com. 

---

## Host your site from NPM {#host-npm}

## Step 1: Create and Publish your NPM Package

1. In the package.json file, change the name to be what you want the NPM package to be named. For example:

```console
"name": "@fathym/public-web"
```

2. Next, copy/paste the following in the "scripts" section:

```console
"deploy": "npm version patch && npm run deploy:app",
"deploy:app": "npm version patch --prefix public && npm run export && npm publish ./out --access public",
"export": "next build && next export",
```

3. Create another package.json file in the /public directory. For it's contents, copy/paste the name and version from your main package.json file. For example:

```console
{
  "name": "@fathym/public-web",
  "version": "0.1.0"
}
```

Replace "@fathym/public-web" with your NPM package name and use whatever version you want.

:::note
Make sure both of the package.json files have the same 'name' and 'version'.
:::

4. In your Visual Studio Code terminal, run "npm run deploy" to create and deploy the NPM package to https://www.npmjs.com/. It normally takes a few minutes for your NPM package to appear on https://www.npmjs.com/

## Step 2: Fathym Hosting with NPM

1. Create a Fathym Account. Sign up at https://www.fathym.com.  

3. On the Projects page, select `Add Project`. 

4. In Fathym, select your application and fill out the `Add App` form. Note: the route is the path your app will be served on. For example, https://shared.fathym.com/plasmicsite. In this case, the **/plasmicsite** is the route. You can choose any route for your web project. In addition, the same web project can be hosted multiple times on different routes if desired. This is especially useful for QA and Testing.

6. In the `Processor Details` section, select the type of project. In this case we're using a `View Package`. 

7. Use "index.html" as the Default file.

8. For the second Type field, select `NPM`.  

9. Enter your npm package (@fathym/public-web) and the version. If you're not sure what version to use, enter `latest`.

10. Your Plasmic site is now ready to rock! Click the Launch icon <img src={launchBtn} class="text-image" /> to view your site hosted on fathym.com. 

Start a free trial at https://www.fathym.com/dashboard

## Learn More
Fathym is an all-in-one platform for running web projects. This means you can use Fathym for hosting most, if not all, of your web projects. Fathym is simple to use and set up which works perfectly when you have a basic website you want to get up and open for the world to use quickly – like this Plasmic site. Sign up at https://www.fathym.com

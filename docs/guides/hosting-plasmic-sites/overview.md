---
title: Hosting Plasmic Sites
hide_title: true
sidebar_label: Overview
keywords:
    - plasmic
    - app
    - website
    - hosting
    - easy
hide_table_of_contents: true
---

import launchBtn from '../../../static/img/screenshots/launch-button.png';

# Hosting Plasmic Sites

You’ve built a new Plasmic website and now you need to get it online. Where do you host it? What's the easiest? This is where LowCodeUnit saves the day! Follow these steps to get your Plasmic site up and running in minutes. 

![plasmic preview](/img/screenshots/designs-that-adapt-preview.png)

:::info Prerequisites
- When publishing your site from Plasmic Studio, use the CodeGen mode and publish to GitHub. 
:::

:::caution Update the plasmic-push.yml file
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

## Let's Get Started

1. Create a LowCodeUnit Account. Signup at https://www.lowcodeunit.com.  

2. After signup, authorize with GitHub and select which organization(s) to make available inside of LowCodeUnit. 

3. On the Projects page, select `Create New Project`. 

4. In LowCodeUnit, select your application and fill out the `Create an Application` form. Note: the route is the path your app will be served on. For example, https://shared.lowcodeunit.com/plasmicsite. In this case, the **/plasmicsite** is the route. You can choose any route for your web project. In addition, the same web project can be hosted multiple times on different routes if desired. This is especially useful for QA and Testing.

6. In the `Processor Details` section, select the type of project. In this case we're using a `View Package`. 

7. Use "index.html" as the Default file.

8. For the second Type field, select `GitHub`.  

9. Select your Organization, Repository, Build Path, and Build Number and click `Save Application`. 
    - Build Path: Select `plasmic-push.yml`
    - Build Number: You can select any build of your repository. It doesn't have to be the latest build. If you're not sure what build to use, enter `latest`.

10. Your Plasmic site is now ready to rock! Click the Launch icon <img src={launchBtn} class="text-image" /> to view your site hosted on lowcodeunit.com. 

Start a free trial at https://www.lowcodeunit.com

## Learn More
LowCodeUnit is an all-in-one platform for running web projects. This means you can use LowCodeUnit for hosting most, if not all, of your web projects. LowCodeUnit is simple to use and setup which works perfectly when you have a basic website you want to get up and open for the world to use quickly – like this Plasmic site. Sign up at https://www.lowcodeunit.com

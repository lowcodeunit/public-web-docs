---
title: Easily Host Power BI Reports
hide_title: true
sidebar_label: PowerBI Reports
pagination_label: Guides - Deploying - Reporting - PowerBI Reports
keywords:
    - applications
    - powerbi
    - reports
    - easy
hide_table_of_contents: true
---

import launchBtn from '../../../../static/img/screenshots/launch-button.png';

# Easily Host Power BI Reports

You’ve built a new Power BI report and now you need to get it online. I’ve used Power BI’s Report Server and it’s a nice option if you just need to share the report. However, most times I need to embed the report in a webpage with other information before I can share it. In that case, I normally use Power BI’s <code>iframe</code> option to embed the report in a webpage. 

Now the question is: Where do I host it? This is where Fathym saves the day! Follow these steps to get your Power BI webpage up and running in minutes. 

![power bi report](/img/screenshots/powerbi-report.jpg)

:::info Prerequisites
- You need GitHub and npm accounts. 
- The GitHub organization that contains your repository will need to be setup as an organization in npm. For example, https://www.npmjs.com/org/your-github-organization-name. This is needed for Fathym's automated build and release process. 
- Create an npm access token.
:::

1. Create a Fathym Account. Signup at https://www.fathym.com.  

2. After signup, authorize with GitHub and select which organization(s) to make available inside of Fathym. 

3. On the Projects page, select `Create New Project`. 

4. As of today, Fathym needs a npm package to host your web project. If your web project is already on npm, continue to step 5. If your web project is not on npm, follow these steps and Fathym will easily create and deploy your npm package from your GitHub repo in a couple of minutes. It's fast and easy.
    
    >Follow these steps to have Fathym create/deploy your npm package:
    >- Click the button to add an Application. 
    >
    >- Before you fill out the `Create an Application` form, click on the DevOps tab and click the `Create New` button. This is where we'll configure the automated build and release process for your GitHub repository.
    >
    >- In the Source Control form, select your GitHub organization, the repository, and any branches you’d like to host in Fathym. Also select your repo’s Main Branch. 
    >
    >- In the Build Pipeline form, select `NPM - Release` for the DevOps Action. Enter a name for the DevOps Action and then enter the Deploy Command and Install Command. If needed for your web project, enter the Output Folder. And finally, enter your npm token and click `Save Application`. 
    >
    >- Behind the scenes, Fathym is using GitHub Actions to build your repository and deploy your package to npm. Wait a couple of minutes for the GitHub Actions to complete. 
    >
    >- Verify your npm package is available at npmjs.com. For example, https://www.npmjs.com/package/@lowcodeunit/lcu-charts-common. 
    
5. Once your web project is hosted on npmjs.com, continue here. In Fathym, select your application and fill out the `Create an Application` form. Enter the name, description, and route for your application. 
    - The route is the path your app will be served on. For example, https://shared.fathym.com/powerbi. In this case, the **/powerbi** is the route. You can choose any route for your web project. In addition, the same web project can be hosted multiple times on different routes if desired. This is especially useful for QA and Testing.

6. Select the type of project. In this case we're using a `View Package`. 

7. For the second Type field, select `NPM`.  

8. Enter your npm package name and the desired version and click `Save Application`. 
    - Note: you can select any version of the npm package. Furthermore, you can create applications for multiple versions of the same npm package. This is helpful when collaborating with others.

9. Your web project is now ready to rock! Click the Launch icon <img src={launchBtn} class="text-image" /> to view your web project hosted on fathym.com. 

Start a free trial at https://www.fathym.com

![power bi report](/img/screenshots/powerbi-dashboard.png)

## Learn More
Fathym is an all-in-one platform for running web projects. This means you can use Fathym for hosting most, if not all, of your web projects. Fathym is simple to use and setup which works perfectly when you have a basic website you want to get up and open for the world to use quickly – like this Power BI report. Sign up at https://www.fathym.com

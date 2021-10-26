---
title: Easily Host Power BI Reports
hide_title: true
sidebar_label: Setup
keywords:
    - applications
    - powerbi
    - reports
    - easy
hide_table_of_contents: true
---

# Easily Host Power BI Reports

You’ve built a new Power BI report and now you need to get it online. I’ve used Power BI’s Report Server and it’s the best option if you just need to share the report. However, most times I need to embed the report in a webpage with other information before I can share it. In that case, I normally use Power BI’s <code>iframe</code> option to embed the report in my webpage. 

Now the question is: Where do I host it? This is where LowCodeUnit saves the day! Follow these steps to get your webpage up and running in minutes. 

:::info
Prerequisites: You need GitHub and npm accounts. In addition, the GitHub organization that contains your repository will need to be setup as an organization in npm. For example, https://www.npmjs.com/org/your-github-organization-name. This is needed for LowCodeUnit's automated build and release process.
:::

1. Create a LowCodeUnit Account. Signup at https://www.lowcodeunit.com.  

2. After signup, authorize with GitHub and select which organization(s) to make available inside of LowCodeUnit. 

3. On the Projects page, select `Create New Project`. 

4. As of today, LowCodeUnit needs a npm package to host your web project. If your web project is not already on npm, follow these steps and LowCodeUnit will create and deploy your npm package from your GitHub repo. 

    - Click to add a new Application. 

    - Before you fill out the `Create an Application` form, click on the DevOps tab and click the `Create New` button. 

    - In the Source Control form, select your GitHub organization, the repository, and any branches you’d like to host in LowCodeUnit. Also select your repo’s Main Branch. 

    - In the Build Pipeline form, select `NPM - Release` for the DevOps Action. Enter a name for the DevOps Action and then enter the Deploy Command and Install Command. If needed for your web project, enter the Output Folder. And finally, enter your NPM Token and click `Save Application`. 

    - Behind the scenes, LowCodeUnit is using GitHub Actions to build your repo and deploy your package to npm. Wait a couple of minutes for the GitHub Actions to complete. 

    - Verify your npm package is available at npmjs.com. For example, https://www.npmjs.com/package/@lowcodeunit/lcu-charts-common. 

5. In LowCodeUnit, select your application and fill out the `Create an Application` form. Enter the name, description, and route for your application. The route is the path your app will be served on. For example, https://shared.lowcodeunit.com/powerbi. In this case, the /powerbi is the route. 

6. Select the type of project. In this case we're using a `View Package`. 

7. For the second Type field, select NPM.  

8. Enter your npm package name and the desired version and click `Save Application`. 

9. Your app is now ready to rock! Click the Launch icon to view your web project hosted on lowcodeunit.com. 

My webpage with the Power BI report was hosted on LowCodeUnit in about 10 minutes. I recommend LowCodeUnit and will be using it to host all my Power BI reports in the future. Start a free trial at https://www.lowcodeunit.com

![power bi report](/img/screenshots/powerbi-dashboard.png)

## Learn More
LowCodeUnit is an all-in-one platform for running web projects. This means you can use LowCodeUnit for hosting most if not all your web projects. LowCodeUnit is simple to use and setup which works perfectly when you have a basic website you want to get up and open for the world to use quickly – like this Power BI report.

:::note
We're just getting started with LowCodeUnit. Like we mentioned above, as of today, LowCodeUnit needs a npm package to host your web project. However, in the future you'll be able to host web projects from GitHub, as well as upload a .zip file with your code.
:::

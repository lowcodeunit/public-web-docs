---
title: Guides - e-Commerce - Forestry, 11ty, JamCart - Connect Forestry
hide_title: true
sidebar_label: Connect Forestry
keywords:
    - websites
    - applications
    - azure
    - micro-frontends
    - e-commerce
hide_table_of_contents: true
---

# Connect Forestry

When starting a new project, you can always give yourself a leg up by having data to work with right away.  This allows you to build with real data in mind, making it easier to setup layouts, communicate with the team, and will save you time in the long run.  For this guide and project, we are going to use Forestry as the Content Management System (CMS).  Let's get this set up now with some initial data for use while we create our e-commerce project.

You'll need to visit [forestry.io](https://forestry.io/) to create an account and access your Forestry dashboard.  Once in the dashboard you'll be able to click `Add Site` and complete the new site wizard.  We are using 11ty, so select that on the initial screen:

![new-site-11ty-static-site-generator](/img/screenshots/forestry/new-site-11ty-static-site-generator.png)

Next you'll choose your Git provider, GitHub.

![new-site-github-git-provider](/img/screenshots/forestry/new-site-github-git-provider.png)

Now choose the repository that contains your LowCodeUnit project after authorizing Forestry to access your GitHub applications (identical to the flow from the create project flow).
<!-- 
![new-site-github-repository](/img/screenshots/forestry/new-site-github-repository.png)

Connect our new respository
Now that we have our site connected to Forestry, we need to start adding data. First step: define the shape of our data. Hit "Front Matter" in the sidebar and then click "Add Template" in the top corner.

Select "Create new"

Name our template "Product"
We now have a blank template for our data and can add new fields to structure our documents from here. We'll keep it simple, just adding fields for title, price, image, and description. In the end, we it should look like this:

Configured Template

Once we have a template and need to tell Forestry where to save files. Click "Configure sidebar", "Add Section", and then choose "Directory". We do want multiple products on our website after all!

We'll call this "Products" and store our products in "src/products". It is important to change "File Match" to only match markdown files: we'll use other files in this directory to configure 11ty and we don't want those accidentally getting caught up. Finally, select the template "Product" we created earlier and we're good to go. It should look like this:

Configured Directory

Hit "Done" and then "Save" our changes to the sidebar. If we did this correctly, we'll see "Products" appear in the sidebar off the left. This is where our work finally starts to pay off. We have a functioning CMS and can start to create our products.

First Product

Once you have finished creating your products, remember to do git pull on your local repository! Forestry is a git-based CMS, so every change is immediately committed to your repository. -->
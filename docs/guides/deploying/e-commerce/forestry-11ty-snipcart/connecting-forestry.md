---
title: Guides - e-Commerce - Forestry, 11ty, Snipcart - Connect Forestry
hide_title: true
sidebar_label: Connect Forestry
pagination_label: Guides - Deploying - e-Commerce - Forestry, 11ty, Snipcart - Connect Forestry
keywords:
    - websites
    - applications
    - azure
    - micro frontends
    - e-commerce
hide_table_of_contents: true
---

# Connect Forestry

When starting a new project, you can always give yourself a leg up by having data to work with right away.  This allows you to build with real data in mind, making it easier to set up layouts, communicate with the team, and will save you time in the long run.  For this guide and project, we are going to use Forestry as the Content Management System (CMS).  Let's get this set up now with some initial data for use while we create our e-commerce project.

One of the reasons we really like Forestry is that, like our own technology, Forestry works like a virtual developer, controlling its workflow through Git in the same way developers would.  This prevents vendor lock-in scenarios, and immediately frees your CMS data to your enterprise.  

## Set Up Forestry

You'll need to visit [forestry.io](https://forestry.io/) to create an account and access your Forestry dashboard.  Once in the dashboard you'll be able to click `Add Site` and complete the new site wizard.  We are using 11ty, so select that on the initial screen:

![new-site-11ty-static-site-generator](https://www.fathym.com/img/screenshots/forestry/new-site-11ty-static-site-generator.png)

Next you'll choose your Git provider, GitHub.

![new-site-github-git-provider](https://www.fathym.com/img/screenshots/forestry/new-site-github-git-provider.png)

Now choose the repository that contains your Fathym project after authorizing Forestry to access your GitHub applications (identical to the flow from the create project flow, this time for Forestry's access).

![new-site-github-repository](https://www.fathym.com/img/screenshots/forestry/new-site-github-repository.png)

## Configure Forestry

Now that our Fathym project is connected to Forestry, we can seed some data.  You'll need to select `Front Matter` from the sidenav and select to `Add Template`.  Now select the `blank template` and choose the `Fields and big content area` option.  Name your template `Products` and then click `Create Template`.  Now we've got an empty template to which we can start to add fields.  You can add whatever fields that make sense for your product structure, we are going to use `Name`, `Description`, `Price`, and `Image` for this example.  Make sure to click save after adding your fields, and your template will look like this:

![product-template-fields](https://www.fathym.com/img/screenshots/forestry/product-template-fields.png)

The template is set up, and it's now time to set up the sidebar.  There is a nice wizard that walks you through initial setup, the next step would be to click `Configure sidebar` or navigate to `Settings > Sidebar`.  We'll be creating this as a collection of products, so select `Directory`.  Give the directory a Label of `Products` and set the Content Directory to `src/products`.  We need to change File Match to `**/*.md` so that it only matches markdown files, this way other files we use to configure 11ty won't get picked up. Finally, select the `Product` template created earlier.  Click done and remember to save.  Yours will look something like this:

![products-directory](https://www.fathym.com/img/screenshots/forestry/products-directory.png)

`Products` will show in the sidebar to the left.  This is where you can start to add and manage your products. You now have a functioning CMS and can create some products.  To start, create a first product and how ever many more you want before moving on.

![first-product](https://www.fathym.com/img/screenshots/forestry/first-product.png)

Once you have finished creating your products, remember to do git pull on your local repository! Forestry is a git-based CMS, so every change is immediately committed to your repository.

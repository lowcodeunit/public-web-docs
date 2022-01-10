---
title: Guides - e-Commerce - Forestry, 11ty, Snipcart - Setup 11ty
hide_title: true
sidebar_label: Setup 11ty
pagination_label: Guides - Deploying - e-Commerce - Forestry, 11ty, JamCart - Setup 11ty
keywords:
    - websites
    - applications
    - azure
    - micro frontends
    - e-commerce
hide_table_of_contents: true
---

# Setup 11ty

The next step we like to execute is roughing in our code.  This is the phase in which we setup our workspace, install initial frameworks/dependencies, and prepare to start our custom development.  Start by cloning your new project repository, using the shell of your choosing or your favorite IDE.  We like to use [VS Code](https://code.visualstudio.com/download) for our open source projects, and it will work perfect for you to get through this guide as well.  

## Clone Repository

With VS Code open, press `CTRL + SHIFT + p` to open the Command Palette, type `clone` into the search and select the `Git: Clone` option from the list.  From there, you can provide the Git repository URL for your project (found in the details page of your LowCodeUnit Project) or pick the repository source using the interactive options.

After the project is cloned, choose to open it in VS Code.  Now we can rough in the code for our project.  Let's start by setting the project up with node and 11ty:

## Configure Project

```cli
npm init -y
npm install --save-dev @11ty/eleventy
```

This will create a package.json file for you that is used to describe your project. Take a look through it and make sure the defaults are ok.

Now create a new file at the root of the project called `.gitignore` so we don't accidentally commit node_modules, and add the following contents:

```.gitignore
# Dependencies
/node_modules
```

Now you can go ahead and commit your changes with the Git cli, though I prefer the visual interface of VS Code.  Click the `Source Control` icon from the left activity bar in VS Code, then enter your commit message `Initial Commit` and click the check mark.  When you're ready to push, click the triple dots and `push`.

Now that our repository is setup on GitHub, we can get Forestry connected.

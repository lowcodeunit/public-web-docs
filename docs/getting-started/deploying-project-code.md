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

# Deploying Code

With the initial project created, you should now see it in your dashboard, with an `in_progress` build running on GitHub actions.  This first build will fail if your starting from scratch following this walkthrough, as we don't have our build properly set up (more on that in a second).  There are many different ways to get your code into the LCU Distributed File System, the initial setup leverages GitHub Action artifacts to maintain built assets.

If you used an existing repository with code inside it, then that will have built if it has the appropriate build script and output folder configured.  If your starting from scratch, let's take a look at how we can get some code deployed.

## Updating your Application

Go ahead and clone your git repository to your local environment so that you can edit it.  While you can use any text editor to make changes, we recommend using an Integrated Development Environment (IDE) to make edits.  A great option, available across platforms, is [VS Code](https://code.visualstudio.com/download).  Once you have your repository cloned you can start to make edits.  First, we need to get our package.json created by running `npm init` and completing the prompts (you can just press enter through everything).

Create a new index.html file at the root alongside the package.json file.  Fill the contents of the index.html file with something like the following

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My First LCU Application</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>My First LCU Application</h1>
</body>
</html>
```

Now we need to setup a simple build script that will take our index.html file and move it to the specified output folder.  Let's get some build tools installed with `npm i rimraf --save-dev`, then open your package.json file and update the scripts section with a new 'build' script

```json
{
    ...
    "build": "rimraf build && mkdir build && cp index.html build/index.html -f"
    ...
}
```

Finally add a .gitignore file at the root with a couple lines of content to ignore our build directory when checking in code.

```console
/build
/node_modules
```

Your finished package.json file and repository should look something like this:

![First Project Package JSON](/img/screenshots/first-project-package-json.png)

Checkin and push the changes to your repository, and you'll notice a new build kicks off that should complete successfully.  Once successful, click on the <img src="/img/screenshots/deploy-latest-button.png" class="text-image" /> button to deploy your code to your site.  Once the deploy is complete, select <img src="/img/screenshots/launch-button.png" class="text-image" /> for your project to test it out.

![My First Project Running](/img/screenshots/my-first-project-running.png)

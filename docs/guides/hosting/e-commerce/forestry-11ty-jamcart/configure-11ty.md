---
title: Guides - e-Commerce - Forestry, 11ty, JamCart - Configure 11ty
hide_title: true
sidebar_label: Configure 11ty
pagination_label: Guides - Deploying - e-Commerce - Forestry, 11ty, JamCart - Configure 11ty
keywords:
    - websites
    - applications
    - azure
    - micro frontends
    - e-commerce
hide_table_of_contents: true
---

# Configure 11ty

Let's get back to the creative part and start building up our frontend.  For this we'll start to configure the 11ty setup we completed earlier and get it ready and working with Forestry.

## 11ty Config

To start, we need to create a new file `.eleventy.js` in the root of our LowCodeUnit project.  We'll seed it with some code that unlocks the `uploads` folder from Forestry and the `assets` folder we'll use in a minute. We also need to passthrough `package.json` to support the NPM packaging process when it comes to deploying our project along with a few other changes for our setup:

```javascript
module.exports = (config) => {
  //  Passthrough the uploads folder used by forestry
  config.addPassthroughCopy('uploads');

  //  Passthrough the assets folder used for our css, favicon and other assets
  config.addPassthroughCopy('assets');

  //  Passthrough the package.json file
  config.addPassthroughCopy('package.json');

  //  Configure our money filter so the price will be properly displayed
  config.addFilter('money', function (value) {
    const formatter = new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
    });

    return formatter.format(value);
  });

  //  Change the default folder used by 11ty from root to src
  return {
    dir: {
      input: 'src',
    },
  };
};
```

## Project Config

In addition to this, we need to update our .gitignore file and add in the `_site` folder that 11ty compiles into:

```.gitignore
# Dependencies
/node_modules

# 11ty
_site
```

Now we can add a couple of scripts to our package.json file so that we can build and test our application.

```json
{
  "build": "eleventy",
  "start": "eleventy --serve",
  "deploy": "npm version patch && npm run build && npm publish ./_site --access public"
}
```

These scripts that we add will allow you to run `npm run build` to build your project, and `npm start` to start the development server. Since we don't have a home page built these commands will only give you errors.  Next we'll jump in and get our home page going as well as the other pages.

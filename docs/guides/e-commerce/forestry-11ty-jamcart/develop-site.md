---
title: Guides - e-Commerce - Forestry, 11ty, JamCart - Develop Site
hide_title: true
sidebar_label: Develop Site
keywords:
    - websites
    - applications
    - azure
    - micro-frontends
    - e-commerce
hide_table_of_contents: true
---

# Develop Site

Alright, with setup and configuration out of the way we can get into the more fun part and bring our store to life.  For this we'll need a main page that lists our product directories as categories, another page that shows the products within a chosen category and finally a product details page for the selected product.  In addition we'll need to hook up our shopping cart and checkout with JamCart.  So before we head into this part, head over to [JamCart](https://jamcart.io/) and create your account.  Once the account is created, select the `Install` link in the left sidebar (more on JamCart in a minute).

## Main Layout

All of the pages we create should share an html skeleton with site navigation and other base information.  Let's start by creating our 11ty main layout using one of the many template engines supported by 11ty, Liquid.  When layouts are referenced in 11ty, it looks for an `_includes` folder inside our input directory (in our case `src`). Create a file `src/_includes/main.liquid` and populate it with the following:

```html
<!doctype html>

<html lang="en">
  <head>
    <title>{{ title }}</title>

    <meta charset="utf-8" />

    <meta name="description" content="{{ description }}" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="/assets/css/main.css" />

    <script type="module" data-currency="USD" data-id="aPv8r8k3Gk" src="https://api.jamcart.io/v1/jamcart.js"></script>
  </head>

  <body>
    <header>
      <p id="site-logo">
        <a href="/">LowCodeUnit Acme Shop</a>
      </p>

      <jamcart-open>
        My Cart (<jamcart-cart-count></jamcart-cart-count>)
      </jamcart-open>
    </header>

    {{ content | safe }}
  </body>
</html>
```

This is standard html setup with only a few minor adjustments.  You'll notice the `title` and `description` values withing double curly braces, this is how data is injected with Liquid.  The `content` value is a special variable provided by 11ty and is how layouts are nested inside of each other, its `safe` filter simply lets Liquid know that no html escaping is necessary.

The other additions are in place to support some of the JamCart experience.  For starters, the JamCart script is installed in the `<head>` tag of the html, take a moment to grab your account id from the `data-id` in the script on the install page of JamCart then replace `INSERT_JAMCART_ACCOUNT_ID` with the located account id.  Next you'll notice the html (`<jamcart-open></jamcart-open>`) that is responsible for opening the shopping cart.

This wraps up our main layout, now we can dive into creating our pages.
<!-- 
## The Categories Page

The next thing we will do is put together a page for our categor -->

<!-- 
To create our first page, create src/index.liquid. This will map to the homepage of our website and should look like this:

```html
---
title: 11ty, Forestry, and Jamcart E-Commerce Demo 
description: A demonstration of how to easily build an e-commerce website.
layout: global.liquid
---

<h1 id="category-title">Our Products</h1>

<ul id="products">
  {% for product in collections.product %}
    <li>
      <a href="{{ product.url }}">
        <img alt="" src="{{ product.data.image }}" />
        {{ product.data.title }}
      </a>
      <p class="price">{{ product.data.price | money }}</p>
    </li>
  {% endfor %}
</ul>
```

The part in front bracketed by --- is referred to as "front matter". Data can be written here either in YAML, as demonstrated here, or JSON format, allowing us to associate data with our layout or markdown files. We define title and description here because our own layout file uses these to render the page title and meta description. layout is special and tells 11ty which layout to use, relative to the "_includes" folder. This is the file we've already created for our overall site layout.

|money just runs the filter we defined in .eleventy.js earlier. Its sole purpose is to take a decimal number and format it as currency for display.

collections.product is a special array maintained by 11ty and contains all documents with the tag "product". While we have products, we haven't actually tagged them as a "product" yet so this is currently empty. Once we have documents in this collection, each item returned will contain metadata about the document, including the url where the output lives, and everything we defined in front matter is accessible under data.

To populate this collection, we can add tags: product to each of our products. Adding that to each file individually would be tedious but we can instead take advantage of 11ty's data cascade. If we define a file name products.json inside of our "products" folder, 11ty will use that as default values for all documents inside the folder.

```json
{
  "layout": "product.liquid",
  "tags": "product" 
}
``` -->

Go ahead and try out your site, though don't expect anything too stunning.

<!-- 
At this point, you can actually open your website and see a homepage! Feel free to grab the files from the demo repository to add a little style.

The final step is to create the layout for our product pages. We already referenced it products.json, so just create src/_includex/product.liquid:

```html
---
layout: global.liquid
---

<div id="product-view">
  <img alt="" src="{{ image }}" height="959" width="640" />

  <form class="body">
    <h1>{{ title }}</h1>
    <p class="price">{{ price | money }}</p>
    <h2>Product Description</h2>
    <p>{{ description }}</p>
    <p>
      <label>
        Size
        <select name="Size">
          <option>Small</option>
          <option selected>Medium</option>
          <option>Large</option>
        </select>
      </label>
    </p>
    <div>
      <jamcart-add
        include-form-data
        image="{{ image }}"
        name="{{ title }}"
        price="{{ price }}"
        url="{{ page.url }}"></jamcart-add>
    </div>
  </form>
</div>
```

Defining layout at the top here allows us to chain layouts. Our data files will get fed in to this and then the results of that get fed into global.liquid, giving us our top navigation bar. #ADD TO CART#, like the #OPEN CART# before, is just a reminder to ourselves to come back and fix this. We'll be replacing when we install JamCart.

# Commerce with JamCart

Now that we can open a shopping cart, we need the ability to add items to it. Open up src/_includes/product.liquid and replace #ADD TO CART# with:

```html
<jamcart-add
  include-form-data
  image="{{ image }}"
  name="{{ title }}"
  price="{{ price }}"
  url="{{ page.url }}"></jamcart-add>
```

This creates an "Add To Cart" button and passes the parameters to JamCart. page here is a special variable supplied by 11ty that we use to pass the current page's url. include-form-data instructs JamCart to include all data from the containing form. That includes the size `<select>` we included in this template.

We just have a few steps left with JamCart:

Whitelist the domain our code is hosted on
Create a Shipping Method
We can't whitelist the domain until we know which domain to whitelist, so we'll come back to that after uploading our code to Netlify.

Creating a new Shipping Method just requires opening the dashboard, going to "Shipping", and pressing "Create".

New Shipping Method

Here, we've created free ground shipping for anyone inside the USA. Be aware that customers will not be allowed to checkout if they have an item that requires shipping and you have not yet created a shipping method that includes their address. -->

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

Alright, with setup and configuration out of the way we can get into the more fun part and bring our store to life.  For this we'll need a main page that lists our products directories as categories and a page for the product details of the selected product.  In addition we'll need to hook up our shopping cart and checkout with JamCart.  So before we head into this next section, head over to [JamCart](https://jamcart.io/) and create your account.  Once the account is created, select the `Install` link in the left sidebar (more on JamCart in a minute).

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

    <script type="module" data-currency="USD" data-id="INSERT_JAMCART_ACCOUNT_ID" src="https://api.jamcart.io/v1/jamcart.js"></script>
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

This is standard html setup with only a few minor adjustments.  You'll notice the `title` and `description` values within double curly braces, this is how data is injected with Liquid.  The `content` value is a special variable provided by 11ty and is how layouts are nested inside of each other, its `| safe` filter simply lets Liquid know that no html escaping is necessary.

The other additions are in place to support some of the JamCart experience.  For starters, the JamCart script is installed in the `<head>` tag of the html, take a moment to grab your account id from the `data-id` in the script on the install page of JamCart then replace `INSERT_JAMCART_ACCOUNT_ID` with the located account id.  Next you'll notice the html (`<jamcart-open>...</jamcart-open>`) that is responsible for opening the shopping cart.

This wraps up our main layout, now we can dive into creating our pages.

## Products List

Creating pages is very straightforward, simply create a new file at `src/index.liquid`.  Then use the following as your homepage contents:

```html
---
title: Acme shop with LowCodeUnit, 11ty, Forestry, and Jamcart 
description: Simple demo of an e-commerce site.
layout: main.liquid
---

<h1 id="category-title">Products</h1>

<ul id="products">
  {% for product in collections.product %}
    <li>
      <a href="{{ product.url }}">
        <img alt="" src="{{ product.data.image }}" />

        {{ product.data.name }}
      </a>

      <p class="price">{{ product.data.price | money }}</p>
    </li>
  {% endfor %}
</ul>
```

A full understanding of the Liquid templating language is outside the scope of this guide, what you will notice is that in the front matter (the part framed in by '---') the `title` and `description` needed by our main layout, and the layout `main.liquid` let's 11ty know to render our page within the main layout.  You'll see the `| money` filter which formats the price into a currency.

The way that 11ty works, `collections.product` is a special property that contains an array of any document tagged with `product`.  If you've already tried running the site, and didn't see any products, that's because we have haven't tagged any yet.  It may seem like a daunting task to apply these tags manually to every file, 11ty agreed.  So instead, let's use the data cascading feature by creating a new file `src/products/proudcts.json` that 11ty will use, for all documents in the products folder, to apply default tags:

```json
{
  "layout": "product.liquid",
  "tags": "product" 
}
```

Go ahead and try out your site by running `npm start`, though don't expect anything too stunning.  You'll need to fix up our CSS to get the site looking like you want, start by creating a new file at `assets/css/main.css` and then filling it in with the css of your choosing.  If your feeling uninspired, you can try out our basic css

```css
Some basic css
```

With the main page complete, let's set our sights on the product details page.

## Product Details

The last step is to build the layout for our product details page.  We hooked part of this up in the products.json file, now all that's left is to create the file `src/_includes/product.liquid` and fill it with the following:

```html
---
title: {{ name }}
layout: main.liquid
---

<div id="product-view">
  <img alt="" src="{{ image }}" height="959" width="640" />

  <form class="body">
    <h1>{{ name }}</h1>

    <p class="price">{{ price | money }}</p>

    <h2>Product Description</h2>

    <p>{{ description }}</p>

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

Much like before, we are using the main layout to load in our product details and setting the title to the name of the product.  Everything else is pretty standard, with the exception of the `<jamcart-add>...</jamcart-add>` html which is the JamCart hook for adding an item into a shopping cart.  The `page` variable is an 11ty hook into the current page's information (such as `url`).  The use of JamCart's `include-form-data` attribute instructs JamCart to send any other data collected in the form along in the cart.  This would allow you to add any additional form inputs like size or color.
---
title: Application Processors
hide_title: true
sidebar_label: Processors
pagination_label: Guides - Applications - Processors
keywords:
    - applications
    - routes
    - website
    - processors
hide_table_of_contents: true
---

# Application Processors

Once a route has been selected, an application processor is assigned to handle your request.  Many processor types have a specific Fathym LCU type as well that further isolates how the processor works.

## View Package Processors

When delivering a visual interface (JS/CSS/HTML) to your user, leverage a view package processor.  This provides modern web standards in caching, edge CDN, and can fully leverage the modifier system.

### NPM LCU

The NPM LCU provides a way to leverage NPM packages as the source of content for your view package.  The system will load the NPM package into the DFS (distributed file system), and then deliver its contents to your end users as defined by your routes.

### GitHub LCU

The GitHub LCU provides a way to leverage GitHub artifacts as the source of content for your view package.  The system will load the GitHub artifact into the DFS (distributed file system), and then deliver its contents to your end users as defined by your routes.

## Proxy Processors

Serving as a reverse proxy, the proxy processor makes it possible to access your APIs without divulging sensitive security keys.  This can also serve as a work around for many cross-origin request errors.

### API LCU

The API LCU allows for the configuration of a reverse proxy to API instances like Azure Functions, AWS lambdas, or almost any other API.

### SPA LCU

The SPA LCU allows for the configuration of a reverse proxy to existing applications.  This is used most often in our local development environments, but in theory should work for almost any other site.

## Redirect Processors

When selected, the redirect processor will allow you to redirect any matched route to the URL of your choosing.  Use a 301, 302, 307 or 308 redirect code as configured.

<!-- 
## OAuth Processors

### GitHub OAuth LCU -->

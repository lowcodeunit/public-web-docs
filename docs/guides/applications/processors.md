---
title: Application Processors
hide_title: true
sidebar_label: Processors
keywords:
    - applications
    - routes
    - website
    - processors
hide_table_of_contents: true
---

# Application Processors

Once a route has been selected, an application processor is then assigned to handle your request.  Many processor types have a specific LCU (LowCodeUnit) type as well that further isolates how the processor works.

## View Package Processors

When delivering a visual interface (JS/CSS/HTML) to your user, leverage a view package processor.  This provides moder web standards in caching, edge CDN, and can fully leverage the modifier system.

### NPM LCU

The NPM LCU provides a way to leverage NPM packages as the source of content for your view package.  The system will load the NPM package into the DFS (distributed file system), and then deliver its contents to your end users as defined by your routes.

### GitHub LCU

The GitHub LCU provides a way to leverage GitHub artifacts as the source of content for your view package.  The system will load the GitHub artifact into the DFS (distributed file system), and then deliver its contents to your end users as defined by your routes.

## Proxy Processors

### API LCU

### SPA LCU

## Redirect Processors

When selected, the redirect processor will allow you to redirect any matched route to the URL of your choosing.  Use a 301, 302, 307 or 308 redirect code as configured.

## OAuth Processors

### GitHub OAuth LCU

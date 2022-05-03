---
title: Updating View Packages
hide_title: true
sidebar_label: Updating Views
pagination_label: Guides - Applications - Updating Views
keywords:
    - applications
    - routes
    - website
    - updating
    - view packages
hide_table_of_contents: true
---

# Updating View Packages

Currently, view packages are the only updatable package types from our UI.

## Manual Updates

There are two ways to update your applications to the latest source control release for either NPM or GitHub.  

When configuring a view package, you can set the version to `latest` or for NPM any valid tag.  In this case, when you save the app or use the unpack button, your app will update to the appropariate version (shown in current version) based on the provided value.

Alternatively, you can set the version to a specific version/build number, to ensure that it is locked in on a known working version.  In this case, you will have to manually update the version to the next version you want pinned in the edit screen of the application.  Upon saving, the configured version number will be deployed.

## Automatic Updates

Coming soon

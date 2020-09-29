---
template: blog-post
title: Weather app
path: /20200923-0011
date: 2020-09-23 00:11
metaDescription: weatherApp
---
Finally worked on the styling for the weather app.  Updated the regular cards, but still have to fiddle around with the main one.  

Decided to try to deploy the app.  it's my first deployment for a create-react-app, so had some stumbles.  I originally wanted to deploy the build folder to the gh-pages branch, which did, but there was nothing visible on the layout.  Tried deploying it the regular way within a /docs folder, but that wasn't working either.  Encountered an issue where the relative path isn't set, so I had to add the url so the assets could load correctly.  Components were showing up but there were issues with the API call.  I needed to do it over 443, so changed the urls to use HTTPS protocol and it finally worked.  Tomorrow, will revert to the better deployment with the separate branch.